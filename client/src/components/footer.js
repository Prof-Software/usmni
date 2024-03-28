import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import { CiPhone } from 'react-icons/ci';
import { SlLocationPin } from 'react-icons/sl';
import { FaRegEnvelope } from 'react-icons/fa';
import enactusLogo from '../assets/enactusNavbarLogo.png';

const Footer = () => {
  return (
    <footer id="contact-us" className="flex-col mt-8 text-white">   
      <div className="font-montserrat bg-[#30333C] animate-gradient py-6 md:py-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col w-full md:w-1/2 md:p-0 py-2 md:py-4 gap-4 md:text-center">
            <img
              src={enactusLogo}
              alt="Enactus Logo"
              className="w-36 md:w-48 mx-auto"
            />
            <p className="text-base md:text-lg font-medium text-white mx-auto">
              Follow us on social media{' '}
              <span className="md:hidden">We need your support!</span>
            </p>
            <div className="flex gap-3 md:gap-5 text-sm md:text-base text-[#646464] justify-center">
              <a
                href="https://www.facebook.com/enactusmnnit/"
                className="text-lg bg-[#efefef] p-2 rounded-full hover:bg-[#f4e25c] hover:text-white transition-all duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.youtube.com/channel/UCA4d5xXy13G5iOslOG6AjXA"
                className="text-lg bg-[#efefef] p-2 rounded-full hover:bg-[#f4e25c] hover:text-white transition-all duration-300"
              >
                <AiFillYoutube />
              </a>
              <a
                href="https://www.instagram.com/enactus_mnnit/"
                className="text-lg bg-[#efefef] p-2 rounded-full hover:bg-[#f4e25c] hover:text-white transition-all duration-300"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:relative text-center md:text-left w-full md:w-1/2">
            <div className="text-sm md:text-base font-bold ml-48">
              <div className="flex flex-col md:flex-row items-center gap-1">
                <SlLocationPin className="mt-1 text-lg" />
                <div>
                  Motilal Nehru National Institute of Technology
                  <br />
                  Teliarganj, Allahabad
                  <br />
                  Uttar Pradesh (211004), India
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1 justify-center">
              <FaRegEnvelope className="mt-1 text-lg" />
              <a
                href="mailto:enactusmnnitallahabad@gmail.com"
                className="text-sm md:text-base font-bold"
              >
                enactusmnnitallahabad@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-1 justify-center">
              <CiPhone className="text-lg" />
              <div className="text-sm md:text-base font-bold">+91 8340556926</div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-2">
          <p className="text-sm md:text-base font-medium px-3 md:px-6 text-white bg-black rounded-full">
            Enactus MNNIT-Allahabad
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;