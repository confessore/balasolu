import { NextResponse } from "next/server";
import { quotes } from "@/lib/quotes";

export async function GET(request) {
  const random = Math.floor(Math.random() * quotes.length);
  return NextResponse.json({ quote: quotes[random] }, { status: 200 });
}
