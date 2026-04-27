import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import APK from "../pages/APK/APK";
import Login from "../pages/Login/Login";

import Settings from "../pages/Settings/Settings";
import Register from "../pages/Register/Register";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import Account from "../pages/Account/Account";
import ChangePassword from "../pages/ChangePassword/ChangePassword";
import InPlay from "../pages/InPlay/InPlay";
import Sports from "../pages/Sports/Sports";
import OpenBets from "../pages/OpenBets/OpenBets";
import Profile from "../pages/Profile/Profile";
import BetHistory from "../pages/BetHistory/BetHistory";
import AccountStatement from "../pages/AccountStatement/AccountStatement";
import ProfitLoss from "../pages/ProfitLoss/ProfitLoss";
import EventDetails from "../pages/EventDetails/EventDetails";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,

      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/event-details/:eventTypeId/:eventId",
          element: <EventDetails />,
        },
        {
          path: "/apk",
          element: <APK />,
        },
        {
          path: "/settings",
          element: <Settings />,
        },
        {
          path: "/account",
          element: <Account />,
        },
        {
          path: "/in-play",
          element: <InPlay />,
        },
        {
          path: "/sports",
          element: <Sports />,
        },
        {
          path: "/open-bets",
          element: <OpenBets />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/bet-history",
          element: <BetHistory />,
        },
        {
          path: "/account-statements",
          element: <AccountStatement />,
        },
        {
          path: "/profit-loss",
          element: <ProfitLoss />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "/change-password",
      element: <ChangePassword />,
    },
  ],
  {
    basename: import.meta.env.BASE_URL ?? "/",
  },
);
