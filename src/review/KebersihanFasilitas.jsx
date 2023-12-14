
import ListReview from "../listreview";

const KebersihanFasilitas = () => {
    return (
      <>
      <ListReview/>
      <div className="card lg:card-side shadow-xl m-5 bg-white">
      <img src="/kebersihan.png" width="400px" height="300px" className="rounded object-cover" alt="Album"/>
      <div className="card-body">
      <h2 className="card-title text-black font-semibold">Kebersihan dan Kondisi Fasilitas</h2>
      <p className="text-black">Kebersihan dan kenyamanan pasien adalah fokus utama kami di Dental Klinik. Fasilitas kami dirawat dengan teliti, menciptakan lingkungan yang steril dan nyaman. Dengan standar kebersihan gigi dan fasilitas terkini, kami berkomitmen untuk memberikan pengalaman perawatan gigi yang aman dan optimal bagi setiap pasien.</p>
      <div className="card-actions justify-end">
      </div>
      </div>
      </div>
      </>
    );
}

export default KebersihanFasilitas;