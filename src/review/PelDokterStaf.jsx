import ListReview from "../listreview";


const PelDokterStaf = () => {
    return (
    <>
    <ListReview/>
        <div className="card lg:card-side shadow-xl m-5 bg-white">
        <img src="/img1.jpg" width="400px" height="300px" className="rounded object-cover" alt="Album"/>
        <div className="card-body">
        <h2 className="card-title text-black font-semibold">Pelayanan Dokter dan Staf</h2>
        <p className="text-black">Di Dental Klinik, kami bangga menyajikan pelayanan kesehatan gigi terbaik dengan tim dokter dan staf yang berdedikasi. Profesionalisme, keahlian, dan perhatian penuh kepada pasien merupakan prioritas utama kami untuk memastikan pengalaman perawatan gigi yang aman dan optimal bagi setiap pasien.</p>
        <div className="card-actions justify-end">
        </div>
        </div>
        </div>
        </>
    );
}

export default PelDokterStaf;