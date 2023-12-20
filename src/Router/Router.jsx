import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Components/Login";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default Router;
