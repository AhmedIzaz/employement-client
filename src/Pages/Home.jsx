import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className=" w-60 space-y-2 rounded-md text-center py-4 text-lg mt-5 font-bold shadow-md mx-auto border border-gray-400">
      <h3>{sessionStorage.getItem("user") ? "তথ্য দিন" : "লগইন করুন !"}</h3>
      <button
        onClick={() => navigate("/login")}
        className="py-2 px-4 bg-blue-400 text-gray-50 font-bold rounded cursor-pointer hover:ring hover:ring-4"
      >
        এখানে ক্লিক করুন
      </button>
    </div>
  );
};

export default Home;
