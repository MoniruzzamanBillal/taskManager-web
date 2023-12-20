import React from "react";

const WhoUseCard = ({ data }) => {
  console.log(data);

  return (
    <div class="max-w-sm p-6 m-auto bg-gray-100 cursor-pointer border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
      <a href="#">
        <h5 class="mb-3 text-xl  font-bold tracking-tight text-gray-900 dark:text-white">
          {data?.user}
        </h5>
      </a>
      <p class="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
        {data?.benefit}
      </p>
    </div>
  );
};

export default WhoUseCard;
