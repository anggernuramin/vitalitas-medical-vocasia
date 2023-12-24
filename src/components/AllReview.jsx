import { useState } from "react";
import AddReview from "./Add";

const AllReview = () => {
  const [onAdd, setOnAdd] = useState(false);
  const [pelayanan, setpelayanan] = useState([
    {
      nama_pelanggan: "Ratna",
      tanggal_review: "15-08-2023",
      rating: 5,
      ulasan:
        "Dokter gigi sangat ramah dan cekatan, pelayanan yang sangat baik!",
    },
    {
      nama_pelanggan: "Audiya",
      rating: 4.7,
      ulasan: "Pelayanan lumayan, tapi sedikit terlambat. Dokternya baik.",
      tanggal_review: "05-02-2023",
    },
    {
      nama_pelanggan: "Gita",
      rating: 5.0,
      ulasan:
        "Saya merasa nyaman selama pemeriksaan, dokternya sangat profesional.",
      tanggal_review: "16-11-2023",
    },
    {
      nama_pelanggan: "Lilis",
      rating: 4.6,
      ulasan:
        "Dokter gigi memberikan penjelasan yang jelas dan mudah dipahami.",
      tanggal_review: "11-07-2023",
    },
    {
      nama_pelanggan: "Fitri",
      rating: 4.9,
      ulasan: "Pelayanan sangat cepat dan efisien, dokternya ahli.",
      tanggal_review: "10-05-2023",
    },
  ]);
  const [fasilitas, setfasilitas] = useState([
    {
      nama_pelanggan: "Ricky Andrian",
      tanggal_review: "17-09-2023",
      rating: 4.7,
      ulasan: "Pelayanan sangat baik, fasilitas bersih dan nyaman.",
    },
    {
      nama_pelanggan: "Arif Handy",
      tanggal_review: "20-09-2023",
      rating: 5,
      ulasan:
        "Sangat senang dengan fasilitas yang disediakan, staf ramah dan profesional.",
    },
    {
      nama_pelanggan: "Zulaikha",
      tanggal_review: "12-04-2023",
      rating: 4.1,
      ulasan: "Fasilitas bagus, tetapi pelayanan bisa ditingkatkan.",
    },
    {
      nama_pelanggan: "Ricko Taip",
      tanggal_review: "24-10-2023",
      rating: 5,
      ulasan: "Pelayanan luar biasa, tempat ini layak dikunjungi lagi.",
    },
    {
      nama_pelanggan: "Siti Nurjanah",
      tanggal_review: "14-09-2023",
      rating: 4.6,
      ulasan:
        "Fasilitas yang baik, namun ada beberapa area yang perlu perbaikan.",
    },
  ]);
  const [harga, setharga] = useState([
    {
      nama_pelanggan: "Andrian",
      tanggal_review: "21-08-2023",
      rating: 4.9,
      ulasan: "Harga sangat terjangkau, nilai yang baik untuk uang.",
      gambar: "https://example.com/john_doe_review.jpg",
    },
    {
      nama_pelanggan: "Hadi Arifin",
      tanggal_review: "08-03-2023",
      rating: 5,
      ulasan:
        "Sangat puas dengan harga yang kompetitif dan kualitas pelayanan.",
      gambar: "https://example.com/jane_smith_review.jpg",
    },
    {
      nama_pelanggan: "Pipit Lasmono",
      tanggal_review: "22-01-2023",
      rating: 4.2,
      ulasan: "Harga agak tinggi dibandingkan dengan kualitas yang diberikan.",
      gambar: "https://example.com/alex_johnson_review.jpg",
    },
    {
      nama_pelanggan: "Kasmad William",
      tanggal_review: "27-03-2023",
      rating: 5,
      ulasan:
        "Luar biasa! Harga yang sangat masuk akal untuk fasilitas yang diberikan.",
      gambar: "https://example.com/emily_white_review.jpg",
    },
    {
      nama_pelanggan: "Anton Fernandes",
      tanggal_review: "25-06-2023",
      rating: 4.7,
      ulasan: "Harga sebanding dengan kualitas pelayanan, layanan yang baik.",
      gambar: "https://example.com/michael_brown_review.jpg",
    },
  ]);
  const states = {
    harga,
    fasilitas,
    pelayanan,
    setharga,
    setfasilitas,
    setpelayanan,
  };
  return (
    <div className="container">
      {onAdd ? (
        <div className="py-24">
          <AddReview states={states} setOn={setOnAdd} />
        </div>
      ) : (
        <>
          <div className="pt-[100px] mx-auto w-full bg-white text-black p-5">
            <div className="flex justify-center py-8">
              <span className="badge badge-secondary badge-outline">
                REVIEW PELAYANAN DOKTER
              </span>
            </div>
            <button
              onClick={() => setOnAdd(true)}
              className="badge badge-secondary badge-outline  bg-color-primary90 mb-4"
              to="/tambah-review"
            >
              Tambah Review
            </button>

            <div className="overflow-x-auto">
              <table className="table rounded-5 border">
                <thead>
                  <tr className="font-semibold text-black  bg-color-primary90">
                    <th>Nama Pelanggan</th>
                    <th>Tanggal Review</th>
                    <th>Rating</th>
                    <th>Ulasan</th>
                  </tr>
                </thead>
                <tbody>
                  {pelayanan.map((data) => (
                    <tr key={data.nama_pelanggan}>
                      <td className="px-6 py-6">{data.nama_pelanggan}</td>
                      <td className="px-6 py-6">{data.tanggal_review}</td>
                      <td className="px-6 py-6">{data.rating}</td>
                      <td className="px-6 py-6">{data.ulasan}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mx-auto w-full bg-white text-black p-5">
            <div className="flex justify-center py-8">
              <span className="badge badge-secondary badge-outline">
                REVIEW FASILITAS
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="table rounded-5 border">
                <thead>
                  <tr className="font-semibold text-black  bg-color-primary90">
                    <th>Nama Pelanggan</th>
                    <th>Tanggal Review</th>
                    <th>Rating</th>
                    <th>Ulasan</th>
                  </tr>
                </thead>
                <tbody>
                  {fasilitas.map((data) => (
                    <tr key={data.nama_pelanggan}>
                      <td className="px-6 py-6">{data.nama_pelanggan}</td>
                      <td className="px-6 py-6">{data.tanggal_review}</td>
                      <td className="px-6 py-6">{data.rating}</td>
                      <td className="px-6 py-6">{data.ulasan}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mx-auto w-full bg-white text-black p-5">
            <div className="flex justify-center py-8">
              <span className="badge badge-secondary badge-outline">
                REVIEW HARGA
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="table rounded-5 border">
                <thead>
                  <tr className="font-semibold text-black bg-color-primary90">
                    <th>Nama Pelanggan</th>
                    <th>Tanggal Review</th>
                    <th>Rating</th>
                    <th>Ulasan</th>
                  </tr>
                </thead>
                <tbody>
                  {harga.map((data) => (
                    <tr key={data.nama_pelanggan}>
                      <td className="px-6 py-6">{data.nama_pelanggan}</td>
                      <td className="px-6 py-6">{data.tanggal_review}</td>
                      <td className="px-6 py-6">{data.rating}</td>
                      <td className="px-6 py-6">{data.ulasan}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default AllReview;
