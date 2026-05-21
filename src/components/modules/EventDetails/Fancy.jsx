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
import Ladder from "../../modals/Ladder/Ladder";
import images from "../../../assets/images";

const Fancy = ({ data }) => {
  const fancyData = data?.filter(
    (fancy) =>
      fancy.btype === "FANCY" &&
      fancy.tabGroupName === "Normal" &&
      fancy?.visible == true,
  );

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

  const handleGetLadder = async (pnl) => {
    if (!pnl?.MarketId) {
      return;
    }

    const res = await getLadder({ marketId: pnl?.MarketId }).unwrap();

    if (res.success) {
      setLadderData(res.result);
    }
  };

  return (
    <Fragment>
      {ladderData?.length > 0 && (
        <Ladder ladderData={ladderData} setLadderData={setLadderData} />
      )}
      {fancyData?.length > 0 && (
        <div className="market-6">
          <div className="bet-table">
            <div
              data-toggle="collapse"
              data-target="#market2"
              aria-expanded="true"
              className="bet-table-header"
            >
              <div className="nation-name">
                <span title="Fancy1">
                  <a title>
                    <img
                      src="https://wver.sprintstaticdata.com/v224/static/front/img/arrow-down.svg"
                      className="mr-1"
                    />
                  </a>
                  Fancy
                </span>
              </div>
            </div>
            <div
              id="market2"
              data-title="OPEN"
              className="bet-table-body collapse show"
            >
              <div className="bet-table-row d-none-mobile">
                <div className="nation-name" />
                <div className="lay bl-title lay-title">Yes</div>
                <div className="back bl-title back-title">No</div>
              </div>
              {fancyData?.map((game) => {
                const pnl = pnlBySelection?.find(
                  (pnl) => pnl?.MarketId === game?.id,
                );

                return (
                  <Fragment key={game?.id}>
                    <div className="fancy-tripple">
                      <div className="bet-table-mobile-row d-none-desktop">
                        <div className="bet-table-mobile-team-name">
                          <span> {game?.name}</span> <span />
                        </div>
                      </div>
                      <div
                        data-title={` ${game?.status === "OPEN" ? "ACTIVE" : "SUSPENDED"}`}
                        className={`bet-table-row  ${game?.status === "OPEN" ? "" : "suspendedtext"} `}
                      >
                        <div className="nation-name d-none-mobile">
                          <p> {game?.name}</p> <p className="mb-0" />
                        </div>

                        <div
                          onClick={() =>
                            handleBetSlip(
                              "lay",
                              game,
                              game?.runners?.[0],
                              game?.runners?.[0]?.lay?.[0]?.line,
                              game?.runners?.[0]?.lay?.[0]?.price,
                            )
                          }
                          className="bl-box lay"
                        >
                          <span className="d-block odds">
                            {game?.runners?.[0]?.lay?.[0]?.line}
                          </span>
                          <span className="d-block">
                            {game?.runners?.[0]?.lay?.[0]?.price}
                          </span>
                        </div>
                        <div
                          onClick={() =>
                            handleBetSlip(
                              "back",
                              game,
                              game?.runners?.[0],
                              game?.runners?.[0]?.back?.[0]?.line,
                              game?.runners?.[0]?.back?.[0]?.price,
                            )
                          }
                          className="bl-box back"
                        >
                          <span className="d-block odds">
                            {game?.runners?.[0]?.back?.[0]?.line}
                          </span>
                          <span className="d-block">
                            {game?.runners?.[0]?.back?.[0]?.price}
                          </span>
                        </div>
                        <div className="fancy-min-max">
                          Min:<span>{game?.minLiabilityPerBet}</span>
                          Max:<span>{game?.maxLiabilityPerBet}</span>
                        </div>
                      </div>
                    </div>
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Fancy;
