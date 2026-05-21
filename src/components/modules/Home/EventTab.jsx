import { useRef } from "react";
import { scrollToLeft, scrollToRight } from "../../../utils/scroll";
import { Link, useLocation } from "react-router-dom";

const EventTab = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const eventTypeId = params.get("eventTypeId");
  const ref = useRef();
  return (
    <div className="sport-tabs">
      <a onClick={() => scrollToLeft(ref)} className="arrow-tabs arrow-left">
        <img
          src="https://wver.sprintstaticdata.com/v223/static/front/img/arrow-down.svg"
          alt="arrow down"
        />
      </a>
      <ul ref={ref} id="taj_home_sports_list" className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/?eventTypeId=4"
            id="activeTabHome"
            className={`nav-link  sport4 ${eventTypeId === "4" ? "active" : ""}`}
          >
            <i className="d-icon icon-4" />
            <span>Cricket</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/?eventTypeId=1"
            className={`nav-link  sport4 ${eventTypeId === "1" ? "active" : ""}`}
          >
            <i className="d-icon icon-1" />
            <span>Football</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/?eventTypeId=2"
            className={`nav-link  sport4 ${eventTypeId === "2" ? "active" : ""}`}
          >
            <i className="d-icon icon-2" />
            <span>Tennis</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/?eventTypeId=7"
            className={`nav-link  sport4 ${eventTypeId === "7" ? "active" : ""}`}
          >
            <i className="d-icon icon-10" />
            <span>Horse Racing</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/?eventTypeId=4339"
            className={`nav-link  sport4 ${eventTypeId === "4339" ? "active" : ""}`}
          >
            <i className="d-icon icon-65" />
            <span>Greyhound Racing</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/?eventTypeId=5"
            className={`nav-link  sport4 ${eventTypeId === "5" ? "active" : ""}`}
          >
            <i className="d-icon icon-66" />
            <span>Kabaddi</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/?eventTypeId=6"
            className={`nav-link  sport4 ${eventTypeId === "6" ? "active" : ""}`}
          >
            <i className="d-icon icon-40" />
            <span>Politics</span>
          </Link>
        </li>
      </ul>
      <a onClick={() => scrollToRight(ref)} className="arrow-tabs arrow-right">
        <img
          src="https://wver.sprintstaticdata.com/v223/static/front/img/arrow-down.svg"
          alt="arrow down"
        />
      </a>
    </div>
  );
};

export default EventTab;
