import {ChatTeardropText } from "phosphor-react"
const Hero = () => {
  return (
    <div className="hero min-h-screen hero-home">
      <div className="hero-overlay brightness-105 backdrop-brightness-110"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="w-auto">
          <h1 className="mb-5 text-5xl text-color-overlay font-bold ">
            Klinik Gigi VinZeta: Mempersembahkan <br></br> Senyuman Sehat yang indah
          </h1>
          <p className="mb-5 text-color-overlay">
            Selamat datang di Klinik Gigi VinZeta, tempat di mana senyuman Anda
            menjadi prioritas utama kami. Kami dengan bangga menyediakan
            perawatan gigi berkualitas tinggi dan komprehensif dengan pelayanan
            yang ramah, untuk memastikan Anda dan keluarga merasa nyaman setiap
            kali berkunjung.
          </p>
          <button className="btn btn-ghost rounded-none bg-color-primary90 text-color-coolGray10 hover:bg-color-primary90">
            Book Appoinment
          </button>
        </div>
      </div>
      <span className="absolute -bottom-40 right-5"><ChatTeardropText size={150} color="#B97375" /></span>
    </div>
  );
};
export default Hero;
