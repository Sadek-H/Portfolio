import {
  createBrowserRouter,
} from "react-router";
import Homelayout from "../Layout/Homelayout";
import ProjectDetails from "../Pages/Projectdetails";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Homelayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/project/:id",
        Component: ProjectDetails,
      },
    ],
  },
]);