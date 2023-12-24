/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { Check } from "phosphor-react";

const CardPromo = () => {
  return (
    <div className="container mb-10">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-semibold">Promo</h1>
        <p className="text-color-coolGray90 mt-3 ">
          Dapatkan promo di bawah ini dengan melakukan appoinment di bulan
          September
        </p>
      </header>
      <section className="flex md:flex-row flex-col justify-center items-center md:items-start gap-8">
        <div className="flex justify-center items-center flex-col p-5 border border-color-coolGray40 gap-3 md:w-[370px] w-[320px]">
          <h2 className="text-3xl font-semibold">Scaling Treatment</h2>
          <span className="md:text-5xl text-4xl  text-color-coolGray40 mt-2 line-through">
            Rp. 300.000
          </span>
          <span className="md:text-5xl text-4xl  text-color-coolGray90 font-semibold">
            Rp. 199.000
          </span>
          <p className="text-sm">Discount on Desember</p>
          <Link
            className="w-[200px] rounded-sms btn border-0 outline-none text-white bg-color-primary90 hover:bg-color-primary90 hover:shadow-2xl transition-all my-2"
            to={"/appointment"}
          >
            Book Appoinment
          </Link>
          <div className="flex flex-col gap-1 text-sm">
            <div className="item flex justify-center items-center gap-2">
              <Check className="text-color-primary90 text-xl font-bold" />
              <p>Free konsultasi</p>
            </div>
            <div className="item flex justify-center items-center gap-2">
              <Check className="text-color-primary90 text-xl font-bold" />
              <p>Scaling Spesial</p>
            </div>
            <div className="item flex justify-center items-center gap-2">
              <Check className="text-color-primary90 text-xl font-bold" />
              <p>Paket Gigi</p>
            </div>
            <div className="item flex justify-center items-center gap-2">
              <Check className="text-color-primary90 text-xl font-bold" />
              <p>Pembersihan Gratis</p>
            </div>
          </div>
        </div>

        <div className="relative scale-105 flex justify-center items-center flex-col p-5 border border-color-coolGray40 gap-3 md:w-[370px] w-[320px]">
          <span className="absolute left-[35%] py-1 px-3 rounded-xl top-[-3.5%] text-sm bg-color-coolGray30 border-color-primary90">
            Most Populer
          </span>
          <h2 className="text-3xl font-semibold">Bleacing Teeth</h2>
          <span className="md:text-5xl text-4xl  text-color-coolGray40 mt-2 line-through">
            Rp. 950.000
          </span>
          <span className="md:text-5xl text-4xl  text-color-coolGray90 font-semibold">
            Rp. 399.000
          </span>
          <p className="text-sm">Discount on Desember</p>
          <Link
            className="w-[200px] rounded-sms btn border-0 outline-none text-white bg-color-primary90 hover:bg-color-primary90 hover:shadow-2xl transition-all my-2"
            to={"/appointment"}
          >
            Book Appoinment
          </Link>
          <div className="flex flex-col gap-1 text-sm ">
            <div className="item flex justify-start items-center gap-2">
              <Check className="text-color-primary90 text-xl font-bold" />
              <p>Free konsultasi</p>
            </div>
            <div className="item flex justify-start items-center gap-2">
              <Check className="text-color-primary90 text-xl font-bold" />
              <p>Paket Pemutihan</p>
            </div>
            <div className="item flex justify-start items-center gap-2">
              <Check className="text-color-primary90 text-xl font-bold" />
              <p>Bleach Profesional</p>
            </div>
            <div className="item flex justify-start items-center gap-2">
              <Check className="text-color-primary90 text-xl font-bold" />
              <p>Diskon Noda</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center flex-col p-5 border border-color-coolGray40 gap-3 md:w-[370px] w-[320px]">
          <h2 className="text-3xl font-semibold">Braces Selfligating</h2>
          <span className="md:text-5xl text-4xl  text-color-coolGray40 mt-2 line-through">
            Rp. 15.000.000
          </span>
          <span className="md:text-5xl text-4xl  text-color-coolGray90 font-semibold">
            Rp. 13.000.000
          </span>
          <p className="text-sm">Discount on Desember</p>
          <Link
            className="w-[200px] rounded-sms btn border-0 outline-none text-white bg-color-primary90 hover:bg-color-primary90 hover:shadow-2xl transition-all my-2"
            to={"/appointment"}
          >
            Book Appoinment
          </Link>
          <div className="flex flex-col gap-1 text-sm">
            <div className="item flex justify-center items-center gap-2">
              <Check className="text-color-primary90 text-xl font-bold" />
              <p>Free konsultasi</p>
            </div>
            <div className="item flex justify-center items-center gap-2">
              <Check className="text-color-primary90 text-xl font-bold" />
              <p>Diskon Bleaching</p>
            </div>
            <div className="item flex justify-center items-center gap-2">
              <Check className="text-color-primary90 text-xl font-bold" />
              <p>Selfligating Special</p>
            </div>
            <div className="item flex justify-center items-center gap-2">
              <Check className="text-color-primary90 text-xl font-bold" />
              <p>Perawatan Efisien</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardPromo;
