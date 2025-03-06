import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import ErrorElement from "../Layout/ErrorElement/ErrorElement";
// import BlogDetails from "../Pages/Blog Details/BlogDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      // {
      //     path: "/blogdetails",
      //     element: <BlogDetails></BlogDetails>
      // },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);

export default router;
