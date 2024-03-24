import { createBrowserRouter } from "react-router-dom";
import ErroPage from "../Components/SharedComp/ErrorPage/ErroPage";
import Main from "../Layout/Main";
import Home from "../Pages/FrontendPages/Home/Home";
import Login from "../Pages/FrontendPages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErroPage></ErroPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
