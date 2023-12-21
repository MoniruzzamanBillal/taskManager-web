import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";

const TeamCard = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="teamCardContainer cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="teamCardWrapper">
        {/* team card section  */}
        <div className="cardSection bg-white  ">
          {/* card image  */}
          <div className="cardTop grayscale hover:grayscale-0 duration-300 relative h-[8rem] md:h-[9rem] lg:h-[10rem]  ">
            <img src={data?.img} alt="" className=" w-full h-full " />

            <div
              className={`iconSection ${
                isHovered ? "flex" : "hidden"
              } absolute transform -translate-x-1/2 -translate-y-1/2 left-[50%]  gap-4 text-2xl sm:text-3xl  `}
            >
              <FaFacebook />
              <AiFillTwitterCircle />
              <AiFillInstagram />
            </div>
          </div>
          {/* card image  */}

          {/* card name  */}
          <div className="cardName pt-4 pb-2 text-center ">
            <h1 className=" font-semibold text-base sm:text-lg ">
              {data?.name}
            </h1>
          </div>
          {/* card name  */}
        </div>
        {/* team card section  */}
      </div>
    </div>
  );
};

export default TeamCard;
