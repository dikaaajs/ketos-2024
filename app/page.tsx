import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <div className="relative h-screen w-full flex items-center justify-center bg-slate-800 bg-opacity-50">
        <h2 className="font-aceng stroke-blue-custom text-[5rem] text-center text-white">
          Lead The Way To A Brighter Future
        </h2>
        <img src="bg.png" className="w-full absolute top-0 -z-10 " />
      </div>
    </div>
  );
}
