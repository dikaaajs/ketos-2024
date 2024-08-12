"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Warning from "../components/toast/Warning";
import { calonKetos } from "@/data/caketos";
import Loading from "../components/Loading";
import Link from "next/link";

export interface ISiswa extends Document {
  nis: string;
  nama: string;
  kelas: string;
  pilihan: string;
}

export default function page() {
  const [NIS, setNIS] = useState<string | null>(null);
  const [tahapan, setTahapan] = useState<
    "loading" | "isiNIS" | "pilihKetos" | "selesai"
  >("isiNIS");
  const [viewVisiMisi, setViewVisiMisi] = useState(false);
  const [caleg, setCaleg] = useState<null | number>(null);
  const [popupConfirm, setPopupConfirm] = useState<boolean>(false);
  const [siswa, setSiswa] = useState<ISiswa | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const { data: session, status } = useSession();
  console.log(session);

  const handleSubmitNIS = async (e: any) => {
    e.preventDefault();
    setTahapan("loading");
    const siswa = await axios.get(`/api/siswa?nis=${NIS}`);
    if (siswa.data === null) {
      setMessage("NIS tidak ditemukan");
      setTahapan("isiNIS");
    } else {
      setSiswa(siswa.data);
      setTahapan("pilihKetos");
    }
  };

  const handleClickVisiMisi = (noCaleg: number) => {
    setCaleg(noCaleg);
    setViewVisiMisi(true);
  };

  const handleConfirm = async () => {
    setPopupConfirm(false);
    if (caleg !== undefined) {
      setTahapan("loading");
      const res = await axios.patch(`api/siswa?nis=${NIS}`, {
        pilihan: caleg! + 1,
      });
      console.log(res);
      setTahapan("selesai");
    } else {
      return alert("Pilih caketos terlebih dahulu");
    }
  };

  if (status === "loading") {
    return (
      <div className="relative h-screen w-full flex items-center justify-center bg-slate-800 bg-opacity-60">
        <img src="bg.png" className="w-full absolute top-0 -z-10 " />
        <Loading />
      </div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <div className="relative h-screen w-full flex items-center justify-center bg-slate-800 bg-opacity-60">
        <img src="bg.png" className="w-full absolute top-0 -z-10 " />
        <div className="dark w-[30%] fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col gap-[20px] justify-center py-[80px] px-[30px] text-center bg-white border-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-white">
          <div role="status" className="flex justify-center">
            <span className="sr-only">Loading...</span>
          </div>
          <p>untuk mengakses halaman ini diperlukan login admin!</p>
          <Link
            href={"/login"}
            className="btn bg-white text-black block mx-auto"
          >
            login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="relative h-screen w-full flex items-center justify-center bg-slate-800 bg-opacity-60">
        <img src="bg.png" className="w-full absolute top-0 -z-10 " />

        {/* toast */}
        {message !== null && <Warning msg={message} close={setMessage} />}

        {tahapan === "isiNIS" && (
          <div className="dark w-[80%] py-[80px] px-[30px] text-center bg-white border-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-white">
            <h1 className="text-[3rem] font-poppins-bold">
              Masukkan NIS kamu disini!
            </h1>
            <form onSubmit={handleSubmitNIS}>
              <div className="py-[30px]">
                <div className="flex w-[50%] mx-auto">
                  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                  </span>
                  <input
                    onChange={(e: any) => setNIS(e.target.value)}
                    type="number"
                    className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="2122 ..."
                  />
                </div>
              </div>
              <p>
                Klik{" "}
                <kbd className="px-2 py-1 text-[.7rem] font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                  Enter
                </kbd>{" "}
                untuk submit
              </p>
            </form>
          </div>
        )}

        {tahapan === "loading" && <Loading />}

        {tahapan === "pilihKetos" && siswa !== null && (
          <div className="w-[80%]">
            <div className="py-5">
              <p className="text-xl text-center !text-white">
                Halo, {siswa.nama} - {siswa.kelas}
              </p>
              <h2 className="font-aceng stroke-blue-custom text-[3rem] text-center text-white ">
                Pilih Calon Ketua OSIS!
              </h2>
            </div>
            <div className="flex gap-[50px] justify-center">
              {calonKetos.map((i, idx) => {
                return (
                  <div
                    key={idx}
                    className="w-[30%] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark pt-[30px]"
                  >
                    <div className="flex flex-col items-center pb-10">
                      <img
                        className="w-24 h-24 mb-3 rounded-full shadow-lg"
                        src={i.image}
                      />
                      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        {i.nama}
                      </h5>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Caketos No. 0{idx + 1}
                      </span>
                      <div className="flex mt-4 md:mt-6 font-montserrat">
                        <button
                          onClick={() => {
                            setCaleg(idx);
                            setPopupConfirm(true);
                          }}
                          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Pilih
                        </button>
                        <button
                          onClick={() => handleClickVisiMisi(idx)}
                          className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                          Visi Misi
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {tahapan === "selesai" && (
          <div className="w-1/2 p-6 py-[50px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img src="checklist.gif" className="w-[50px] mx-auto" alt="" />
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
              Anda sudah berhasil melakukan voting ✔
            </h5>

            <button
              type="button"
              onClick={() => setTahapan("isiNIS")}
              className="text-white bg-blue-500 mx-auto block hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Oke
            </button>
          </div>
        )}

        {viewVisiMisi && caleg !== null && (
          <div
            className="fixed w-full h-full flex flex-col justify-center items-center backdrop-brightness-50 dark z-10"
            onClick={() => {
              setCaleg(null);
              setViewVisiMisi(false);
            }}
          >
            <div className="flex gap-[50px]">
              {/* visi */}
              <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Visi
                </h5>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                  {calonKetos[caleg].visi}
                </p>
              </div>

              {/* misi */}
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h5 className="max-w-sm mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Misi
                </h5>
                <ol className="text-sm max-h-[80vh]  max-w-[40vw]">
                  {calonKetos[caleg].misi.map((i, idx) => {
                    return (
                      <li className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                        {i}
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>

            <p className="pt-[50px] !text-white fixed bottom-[50px]">
              Klik dimana saja untuk menutup
            </p>
          </div>
        )}

        {popupConfirm === true && caleg !== null && (
          <div className="fixed w-full h-full flex flex-col justify-center items-center backdrop-brightness-50 dark z-10">
            <div className="w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <h5 className="mb-2 text-2xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
                Anda yakin memilih Ceketos No. 0{caleg + 1} ?
              </h5>

              <div className="flex gap-3 justify-center pt-[15px]">
                <button
                  onClick={handleConfirm}
                  className="relative font-robotomono inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                >
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Ya
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setCaleg(0);
                    setPopupConfirm(false);
                  }}
                  className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Tidak
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
