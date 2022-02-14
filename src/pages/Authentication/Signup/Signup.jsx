import React from "react";
import "./signupStyles.css";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
const schema = Yup.object({
  full_name: Yup.string().min(5).max(40).required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(8).max(32).required(),
  confirm_password: Yup.string().oneOf([Yup.ref("password"), null]),
});
function Signup() {
  const onSubmit = (data) => console.log(data);
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({ resolver: yupResolver(schema) });
  return (
    <div className="signup-page">
      <div className="signup-form-wrapper">
        <h3>নিবন্ধন করুন</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="full_name-wrapper">
            <h5>পূর্ণ নাম (ইংরেজিতে) </h5>
            <Controller
              control={control}
              name="full_name"
              render={({ field }) => <input {...field} type="text" required />}
            />
            {errors.full_name && (
              <p>নাম অবশ্যই ৫ থেকে ৪০ অক্ষরের মধ্যে হতে হবে!</p>
            )}
          </div>
          <div className="email-wrapper">
            <h5>ইমেইলঃ</h5>
            <Controller
              control={control}
              name="email"
              render={({ field }) => <input {...field} type="email" required />}
            />
            {errors.email && <p></p>}
          </div>
          <div className="password-wrapper">
            <h5>পাসওয়ার্ড দিন</h5>
            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <input {...field} type="password" required />
              )}
            />
            {errors.password && (
              <p> পাসওয়ার্ড অবশ্যই ৮ হতে ৩২ ক্যারেক্টারের মধ্যে হতে হবে!</p>
            )}
          </div>
          <div className="confrim_password-wrapper">
            <h5>পাসওয়ার্ড কনফার্ম করুন!</h5>
            <Controller
              control={control}
              name="confrim_password"
              render={({ field }) => (
                <input {...field} type="password" required />
              )}
            />
            {errors.confrim_password && (
              <p> পাসওয়ার্ড অবশ্যই উপরের পাসওয়ার্ডের সাথে মিল থাকতে হবে!</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
