import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero min-h-screen hero-home overflow-hidden">
      <div className="hero-overlay brightness-75 backdrop-brightness-110"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="w-[90%]">
          <h1 className="mb-5 min-[320px]:text-3xl md:text-5xl text-color-overlay font-bold ">
            Klinik Gigi Vitalitas Medical Mempersembahkan <br></br> Senyuman
            Sehat yang indah
          </h1>
          <p className="mb-5 text-color-overlay min-[320px]:text-md md:text-xl font-medium ">
            Selamat datang di Klinik Gigi Vitalitas Medical, tempat di mana
            senyuman Anda menjadi prioritas utama kami. Kami dengan bangga
            menyediakan perawatan gigi berkualitas tinggi dan komprehensif
            dengan pelayanan yang ramah, untuk memastikan Anda dan keluarga
            merasa nyaman setiap kali berkunjung.
          </p>
          <button className="btn btn-ghost rounded-none bg-color-primary90 text-color-coolGray10 hover:bg-color-primary90">
            <Link to="/appointment">Book Appoinment</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
