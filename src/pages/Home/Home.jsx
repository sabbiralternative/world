import { Events } from "../../components/modules/Home/Events";
import { OurCasino } from "../../components/modules/Home/OurCasino";
import { Banner } from "../../components/modules/Home/Banner";
import { MobileNotification } from "../../components/modules/Home/MobileNotification";
import Footer from "../../components/modules/Home/Footer";
import RightSidebar from "../../components/modules/Home/RightSidebar";

const Home = () => {
  return (
    <div className="center-main-content">
      <MobileNotification />

      <div className="center-container">
        <div>
          <div className="home-container">
            <div className="point-middle home-new">
              <Banner />

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
