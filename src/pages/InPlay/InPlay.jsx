import moment from "moment";
import { useGroupQuery } from "../../hooks/group";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const InPlay = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const { data } = useGroupQuery({ sportsType: 0 });
  const [tab, setTab] = useState("inPlay");
  const eventName = {
    1: "Football",
    2: "Tennis",
    4: "Cricket",
  };

  const todayMoment = moment().startOf("day");
  const groupedData = useMemo(() => {
    if (!data) return { inPlay: {}, today: {}, upcoming: {} };

    return Object.entries(data).reduce(
      (acc, [key, value]) => {
        if (!value.visible) return acc;

        const matchDate = moment(value.date, "DD/MM/YYYY HH:mm");

        if (value.inPlay === 1) {
          acc.inPlay[key] = value;
        } else if (matchDate.isSame(todayMoment, "day")) {
          acc.today[key] = value;
        } else {
          acc.upcoming[key] = value;
        }

        return acc;
      },
      { inPlay: {}, today: {}, upcoming: {} },
    );
  }, [data]);

  const finalData =
    tab === "inPlay"
      ? groupedData.inPlay
      : tab === "today"
        ? groupedData.today
        : groupedData.upcoming;
  const navigateGameList = (keys) => {
    navigate(`/event-details/${data[keys]?.eventTypeId}/${keys}`);
  };

  //   const sortedData = Object.entries(finalData)
  //     .filter(([, value]) => value.visible === true)
  //     .sort(([, a], [, b]) => {
  //       return b.inPlay - a.inPlay;
  //     });

  useEffect(() => {
    if (finalData) {
      const categories = Array.from(
        new Set(
          Object.values(finalData)
            .filter((item) => item.visible)
            .map((item) => item.eventTypeId),
        ),
      );
      const sortedCategories = categories.sort((a, b) => {
        const order = { 4: 0, 1: 1, 2: 2 };
        return order[a] - order[b];
      });
      setCategories(sortedCategories);
    }
  }, [finalData]);

  return (
    <div data-v-2f3cedbb>
      <section
        data-v-2f3cedbb
        className="simplebar-content-wrapper dashbord-p-top"
        loading="lazy"
      >
        <div className="contan">
          <div className="user-box">
            <div className="match-menu">
              <div data-v-1354c224 className="match-days-tab">
                <div data-v-1354c224 className="match-days-head">
                  <ul
                    data-v-1354c224
                    className="nav nav-tabs"
                    id="myTab"
                    role="tablist"
                  >
                    <li
                      data-v-1354c224
                      className="nav-item"
                      role="presentation"
                    >
                      <button
                        onClick={() => setTab("inPlay")}
                        data-v-1354c224
                        className={`nav-link  ${tab === "inPlay" ? "active" : ""}`}
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home"
                        type="button"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        <span data-v-1354c224>In-Play </span>
                      </button>
                    </li>
                    <li
                      data-v-1354c224
                      className="nav-item"
                      role="presentation"
                    >
                      <button
                        onClick={() => setTab("today")}
                        data-v-1354c224
                        className={`nav-link  ${tab === "today" ? "active" : ""}`}
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#profile"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        <span data-v-1354c224>Today</span>
                      </button>
                    </li>
                    <li
                      data-v-1354c224
                      className="nav-item"
                      role="presentation"
                    >
                      <button
                        onClick={() => setTab("tomorrow")}
                        data-v-1354c224
                        className={`nav-link  ${tab === "tomorrow" ? "active" : ""}`}
                        id="contact-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#contact"
                        type="button"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false"
                      >
                        <span data-v-1354c224>Tomorrow</span>
                      </button>
                    </li>
                  </ul>
                </div>
                <div
                  data-v-1354c224
                  className="play-days-match inplayMatch-wrap"
                >
                  {categories?.map((category) => {
                    const filteredData = Object.entries(finalData).filter(
                      ([, value]) =>
                        value.eventTypeId === category &&
                        value.visible === true,
                    );

                    console.log(filteredData);
                    return (
                      <div key={category} data-v-1354c224 className="tab-set">
                        <div data-v-1354c224 className="tab-panel hero-img">
                          <div data-v-1354c224 className="match-play">
                            <div data-v-1354c224 className="ng-star-inserted">
                              <div
                                data-v-1354c224
                                className="competition-head inplay-header-filter"
                              >
                                <h3 data-v-1354c224 className="text-capitalize">
                                  {eventName[category]}
                                </h3>
                              </div>
                              <div className="oneX2" data-v-1354c224>
                                <div
                                  className="container-fluid"
                                  data-v-1354c224
                                >
                                  <div className="row" data-v-1354c224>
                                    <div className="col-md-7" data-v-1354c224 />
                                    <div className="col-md-4" data-v-1354c224>
                                      <div
                                        className="oddsEventlist"
                                        data-v-1354c224
                                      >
                                        <div
                                          className="btn-group"
                                          data-v-1354c224
                                        >
                                          <span data-v-1354c224>1</span>
                                        </div>
                                        <div
                                          className="btn-group"
                                          data-v-1354c224
                                        >
                                          <span data-v-1354c224>X</span>
                                        </div>
                                        <div
                                          className="btn-group"
                                          data-v-1354c224
                                        >
                                          <span data-v-1354c224>2</span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-1" data-v-1354c224 />
                                  </div>
                                </div>
                              </div>
                              <div data-v-1354c224 className="ng-star-inserted">
                                <div
                                  data-v-c9d3df59
                                  className="odds-header-container"
                                ></div>

                                {filteredData.map(([key, value]) => {
                                  return (
                                    <div
                                      onClick={() => navigateGameList(key)}
                                      key={key}
                                      data-v-c9d3df59
                                      className="sportsWrap-list"
                                    >
                                      <div
                                        data-v-c9d3df59
                                        className="matchname match-details-head"
                                      >
                                        <div
                                          data-v-c9d3df59
                                          className="match-name-h"
                                        >
                                          <div
                                            data-v-c9d3df59
                                            className="topLine"
                                          >
                                            <a data-v-c9d3df59>
                                              {value?.eventName}
                                            </a>

                                            {value?.inPlay === 1 ? (
                                              <span
                                                data-v-c9d3df59
                                                className="inplay-animation-text"
                                              >
                                                In-Play
                                              </span>
                                            ) : (
                                              <span
                                                data-v-c9d3df59
                                                className="clock-icon fas fa-clock"
                                              />
                                            )}
                                          </div>
                                          <span
                                            data-v-c9d3df59
                                            className="match-time-and-date"
                                          >
                                            {value?.date}
                                          </span>
                                        </div>
                                        <div
                                          data-v-c9d3df59
                                          className="game-bookmaker-icons"
                                        >
                                          {value?.isBookmaker === 1 && (
                                            <span
                                              data-v-c9d3df59
                                              className="game-bookmakers"
                                            >
                                              BM
                                            </span>
                                          )}
                                          {value?.isFancy === 1 && (
                                            <span
                                              data-v-c9d3df59
                                              className="game-fancy"
                                            >
                                              F
                                            </span>
                                          )}
                                          {value?.isTv === 1 && (
                                            <span
                                              data-v-c9d3df59
                                              className="game-sportbook"
                                            >
                                              TV
                                            </span>
                                          )}
                                        </div>
                                        <div
                                          data-v-c9d3df59
                                          className="oddsEventlist"
                                        >
                                          <div
                                            data-v-c9d3df59
                                            className="btn-group"
                                          >
                                            <button
                                              data-v-c9d3df59
                                              className="back"
                                            >
                                              {value?.[0]?.ex
                                                ?.availableToBack?.[0]?.price ||
                                                "-"}
                                            </button>
                                            <button
                                              data-v-c9d3df59
                                              className="lay"
                                            >
                                              {value?.[0]?.ex
                                                ?.availableToLay?.[0]?.price ||
                                                "-"}
                                            </button>
                                          </div>
                                          <div
                                            data-v-c9d3df59
                                            className="btn-group"
                                          >
                                            <button
                                              data-v-c9d3df59
                                              className="back"
                                            >
                                              {value?.[2]?.ex
                                                ?.availableToBack?.[0]?.price ||
                                                "-"}
                                            </button>
                                            <button
                                              data-v-c9d3df59
                                              className="lay"
                                            >
                                              {value?.[2]?.ex
                                                ?.availableToLay?.[0]?.price ||
                                                "-"}
                                            </button>
                                          </div>
                                          <div
                                            data-v-c9d3df59
                                            className="btn-group"
                                          >
                                            <button
                                              data-v-c9d3df59
                                              className="back"
                                            >
                                              {value?.[1]?.ex
                                                ?.availableToBack?.[0]?.price ||
                                                "-"}
                                            </button>
                                            <button
                                              data-v-c9d3df59
                                              className="lay"
                                            >
                                              {value?.[1]?.ex
                                                ?.availableToLay?.[0]?.price ||
                                                "-"}
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="sports-selection-tabs">
                  <div className="searchWrap-panel fullWidth">
                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          More Slots
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Royal Games
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Mac 88
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Aura
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Colour Prediction
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Desi Casino
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Lightning Ball
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Roulette
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Aviator
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Baccarat
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Sic Bo
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Poker
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Lucky 7
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Ander Baher{" "}
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Teen Patti
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          32 Cards
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Dragon Tiger
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Lottery
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Cricketwar
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Hi Low
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Virtual Casino
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Blackjack
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Slot
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Amar Akbar Anthony
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Chicken Games
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Fun Games
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Mines
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Crash
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Live Game Shows
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Live Poker
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Video Poker
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Marbles Run
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Mini Roulette
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Scratch Games
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Keno
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Spin Games
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Hold Spin
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Virtual Sport
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Kingmaker
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Turbo Games
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Arcade
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Fishing
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Video Slots
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Ezugi
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          E Gaming
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Spribe
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Aviatrix
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          TVBET
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          BetGames
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Playtech
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          ALG
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          JackTop
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Live88
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Vivo
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Lightning Game
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Casual
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Rummy
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Bingo
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Popular Games
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          7 Mojos
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Ultimate AB
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Ultimate Roulette
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          1 Day Teenpatti
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Cock Fight
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Bikini Games
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#popular"
                          type="button"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          sexy
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="popular"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <div className="casinoGame-wrap">
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_rock_paper_scissors2d.webp"
                                alt="Rock Paper Scissors 2D"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://assets3.hurry2.com/casino_games/29039-1776796127.webp"
                                alt="Super Over VR"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/black_buck_catfish.webp"
                                alt="Cat Fish"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://assets3.hurry2.com/casino_games/88890-1777203171.jpeg"
                                alt="Bikini game"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://assets3.hurry2.com/casino_games/17744-1776257233.videopoker.png"
                                alt="Video poker"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/black_buck_naughty.webp"
                                alt="Naughty Button"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://assets3.hurry2.com/casino_games/19190-1776234788.1776233652280_Andarbaharfusion.webp"
                                alt="Fusion Andar Bahar"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://assets3.hurry2.com/casino_games/18150-1776852631.1776765933918_dragontigerfusion.webp"
                                alt="Dragon Tiger Fusion"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://assets3.hurry2.com/casino_games/78066-1775390420.png"
                                alt="Button burst"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://assets3.hurry2.com/casino_games/67866-1776841116.IPLHEAD2HEAD.webp"
                                alt="IPL Head 2 Head"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://assets3.hurry2.com/casino_games/53684-1775646324.colorgme.png"
                                alt="Color mega bonus"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_jhandi_munda.webp"
                                alt="Jhandi Munda"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_bucking_rider.webp"
                                alt="Bucking Rider"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_tower_x.webp"
                                alt="Tower X"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://assets3.hurry2.com/casino_games/65030-1774514393.atlantis-11(1)(1).webp"
                                alt="Atlantis"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_hot_cricket.webp"
                                alt="Hot Cricket"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_ludo_30x.webp"
                                alt="Ludo30x"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="/assets/default-casino-img-VSSxGItQ.webp"
                                alt="Cricket Royale Andar Bahar"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_7_up_7_down.webp"
                                alt="Seven Up & Down"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_chicken_road.webp"
                                alt="Chicken Road"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_fish_prawn_crab.webp"
                                alt="Fish Prawn Crab"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_spin_strike.webp"
                                alt="Spin Strike"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://assets3.hurry2.com/casino_games/61488-1776351881.Disco_Night_4.png"
                                alt="Nightblizz"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://assets3.hurry2.com/casino_games/71332-1776247534.7updownvr.webp"
                                alt="Lighting seven up and down"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://assets3.hurry2.com/casino_games/42933-1775042367.fortunegem.png"
                                alt="Fortune gems"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://assets3.hurry2.com/casino_games/31886-1776337946.TeenPattiCricket-11(1)(1).webp"
                                alt="Teen Patti Cricket"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_european_roulette.webp"
                                alt="European Roulette"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://assets3.hurry2.com/casino_games/37835-1775215535.1775209785114_1775038056483_Frame2085663978.png"
                                alt="Teen Patti VR"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_andar_bahar.webp"
                                alt="Andar Bahar"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_helix.webp"
                                alt="Helix"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_pushpa_rani.webp"
                                alt="Pushpa Rani"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_sugar_daddy.webp"
                                alt="Sugar Daddy"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_track_titans.webp"
                                alt="Track Titans"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_fivex_aviator.webp"
                                alt="Fivex Aviator"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_one_min_aviator.webp"
                                alt="One Min Aviator"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_poker_20_20.webp"
                                alt="Poker 20-20"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_coin_toss.webp"
                                alt="Coin Toss"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_rooster_run.webp"
                                alt="Rooster Run"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_aviatrix.webp"
                                alt="Aviatrix"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_andar_bahar_2d.webp"
                                alt="Andar Bahar 2D"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_baccarat_2d.webp"
                                alt="Baccarat 2D"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_32_card_2d.webp"
                                alt="32 Card 2D"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_deal_or_no_deal.webp"
                                alt="Deal Or No Deal"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_teen_patti_2_d.webp"
                                alt="Teen Patti 2D"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="/assets/default-casino-img-VSSxGItQ.webp"
                                alt="Snakes And Ladders"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_coin_pilot.webp"
                                alt="Coin Pilot"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_dragon_vs_tiger.webp"
                                alt="Dragon vs Tiger"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_pilot.webp"
                                alt="Pilot"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_crime_empire.webp"
                                alt="Crime Empire"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_aviator_two.webp"
                                alt="Aviator Two"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_k3_game.webp"
                                alt="K Three Game"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_goal_a_panelty.webp"
                                alt="Goal a Panelty"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_rapid_roulette.webp"
                                alt="Rapid Roulette"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_chicken_road_two.webp"
                                alt="Chicken Road 2.0"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_satta_matka_express.webp"
                                alt="Satta Matka Express"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_mini_roulette.webp"
                                alt="Mini Roulette"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_zombie_run.webp"
                                alt="Zombie Run"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_turbo_mines.webp"
                                alt="Turbo Mines"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_twist.webp"
                                alt="Twist"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_blast_off.webp"
                                alt="Blast Off"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_plinko.webp"
                                alt="Plinko"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_color.webp"
                                alt="Color Prediction"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_jetx.webp"
                                alt="JETX"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_crash_royale.webp"
                                alt="Crash Royale"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_aviator_3d.webp"
                                alt="Aviator_3D"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_helicopterx.webp"
                                alt="HelicopterX"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_teen_patti_versus.webp"
                                alt="Teen Patti Versus"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_cricket_winner.webp"
                                alt="Cricket Winner"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_teen_patti_champion.webp"
                                alt="Teen Patti Champion"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_blackjack.webp"
                                alt="Blackjack"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_cryptos.webp"
                                alt="Cryptos"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_aero_game.webp"
                                alt="Aero Game"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_color_two.webp"
                                alt="Color 2.0"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_Penalty_Roulette.webp"
                                alt="Penalty Roulette"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_non_stop.webp"
                                alt="Non Stop"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_more_or_less.webp"
                                alt="More or Less"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_jetx2.webp"
                                alt="JetX 2.0"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_hypersonicx.webp"
                                alt="HypersonicX"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_flash_roulette.webp"
                                alt="Flash Roulette"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_run_and_guess.webp"
                                alt="Run and Guess"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_color_spin.webp"
                                alt="Color Spin"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_cricket_spin_roulette.webp"
                                alt="Cricket Spin Roulette"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_vortex.webp"
                                alt="Vortex"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_wingo.webp"
                                alt="Wingo Lottery"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_quick_3d_lottery.webp"
                                alt="Quick 3D Lottery"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_dream_wheel.webp"
                                alt="Dream Wheel"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_mines.webp"
                                alt="Mines"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_double_roll.webp"
                                alt="Double Roll"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_hi_lo.webp"
                                alt="Hi-Lo"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_red_n_black.webp"
                                alt="Red n Black"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_baccarat.webp"
                                alt="Baccarat"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_rider.webp"
                                alt="Rider"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_baccarat_two.webp"
                                alt="Baccarat 2.0"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_instant_lottery.webp"
                                alt="Instant Lottery"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_pumpX.webp"
                                alt="PumpedX"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_cricket_clash.webp"
                                alt="Cricket Clash"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_thimbles.webp"
                                alt="Thimbles"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_cricketx.webp"
                                alt="CricketX"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_ball_and_ball.webp"
                                alt="Ball & Ball"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_lines.webp"
                                alt="Lines"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_fruit_burst.webp"
                                alt="Fruit Burst"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_footballx.webp"
                                alt="Footballx"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_fury_stairs.webp"
                                alt="Fury Stairs"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_cricket_mines.webp"
                                alt="Cricket Mines"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_balloon.webp"
                                alt="Balloon"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_Sixout.webp"
                                alt="Six Out"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/More_slots_speedloto.webp"
                                alt="Speed Loto"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_coin_flipper.webp"
                                alt="Coin Flipper"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_greyhound_racing .webp"
                                alt="Greyhound Racing"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_crash_hilo.webp"
                                alt="Crash Hi-Lo"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_fast_fielder.webp"
                                alt="Fast Fielder"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_rocket_dice.webp"
                                alt="Rocket Dice"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_double_wheel.webp"
                                alt="Double Wheel"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_diamond_slot.webp"
                                alt="Diamond Slot"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_red_queen.webp"
                                alt="Red Queen"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_crashx_football.webp"
                                alt="CrashX Football Edition"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_red_hot_line.webp"
                                alt="Red Hot Line"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_twenty_one.webp"
                                alt="Twenty One"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_dice_twice.webp"
                                alt="Dice Twice"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_four_aces.webp"
                                alt="Four Aces"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_robo_dice.webp"
                                alt="Robo Dice"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_poker_king.webp"
                                alt="Poker King"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_keno.webp"
                                alt="Keno"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_goal.webp"
                                alt="Goal"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_dice_battery.webp"
                                alt="Dice Battery"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_bozo.webp"
                                alt="Bozo"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_magic_idol.webp"
                                alt="Magic Idol"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_tikki_quest.webp"
                                alt="Tikki Quest"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_lucky_ball.webp"
                                alt="Lucky Ball"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_rocket_queen.webp"
                                alt="Rocket Queen"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_fruit_tower.webp"
                                alt="Fruit Tower"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_train_rush.webp"
                                alt="Train Rush"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_speed_and_cash.webp"
                                alt="Speed and cash"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_money_wheel.webp"
                                alt="Money Wheel"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_pearl_hunt.webp"
                                alt="Pearl Hunt"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_lucky_spin.webp"
                                alt="Lucky Spin"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_three_card_judgement.webp"
                                alt="3 Card Judgement"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_cricket_wheel.webp"
                                alt="Cricket Wheel"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_rock_paper_scissors.webp"
                                alt="Rock Paper Scissors"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_magic_dice.webp"
                                alt="Magic Dice"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_pop_corn.webp"
                                alt="Pop Corn"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_crash.webp"
                                alt="Crash Game"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_air_jet.webp"
                                alt="Air Jet Game"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_battle_cricket.webp"
                                alt="Battle Cricket"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_wheel_of_fortune.webp"
                                alt="Wheel of Fortune"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_forest_arrow.webp"
                                alt="Forest Arrow"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_baccarat_royale.webp"
                                alt="Baccarat Royale"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_striker.webp"
                                alt="Striker"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_big_small.webp"
                                alt="Big Small"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_red_and_black.webp"
                                alt="Red and Black"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_color_game.webp"
                                alt="Color Game"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_find_the_stone.webp"
                                alt="Find the stone"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_teen_patti_second.webp"
                                alt="Teen Patti 2.0"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_headteal.webp"
                                alt="head tail"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_boom_basket.webp"
                                alt="Boom Basket"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_teen_patti_turbo.webp"
                                alt="Teen Patti Turbo"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_head_tails_xy.webp"
                                alt="Head Tails XY"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_seven_up_and_seven_down_2d.webp"
                                alt="7 Up 7 Down"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_head_and_tail_2_0.webp"
                                alt="Head And Tail 2.0"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_city_wheel.webp"
                                alt="City Wheel"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_race_to_17.webp"
                                alt="Race To 17"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_sicbo.webp"
                                alt="Sicbo"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_card_hi_lo.webp"
                                alt="Cards HiLo"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_mega_wheel.webp"
                                alt="Mega Wheel"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_big_hilo.webp"
                                alt="Big Hi-Lo"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_powerplay.webp"
                                alt="Powerplay"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_triple.webp"
                                alt="Triple"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_double_up.webp"
                                alt="Double Up"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_sweet_keno.webp"
                                alt="Sweet Keno"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_pirate_dice.webp"
                                alt="Pirate Dice"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_plingo_ball.webp"
                                alt="Plingo Ball"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_pappu_playing_pictures.webp"
                                alt="Pappu Playing Pictures"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_1_reel_beauty.webp"
                                alt="1 Reel Beauty"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_turbo_belote.webp"
                                alt="Turbo Belote"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_luck_magic_scratch.webp"
                                alt="Luck Magic Scratch"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_bonus_dice.webp"
                                alt="Bonus Dice"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_ultimate_texas_holdem.webp"
                                alt="Ultimate Texas Holdem"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_stellar_rush.webp"
                                alt="Stellar Rush"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_non_stop_baccarat.webp"
                                alt="Non Stop Bacarrat"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_one_reelqueen_of_water.webp"
                                alt="1 Reel Queen Of Water"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://d1zntghqrw5743.cloudfront.net/newclick/more_slots_jojo_chef.webp"
                                alt="Jojo Chef"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://assets3.hurry2.com/casino_games/21411-1774511921.Side-bet-cityMini.png"
                                alt="Side Bet City Mini"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://assets3.hurry2.com/casino_games/50791-1775119403.betonpoker-1(1).webp"
                                alt="Bet on poker"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://assets3.hurry2.com/casino_games/57552-1775134043.29bccr.png"
                                alt="29 baccarat"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://assets3.hurry2.com/casino_games/92238-1776354181.ChikenRoad.png"
                                alt="Chicken Road"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://assets3.hurry2.com/casino_games/52983-1776352017.Campus-Crush.jpg(1).jpeg"
                                alt="Campus crush"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://assets3.hurry2.com/casino_games/89348-1776622062.1768822076269_snakes&ladders.webp"
                                alt="Snakes and ladders"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://assets3.hurry2.com/casino_games/7328-1776960055.Money_Heist_Poster_02.png"
                                alt="Money heist"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="casinoGame-item homeCasino">
                          <a>
                            <div>
                              <img
                                loading="lazy"
                                src="https://assets3.hurry2.com/casino_games/36762-1776962018.OverTake_Poster..png"
                                alt="Overtake"
                                className="casinoImg"
                              />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="ageconfirmationModal"
                  className="modal fade"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="login-popup-content">
                        <div className="modal-body ageconfirmationModalclass">
                          <div className="login-panel-container confirm-container">
                            <div className="confirm-text">
                              <div className="header-popup">
                                <a
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                  className="ui-link"
                                >
                                  <i className="fas fa-times" />
                                </a>
                              </div>
                              <div className="text1 text-confirm-bold">
                                Non-Gambling Territories.{" "}
                              </div>
                              <hr className="confirm-line" />
                              <div className="text2 text-capitalize">
                                Connecting to our site from non gambling
                                countries, it will be Users responsibility to
                                ensure that their use of the service is
                                lawful.{" "}
                              </div>
                            </div>
                            <div className="confirm-text">
                              <div className="text1 text-confirm-bold">
                                Underage Gambling Is Prohibited.
                              </div>
                              <hr className="confirm-line" />
                              <div className="text2">
                                Please Confirm If You Are 18 Years Old And Above
                                As Of Today.{" "}
                              </div>
                            </div>
                            <div className="confirm-button">
                              <a
                                className="btn-verification btn-confirm cursor-pointer"
                                tabIndex={0}
                              >
                                <span>Confirm</span>
                              </a>
                              <button
                                data-bs-dismiss="modal"
                                className="btn-verification cursor-pointer"
                              >
                                <span>Exit</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-v-99484868
                  data-v-1354c224
                  className="sports-search-modal"
                >
                  <div
                    data-v-99484868
                    className="modal fade"
                    id="searchModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div data-v-99484868 className="modal-dialog container">
                      <div data-v-99484868 className="modal-content">
                        <div data-v-99484868 className="input-search-box-modal">
                          <input
                            data-v-99484868
                            type="text"
                            placeholder="Search Events"
                            className="form-control"
                          />
                          <button
                            data-v-99484868
                            type="button"
                            className="sports-close-icons"
                          >
                            <img
                              data-v-99484868
                              loading="lazy"
                              src="/assets/search-FeNNTuV7.png"
                              alt=""
                              className="invert-1"
                            />
                          </button>
                        </div>
                        <div data-v-99484868 className="modal-body p-0">
                          <div data-v-99484868 className="sports-wrapper">
                            <div
                              data-v-99484868
                              className="scrollSearchBox"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-v-1354c224
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop-one"
                style={{ display: "none" }}
              />
            </div>
            <div data-v-26bb4376 className="bets-menu">
              <div data-v-26bb4376 className="openBets">
                <div data-v-26bb4376 className="stake-collapse">
                  <div
                    data-v-26bb4376
                    className="collapse"
                    id="collapseExample"
                  >
                    <div data-v-26bb4376 className="card card-body">
                      <div data-v-26bb4376 className="stakeDiv">
                        <h3 data-v-26bb4376>stake</h3>
                        <dl
                          data-v-26bb4376
                          id
                          className="setting-block stake-setting"
                        >
                          <dd data-v-26bb4376>
                            <input
                              data-v-26bb4376
                              type="number"
                              className="ng-untouched ng-pristine ng-valid"
                            />
                          </dd>
                          <dd data-v-26bb4376>
                            <input
                              data-v-26bb4376
                              type="number"
                              className="ng-untouched ng-pristine ng-valid"
                            />
                          </dd>
                          <dd data-v-26bb4376>
                            <input
                              data-v-26bb4376
                              type="number"
                              className="ng-untouched ng-pristine ng-valid"
                            />
                          </dd>
                          <dd data-v-26bb4376>
                            <input
                              data-v-26bb4376
                              type="number"
                              className="ng-untouched ng-pristine ng-valid"
                            />
                          </dd>
                          <dd data-v-26bb4376>
                            <input
                              data-v-26bb4376
                              type="number"
                              className="ng-untouched ng-pristine ng-valid"
                            />
                          </dd>
                          <dd data-v-26bb4376>
                            <input
                              data-v-26bb4376
                              type="number"
                              className="ng-untouched ng-pristine ng-valid"
                            />
                          </dd>
                          <dd data-v-26bb4376>
                            <input
                              data-v-26bb4376
                              type="number"
                              className="ng-untouched ng-pristine ng-valid"
                            />
                          </dd>
                          <dd data-v-26bb4376>
                            <input
                              data-v-26bb4376
                              type="number"
                              className="ng-untouched ng-pristine ng-valid"
                            />
                          </dd>
                          <dd data-v-26bb4376 className="col-stake_edit">
                            <a data-v-26bb4376 className="btn-send ui-link">
                              Save
                            </a>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
                <h2 data-v-26bb4376>open bets</h2>
                <div data-v-26bb4376>
                  <select
                    className="form-control mobile-hide ng-untouched"
                    data-v-26bb4376
                  >
                    <option selected data-v-26bb4376>
                      Open this select menu
                    </option>
                    <option value={1} data-v-26bb4376>
                      One
                    </option>
                    <option value={2} data-v-26bb4376>
                      Two
                    </option>
                    <option value={3} data-v-26bb4376>
                      Three
                    </option>
                  </select>
                  <div data-v-26bb4376 className="openBetsTabs">
                    <div data-v-26bb4376 className="tab-container">
                      <ul
                        data-v-26bb4376
                        className="nav nav-tabs"
                        id="myTab"
                        role="tablist"
                      >
                        <li
                          data-v-26bb4376
                          className="active nav-item"
                          role="presentation"
                        >
                          <a
                            data-v-26bb4376
                            className="nav-link active"
                            id="Matched-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#Matched"
                            type="button"
                            role="tab"
                            aria-controls="Matched"
                            aria-selected="true"
                          >
                            <span data-v-26bb4376>Matched</span>
                          </a>
                        </li>
                        <li
                          data-v-26bb4376
                          className="nav-item"
                          role="presentation"
                        >
                          <a
                            data-v-26bb4376
                            className="nav-link"
                            id="UnMatched-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#UnMatched"
                            type="button"
                            role="tab"
                            aria-controls="UnMatched"
                            aria-selected="false"
                          >
                            <span data-v-26bb4376>Bookmaker</span>
                          </a>
                        </li>
                        <li
                          data-v-26bb4376
                          className="nav-item"
                          role="presentation"
                        >
                          <a
                            data-v-26bb4376
                            className="nav-link"
                            id="Fancy-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#Fancy"
                            type="button"
                            role="tab"
                            aria-controls="Fancy"
                            aria-selected="false"
                          >
                            <span data-v-26bb4376>Fancy</span>
                          </a>
                        </li>
                      </ul>
                      <div
                        data-v-26bb4376
                        className="tab-content"
                        id="myTabContent"
                      >
                        <div
                          data-v-26bb4376
                          className
                          id="Matched"
                          role="tabpanel"
                          aria-labelledby="Matched-tab"
                        >
                          <div data-v-26bb4376 className="table-responsive">
                            <table data-v-26bb4376 className="table">
                              <thead data-v-26bb4376>
                                <tr data-v-26bb4376>
                                  <th data-v-26bb4376>
                                    <b data-v-26bb4376>Selection</b>
                                  </th>
                                  <th data-v-26bb4376>
                                    <b data-v-26bb4376>Odds</b>
                                  </th>
                                  <th data-v-26bb4376>
                                    <b data-v-26bb4376>Stake</b>
                                  </th>
                                  <th data-v-26bb4376>
                                    <b data-v-26bb4376>Date/Time</b>
                                  </th>
                                </tr>
                              </thead>
                              <tbody data-v-26bb4376 />
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InPlay;
