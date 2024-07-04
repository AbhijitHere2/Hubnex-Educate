import React, { useEffect, useState } from "react";
import "./Cards.css";
import way1 from "../images/way1.png";
import way2 from "../images/way2.png";
import way3 from "../images/way3.png";

import AOS from "aos";
import "aos/dist/aos.css";
import Card from "../Card/Card";
import CardTwo from "../CardTwo/CardTwo";
import CardThree from "../CardThree/CardThree";
import { Link } from "react-scroll";

const Cards = () => {
  useEffect(() => {
    AOS.init({
      once: true,

      disable: "phone",
      duration: 2000,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <div className=" flex flex-col w-full items-center text-center gap-10 mt-10 justify-center ">
        <div>
          <h1>heading</h1>
        </div>
        <div className="flex justify-evenly  w-full ">
          <Link to="card1" smooth={true} duration={2000}>
            <button className="btn max-sm:w-28 "> Submit Application</button>
          </Link>

          <Link to="cardTwo" smooth={true} duration={2000}>
            <button className="btn max-sm:w-24 ">Select Domain</button>
          </Link>

          <Link to="card3" smooth={true} duration={2000}>
            <button className="btn max-sm:w-24 max-sm:py-6"> Certificate</button>
          </Link>
        </div>
      </div>
      <div className="  cont flex flex-row   ">
        <div className=" ml-10 flex bg-slate-400 w-[32px] h-[1900px] text-start mb-80 ">.
        </div>
        <div className="">
          <Card />
          <div>
            <img className="path mx-[365px] " src={way1} alt="" />
          </div>
          <CardTwo />
          <div>
            <img className="path1 mx-[304px]" src={way2} alt="" />
          </div>
          <CardThree />
          <div>
            <img className="path2 mx-[304px] " src={way3} alt="" />
          </div>
          <div className="end  shadow-lg hover:shadow-slate-600 transition-all duration-300 ease ">
            end
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
