import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useGetUltraLobby from "../../hooks/ultraLobby";
import { Settings } from "../../api";
import toast from "react-hot-toast";
import { Loader } from "rsuite";
import FirstTab from "./FirstTab";
import SecondTab from "./SecondTab";

const LiveCasino = () => {
  const navigate = useNavigate();
  const { token, bonusToken } = useSelector((state) => state.auth);
  const [error, setError] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [gameInfo, setGameInfo] = useState({ gameName: "", gameId: "" });
  const { data, isLoading } = useGetUltraLobby();
  const [subProvider, setSubProvider] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedSubProvider, setSelectedSubProvider] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  /* Search by games name */
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
    const searchGames = data.filter((game) =>
      game.gameName.toLowerCase().includes(e.target.value.toLowerCase()),
    );
    setFilteredData(searchGames);
  };

  /* Create unique sub provider name and category */
  useEffect(() => {
    if (data?.length > 0) {
      const subProviderNames = Array.from(
        new Set(data.map((item) => item.subProviderName)),
      );
      const categories = Array.from(new Set(data.map((item) => item.category)));

      setCategories(categories);
      setSubProvider(subProviderNames);
    }
  }, [data]);

  /* Load all data initially */
  useEffect(() => {
    if (data?.length > 0) {
      if (
        selectedCategory === "all" &&
        selectedSubProvider === "all" &&
        searchQuery === ""
      ) {
        setFilteredData(data);
      }
    }
  }, [data, selectedCategory, selectedSubProvider, searchQuery]);

  /* Filter By Category */
  useEffect(() => {
    if (data?.length > 0) {
      if (selectedCategory !== "all" && searchQuery === "") {
        const filterByCategory = data?.filter(
          (d) => d.category === selectedCategory,
        );
        return setFilteredData(filterByCategory);
      }
    }
  }, [data, selectedCategory, searchQuery]);

  // /* Filter By SubProvider */
  useEffect(() => {
    if (data?.length > 0) {
      if (selectedSubProvider !== "all" && searchQuery === "") {
        const filterByCategory = data?.filter(
          (d) => d.subProviderName === selectedSubProvider,
        );
        return setFilteredData(filterByCategory);
      }
    }
  }, [data, selectedSubProvider, searchQuery]);

  /* Handle Navigate */
  const handleNavigateToIFrame = (game) => {
    if (token) {
      if (bonusToken) {
        return setError("Bonus wallet is available only on sports.");
      }
      if (Settings.casino_currency !== "AED") {
        navigate(`/casino/${game?.gameName.replace(/ /g, "")}/${game?.gameId}`);
      } else {
        setGameInfo({ gameName: "", gameId: "" });
        setGameInfo({ gameName: game?.gameName, gameId: game?.gameId });
        setShowWarning(true);
      }
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    if (error) {
      return toast.error(error);
    }
  }, [error]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="center-main-content">
      <div className="casino-list-container center-container">
        <div>
          <div className="report-box casino-box fancy-page">
            <div className="container-fluid container-fluid-5 d-none-mobile">
              <div className="row row1">
                <div className="col-md-12 tab-content">
                  <FirstTab
                    selectedSubProvider={selectedSubProvider}
                    subProvider={subProvider}
                    setSelectedSubProvider={setSelectedSubProvider}
                    setSearchQuery={setSearchQuery}
                  />
                  <SecondTab
                    selectedCategory={selectedCategory}
                    categories={categories}
                    setSelectedCategory={setSelectedCategory}
                    setSearchQuery={setSearchQuery}
                  />
                  <div className="tab-pane active">
                    <div className="casino-banners">
                      {filteredData?.map((d) => {
                        return (
                          <div key={d?.gameId} className="casino-banner-item">
                            <a
                              onClick={() => handleNavigateToIFrame(d)}
                              role="button"
                            >
                              <div
                                style={{
                                  backgroundSize: "cover",
                                  backgroundPosition: "center center",
                                  paddingTop: "53.33%",
                                  backgroundImage: `url(${d.urlThumb})`,
                                }}
                              />
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveCasino;
