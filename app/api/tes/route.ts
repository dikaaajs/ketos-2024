import connectDB from "@/libs/connectDB";
import { NextResponse } from "next/server";

export async function GET() {
    
    try {
        connectDB();
        return NextResponse.json({ msg: "Hello world!" });
    } catch (error) {
        return NextResponse.json({ err: error });
    }

}