import { useLocation, useNavigate } from "react-router-dom";

const HomeNavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const eventTypeId = params.get("eventTypeId");

  return (
    <div data-v-5e69ccab className="mobile-view-nav">
      <div data-v-5e69ccab className="mobile-view lft-side-tabs makeFull">
        <ul data-v-5e69ccab className="home-navigation-bar">
          <li data-v-5e69ccab className="nav-item">
            <a
              data-v-5e69ccab
              className="nav-link aviator_link"
              href="javascript:void(0)"
            >
              <div data-v-5e69ccab className="aviator_content">
                <img
                  data-v-5e69ccab
                  src="/assets/aviator-CjVQwI37.png"
                  alt="aviator"
                  loading="lazy"
                />
                <span data-v-5e69ccab>Vimaan</span>
              </div>
            </a>
          </li>
          <li data-v-5e69ccab className="nav-item">
            <a data-v-5e69ccab>
              <div data-v-5e69ccab className="nav-link">
                <img
                  data-v-5e69ccab
                  src="/assets/ipl-icon-DGvkwZ6u.svg"
                  alt=""
                />
                <span data-v-5e69ccab className="title-all-sport">
                  IPL 2026
                </span>
              </div>
            </a>
          </li>
          <li data-v-5e69ccab className="nav-item">
            <a
              onClick={() => navigate("?eventTypeId=4")}
              data-v-5e69ccab
              className={`nav-link  ${eventTypeId === "4" || eventTypeId === null ? "active" : ""}`}
            >
              <img
                data-v-5e69ccab
                src="/assets/tb-cricket-player-with-bat-CvG7IKFf.svg"
                alt=""
                loading="lazy"
              />
              <span data-v-5e69ccab>&nbsp;cricket</span>
            </a>
          </li>
          <li data-v-5e69ccab className="nav-item">
            <a
              onClick={() => navigate("?eventTypeId=1")}
              data-v-5e69ccab
              className={`nav-link  ${eventTypeId === "1" ? "active" : ""}`}
            >
              <img
                data-v-5e69ccab
                src="/assets/tb-soccer-Bp8hUWlZ.svg"
                alt=""
                loading="lazy"
              />
              <span data-v-5e69ccab>&nbsp;Football</span>
            </a>
          </li>
          <li data-v-5e69ccab className="nav-item">
            <a
              onClick={() => navigate("?eventTypeId=2")}
              data-v-5e69ccab
              className={`nav-link  ${eventTypeId === "2" ? "active" : ""}`}
            >
              <img
                data-v-5e69ccab
                src="/assets/tb-tennis-player-BzPmAIfj.svg"
                alt=""
                loading="lazy"
              />
              <span data-v-5e69ccab>&nbsp;tennis</span>
            </a>
          </li>
          <li data-v-5e69ccab className="nav-item">
            <a
              data-v-5e69ccab
              aria-current="page"
              href="/"
              className="router-link-active router-link-exact-active nav-link"
            >
              <img
                data-v-5e69ccab
                loading="lazy"
                src="/assets/tb-sports-book-CMNk2rvf.svg"
                alt=""
              />
              <span data-v-5e69ccab>Sports Book</span>
            </a>
          </li>
          <li data-v-5e69ccab>
            <a data-v-5e69ccab href="/matka" className="nav-link">
              <img
                data-v-5e69ccab
                loading="lazy"
                src="/assets/matka-icon-BwQowLWi.svg"
                alt=""
              />
              <span data-v-5e69ccab>Matka</span>
            </a>
          </li>
          <li data-v-5e69ccab>
            <a data-v-5e69ccab className="nav-link" href="javascript:void(0);">
              <img
                data-v-5e69ccab
                loading="lazy"
                src="/assets/tb-cricket-fight-B3Dnf6Rw.svg"
                alt=""
              />
              <span data-v-5e69ccab>Cricket Fight</span>
            </a>
          </li>
          <li data-v-5e69ccab className="nav-item">
            <a
              data-v-5e69ccab
              aria-current="page"
              href="/"
              className="router-link-active router-link-exact-active nav-link"
              data-role="live-casino"
            >
              <img
                data-v-5e69ccab
                loading="lazy"
                src="/assets/tb-poker-cards-D3T_YA8Y.svg"
                alt=""
              />
              <span data-v-5e69ccab>Live Casino</span>
            </a>
          </li>
          <li data-v-5e69ccab className="nav-item">
            <a
              data-v-5e69ccab
              aria-current="page"
              href="/"
              className="router-link-active router-link-exact-active nav-link"
            >
              <img
                data-v-5e69ccab
                loading="lazy"
                src="/assets/tb-poker-cards-D3T_YA8Y.svg"
                alt=""
              />
              <span data-v-5e69ccab>Slots</span>
            </a>
          </li>
          <li data-v-5e69ccab className="nav-item">
            <a
              data-v-5e69ccab
              aria-current="page"
              href="/"
              className="router-link-active router-link-exact-active nav-link"
            >
              <img
                data-v-5e69ccab
                loading="lazy"
                src="/assets/tb-evolution-icon-BukDzKq-.svg"
                alt=""
              />
              <span data-v-5e69ccab>Evolution</span>
            </a>
          </li>
          <li data-v-5e69ccab className="nav-item">
            <a data-v-5e69ccab className="nav-link">
              <img
                data-v-5e69ccab
                src="/assets/sports-no-DZr9pepC.svg"
                alt=""
                loading="lazy"
              />
              <span data-v-5e69ccab>FIFA CUP WINNER</span>
            </a>
          </li>
          <li data-v-5e69ccab className="nav-item">
            <a data-v-5e69ccab className="nav-link">
              <img
                data-v-5e69ccab
                src="/assets/sports-no-DZr9pepC.svg"
                alt=""
                loading="lazy"
              />
              <span data-v-5e69ccab>WINNER CUP</span>
            </a>
          </li>
          <li data-v-5e69ccab className="nav-item">
            <a data-v-5e69ccab className="nav-link">
              <img
                data-v-5e69ccab
                src="/assets/tb-election-BeUX9yBo.svg"
                alt=""
                loading="lazy"
              />
              <span data-v-5e69ccab>ELECTION</span>
            </a>
          </li>
          <li data-v-5e69ccab className="nav-item">
            <a data-v-5e69ccab className="nav-link">
              <img
                data-v-5e69ccab
                src="/assets/tb-kabbadi-DKs3rxt3.svg"
                alt=""
                loading="lazy"
              />
              <span data-v-5e69ccab>Kabaddi </span>
            </a>
          </li>
          <li data-v-5e69ccab className="nav-item">
            <a data-v-5e69ccab className="nav-link">
              <img
                data-v-5e69ccab
                src="/assets/sports-no-DZr9pepC.svg"
                alt=""
                loading="lazy"
              />
              <span data-v-5e69ccab>Election</span>
            </a>
          </li>
          <li data-v-5e69ccab className="nav-item">
            <a data-v-5e69ccab className="nav-link">
              <img
                data-v-5e69ccab
                src="/assets/tb-esports-Cxy-4O0u.svg"
                alt=""
                loading="lazy"
              />
              <span data-v-5e69ccab>Esports</span>
            </a>
          </li>
          <li data-v-5e69ccab className="nav-item">
            <a data-v-5e69ccab className="nav-link">
              <img
                data-v-5e69ccab
                src="/assets/tb-mixed-martial-arts-CB6VhAk0.svg"
                alt=""
                loading="lazy"
              />
              <span data-v-5e69ccab>Mixed Martial Arts</span>
            </a>
          </li>
          <li data-v-5e69ccab className="nav-item">
            <a data-v-5e69ccab className="nav-link">
              <img
                data-v-5e69ccab
                src="/assets/tb-gaelic-football-BxceRFju.svg"
                alt=""
                loading="lazy"
              />
              <span data-v-5e69ccab>Gaelic Games</span>
            </a>
          </li>
          <li data-v-5e69ccab className="nav-item">
            <a data-v-5e69ccab className="nav-link">
              <img
                data-v-5e69ccab
                src="/assets/tb-volleyball-Bz1sIoZz.svg"
                alt=""
                loading="lazy"
              />
              <span data-v-5e69ccab>Volleyball</span>
            </a>
          </li>
          <li data-v-5e69ccab className="nav-item">
            <a data-v-5e69ccab className="nav-link">
              <img
                data-v-5e69ccab
                src="/assets/tb-handball-9eC-oF41.svg"
                alt=""
                loading="lazy"
              />
              <span data-v-5e69ccab>Handball</span>
            </a>
          </li>
          <li data-v-5e69ccab className="nav-item">
            <a data-v-5e69ccab className="nav-link">
              <img
                data-v-5e69ccab
                src="/assets/tb-australian-rules-DJAgAD3o.svg"
                alt=""
                loading="lazy"
              />
              <span data-v-5e69ccab>Australian Rules</span>
            </a>
          </li>
          <li data-v-5e69ccab className="nav-item">
            <a data-v-5e69ccab className="nav-link">
              <img
                data-v-5e69ccab
                src="/assets/tb-ice-hockey-B0KKxXuD.svg"
                alt=""
                loading="lazy"
              />
              <span data-v-5e69ccab>Ice Hockey</span>
            </a>
          </li>
          <li data-v-5e69ccab className="nav-item">
            <a data-v-5e69ccab className="nav-link">
              <img
                data-v-5e69ccab
                src="/assets/tb-basketball-BKqmP7-k.svg"
                alt=""
                loading="lazy"
              />
              <span data-v-5e69ccab>Basketball</span>
            </a>
          </li>
          <li data-v-5e69ccab className="nav-item">
            <a data-v-5e69ccab className="nav-link">
              <img
                data-v-5e69ccab
                src="/assets/tb-baseball-vsYrMHCf.svg"
                alt=""
                loading="lazy"
              />
              <span data-v-5e69ccab>Baseball</span>
            </a>
          </li>
          <li data-v-5e69ccab className="nav-item">
            <a data-v-5e69ccab className="nav-link">
              <img
                data-v-5e69ccab
                src="/assets/tb-american-football-BALBURiu.svg"
                alt=""
                loading="lazy"
              />
              <span data-v-5e69ccab>American Football</span>
            </a>
          </li>
          <li data-v-5e69ccab className="nav-item">
            <a data-v-5e69ccab className="nav-link">
              <img
                data-v-5e69ccab
                src="/assets/tb-snooker-j3wsxn9g.svg"
                alt=""
                loading="lazy"
              />
              <span data-v-5e69ccab>Snooker</span>
            </a>
          </li>
          <li data-v-5e69ccab className="nav-item">
            <a data-v-5e69ccab className="nav-link">
              <img
                data-v-5e69ccab
                src="/assets/sports-no-DZr9pepC.svg"
                alt=""
                loading="lazy"
              />
              <span data-v-5e69ccab>Table tennis</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeNavigationBar;
