import { PictureInPicture, FirstAid, Timer } from "phosphor-react";
import { useEffect } from "react";
import { aosConfig, initAos } from "../../utils/aosUtils";
const Services = () => {
  useEffect(() => {
    initAos();
  }, []);
  return (
    <div
      className="relative mb-10"
      style={{
        backgroundImage: "url('/banner-appointment.jpeg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "20vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10vh",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div className="mx-auto mt-24 min-w-full">
        <section className="flex justify-center items-center flex-col gap-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div
              {...aosConfig("fade-right")}
              className="justify-center items-center flex-col w-64 py-5 px-5 rounded-sm border-slate-500"
            >
              <h2 className="text-4xl font-bold mb-5">Services</h2>
              <p className="text-base mb-5">
                Kami melayani dengan sepenuh hati untuk kepuasan pasien.
              </p>
            </div>
            <div
              {...aosConfig("fade-right")}
              className="border-2 flex justify-center items-center flex-col w-64 py-5 px-5 rounded-sm border-color-primary90"
            >
              <span className="mb-5">
                <PictureInPicture size={60} color="#B97375" weight="bold" />
              </span>
              <h3 className="font-bold text-xl mb-2">Konsultasi</h3>
              <p className="text-center">
                Konsultasikan keluhan gigi anda kepada kami.
              </p>
            </div>
            <div
              {...aosConfig("fade-left")}
              className="border-2 flex justify-center items-center flex-col w-64 py-5 px-5 rounded-sm border-color-primary90"
            >
              <span className="mb-5">
                <FirstAid size={60} color="#B97375" weight="bold" />
              </span>
              <h3 className="font-bold text-xl mb-2">Perawatan</h3>
              <p className="text-center">
                Kami melayani berbagai perawatan gigi untuk menjadikan gigi
                tetap sehat.
              </p>
            </div>
            <div
              {...aosConfig("fade-left")}
              className="border-2 flex justify-center items-center flex-col w-64 py-5 px-5 rounded-sm border-color-primary90"
            >
              <span className="mb-5">
                <Timer size={60} color="#B97375" weight="bold" />
              </span>
              <h3 className="font-bold text-xl mb-2">Estetika</h3>
              <p className="text-center">
                {" "}
                Klinik kami menyediakan berbagai layanan untuk anda.
              </p>
            </div>
          </div>
        </section>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};
export default Services;
