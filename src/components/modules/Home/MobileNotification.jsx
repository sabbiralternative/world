export const MobileNotification = () => {
  return (
    <div className="mobile-switch-theme d-none-desktop">
      <div className="news-bar" style={{ width: "100%", maxWidth: "100%" }}>
        <div className="marquee-wrapper">
          <div
            className="marquee-content no-marquee"
            style={{ animationDuration: "0s" }}
          >
            IPL markets live. Bookmaker, Fancy and more. Predict and win big.
          </div>
        </div>
        <div className="news-title">
          <img
            src="https://wver.sprintstaticdata.com/v223/static/front/img/icons/speaker.svg"
            alt="news"
          />
        </div>
      </div>
    </div>
  );
};
