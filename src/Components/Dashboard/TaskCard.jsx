import React from "react";

const TaskCard = ({ task }) => {
  //   console.log(task);
  return (
    <div className=" my-1.5 ">
      <div className="taskCard rounded  bg-gray-50 hover:bg-gray-100 hover:shadow-lg shadow w-[96%] xsm:w-[92%] sm:w-[90%] md:w-[82%] xmd:w-[80%] lg:w-[70%] m-auto py-2 px-5 text-center  ">
        {/* title  */}
        <p className="  mb-2 text-lg ">
          {" "}
          <span className="font-semibold">Title :</span> {task?.title}
        </p>
        {/* title  */}

        {/* description  */}
        <h1 className=" mb-1.5 text-sm "> {task?.description} </h1>
        {/* description  */}

        <div className="deadline flex justify-center items-center gap-5 ">
          {/* priorirt  */}
          <p className="mb-1   ">
            {" "}
            <span className="font-semibold">Priority :</span> {task?.priority}
          </p>
          {/* priorirt  */}

          {/* deadline  */}

          <p>
            {" "}
            <span className="font-semibold">Deadline :</span> {task?.deadline}
          </p>
          {/* deadline  */}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
