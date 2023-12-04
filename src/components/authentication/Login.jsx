import { Eye, EyeSlash, X } from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import Layout from "./Layout";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [notifUserLogin, setNotifUserLogin] = useState(false);
  const navigate = useNavigate();
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    validationSchema: yup.object().shape({
      email: yup.string().required().email("Your email is not valid"),
      password: yup.string().required(),
      remember: yup.bool().isTrue("Must be checked."),
    }),
    onSubmit: loginUser,
  });

  async function loginUser(values) {
    const userId = localStorage.getItem("userId");
    console.log("users", userId);
    try {
      const response = await fetch(`http://localhost:3000/users/${userId}`);
      const result = await response.json();

      if (values.email == result.email && values.password == result.password) {
        console.log("true");
        navigate("/");
      } else {
        setNotifUserLogin(true);
      }
    } catch (error) {
      console.log(error.message);
    }
    console.log("values formik", values);
  }

  const closeModal = () => {
    setNotifUserLogin(false);
  };

  const ModalBox = () => {
    return (
      <>
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-slate-900 opacity-50 z-30 "></div>
        <div className="absolute w-[80%] md:w-[60%] container mx-auto z-40 rounded-sm top-[-8%] left-[50%] translate-x-[-50%] translate-y-[50%] bg-slate-100">
          <div className="flex flex-col gap-3 ">
            <div className="flex px-5 pt-5 justify-between items-center">
              <h2 className="text-2xl">Warning</h2>
              <X
                size={24}
                className="cursor-pointer hover:text-color-primary90"
                onClick={closeModal}
              />
            </div>
            <hr />
            <p className="mx-5 p-5 rounded-sm bg-warning">
              Gagal melakukan proses autentikasi. Mohon untuk mengisi email &
              password dengan benar.
            </p>
            <hr />
            <div className="flex justify-end items-end px-5 mb-3">
              <button
                onClick={closeModal}
                className="btn btn-ghost bg-slate-300 text-md"
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <Layout>
      <Header
        title={"Welcome Back"}
        description={"Enter your email and password for the login process"}
      />

      <form onSubmit={formik.handleSubmit} className="mt-3 flex flex-col gap-3">
        <div className="flex flex-col text-color-coolGray90">
          <label htmlFor="email" className="text-sm mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="bg-color-coolGray10 text-color-coolGray90 p-2 outline-none border-b-2 border-color-coolGray30 rounded-sm placeholder:text-color-coolGray40 placeholder:font-normal"
            placeholder="anggern514@gmail.com"
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="text-xs mt-1 sm:mt-0 sm:text-base text-error">
              {formik.errors.email}
            </p>
          ) : null}
        </div>
        <div className="flex flex-col text-color-coolGray90">
          <label htmlFor="password" className="text-sm mb-2">
            Password
          </label>
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="password"
              value={formik.values.password}
              className="w-full bg-color-coolGray10 text-color-coolGray60 p-2 outline-none border-b-2 border-color-coolGray30 rounded-sm placeholder:text-color-coolGray40 placeholder:font-semibold"
              placeholder="*******"
            />
            {!showPassword ? (
              <Eye
                size={24}
                className="absolute right-2 top-2 cursor-pointer"
                onClick={handleShowPassword}
              />
            ) : (
              <EyeSlash
                size={24}
                className="absolute right-2 top-2 cursor-pointer"
                onClick={handleShowPassword}
              />
            )}

            {formik.touched.password && formik.errors.password ? (
              <p className="text-xs mt-1 sm:mt-0 sm:text-base text-error">
                {formik.errors.password}
              </p>
            ) : null}
          </div>
        </div>
        <div className="mt-2 flex justify-between items-center">
          <div>
            <div className="flex gap-1 text-base text-color-coolGray90">
              <input
                type="checkbox"
                className="bg-white border border-color-coolGray90"
                onChange={formik.handleChange}
                name="remember"
                checked={formik.values.remember}
              />
              <p className="text-sm sm:text-base">Remember me</p>
            </div>
            {formik.touched.remember && formik.errors.remember && (
              <p className="text-xs mt-1 sm:mt-0 sm:text-base  text-error">
                {formik.errors.remember}
              </p>
            )}
          </div>
          <Link
            to={"/"}
            className="text-sm sm:text-base text-color-coolGray90 cursor-pointer hover:text-color-primary90  transition-all"
          >
            Forgot Password ?
          </Link>
        </div>

        <button
          type="submit"
          className="mt-5 w-full text-white rounded-sm text-lg bg-color-primary90 text-center p-2 hover:opacity-90 transition-all cursor-pointer"
        >
          Log In
        </button>
      </form>
      {notifUserLogin ? <ModalBox /> : null}
      <Footer
        text={"No account yet?"}
        namePath={"Register"}
        path={"/register"}
      />
    </Layout>
  );
};

export default Login;
