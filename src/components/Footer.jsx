import React from "react";
import facebook from "../icons/facebook.png";
import twitter from "../icons/twitter.png";
import linkedin from "../icons/linkedin.png";
const Footer = () => {
  return (
    <div className="flex flex-col space-y-4 md:flex-row justify-around items-center bg-slate-700 rounded-lg px-1 py-4 text-white font-medium">
      <div className="space-y-2 bg-slate-700">
        <p className="bg-inherit">Phone Number : 01839465030</p>
        <p className="bg-inherit">Email Address : asif32803@gmail.com</p>
        <div className="flex justify-around bg-inherit">
          <img
            src={facebook}
            className="w-6 md:w-8 bg-gray-50 rounded-full p-1 transform hover:scale-150 duration-500 "
            alt="facebook"
          />
          <img
            src={twitter}
            className="w-6 md:w-8 bg-gray-50 rounded-full p-1 transform hover:scale-150 duration-500"
            alt="twitter"
          />
          <img
            src={linkedin}
            className="w-6 md:w-8 bg-gray-50 rounded-full p-1 transform hover:scale-150 duration-500"
            alt="linkedin"
          />
        </div>
      </div>
      <div className="bg-slate-700">
        <p className="bg-inherit">Alright Reserved by Proton Seed LTD.</p>
      </div>
    </div>
  );
};

export default Footer;
