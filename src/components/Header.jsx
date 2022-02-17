import React, { useEffect, useState } from "react";

const Header = () => {
  const [sidebar, setSideBar] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", (e) =>
      e.target.innerWidth >= 768 ? setSideBar(true) : setSideBar(false)
    );
    window.innerWidth >= 768 && setSideBar(true);
  }, []);
  return (
    <div className="header-container">
      <div className="max-w-20 w-10 sm:w-16 md:w-20">
        <img
          className="w-full"
          src="https://seeklogo.com/images/G/govt-of-bangladesh-logo-065AA3B482-seeklogo.com.png"
          alt="gov-logo"
        />
      </div>
      <div onClick={() => setSideBar(!sidebar)} className="burger">
        <span className="burger-line"></span>
        <span className="burger-line"></span>
        <span className="burger-line"></span>
      </div>
      <div className={`nav-link-container ${!sidebar && "hidden"} `}>
        <a className="nav-link" href="#">
          Home
        </a>
        <a className="nav-link" href="#">
          Contact
        </a>
        <a className="nav-link" href="#">
          About
        </a>
      </div>
    </div>
  );
};

export default Header;
