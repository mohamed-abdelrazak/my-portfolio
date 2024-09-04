import React from "react";
import style from "./About.module.css";

export default function About() {
  return (
    <>
      <div id="about" className="w-full border-b-2 border-black">
        <div className="container mx-auto py-7 flex flex-col justify-center items-center">
          <div className="text-center my-font font-semibold">
            <h2 className="text-3xl md:text-5xl">About</h2>
          </div>
          <p className="my-7 font-semibold w-[70%] text-center">
            " Hey, I'm Mohamed, a passionate front-end developer with 1 year of
            experience specializing in building dynamic and responsive web
            applications using React.js. I enjoy turning complex problems into
            simple, beautiful, and intuitive interfaces. My expertise includes
            working with JavaScript, React.js, Next.js, HTML5, CSS3, and other
            modern web technologies. "
          </p>
        </div>
      </div>
    </>
  );
}
