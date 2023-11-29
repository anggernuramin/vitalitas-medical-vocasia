import { Eye, EyeSlash } from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import Layout from "./Layout";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
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
      remember: yup.bool().isTrue("harus di checked"),
    }),
    onSubmit: loginUser,
  });

  function loginUser(values) {
    console.log("values formik", values);
    navigate("/");
  }

  return (
    <Layout>
      <Header
        title={"Welcome Back"}
        description={"Masukkan email dan password anda untuk proses login"}
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
        <div className="flex justify-between items-center">
          <div>
            <div className="flex gap-1 text-base text-color-coolGray90">
              <input
                type="checkbox"
                className="bg-white border border-color-coolGray90"
                onChange={formik.handleChange}
                name="remember"
                checked={formik.values.remember}
              />
              <p>Remember me</p>
            </div>
            {formik.touched.remember && formik.errors.remember && (
              <p className="text-error">{formik.errors.remember}</p>
            )}
          </div>
          <Link
            to={"/"}
            className="text-color-coolGray90 cursor-pointer hover:text-color-primary90 text-base transition-all"
          >
            Forgot Password ?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full text-white rounded-sm text-lg bg-color-primary90 text-center p-2 hover:opacity-90 transition-all cursor-pointer"
        >
          Log In
        </button>
      </form>

      <Footer
        text={"No account yet?"}
        namePath={"Sign Up"}
        path={"/register"}
      />
    </Layout>
  );
};

export default Login;
