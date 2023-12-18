/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer-page/Footer";

const DoctorProfile = ({ onSelectDoctor }) => {
  const [selectedDoctor, setSelectedDoctor] = useState("");

  const handleDoctorChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedDoctor(selectedValue);
    onSelectDoctor(selectedValue);
  };

  return (
    <div
      className="mt-2"
      style={{ backgroundColor: "white", padding: "1px", borderRadius: "5px" }}
    >
      <label
        htmlFor="doctor"
        className="block text-base mb-2 text-color-primary90"
      >
        Pilih Dokter :
      </label>
      <select
        id="doctor"
        name="doctor"
        value={selectedDoctor}
        onChange={handleDoctorChange}
        className="select select-success w-full max-w-xs"
        style={{ backgroundColor: "white" }}
      >
        <option disabled value="" selected>
          Pilih dokter
        </option>
        <option value="drg. siti Kumala, SpKGA">drg. siti Kumala, SpKGA</option>
        <option value="drg. Randi Ardian, SpKG">drg.Randi Ardian, SpKG</option>
        <option value="drg. Angga Ramdan, SpOrt">
          drg. Angga Ramdan, SpOrt
        </option>
        <option value="drg. Ayunda Pratiwi, SpPerio">
          drg. Ayunda Pratiwi, SpPerio
        </option>
        <option value="drg. Juanda, SpPros">drg. Juanda, SpPros</option>
        <option value="drg. Yuda Argatama, SpKG">
          drg. Yuda Argatama, SpKG
        </option>
      </select>
    </div>
  );
};

const DoctorInfo = ({ selectedDoctor, onCloseInfo }) => {
  const doctorInfoData = {
    "drg. siti Kumala, SpKGA": {
      image: "url('./dok.jpg')",
      alamat: "Jl. Coklat No. 123",
      spesialisasi: "dokter gigi anak",
      Pengalaman: "6 tahun menjadi spesialis dokter gigi anak ",
    },
    "drg. Randi Ardian, SpKG": {
      image: "url('../../public/dokter2.jpg')",
      alamat: "Jl. Mentari No. 456",
      spesialisasi: "konservasi gigi",
      Pengalaman:
        "4 tahun berkerja menangani perawatan saraf gigi,pemasangan mahkota gigi & pemutihan gigi",
    },
    "drg. Angga Ramdan, SpOrt": {
      image: "url('../../public/dokter3.jpg')",
      alamat: "Jl. Budi Luhur No. 789",
      spesialisasi: "dokter Spesialis Ortodonti",
      Pengalaman:
        "5 tahun dalam  menangani perwatan gigi kawat,aligner atau penggunaan behel lepas pasang",
    },
    "drg. Ayunda Pratiwi, SpPerio": {
      image: "url('../../public/dokter4.jpg')",
      alamat: "Jl. Gunung Sinabung No. 1011",
      spesialisasi: "dokter spesialis Periodonsia",
      Pengalaman:
        "6 tahun dalam mengatasi gusi & perawan scaling dan root planing,cangkok gusi,pemasangan implan gigi",
    },
    "drg. Juanda, SpPros": {
      image: "url('../../public/dokter5.jpg')",
      alamat: "Jl. Manggis No. 1213",
      spesialisasi: "dokter spesialis  prostodonsia",
      Pengalaman:
        "Bekerja 5 tahun  mengatasi Penggantian gigi yang hilang atau membuat gigi tiruan dan pemasangan veneer.",
    },
    "drg. Yuda Argatama, SpKG": {
      image: "url('../../public/dokter6.jpg')",
      alamat: "Jl. BUdi Luhur No. 115",
      spesialisasi: "konservasi gigi",
      Pengalaman:
        "Bekerja 6 thn dalam perawatan saraf gigi,pemasangan mahkota & pemutihan gigi",
    },
  };
  const doctorInfoStyles = {
    backgroundColor: "#B97375",
    color: "white",
    padding: "15px",
    borderRadius: "15%",
    position: "absolute",
    top: "60%",
    left: "87%",
    width: "25%",
    transform: "translate(-50%, -50%)",
    zIndex: 999,
    "@media (max-width: 768px)": {
      width: "80%",
      left: "50%",
      transform: "translate(-50%, 0%)",
    },
  };
  const doctorData = doctorInfoData[selectedDoctor];

  return (
    <div className="mt-4 doctor-info" style={doctorInfoStyles}>
      <button
        className="absolute top-0 right-0 m-2 text-white cursor-pointer"
        onClick={onCloseInfo}
      >
        tutup
      </button>
      <div className="w-full">
        <div
          className="bg-cover bg-center h-32 rounded-full"
          style={{
            backgroundImage: `url(${doctorData.image})`,
            border: "1px solid #fff",
          }}
        />
      </div>
      <div className="mt-4 ml-4">
        <h2 className="text-xl font-bold">
          Informasi dokter <br></br> {selectedDoctor}
        </h2>
        <p>Alamat: {doctorData.alamat}</p>
        <p>Spesialisasi: {doctorData.spesialisasi}</p>
        <p>Pengalaman: {doctorData.Pengalaman}</p>
        <p>{doctorData.informasiLain}</p>
      </div>
    </div>
  );
};

const AppointmentPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [appointmentData, setAppointmentData] = useState({
    date: "",
    time: "",
    doctor: "",
  });
  const [appointmentList, setAppointmentList] = useState([]);
  const [isDataIncomplete, setIsDataIncomplete] = useState(false);
  const [selectedTimeIndex, setSelectedTimeIndex] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState("");

  const handleAppointment = () => {
    if (
      !appointmentData.date ||
      !appointmentData.time ||
      !appointmentData.doctor
    ) {
      setIsDataIncomplete(true);
      return;
    }

    const isDuplicate = appointmentList.some(
      (appointment) =>
        appointment.date === appointmentData.date &&
        appointment.time === appointmentData.time &&
        appointment.doctor === appointmentData.doctor
    );

    if (isDuplicate) {
      alert("Appointment sudah ada. Pilih waktu atau dokter lain.");
      return;
    }

    setAppointmentList([...appointmentList, appointmentData]);
    setIsDataIncomplete(false);
    setShowModal(true);
  };

  const handleCancel = () => {
    setAppointmentData({
      date: "",
      time: "",
      doctor: "",
    });
    setIsDataIncomplete(false);
    setSelectedDoctor("");
    setShowModal(false);
  };

  const handleConfirm = () => {
    alert("Data Telah Dikonfirmasi");
    setShowModal(false);
    resetAppointmentPage();
  };

  const resetAppointmentPage = () => {
    setAppointmentData({
      date: "",
      time: "",
      doctor: "",
    });
    setSelectedDoctor("");
    setSelectedTimeIndex(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData({
      ...appointmentData,
      [name]: value,
    });

    if (isDataIncomplete) {
      setIsDataIncomplete(false);
    }
  };

  const handleDoctorSelect = (selectedDoctor) => {
    setAppointmentData({
      ...appointmentData,
      doctor: selectedDoctor,
    });
    setSelectedDoctor(selectedDoctor);
  };

  const times = [
    "09:00",
    "09:50",
    "10:35",
    "10:00",
    "11:45",
    "11:00",
    "12:00",
    "13:00",
    "13:45",
    "14:30",
    "15:35",
    "16:00",
    "16:30",
    "16:45",
    "10:50",
    "11:15",
  ];

  const handleTimeClick = (index) => {
    setAppointmentData({
      ...appointmentData,
      time: times[index],
    });
    setSelectedTimeIndex(index);
  };

  const generateTimeTable = () => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {times.map((time, index) => (
          <button
            key={index}
            type="button"
            className={`${
              selectedTimeIndex === index
                ? "bg-color-primary90 text-white font-bold"
                : "bg-color-primary10 text-color-coolGray90"
            } px-4 py-2 rounded-sm font-normal hover:bg-primary70 focus:outline-none focus:shadow-outline-primary active:bg-primary80`}
            onClick={() => handleTimeClick(index)}
          >
            {time}
          </button>
        ))}
      </div>
    );
  };

  const renderModalContent = () => (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
      <div className="bg-white w-full md:max-w-md mx-auto rounded-sm overflow-hidden">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2 text-[#B97375]">
            Konfirmasi Appointment
          </h2>
          <h3 className="text-[#000000] text-base mb-1">
            Apakah anda yakin melakukan appointment pada
          </h3>
          <div className="text-[#000000]">
            {appointmentList.map((appointment, index) => (
              <p key={index} className="text-base font-semibold">
                Tanggal: {appointment.date}
                <br></br> Waktu: {appointment.time}
                <br></br> Dokter: {appointment.doctor}
              </p>
            ))}
          </div>
          <div className="flex justify-center mt-5">
            <button
              type="button"
              className="bg-color-primary90 w-[45%] text-white px-4 py-2 rounded-sm mr-2 hover:bg-primary70 focus:outline-none focus:shadow-outline-primary active:bg-primary80"
              onClick={() => {
                handleCancel();
                setShowModal(false);
              }}
            >
              Batalkan
            </button>
            <button
              type="button"
              className="bg-color-primary90 w-[45%] text-white px-4 py-2 rounded-sm hover:bg-primary70 focus:outline-none focus:shadow-outline-primary active:bg-primary80"
              onClick={handleConfirm}
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      <div
        className="relative pt-[300px]"
        style={{
          backgroundImage: "url('../../public/banner-appointment.jpeg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "0vh",
          backgroundColor: "#FFFFFF",
        }}
      >
        <div className="flex justify-center items-center  w-full  px-4 md:px-10 py-8 shadow-md absolute ">
          <div
            className={selectedDoctor ? "w-[50%] p-5 " : "w-[80%] p-5 "}
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <h1 className="text-3xl font-bold mb-2 text-color-primary90">
              Appointment
            </h1>
            <h2 className="text-xs sm:text-base font-normal mb-2 text-color-colorGray90">
              Pastikan jadwal yang anda pilih sudah benar{" "}
            </h2>

            <DoctorProfile onSelectDoctor={handleDoctorSelect} />

            <label
              htmlFor="date"
              className="block text-base mb-2 text-color-primary90"
            >
              Tanggal :
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={appointmentData.date}
              onChange={handleChange}
              className="p-1 mb-2 md:mb-1 border-1 border-color-primary90 rounded-md bg-white w-full md:w-[50%]"
            />

            <label
              htmlFor="time"
              className="block text-base mb-2 text-color-primary90"
            >
              Waktu :
            </label>
            {generateTimeTable()}

            {isDataIncomplete && (
              <p className="text-sm text-red-500 mt-2 text-[#B97375]">
                Harap lengkapi semua data sebelum melanjutkan.
              </p>
            )}

            <div className="flex justify-center">
              <button
                type="button"
                className="bg-color-primary90 mt-3 text-white px-6 py-2 rounded-md w-full hover:bg-primary70 focus:outline-none focus:shadow-outline-primary active:bg-primary80"
                onClick={handleAppointment}
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
        <div className="w-[50%]">
          {selectedDoctor && (
            <DoctorInfo
              selectedDoctor={selectedDoctor}
              onCloseInfo={() => setSelectedDoctor("")}
            />
          )}
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#FFFFFF",
          minHeight: "45vh",
        }}
      ></div>

      {showModal && renderModalContent()}
      <Footer />
    </>
  );
};

export default AppointmentPage;
