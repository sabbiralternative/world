import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useExposure } from "../../../hooks/exposure";
import { useGetLadderMutation } from "../../../redux/features/events/events";
import {
  setPlaceBetValues,
  setRunnerId,
} from "../../../redux/features/events/eventSlice";
import toast from "react-hot-toast";
import BetSLip from "./BetSLip";

const Fancy = ({ data }) => {
  const fancyData = data?.filter(
    (fancy) =>
      fancy.btype === "FANCY" &&
      fancy.tabGroupName === "Normal" &&
      fancy?.visible == true,
  );
  const [marketName, setMarketName] = useState("");
  const [ladderData, setLadderData] = useState([]);
  const { eventId } = useParams();

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { runnerId } = useSelector((state) => state.event);
  const { data: exposure } = useExposure(eventId);
  const [getLadder] = useGetLadderMutation();

  const handleBetSlip = (betType, games, runner, price, bottomValue) => {
    if (token) {
      let selectionId;
      let runnerId;
      let eventTypeId;
      if (games?.status !== "OPEN") return;
      if (!price) {
        return;
      }

      let pnlBySelection;
      const updatedPnl = [];

      if (exposure?.pnlBySelection) {
        const obj = exposure?.pnlBySelection;
        pnlBySelection = Object?.values(obj);
      }

      if (games?.btype == "FANCY") {
        selectionId = games?.id;
        runnerId = games?.id;
        eventTypeId = games?.eventTypeId;
      } else if (games?.btype && games?.btype !== "FANCY") {
        selectionId = runner?.id;
        runnerId = games.runners.map((runner) => runner.id);
        eventTypeId = games?.eventTypeId;
        games?.runners?.forEach((runner) => {
          const pnl = pnlBySelection?.find((p) => p?.RunnerId === runner?.id);
          if (pnl) {
            updatedPnl.push(pnl?.pnl);
          }
        });
      } else {
        selectionId = runner?.selectionId;
        eventTypeId = games?.marketId;
        games?.runners?.forEach((runner) => {
          const pnl = pnlBySelection?.find(
            (p) => p?.RunnerId === runner?.selectionId,
          );
          if (pnl) {
            updatedPnl.push(pnl?.pnl);
          }
        });
      }

      const betData = {
        price,
        side: betType === "back" ? 0 : 1,
        selectionId,
        btype: games?.btype,
        eventTypeId,
        betDelay: games?.betDelay,
        marketId: games?.id,
        lay: betType === "lay",
        back: betType === "back",
        selectedBetName: runner?.name,
        name: games.runners.map((runner) => runner.name),
        runnerId,
        isWeak: games?.isWeak,
        maxLiabilityPerMarket: games?.maxLiabilityPerMarket,
        isBettable: games?.isBettable,
        maxLiabilityPerBet: games?.maxLiabilityPerBet,
        pnl: updatedPnl,
        marketName: games?.name,
        eventId: games?.eventId,
        totalSize: 0,
        bottomValue,
      };

      if (games?.btype == "FANCY") {
        dispatch(setRunnerId(games?.id));
      } else if (games?.btype && games?.btype !== "FANCY") {
        dispatch(setRunnerId(runner?.id));
      } else {
        dispatch(setRunnerId(runner?.selectionId));
      }

      dispatch(setPlaceBetValues(betData));
    } else {
      toast.error("Please login to place a bet.");
    }
  };

  let pnlBySelection;
  if (exposure?.pnlBySelection) {
    const obj = exposure?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }

  const handleGetLadder = async (pnl, marketName) => {
    if (!pnl?.MarketId) {
      return;
    }
    setMarketName(marketName);
    const res = await getLadder({ marketId: pnl?.MarketId }).unwrap();

    if (res.success) {
      setLadderData(res.result);
    }
  };
  return (
    <Fragment>
      {fancyData?.length > 0 && (
        <div className="dScreen fancy_odds fancy-primium-tabs">
          <div className="premium-fancy-tabs">
            <ul
              className="nav nav-pills de_fancyTab"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active"
                  id="pills-home-tabline"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  aria-controls="tabline"
                  aria-selected="true"
                >
                  <span />
                  <span>Fancy</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade active show"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
              tabIndex={0}
            >
              <div type="nav de_fancyTab" className="tab-container">
                <div className="tab-content">
                  <div className>
                    <div className="fancy-bookmaker-bet-btn">
                      <div className="fancy-tabs-head btn-color">
                        <div className="row">
                          <div className="col-md-5 col-4 px-0 ms-auto">
                            <div className="border-0 dOddsBox faddsBox row align-items-stretch">
                              <div className="lay faddsBox-wrapc m-0 col-4">
                                <button className="lay lay-img">NO</button>
                              </div>
                              <div className="back faddsBox-wrap col-4">
                                <button className="back back-img">YES</button>
                              </div>
                              <div className="col-4">
                                <button className="back back-img min_max_heading">
                                  Min/Max
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <div className="fancy-bookmaker-bet-btn">
                      {fancyData?.map((game) => {
                        return (
                          <div
                            key={game?.id}
                            className="fancy-tabs btn-color btn-color bet-slip-area"
                          >
                            <div className="row">
                              <div className="col-md-7 col-8 px-0">
                                <div className="fancy-title-row">
                                  <span className="team-pin-img">
                                    <img
                                      loading="lazy"
                                      src="/assets/pin-white-rQYS-7hC.svg"
                                      className="img-fluid"
                                    />
                                  </span>
                                  <p className="team-name">
                                    <b>{game?.name} &nbsp; </b>
                                  </p>
                                  <div className="SportEvent__market__title__exposure" />
                                  <div className="sucess-simbal">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                    >
                                      <path
                                        d="M9.19003 18.3233C8.96095 18.5538 8.64835 18.6823 8.32369 18.6823C7.99902 18.6823 7.68643 18.5538 7.45735 18.3233L0.538518 11.4034C-0.179506 10.6853 -0.179506 9.52098 0.538518 8.80434L1.40486 7.93777C2.12311 7.21974 3.28608 7.21974 4.00411 7.93777L8.32374 12.2576L19.9958 0.585195C20.714 -0.132829 21.8782 -0.132829 22.595 0.585195L23.4614 1.45176C24.1794 2.16979 24.1794 3.33391 23.4614 4.05078L9.19003 18.3233Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-5 col-4 px-0">
                                <div className="dOddsBox row border-0">
                                  <button
                                    onClick={() =>
                                      handleBetSlip(
                                        "lay",
                                        game,
                                        game?.runners?.[0],
                                        game?.runners?.[0]?.lay?.[0]?.line,
                                        game?.runners?.[0]?.lay?.[0]?.price,
                                      )
                                    }
                                    className="lay col-4"
                                  >
                                    {game?.runners?.[0]?.lay?.[0]?.line}{" "}
                                    <span>
                                      {" "}
                                      {game?.runners?.[0]?.lay?.[0]?.price}
                                    </span>
                                  </button>
                                  <button
                                    onClick={() =>
                                      handleBetSlip(
                                        "back",
                                        game,
                                        game?.runners?.[0],
                                        game?.runners?.[0]?.back?.[0]?.line,
                                        game?.runners?.[0]?.back?.[0]?.price,
                                      )
                                    }
                                    className="back col-4"
                                  >
                                    {game?.runners?.[0]?.back?.[0]?.line}{" "}
                                    <span>
                                      {game?.runners?.[0]?.back?.[0]?.price}
                                    </span>
                                  </button>
                                  {game?.status !== "OPEN" && (
                                    <div className="suspended">
                                      {game?.status}
                                    </div>
                                  )}
                                  <div className="min_max_value col-4">
                                    <div className="min-max-h">
                                      <span> {game?.minLiabilityPerBet}</span> -{" "}
                                      <span>{game?.maxLiabilityPerBet}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {game?.id === runnerId && (
                              <BetSLip currentPlaceBetEvent={game} />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Fancy;
