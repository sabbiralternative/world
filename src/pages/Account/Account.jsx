import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/features/auth/authSlice";

const Account = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, memberId } = useSelector((state) => state.auth);
  return (
    <div data-v-2f3cedbb>
      <section className="mobile-account" loading="lazy">
        <div className="mobile-menus-screen">
          <div className="user-profile flex-d">
            <div className="account-circle">
              <h3>
                <img
                  loading="lazy"
                  src="/assets/user-icon123-DbL8niSy.png"
                  alt=""
                />
                {user}
              </h3>
              <div className="tooltip-container">
                <button type="button" className="copy_btn text">
                  <img
                    loading="lazy"
                    src="/assets/copy-bold-DvClfR-5.svg"
                    alt="moon"
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="setting-one-click-bet-sec">
            <span>Member ID: &nbsp; </span>
            <div className="iconText">
              <span className="exp_bal_amo-size">{memberId}</span>
              <span className="edit_icon">
                <i className="fa fa-pen" />
              </span>
            </div>
          </div>

          <ul>
            <li>
              <Link to="/profile" className>
                My Profile
              </Link>
            </li>

            <li>
              <Link to="/bet-history" className>
                Bets History
              </Link>
            </li>
            <li>
              <Link to="/account-statements" className>
                Account Statement
              </Link>
            </li>
            <li>
              <Link to="/profit-loss" className>
                Profit/Loss
              </Link>
            </li>
          </ul>
          <a
            onClick={() => {
              dispatch(logout());
              navigate("/");
            }}
            className="mbl-logout-btn"
            data-bs-toggle="modal"
            data-bs-target="#logoutmodal"
          >
            LOGOUT
            <img
              src="/assets/sign-out-DPrmzSef.png"
              alt="sign"
              className="sign_out"
            />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Account;
