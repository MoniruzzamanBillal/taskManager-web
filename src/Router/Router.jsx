import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Components/Login";
import Dashboard from "../Pages/Dashboard";
import AddTask from "../Components/Dashboard/AddTask";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/addTask",
        element: <AddTask />,
      },
      {
        path: "/dashboard/myTasks",
        element: <p>My task task </p>,
      },
    ],
  },
]);

export default Router;
