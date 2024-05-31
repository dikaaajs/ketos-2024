import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="relative min-h-screen w-full flex items-center justify-center bg-slate-800 bg-opacity-50 px-[100px] dark">
        <img src="bg.png" className="w-full fixed top-0 -z-10 " />

        <ol className="relative border-s border-gray-200 w-[70%] h-[80%] mt-[100px] dark:border-gray-700">
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 font-poppins-bold rounded-full -start-3 ring-2 dark:ring-slate-700 dark:bg-white">
              1
            </span>
            <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
              <p className="text-sm font-normal text-gray-500 dark:text-gray-300">
                Login admin terlebih hadulu pada halaman{" "}
                <Link href="/login" className="text-blue-400">
                  domain/login
                </Link>
              </p>
              <img src="login-page.png" className="w-1/2 rounded-md" alt="" />
            </div>
          </li>
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 font-poppins-bold rounded-full -start-3 ring-2 dark:ring-slate-700 dark:bg-white">
              2
            </span>
            <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
              <p className="text-sm font-normal text-gray-500 dark:text-gray-300">
                masuk ke halaman voting{" "}
                <Link href="/voting" className="text-blue-400">
                  domain/voting
                </Link>
              </p>
              <img src="voting-page.png" className="w-1/2 rounded-md" alt="" />
            </div>
          </li>
          <li className="ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 font-poppins-bold rounded-full -start-3 ring-2 dark:ring-slate-700 dark:bg-white">
              3
            </span>
            <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
              <p className="text-sm font-normal text-gray-500 dark:text-gray-300">
                masuk ke halaman hasil untuk melihat hasil{" "}
                <Link href="/hasil" className="text-blue-400">
                  domain/hasil
                </Link>
              </p>
              <img src="hasil-page.png" className="w-1/2 rounded-md" alt="" />
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}
