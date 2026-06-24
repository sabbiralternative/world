import { useDispatch, useSelector } from "react-redux";
import useBalance from "../../../hooks/balance";
import { useRef, useState } from "react";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import { logout } from "../../../redux/features/auth/authSlice";
import { Link } from "react-router-dom";
import { Settings } from "../../../api";
import StakeSetting from "../../modals/StakeSetting/StakeSetting";
import images from "../../../assets/images";
import { useLanguage } from "../../../context/LanguageProvider";
import Language from "../../modals/Language";
import { languageValue } from "../../../utils/language";
import { LanguageKey } from "../../../const";

const LoggedIn = () => {
  const { language, valueByLanguage } = useLanguage();
  const [showLanguage, setShowLanguage] = useState(false);
  const [showStakeSettings, setShowStakeSettings] = useState(false);
  const { closePopupForForever } = useSelector((state) => state.global);
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
      {showStakeSettings && (
        <StakeSetting setShowStakeSettings={setShowStakeSettings} />
      )}
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
            {languageValue(valueByLanguage, LanguageKey.DEPOSIT)}
          </Link>
          <Link to="/withdraw" className="dropdown-item">
            {languageValue(valueByLanguage, LanguageKey.WITHDRAW)}
          </Link>
          <Link to="/deposit-withdraw-report" className="dropdown-item">
            Deposit Withdraw Report
          </Link>
          <Link to="/betting-profit-loss" className="dropdown-item">
            Betting Profit Loss
          </Link>
          <Link to="/my-bank-details" className="dropdown-item">
            {languageValue(valueByLanguage, LanguageKey.MY_BANK_DETAILS)}
          </Link>
          <Link to="/bonus-statement" className="dropdown-item">
            {languageValue(valueByLanguage, LanguageKey.BONUS_STATEMENT)}
          </Link>
          {Settings?.referral && (
            <Link to="/affiliate" className="dropdown-item">
              Affiliate
            </Link>
          )}

          <Link to="/promotions" className="dropdown-item">
            Promos & Bonus
          </Link>
          <Link to="/lossback-bonus" className="dropdown-item">
            Lossback Bonus
          </Link>
          {closePopupForForever && (
            <Link to="/app-only-bonus" className="dropdown-item">
              App Only Bonus
            </Link>
          )}
          <a
            onClick={() => setShowStakeSettings(true)}
            className="dropdown-item"
          >
            Stake Settings
          </a>

          <div className="login-seperator" />
          <a onClick={handleLogout}>
            {" "}
            {languageValue(valueByLanguage, LanguageKey.LOGOUT)}
          </a>
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
            {languageValue(valueByLanguage, LanguageKey.DEPOSIT)}
          </Link>
          <Link to="/withdraw" className="dropdown-item">
            {languageValue(valueByLanguage, LanguageKey.WITHDRAW)}
          </Link>
          <Link to="/deposit-withdraw-report" className="dropdown-item">
            Deposit Withdraw Report
          </Link>
          <Link to="/betting-profit-loss" className="dropdown-item">
            Betting Profit Loss
          </Link>
          <Link to="/my-bank-details" className="dropdown-item">
            {languageValue(valueByLanguage, LanguageKey.MY_BANK_DETAILS)}
          </Link>
          <Link to="/bonus-statement" className="dropdown-item">
            {languageValue(valueByLanguage, LanguageKey.BONUS_STATEMENT)}
          </Link>
          {Settings?.referral && (
            <Link to="/affiliate" className="dropdown-item">
              Affiliate
            </Link>
          )}

          <Link to="/promotions" className="dropdown-item">
            Promos & Bonus
          </Link>
          <Link to="/lossback-bonus" className="dropdown-item">
            Lossback Bonus
          </Link>
          {closePopupForForever && (
            <Link to="/app-only-bonus" className="dropdown-item">
              App Only Bonus
            </Link>
          )}
          <a
            onClick={() => setShowStakeSettings(true)}
            className="dropdown-item"
          >
            Stake Settings
          </a>
          <div className="login-seperator" />
          <a onClick={handleLogout}>
            {" "}
            {languageValue(valueByLanguage, LanguageKey.LOGOUT)}
          </a>
        </div>
      </div>
      <div style={{ position: "relative", padding: "1px 4px" }}>
        {Settings.language && (
          <button onClick={() => setShowLanguage((prev) => !prev)}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "end",
                background: "transparent",
                border: "none",
              }}
            >
              <img
                style={{
                  height: "20px",
                  width: "20px",
                }}
                src={images.globe}
                alt=""
              />
              <b
                style={{
                  margin: "0px",
                  fontSize: "10px",
                  textTransform: "capitalize",
                  color: "white",
                }}
              >
                {language || "EN"}
              </b>
            </div>
          </button>
        )}
        {showLanguage && <Language setShowLanguage={setShowLanguage} />}
      </div>
    </div>
  );
};

export default LoggedIn;
