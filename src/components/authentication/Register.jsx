/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Layout from "./Layout";
import Header from "./Header";
import Footer from "./Footer";
import { useFormik } from "formik";
import * as yup from "yup";
import { Eye, EyeSlash } from "phosphor-react";
import { Link, json, useNavigate } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
    validationSchema: yup.object().shape({
      firstName: yup.string().required("first name not empty").min(3).max(10),
      lastName: yup.string().required("last name not empty"),
      email: yup.string().required().email("Your email is not valid"),
      password: yup
        .string()
        .required()
        .min(8, "Password must be 8 characters long.")
        .matches(/[a-z]/g, "Password must at least 1 lowercase letter.")
        .matches(/[A-Z]/g, "Password must at least 1 uppercase letter.")
        .matches(/[0-9]/g, "Password must at least 1 number.")
        .matches(/^\S*$/, "Spaces are not allowed in the password."),
    }),
    onSubmit: registerUser,
  });

  const generateId = () => {
    return +new Date();
  };

  async function registerUser(values) {
    const user = {
      id: generateId(),
      ...values,
    };
    try {
      const response = await fetch(
        "https://7r2zzs8p-3000.asse.devtunnels.ms/users",
        {
          method: "post",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      localStorage.setItem("userId", result.id);
      navigate("/");
      console.log("response", result);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <Layout>
      <Header
        title={"Sign Up Free"}
        description={"14 day free access to unlimited resources"}
      />
      <form onSubmit={formik.handleSubmit} className="mt-3 flex flex-col gap-3">
        <div className="flex justify-between items-center text-color-coolGray90 w-full ">
          <div className="w-[48%] sm:w-[45%]">
            <label htmlFor="firstName" className="text-sm mb-2">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              className="bg-color-coolGray10 text-color-coolGray90 p-2 outline-none border-b-2 border-color-coolGray30 rounded-sm placeholder:text-color-coolGray40 placeholder:font-normal w-full"
              placeholder="first name"
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <p className="text-xs mt-1 sm:mt-0 sm:text-base text-error">
                {formik.errors.firstName}
              </p>
            ) : null}
          </div>
          <div className="w-[48%] sm:w-[45%]">
            <label htmlFor="lastName" className="text-sm mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              className="bg-color-coolGray10 text-color-coolGray90 p-2 outline-none border-b-2 border-color-coolGray30 rounded-sm placeholder:text-color-coolGray40 placeholder:font-normal w-full"
              placeholder="last name"
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <p className="text-xs mt-1 sm:mt-0 sm:text-base text-error">
                {formik.errors.lastName}
              </p>
            ) : null}
          </div>
        </div>
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
              className="w-full bg-color-coolGray10 text-color-coolGray60 p-2 outline-none border-b-2 border-color-coolGray30 rounded-sm placeholder:text-color-coolGray40 placeholder:font-normal"
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

            <p className="text-color-coolGray60 text-sm mt-1">
              It must be a combination of minimum 8 letters, numbers, and
              symbols.
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="mt-5 w-full text-white rounded-sm text-lg bg-color-primary90 text-center p-2 hover:opacity-90 transition-all cursor-pointer"
        >
          Register
        </button>
      </form>
      <Footer namePath={"Already have an account?"} path={"/login"} />
    </Layout>
  );
};

export default Register;
