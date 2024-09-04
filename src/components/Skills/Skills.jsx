import React from "react";
import style from "./Skills.module.css";

export default function Skills() {
  return (
    <>
      <div id="skills" className="w-full border-b-2 border-black">
        <div className="container mx-auto py-8 flex flex-col justify-center items-center">
          <div className="text-center my-font font-semibold">
            <h2 className="text-3xl md:text-5xl">Skills</h2>
          </div>
          <div className="container flex flex-col md:flex-row justify-center items-start text-center my-16">
            <div className="flex flex-col justify-start items-center px-10 border-b-2 md:border-b-0 md:border-r-2 border-black pb-6 md:pb-0">
              <div className="rounded-full bg-orange-400 w-16 h-16 flex justify-center items-center mt-0">
                <i className="fa-solid fa-code fa-2xl"></i>
              </div>
              <h2 className="text-xl font-bold my-2">Frontend Developer</h2>
              <h4>
                I like to code things from scratch, and enjoy bringing ideas to
                life in the browser.
              </h4>
              <h3 className="text-orange-400 text-xl font-bold mt-6 mb-2">
                Languages:
              </h3>
              <p>HTML, CSS, Sass, Javascript</p>
              <h3 className="text-orange-400 text-xl font-bold mt-6 mb-2">
                Devtools:
              </h3>
              <p className="w-full">
                Bootstrap, Tailwind, React.js, Next.js, Redux toolkit, Git,
                Github, VS Code
              </p>
            </div>
            <div className="flex flex-col justify-start items-center px-10 pt-6 md:pt-0">
              <div className="rounded-full bg-orange-400 w-16 h-16 flex justify-center items-center mt-0">
                <i className="fa-solid fa-palette fa-2xl"></i>
              </div>
              <h2 className="text-xl font-bold my-2">Artist/Animator</h2>
              <h4>
                I like to draw digitally, traditionally and also I like to make
                2D animation videos
              </h4>
              <h3 className="text-orange-400 text-xl font-bold mt-6 mb-2">
                Experiences:
              </h3>
              <p>Youtube channel, social media posts & videos</p>
              <h3 className="text-orange-400 text-xl font-bold mt-6 mb-2">
                Drawing tools:
              </h3>
              <p className="w-full">
                Photoshop, Animate CC, Sketch, Pen & Paper
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
