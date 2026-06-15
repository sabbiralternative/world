import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../../redux/features/auth/authApi";
import { useForm } from "react-hook-form";
import { Settings } from "../../../api";
import { setUser } from "../../../redux/features/auth/authSlice";
import {
  setShowBanner,
  setShowForgotPasswordModal,
  setShowLoginModal,
  setShowRegisterModal,
} from "../../../redux/features/global/globalSlice";
import toast from "react-hot-toast";
import { useRef, useState } from "react";
import useCloseModalClickOutside from "../../../hooks/closeModal";

const Login = () => {
  const ref = useRef();
  const { closePopupForForever } = useSelector((state) => state.global);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [handleLogin] = useLoginMutation();
  const { register, handleSubmit } = useForm();

  const closeLoginModal = () => {
    dispatch(setShowLoginModal(false));
  };

  useCloseModalClickOutside(ref, closeLoginModal);

  const onSubmit = async ({ username, password }) => {
    const loginData = {
      username: username,
      password: password,
      b2c: Settings.b2c,
      apk: closePopupForForever ? true : false,
      nonce: crypto.randomUUID(),
    };
    const result = await handleLogin(loginData).unwrap();

    if (result.success) {
      const token = result?.result?.token;
      const bonusToken = result?.result?.bonusToken;
      const user = result?.result?.loginName;
      const game = result?.result?.buttonValue?.game;
      const memberId = result?.result?.memberId;
      const banner = result?.result?.banner;

      dispatch(setUser({ user, token, memberId }));
      localStorage.setItem("memberId", memberId);
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("token", token);
      localStorage.setItem("bonusToken", bonusToken);
      if (banner) {
        localStorage.setItem("banner", banner);
        dispatch(setShowBanner(true));
      }
      if (result?.result?.changePassword) {
        closeLoginModal();
        localStorage.setItem("changePassword", true);
        navigate("/change-password");
      }
      if (!result?.result?.changePassword && token && user) {
        closeLoginModal();
        toast.success("Login successful");
      }
    } else {
      toast.error(result?.error);
    }
  };

  /* handle login demo user */
  const loginWithDemo = async () => {
    /* Random token generator */
    /* Encrypted the post data */
    const loginData = {
      username: "demo",
      password: "",
      b2c: Settings.b2c,
      apk: closePopupForForever ? true : false,
      nonce: crypto.randomUUID(),
    };
    const result = await handleLogin(loginData).unwrap();

    if (result.success) {
      const token = result?.result?.token;
      const bonusToken = result?.result?.bonusToken;
      const user = result?.result?.loginName;
      const game = result?.result?.buttonValue?.game;
      const banner = result?.result?.banner;

      dispatch(setUser({ user, token }));
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("token", token);

      localStorage.setItem("bonusToken", bonusToken);
      if (banner) {
        localStorage.setItem("banner", banner);
        dispatch(setShowBanner(true));
      }
      if (token && user) {
        closeLoginModal();
        toast.success("Login successful");
      }
    } else {
      toast.error(result?.error);
    }
  };

  const handleDownload = (e) => {
    e.preventDefault();
    const fileUrl = Settings.apk_link;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "site.apk");
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };

  const getWhatsAppId = (link) => {
    window.open(link, "_blank");
  };

  const showRegister = () => {
    closeLoginModal();
    dispatch(setShowRegisterModal(true));
  };
  const showForgotPassword = () => {
    closeLoginModal();
    dispatch(setShowForgotPasswordModal(true));
  };
  return (
    <div
      id="login-point___BV_modal_outer_"
      style={{ position: "absolute", zIndex: 9999999 }}
    >
      <div
        id="login-point"
        role="dialog"
        aria-describedby="login-point___BV_modal_body_"
        className="modal fade show modal-login-new"
        aria-modal="true"
        style={{ display: "block", paddingLeft: "0px" }}
      >
        <div className="modal-dialog modal-md">
          <span tabIndex={0} />
          <div
            ref={ref}
            id="login-point___BV_modal_content_"
            tabIndex={-1}
            className="modal-content"
          >
            <header
              id="login-point___BV_modal_header_"
              className="modal-header"
            >
              <div aria-label="Close" className="close-login-modal">
                <h5>Login</h5>
                <img
                  onClick={closeLoginModal}
                  src="https://wver.sprintstaticdata.com/v223/static/front/img/close.svg"
                  alt="close"
                />
              </div>
            </header>
            <div id="login-point___BV_modal_body_" className="modal-body">
              <form
                onSubmit={handleSubmit(onSubmit)}
                autoComplete="off"
                className="login-form mt-0"
              >
                <div className="form-group">
                  <label className="user-email-text">Username</label>
                  <input
                    {...register("username", { required: true })}
                    type="text"
                    placeholder="Enter Username"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label className="user-email-text">Password</label>
                  <div className="input-group">
                    <input
                      {...register("password", { required: true })}
                      placeholder="Enter Password"
                      type={showPass ? "text" : "password"}
                      className="form-control"
                    />
                    <div className="input-group-append">
                      <button
                        onClick={() => setShowPass(!showPass)}
                        type="button"
                        className="btn btn-secondary password-visible"
                      >
                        <i
                          aria-hidden="true"
                          className={`fa  ${showPass ? "fa-eye-slash" : "fa-eye"}`}
                        />
                      </button>
                    </div>
                  </div>
                  <div className="text-right mt-1">
                    <a onClick={showForgotPassword}>Forgot Password?</a>
                  </div>
                </div>
                <div className="form-group">
                  <div className="custom-control custom-checkbox d-inline-block">
                    <input
                      type="checkbox"
                      id="customCheck"
                      name="example1"
                      className="custom-control-input"
                      defaultChecked
                    />
                    <label
                      htmlFor="customCheck"
                      className="custom-control-label"
                    >
                      I am at least
                      <a className="text-danger" role="button">
                        18 years
                      </a>
                      of age and I have read, accept and agree to the
                      <a className>Terms and Conditions</a>,
                      <a className>Responsible Gaming</a>,<a>GamCare</a>,
                      <a>Gambling Therapy</a>
                    </label>
                  </div>
                </div>
                <div className="form-group mb-1">
                  <button type="submit" className="btn btn-primary btn-block">
                    Login
                  </button>
                  <div className="login-btn-devider">or</div>
                  <button
                    onClick={loginWithDemo}
                    type="button"
                    className="btn btn-primary btn-block"
                  >
                    Request a Demo
                  </button>
                  <div className="text-center mt-3">
                    Don&apos;t have an account?{" "}
                    <a onClick={showRegister}>Register</a>
                  </div>
                  <div
                    className="d-flex"
                    style={{ alignItems: "center", gap: "10px" }}
                  >
                    {Settings?.whatsapplink && (
                      <button
                        style={{ width: "100%" }}
                        onClick={() => getWhatsAppId(Settings?.whatsapplink)}
                        type="button"
                        className="btn btn-primary"
                      >
                        Whatsapp
                      </button>
                    )}
                    {Settings?.apk_link && (
                      <button
                        style={{ width: "100%" }}
                        onClick={handleDownload}
                        type="button"
                        className="btn btn-primary"
                      >
                        Download .apk
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div id="login-point___BV_modal_backdrop_" className="modal-backdrop" />
    </div>
  );
};

export default Login;
