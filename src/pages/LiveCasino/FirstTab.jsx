import { useEffect, useRef } from "react";
import { scrollToLeft, scrollToRight } from "../../utils/scroll";

const FirstTab = ({
  selectedSubProvider,
  subProvider,
  setSelectedSubProvider,
  setSearchQuery,
}) => {
  const ref = useRef();
  const activeRef = useRef(null);

  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center", // key part
        block: "nearest",
      });
    }
  }, [selectedSubProvider]);
  return (
    <div style={{ scrollBehavior: "smooth" }} className="casino-tabs">
      <div className="casino-tabs-menu" style={{ maxWidth: "100%" }}>
        <a onClick={() => scrollToLeft(ref)} className="arrow-tabs arrow-left">
          <img src="https://wver.sprintstaticdata.com/v227/static/front/img/arrow-down.svg" />
        </a>
        <ul ref={ref} id="casino-scroll-tab" className="nav nav-tabs">
          <li
            style={{ border: "1px solid #999", borderRadius: "5px" }}
            ref={selectedSubProvider === "all" ? activeRef : null}
            className="nav-item"
          >
            <a
              style={{
                borderBottom: "1px solid #999",
                padding: "5px",
                borderBottomLeftRadius: "5px",
                borderBottomRightRadius: "5px",
                background: selectedSubProvider === "all" ? "#999" : "none",
                color: "white",
              }}
              onClick={() => {
                setSelectedSubProvider("all");
                setSearchQuery("");
              }}
              className={`nav-link ${
                selectedSubProvider === "all" ? "active" : ""
              }`}
            >
              <span>All Casino</span>
            </a>
          </li>
          {subProvider?.map((provider, idx) => {
            return (
              <li
                style={{ border: "1px solid #999", borderRadius: "5px" }}
                ref={selectedSubProvider === provider ? activeRef : null}
                key={idx}
                className="nav-item"
              >
                <a
                  style={{
                    borderBottom: "1px solid #999",
                    padding: "5px",
                    borderBottomLeftRadius: "5px",
                    borderBottomRightRadius: "5px",
                    background:
                      selectedSubProvider === provider ? "#999" : "none",
                    color: "white",
                  }}
                  onClick={() => {
                    setSelectedSubProvider(provider);
                    setSearchQuery("");
                  }}
                  className={`nav-link ${
                    selectedSubProvider === provider ? "active" : ""
                  }`}
                >
                  <span>{provider}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <a
          onClick={() => scrollToRight(ref)}
          className="arrow-tabs arrow-right"
        >
          <img src="https://wver.sprintstaticdata.com/v227/static/front/img/arrow-down.svg" />
        </a>
      </div>
      {/* <div className="casino-search">
        <input
          type="text"
          placeholder="Search for Casino"
          className="form-control"
        />
        <div className="search-icon">
          <i className="fas fa-search" />
        </div>
      </div> */}
    </div>
  );
};

export default FirstTab;
