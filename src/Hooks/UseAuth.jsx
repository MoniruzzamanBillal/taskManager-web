import React, { useContext } from "react";
import { AppContext } from "../Utils/AuthContaxt";

const UseAuth = () => {
  return useContext(AppContext);
};

export default UseAuth;
