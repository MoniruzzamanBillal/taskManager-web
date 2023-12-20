import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="  py-2 ">
      <section class="min-h-[20rem] relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-24 xl:py-28 ">
        {/* <!-- image - start --> */}
        <img
          src="https://images.unsplash.com/photo-1618004652321-13a63e576b80?auto=format&q=75&fit=crop&w=1500"
          loading="lazy"
          alt="Photo by Fakurian Design"
          class="absolute inset-0 h-full w-full object-cover object-center"
        />
        {/* <!-- image - end --> */}

        {/* <!-- overlay - start --> */}
        <div class="absolute inset-0 bg-indigo-500 mix-blend-multiply"></div>
        {/* <!-- overlay - end --> */}

        {/* <!-- text start --> */}
        <div class="relative flex flex-col items-center p-4 sm:max-w-xl">
          <h1 class="mb-7 text-center text-4xl font-bold text-white sm:text-5xl md:mb-9 md:text-6xl">
            ONLINE TASK MANAGER
          </h1>

          <p class="mb-4 text-center text-lg text-gray-100 sm:text-xl md:mb-8">
            Organize and manage your team like a boss with TaskHandler , a free
            task management tool packing more capabilities than you can imagine.
          </p>

          <div class="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
            <Link class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
              Let's Explore
            </Link>
          </div>
        </div>
        {/* <!-- text end --> */}
      </section>
    </div>
  );
};

export default Banner;
