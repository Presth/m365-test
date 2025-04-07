import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./app/App";
import UserProfile from "./app/pages/Userprofile";
import History from "./app/pages/history";

const AppRouting = () => {
  return <RouterProvider router={router} />;
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <UserProfile /> },
      { path: "/:id", element: <UserProfile /> },
      { path: "/history", element: <History /> },
    ],
  },
]);

export default AppRouting;
