import React from "react";

export default function page() {
  return (
    <div>
      <div className="relative h-screen w-full flex gap-[50px] px-[50px] items-center justify-center bg-slate-800 bg-opacity-50">
        <img src="bg.png" className="w-full absolute top-0 -z-10 " />
        <p className="absolute bottom-[150px] !text-white">
          jumlah golput : 101
        </p>

        <div className="w-[30%] relative bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark">
          <div className="flex flex-col items-center">
            <div className="h-[100px] w-full bg-white relative top-0 rounded-t-lg">
              <img
                src={"/calon-ketos-removebg.png"}
                className="h-[150px] bottom-0 -left-[10px] absolute z-20"
                alt=""
              />
              <div className="absolute right-5 z-10 bottom-[5px]">
                <span className="text-3xl text-right ml-auto block font-bold font-poppins-bold text-slate-800">
                  #1
                </span>
                <h1 className="text-2xl font-medium font-poppins-bold text-slate-800 ">
                  Mamang Resing
                </h1>
              </div>
            </div>

            <div className="text-center">
              <p className="leading-[5px] py-[50px]">
                <span className="text-3xl font-medium font-poppins-bold text-gray-900 dark:text-white">
                  10%
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  dengan total 134
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="w-[30%] relative bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark">
          <div className="flex flex-col items-center">
            <div className="h-[100px] w-full bg-white relative top-0 rounded-t-lg">
              <img
                src={"/calon-ketos-removebg.png"}
                className="h-[150px] bottom-0 -left-[10px] absolute z-20"
                alt=""
              />
              <div className="absolute right-5 z-10 bottom-[5px]">
                <span className="text-3xl text-right ml-auto block font-bold font-poppins-bold text-slate-800">
                  #1
                </span>
                <h1 className="text-2xl font-medium font-poppins-bold text-slate-800 ">
                  Mamang Resing
                </h1>
              </div>
            </div>

            <div className="text-center">
              <p className="leading-[5px] py-[50px]">
                <span className="text-3xl font-medium font-poppins-bold text-gray-900 dark:text-white">
                  10%
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  dengan total 134
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="w-[30%] relative bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark">
          <div className="flex flex-col items-center">
            <div className="h-[100px] w-full bg-white relative top-0 rounded-t-lg">
              <img
                src={"/calon-ketos-removebg.png"}
                className="h-[150px] bottom-0 -left-[10px] absolute z-20"
                alt=""
              />
              <div className="absolute right-5 z-10 bottom-[5px]">
                <span className="text-3xl text-right ml-auto block font-bold font-poppins-bold text-slate-800">
                  #1
                </span>
                <h1 className="text-2xl font-medium font-poppins-bold text-slate-800 ">
                  Mamang Resing
                </h1>
              </div>
            </div>

            <div className="text-center">
              <p className="leading-[5px] py-[50px]">
                <span className="text-3xl font-medium font-poppins-bold text-gray-900 dark:text-white">
                  10%
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  dengan total 134
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
