import React from "react";
import logo from "../../assets/portrait.png";
import btn1 from "../../assets/btn-1.png";
import doodle1 from "../../assets/doodle-1.png";
import doodle2 from "../../assets/doodle-2.png";
import doodle3 from "../../assets/doodle-3.png";
import style from "./Header.module.css";

export default function Header() {
  return (
    <>
      <div
        id="header"
        className="header-bg h-screen w-full relative border-b-2 border-black"
      >
        <div className="container mx-auto h-screen py-5 flex flex-col justify-center items-center">
          <div className="text-center header-font font-semibold">
            <h2 className="text-2xl md:text-5xl">HI, I'M</h2>
            <h1 className="text-3xl md:text-6xl relative">
              Mohamed Abdelrazak
              <img
                src={doodle2}
                className="hidden md:block absolute md:bottom-[95%] md:right-[15%] md:w-[50px]"
              />
            </h1>
          </div>
          <img
            src={logo}
            alt="a drawing for me"
            className="w-auto md:w-1/2 lg:w-1/3"
          />
        </div>
        <div className="absolute top-[3%] left-[3%] md:top-[10%] md:left-[10%] py-3 border-t-2 border-b-2 border-black font-semibold">
          <h3>Front-End developer,</h3>
          <h3>Digital Artist</h3>
          <h3>& Animator</h3>
          <img
            src={doodle1}
            className="hidden md:block absolute md:top-[150%] md:left-[120%] md:w-[50px]"
          />
        </div>
        <div className="absolute top-[3%] right-[3%] md:top-[10%] md:right-[10%] py-3 border-t-2 border-b-2 border-black font-semibold text-right">
          <h3>CS Student,</h3>
          <h3>4th year</h3>
        </div>
        <div className="absolute bottom-[3%] left-[3%] md:bottom-[10%] md:left-[10%] font-semibold w-[250px]">
          <h3 className="relative">
            Specialized in building dynamic and responsive web applications
            using React.js
            <img
              src={doodle2}
              className="hidden md:block absolute md:bottom-[120%] md:right-[10%] md:w-[30px]"
            />
          </h3>
        </div>
        <div className="absolute bottom-[3%] right-[1%] md:bottom-[8%] md:right-[10%] w-[120px] md:w-[180px]">
          <button className="relative cursor-default">
            <a href="#contact">
              <img src={btn1} className="btn-1 cursor-pointer" />
            </a>
            <img
              src={doodle3}
              className="hidden md:block absolute md:bottom-[100%] md:right-[100%] md:w-[80px]"
            />
          </button>
        </div>
      </div>
    </>
  );
}
