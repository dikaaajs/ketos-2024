import connectDB from "@/libs/connectDB";
import { NextResponse } from "next/server";

export async function GET() {
    
    try {
        await connectDB();
        return NextResponse.json({ msg: "Hello world!" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ err: error }, { status: 500 });
    }

}