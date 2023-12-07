const Faq = () => {
  return (
      <>
      <br></br>
      <div class="container center">
      <h1 className="text-3xl font-bold text-center">Frequently Asked Questions</h1>
      <br></br>
      <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" checked="checked" />
          <div className="collapse-title text-xl font-small">
              Apakah penting menjalani pembersihan gigi secara teratur?
          </div>
          <div className="collapse-content">
              <p>Ya, pembersihan gigi secara teratur membantu mencegah penumpukan plak dan tartar yang dapat menyebabkan masalah gigi dan gusi. Ini juga mendukung pemeliharaan kesehatan mulut secara keseluruhan.</p>
          </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-small">
              Apakah pemutihan gigi aman?
              </div>
              <div className="collapse-content">
                  <p>Ya, pemutihan gigi yang dilakukan oleh profesional gigi umumnya aman. Namun, sebaiknya berkonsultasi dengan dokter gigi sebelum memutuskan untuk menjalani prosedur ini.</p>
              </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-small">
              Apakah dental clinic menyediakan layanan darurat?
              </div>
              <div className="collapse-content">
                  <p>Ya, banyak dental clinic menyediakan layanan darurat untuk kasus seperti kecelakaan gigi, nyeri hebat, atau masalah lain yang memerlukan penanganan segera.</p>
              </div>
              <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" checked="checked" />
          <div className="collapse-title text-xl font-small">
              Bagaimana cara merawat gigi dan mulut dengan baik?
          </div>
          <div className="collapse-content">
              <p>Sikat gigi setidaknya dua kali sehari, gunakan benang gigi secara teratur, batasi konsumsi gula, hindari rokok, dan hindari minuman berwarna yang dapat membuat gigi berubah warna.</p>
          </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" checked="checked" />
          <div className="collapse-title text-xl font-small">
              Berapa lama pemulihan setelah pencabutan gigi atau prosedur lainnya?
          </div>
          <div className="collapse-content">
              <p>Waktu pemulihan dapat bervariasi tergantung pada jenis prosedur. Dokter gigi akan memberikan pedoman pemulihan dan perawatan lanjutan yang diperlukan setelah prosedur.</p>
          </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" checked="checked" />
          </div>
          </div>
          </div>
          <br></br>
          <br></br>
          </>
  );
}

export default Faq