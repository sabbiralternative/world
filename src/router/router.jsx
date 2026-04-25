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
