import { createClient } from "@supabase/supabase-js"
import { NextResponse } from "next/server";

export async function GET(request) {
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  const { data } = await supabase.from("shareprice").select();

  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "no-cache",
    }
  });
}