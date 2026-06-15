import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useExposure } from "../../../hooks/exposure";
import {
  setPlaceBetValues,
  setRunnerId,
} from "../../../redux/features/events/eventSlice";
import toast from "react-hot-toast";
import { Settings } from "../../../api";
import { handleCashOutPlaceBet } from "../../../utils/handleCashoutPlaceBet";
import SpeedCashOut from "../../modals/SpeedCashOut/SpeedCashOut";
import { setShowLoginModal } from "../../../redux/features/global/globalSlice";

const Bookmaker = ({ data }) => {
  const [speedCashOut, setSpeedCashOut] = useState(null);
  const { eventId } = useParams();
  const [teamProfit, setTeamProfit] = useState([]);
  const dispatch = useDispatch();
  const { runnerId, stake, predictOdd } = useSelector((state) => state.event);
  const { token } = useSelector((state) => state.auth);
  const { data: exposure } = useExposure(eventId);

  const handleBetSlip = (betType, games, runner, price) => {
    if (token) {
      let selectionId;
      let runnerId;
      let eventTypeId;
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
        games?.runners?.forEach((rnr) => {
          const pnl = pnlBySelection?.find((p) => p?.RunnerId === rnr?.id);
          if (pnl) {
            updatedPnl.push({
              exposure: pnl?.pnl,
              id: pnl?.RunnerId,
              isBettingOnThisRunner: rnr?.id === runner?.id,
              name: rnr?.name,
              updatedExposure: pnl?.pnl,
            });
          } else {
            updatedPnl.push({
              exposure: 0,
              id: rnr?.id,
              isBettingOnThisRunner: rnr?.id === runner?.id,
              name: rnr?.name,
            });
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
        exposure: updatedPnl,
        marketName: games?.name,
        eventId: games?.eventId,
        totalSize: 0,
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
      dispatch(setShowLoginModal(true));
    }
  };

  const computeExposureAndStake = (
    exposureA,
    exposureB,
    runner1,
    runner2,
    gameId,
  ) => {
    let runner,
      largerExposure,
      layValue,
      oppositeLayValue,
      lowerExposure,
      speedCashOut;

    const pnlArr = [exposureA, exposureB];
    const isOnePositiveExposure = onlyOnePositive(pnlArr);

    if (exposureA > exposureB) {
      // Team A has a larger exposure.
      runner = runner1;
      largerExposure = exposureA;
      layValue = 1 + Number(runner1?.lay?.[0]?.price) / 100;
      oppositeLayValue = 1 + Number(runner2?.lay?.[0]?.price) / 100;
      lowerExposure = exposureB;
    } else {
      // Team B has a larger exposure.
      runner = runner2;
      largerExposure = exposureB;
      layValue = 1 + Number(runner2?.lay?.[0]?.price) / 100;
      oppositeLayValue = 1 + Number(runner1?.lay?.[0]?.price) / 100;
      lowerExposure = exposureA;
    }

    if (exposureA > 0 && exposureB > 0) {
      const difference = Math.abs(exposureA - exposureB);
      if (difference <= 10) {
        speedCashOut = true;
      }
    }

    // Compute the absolute value of the lower exposure.
    let absLowerExposure = Math.abs(lowerExposure);

    // Compute the liability for the team with the initially larger exposure.
    let liability = absLowerExposure * (layValue - 1);

    // Compute the new exposure of the team with the initially larger exposure.
    let newExposure = largerExposure - liability;

    // Compute the profit using the new exposure and the lay odds of the opposite team.
    let profit = newExposure / layValue;

    // Calculate the new stake value for the opposite team by adding profit to the absolute value of its exposure.
    let newStakeValue = absLowerExposure + profit;

    // Return the results.
    return {
      runner,
      newExposure,
      profit,
      newStakeValue,
      oppositeLayValue,
      gameId,
      isOnePositiveExposure,
      exposureA,
      exposureB,
      runner1,
      runner2,
      speedCashOut,
    };
  };
  function onlyOnePositive(arr) {
    let positiveCount = arr?.filter((num) => num > 0).length;
    return positiveCount === 1;
  }
  useEffect(() => {
    let results = [];
    if (
      data?.length > 0 &&
      exposure?.pnlBySelection &&
      Object.keys(exposure?.pnlBySelection)?.length > 0
    ) {
      data.forEach((game) => {
        const runners = game?.runners || [];
        if (runners?.length === 2) {
          const runner1 = runners[0];
          const runner2 = runners[1];
          const pnl1 = pnlBySelection?.find(
            (pnl) => pnl?.RunnerId === runner1?.id,
          )?.pnl;
          const pnl2 = pnlBySelection?.find(
            (pnl) => pnl?.RunnerId === runner2?.id,
          )?.pnl;

          if (pnl1 && pnl2 && runner1 && runner2) {
            const result = computeExposureAndStake(
              pnl1,
              pnl2,
              runner1,
              runner2,
              game?.id,
            );
            results.push(result);
          }
        }
      });
      setTeamProfit(results);
    } else {
      setTeamProfit([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventId, data]);

  let pnlBySelection;
  if (exposure?.pnlBySelection) {
    const obj = exposure?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }
  return (
    <Fragment>
      {speedCashOut && (
        <SpeedCashOut
          speedCashOut={speedCashOut}
          setSpeedCashOut={setSpeedCashOut}
        />
      )}
      {data?.length > 0 &&
        data?.map((game) => {
          const teamProfitForGame = teamProfit?.find(
            (profit) =>
              profit?.gameId === game?.id && profit?.isOnePositiveExposure,
          );
          const speedCashOut = teamProfit?.find(
            (profit) => profit?.gameId === game?.id && profit?.speedCashOut,
          );

          return (
            <div key={game?.id} className="market-4" id="goto-8722413562872">
              <div className="bet-table">
                <div className="bet-table-header">
                  <div className="nation-name">
                    <span
                      title="MATCH_ODDS"
                      data-toggle="collapse"
                      data-target="#market0"
                      aria-expanded="true"
                    >
                      <a href="javascript:void(0)" title>
                        <img
                          src="https://wver.sprintstaticdata.com/v224/static/front/img/arrow-down.svg"
                          className="mr-1"
                        />
                      </a>
                      {game?.name?.toUpperCase()}
                    </span>
                    {Settings.cashout &&
                      game?.runners?.length !== 3 &&
                      game?.status === "OPEN" &&
                      !speedCashOut && (
                        <button
                          onClick={() =>
                            handleCashOutPlaceBet(
                              game,
                              "lay",
                              dispatch,
                              pnlBySelection,
                              token,
                              teamProfitForGame,
                            )
                          }
                          style={{
                            cursor: `${
                              !teamProfitForGame ? "not-allowed" : "pointer"
                            }`,
                            opacity: `${!teamProfitForGame ? "0.6" : "1"}`,
                          }}
                          className="btn btn-success btn-sm"
                        >
                          Cashout{" "}
                          {teamProfitForGame?.profit &&
                            `(${teamProfitForGame.profit.toFixed(0)})`}
                        </button>
                      )}
                    {Settings.cashout &&
                      game?.runners?.length !== 3 &&
                      game?.status === "OPEN" &&
                      game?.name !== "toss" &&
                      speedCashOut && (
                        <button
                          onClick={() =>
                            setSpeedCashOut({
                              ...speedCashOut,
                              market_name: game?.name,
                              event_name: game?.eventName,
                            })
                          }
                          // disabled={isGameSuspended(game)}
                          className="btn btn-success btn-sm"
                        >
                          Speed Cashout
                        </button>
                      )}

                    <span className="max-bet d-none-desktop">
                      <span title="Max : 1">
                        Max:
                        <span>{game?.maxLiabilityPerBet}</span>
                      </span>
                    </span>
                  </div>
                </div>
                <div
                  id="market0"
                  data-title="OPEN"
                  className="bet-table-body collapse show"
                >
                  <div className="bet-table-row d-none-mobile">
                    <div className="nation-name">
                      <span className="max-bet">
                        <span title="Max : 1">
                          Max:
                          <span>{game?.maxLiabilityPerBet}</span>
                        </span>
                      </span>
                    </div>
                    <div translate="no" className="back bl-title back-title">
                      Back
                    </div>
                    <div translate="no" className="lay bl-title lay-title">
                      Lay
                    </div>
                  </div>
                  {game?.runners?.map((runner) => {
                    const pnl = pnlBySelection?.find(
                      (pnl) => pnl?.RunnerId === runner?.id,
                    );
                    const predictOddValues = predictOdd?.find(
                      (val) => val?.id === runner?.id,
                    );
                    return (
                      <Fragment key={runner?.id}>
                        <div className="bet-table-mobile-row d-none-desktop">
                          <div className="bet-table-mobile-team-name">
                            <span> {runner?.name}</span> <span />
                          </div>
                        </div>
                        <div
                          data-title={` ${runner?.status === "OPEN" ? "ACTIVE" : "SUSPENDED"}`}
                          className={`bet-table-row ${runner?.status === "OPEN" ? "" : "suspendedtext"}`}
                        >
                          <div className="nation-name d-none-mobile">
                            <p>
                              <span>{runner?.name}</span>
                              <span className="float-right" />
                            </p>
                            <p className="mb-0">
                              {pnl && (
                                <span
                                  className={`${
                                    pnl?.pnl > 0
                                      ? "text-success"
                                      : "text-danger"
                                  }`}
                                >
                                  {pnl?.pnl}
                                </span>
                              )}

                              {stake && runnerId && predictOddValues && (
                                <span
                                  className={` ${
                                    predictOddValues?.exposure > 0
                                      ? "text-success"
                                      : "text-danger"
                                  } `}
                                >
                                  &nbsp;({predictOddValues?.exposure})
                                </span>
                              )}
                            </p>
                          </div>
                          <div
                            onClick={() =>
                              handleBetSlip(
                                "back",
                                game,
                                runner,
                                runner?.back?.[2]?.price,
                              )
                            }
                            className="bl-box back back2"
                          >
                            <span className="d-block odds">
                              {runner?.back?.[2]?.price || "—"}
                            </span>
                            <span className="d-block">
                              {" "}
                              {runner?.back?.[2]?.size}
                            </span>
                          </div>
                          <div
                            onClick={() =>
                              handleBetSlip(
                                "back",
                                game,
                                runner,
                                runner?.back?.[1]?.price,
                              )
                            }
                            className="bl-box back back1"
                          >
                            <span className="d-block odds">
                              {" "}
                              {runner?.back?.[1]?.price || "—"}
                            </span>
                            <span className="d-block">
                              {runner?.back?.[1]?.size}
                            </span>
                          </div>
                          <div
                            onClick={() =>
                              handleBetSlip(
                                "back",
                                game,
                                runner,
                                runner?.back?.[0]?.price,
                              )
                            }
                            className="bl-box back back"
                          >
                            <span className="d-block odds">
                              {" "}
                              {runner?.back?.[0]?.price || "—"}
                            </span>
                            <span className="d-block">
                              {" "}
                              {runner?.back?.[0]?.size}
                            </span>
                          </div>
                          <div
                            onClick={() =>
                              handleBetSlip(
                                "lay",
                                game,
                                runner,
                                runner?.lay?.[0]?.price,
                              )
                            }
                            className="bl-box lay lay"
                          >
                            <span className="d-block odds">
                              {" "}
                              {runner?.lay?.[0]?.price || "—"}
                            </span>
                            <span className="d-block">
                              {" "}
                              {runner?.lay?.[0]?.size}
                            </span>
                          </div>
                          <div
                            onClick={() =>
                              handleBetSlip(
                                "lay",
                                game,
                                runner,
                                runner?.lay?.[1]?.price,
                              )
                            }
                            className="bl-box lay lay1"
                          >
                            <span className="d-block odds">
                              {" "}
                              {runner?.lay?.[1]?.price || "—"}
                            </span>
                            <span className="d-block">
                              {" "}
                              {runner?.lay?.[1]?.size}
                            </span>
                          </div>
                          <div
                            onClick={() =>
                              handleBetSlip(
                                "lay",
                                game,
                                runner,
                                runner?.lay?.[2]?.price,
                              )
                            }
                            className="bl-box lay lay2"
                          >
                            <span className="d-block odds">
                              {" "}
                              {runner?.lay?.[2]?.price || "—"}
                            </span>
                            <span className="d-block">
                              {" "}
                              {runner?.lay?.[2]?.size}
                            </span>
                          </div>
                        </div>
                      </Fragment>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
    </Fragment>
  );
};

export default Bookmaker;
