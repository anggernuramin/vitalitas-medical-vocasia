import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { User, SignOut, Bell } from "phosphor-react";
import { useContextUser } from "../../context/auth-context";
import { useDataAppoinment } from "../../context/data-appoinment";

const Navbar = () => {
  const { user, setUser } = useContextUser();
  const navigate = useNavigate();
  const { dataAppoinment, setDataAppoinment } = useDataAppoinment();

  const logout = () => {
    localStorage.removeItem("accessToken");
    if (localStorage.getItem("accessToken") != null) {
      alert("Failed");
    } else {
      alert("Are you sure Log out ?");
      setUser({});
      setDataAppoinment([]);
      navigate("/");
    }
  };

  return (
    <div className="navbar fixed z-50 w-full">
      <div className="navbar-start hidden lg:flex ml-10">
        <ul className="menu menu-horizontal px-1 font-bold">
          <li>
            <Link to="/" className="hover:bg-white">
              Home
            </Link>
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
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to="/appointment">Book an Appoinment</Link>
            </li>
          </ul>
        </div>
        <Link
          to={"/"}
          className="btn btn-ghost min-[320px]:text-md md:text-xl text-color-primary90 font-bold hover:bg-white"
        >
          Vitalitas Medical
        </Link>
      </div>
      {user && Object.keys(user).length > 0 ? (
        <div className="navbar-end min-[320px]:mr-3 md:mr-10 flex-row min-[320px]:gap-3 md:gap-5 flex ">
          <button className="bt text-color-primary90 relative">
            <Link to={"/riwayat-appointment"}>
              <Bell
                className="min-[320px]:text-xl md:text-3xl"
                color="#B97375"
                weight="bold"
              />
            </Link>

            {dataAppoinment.length > 0 && (
              <span className="absolute -top-1 right-0 font-bold text-sm bg-color-primary10 text-color-primary90 py-0 px-1 m-0 rounded-full ">
                {dataAppoinment.length}
              </span>
            )}
          </button>

          <Link to={"/profile"}>
            <User
              className="min-[320px]:text-xl md:text-3xl"
              color="#B97375"
              weight="bold"
            />
          </Link>

          <button onClick={logout} className="">
            <span>
              <SignOut
                className="min-[320px]:text-xl md:text-3xl"
                color="#B97375"
                weight="bold"
              />
            </span>
          </button>
        </div>
      ) : (
        <div className="navbar-end grow mr-4 lg:mr-10 flex-row gap-2 flex ">
          <Link
            to={"/login"}
            className="btn hover:bg-white bg-white border-none text-color-primary90"
          >
            Login
          </Link>
          <Link
            to={"/register"}
            className="btn hover:bg-color-primary90 bg-color-primary90 text-color-coolGray10 rounded-none"
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};
export default Navbar;
