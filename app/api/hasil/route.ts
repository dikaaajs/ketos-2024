import connectDB from "@/libs/connectDB";
import Siswa from "@/models/Siswa";
import { NextResponse } from "next/server";

connectDB();

export async function GET() {
    
    try {
        const jumlahGolput = await Siswa.countDocuments({ pilihan: "0" })
        const jumlahPilihan_1 = await Siswa.countDocuments({ pilihan: "1" })
        const jumlahPilihan_2 = await Siswa.countDocuments({ pilihan: "2" })
        const jumlahPilihan_3 = await Siswa.countDocuments({ pilihan: "3" })
        return NextResponse.json({ jumlahGolput, jumlahPilihan_1, jumlahPilihan_2, jumlahPilihan_3 }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ msg: "Gagal mengambil data siswa", err: error }, { status: 200 });
    }

}