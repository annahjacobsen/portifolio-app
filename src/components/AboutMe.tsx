import React from "react";
import image from "../assets/BildeAnna1.jpg"

const AboutMe = () => {
  return (
    <div id="about" className="w-full h-screen flex flex-col pt-16 bg-[#22333b] text-white">
      <div className="sm:text-left pb-8 pl-4 flex flex-col items-center">
            <h1 className="text-4xl font-bold inline border-b-4 border-gray-700">
              About Me
            </h1>
          </div>
      <div id="aboutcontent" className="">
        <div className="max-w-[1000px] pl-8 w-full flex flex-row justify-start items-center">
          <div className="w-52 h-auto rounded-full overflow-hidden">
            <img src={image}></img>
          </div>
          <div className="pl-8 flex gap-4 flex-col justify-start">
              <h1 className="text-2xl inline border-b-4 border-gray-700 font-bold">
                Who am i?
              </h1>
              <p>
                I am from Kristiansund
              </p>
          </div>
          <div>
            
          </div>
          <div></div>
        </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-left text-3xl ">
            <p>Hi. I´m Anna!</p>
          </div>

      </div>
    </div>
  );
};

export default AboutMe;
