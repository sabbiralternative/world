import useBalance from "../../../hooks/balance";
import { useNavigate } from "react-router-dom";

export const Authorized = () => {
  const navigate = useNavigate();
  const { data, refetch } = useBalance();

  return (
    <div data-v-a601f501 className="balance">
      <div data-v-a601f501 className="Myaccount-after-login">
        <div data-v-a601f501 className="mo_user-blnc header_btns">
          <ul data-v-a601f501>
            <li data-v-a601f501>
              <a data-v-a601f501 href="Javascript:void(0);">
                Main PTI <b data-v-a601f501>{data?.availBalance}</b>
              </a>
            </li>
            <li data-v-a601f501>
              <a data-v-a601f501 className="exp-topcount">
                Exposure ({" "}
                <span data-v-a601f501 className="exp">
                  {data?.deductedExposure}
                </span>{" "}
                ){" "}
              </a>
            </li>
          </ul>
        </div>

        <div data-v-a601f501 className="reload-banking-btn">
          <div data-v-a601f501 className="login-refresh-MAcnt-btn">
            <button
              onClick={() => refetch()}
              data-v-a601f501
              type="button"
              className="header_btns"
            >
              <img
                data-v-a601f501
                loading="lazy"
                src="/assets/reload-DKzQ224O.png"
                alt=""
              />
            </button>
          </div>
          <div data-v-a601f501 className="acc-setting-btn">
            <button
              onClick={() => navigate("/settings")}
              data-v-a601f501
              type="button"
              className="header_btns"
            >
              <img
                data-v-a601f501
                loading="lazy"
                src="/assets/settings-CbzoTn8v.png"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
