import { Link } from "react-router-dom";

import ListReview from '../listreview'
const EfisienWaktu = () => {
    return (
        <>
        <ListReview/>
        <div className="card lg:card-side shadow-xl m-5 bg-white">
        <img src="/clock.jpg" width="400px" height="300px" className="rounded object-cover" alt="Album"/>
        <div className="card-body">
        <h2 className="card-title text-black font-semibold">Efisiensi Waktu</h2>
        <p className="text-black">Kami menghargai waktu berharga Anda di Dental Klinik. Dengan proses pendaftaran yang efisien, waktu tunggu minimal, dan penangan cepat oleh tim profesional kami, kami berkomitmen untuk memberikan pelayanan gigi yang efisien tanpa mengorbankan kualitas. Pengalaman perawatan gigi yang cepat dan nyaman adalah prioritas kami untuk memenuhi kebutuhan kesehatan gigi Anda.</p>
        <div className="card-actions justify-end">
        </div>
        </div>
        </div>
        </>
    );
}

export default EfisienWaktu;