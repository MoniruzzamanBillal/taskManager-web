import React from "react";
import { userData } from "../../Utils/Data";

// console.log(userData);

const Users = () => {
  return (
    <div className=" py-3  mt-7 ">
      <h1 className=" text-4xl text-center font-semibold text-gray-800 mb-8 ">
        Used by{" "}
      </h1>

      {/* usercard  */}
      <div className="userCard flex flex-wrap gap-4 justify-center items-center  ">
        {userData &&
          userData.map((data, ind) => (
            <div
              key={ind}
              class="flex  items-center justify-center rounded-lg bg-gray-100 p-4 "
            >
              <div className="imgContainer  w-[12rem] h-[4.5rem] ">
                <img src={`${data?.user}`} alt="" className="w-full h-full " />
              </div>
            </div>
          ))}
      </div>
      {/* usercard  */}
    </div>
  );
};

export default Users;
