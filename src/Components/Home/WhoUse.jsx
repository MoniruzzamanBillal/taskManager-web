import React from "react";
import WhoUseCard from "./WhoUseCard";
import { whoUseData } from "../../Utils/Data";

// console.log(whoUseData);

const WhoUse = () => {
  return (
    <div className=" py-2.5 mt-6 ">
      {/* top heading  */}
      <h1 className=" text-4xl font-semibold text-center text-gray-800 mb-10 ">
        Who Benefits from Our Task Handler?
      </h1>
      {/* top heading  */}

      {/* uses card  */}
      <div className="WhoUsecard  mt-3 grid grid-cols-3 gap-4 m-auto ">
        {whoUseData.map((data, ind) => (
          <WhoUseCard key={ind} data={data} />
        ))}
      </div>
      {/* uses card  */}
    </div>
  );
};

export default WhoUse;
