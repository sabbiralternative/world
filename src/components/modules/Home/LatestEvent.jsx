import { Link } from "react-router-dom";
import { useLatestEvent } from "../../../hooks/latestEvent";

const LatestEvent = () => {
  const { data } = useLatestEvent();

  return (
    <div className="new-event">
      {data?.map((item) => {
        return (
          <div
            key={item?.eventId}
            className={`new-event-item sport${item?.eventTypeId}`}
          >
            <Link
              to={`/event-details/${item?.eventTypeId}/${item?.eventId}`}
              className
            >
              <i className="d-icon icon-1" />
              <span className="ml-2" style={{ color: "rgb(248, 249, 250)" }}>
                {item?.eventName}
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default LatestEvent;
