import { PictureInPicture, FirstAid, Timer } from "phosphor-react";
import { useEffect } from "react";
import { aosConfig, initAos } from "../../utils/aosUtils";
const Services = () => {
  useEffect(() => {
    initAos();
  }, []);
  return (
    <div
      className="relative mb-10 h-[80vh]"
      style={{
        backgroundImage: "url('/banner-appointment.jpeg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10vh",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div className="mx-auto mt-24 min-[320px]:w-[90%] container">
        <section className="flex justify-center items-center flex-col gap-5">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 min-[320px]:gap-3 sm:gap-10">
            <div
              {...aosConfig("fade-right")}
              className="justify-center items-center flex-col min-[320px]:w-[180px] sm:w-64 sm:py-5 sm:px-5 min-[320px]:py-1 min-[320px]:px-1 rounded-sm border-slate-500"
            >
              <h2 className="min-[320px]:text-2xl sm:text-4xl font-bold mb-5">
                Services
              </h2>
              <p className="text-base mb-5">
                Kami melayani dengan sepenuh hati untuk kepuasan pasien.
              </p>
            </div>
            <div
              {...aosConfig("fade-right")}
              className="border-2 flex justify-center items-center flex-col min-[320px]:w-[150px] sm:w-64 sm:py-5 sm:px-5 min-[320px]:py-1 min-[320px]:px-1 rounded-sm border-color-primary90"
            >
              <span className="mb-5">
                <PictureInPicture size={60} color="#B97375" weight="bold" />
              </span>
              <h3 className="font-bold min-[320px]:text:md sm:text-xl mb-2">
                Konsultasi
              </h3>
              <p className="text-center">
                Konsultasikan keluhan gigi anda kepada kami.
              </p>
            </div>
            <div
              {...aosConfig("fade-left")}
              className="border-2 flex justify-center items-center flex-col min-[320px]:w-[150px] sm:w-64 sm:py-5 sm:px-5 min-[320px]:py-1 min-[320px]:px-1 rounded-sm border-color-primary90"
            >
              <span className="mb-5">
                <FirstAid size={60} color="#B97375" weight="bold" />
              </span>
              <h3 className="font-bold min-[320px]:text:md sm:text-xl mb-2">
                Perawatan
              </h3>
              <p className="text-center">
                Kami melayani berbagai perawatan gigi untuk menjadikan gigi
                tetap sehat.
              </p>
            </div>
            <div
              {...aosConfig("fade-left")}
              className="border-2 flex justify-center items-center flex-col min-[320px]:w-[150px] sm:w-64 sm:py-5 sm:px-5 min-[320px]:py-1 min-[320px]:px-1 rounded-sm border-color-primary90"
            >
              <span className="mb-5">
                <Timer size={60} color="#B97375" weight="bold" />
              </span>
              <h3 className="font-bold min-[320px]:text:md sm:text-xl mb-2">
                Estetika
              </h3>
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
