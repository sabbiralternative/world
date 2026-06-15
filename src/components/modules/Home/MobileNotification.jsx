import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Marquee from "react-fast-marquee";
// import { RxCross2 } from "react-icons/rx";
import { setShowNotification } from "../../../redux/features/global/globalSlice";
import useGetNotification from "../../../hooks/useGetNotification";

export const MobileNotification = () => {
  const { notification, isFetchingNotification, isFetched } =
    useGetNotification();

  const dispatch = useDispatch();
  const [filteredNotification, setFilteredNotification] = useState([]);
  const { showNotification } = useSelector((state) => state?.global);

  useEffect(() => {
    const storedNotificationId =
      JSON.parse(localStorage.getItem("notificationId")) || [];
    if (
      (!storedNotificationId || storedNotificationId?.length === 0) &&
      notification?.length > 0
    ) {
      dispatch(setShowNotification(true));

      setFilteredNotification(notification);
    }
    if (
      notification?.length > 0 &&
      storedNotificationId &&
      storedNotificationId?.length > 0 &&
      !showNotification
    ) {
      const filteredNotifications = notification.filter(
        (notif) => !storedNotificationId.some((nId) => nId.id == notif.id),
      );

      if (filteredNotifications?.length > 0) {
        setFilteredNotification(filteredNotifications);
        dispatch(setShowNotification(true));
      }
    }
  }, [
    notification,
    showNotification,
    isFetched,
    isFetchingNotification,
    dispatch,
  ]);

  return (
    <Fragment>
      {showNotification && filteredNotification?.length > 0 && (
        <div className="mobile-switch-theme d-none-desktop">
          <div className="news-bar" style={{ width: "100%", maxWidth: "100%" }}>
            <div className="marquee-wrapper">
              <div
                className="marquee-content no-marquee"
                style={{ animationDuration: "0s" }}
              >
                {filteredNotification?.map((item) => (
                  <p key={item?.id} className="mr-[100vw] text-white">
                    {item?.text}
                  </p>
                ))}
              </div>
            </div>
            <div className="news-title">
              <img
                src="https://wver.sprintstaticdata.com/v223/static/front/img/icons/speaker.svg"
                alt="news"
              />
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
