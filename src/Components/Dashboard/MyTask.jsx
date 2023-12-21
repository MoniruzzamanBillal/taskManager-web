import React, { useEffect, useState } from "react";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import UseAuth from "../../Hooks/UseAuth";
import Loading from "../Loading";
import TaskCard from "./TaskCard";

const MyTask = () => {
  const axiosPublicUrl = UseAxiosPublic();
  const { user, loading } = UseAuth();

  const [todoTasks, setTodoTasks] = useState([]);
  const [ongoingTasks, setOngoinTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    axiosPublicUrl.get(`/api/tasks/${user?.email}`).then((apiResponse) => {
      //   console.log(apiResponse?.data);

      const todo = apiResponse?.data.filter((data) => data?.status === "todo");
      const ongoing = apiResponse?.data.filter(
        (data) => data?.status === "ongoing"
      );
      const completed = apiResponse?.data.filter(
        (data) => data?.status === "completed"
      );

      setTodoTasks(todo);
      setOngoinTasks(ongoing);
      setCompletedTasks(completed);

      //   console.log(todo);
      //   console.log(ongoing);
      //   console.log(completed);
    });
  }, []);

  //   console.log(user?.email);

  //   console.log(todoTasks);
  //   console.log(ongoingTasks);
  //   console.log(completedTasks);

  if (loading) {
    <Loading />;
  }

  return (
    <div className="  ">
      {/* ongoing tasks  */}
      <div className="ongoingTasks bg-yellow-200 py-6  ">
        <h1 className="text-2xl text-center font-semibold mb-6 ">
          Ongoing tasks{" "}
        </h1>

        {/* task card  */}
        <div className="ongoingTasks">
          {ongoingTasks &&
            ongoingTasks.map((task, ind) => <TaskCard key={ind} task={task} />)}
        </div>

        {/* task card  */}
      </div>
      {/* ongoing tasks  */}

      {/* todo tasks */}
      <div className="ongoingTasks bg-blue-200 py-6 ">
        <h1 className="text-2xl text-center font-semibold mb-6 ">
          To-do tasks{" "}
        </h1>

        {/* task card  */}
        <div className="ongoingTasks">
          {todoTasks &&
            todoTasks.map((task, ind) => <TaskCard key={ind} task={task} />)}
        </div>

        {/* task card  */}
      </div>
      {/* todo tasks */}

      {/* completed taska  */}
      <div className="ongoingTasks bg-green-300 py-6 ">
        <h1 className="text-2xl text-center font-semibold mb-6 ">
          Completed tasks{" "}
        </h1>

        {/* task card  */}
        <div className="ongoingTasks">
          {completedTasks &&
            completedTasks.map((task, ind) => (
              <TaskCard key={ind} task={task} />
            ))}
        </div>

        {/* task card  */}
      </div>
      {/* completed taska  */}
    </div>
  );
};

export default MyTask;
