import { User, Files, Pizza, Users } from "phosphor-react";
const Servis = () => {
  return (
    <div className="container mx-auto mt-24 min-w-full">
      <section className="flex justify-center items-center flex-col gap-5">
        <h2 className="text-3xl font-bold mb-5">Kami Telah Melayani</h2>
        <p className="text-base mb-5 text-center">
          Kami telah dipercaya untuk menangani kondisi gigi pasien dari kasus
          yang muda hingga sulit
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="border flex justify-center items-center flex-col w-64 py-5 px-5 rounded-sm border-slate-500">
            <span className="mb-5">
              <User size={60} color="#B97375" weight="bold" />
            </span>
            <h3 className="font-bold text-xl">650+</h3>
            <p>Pasien</p>
          </div>
          <div className="border flex justify-center items-center flex-col w-64 py-5 px-5 rounded-sm border-slate-500">
            <span className="mb-5">
              <Files size={60} color="#B97375" weight="bold" />
            </span>
            <h3 className="font-bold text-xl">1200+</h3>
            <p>Appoinment</p>
          </div>
          <div className="border flex justify-center items-center flex-col w-60 py-5 px-5 rounded-sm border-slate-500">
            <span className="mb-5">
              <Pizza size={60} color="#B97375" weight="bold" />
            </span>
            <h3 className="font-bold text-xl">560</h3>
            <p>Pasien Happy</p>
          </div>

          <div className="border flex justify-center items-center flex-col w-64 py-5 px-5 rounded-sm border-slate-500">
            <span className="mb-5">
              <Users size={60} color="#B97375" weight="bold" />
            </span>
            <h3 className="font-bold text-xl">11K+</h3>
            <p>Subcribes</p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Servis;
