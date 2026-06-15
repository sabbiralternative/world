import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useCurrentBets } from "../../../hooks/currentBets";
import useBalance from "../../../hooks/balance";
import { useExposure } from "../../../hooks/exposure";
import {
  setPlaceBetValues,
  setPrice,
  setRunnerId,
  setStake,
} from "../../../redux/features/events/eventSlice";
import { API, Settings } from "../../../api";
import { v4 as uuidv4 } from "uuid";
import { isBetDelay, isDelay } from "../../../utils/isBetDelay";
import { AxiosJSEncrypt } from "../../../lib/AxiosJSEncrypt";
import toast from "react-hot-toast";
import {
  handleDecreasePrice,
  handleIncreasePrice,
} from "../../../utils/editBetSlipPrice";
import { useGetEventDetailsQuery } from "../../../redux/features/events/events";

const BetSLip = () => {
  const { closePopupForForever } = useSelector((state) => state.global);
  const [isCashOut, setIsCashOut] = useState(false);
  const [profit, setProfit] = useState(0);
  const { eventTypeId } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { eventId } = useParams();

  const { refetch: refetchCurrentBets } = useCurrentBets(eventId);
  const { refetch: refetchBalance } = useBalance();
  const { refetch: refetchExposure } = useExposure(eventId);
  const { placeBetValues, price, stake, predictOdd } = useSelector(
    (state) => state?.event,
  );
  const { data: eventData } = useGetEventDetailsQuery(
    { eventTypeId, eventId },
    {
      pollingInterval: 1000,
    },
  );
  const currentPlaceBetEvent = eventData?.result?.find(
    (item) => item?.id === placeBetValues?.marketId,
  );
  const buttonValues = localStorage.getItem("buttonValue");
  let parseButtonValues = [];
  if (buttonValues) {
    parseButtonValues = JSON.parse(buttonValues);
  }

  useEffect(() => {
    dispatch(setPrice(parseFloat(placeBetValues?.price)));
    dispatch(
      setStake(
        placeBetValues?.totalSize > 0
          ? placeBetValues?.totalSize?.toFixed(2)
          : null,
      ),
    );
    setIsCashOut(placeBetValues?.cashout || false);
  }, [placeBetValues, dispatch]);

  let payload = {};
  if (price) {
    if (placeBetValues?.btype === "SPORTSBOOK") {
      payload = {
        price: price,
        side: placeBetValues?.side,
        selectionId: placeBetValues?.selectionId,
        btype: placeBetValues?.btype,
        placeName: placeBetValues?.placeName,
        eventTypeId: placeBetValues?.eventTypeId,
        betDelay: currentPlaceBetEvent?.betDelay,
        marketId: placeBetValues?.marketId,
        maxLiabilityPerMarket: placeBetValues?.maxLiabilityPerMarket,
        maxLiabilityPerBet: placeBetValues?.maxLiabilityPerBet,
        totalSize: stake,
        isBettable: placeBetValues?.isBettable,
        eventId: placeBetValues?.eventId,
        cashout: isCashOut,
        b2c: Settings.b2c,
      };
    } else {
      payload = {
        betDelay: currentPlaceBetEvent?.betDelay,
        btype: placeBetValues?.btype,
        eventTypeId: placeBetValues?.eventTypeId,
        marketId: placeBetValues?.marketId,
        price: price,
        selectionId: placeBetValues?.selectionId,
        side: placeBetValues?.side,
        totalSize: stake,
        maxLiabilityPerMarket: placeBetValues?.maxLiabilityPerMarket,
        isBettable: placeBetValues?.isBettable,
        maxLiabilityPerBet: placeBetValues?.maxLiabilityPerBet,
        eventId: placeBetValues?.eventId,
        cashout: isCashOut,
        b2c: Settings.b2c,
      };
    }
  }

  /* Handle bets */

  const handleOrderBets = async () => {
    setLoading(true);
    const payloadData = [
      {
        ...payload,

        nounce: uuidv4(),

        apk: closePopupForForever ? true : false,
        isbetDelay: isBetDelay(placeBetValues),
      },
    ];

    let delay = 0;

    if (isDelay(placeBetValues)) {
      if (
        eventTypeId == 4 &&
        placeBetValues?.btype === "MATCH_ODDS" &&
        price > 3 &&
        placeBetValues?.name?.length === 2
      ) {
        delay = 9000;
      }
      if (
        eventTypeId == 4 &&
        placeBetValues?.btype === "MATCH_ODDS" &&
        price > 7 &&
        placeBetValues?.name?.length === 3
      ) {
        delay = 9000;
      } else {
        delay = Settings?.bet_delay ? currentPlaceBetEvent?.betDelay * 1000 : 0;
      }
    }

    // Introduce a delay before calling the API
    setTimeout(async () => {
      try {
        // const res = await createOrder(payloadData).unwrap();
        const { data } = await AxiosJSEncrypt.post(API.order, payloadData);

        if (data?.success) {
          setLoading(false);
          refetchExposure();
          refetchBalance();
          dispatch(setRunnerId(null));
          dispatch(setPlaceBetValues(null));
          refetchCurrentBets();

          dispatch(setStake(null));
          toast.success(data?.result?.result?.placed?.[0]?.message);
        } else {
          setLoading(false);
          toast.error(
            data?.error?.status?.[0]?.description || data?.error?.errorMessage,
          );
        }
      } catch {
        toast.error("Something went wrong. Please try again.");
      }
    }, delay);
  };

  useEffect(() => {
    if (
      price &&
      stake &&
      placeBetValues?.back &&
      placeBetValues?.btype === "MATCH_ODDS"
    ) {
      const multiply = price * stake;
      setProfit(formatNumber(multiply - stake));
    } else if (
      price &&
      stake &&
      placeBetValues?.back &&
      (placeBetValues?.btype === "BOOKMAKER" ||
        placeBetValues?.btype === "BOOKMAKER2")
    ) {
      const bookmaker = 1 + price / 100;
      const total = bookmaker * stake - stake;

      setProfit(formatNumber(total));
    } else if (price && stake && placeBetValues?.btype === "FANCY") {
      const profit =
        (parseFloat(placeBetValues?.bottomValue) * parseFloat(stake)) /
        parseFloat(stake);
      setProfit(profit);
    }
  }, [price, stake, profit, placeBetValues, setProfit]);

  /* Format number */
  const formatNumber = (value) => {
    const hasDecimal = value % 1 !== 0;
    // value?.toFixed(2)
    return hasDecimal ? parseFloat(value?.toFixed(2)) : value;
  };

  const handleCancelBet = () => {
    dispatch(setRunnerId(null));
    dispatch(setPlaceBetValues(null));
    dispatch(setStake(null));
  };

  const handleButtonValue = (value) => {
    setIsCashOut(false);
    const buttonValue = Number(value);
    const prevStake = !stake ? null : Number(stake);

    if (prevStake === null) {
      dispatch(setStake(buttonValue));
    }
    if (prevStake >= 0) {
      dispatch(setStake(buttonValue + prevStake));
    }
  };

  return (
    <div
      id="__BVID__13084___BV_modal_outer_"
      style={{ position: "absolute", zIndex: 1040 }}
    >
      <div
        id="__BVID__13084"
        role="dialog"
        aria-labelledby="__BVID__13084___BV_modal_title_"
        aria-describedby="__BVID__13084___BV_modal_body_"
        className="modal fade show modal-placebet"
        aria-modal="true"
        style={{ display: "block" }}
      >
        <div className="modal-dialog modal-md">
          <span tabIndex={0} />
          <div
            id="__BVID__13084___BV_modal_content_"
            tabIndex={-1}
            className="modal-content"
          >
            <header
              id="__BVID__13084___BV_modal_header_"
              className="modal-header"
            >
              <h5 id="__BVID__13084___BV_modal_title_" className="modal-title">
                Bet Slip
              </h5>
              <button
                onClick={handleCancelBet}
                type="button"
                aria-label="Close"
                className="close"
              >
                ×
              </button>
            </header>
            <div id="__BVID__13084___BV_modal_body_" className="modal-body">
              {" "}
              <div className="bet-slip-container">
                {" "}
                <div
                  className={`bet-slip-box ${placeBetValues?.back ? "back" : "lay"}`}
                >
                  <div className="bet-slip">
                    <div className="bet-nation">
                      <span>{placeBetValues?.name.join(" V ")}</span>
                    </div>
                    <div className="bet-team">
                      <span
                        title="Royal Challengers Bengaluru  "
                        className="bet-team-name"
                      >
                        {placeBetValues?.selectedBetName}
                      </span>
                      <span>{placeBetValues?.marketName}</span>
                    </div>
                  </div>
                  <div className="bet-amount-box">
                    <div>
                      <div className="bet-input back-border">
                        <input
                          type="text"
                          onChange={(e) => {
                            dispatch(setStake(e.target.value));
                            setIsCashOut(false);
                          }}
                          placeholder={`Max bet: ${placeBetValues?.maxLiabilityPerBet}`}
                          value={stake || ""}
                          className="form-control"
                        />
                      </div>
                      <div className="odds-box">
                        <input
                          onChange={(e) => {
                            dispatch(setPrice(e.target.value));
                            setIsCashOut(false);
                          }}
                          value={price}
                          type="text"
                          className="form-control"
                        />
                        {!placeBetValues?.isWeak && (
                          <a
                            onClick={() => {
                              handleIncreasePrice(
                                price,
                                placeBetValues,
                                dispatch,
                                setPrice,
                              );
                              setIsCashOut(false);
                            }}
                          >
                            <img
                              src="https://wver.sprintstaticdata.com/v224/static/front/img/arrow-down.svg"
                              className="arrow-up"
                            />
                          </a>
                        )}
                        {!placeBetValues?.isWeak && (
                          <a
                            onClick={() => {
                              handleDecreasePrice(
                                price,
                                placeBetValues,
                                dispatch,
                                setPrice,
                              );
                              setIsCashOut(false);
                            }}
                          >
                            <img
                              src="https://wver.sprintstaticdata.com/v224/static/front/img/arrow-down.svg"
                              className="arrow-down"
                            />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div
                    className="bet-buttons"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(4, 1fr)",
                      gap: "2px",
                    }}
                  >
                    {parseButtonValues?.slice(0, 6)?.map((button, i) => (
                      <button
                        key={i}
                        onClick={() => handleButtonValue(button?.value)}
                        className="btn btn-primary"
                      >
                        <span> {button?.value}</span>
                      </button>
                    ))}
                  </div>
                  <div className="place-bet-btn">
                    <button
                      onClick={() => {
                        dispatch(setStake(null));
                      }}
                      className="btn btn-danger"
                    >
                      Clear
                    </button>
                    <button
                      onClick={handleOrderBets}
                      className="btn btn-primary btn-block"
                      disabled={!stake || !price}
                    >
                      <span>Place Bet</span>
                    </button>
                  </div>
                </div>
                {(placeBetValues?.btype === "MATCH_ODDS" ||
                  placeBetValues?.btype === "BOOKMAKER" ||
                  placeBetValues?.btype === "BOOKMAKER2") && (
                  <div className="container-fluid">
                    {predictOdd?.map((predictOdd, i) => {
                      return (
                        <div key={i} className="row row5 mt-2">
                          <div className="col-6">
                            <span>{predictOdd?.name}</span>
                          </div>{" "}
                          <div
                            className={`col-3 text-center ${
                              placeBetValues?.exposure &&
                              placeBetValues?.exposure > 0
                                ? "text-success"
                                : "text-danger"
                            }`}
                          >
                            <span>
                              {predictOdd?.exposure !== 0 &&
                                predictOdd?.exposure}
                            </span>
                          </div>{" "}
                          <div
                            className={`col-3 text-right ${
                              predictOdd?.updatedExposure &&
                              predictOdd?.updatedExposure > 0
                                ? "text-success"
                                : "text-danger"
                            }`}
                          >
                            <span className="">
                              {" "}
                              {predictOdd?.updatedExposure}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
          <span tabIndex={0} />
        </div>
      </div>
      <div id="__BVID__13084___BV_modal_backdrop_" className="modal-backdrop" />
    </div>
  );
};

export default BetSLip;
