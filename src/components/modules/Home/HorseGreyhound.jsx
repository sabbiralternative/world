import { useNavigate } from "react-router-dom";
import { EVENT_NAMES } from "../../../const";
import { useEffect, useState } from "react";
import moment from "moment-timezone";

const HorseGreyhound = ({ data, eventTypeId }) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(
    data?.[0]?.childs?.[0]?.countryCode,
  );

  useEffect(() => {
    if (data) {
      setSelectedCategory(data?.[0]?.childs?.[0]?.countryCode);
    }
  }, [data]);

  const findChildByCountryCode =
    selectedCategory &&
    data &&
    data?.[0]?.childs?.find((child) => child?.countryCode === selectedCategory);

  const convertToIST = (utc) => {
    return moment(utc).tz("Asia/Kolkata").format("HH:mm");
  };
  return (
    <div className="bet-table">
      {" "}
      <div className="bet-table-header sport10">
        <div className="game-title">
          <i className="d-icon icon-10" />

          <span>{EVENT_NAMES[eventTypeId]}</span>
        </div>
      </div>{" "}
      <div className="horse-tab race10">
        <ul className="nav nav-pills">
          {data?.map((item) =>
            item?.childs?.map((child) => {
              return (
                <li
                  onClick={() => setSelectedCategory(child?.countryCode)}
                  key={child?.countryCode}
                  className="nav-item"
                >
                  <a
                    data-toggle="tab"
                    className={`nav-link ${
                      child?.countryCode === selectedCategory ? "active" : ""
                    } `}
                  >
                    {child?.countryCode}
                  </a>
                </li>
              );
            }),
          )}
        </ul>
      </div>{" "}
      <div className="tab-content">
        <div
          id="goku6106757"
          className="bet-table tab-pane fade horse-table active show"
        >
          <div className="bet-table-body">
            {findChildByCountryCode?.childs?.map((child) => {
              return (
                <div key={child?.trackName} className="bet-table-box">
                  <div className="bet-table-row-header-mobile d-none-desktop">
                    <div className="game-title">
                      <div className="game-name d-inline-block">
                        <div className="game-icons">
                          <div className="game-icon tv-icon">
                            <i className="icon-tv d-icon" />
                          </div>
                        </div>{" "}
                        <p className="team-name text-left">
                          {child?.trackName}
                        </p>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="bet-table-row">
                    <div className="game-title d-none-mobile">
                      <div className="game-icons">
                        <div className="game-icon tv-icon">
                          <i className="icon-tv d-icon" />
                        </div>
                      </div>{" "}
                      <div className="game-name d-inline-block">
                        <p className="team-name text-left">
                          {child?.trackName}
                        </p>
                      </div>
                    </div>{" "}
                    <div className="horse-time-detail">
                      {child?.childs?.map((children) => {
                        return (
                          <a
                            key={children?.eventId}
                            onClick={() =>
                              navigate(
                                `/event-details/${eventTypeId}/${children?.eventId}`,
                              )
                            }
                            className
                          >
                            <span className>
                              {" "}
                              {convertToIST(children?.startTime)}
                            </span>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorseGreyhound;
