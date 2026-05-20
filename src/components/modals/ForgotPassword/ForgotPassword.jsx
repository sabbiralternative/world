import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Settings } from "../../../api";

import {
  setShowForgotPasswordModal,
  setShowLoginModal,
} from "../../../redux/features/global/globalSlice";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import {
  useForgotPasswordMutation,
  useGetOtpMutation,
} from "../../../redux/features/auth/authApi";

const ForgotPassword = () => {
  const [timer, setTimer] = useState(null);
  const dispatch = useDispatch();
  const [getOTP] = useGetOtpMutation();
  const [handleForgotPassword] = useForgotPasswordMutation();
  const { register, handleSubmit } = useForm();
  const [order, setOrder] = useState({
    orderId: null,
    otpMethod: null,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [mobile, setMobile] = useState("");

  const closeForgotPasswordModal = () => {
    dispatch(setShowForgotPasswordModal(false));
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
    const forgotPasswordData = {
      username: mobile,
      password: data?.password,
      confirmPassword: data?.confirmPassword,
      otp: data?.otp,
      isOtpAvailable: Settings.otp,
      orderId: order.orderId,
      otpMethod: order.otpMethod,
    };

    const result = await handleForgotPassword(forgotPasswordData).unwrap();

    if (result.success) {
      toast.success("Password updated successfully");
      closeForgotPasswordModal();
      dispatch(setShowLoginModal(false));
    } else {
      toast.error(result?.error?.loginName?.[0]?.description);
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
                <h5>Forgot Password</h5>
                <img
                  onClick={closeForgotPasswordModal}
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

                <div className="form-group mb-1">
                  <button type="submit" className="btn btn-primary btn-block">
                    Reset Password
                  </button>
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

export default ForgotPassword;
