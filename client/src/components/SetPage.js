import React, { useState } from "react";
import Webpage from "./ProjectPage/Webpage";
import { samvesh3 } from "../images/samvesh";
import { neer11 } from "../images/neer";
import { moonj1 } from "../images/moonj";
import { sahyog1 } from "../images/sahyog";
import { FaBackspace } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
const SetPage = () => {
  const [activeProject, setActiveProject] = useState("");
  const [visible, setInvisible] = useState(true);
  const style =
    "border-2 rounded-md border-black text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-black hover:border-black duration-100";
  const handleClick = (project) => {
    setActiveProject(project);
    setInvisible(!visible);
  };
  const goBack = () => {
    setInvisible(!visible);
  };

  const buttonStyle = {
    backgroundColor: "#FFFDE8", // Match the background color with the navbar buttons
    color: "#2C3E50", // Match the text color with the navbar buttons
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const buttonHoverStyle = {
    backgroundColor: "#F1C40F", // Match the hover background color with the navbar buttons
    color: "#FFFFFF", // Match the hover text color with the navbar buttons
  };

  return (
    <div className="relative" style={{ overflow: "hidden" }}>
      {visible && (
        <div className="flex justify-center items-center bg-gradient-to-b from-yellow-200 to-white from-20%">
          <div className="flex  gap-2 w-screen mt-10 h-screen flex-col">
            <div className="flex  gap-2 items-center justify-center flex-wrap">
              <button
                className={`${style} hover:z-20 h-[300px] md:w-1/3 w-full text-7xl bg-black relative`}
                onClick={() => handleClick("samvesh")}
              >
                <img
                  src={samvesh3}
                  className="h-full w-full opacity-30"
                  alt=""
                />
                <h1 className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  Samvesh
                </h1>
              </button>

              <button
                className={`${style} hover:z-20 h-[300px] md:w-1/3 w-full text-7xl bg-black relative`}
                onClick={() => handleClick("neer")}
              >
                <img src={neer11} className="h-full w-full opacity-30" alt="" />
                <h1 className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  Neer
                </h1>
              </button>
            </div>
            <div className="flex  gap-2 items-center justify-center flex-wrap">
            <button
                className={`${style} hover:z-20 h-[300px] md:w-1/3 w-full text-7xl bg-black relative`}
                onClick={() => handleClick("moonj")}
              >
                <img src={moonj1} className="h-full w-full opacity-30" alt="" />
                <h1 className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  Moonj
                </h1>
              </button>
              <button
                className={`${style} hover:z-20 h-[300px] md:w-1/3 w-full text-7xl bg-black relative`}
                onClick={() => handleClick("sahyog")}
              >
                <img src={sahyog1} className="h-full w-full opacity-30" alt="" />
                <h1 className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  Sahyog
                </h1>
              </button>
            </div>
          </div>
        </div>
      )}
      
      {!visible && <Webpage Project={activeProject} goBack={goBack} color={"yellow"} />}
    </div>
  );
};

export default SetPage;
