import { useEffect, useState } from "react";
import {
  useGetEventDetailsQuery,
  useVideoMutation,
} from "../../redux/features/events/events";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPredictOdd } from "../../redux/features/events/eventSlice";
import { Settings } from "../../api";
import MatchOdds from "../../components/modules/EventDetails/MatchOdds";
import Bookmaker from "../../components/modules/EventDetails/Bookmaker";
import Fancy from "../../components/modules/EventDetails/Fancy";
import RightSidebar from "../../components/modules/EventDetails/RightSidebar";
import BetSLip from "../../components/modules/EventDetails/BetSLip";
import Score from "../../components/modules/EventDetails/Score";
import HorseGreyhoundEventDetails from "../../components/modules/EventDetails/HorseGreyoundEventDetails";

const EventDetails = () => {
  const [sportsVideo, { data: iframe }] = useVideoMutation();
  const { eventTypeId, eventId } = useParams();
  const [profit, setProfit] = useState(0);
  const dispatch = useDispatch();
  const { placeBetValues, price, stake } = useSelector((state) => state.event);

  const { data } = useGetEventDetailsQuery(
    { eventTypeId, eventId },
    {
      pollingInterval: 1000,
    },
  );

  useEffect(() => {
    if (
      price &&
      stake &&
      placeBetValues?.back &&
      placeBetValues?.btype === "MATCH_ODDS"
    ) {
      const multiply = price * stake;
      setProfit(formatNumber(multiply - stake));
    } else if (
      price &&
      stake &&
      placeBetValues?.back &&
      (placeBetValues?.btype === "BOOKMAKER" ||
        placeBetValues?.btype === "BOOKMAKER2")
    ) {
      setProfit(formatNumber(1 + price / stake));
    }
  }, [price, stake, profit, placeBetValues, setProfit]);

  useEffect(() => {
    let total;
    if (
      placeBetValues?.btype === "MATCH_ODDS" ||
      placeBetValues?.btype === "BOOKMAKER"
    ) {
      if (placeBetValues?.back) {
        if (placeBetValues?.btype === "MATCH_ODDS") {
          total = price * stake - stake;
        }
        if (placeBetValues?.btype === "BOOKMAKER") {
          const bookmaker = 1 + price / 100;
          total = bookmaker * stake - stake;
        }

        if (stake) {
          const currentExposure = placeBetValues?.exposure?.map((exp) => {
            return {
              updatedExposure: stake
                ? exp?.isBettingOnThisRunner
                  ? formatNumber(exp?.exposure + total)
                  : formatNumber(exp?.exposure + -1 * stake)
                : null,

              id: exp?.id,
              isBettingOnThisRunner: exp?.isBettingOnThisRunner,
              name: exp?.name,
              exposure: exp?.exposure,
            };
          });

          dispatch(setPredictOdd(currentExposure));
        }
      } else if (placeBetValues?.lay) {
        if (placeBetValues?.btype === "MATCH_ODDS") {
          total = -1 * (price * stake - stake);
        }
        if (placeBetValues?.btype === "BOOKMAKER") {
          const bookmaker = 1 + price / 100;
          total = -1 * (bookmaker * stake - stake);
        }

        if (stake) {
          const currentExposure = placeBetValues?.exposure?.map((exp) => {
            return {
              updatedExposure: stake
                ? exp?.isBettingOnThisRunner
                  ? formatNumber(exp?.exposure + total)
                  : formatNumber(1 * exp?.exposure + 1 * stake)
                : null,
              id: exp?.id,
              isBettingOnThisRunner: exp?.isBettingOnThisRunner,
              name: exp?.name,
              exposure: exp?.exposure,
            };
          });
          dispatch(setPredictOdd(currentExposure));
        }
      }
    }
  }, [price, stake, placeBetValues, dispatch]);

  /* Format number */
  const formatNumber = (value) => {
    const hasDecimal = value % 1 !== 0;
    // value?.toFixed(2)
    return hasDecimal ? parseFloat(value?.toFixed(2)) : value;
  };

  const matchOdds = data?.result?.filter(
    (game) =>
      game.btype === "MATCH_ODDS" &&
      game?.visible == true &&
      game?.name !== "tied match",
  );
  const bookmaker = data?.result?.filter(
    (game) =>
      game.btype === "BOOKMAKER" &&
      game?.visible == true &&
      game?.name !== "tied match",
  );

  const tiedMatch = data?.result?.filter(
    (game) =>
      (game.btype === "MATCH_ODDS" || game.btype === "BOOKMAKER") &&
      game?.visible == true &&
      game?.name === "tied match",
  );

  useEffect(() => {
    const handleGetVideo = async () => {
      const payload = {
        eventTypeId: eventTypeId,
        eventId: eventId,
        type: "video",
        casinoCurrency: Settings.casino_currency,
      };
      await sportsVideo(payload).unwrap();
    };
    handleGetVideo();
  }, []);

  return (
    <div className="center-main-content">
      {placeBetValues && window.innerWidth < 1024 && <BetSLip />}
      <div className="fullwidthdetail-container">
        <div className>
          <div className="casino-container">
            <div className="detail-page-container cricket-detail">
              <div className="game-header d-none-mobile sport4">
                <span className="game-header-name">
                  {data?.result?.[0]?.eventName}
                </span>
                <span className="game-header-date">
                  {data?.result?.[0]?.openDate}
                </span>
              </div>

              <div
                style={{ marginTop: "25px" }}
                className="game-header d-none-desktop sport4"
              >
                <span className="game-header-name">
                  {data?.result?.[0]?.eventName}
                  <div>
                    <small>{data?.result?.[0]?.openDate}</small>
                  </div>
                </span>
                <span></span>
              </div>

              <div className="w-100 d-flex flex-wrap">
                <div className="w-100 d-none-desktop">
                  {data?.score?.tracker && (
                    <div
                      style={{
                        width: "100%",
                        height: "125px",
                        overflow: "hidden",
                      }}
                    >
                      {" "}
                      <iframe
                        className="premium-iframe"
                        src={data?.score?.tracker}
                      ></iframe>
                    </div>
                  )}
                  {iframe?.result?.url && (
                    <iframe
                      id="tvStr"
                      className="w-100"
                      src={iframe?.result?.url}
                    ></iframe>
                  )}
                </div>
                {eventTypeId == 4 && data?.iscore && (
                  <Score iscore={data?.iscore} />
                )}

                {matchOdds?.length > 0 && <MatchOdds data={matchOdds} />}
                {bookmaker?.length > 0 && <Bookmaker data={bookmaker} />}
                {data?.result?.length > 0 && <Fancy data={data?.result} />}
                {eventTypeId == 7 || eventTypeId == 4339 ? (
                  <HorseGreyhoundEventDetails data={data?.result} />
                ) : null}
                {tiedMatch?.length > 0 && <MatchOdds data={tiedMatch} />}
              </div>
            </div>
          </div>
          <RightSidebar data={data} iframe={iframe} />
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
