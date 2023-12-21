import React from "react";
import UseAuth from "../Hooks/UseAuth";
import NavBar from "../Components/Home/NavBar";
import Banner from "../Components/Home/Banner";
import WhoUse from "../Components/Home/WhoUse";
import Users from "../Components/Home/Users";
import Team from "../Components/Home/Team";
import Testimonial from "../Components/Home/Testimonial";

const Home = () => {
  const { user } = UseAuth();

  console.log(user);

  return (
    <div className=" mainContainer ">
      <div className="navContainer">
        <NavBar />
      </div>

      <div className="bannerContainer">
        <Banner />
      </div>

      {/* who uses  */}
      <div className="uses">
        <WhoUse />
      </div>
      {/* who uses  */}

      {/* users  */}
      <div className="appUsers">
        <Users />
      </div>
      {/* users  */}

      {/* testimonial */}
      <div className="testimonialContainer">
        <Testimonial />
      </div>
      {/* testimonial */}

      <div className="teamComponenrt">
        <Team />
      </div>
    </div>
  );
};

export default Home;
