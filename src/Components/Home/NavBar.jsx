import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { RiMenu3Fill, RiCloseFill, RiXingLine } from "react-icons/ri";
import UseAuth from "../../Hooks/UseAuth";

const navLink = [
  {
    item: "Home",
    link: "/",
  },
  {
    item: "Services",
    link: "/service",
  },
  {
    item: "Offers",
    link: "/offer",
  },
  {
    item: "Pricing",
    link: "/pricing",
  },
  {
    item: "About us",
    link: "/about",
  },
];

const NavBar = () => {
  const { user, logOut } = UseAuth();
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleLogout = () => {
    logOut()
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <div className="navContainer  py-2 bg-blue-100  fixed w-full z-20 shadow ">
      <div className="navWrapper flex justify-between w-[96%] lg:w-[88%] m-auto items-center ">
        {/* nav left  */}
        <div className="navLeft  ">
          <div className="navLeftImg  ">
            <Link
              to={`/`}
              className="self-center cursor-pointer  font-semibold whitespace-nowrap "
            >
              <div className=" flex justify-center items-center   ">
                <div className="logoContainer w-[2rem] ">
                  <img
                    src="https://i.ibb.co/R6NmGbQ/icons8-parcel-100.png"
                    className="  w-full "
                    alt=""
                  />{" "}
                </div>

                <p className=" text-base lg:text-xl pl-2 ">TaskHandler</p>
              </div>
            </Link>
          </div>
        </div>
        {/* nav left  */}

        {/* nav Middle   */}

        <div className="navLinks hidden md:flex ">
          {navLink.map((ele, ind) => (
            <NavLink
              key={ind}
              to={ele.link}
              className={`  ${
                navLink.length - 1 === ind ? "mr-0" : "mr-5"
              } text-base lg:text-lg text-color hover:text-blue-700`}
            >
              {ele.item}
            </NavLink>
          ))}
        </div>

        {/* nav Middle   */}

        {/* nav right  */}
        <div className="navRight   ">
          {/* !mobile view  */}
          <div className="notMobile hidden md:flex justify-center items-center ">
            {/* avatar image  */}
            <div className="avaterImg pr-2">
              {/* {user?.photoURL && (
                <div className="flex items-center gap-1">
                  <p className=" text-xs lg:text-sm"> {user.displayName} </p>
                  <img
                    className=" w-7 h-7 lg:w-9 lg:h-9  rounded-full ring-1 ring-gray-300 dark:ring-gray-500"
                    src={user.photoURL}
                    alt="Bordered avatar"
                  />
                </div>
              )} */}
            </div>
            {/* avatar image  */}
            <Link
              to={`/login`}
              className=" bg-gray-600 py-2 px-3 lg:px-4  text-white font-semibold text-xs lg:text-sm "
            >
              Log in
            </Link>

            {/* {user ? (
              <Link
                className=" bg-gray-600 py-2 px-3 lg:px-4  text-white font-semibold text-xs lg:text-sm  "
                onClick={() => handleLogout()}
              >
                Log out
              </Link>
            ) : (
              <Link
                to={`/login`}
                className=" bg-gray-600 py-2 px-3 lg:px-4  text-white font-semibold text-xs lg:text-sm "
              >
                Log in
              </Link>
            )} */}
          </div>

          {/* !mobile view  */}
          {/*  */}
          {/* mobile view  */}

          <div className="mobileView flex md:hidden relative ">
            {/* menu icon  */}
            <div className="menuIcon text-2xl " onClick={() => handleToggle()}>
              {!toggle ? <RiMenu3Fill /> : <RiCloseFill />}
            </div>
            {/* menu icon  */}

            {/* menu list  */}

            {toggle && (
              <div className="menuList text-center py-2 bg-gray-800 absolute transform -translate-x-1/2 -translate-y-1/2 -right-[4.8rem] top-[8.4rem] w-[10rem] ">
                <div className="menuItem mb-4  ">
                  {navLink.map((ele, ind) => (
                    <div
                      key={ind}
                      className={` text-base ${
                        ind === navLink.length - 1 ? "pb-0" : "pb-3"
                      }  `}
                    >
                      <a
                        href={ele.link}
                        className="  cursor-pointer text-gray-50 "
                        onClick={() => handleToggle()}
                      >
                        {" "}
                        {ele.item}{" "}
                      </a>
                    </div>
                  ))}
                </div>

                <Link
                  className=" bg-red-400  py-1.5 px-5  text-white "
                  onClick={() => {
                    handleLogout();
                    handleToggle();
                  }}
                >
                  Log out
                </Link>

                {/* {user ? (
                  <Link
                    className=" bg-red-400  py-1.5 px-5  text-white "
                    onClick={() => {
                      handleLogout();
                      handleToggle();
                    }}
                  >
                    Log out
                  </Link>
                ) : (
                  <Link
                    to={`/login`}
                    className=" bg-red-400  py-1.5 px-5  text-white "
                    onClick={() => handleToggle()}
                  >
                    Log in
                  </Link>
                )}  */}
              </div>
            )}
            {/* menu list  */}
          </div>

          {/* mobile view  */}
        </div>
        {/* nav right  */}
      </div>
    </div>
  );
};

export default NavBar;
