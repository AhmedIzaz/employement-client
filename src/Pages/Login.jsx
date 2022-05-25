import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useMethods from "../utils/useMethods";
import { motion } from "framer-motion";
import google from "../icons/google_main.jpg";
import facebook from "../icons/facebook_main.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { user_login } from "../store/thunks/user_thunk";

const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ resolver: yupResolver(schema) });
  // 
  const on_login = (data) => dispatch(user_login(data, navigate));
  // 
 
  return (
    <div className=" w-11/12 max-w-sm mx-auto mt-4 shadow-lg py-4 bg-stone-100 my-6 rounded-md">
      <h3 className=" text-center font-serif text-2xl bg-inherit">Login</h3>
      <form
        className=" w-10/12 max-w-xs  py-4 mx-auto space-y-4 bg-inherit"
        onSubmit={handleSubmit(on_login)}
      >
        <div className="flex flex-col space-y-1 bg-inherit">
          <label for="email" className="font-serif bg-inherit">
            Email <span className="text-red-500 text-xl bg-inherit">*</span>
          </label>
          <input
            {...register("email")}
            className="p-2 rounded border  border-slate-300 outline-slate-500"
            type="text"
            name="email"
            placeholder="valid email..."
          />
          {errors?.email && (
            <p className="bg-inherit text-rose-500 font-bold font-mono">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="flex flex-col space-y-1 bg-inherit">
          <label for="password" className="font-serif bg-inherit">
            Password <span className="text-red-500 text-xl bg-inherit">*</span>
          </label>
          <input
            {...register("password")}
            className="p-2 rounded border  border-slate-300 outline-slate-500 "
            name="password"
            type="password"
            placeholder="8 to 32 character..."
          />
          {errors?.password && (
            <p className="bg-inherit text-rose-500 font-bold font-mono">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white font-bold w-full my-4 mx-auto py-2 rounded-md hover:bg-indigo-900"
        >
          Login
        </button>

        <div className="bg-inherit">
          <p className="text-center font-serif bg-inherit">Login with</p>
          <div className="flex justify-evenly items-center bg-inherit">
            <motion.img
              whileInView={{ scale: [0.7, 1], opacity: [0, 1] }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              whileHover={{ scale: 1.2 }}
              src={google}
              alt="google"
              className=" w-12 rounded-full shadow-md hover:shadow-lg cursor-pointer"
            />
            <p className=" text-gray-500 bg-inherit">or</p>
            <motion.img
              whileInView={{ scale: [0.7, 1], opacity: [0, 1] }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              whileHover={{ scale: 1.2 }}
              src={facebook}
              alt="facebook"
              className=" w-10 h-10 rounded-full shadow-md hover:shadow-lg cursor-pointer"
            />
          </div>
        </div>

        <div className="w-fit mx-auto bg-inherit">
          <Link to="/signup" className="text-gray-500 bg-inherit">
            Don't have an account?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;

const schema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).max(32).required(),
});
