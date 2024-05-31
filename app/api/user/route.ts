import connectDB from "@/libs/connectDB";
import { NextResponse } from "next/server";
import User from "@/models/User";

export async function GET(req: any) {
  await connectDB();
  const username = req.nextUrl.searchParams.get("u");
  const password = req.nextUrl.searchParams.get("p");

  try {
    if (username) {
      const res = await User.findOne({ username });
      if (res == null) {
        return NextResponse.json({msg: "Username atau passowrd salah!"}, { status: 401 });
      };
      return NextResponse.json(res, { status: 200 });
    } else if (password) {
      const res = await User.findOne({ password });
      if (res == null) {
        return NextResponse.json({msg: "Username atau password salah!"}, { status: 401 });
      };
      return NextResponse.json(res, { status: 200 });
    } else {
      const res = "Username dan password harus diisi!"; // await User.find();
      return NextResponse.json(res, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json(
      { msg: "Gagal mengambil data User", err: error }, { status: 500 }
    );
  }

}