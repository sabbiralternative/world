import { useDispatch, useSelector } from "react-redux";
import useBalance from "../../../hooks/balance";
import { useRef, useState } from "react";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import { logout } from "../../../redux/features/auth/authSlice";
import { Link } from "react-router-dom";

const LoggedIn = () => {
  const dispatch = useDispatch();
  const mobileMenuRef = useRef(null);
  const ref = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  const { data } = useBalance();
  const { user } = useSelector((state) => state.auth);

  useCloseModalClickOutside(ref, () => setShowDropdown(false));
  useCloseModalClickOutside(mobileMenuRef, () => setShowMobileDropdown(false));

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="float-right header-right">
      <div className="balance d-none-mobile">
        <div>
          <i className="fas fa-wallet" />
        </div>
        <div>
          <span className="balance-value">pts: : {data?.availBalance}</span>
          <span className="balance-value">exp: {data?.deductedExposure}</span>
        </div>
      </div>
      <div
        ref={ref}
        onClick={() => setShowDropdown(!showDropdown)}
        data-toggle="collapse"
        data-target="#user-dropdown"
        className="username-info d-none-mobile collapsed"
        aria-expanded="false"
      >
        <span className="user-icon">
          <i className="fas fa-user" />
        </span>
        <span className="username">{user}</span>
        <img src="https://wver.sprintstaticdata.com/v223/static/front/img/arrow-down.svg" />
        <div
          id="user-dropdown"
          className={`collapse user-dropdown ${showDropdown ? "show" : ""}  `}
        >
          <Link to="/deposit" className="dropdown-item">
            Deposit
          </Link>
          <Link to="/withdraw" className="dropdown-item">
            Withdraw
          </Link>
          <Link to="/deposit-withdraw-report" className="dropdown-item">
            Deposit Withdraw Report
          </Link>
          <Link to="/betting-profit-loss" className="dropdown-item">
            Betting Profit Loss
          </Link>
          <Link to="/my-bank-details" className="dropdown-item">
            My Bank Details
          </Link>
          <Link to="/bonus-statement" className="dropdown-item">
            Bonus Statement
          </Link>

          <div className="login-seperator" />
          <a onClick={handleLogout}>Logout</a>
        </div>
      </div>
      <div className="text-center d-none-desktop bal-point">
        pts:
        <span>{data?.availBalance}</span>{" "}
        <span>| {data?.deductedExposure}</span>
      </div>

      <div
        ref={mobileMenuRef}
        onClick={() => setShowMobileDropdown(!showMobileDropdown)}
        className="username-info d-none-desktop"
      >
        <div
          data-toggle="collapse"
          data-target="#user-dropdown"
          className="d-inline-block collapsed"
          aria-expanded="false"
        >
          <span className="user-icon">
            <i className="fas fa-user" />
          </span>
          <span className="username">{user}</span>
          <img src="https://wver.sprintstaticdata.com/v223/static/front/img/arrow-down.svg" />
        </div>
        <div
          id="user-dropdown"
          className={`collapse user-dropdown  ${showMobileDropdown ? "show" : ""}  `}
        >
          <Link to="/deposit" className="dropdown-item">
            Deposit
          </Link>
          <Link to="/withdraw" className="dropdown-item">
            Withdraw
          </Link>
          <Link to="/deposit-withdraw-report" className="dropdown-item">
            Deposit Withdraw Report
          </Link>
          <Link to="/betting-profit-loss" className="dropdown-item">
            Betting Profit Loss
          </Link>
          <Link to="/my-bank-details" className="dropdown-item">
            My Bank Details
          </Link>
          <Link to="/bonus-statement" className="dropdown-item">
            Bonus Statement
          </Link>
          <div className="login-seperator" />
          <a onClick={handleLogout}>Logout</a>
        </div>
      </div>
    </div>
  );
};

export default LoggedIn;
