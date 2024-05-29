import connectDB from "@/libs/connectDB";
import Siswa from "@/models/Siswa";
import { NextResponse } from "next/server";
connectDB();

export async function GET(req: any) {

    try {
        const nis = await req.nextUrl.searchParams.get("nis");
        const dataSiswa = await Siswa.findOne({nis});
        return NextResponse.json(dataSiswa);
    } catch (err: any) {
        return NextResponse.json({ error: err.message });
    }

}