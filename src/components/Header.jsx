import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { user_logout } from "../store/thunks/user_thunk";
const Header = () => {
  const [sidebar, setSideBar] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user_reducer);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    window.addEventListener("resize", (e) =>
      e.target.innerWidth >= 768 ? setSideBar(true) : setSideBar(false)
    );
    window.innerWidth >= 768 && setSideBar(true);
  }, []);
  return (
    <motion.div
      whileInView={{ y: [50, 1], opacity: [0, 1] }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="header-container"
    >
      <div
        onClick={() => navigate("/")}
        className="max-w-20 w-10 sm:w-16 md:w-20 cursor-pointer"
      >
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
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        {user ? (
          <p
            className="nav-link"
            onClick={() => dispatch(user_logout(navigate))}
          >
            Logout
          </p>
        ) : (
          location.pathname !== "/login" && (
            <Link className="nav-link" to="/login">
              Login
            </Link>
          )
        )}
      </div>
    </motion.div>
  );
};

export default Header;
