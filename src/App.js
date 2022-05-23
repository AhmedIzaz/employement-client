import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./Pages/Home";
import InformationForm from "./Pages/InformationForm";

import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/information-form" element={<InformationForm />} />
          <Route
            path="*"
            element={
              <h1 className="w-full h-96 text-center p-8 text-4xl">
                404 Not Found!
              </h1>
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
