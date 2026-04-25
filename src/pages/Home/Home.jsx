import CasinoGames from "../../components/modules/Home/CasinoGames";
import HomeFooter from "../../components/modules/Home/HomeFooter";
import HomeNavigationBar from "../../components/modules/Home/HomeNavigationBar";
import OddSports from "../../components/modules/Home/OddSports";
import SocialLink from "../../components/modules/Home/SocialLink";

const Home = () => {
  return (
    <div data-v-2f3cedbb>
      <div data-v-5e69ccab data-v-2f3cedbb>
        <div data-v-5e69ccab className="container">
          <HomeNavigationBar />
          <OddSports />
          <CasinoGames />

          <HomeFooter />
        </div>

        <SocialLink />
      </div>
    </div>
  );
};

export default Home;
