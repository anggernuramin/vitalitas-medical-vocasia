import { Link } from "react-router-dom";
import ListReview from "../listreview";

const Fasilitas = () => {
    return (
        <>
        <ListReview/>        
        <div className="card lg:card-side shadow-xl m-5 bg-white">
        <img src="/img2.png" width="400px" height="300px" className="rounded object-cover" alt="Album"/>
        <div className="card-body">
        <h2 className="card-title text-black font-semibold">Kelengkapan Fasilitas</h2>
        <p className="text-black">Kami stol di Dental Klinik, menyediakan fasilitas terkini dan lengkap untuk memastikan pengalaman perawatan gigi terbaik. Dari ruang tunggu yang nyaman hingga perawatan diagnostik canggih, kami berinvestasi dalam kelengkapan fasilitas untuk mendukung kebutuhan perawatan gigi Anda. Bersama kami, Anda dapat merasakan kenyamanan dan ketenangan selama perawatan gigi, didukung oleh fasilitas yang memenuhi standar tertinggi.</p>
        <div className="card-actions justify-end">
        </div>
        </div>
        </div>
        </>
    );
}

export default Fasilitas;