import { Link } from "react-router-dom";
import { useLogo } from "../../../context/ApiProvider";
import { latestEvent } from "../../../static/latest-event";
import { LanguageKey } from "../../../const";
import { eventNameList } from "../../../static/event-name-list";
import useLanguage from "../../../hooks/use-language";

const LeftSidebar = () => {
  const { getLanguage } = useLanguage();
  const { logo } = useLogo();

  return (
    <div className="sidebar-left d-none-mobile">
      <div className="logo-box">
        <div className="logo">
          <Link
            to="/"
            aria-current="page"
            className="router-link-exact-active router-link-active"
          >
            <img src={logo} alt="logo" className="img-fluid" />
          </Link>
        </div>
      </div>
      <div className="special-menu">
        <h5 className="text-yellow pl-2">
          <u>Racing Sports</u>
        </h5>
        <ul className="navbar-nav">
          <li className="nav-item dropdown dropright">
            <Link
              to="/?eventTypeId=7"
              data-toggle="dropdown"
              className="dropdown-toggle sport10"
            >
              <i className="d-icon icon-10" />
              <span className="sport-name">
                {" "}
                {getLanguage(LanguageKey.HORSE)}
              </span>
            </Link>
          </li>
          <li className="nav-item dropdown dropright">
            <Link
              to="/?eventTypeId=4339"
              data-toggle="dropdown"
              className="dropdown-toggle sport65"
            >
              <i className="d-icon icon-65" />
              <span className="sport-name">
                {" "}
                {getLanguage(LanguageKey.GREYHOUND)}
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="menu-box">
        <h5 className="text-yellow pl-2">
          <u>{getLanguage(LanguageKey.ALL_SPORTS)}</u>
        </h5>
        <div className="sports-list-content">
          <div className="all-menu">
            <span mode="out-in">
              <ul className="navbar-nav">
                {latestEvent.map((item) => {
                  return (
                    <li key={item.eventName} className>
                      <Link
                        to={item.pathname}
                        className="dropdown-item dropdown-toggle sport4"
                      >
                        <i className="d-icon icon-4" />
                        <span className="sport-name ifTooltip">
                          {item.eventName}
                        </span>
                        {/* <span>(33)</span> */}
                      </Link>
                    </li>
                  );
                })}
                <li className>
                  <Link
                    to="/?eventTypeId=4"
                    className="dropdown-item dropdown-toggle sport4"
                  >
                    <i className="d-icon icon-4" />
                    <span className="sport-name ifTooltip">
                      {" "}
                      {getLanguage(LanguageKey.CRICKET)}
                    </span>
                    {/* <span>(33)</span> */}
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className>
                  <Link
                    to="/?eventTypeId=1"
                    className="dropdown-item dropdown-toggle sport1"
                  >
                    <i className="d-icon icon-1" />
                    <span className="sport-name ifTooltip">
                      {" "}
                      {getLanguage(LanguageKey.FOOTBALL)}
                    </span>
                    {/* <span>(83)</span> */}
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className>
                  <Link
                    to="/?eventTypeId=2"
                    className="dropdown-item dropdown-toggle sport2"
                  >
                    <i className="d-icon icon-2" />
                    <span className="sport-name ifTooltip">
                      {" "}
                      {getLanguage(LanguageKey.TENNIS)}
                    </span>
                    {/* <span>(143)</span> */}
                  </Link>
                </li>
              </ul>

              <ul className="navbar-nav">
                <li className>
                  <Link to="/?eventTypeId=5" className="dropdown-item sport66">
                    <i className="d-icon icon-66" />
                    <span className="sport-name ifTooltip">
                      {" "}
                      {getLanguage(LanguageKey.KABADDI)}
                    </span>
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className>
                  <Link
                    to="/?eventTypeId=6"
                    className="dropdown-item dropdown-toggle sport40"
                  >
                    <i className="d-icon icon-40" />
                    <span className="sport-name ifTooltip">
                      {getLanguage(LanguageKey.POLITICS)}
                    </span>
                    {/* <span>(1)</span> */}
                  </Link>
                </li>
              </ul>
              {eventNameList.map((item) => {
                return (
                  <ul key={item.id} className="navbar-nav">
                    <li className>
                      <Link
                        to={`/?eventTypeId=${item.id}`}
                        className="dropdown-item dropdown-toggle sport40"
                      >
                        {/* <i className="d-icon icon-40" /> */}
                        <img
                          src={item.image}
                          style={{ height: "16px", marginRight: "15px" }}
                          alt=""
                        />
                        <span className="sport-name ifTooltip">
                          {getLanguage(item.name)}
                        </span>
                        {/* <span>(1)</span> */}
                      </Link>
                    </li>
                  </ul>
                );
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
