import google from "../icons/google_main.jpg";
import facebook from "../icons/facebook_main.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import useMethods from "../utils/useMethods";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Signup = () => {
  const { on_signup } = useMethods();
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ resolver: yupResolver(scehma) });
  return (
    <div className="mx-auto w-11/12 max-w-sm p-6 bg-white rounded-md shadow-md my-6">
      <h3 className="bg-inherit text-center font-serif text-2xl">Signup</h3>
      <form
        onSubmit={handleSubmit(on_signup)}
        className="bg-inherit my-4 space-y-4"
      >
        <div className="bg-inherit flex flex-col gap-2 ">
          <label className="bg-inherit font-serif">
            User Name <span className="text-red-500 text-xl bg-inherit">*</span>
          </label>
          <input
            {...register("username")}
            type="text"
            placeholder="valid username ..."
            className="p-2 rounded border  border-slate-300 outline-slate-500"
          />
          {errors?.username && (
            <p className="bg-inherit text-rose-500 font-bold font-mono">
              {errors.username.message}
            </p>
          )}
        </div>

        <div className="bg-inherit flex flex-col gap-2 ">
          <label className="bg-inherit font-serif">
            Email <span className="text-red-500 text-xl bg-inherit">*</span>
          </label>
          <input
            {...register("email")}
            type="text"
            placeholder="valid email ..."
            className="p-2 rounded border  border-slate-300 outline-slate-500"
          />
          {errors?.email && (
            <p className="bg-inherit text-rose-500 font-bold font-mono">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="bg-inherit flex flex-col gap-2 ">
          <label className="bg-inherit font-serif">
            Password <span className="text-red-500 text-xl bg-inherit">*</span>
          </label>
          <input
            {...register("password")}
            type="password"
            placeholder="strong password ..."
            className="p-2 rounded border  border-slate-300 outline-slate-500"
          />
          {errors?.password && (
            <p className="bg-inherit text-rose-500 font-bold font-mono">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="bg-inherit flex flex-col gap-2 ">
          <label className="bg-inherit font-serif">
            Confirm Password
            <span className="text-red-500 text-xl bg-inherit">*</span>
          </label>
          <input
            {...register("confirm_password")}
            type="password"
            placeholder="again same password ..."
            className="p-2 rounded border  border-slate-300 outline-slate-500"
          />
          {errors?.confirm_password && (
            <p className="bg-inherit text-rose-500 font-bold font-mono">
              {errors.confirm_password.message}
            </p>
          )}
        </div>
        <div className="bg-inherit space-y-4">
          <button
            type="submit"
            className=" w-full px-4 py-2 bg-green-400 hover:bg-green-700 text-white font-bold font-serif rounded-md "
          >
            Signup
          </button>
          <div className="bg-inherit">
            <p className="text-center font-serif bg-inherit">Signup with</p>
            <div className="bg-inherit flex justify-evenly items-center">
              <motion.img
                whileInView={{ scale: [0.7, 1], opacity: [0, 1] }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                whileHover={{ scale: 1.2 }}
                src={google}
                alt="google"
                className=" w-12 rounded-full shadow-md hover:shadow-lg cursor-pointer"
              />

              <span className="bg-inherit text-gray-600">or</span>
              <motion.img
                whileInView={{ scale: [0.7, 1], opacity: [0, 1] }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                whileHover={{ scale: 1.2 }}
                src={facebook}
                alt="facebook"
                className=" w-12 rounded-full shadow-md hover:shadow-lg cursor-pointer"
              />
            </div>

            <div className="w-full text-center bg-inherit my-4">
              <Link to="/login" className="bg-inherit font-light">
                ALready have an account?
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;

const scehma = Yup.object({
  username: Yup.string().min(4).max(50).required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(8).max(32).required(),
  confirm_password: Yup.string().oneOf([Yup.ref("password")]),
});
