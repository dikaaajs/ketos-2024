"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session, status } = useSession();
  return (
    <nav className="w-full py-5 bg-slate-800 px-[50px] flex justify-between items-center fixed top-0 z-10">
      <Link className="text-[2rem] text-white font-aceng uppercase" href={"/"}>
        pemira
      </Link>

      <ul className="text-white font-robotomono flex justify-center items-center gap-10">
        <Link href={"/voting"}>voting</Link>
        <Link href={"#about"}>about</Link>
        <Link href={"/hasil"}>hasil</Link>
      </ul>

      {status == "unauthenticated" ? (
        <Link
          href={"/login"}
          className="btn text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          login
        </Link>
      ) : (
        <button
          type="button"
          className="text-white w-[30px]"
          onClick={() => signOut()}
        >
          <img src="logout.svg" />
        </button>
      )}
    </nav>
  );
}
