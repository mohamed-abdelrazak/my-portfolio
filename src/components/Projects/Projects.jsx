import React from "react";
import style from "./Projects.module.css";
import example from "../../assets/example.jpg";
import mealify from "../../assets/mealify.png";
import freshcart from "../../assets/freshcart.png";
import games from "../../assets/games.png";
import devfolio from "../../assets/devfolio.png";
import weather from "../../assets/weather.png";
import yummy from "../../assets/yummy.png";
import bookmark from "../../assets/bookmark.png";

export default function Projects() {
  return (
    <>
      <div id="projects" className="w-full header-bg border-b-2 border-black">
        <div className="container mx-auto py-8 flex flex-col justify-center items-center">
          <div className="text-center my-font font-semibold">
            <h2 className="text-3xl md:text-5xl">Projects</h2>
          </div>
        </div>
        <div className="w-full container mx-auto my-10 mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 justify-items-center">
          <div className="card">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
              <img className="rounded-t-lg" src={mealify} alt="example" />
              <div className="p-5">
                <p className="mb-3 font-normal text-gray-700">
                  Food website, made using HTML/CSS/media queries to make a
                  responsive design.
                </p>
                <a
                  href="https://mo-zoka.github.io/mealify/"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-400 rounded-lg hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300"
                >
                  Demo
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
              <img className="rounded-t-lg" src={freshcart} alt="example" />
              <div className="p-5">
                <p className="mb-3 font-normal text-gray-700">
                  full working e-commerce website made using React.js, tailwindcss
                </p>
                <a
                  href="https://mo-zoka.github.io/freshcart/"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-400 rounded-lg hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300"
                >
                  Demo
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
              <img className="rounded-t-lg" src={games} alt="example" />
              <div className="p-5">
                <p className="mb-3 font-normal text-gray-700">
                  game review website made using html,css,bootstrap, javascript and jqeury
                </p>
                <a
                  href="https://mo-zoka.github.io/game-review/"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-400 rounded-lg hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300"
                >
                  Demo
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
              <img className="rounded-t-lg" src={devfolio} alt="example" />
              <div className="p-5">
                <p className="mb-3 font-normal text-gray-700">
                  portfolio website made using html,css,bootstrap & fully responsive design
                </p>
                <a
                  href="https://mo-zoka.github.io/devfolio/"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-400 rounded-lg hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300"
                >
                  Demo
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
              <img className="rounded-t-lg" src={weather} alt="example" />
              <div className="p-5">
                <p className="mb-3 font-normal text-gray-700">
                  weather website made using html,css,javascript and weather Api
                </p>
                <a
                  href="https://mo-zoka.github.io/weather/"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-400 rounded-lg hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300"
                >
                  Demo
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
              <img className="rounded-t-lg" src={yummy} alt="example" />
              <div className="p-5">
                <p className="mb-3 font-normal text-gray-700">
                  food recipes website made using html,css,bootstrap, javascript and jqeury
                </p>
                <a
                  href="https://mo-zoka.github.io/yummy/"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-400 rounded-lg hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300"
                >
                  Demo
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
              <img className="rounded-t-lg" src={bookmark} alt="example" />
              <div className="p-5">
                <p className="mb-3 font-normal text-gray-700">
                  bookmark website made using html,css,bootstrap and javascript
                </p>
                <a
                  href="https://mo-zoka.github.io/bookmark-js/"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-400 rounded-lg hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300"
                >
                  Demo
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
