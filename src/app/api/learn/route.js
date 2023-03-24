import { createClient } from "@supabase/supabase-js"
import { NextResponse } from "next/server";

export async function GET(request) {
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  const { data } = await supabase.from("shareprice").select("*", { cache: false });

  const headers = {
    "Cache-Control": "max-age=0, s-maxage=86400", // set max-age to 0 to prevent caching by the browser and s-maxage to 1 day for caching on the server side
    "Content-Type": "application/json",
  };

  return NextResponse.json((data), { headers });
}