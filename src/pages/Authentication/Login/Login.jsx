import "./loginStyles.css";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import useApiMethods from "../../../methods/useApiMethods";
import { useNavigate } from "react-router-dom";
const schema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).max(32).required(),
});

function Login() {
  const { userLogin } = useApiMethods();
  const navigate = useNavigate();
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({ resolver: yupResolver(schema) });
  const onFormSubmit = (data) => userLogin(data);
  return (
    <div className="login-page">
      <h3>লগইন করুন</h3>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="email-wrapper">
          <label for="email">email : </label>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <input {...field} type="email" placeholder="email..." />
            )}
          />
          {errors.email && (
            <p className="error">দয়া করে সঠিক ইমেইল ঠিকানা লিখুন! </p>
          )}
        </div>

        <div className="password-wrapper">
          <label>Password : </label>
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <input {...field} type="password" placeholder="password..." />
            )}
          />
          {errors.password && (
            <p className="error">
              পাসওয়ার্ড অবশ্যই ৮ হতে ৩২ ক্যারেক্টারের মধ্যে হতে হবে!
            </p>
          )}
        </div>

        <div className="form-button-wrapper">
          <button type="submit">লগইন</button>
        </div>
        <div className="form-footer">
          <p onClick={() => navigate("/signup")}>
            একাউন্ট না থাকলে ক্লিক করুন!
          </p>
          <p>ইন্ডাস্ট্রিয়াল লগইন</p>
        </div>
      </form>
    </div>
  );
}

export default Login;
