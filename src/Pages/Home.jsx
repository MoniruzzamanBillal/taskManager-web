import React from "react";
import UseAuth from "../Hooks/UseAuth";
import NavBar from "../Components/Home/NavBar";
import Banner from "../Components/Home/Banner";

const Home = () => {
  const { user } = UseAuth();

  console.log(user);

  return (
    <div className=" mainContainer bg-red-100 ">
      <div className="navContainer">
        <NavBar />
      </div>

      <div className="bannerContainer">
        <Banner />
      </div>
    </div>
  );
};

export default Home;
