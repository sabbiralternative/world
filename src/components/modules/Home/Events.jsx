import { useLocation, useNavigate } from "react-router-dom";
import { useGroupQuery } from "../../../hooks/group";
import { EVENT_NAMES } from "../../../const";
import { Fragment } from "react";
import HorseGreyhound from "./HorseGreyhound";

export const Events = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const eventTypeId = params.get("eventTypeId");
  const navigate = useNavigate();

  const { data } = useGroupQuery({ sportsType: Number(eventTypeId) || 4 });

  const navigateGameList = (eventTypeId, keys) => {
    navigate(`/event-details/${eventTypeId}/${keys}`);
  };

  const groupedData =
    data && Object.entries(data)
      ? Object.entries(data)
          .filter(([, value]) => value.visible === true)
          .sort(([, a], [, b]) => {
            return b.inPlay - a.inPlay;
          })
      : [];

  return (
    <Fragment>
      {eventTypeId != 7 && eventTypeId != 4339 && (
        <div className="bet-table">
          <div className="bet-table-header sport4">
            <div className="game-title">
              <i className="d-icon icon-4" />{" "}
              <span>{EVENT_NAMES[eventTypeId]}</span>
            </div>
            <div className="point-title d-none-mobile">1</div>
            <div className="point-title d-none-mobile">X</div>
            <div className="point-title d-none-mobile">2</div>
          </div>
          <div className="bet-table-body">
            {groupedData?.map(([key, value]) => {
              return (
                <div
                  onClick={() => navigateGameList(value?.eventTypeId, key)}
                  key={key}
                  className="bet-table-box"
                >
                  <div className="bet-table-row-header-mobile d-none-desktop">
                    <div className="game-title">
                      {value?.inPlay === 1 && (
                        <div className="game-date inplay">
                          <span>Live</span>
                        </div>
                      )}
                      {value?.inPlay === 0 && (
                        <div className="game-date">
                          <p className="day text-left">
                            {value?.date?.split(" ")[0]}
                          </p>{" "}
                          <p
                            style={{ marginLeft: "10px" }}
                            className="mb-0 day text-left"
                          >
                            {" "}
                            {value?.date?.split(" ")[1]}
                          </p>
                        </div>
                      )}

                      <div className="game-name d-inline-block">
                        <a role="button">
                          <p className="team-name text-left">
                            {value?.eventName}
                          </p>
                        </a>
                        <div className="game-icons">
                          {value?.isFancy === 1 && (
                            <div className="game-icon fancy-icon">
                              <span translate="no" className="f-bm-icon">
                                F
                              </span>
                            </div>
                          )}

                          {value?.isBookmaker === 1 && (
                            <div className="game-icon bm-icon">
                              <span translate="no" className="f-bm-icon">
                                BM
                              </span>
                            </div>
                          )}
                          {value?.isTv === 1 && (
                            <div className="game-icon tv-icon">
                              <i className="icon-tv d-icon" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row">
                    <div className="game-title d-none-mobile">
                      {value?.inPlay === 1 && (
                        <div className="game-date inplay">
                          <span>Live</span>
                        </div>
                      )}
                      {value?.inPlay === 0 && (
                        <div className="game-date">
                          <p className="day text-left">
                            {value?.date?.split(" ")[0]}
                          </p>{" "}
                          <p
                            style={{ marginLeft: "10px" }}
                            className="mb-0 day text-left"
                          >
                            {" "}
                            {value?.date?.split(" ")[1]}
                          </p>
                        </div>
                      )}

                      <div className="game-name d-inline-block">
                        <a role="button">
                          <p className="team-name text-left">
                            {value?.eventName}
                          </p>
                        </a>
                      </div>
                      <div className="game-icons">
                        {value?.isFancy === 1 && (
                          <div className="game-icon fancy-icon">
                            <span translate="no" className="f-bm-icon">
                              F
                            </span>
                          </div>
                        )}
                        {value?.isBookmaker === 1 && (
                          <div className="game-icon bm-icon">
                            <span translate="no" className="f-bm-icon">
                              BM
                            </span>
                          </div>
                        )}
                        {value?.isTv === 1 && (
                          <div className="game-icon tv-icon">
                            <i className="icon-tv d-icon" />
                          </div>
                        )}
                      </div>
                    </div>
                    <div
                      className={`point-title  ${value?.status !== "OPEN" ? "suspended" : ""}`}
                    >
                      <div className="text-center d-none-desktop point-title-header">
                        1
                      </div>
                      <div className="back bl-box" role="button" tabIndex={0}>
                        <span className="d-block odds">
                          {" "}
                          {value?.[0]?.ex?.availableToBack?.[0]?.price || "—"}
                        </span>
                      </div>
                      <div className="lay bl-box" role="button" tabIndex={0}>
                        <span className="d-block odds">
                          {" "}
                          {value?.[0]?.ex?.availableToLay?.[0]?.price || "—"}
                        </span>
                      </div>
                    </div>
                    <div
                      className={`point-title  ${value?.status !== "OPEN" ? "suspended" : ""}`}
                    >
                      <div className="text-center d-none-desktop point-title-header">
                        X
                      </div>
                      <div className="no-val bl-box" role="button" tabIndex={0}>
                        <span className="d-block odds">
                          {" "}
                          {value?.[2]?.ex?.availableToBack?.[0]?.price || "—"}
                        </span>
                      </div>
                      <div className="no-val bl-box" role="button" tabIndex={0}>
                        <span className="d-block odds">
                          {" "}
                          {value?.[2]?.ex?.availableToLay?.[0]?.price || "—"}
                        </span>
                      </div>
                    </div>
                    <div
                      className={`point-title  ${value?.status !== "OPEN" ? "suspended" : ""}`}
                    >
                      <div className="text-center d-none-desktop point-title-header">
                        2
                      </div>
                      <div className="back bl-box" role="button" tabIndex={0}>
                        <span className="d-block odds">
                          {" "}
                          {value?.[1]?.ex?.availableToBack?.[0]?.price || "—"}
                        </span>
                      </div>
                      <div className="lay bl-box" role="button" tabIndex={0}>
                        <span className="d-block odds">
                          {" "}
                          {value?.[1]?.ex?.availableToLay?.[0]?.price || "—"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {(eventTypeId == 7 || eventTypeId == 4339) && data?.length > 0 && (
        <HorseGreyhound data={data} eventTypeId={eventTypeId} />
      )}
    </Fragment>
  );
};
