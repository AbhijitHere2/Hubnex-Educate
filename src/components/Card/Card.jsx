import React from "react";
import "../Cards/Cards.css";

const Card = () => {
  return (
    <div
    id="card1"
      ddata-aos-delay="500"
      data-aos="fade-up"
      class="aos-all"
      className="card w-[80%] mx-40  transition-all duration-300  ease rounded-lg  shadow-md  hover:shadow-slate-400 "     >
      <div className="incard  transition-all duration-300  ease w-[430px]  h-[430px] shadow-lg ">
        Card 1 <br />   Submit Application
      </div>
      <div className="info  transition-all duration-300 ease w-[430px]  h-[430px] shadow-lg  ">
        info
      </div>
    </div>
  );
};

export default Card;
