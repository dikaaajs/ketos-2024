import connectDB from "@/libs/connectDB";
import Siswa from "@/models/Siswa";
import { NextResponse } from "next/server";

export async function GET(req: any) {
    await connectDB();
    try {
        const nis = await req.nextUrl.searchParams.get("nis");
        const dataSiswa = await Siswa.findOne({nis});
        if (!nis) {
            return NextResponse.json({msg: "NIS tidak boleh kosong!"}, { status: 401 }) 
        } 
        else if (dataSiswa == 'null') {
            return NextResponse.json({msg: "NIS tidak ditemukan"}, { status: 401 }) 
        }
        return NextResponse.json(dataSiswa, { status: 200 });
    } catch (error) {
        return NextResponse.json({ msg: "Gagal mengambil data siswa", err: error }, { status: 500 });
    }

}

export async function PATCH(req: any) {
    await connectDB();
    try {
        const nis = await req.nextUrl.searchParams.get("nis");
        if (!nis) {
            return NextResponse.json({msg: "NIS tidak boleh kosong!"}, { status: 401 })
        }
        const { pilihan } = await req.json();
        if (pilihan !== undefined) {
            const dataSiswa = await Siswa.findOneAndUpdate({nis}, { $set: { pilihan } });
            return NextResponse.json({ msg: "Berhasil update data siswa" }, { status: 200 });
        }
        return NextResponse.json({ msg: "Pilihan tidak boleh kosong!" }, { status: 401 });
    } catch (error) {
        return NextResponse.json({ msg: "Gagal update data siswa", err: error }, { status: 500 });
    }

}