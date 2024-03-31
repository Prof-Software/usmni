import React, { useState } from "react";
import enactusNavbarLogo from "../assets/Enactus-Gray.png";
import { Link, useLocation } from "react-router-dom";
const Nav = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "#about" },
    { name: "Projects", link: "/project" },
    { name: "Gallery", link: "/gallery" },
    { name: "Team", link: "/team" },
    { name: "Contact Us", link: "#" },
  ];
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleScrollToFooter = () => {
    const footer = document.getElementById("contact-us");
    footer.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToTeam = () => {
    const footer = document.getElementById("team");
    footer.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToAbout = () => {
    const footer = document.getElementById("about");
    footer.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`p-6 w-full bg-white text-black fixed top-0 left-0 font-montserrat z-50 ${
        open ? "open" : ""
      }`}
    >
      <div className="md:flex items-center h-[70px]  justify-between">
        <div className="font-bold h-full flex-col text-1xl cursor-pointer  flex items-center font-[Poppins]">
          <img
            src={enactusNavbarLogo}
            className="w-38 h-full mb-3"
            alt="Enactus Logo"
          />
        </div>
        <div
          onClick={handleToggle}
          className="text-black text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex font-bold  md:flex-col md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-4 md:space-x-9 transition-all duration-500 ease-in ${
            open ? "top-20" : "top-[-490px]"
          } ${open ? "bg-white" : ""}`}
        >
          <div className="w-11/12 flex flex-col md:flex-row md:justify-end">
            {Links.map((link) => (
              <li
                key={link.name}
                className="md:text-ml md:my-0 my-2 text-black text-[15px] font-mono md:mx-0 mx-3 flex justify-center"
              >
                {link.name === "Contact Us" ? (
                  <button
                    onClick={handleScrollToFooter}
                    className={`py-[10px] mr-4 relative rounded-full flex h-[50px] md:w-[150px] w-[160px] items-center justify-center overflow-hidden bg-white-100 text-black transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-yellow-400 before:duration-500 before:ease-out ${
                      location.pathname === link.link
                        ? "shadow-yellow-400 before:h-56 before:w-56"
                        : ""
                    }`}
                  >
                    <span className="relative z-10">{link.name}</span>
                  </button>
                ) : link.name === "About Us" ? (
                  <button
                    onClick={handleScrollToAbout}
                    className={`py-[10px] mr-4 relative rounded-full flex h-[50px] md:w-[150px] w-[160px] items-center justify-center overflow-hidden bg-white-100 text-black transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-yellow-400 before:duration-500 before:ease-out ${
                      location.pathname === link.link
                        ? "shadow-yellow-400 before:h-56 before:w-56"
                        : ""
                    }`}
                  >
                    <span className="relative z-10">{link.name}</span>
                  </button>
                ) : link.name === "Team" ? (
                  <button
                  onClick={handleScrollToTeam}
                  className={`py-[10px] mr-4 relative rounded-full flex h-[50px] md:w-[150px] w-[160px] items-center justify-center overflow-hidden bg-white-100 text-black transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-yellow-400 before:duration-500 before:ease-out ${
                    location.pathname === link.link
                      ? "shadow-yellow-400 before:h-56 before:w-56"
                      : ""
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                </button>
                ) : (
                  <Link
                    to={`${link.link}`}
                    target={
                      link.name === "Enactus Worldwide" ? "_blank" : "_self"
                    }
                    rel={
                      link.name === "Enactus Worldwide"
                        ? "noopener noreferrer"
                        : ""
                    }
                  >
                    <button
                      className={`relative rounded-full flex h-[50px] md:w-[150px] w-[160px] items-center justify-center overflow-hidden bg-white-100 text-black transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-yellow-400 before:duration-500 before:ease-out ${
                        location.pathname === link.link
                          ? "shadow-yellow-400 before:h-56 before:w-56"
                          : ""
                      }`}
                    >
                      <span className="relative z-10">{link.name}</span>
                    </button>
                  </Link>
                )}
              </li>
            ))}
          </div>
        </ul>
        <div className="relative">
          <div className="bg-[#FEC415] hidden absolute top-[-4rem] h-[100px] md:flex items-center justify-center w-[220px] right-[-2rem] font-bold">
            <a href="https://enactus.org/" rel={"noopener noreferrer"}>
              <h2>Enactus Worldwide</h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
