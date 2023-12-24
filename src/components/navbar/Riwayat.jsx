import { useDataAppoinment } from "../../context/data-appoinment";
const Riwayat = () => {
  const { dataAppoinment } = useDataAppoinment();
  const imagestyle = {
    maxHeight: "150px",
  };

  return (
    <div className="py-[100px] w-full ">
      {dataAppoinment == "" ? (
        <div className="font-bold mx-16">Data Kosong</div>
      ) : (
        dataAppoinment.map((d) => (
          <>
            <div className="flex justify-center items-center flex-col">
              <div className="card card-side bg-base-100 shadow-xl mb-2 w-1/2">
                <figure>
                  <img src={d.image} style={imagestyle} alt="Movie" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title ">{d.doctor}</h2>
                  <div className="flex flex-col">
                    <p>Tanggal : {d.date}</p>
                    <p>Jam : {d.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))
      )}
      <div className="text-black pt-[100px]"></div>
    </div>
  );
};

export default Riwayat;
