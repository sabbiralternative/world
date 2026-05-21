import { Link } from "react-router-dom";
import { useLogo } from "../../../context/ApiProvider";

const LeftSidebar = () => {
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
              <span className="sport-name">Horse Racing</span>
            </Link>
          </li>
          <li className="nav-item dropdown dropright">
            <Link
              to="/?eventTypeId=4339"
              data-toggle="dropdown"
              className="dropdown-toggle sport65"
            >
              <i className="d-icon icon-65" />
              <span className="sport-name">Greyhound Racing</span>
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
                <li className>
                  <Link
                    to="/?eventTypeId=4"
                    className="dropdown-item dropdown-toggle sport4"
                  >
                    <i className="d-icon icon-4" />
                    <span className="sport-name ifTooltip">Cricket</span>
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
                    <span className="sport-name ifTooltip">Football</span>
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
                    <span className="sport-name ifTooltip">Tennis</span>
                    {/* <span>(143)</span> */}
                  </Link>
                </li>
              </ul>

              <ul className="navbar-nav">
                <li className>
                  <Link to="/?eventTypeId=5" className="dropdown-item sport66">
                    <i className="d-icon icon-66" />
                    <span className="sport-name ifTooltip">Kabaddi</span>
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
                    <span className="sport-name ifTooltip">Politics</span>
                    {/* <span>(1)</span> */}
                  </Link>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
