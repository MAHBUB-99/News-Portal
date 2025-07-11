import { NextResponse } from "next/server";
import { getAllNews } from "@/lib/news-data";

export async function GET(){
    const data = await getAllNews();
    return NextResponse.json(data);
}