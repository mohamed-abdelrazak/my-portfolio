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
  const projects = [
    {
      id: 1,
      title: "Mealify",
      description:
        "Food website, made using HTML/CSS/media queries to make a responsive design.",
      image: mealify,
      link: "https://mohamed-abdelrazak.github.io/mealify/",
    },
    {
      id: 2,
      title: "Freshcart",
      description:
        "Full working E-commerce website made using React.js, tailwindcss",
      image: freshcart,
      link: "https://mohamed-abdelrazak.github.io/freshcart/",
    },
    {
      id: 3,
      title: "Games",
      description:
        "Game review website made using html,css,bootstrap, javascript and jqeury",
      image: games,
      link: "https://mohamed-abdelrazak.github.io/game-review/",
    },
    {
      id: 4,
      title: "Devfolio",
      description:
        "Portfolio website made using html,css,bootstrap & fully responsive design",
      image: devfolio,
      link: "https://mohamed-abdelrazak.github.io/devfolio/",
    },
    {
      id: 5,
      title: "Weather App",
      description:
        "Weather website made using html,css,javascript and weather Api",
      image: weather,
      link: "https://mohamed-abdelrazak.github.io/weather/",
    },
    {
      id: 6,
      title: "Yummy",
      description:
        "Food recipes website made using html,css,bootstrap, javascript and jqeury",
      image: yummy,
      link: "https://mohamed-abdelrazak.github.io/yummy/",
    },
    {
      id: 7,
      title: "Bookmark",
      description:
        "bookmark website made using html,css,bootstrap and javascript",
      image: bookmark,
      link: "https://mohamed-abdelrazak.github.io/bookmark-js/",
    },
  ];

  return (
    <>
      <div id="projects" className="w-full header-bg border-b-2 border-black">
        <div className="container mx-auto py-8 flex flex-col justify-center items-center">
          <div className="text-center my-font font-semibold">
            <h2 className="text-3xl md:text-5xl">Projects</h2>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="w-full container mx-auto my-10 mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 justify-items-center">
          {projects.map((project) => (
            <div key={project.id} className="card flex">
              <div className="max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow flex flex-col h-full">
                <img
                  className="rounded-t-lg"
                  src={project.image}
                  alt={project.title}
                />
                <div className="p-5 flex flex-col flex-grow">
                  <p className="mb-3 font-normal text-gray-700">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-20 mt-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-400 rounded-lg hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300"
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
          ))}
        </div>
      </div>
    </>
  );
}
