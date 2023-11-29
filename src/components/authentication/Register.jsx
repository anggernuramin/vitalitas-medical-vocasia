/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Layout from "./Layout";
import Header from "./Header";
import Footer from "./Footer";
import { useFormik } from "formik";
import * as yup from "yup";
import { Eye, EyeSlash } from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";

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
      email: yup
        .string()
        .required()
        .email("Email yang anda masukkan tidak valid"),
      password: yup
        .string()
        .required()
        .min(8, "Sebaiknya sandi 8 character")
        .matches(/[a-z]/g, "Sebaiknya sandi ada 1 huruf kecil")
        .matches(/[A-Z]/g, "Sebaiknya sandi ada 1 huruf Besar")
        .matches(/[0-9]/g, "Sebaiknya ada 1 number")
        .matches(/^\S*$/, "tidak boleh ada spasi"),
    }),
    onSubmit: registerUser,
  });

  function registerUser(values) {
    console.log("values formik", values);
    navigate("/");
  }

  return (
    <Layout>
      <Header
        title={"Sign Up Free"}
        description={"14 day free access to unlimited resources"}
      />
      <form onSubmit={formik.handleSubmit} className="mt-3 flex flex-col">
        <div className="flex justify-between items-center text-color-coolGray90 w-full ">
          <div className="w-[45%]">
            <label htmlFor="firstName" className="text-sm mb-2">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              className="bg-color-coolGray10 text-color-coolGray90 p-2 outline-none border-b-2 border-color-coolGray30 rounded-sm placeholder:text-color-coolGray40 placeholder:font-semibold w-full"
              placeholder="first name"
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <p className="text-error">{formik.errors.firstName}</p>
            ) : null}
          </div>
          <div className="w-[45%]">
            <label htmlFor="lastName" className="text-sm mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              className="bg-color-coolGray10 text-color-coolGray90 p-2 outline-none border-b-2 border-color-coolGray30 rounded-sm placeholder:text-color-coolGray40 placeholder:font-semibold w-full"
              placeholder="last name"
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <p className="text-error">{formik.errors.lastName}</p>
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
            className="bg-color-coolGray10 text-color-coolGray90 p-2 outline-none border-b-2 border-color-coolGray30 rounded-sm placeholder:text-color-coolGray40 placeholder:font-semibold"
            placeholder="anggern514@gmail.com"
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="text-error">{formik.errors.email}</p>
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
              <p className="text-error">{formik.errors.password}</p>
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
