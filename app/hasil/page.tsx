"use client";

import { calonKetos } from "@/data/caketos";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

interface DataResult {
  count: number;
  persen: number;
}

interface Result {
  ceketos: DataResult[];
  golput: DataResult;
}

export default function page() {
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(true);

  const getDataResult = async () => {
    const res = await axios.get("api/hasil");
    setResult(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getDataResult();
  }, []);

  console.log(result);
  return (
    <div>
      <div className="relative h-screen w-full px-[50px] items-center bg-slate-800 bg-opacity-50">
        <img src="bg.png" className="w-full absolute top-0 left-0 -z-10 " />

        {loading && <Loading />}

        {result && (
          <>
            <div className="absolute bottom-[150px] !text-white left-1/2 -translate-x-1/2 py-2 px-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark">
              <span className="text-xl font-medium font-poppins-bold text-white">
                Golput
              </span>
              <p className="text-md font-medium font-poppins-bold text-white">
                {result.golput.persen.toFixed(2)}%
              </p>
              <p className="">dengan total : {result?.golput.count}</p>
            </div>
            <div className="flex gap-[50px] px-[50px] justify-center w-full absolute transform bottom-1/2 translate-y-1/2 left-1/2 -translate-x-1/2">
              {calonKetos.map((e, idx) => {
                return (
                  <div
                    key={idx}
                    className="w-[30%] relative bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark"
                  >
                    <div className="flex flex-col items-center">
                      <div className="h-[100px] w-full bg-white relative top-0 rounded-t-lg">
                        <img
                          src={"/calon-ketos-removebg.png"}
                          className="h-[150px] bottom-0 -left-[10px] absolute z-20"
                          alt=""
                        />
                        <div className="absolute right-5 z-10 bottom-[5px]">
                          <span className="text-3xl text-right ml-auto block font-bold font-poppins-bold text-slate-800">
                            #{idx + 1}
                          </span>
                          <h1 className="text-2xl font-medium font-poppins-bold text-slate-800 ">
                            {e.nama}
                          </h1>
                        </div>
                      </div>

                      <div className="text-center">
                        <p className="leading-[5px] py-[50px]">
                          <span className="text-3xl font-medium block font-poppins-bold text-gray-900 dark:text-white">
                            {result.ceketos[idx].persen.toFixed(2)}%
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            dengan total {result.ceketos[idx].count}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
