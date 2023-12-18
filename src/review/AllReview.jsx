import { dataReview } from '../../data-review/review';

const AllReview = () => {
    const {pelayanan, fasilitas, harga} = dataReview;
  return (
<div> 
    <div className='mx-auto w-full bg-white text-black p-5'>
    <div className='flex justify-center py-8'>
    <span className="badge badge-secondary badge-outline">REVIEW PELAYANAN DOKTER</span>
    </div>
    <div className="overflow-x-auto">
  <table className="table rounded-5 border">
    <thead>
      <tr className='font-semibold text-black bg-pink-200'>
        <th>Username</th>
        <th>Rating</th>
        <th>Comment</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
     {pelayanan.map((data) => (
      <tr key={data.username}>
        <td>{data.username}</td>
        <td>{data.rating}</td>
        <td>{data.comment}</td>
        <td>{data.date}</td>
      </tr>
       )
       )}
    </tbody>
  </table>
</div>
</div>

<div className='mx-auto w-full bg-white text-black p-5'>
    <div className='flex justify-center py-8'>
    <span className="badge badge-secondary badge-outline">REVIEW FASILITAS</span>
    </div>
    <div className="overflow-x-auto">
  <table className="table rounded-5 border">
    <thead>
      <tr className='font-semibold text-black bg-pink-200'>
        <th>Nama Pelanggan</th>
        <th>Tanggal Review</th>
        <th>Rating</th>
        <th>Ulasan</th>
      </tr>
    </thead>
    <tbody>
     {fasilitas.map((data) => (
      <tr key={data.nama_pelanggan}>
        <td>{data.nama_pelanggan}</td>
        <td>{data.tanggal_review}</td>
        <td>{data.rating}</td>
        <td>{data.ulasan}</td>
      </tr>
       )
       )}
    </tbody>
  </table>
</div>
</div>
    
<div className='mx-auto w-full bg-white text-black p-5'>
    <div className='flex justify-center py-8'>
    <span className="badge badge-secondary badge-outline">REVIEW HARGA</span>
    </div>
    <div className="overflow-x-auto">
  <table className="table rounded-5 border">
    <thead>
      <tr className='font-semibold text-black bg-pink-200'>
        <th>Nama Pelanggan</th>
        <th>Tanggal Review</th>
        <th>Rating</th>
        <th>Ulasan</th>
      </tr>
    </thead>
    <tbody>
     {harga.map((data) => (
      <tr key={data.nama_pelanggan}>
        <td>{data.nama_pelanggan}</td>
        <td>{data.tanggal_review}</td>
        <td>{data.rating}</td>
        <td>{data.ulasan}</td>
      </tr>
       )
       )}
    </tbody>
  </table>
</div>
</div>
    </div>
  )
}

export default AllReview;