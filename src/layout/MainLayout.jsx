import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Settings } from "../api";
import HeaderTopPart from "../components/UI/Header/HeaderTopPart";
import LeftSidebar from "../components/UI/LeftSidebar/LeftSidebar";
import Header from "../components/UI/Header/Header";
import Login from "../components/modals/Login/Login";
import Register from "../components/modals/Register/Register";
import ForgotPassword from "../components/modals/ForgotPassword/ForgotPassword";

const MainLayout = () => {
  const [, setShowBuildVersion] = useState(false);
  const stored_build_version = localStorage.getItem("build_version");
  const { group, showLoginModal, showRegisterModal, showForgotPasswordModal } =
    useSelector((state) => state.global);
  const location = useLocation();
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location, group]);

  useEffect(() => {
    const newVersion = Settings?.build_version;
    if (!stored_build_version) {
      if (newVersion) {
        localStorage.setItem("build_version", newVersion);
      }
    }
    if (stored_build_version && newVersion) {
      const parseVersion = JSON.parse(stored_build_version);
      if (newVersion > parseVersion) {
        setShowBuildVersion(true);
      }
    }
  }, [stored_build_version]);

  return (
    <div className="login-home">
      {showLoginModal && <Login />}
      {showRegisterModal && <Register />}
      {showForgotPasswordModal && <ForgotPassword />}
      <div id="app">
        <div className="wrapper wolf-open-home">
          <HeaderTopPart />
          <LeftSidebar />
          <div className="main-container">
            <Header />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
