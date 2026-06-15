import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userToken } from "../../../redux/features/auth/authSlice";
import { AxiosSecure } from "../../../lib/AxiosSecure";
import { API } from "../../../api";
import { Link } from "react-router-dom";
import "./search.css";

const Search = ({ setShowSidebar }) => {
  const [searchText, setSearchText] = useState("");
  const token = useSelector(userToken);
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (searchText?.length > 2) {
      const getSearchData = async () => {
        const { data } = await AxiosSecure.post(API.searchEvent, {
          name: searchText,
        });

        if (data?.result?.length > 0) {
          setData(data?.result);
        }
      };
      getSearchData();
    }
  }, [searchText, token]);

  /* filter the search value */
  useEffect(() => {
    const categories = Array.from(new Set(data.map((item) => item.eventType)));

    setCategories(categories);
  }, [data]);

  /* hide the search modal */
  const handleHideDropdown = () => {
    setSearchText("");
    setData([]);
    setShowSidebar(false);
  };
  return (
    <Fragment>
      <div
        className="form-group d-inline-block mb-0"
        style={{ position: "relative" }}
      >
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          placeholder="Search"
          autoComplete="off"
          className="form-control"
          style={{ textTransform: "lowercase" }}
        />
        {/* <img
          src="https://wver.sprintstaticdata.com/v224/static/front/img/search.svg"
          className="search-icon"
        /> */}
        {data?.length > 0 && searchText?.length > 2 && (
          <div className="search-list">
            {categories.map((category) => (
              <>
                <div className="search-game-name">
                  <b>{category}</b>
                </div>
                {data
                  .filter((item) => item.eventType === category)
                  .map((item, i) => (
                    <Link
                      className="search-link"
                      onClick={handleHideDropdown}
                      key={i}
                      to={`/event-details/${item?.eventTypeId}/${item?.eventId}`}
                    >
                      <div className="search-list-item">
                        <div className="search-tournament-name">
                          <b className="search-tournament-label">
                            {item?.name}
                          </b>
                        </div>
                        <div className="search-game-date">{item?.openDate}</div>
                      </div>
                    </Link>
                  ))}
              </>
            ))}
          </div>
        )}

        {data?.length === 0 && searchText?.length > 4 && (
          <div className="search-no-results">
            <div className="search-no-results-text">No data found</div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Search;
