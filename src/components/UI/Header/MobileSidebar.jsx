import { useRef } from "react";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import { Link } from "react-router-dom";
import { latestEvent } from "../../../static/latest-event";
import Search from "./Search";
import { useLanguage } from "../../../context/LanguageProvider";
import { languageValue } from "../../../utils/language";
import { LanguageKey } from "../../../const";

const MobileSidebar = ({ setShowSidebar }) => {
  const { valueByLanguage } = useLanguage();
  const ref = useRef();
  useCloseModalClickOutside(ref, () => setShowSidebar(false));
  return (
    <div tabIndex={-1} className="b-sidebar-outer">
      <div tabIndex={0} />
      <div
        ref={ref}
        id="sidebar-border"
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        className="b-sidebar shadow bg-light text-dark d-none-desktop"
        style={{ width: "80%" }}
      >
        <div className="b-sidebar-body">
          <div id="sidebar-left-mo" className="sidebar-left">
            <div className="menu-scrolable">
              <div className="search-box" style={{ display: "flex" }}>
                <Search setShowSidebar={setShowSidebar} />
                <div
                  onClick={() => setShowSidebar(false)}
                  className="menu-button-mobile d-none-desktop"
                >
                  <span className="menu-button-bar" />
                  <span className="menu-button-bar" />
                  <span className="menu-button-bar" />
                </div>
              </div>

              <div className="special-menu">
                <h5 className="text-yellow pl-2">
                  <u>Racing Sports</u>
                </h5>
                <ul className="navbar-nav">
                  <li className="nav-item dropdown dropright">
                    <Link
                      onClick={() => setShowSidebar(false)}
                      to="/?eventTypeId=7"
                      data-toggle="dropdown"
                      className="dropdown-toggle sport10"
                    >
                      <i className="d-icon icon-10" />
                      <span className="sport-name">
                        {" "}
                        {languageValue(valueByLanguage, LanguageKey.HORSE)}
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item dropdown dropright">
                    <Link
                      onClick={() => setShowSidebar(false)}
                      to="/?eventTypeId=4339"
                      data-toggle="dropdown"
                      className="dropdown-toggle sport65"
                    >
                      <i className="d-icon icon-65" />
                      <span className="sport-name">
                        {" "}
                        {languageValue(valueByLanguage, LanguageKey.GREYHOUND)}
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="menu-box">
                <h5 className="text-yellow pl-2">
                  <u>All Sports</u>
                </h5>
                <div className="sports-list-content">
                  <div className="all-menu">
                    <span mode="out-in">
                      <ul className="navbar-nav">
                        {" "}
                        {latestEvent.map((item) => {
                          return (
                            <li
                              onClick={() => setShowSidebar(false)}
                              key={item.eventName}
                              className
                            >
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
                            onClick={() => setShowSidebar(false)}
                            to="/?eventTypeId=4"
                            className="dropdown-item dropdown-toggle sport4"
                          >
                            <i className="d-icon icon-4" />
                            <span className="sport-name ifTooltip">
                              {languageValue(
                                valueByLanguage,
                                LanguageKey.CRICKET,
                              )}
                            </span>
                            {/* <span>(33)</span> */}
                          </Link>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className>
                          <Link
                            onClick={() => setShowSidebar(false)}
                            to="/?eventTypeId=1"
                            className="dropdown-item dropdown-toggle sport1"
                          >
                            <i className="d-icon icon-1" />
                            <span className="sport-name ifTooltip">
                              {languageValue(
                                valueByLanguage,
                                LanguageKey.FOOTBALL,
                              )}
                            </span>
                            {/* <span>(83)</span> */}
                          </Link>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className>
                          <Link
                            onClick={() => setShowSidebar(false)}
                            to="/?eventTypeId=2"
                            className="dropdown-item dropdown-toggle sport2"
                          >
                            <i className="d-icon icon-2" />
                            <span className="sport-name ifTooltip">
                              {" "}
                              {languageValue(
                                valueByLanguage,
                                LanguageKey.TENNIS,
                              )}
                            </span>
                            {/* <span>(143)</span> */}
                          </Link>
                        </li>
                      </ul>

                      <ul className="navbar-nav">
                        <li className>
                          <Link
                            onClick={() => setShowSidebar(false)}
                            to="/?eventTypeId=5"
                            className="dropdown-item sport66"
                          >
                            <i className="d-icon icon-66" />
                            <span className="sport-name ifTooltip">
                              {languageValue(
                                valueByLanguage,
                                LanguageKey.KABADDI,
                              )}
                            </span>
                          </Link>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className>
                          <Link
                            onClick={() => setShowSidebar(false)}
                            to="/?eventTypeId=6"
                            className="dropdown-item dropdown-toggle sport40"
                          >
                            <i className="d-icon icon-40" />
                            <span className="sport-name ifTooltip">
                              Politics
                            </span>
                            {/* <span>(1)</span> */}
                          </Link>
                        </li>
                      </ul>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div tabIndex={0} />
      <div className="b-sidebar-backdrop bg-dark" style={{}} />
    </div>
  );
};

export default MobileSidebar;
