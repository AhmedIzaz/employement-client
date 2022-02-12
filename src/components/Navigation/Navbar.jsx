import "./navbarStyles.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const [burger_clicked, setBurgerClicked] = useState(false);
  return (
    <>
      <div className="navigation-bar">
        <div onClick={() => navigate("/")} className="gov-logo">
          <img
            alt="gov-logo"
            src="https://seeklogo.com/images/B/bangladesh-govt-logo-A2C7688845-seeklogo.com.png"
          />
        </div>
        <div
          onClick={() => setBurgerClicked(!burger_clicked)}
          className="hamburger"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`nav-option-container ${burger_clicked && "active"}`}>
          <ul>
            <li>
              <a href="#">ফরম পুরন</a>
            </li>
            <li>
              <a href="#">ব্যক্তিগত তথ্যাদি</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
