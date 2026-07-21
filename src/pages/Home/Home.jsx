import { Events } from "../../components/modules/Home/Events";
import { OurCasino } from "../../components/modules/Home/OurCasino";
import { Banner } from "../../components/modules/Home/Banner";
import { MobileNotification } from "../../components/modules/Home/MobileNotification";
import Footer from "../../components/modules/Home/Footer";
import RightSidebar from "../../components/modules/Home/RightSidebar";
import SportsTab from "../../components/modules/Home/SportsTab";
import EventTab from "../../components/modules/Home/EventTab";
import useBannerImage from "../../hooks/banner.hook";
import LatestEvent from "../../components/modules/Home/LatestEvent";
import { useState } from "react";
import MiniGames from "../../components/modules/Home/MiniGames";
import WhatsApp from "../../components/modules/Home/WhatsApp";

const Home = () => {
  const [showMiniGamesModal, setShowMiniGamesModal] = useState(false);
  const { data: bannerImage } = useBannerImage();
  return (
    <div className="center-main-content">
      <MobileNotification />

      <div className="center-container">
        <div>
          <div className="home-container">
            <LatestEvent />
            <WhatsApp />
            <div className="point-middle home-new">
              {bannerImage?.banner?.length > 0 && (
                <Banner bannerImage={bannerImage?.banner} />
              )}

              <SportsTab />
              <EventTab />
              <Events />

              <OurCasino />

              <Footer />
              <div
                onClick={() => setShowMiniGamesModal(true)}
                style={{
                  position: "fixed",
                  top: "calc(100dvh - 130px)",
                  left: "0",
                  height: "fit-content",
                  cursor: "pointer",
                  zIndex: 999999,
                }}
              >
                <img
                  style={{
                    height: "70px",
                  }}
                  src="/images/uv_games-CkYT1PYz.gif"
                />
              </div>
              {showMiniGamesModal && (
                <MiniGames setShowMiniGamesModal={setShowMiniGamesModal} />
              )}
            </div>
          </div>
        </div>
      </div>
      <RightSidebar />
    </div>
  );
};

export default Home;
