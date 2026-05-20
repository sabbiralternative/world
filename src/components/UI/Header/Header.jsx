import { Link } from "react-router-dom";
import { useLogo } from "../../../context/ApiProvider";
import Unauthorized from "./Unauthorized";
import { useSelector } from "react-redux";
import LoggedIn from "./LoggedIn";

const Header = () => {
  const { logo } = useLogo();
  const { token } = useSelector((state) => state.auth);
  return (
    <header className="header">
      <div className="menu-button-mobile d-none-desktop">
        <span className="menu-button-bar" />
        <span className="menu-button-bar" />
        <span className="menu-button-bar" />
      </div>
      <div className="logo-box d-none-desktop">
        <div className="logo">
          <Link
            to="/"
            aria-current="page"
            className="router-link-exact-active router-link-active"
          >
            <img src={logo} alt="logo" />
          </Link>
        </div>
      </div>
      <div className="news-bar d-none-mobile">
        <div className="marquee-wrapper">
          <div
            className="marquee-content"
            style={{ animationDuration: "17.32s" }}
          >
            IPL markets live. Bookmaker, Fancy and more. Predict and win big.
          </div>
        </div>
        <div className="news-title">
          <img
            src="https://wver.sprintstaticdata.com/v223/static/front/img/icons/speaker.svg"
            alt="news"
          />
        </div>
      </div>
      {!token && <Unauthorized />}
      {token && <LoggedIn />}
    </header>
  );
};

export default Header;
