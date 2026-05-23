import { useSelector } from "react-redux";
import BetSlipDesktop from "./BetSlipDesktop";

const RightSidebar = ({ data, iframe }) => {
  const { placeBetValues } = useSelector((state) => state.event);
  return (
    <div id="right-sidebar-id" className="right-sidebar casino-right-sidebar">
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
        <div className="embed-responsive embed-responsive-16by9 ng-star-inserted">
          <iframe
            style={{
              width: "100%",

              overflow: "hidden",
            }}
            id="tvStr"
            className="embed-responsive-item w-100"
            src={iframe?.result?.url}
          ></iframe>
        </div>
      )}
      {placeBetValues && <BetSlipDesktop />}
    </div>
  );
};

export default RightSidebar;
