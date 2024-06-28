import React from "react";

const CardTwo = () => {
  return (
    <div
    id="cardTwo"
      ddata-aos-delay="500"
      data-aos="fade-up"
      class="aos-all"className="card w-[80%] mx-40  transition-all duration-300  ease rounded-lg  shadow-md  hover:shadow-slate-400 "
    >
      <div className="info  transition-all duration-300 ease w-[430px]  h-[430px] shadow-lg ">
        info <br /> Select Domain
      </div>
      <div className="incard  transition-all duration-300  ease w-[430px]  h-[430px] shadow-lg ">
        Card 2
      </div>
    </div>
  );
};

export default CardTwo;
