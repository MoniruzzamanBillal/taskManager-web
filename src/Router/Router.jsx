import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Components/Login";
import Dashboard from "../Pages/Dashboard";
import AddTask from "../Components/Dashboard/AddTask";
import MyTask from "../Components/Dashboard/MyTask";
import PrivateRoute from "../Components/PrivateRoute";

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
    // element: <Dashboard />,
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/addTask",
        element: <AddTask />,
      },
      {
        path: "/dashboard/myTasks",
        element: <MyTask />,
      },
    ],
  },
]);

export default Router;
