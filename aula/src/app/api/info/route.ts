import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    message: "API funcionando!",
    status: "success",
    timestamp: new Date().toISOString(),
  };

  return NextResponse.json(data, { status: 200 });
}
