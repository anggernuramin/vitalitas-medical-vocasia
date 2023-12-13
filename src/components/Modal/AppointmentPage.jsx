import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer-page/Footer";
import privateRoute from "../../hoc/privateRoute";

const AppointmentPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [appointmentData, setAppointmentData] = useState({
    date: "",
    time: "",
  });
  const [appointmentList, setAppointmentList] = useState([]);
  const [isDataIncomplete, setIsDataIncomplete] = useState(false);

  const handleAppointment = () => {
    if (!appointmentData.date || !appointmentData.time) {
      setIsDataIncomplete(true);
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
    });

    setIsDataIncomplete(false);

    setAppointmentList((prevAppointments) => prevAppointments.slice(0, -1));

    setShowModal(false);
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

  const generateTimeTable = () => {
    const times = [
      "09:00",
      "09:00",
      "10:00",
      "10:00",
      "11:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "15:00",
      "16:00",
      "14:00",
      "15:00",
      "15:00",
      "16:00",
    ];

    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {times.map((time, index) => (
          <button
            key={index}
            type="button"
            className="bg-color-primary10 text-color-coolGray90 px-4 py-2 rounded-sm font-normal hover:bg-primary70 focus:outline-none focus:shadow-outline-primary active:bg-primary80"
            onClick={() => handleTimeClick(time)}
          >
            {time}
          </button>
        ))}
      </div>
    );
  };

  const handleTimeClick = (selectedTime) => {
    setAppointmentData({
      ...appointmentData,
      time: selectedTime,
    });
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
          <ul className="list-disc list-inside text-[#000000]">
            {appointmentList.map((appointment, index) => (
              <li key={index} className="text-base font-semibold">
                Tanggal: {appointment.date}, Waktu: {appointment.time}
              </li>
            ))}
          </ul>
          <div className="flex justify-center mt-5">
            <button
              type="button"
              className="bg-color-primary90 w-[45%] text-white px-4 py-2 rounded-sm mr-2 hover:bg-primary70 focus:outline-none focus:shadow-outline-primary active:bg-primary80"
              onClick={handleCancel}
            >
              Batalkan
            </button>
            <button
              type="button"
              className="bg-color-primary90 w-[45%] text-white px-4 py-2 rounded-sm hover:bg-primary70 focus:outline-none focus:shadow-outline-primary active:bg-primary80"
              onClick={() => {
                alert("Data Telah Dikonfirmasi");
                setShowModal(false);
              }}
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
        className="relative"
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
        <div
          className="w-full md:w-[80%] lg:w-[60%] xl:w-[45%] px-4 md:px-10 py-8 shadow-md absolute top-[90%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <h1 className="text-3xl font-bold mb-2 text-color-primary90">
            Appointment
          </h1>
          <h2 className="text-xs sm:text-base font-normal mb-2 text-color-colorGray90">
            Pastikan jadwal yang anda pilih sudah benar{" "}
          </h2>
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

export default privateRoute(AppointmentPage);
