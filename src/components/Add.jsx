/* eslint-disable react/prop-types */
import { useState } from "react";

const AddReview = ({ setOn, states }) => {
  const { harga, fasilitas, pelayanan, setharga, setfasilitas, setpelayanan } =
    states;
  const [pelDokter, setPelDokter] = useState({
    nama_pelanggan: "",
    tanggal_review: "",
    rating: "",
    ulasan: "",
  });
  const [fasil, setFasil] = useState({
    nama_pelanggan: "",
    tanggal_review: "",
    rating: "",
    ulasan: "",
  });
  const [hrg, setHrg] = useState({
    nama_pelanggan: "",
    tanggal_review: "",
    rating: "",
    ulasan: "",
  });

  const tambahData = (e, pelDokter, fasil, hrg) => {
    e.preventDefault();
    setpelayanan([...pelayanan, pelDokter]);
    setfasilitas([...fasilitas, fasil]);
    setharga([...harga, hrg]);
    setOn(false);
  };

  return (
    <div className="container text-white">
      <form onSubmit={(e) => tambahData(e, pelDokter, fasil, hrg)}>
        <div className="w-[90%] lg:w-2/3 mx-auto shadow-lg p-10 bg-[#B97375] rounded-lg">
          <div className="flex justify-center items-center w-full">
            <p className="mb-4 text-2xl font-bold text-center">
              Review Pelayanan Dokter
            </p>
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium">
              Nama Pelanggan
            </label>
            <input
              name="title"
              onChange={(e) =>
                setPelDokter({ ...pelDokter, nama_pelanggan: e.target.value })
              }
              type="text"
              className="border text-sm rounded-lg block w-full p-2.5 bg-white border-gray-600 placeholder-gray-400 text-slate-800 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium">
              Tanggal Review
            </label>
            <input
              name="author"
              onChange={(e) =>
                setPelDokter({ ...pelDokter, tanggal_review: e.target.value })
              }
              type="text"
              className=" border text-sm rounded-lg block w-full p-2.5 bg-white border-gray-600 placeholder-gray-400 text-slate-800  focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium">Rating</label>
            <input
              name="title"
              onChange={(e) =>
                setPelDokter({ ...pelDokter, rating: e.target.value })
              }
              type="text"
              className=" border text-sm rounded-lg block w-full p-2.5 bg-white border-gray-600 placeholder-gray-400 text-slate-800  focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium">Ulasan</label>
            <input
              name="author"
              onChange={(e) =>
                setPelDokter({ ...pelDokter, ulasan: e.target.value })
              }
              type="text"
              className=" border text-sm rounded-lg block w-full p-2.5 bg-white border-gray-600 placeholder-gray-400 text-slate-800 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>

        <div className="w-[90%] lg:w-2/3 mx-auto shadow-lg p-10 bg-[#B97375] my-3 rounded-lg">
          <div className="flex justify-center items-center w-full">
            <p className="mb-4 text-2xl font-bold text-center">
              Review Pelayanan Fasilitas
            </p>
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium">
              Nama Pelanggan
            </label>
            <input
              name="judul"
              onChange={(e) =>
                setFasil({ ...fasil, nama_pelanggan: e.target.value })
              }
              type="text"
              className="border text-sm rounded-lg block w-full p-2.5 bg-white border-gray-600 placeholder-gray-400 text-slate-800  focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium">
              Tanggal Review
            </label>
            <input
              name="author"
              onChange={(e) =>
                setFasil({ ...fasil, tanggal_review: e.target.value })
              }
              type="text"
              className=" border text-sm rounded-lg block w-full p-2.5 bg-white border-gray-600 placeholder-gray-400 text-slate-800  focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium">Rating</label>
            <input
              name="title"
              onChange={(e) => setFasil({ ...fasil, rating: e.target.value })}
              type="text"
              className=" border text-sm rounded-lg block w-full p-2.5 bg-white border-gray-600 placeholder-gray-400 text-slate-800  focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium">Ulasan</label>
            <input
              name="author"
              onChange={(e) => setFasil({ ...fasil, ulasan: e.target.value })}
              type="text"
              className=" border text-sm rounded-lg block w-full p-2.5 bg-white border-gray-600 placeholder-gray-400 text-slate-800  focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>

        <div className="w-[90%] lg:w-2/3 mx-auto shadow-lg p-10 bg-[#B97375] rounded-lg">
          <div className="flex justify-center items-center w-full">
            <p className="mb-4 text-2xl font-bold text-center">
              Review Pelayanan Harga
            </p>
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium">
              Nama Pelanggan
            </label>
            <input
              name="title"
              onChange={(e) =>
                setHrg({ ...hrg, nama_pelanggan: e.target.value })
              }
              type="text"
              className="border text-sm rounded-lg block w-full p-2.5 bg-white border-gray-600 placeholder-gray-400 text-slate-800  focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium">
              Tanggal Review
            </label>
            <input
              name="author"
              onChange={(e) =>
                setHrg({ ...hrg, tanggal_review: e.target.value })
              }
              type="text"
              className=" border text-sm rounded-lg block w-full p-2.5 bg-white border-gray-600 placeholder-gray-400 text-slate-800 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium">Rating</label>
            <input
              name="title"
              onChange={(e) => setHrg({ ...hrg, rating: e.target.value })}
              type="text"
              className=" border text-sm rounded-lg block w-full p-2.5 bg-white border-gray-600 placeholder-gray-400 text-slate-800  focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium">Ulasan</label>
            <input
              name="author"
              onChange={(e) => setHrg({ ...hrg, ulasan: e.target.value })}
              type="text"
              className=" border text-sm rounded-lg block w-full p-2.5 bg-white border-gray-600 placeholder-gray-400 text-slate-800  focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <button className="bg-slate-600 px-6 py-2 rounded text-white">
            Simpan
          </button>

          <button
            onClick={() => setOn(false)}
            className="bg-red-600 px-6 py-2 rounded text-white ml-2"
          >
            Batal
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
