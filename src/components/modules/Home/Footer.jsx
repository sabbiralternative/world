import { useSelector } from "react-redux";
import { Settings } from "../../../api";
import images from "../../../assets/images";
import { Link } from "react-router-dom";

const Footer = () => {
  const { token } = useSelector((state) => state.auth);
  const navigateWhatsApp = () => {
    if (token && Settings?.branchWhatsapplink) {
      window.open(Settings?.branchWhatsapplink, "_blank");
    } else {
      window.open(Settings?.whatsapplink, "_blank");
    }
  };
  return (
    <footer className="footer">
      <div className="support">
        <div>
          <div className="w-100 text-center">
            <b>24X7 Support</b>
          </div>
          <div className="text-center w-100"></div>
        </div>
        <div className="footer-social">
          {(Settings?.whatsapplink || Settings?.branchWhatsapplink) && (
            <a onClick={navigateWhatsApp}>
              <img src={images.whatsapp} alt="facebook" />
            </a>
          )}

          {Settings?.instagramLink && (
            <a
              onClick={() => window.open(Settings?.instagramLink, "_blank")}
              target="_blank"
            >
              <img src={images.instagram} alt="instagram" />
            </a>
          )}
          {Settings?.telegramLink && (
            <a onClick={() => window.open(Settings?.telegramLink, "_blank")}>
              <img src={images.telegram} alt="telegram" />
            </a>
          )}
        </div>
      </div>
      <div className="footer-menu">
        <ul>
          <li>
            <Link to="/terms-and-conditions" className target="_blank">
              Terms and Conditions
            </Link>
          </li>
          <li>
            <Link to="/responsible-gaming" className target="_blank">
              Responsible Gaming
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-box">
        <div className="footer-top">
          <div className="secure-logo">
            <div>
              <img
                src="https://wver.sprintstaticdata.com/v223/static/front/img/ssl.png"
                alt="ssl"
              />
            </div>
            <div className="ml-2">
              <b>100% SAFE</b>
              <div>Protected connection and encrypted data</div>
            </div>
          </div>
          <div className="d-inline-block footer-other">
            <a href="javascript:void(0)" role="button">
              <img
                src="https://wver.sprintstaticdata.com/v223/static/front/img/18plus.png"
                alt="18plus"
              />
            </a>

            <a href="https://www.gamcare.org.uk/" target="_blank">
              <img
                src="https://wver.sprintstaticdata.com/v223/static/front/img/gamecare.png"
                alt="gamecare"
              />
            </a>
            <a href="https://www.gamblingtherapy.org/en" target="_blank">
              <img
                src="https://wver.sprintstaticdata.com/v223/static/front/img/gt.png"
                alt="gamblingtherapy"
              />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="ws-pre-wrap">
            This website is owned and operated by (WORLD777.COM) Seven
            Investments America N.V.. registration number: 152581, registered
            address: Zuikertuintjeweg Z/N (Zuikertuin Tower), Curaçao. Contact
            us info@world7.com. world7.com is licensed and regulated by the
            Government of the Autonomous Island of Anjouan, Union of Comoros and
            operates under License No. ALSI-122310018-F16. world7.com has passed
            all regulatory compliance and is legally authorized to conduct
            gaming operations for any and all games of chance and wagering.
          </span>
        </div>
      </div>
      <div className="text-center mt-1 w-100 copyright">
        © Copyright 2020. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
