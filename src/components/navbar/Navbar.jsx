import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, SignOut, Bell } from "phosphor-react";
import { useContextUser } from "../../context/auth-context";

const Navbar = () => {
  const { user } = useContextUser();
  const navigate = useNavigate();
  let [yourLogin, setYourLogin] = useState(1);
  let total = 0;
  const countLogin = () => {
    total = yourLogin + 1;
    if (total > 10) {
      total = 0;
      yourLogin = 0;
      setYourLogin(yourLogin + 1);
    } else {
      setYourLogin(yourLogin + 1);
    }
  };
  const logout = () => {
    localStorage.removeItem("accessToken");
    if (localStorage.getItem("accessToken") != null) {
      alert("Failed");
    } else {
      alert("Made it out");
      navigate("/login");
      window.location.reload();
    }
  };

  return (
    <div className="navbar bg-base-100 fixed z-50">
      <div className="navbar-start hidden lg:flex ml-10">
        <ul className="menu menu-horizontal px-1 font-bold">
          <li>
            <a href="#" className="hover:bg-white">
              Home
            </a>
          </li>
          <li>
            <Link to="/appointment" className="hover:bg-white">
              Book an Appoinment
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Book an Appoinment</a>
            </li>
          </ul>
        </div>
        <Link
          to={"/"}
          className="btn btn-ghost text-xl text-color-primary90 font-bold hover:bg-white"
        >
          VinZeta
        </Link>
      </div>
      {user ? (
        <div className="navbar-end mr-10 flex-row gap-8 hidden lg:flex ">
          <button
            onClick={countLogin}
            className="bt text-color-primary90 relative"
          >
            <Link to={"/riwayat-appointment"}>
              <Bell size={30} color="#B97375" weight="bold" />
            </Link>

            <span className="absolute -top-1 right-0 font-bold text-sm bg-color-primary10 text-color-primary90 py-0 px-1 m-0 rounded-full ">
              {yourLogin}
            </span>
          </button>
          <a
            href="/profile"
            className="btn bg-color-primary90 rounded-full px-2 py-1"
          >
            <span>
              <User size={30} color="#fff" weight="bold" />
            </span>
          </a>
          <button onClick={logout} className="btn rounded-full px-2 py-1">
            <span>
              <SignOut size={30} color="#B97375" weight="bold" />
            </span>
          </button>
        </div>
      ) : (
        <div className="navbar-end mr-10 flex-row gap-2 hidden lg:flex ">
          <a
            href="/login"
            className="btn hover:bg-white bg-white border-none text-color-primary90"
          >
            Login
          </a>
          <a
            href="/register"
            className="btn hover:bg-color-primary90 bg-color-primary90 text-color-coolGray10 rounded-none"
          >
            Sign Up
          </a>
        </div>
      )}
    </div>
  );
};
export default Navbar;
