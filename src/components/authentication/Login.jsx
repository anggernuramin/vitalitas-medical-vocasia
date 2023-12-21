import { Eye, EyeSlash } from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import Layout from "./Layout";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { login } from "../../utils";
import ModalBox from "./ModalBox";
import { useContextUser } from "../../context/auth-context";

const Login = () => {
  const { user, onLogginSuccess } = useContextUser();
  const [showPassword, setShowPassword] = useState(false);
  const [responseMessageError, setResponseMessageError] = useState("");
  const [notifUserLogin, setNotifUserLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (user) {
      console.log("user", user);
      // navigate("/");
    }
  }, []);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required("Email tidak boleh kosong.")
        .email("Email Anda tidak valid."),
      password: yup.string().required("Password tidak boleh kosong."),
      remember: yup.bool().isTrue("Harus dicentang."),
    }),
    onSubmit: loginUser,
  });

  async function loginUser(values) {
    setLoading(true);
    const response = await login({
      email: values.email,
      password: values.password,
    });
    if (response.error == false) {
      onLogginSuccess(response.data);
      navigate("/");
    } else {
      setResponseMessageError(response.message);
      setLoading(false);
      setNotifUserLogin(true);
    }
  }

  const closeModal = () => {
    setNotifUserLogin(!notifUserLogin);
  };

  return (
    <Layout>
      <Header
        title={"Welcome Back"}
        description={"Masukkan email dan password untuk proses login."}
      />

      <form onSubmit={formik.handleSubmit} className="mt-3 flex flex-col gap-3">
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
                className=" dark:bg-white bg-white border border-color-coolGray90"
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
            Lupa Password ?
          </Link>
        </div>

        <button
          type="submit"
          className="mt-5 w-full text-white rounded-sm text-lg bg-color-primary90 text-center p-2 hover:opacity-90 transition-all cursor-pointer"
        >
          {loading ? "Loading..." : "Log In"}
        </button>
      </form>
      {notifUserLogin ? (
        <ModalBox
          responseMessageError={responseMessageError}
          closeModal={closeModal}
        />
      ) : null}
      <Footer
        text={"Belum punya akun?"}
        namePath={"Daftar"}
        path={"/register"}
      />
    </Layout>
  );
};

export default Login;
