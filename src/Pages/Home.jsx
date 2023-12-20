import React from "react";
import UseAuth from "../Hooks/UseAuth";
import NavBar from "../Components/Home/NavBar";

const Home = () => {
  const { user } = UseAuth();

  console.log(user);

  return (
    <div className=" mainContainer bg-red-100 ">
      <div className="navContainer">
        <NavBar />
      </div>

      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
