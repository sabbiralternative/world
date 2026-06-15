import { useEffect, useRef } from "react";
import { scrollToLeft, scrollToRight } from "../../utils/scroll";

const SecondTab = ({
  selectedCategory,
  categories,
  setSelectedCategory,
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
  }, [selectedCategory]);
  return (
    <div
      style={{
        scrollBehavior: "smooth",
      }}
      className="casino-tabs"
    >
      <div className="casino-tabs-menu" style={{ maxWidth: "100%" }}>
        <a onClick={() => scrollToLeft(ref)} className="arrow-tabs arrow-left">
          <img src="https://wver.sprintstaticdata.com/v227/static/front/img/arrow-down.svg" />
        </a>
        <ul ref={ref} id="casino-scroll-tab" className="nav nav-tabs">
          <li
            style={{ border: "1px solid #999", borderRadius: "5px" }}
            ref={selectedCategory === "all" ? activeRef : null}
            className="nav-item"
          >
            <a
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              style={{
                borderBottom: "1px solid #999",
                padding: "5px",
                borderBottomLeftRadius: "5px",
                borderBottomRightRadius: "5px",
                background: selectedCategory === "all" ? "#999" : "none",
                color: "white",
              }}
              className={`nav-link ${
                selectedCategory === "all" ? "active" : ""
              }`}
            >
              <img src="https://wver.sprintstaticdata.com/v227/static/front/img/casino-tab-icons/4/35.png" />
              <span>All Casino</span>
            </a>
          </li>
          {categories?.map((category, i) => {
            return (
              <li
                style={{ border: "1px solid #999", borderRadius: "5px" }}
                ref={selectedCategory === category ? activeRef : null}
                key={i}
                className="nav-item"
              >
                <a
                  style={{
                    borderBottom: "1px solid #999",
                    padding: "5px",
                    borderBottomLeftRadius: "5px",
                    borderBottomRightRadius: "5px",
                    background: selectedCategory === category ? "#999" : "none",
                    color: "white",
                  }}
                  onClick={() => {
                    setSelectedCategory(category);
                    setSearchQuery("");
                  }}
                  className={`nav-link ${
                    selectedCategory === category ? "active" : ""
                  }`}
                >
                  <img
                    style={{ filter: "invert(1)" }}
                    src={`/images/${category
                      ?.split(" ")
                      .join("")
                      .toLowerCase()}.svg`}
                  />
                  <span>{category}</span>
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
    </div>
  );
};

export default SecondTab;
