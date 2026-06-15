import { Link, useLocation } from "react-router-dom";
import { useLogo } from "../../../context/ApiProvider";
import Unauthorized from "./Unauthorized";
import { useDispatch, useSelector } from "react-redux";
import LoggedIn from "./LoggedIn";
import { useEffect, useState } from "react";
import {
  setClosePopUpForForever,
  setShowAPKModal,
  setShowAppPopUp,
} from "../../../redux/features/global/globalSlice";
import { Settings } from "../../../api";
import Error from "../../modals/Error/Error";
import AppPopup from "./AppPopUp";
import DownloadAPK from "../../modals/DownloadAPK/DownloadAPK";
import Notification from "./Notification";
import MobileSidebar from "./MobileSidebar";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { logo } = useLogo();
  const { token } = useSelector((state) => state.auth);
  const location = useLocation();
  const dispatch = useDispatch();
  const { showAppPopUp, windowWidth, showAPKModal, closePopupForForever } =
    useSelector((state) => state?.global);

  useEffect(() => {
    const apk_modal_shown = sessionStorage.getItem("apk_modal_shown");
    const closePopupForForever = localStorage.getItem("closePopupForForever");
    dispatch(setClosePopUpForForever(closePopupForForever ? true : false));
    if (location?.state?.pathname === "/apk" || location.pathname === "/apk") {
      sessionStorage.setItem("apk_modal_shown", true);
      localStorage.setItem("closePopupForForever", true);
      dispatch(setClosePopUpForForever(true));
      localStorage.removeItem("installPromptExpiryTime");
    } else {
      if (!apk_modal_shown) {
        dispatch(setShowAPKModal(true));
      }
      if (!closePopupForForever) {
        const expiryTime = localStorage.getItem("installPromptExpiryTime");
        const currentTime = new Date().getTime();

        if ((!expiryTime || currentTime > expiryTime) && Settings.apk_link) {
          localStorage.removeItem("installPromptExpiryTime");

          dispatch(setShowAppPopUp(true));
        }
      }
    }
  }, [
    dispatch,
    windowWidth,
    showAppPopUp,
    location?.state?.pathname,
    location.pathname,
  ]);

  if (Settings.app_only && !closePopupForForever) {
    return <Error />;
  }
  return (
    <header className="header" style={{ padding: "0px", height: "auto" }}>
      {Settings.apk_link && showAppPopUp && windowWidth < 1040 && <AppPopup />}
      {Settings.apk_link && showAPKModal && <DownloadAPK />}
      <div
        onClick={() => setShowSidebar(true)}
        className="menu-button-mobile d-none-desktop"
      >
        <span className="menu-button-bar" />
        <span className="menu-button-bar" />
        <span className="menu-button-bar" />
      </div>
      {showSidebar && <MobileSidebar setShowSidebar={setShowSidebar} />}

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
      <Notification />

      {!token && <Unauthorized />}
      {token && <LoggedIn />}
    </header>
  );
};

export default Header;
