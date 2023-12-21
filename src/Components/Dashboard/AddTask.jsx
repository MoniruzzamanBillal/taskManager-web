import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import {
  inputFieldError,
  insertSuccessfully,
} from "../../Utils/ToastFunction/ToastFunction";

const AddTask = () => {
  const { user } = UseAuth();
  const axiosPublicUrl = UseAxiosPublic();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [deadline, setDeadLine] = useState("");

  const userEmail = user?.email;

  const handleSubmit = async () => {
    if (
      !title.trim() ||
      !description.trim() ||
      !priority.trim() ||
      !deadline.trim()
    ) {
      return inputFieldError();
    }

    const status = "todo";
    const taskData = {
      title,
      description,
      priority,
      deadline,
      userEmail,
      status,
    };

    axiosPublicUrl.post(`/api/task/`, taskData).then((apiResponse) => {
      //   console.log(apiResponse?.data);
      if (apiResponse?.data?.insertedId) {
        insertSuccessfully();
        setTitle("");
        setDescription("");
        setPriority("");
      }
    });
  };

  //   console.log(user);

  return (
    <div className=" py-4 relative mainContiner flex flex-col  w-full items-center justify-center  bg-no-repeat bg-cover bg-center ">
      <h1 className="   robotoFont font-semibold text-4xl mb-4 text-[#e4c590]  ">
        Add your task
      </h1>

      {/* sepoerator image  */}

      <div className="seperatorImg  w-[10rem] flex justify-center items-center mb-6 ">
        <img
          src="https://i.ibb.co/pr3Ryq7/separator.png"
          className="  w-full h-full "
          alt=""
        />
      </div>
      {/* sepoerator image  */}

      {/* form  */}
      <div className="formContainer w-[85%] rounded bg-gray-200 bg-opacity-60  shadow-lg backdrop-blur px-4 py-5 sm:px-5 sm:py-7 md:px-6 md:py-8 ">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 sm:gap-6">
          {/* user name  name  */}
          <div className="w-full">
            <label
              htmlFor="user_name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              User name
            </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              value={user?.displayName}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="User name"
              required=""
              readOnly
            />
          </div>
          {/* user name  */}

          {/* user email   */}
          <div className="w-full">
            <label
              htmlFor="user_email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              User email
            </label>
            <input
              type="text"
              name="user_email"
              id="user_email"
              value={user?.email}
              readOnly
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="user email"
              required=""
            />
          </div>
          {/* user email   */}

          {/* Title  */}
          <div className="w-full">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="Task title"
              required=""
            />
          </div>

          {/*title  */}

          {/* Description   */}
          <div className="w-full">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Description
            </label>

            <textarea
              id="description"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Task description"
            ></textarea>
          </div>
          {/* receiver name  */}

          {/* deadline  date  */}

          <div className="  ">
            <label
              htmlFor="deadline"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Deadline
            </label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              onChange={(e) => setDeadLine(e.target.value)}
            />
          </div>

          {/* deadline date  */}

          {/* Priority  */}
          <div>
            <label
              htmlFor="priority"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Task priority
            </label>
            <select
              id="priority"
              onChange={(e) => setPriority(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
            >
              <option value="">Select priority</option>
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
            </select>
          </div>

          {/* category  */}

          {/*  */}
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-violet-600 rounded-lg focus:ring-4 focus:ring-primary-200  hover:bg-violet-800"
          onClick={() => handleSubmit()}
        >
          Add task
        </button>
      </div>
      {/* form  */}
      <ToastContainer />
    </div>
  );
};

export default AddTask;
