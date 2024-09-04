import React from "react";
import style from "./Contact.module.css";

export default function Contact() {
  return (
    <>
      <div id="contact" className="w-full contact-bg border-b-2 border-black">
        <div className="container mx-auto py-8 flex flex-col justify-center items-center">
          <div className="text-center my-font font-semibold">
            <h2 className="text-3xl md:text-5xl">Contact</h2>
          </div>
        </div>
        <div className="w-full mx-auto my-4 container flex flex-col justify-center items-center">
          <h3 className="text-xl text-center">
            Whether you have a question, a project proposal, or just want to say
            hello,
          </h3>
          <h3 className="text-xl text-center">
            feel free to reach out! I'd love to hear from you.
          </h3>
          <div className="my-10 flex justify-center items-center gap-4">
            <a href="https://github.com/Mo-Zoka">
              <div className="contact-icon size-12 rounded-full border-white border flex justify-center items-center">
                <i className="fab fa-github text-xl text-white"></i>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/mohamed-abdelrazak-491923267/">
              <div className="contact-icon size-12 rounded-full border-white border flex justify-center items-center">
                <i className="fab fa-linkedin-in text-xl text-white"></i>
              </div>
            </a>
            <a href="https://www.instagram.com/zoka_artt/">
              <div className="contact-icon size-12 rounded-full border-white border flex justify-center items-center">
                <i className="fab fa-instagram text-xl text-white"></i>
              </div>
            </a>
            <a href="https://www.behance.net/gallery/177632133/Abo-Alrood-Animation">
              <div className="contact-icon size-12 rounded-full border-white border flex justify-center items-center">
                <i className="fab fa-behance text-xl text-white"></i>
              </div>
            </a>
            <a href="mailto:mohamedabdelrazak720@gmail.com">
              <div className="contact-icon size-12 rounded-full border-white border flex justify-center items-center">
                <i className="fa-solid fa-envelope text-xl text-white"></i>
              </div>
            </a>
          </div>
        </div>
        <h3 className="text-center mb-7 text-gray-600">Handcrafted by me <i className="fa-regular fa-copyright"></i> 2024</h3>
      </div>
    </>
  );
}
