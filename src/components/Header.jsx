import React, { useState } from "react";

const Header = () => {
  const [sidebar, setSideBar] = useState(false);
  return (
    <div className="relative flex flex-col gap-8 justify-between items-start md:flex-row md:items-center">
      <div className="max-w-20 w-10 sm:w-16 md:w-20">
        <img
          className="w-full"
          src="https://seeklogo.com/images/G/govt-of-bangladesh-logo-065AA3B482-seeklogo.com.png"
          alt="gov-logo"
        />
      </div>
      <div
        onClick={() => setSideBar(!sidebar)}
        className="flex flex-col justify-between items-center w-8 h-7 hover:bg-gray-400 hover:p-1 rounded-md md:hidden absolute right-1"
      >
        <span className="w-full h-1 bg-gray-900"></span>
        <span className="w-full h-1 bg-gray-900"></span>
        <span className="w-full h-1 bg-gray-900"></span>
      </div>
      <div
        className={`w-full flex flex-col justify-around items-center  md:basis-3/4 md:flex-row gap-8 ${
          !sidebar && "hidden"
        } z-10  top-10 absolute md:static`}
      >
        <a
          className="after:content-[''] after:bg-red-600 after:block after:m-auto after:w-0 after:h-1 hover:after:w-full hover:after:duration-500"
          href="#"
        >
          Home
        </a>
        <a
          className="after:content-[''] after:bg-red-600 after:block after:m-auto after:w-0 after:h-1 hover:after:w-full hover:after:duration-500"
          href="#"
        >
          Contact
        </a>
        <a
          className="after:content-[''] after:bg-red-600 after:block after:m-auto after:w-0 after:h-1 hover:after:w-full hover:after:duration-500"
          href="#"
        >
          About
        </a>
      </div>
    </div>
  );
};

export default Header;
