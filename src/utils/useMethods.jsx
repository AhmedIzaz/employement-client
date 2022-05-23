import { useNavigate } from "react-router-dom";
import axios from "axios";
const useMethods = () => {
  const navigate = useNavigate();
  const on_login = (data) => {
    sessionStorage.setItem("user", JSON.stringify(data));
    return navigate("/information-form");
  };

  const on_signup = async (data) => {
    console.log(data);
  };

  const get_division_list = async () => {
    const response = await axios.get(
      "https://bdapis.herokuapp.com/api/v1.1/divisions"
    );

    return response.data.data;
  };

  const get_district_list = async (division) => {
    const response = await axios.get(
      `https://bdapis.herokuapp.com/api/v1.1/division/${division}`
    );
    return response.data.data;
  };

  const on_information_submit = (e, data) => {
    e.preventDefault();
    console.log(data);
  };

  return {
    on_login,
    on_signup,
    get_division_list,
    get_district_list,
    on_information_submit,
  };
};

export default useMethods;
