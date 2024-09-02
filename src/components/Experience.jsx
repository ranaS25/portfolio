import React from "react";

const Experience = () => {
  return (
    <div className="w-full h-fit  bg-blue-600/20 mx-10 px-4 md:px-16 md:py-16  pb-8 mt-8">
      <h1 className="font-bold text-2xl md:text-4xl py-4">Experience</h1>
      <div className="pt-4">
        <ul>
          <li className="flex md:gap-2 flex-row items-center mb-4 h-fit">
            <div className="flex self-stretch md:mx-4 md:flex-row items-center md:items-stretch flex-col-reverse w-fit ">
              <span className="flex items-center text-lg  font-semibold">
                March
                <br />
                2024
              </span>
              <div className="w-fit flex flex-col  grow items-center pt-5 mr-2 md:mx-4">
                {/* <div className="w-1 grow bg-green-500"></div> */}
                <span className=" bg-green-400 w-4 aspect-square md:w-6  border-green-500 border-2 rounded-full " />
                <div className="w-1  bg-green-500 grow"></div>
              </div>{" "}
            </div>
            <div className="">
              <h2 className="font-bold text-xl py-4">Intern</h2>
              <h3 className="font-semibold text-base sm:text-xl pb-2">
                <i>Hogarth Studios, Gurugram</i>
              </h3>
              <ul className="flex pl-4 flex-col md:flex-row  text-sm sm:text-base gap-4 font-medium text-black/70  items-stretch mt-2">
                <li className="md:text-center md:border-r border-black pr-2">
                  Worked on content design using front-end technologies for
                  email deployment, utilizing HTML, CSS, and JavaScript.
                </li>
                <li className="md:text-center md:border-r border-black pr-2">
                  Created responsive email templates, ensuring cross-platform
                  compatibility and adherence to brand guidelines.
                </li>
                <li className="md:text-center">
                  Collaborated closely with marketing and design teams to
                  develop and optimize email campaigns.
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
