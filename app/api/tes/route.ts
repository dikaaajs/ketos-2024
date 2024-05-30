import connectDB from "@/libs/connectDB";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    return NextResponse.json({ msg: "aplikasi berjalan, database connected" });
  } catch (error) {
    return NextResponse.json({ err: error });
  }
}
