import { useNavigate } from "react-router-dom";
import "./homeStyles.css";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <section className="section-one">
        <div className="form-path-box-container">
          <div className="form-path-box">
            <h3>তথ্য দিতে নিছের বাটনে ক্লিক করুন!</h3>
            <button onClick={() => navigate("/login")}>ফর্ম পেজে যান</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
