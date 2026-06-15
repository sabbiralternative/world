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

const Home = () => {
  const { data: bannerImage } = useBannerImage();
  return (
    <div className="center-main-content">
      <MobileNotification />

      <div className="center-container">
        <div>
          <div className="home-container">
            <LatestEvent />
            <div className="point-middle home-new">
              {bannerImage?.banner?.length > 0 && (
                <Banner bannerImage={bannerImage?.banner} />
              )}

              <SportsTab />
              <EventTab />
              <Events />

              <OurCasino />

              <Footer />
            </div>
          </div>
        </div>
      </div>
      <RightSidebar />
    </div>
  );
};

export default Home;
