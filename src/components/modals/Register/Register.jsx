import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Settings } from "../../../api";
import { setUser } from "../../../redux/features/auth/authSlice";
import {
  setShowBanner,
  setShowLoginModal,
  setShowRegisterModal,
} from "../../../redux/features/global/globalSlice";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import {
  useGetOtpMutation,
  useRegisterMutation,
} from "../../../redux/features/auth/authApi";

const Register = () => {
  const affnook_token = localStorage.getItem("affnook_token");
  const referralCode = localStorage.getItem("referralCode");
  const dispatch = useDispatch();
  const [getOTP] = useGetOtpMutation();
  const [handleRegister] = useRegisterMutation();
  const { register, handleSubmit } = useForm();
  const [timer, setTimer] = useState(null);
  const [order, setOrder] = useState({
    orderId: null,
    otpMethod: null,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [mobile, setMobile] = useState("");

  const closeRegisterModal = () => {
    dispatch(setShowRegisterModal(false));
  };

  const handleOTP = async () => {
    const res = await getOTP({ mobile }).unwrap();
    if (res?.success) {
      setTimer(60);
      setOrder({
        orderId: res?.result?.orderId,
        otpMethod: "sms",
      });
      toast.success(res?.result?.message);
    } else {
      toast.error(res?.error?.errorMessage);
    }
  };

  const onSubmit = async (data) => {
    const registerData = {
      username: "",
      password: data?.password,
      confirmPassword: data?.confirmPassword,
      mobile: mobile,
      otp: data?.otp,
      isOtpAvailable: Settings.otp,
      referralCode: referralCode || data?.referralCode,
      orderId: order.orderId,
      otpMethod: order.otpMethod,
      affnook_token: affnook_token || null,
    };

    const result = await handleRegister(registerData).unwrap();

    if (result.success) {
      if (window?.fbq) {
        window.fbq("track", "CompleteRegistration", {
          content_name: "User Signup",
          status: "success",
        });
      }
      localStorage.removeItem("referralCode");
      const token = result?.result?.token;
      const bonusToken = result?.result?.bonusToken;
      const user = result?.result?.loginName;
      const memberId = result?.result?.memberId;
      const game = result?.result?.buttonValue?.game;
      const banner = result?.result?.banner;
      dispatch(setUser({ user, token, memberId }));
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("bonusToken", bonusToken);
      localStorage.setItem("token", token);
      if (banner) {
        localStorage.setItem("banner", banner);
        dispatch(setShowBanner(true));
      }
      if (token && user) {
        closeRegisterModal();
        toast.success("Register successful");
      }
    } else {
      toast.error(result?.error?.description);
    }
  };

  const handleMobileNo = (e) => {
    if (e.target.value.length <= 10) {
      setMobile(e.target.value);
    }
  };

  useEffect(() => {
    let interval = null;
    if (timer) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer > 0) return prevTimer - 1;
          clearInterval(interval);
          return 0;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const showLogin = () => {
    closeRegisterModal();
    dispatch(setShowLoginModal(true));
  };
  return (
    <div
      id="login-point___BV_modal_outer_"
      style={{ position: "absolute", zIndex: 1040 }}
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
            id="login-point___BV_modal_content_"
            tabIndex={-1}
            className="modal-content"
          >
            <header
              id="login-point___BV_modal_header_"
              className="modal-header"
            >
              <div aria-label="Close" className="close-login-modal">
                <h5>Register</h5>
                <img
                  onClick={closeRegisterModal}
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
                  <label className="user-email-text">Mobile</label>
                  <div className="input-group">
                    <input
                      placeholder="Enter Phone Number"
                      onChange={(e) => handleMobileNo(e)}
                      value={mobile}
                      className="form-control"
                    />
                    <div className="input-group-append">
                      {timer ? (
                        <button
                          onClick={() => setShowPassword(!showPassword)}
                          type="button"
                          className="btn btn-secondary password-visible"
                        >
                          Retry in {timer}
                        </button>
                      ) : (
                        <button
                          onClick={handleOTP}
                          type="button"
                          className="btn btn-secondary password-visible"
                          disabled={Settings.otp && mobile?.length < 10}
                        >
                          Get OTP
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="user-email-text">OTP</label>
                  <input
                    {...register("otp", { required: true })}
                    type="text"
                    placeholder="Enter OTP"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label className="user-email-text">Password</label>
                  <div className="input-group">
                    <input
                      {...register("password", { required: true })}
                      placeholder="Enter Password"
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                    />
                    <div className="input-group-append">
                      <button
                        onClick={() => setShowPassword(!showPassword)}
                        type="button"
                        className="btn btn-secondary password-visible"
                      >
                        <i
                          aria-hidden="true"
                          className={`fa  ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="user-email-text">Confirm Password</label>
                  <div className="input-group">
                    <input
                      {...register("confirmPassword", { required: true })}
                      placeholder="Enter Password"
                      type={showConfirmPassword ? "text" : "password"}
                      className="form-control"
                    />
                    <div className="input-group-append">
                      <button
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        type="button"
                        className="btn btn-secondary password-visible"
                      >
                        <i
                          aria-hidden="true"
                          className={`fa  ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"}`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="user-email-text">
                    Referral Code(Optional)
                  </label>
                  <input
                    readOnly={referralCode}
                    {...register("referralCode")}
                    type="text"
                    defaultValue={referralCode}
                    placeholder="Enter Referral Code (Optional)"
                    className="form-control"
                  />
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
                    Register
                  </button>
                  <div className="login-btn-devider">or</div>

                  <div className="text-center mt-3">
                    Already have account? <a onClick={showLogin}>Login</a>
                  </div>
                  <div
                    className="d-flex"
                    style={{ alignItems: "center", gap: "10px" }}
                  ></div>
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

export default Register;
