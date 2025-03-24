import { NextResponse } from "next/server";

export async function GET() {
  const appId = process.env.EXCHANGE_API_APP_ID;

  if (!appId) {
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(
      `https://openexchangerates.org/api/latest.json?app_id=${appId}`,
      {
        next: { revalidate: 3600 },
      }
    );

    const data = await res.json();

    if (!data.rates) {
      throw new Error("Invalid API response format");
    }

    return NextResponse.json({
      base: data.base,
      rates: data.rates,
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      {
        error: "Currency service unavailable",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 502 }
    );
  }
}

export const dynamic = "force-dynamic";
