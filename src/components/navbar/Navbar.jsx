const Navbar = () => {
    return (
        <div className="navbar bg-base-100 ">
          <div className="navbar-start hidden lg:flex ml-10">
            <ul className="menu menu-horizontal px-1 font-bold">
              <li ><a href="#" className="hover:bg-white">Home</a></li>
              <li ><a href="#" className="hover:bg-white">Book an Appoinment</a></li>
            </ul>
          </div>
          <div className="navbar-center">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a href="#">Home</a></li>
                <li><a href="#">Book an Appoinment</a></li>
              </ul>
            </div>
            <a href="#" className="btn btn-ghost text-xl text-color-primary90 font-bold hover:bg-white">VinZeta</a>
          </div>
          
          <div className="navbar-end mr-10 flex-row gap-2 hidden lg:flex ">
            <a href="#" className="btn hover:bg-white bg-white border-none text-color-primary90">Login</a>
            <a href="#" className="btn hover:bg-color-primary90 bg-color-primary90 text-color-coolGray10 rounded-none">Sign Up</a>
          </div>
        </div>
    )
}
export default Navbar
