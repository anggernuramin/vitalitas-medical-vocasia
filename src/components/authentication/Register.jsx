/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Layout from "./Layout";
import Header from "./Header";
import Footer from "./Footer";
import { useFormik } from "formik";
import * as yup from "yup";
import { Eye, EyeSlash } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { register } from "../../utils";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
    validationSchema: yup.object().shape({
      name: yup.string().required("Nama tidak boleh kosong."),
      email: yup
        .string()
        .required("Email tidak boleh kosong.")
        .email("Email Anda tidak valid."),
      password: yup
        .string()
        .required("Password tidak boleh kosong.")
        .min(8, "Password harus memiliki panjang 8 karakter.")
        .matches(
          /[a-z]/g,
          "Password harus mengandung setidaknya 1 huruf kecil."
        )
        .matches(
          /[A-Z]/g,
          "Password harus mengandung setidaknya 1 huruf besar."
        )
        .matches(/[0-9]/g, "Password harus mengandung setidaknya 1 angka.")
        .matches(/^\S*$/, "Tidak boleh ada Spasi dalam password."),
    }),
    onSubmit: registerUser,
  });

  async function registerUser(values) {
    setLoading(true);
    const response = await register({
      name: values.name,
      email: values.email,
      password: values.password,
    });
    if (response.error) {
      setLoading(false);
    } else {
      navigate("/login");
    }
  }

  return (
    <Layout>
      <Header
        title={"Daftar Gratis"}
        description={"Akses gratis selama 14 hari ke sumber daya tanpa batas."}
      />
      <form onSubmit={formik.handleSubmit} className="mt-3 flex flex-col gap-3">
        <div className="flex flex-col text-color-coolGray90">
          <label htmlFor="firstName" className="text-sm mb-2">
            Nama
          </label>
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="bg-color-coolGray10 text-color-coolGray90 p-2 outline-none border-b-2 border-color-coolGray30 rounded-sm placeholder:text-color-coolGray40 placeholder:font-normal w-full"
            placeholder="Your name"
          />
          {formik.touched.name && formik.errors.name ? (
            <p className="text-xs mt-1 sm:mt-0 sm:text-base text-error">
              {formik.errors.name}
            </p>
          ) : null}
        </div>
        <div className="flex flex-col text-color-coolGray90">
          <label htmlFor="email" className="text-sm mb-2">
            Alamat Email
          </label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="bg-color-coolGray10 text-color-coolGray90 p-2 outline-none border-b-2 border-color-coolGray30 rounded-sm placeholder:text-color-coolGray40 placeholder:font-normal"
            placeholder="example@gmail.com"
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
              autoComplete="true"
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
              Harus berupa kombinasi minimal 8 huruf, angka, dan simbol.
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="mt-5 w-full text-white rounded-sm text-lg bg-color-primary90 text-center p-2 hover:opacity-90 transition-all cursor-pointer"
        >
          {loading ? "Loading..." : "Daftar"}
        </button>
      </form>
      <Footer namePath={"Sudah memiliki akun?"} path={"/login"} />
    </Layout>
  );
};

export default Register;
