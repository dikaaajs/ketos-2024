import connectDB from "@/libs/connectDB";
import Siswa from "@/models/Siswa";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  try {
    const tmp = await Siswa.find();
    const countAll = tmp.length;

    const result = {
      ceketos: [
        { persen: 0, count: 0 },
        { persen: 0, count: 0 },
        { persen: 0, count: 0 },
      ],
      golput: { persen: 0, count: 0 },
    };

    result.ceketos[0].count = await Siswa.countDocuments({ pilihan: "1"});
    result.ceketos[1].count = await Siswa.countDocuments({ pilihan: "2"});
    result.ceketos[2].count = await Siswa.countDocuments({ pilihan: "3"});
    result.golput.count = await Siswa.countDocuments({ pilihan: "0"});

    // tmp.forEach((siswa) => {
    //   if (siswa.pilihan === "0") {
    //     result.golput.count += 1;
    //   } else if (siswa.pilihan === "1") {
    //     result.ceketos[0].count += 1;
    //   } else if (siswa.pilihan === "2") {
    //     result.ceketos[1].count += 1;
    //   } else if (siswa.pilihan === "3") {
    //     result.ceketos[2].count += 1;
    //   }
    // });

    result.ceketos[0].persen = (result.ceketos[0].count / countAll) * 100;
    result.ceketos[1].persen = (result.ceketos[1].count / countAll) * 100;
    result.ceketos[2].persen = (result.ceketos[2].count / countAll) * 100;
    result.golput.persen = (result.golput.count / countAll) * 100;

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { msg: "Gagal mengambil data hasil pemilihan", err: error },
      { status: 500 }
    );
  }
}
