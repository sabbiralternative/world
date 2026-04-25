import { useLocation, useNavigate } from "react-router-dom";
import { useGroupQuery } from "../../../hooks/group";

const OddSports = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const eventTypeId = params.get("eventTypeId");
  const { data } = useGroupQuery({ sportsType: Number(eventTypeId) || 4 });

  const groupedData = Object.entries(data)
    .filter(([, value]) => value.visible === true)
    .sort(([, a], [, b]) => b.inPlay - a.inPlay)
    .reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});

  const navigateGameList = (eventTypeId, keys) => {
    navigate(`/event-details/${eventTypeId}/${keys}`);
  };

  return (
    <div data-v-5e69ccab className="tab-content fixed-game-header">
      <div data-v-5e69ccab className="active tab-pane">
        <div data-v-5e69ccab className="mobile-width scrollHeight">
          <div data-v-c9d3df59 className="odds-header-container">
            <div data-v-c9d3df59 className="odds-header">
              <div data-v-c9d3df59>1</div>
              <div data-v-c9d3df59>X</div>
              <div data-v-c9d3df59>2</div>
            </div>
          </div>
          {Object.entries(groupedData).map(([key, value]) => {
            return (
              <div
                onClick={() => navigateGameList(value?.eventTypeId, key)}
                key={key}
                data-v-c9d3df59
                className="sportsWrap-list"
              >
                <div data-v-c9d3df59 className="matchname match-details-head">
                  <div data-v-c9d3df59 className="match-name-h">
                    <div data-v-c9d3df59 className="topLine">
                      <a data-v-c9d3df59>{value?.eventName}</a>
                      {value?.inPlay === 1 ? (
                        <span data-v-c9d3df59 className="inplay-animation-text">
                          In-Play
                        </span>
                      ) : (
                        <span
                          data-v-c9d3df59
                          className="clock-icon fas fa-clock"
                        />
                      )}
                    </div>
                    <span data-v-c9d3df59 className="match-time-and-date">
                      {value?.date}
                    </span>
                  </div>
                  <div data-v-c9d3df59 className="game-bookmaker-icons">
                    {value?.isFancy === 1 && (
                      <span data-v-c9d3df59 className="game-fancy">
                        F
                      </span>
                    )}

                    {value?.isTv === 1 && (
                      <span data-v-c9d3df59 className="game-sportbook">
                        TV
                      </span>
                    )}
                    {value?.isBookmaker === 1 && (
                      <span data-v-c9d3df59 className="game-sportbook">
                        B
                      </span>
                    )}
                  </div>
                  <div data-v-c9d3df59 className="oddsEventlist">
                    <div data-v-c9d3df59 className="btn-group">
                      <button data-v-c9d3df59 className="back">
                        -
                      </button>
                      <button data-v-c9d3df59 className="lay">
                        -
                      </button>
                    </div>
                    <div data-v-c9d3df59 className="btn-group">
                      <button data-v-c9d3df59 className="back">
                        -
                      </button>
                      <button data-v-c9d3df59 className="lay">
                        -
                      </button>
                    </div>
                    <div data-v-c9d3df59 className="btn-group">
                      <button data-v-c9d3df59 className="back">
                        -
                      </button>
                      <button data-v-c9d3df59 className="lay">
                        -
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OddSports;
