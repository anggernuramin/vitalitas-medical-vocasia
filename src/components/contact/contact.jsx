const Contact = () => {
  return (
    <div className="flex flex-wrap items-center justify-between pr-10 pt-10 pb-10 pl-3">
      <div className="w-full lg:w-2/3 p-8">
        <h2 className="pb-2 text-[#333] font-bold text-3xl cursor-pointer">
          Hubungi Kami
        </h2>
        <p className="mr-10 text-[#333] text-3sm">
          untuk pertanyaan, dukungan, atau untuk menjadwalkan janji gigi
          berikutnya Untuk pertanyaan, dukungan, atau untuk menjadwalkan janji
          gigi berikutnya, harap hubungi kami melalui aplikasi atau kunjungi
          klinik kami selama jam operasional.
          <br /> <br />
          Terima kasih telah memilih Aplikasi Pendaftaran Klinik Gigi kami. Kami
          berharap dapat melayani Anda dan meningkatkan pengalaman perawatan
          gigi Anda.
        </p>
      </div>
      <div className="flex pl-8 h-[5px] lg:h-[10px]">
        <button className="flex items-center border px-3 lg:px-8 py-3 lg:py-5 text-[#B97375] border-[#B97375] hover:bg-pink-300 text-xs">
          Chat Email
        </button>
        <button className="flex items-center border px-8 lg:px-6 bg-[#B97375] py-3 lg:py-5 ml-2 text-[#FFF] hover:bg-pink-300 text-xs">
          Chat WhatsaApp
        </button>
      </div>
    </div>
  );
};

export default Contact;
