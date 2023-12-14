import ListReview from "../listreview";


const Harga = () => {
    return (
        <>
        <ListReview/>
        <div className="card lg:card-side shadow-xl m-5 bg-white">
        <img src="/harga.jpg" width="400px" height="300px" className="rounded object-cover" alt="Album"/>
        <div className="card-body">
        <h2 className="card-title text-black font-semibold">Harga dan Transparansi Biaya</h2>
        <p className="text-black">Di Dental Klinik, kami menjunjung tinggi transparansi dan keterbukaan. Harga pelayanan kami disusun dengan jelas, dan kami berkomitmen untuk memberikan informasi biaya yang jelas kepada pasien. Tanpa biaya tersembunyi, Anda dapat merencanakan perawatan gigi Anda dengan keyakinan, mengetahui bahwa kejelasan harga adalah bagian dari komitmen kami untuk memberikan pelayanan yang dapat diandalkan dan terpercaya.</p>
        <div className="card-actions justify-end">
        </div>
        </div>
        </div>
        </>
    );
}

export default Harga;