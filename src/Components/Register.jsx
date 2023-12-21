import React, { useContext, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UseAuth from "../Hooks/UseAuth";
import {
  registerSuccessfully,
  inputFieldError,
} from "../Utils/ToastFunction/ToastFunction";
import UseInput from "../Hooks/UseInput";
import InputField from "./InputField";

const Register = () => {
  const { registerEmail, logOut } = UseAuth();
  const navigate = useNavigate();

  const nameInput = UseInput();
  const imageInput = UseInput();
  const emailInput = UseInput();
  const passwordInput = UseInput();

  const handleLogout = () => {
    logOut()
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  // registration function
  const handleRegister = () => {
    console.log("register click");

    // Check any input fields are empty
    if (
      !nameInput.value.trim() ||
      !imageInput.value.trim() ||
      !emailInput.value.trim() ||
      !passwordInput.value.trim()
    ) {
      return inputFieldError();
    }

    registerEmail(emailInput.value, passwordInput.value)
      .then((result) => {
        const displayName = nameInput.value;
        const photoURL = imageInput.value;

        updateProfile(result.user, { displayName, photoURL })
          .then((user) => {
            // console.log("User profile updated successfully:", user);

            registerSuccessfully();
          })
          .catch((error) => {
            console.error("Error updating user profile:", error);
          });
        handleLogout();

        setTimeout(() => {
          navigate(`/login`);
        }, 1000);
      })
      .catch((error) => {
        const errormsg = error.message;
        console.log(errormsg);

        toast.warn(`${errormsg}`, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });

    nameInput.resetInput();
    imageInput.resetInput();
    emailInput.resetInput();
    passwordInput.resetInput();
  };

  return (
    <div className="RegisterContainer pt-[8rem] pb-[5rem] bg-gray-100 ">
      <div className="RegisterWrapper ">
        {/* login body   */}
        <div className="registerInput bg-gray-300 w-[88%] sm:w-[72%] md:w-[62%] lg:w-[46%]  m-auto flex flex-col justify-center items-center py-3 sm:py-7 md:py-8 lg:py-9 px-2 sm:px-6 md:px-7 shadow-md ">
          <h1 className=" w-full text-center block text-lg sm:text-xl md:text-2xl font-semibold pb-2 sm:pb-3 md:pb-4 lg:pb-5 mb-2 sm:mb-3 md:mb-4 border-b border-gray-400 ">
            Register your account
          </h1>

          {/* input component  */}
          {/* heading,inpType,placeHolder */}
          <InputField
            heading={"Your Name"}
            inpType={"text"}
            placeHolder="Enter your name"
            inputId="name_input"
            inputHook={nameInput}
          />
          <InputField
            heading={"Photo Url"}
            inpType={"text"}
            placeHolder="Enter photo url"
            inputId="photo_input"
            inputHook={imageInput}
          />
          <InputField
            heading={"Email"}
            inpType={"email"}
            placeHolder="Enter your email"
            inputId="email_input"
            inputHook={emailInput}
          />
          <InputField
            heading={"Password"}
            inpType={"password"}
            placeHolder="Enter your email"
            inputId="password_input"
            inputHook={passwordInput}
          />

          {/* input component  */}

          <button
            className=" mt-5 bg-gray-600 hover:bg-gray-700 active:scale-[.99] py-2 w-full text-white "
            onClick={() => handleRegister()}
          >
            Register
          </button>

          <ToastContainer />

          <p className="  mt-3 ">
            Already have An Account ?
            <span className="text-red-500">
              <Link to={`/login`}>Log in</Link>
            </span>{" "}
          </p>
        </div>
        {/* login body   */}
      </div>
    </div>
  );
};

export default Register;
