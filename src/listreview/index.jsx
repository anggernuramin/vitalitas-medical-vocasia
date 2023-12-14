import { Link, useLocation} from "react-router-dom";

  const  ListReview = () => {
  const {pathname} = useLocation()
  
  return (
<div className="bg-pink-200 p-5">
  <Link className="rounded-full bg-white" to="/"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-arrow-left" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
    </svg>
    </Link>
    <ul className="flex flex-wrap w-full justify-between rounded-box pt-6">
    <Link to="/pelayanan" className={`${pathname == '/pelayanan' ? 'bg-slate-400  text-white': 'bg-white text-black'} w-[49%] my-2 lg:w-[19%] p-2  rounded text-xs`} >Pelayanan Dokter dan Staf</Link>
    <Link to="/kebersihan" className={`${pathname == '/kebersihan' ? 'bg-slate-400  text-white': 'bg-white text-black'} w-[49%] my-2 lg:w-[19%] p-2  rounded text-xs`} >Kebersihan dan Kondisi Fasilitas</Link>
    <Link to="/efisiensi" className={`${pathname == '/efisiensi' ? 'bg-slate-400  text-white': 'bg-white text-black'} w-[49%] my-2 lg:w-[19%] p-2  rounded text-xs`} >Efisiensi Waktu</Link>
    <Link to="/harga" className={`${pathname == '/harga' ? 'bg-slate-400  text-white': 'bg-white text-black'} w-[49%] my-2 lg:w-[19%] p-2  rounded text-xs`} >Harga dan Transparansi Biaya</Link>
    <Link to="/kelengkapan" className={`${pathname == '/kelengkapan' ? 'bg-slate-400  text-white': 'bg-white text-black'} w-[49%] my-2 lg:w-[19%] p-2  rounded text-xs`}>Kelengkapan Fasilitas</Link>
    </ul>
</div>
  )
}

export default ListReview;
