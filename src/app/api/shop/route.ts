import { initSupabase } from "../../../lib/supabase/supabaseClient";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  try {
    const supabase = initSupabase();
    const { data, error } = await supabase.from("categories").select("*");

    if (error) {
      console.error("Error fetching products:", error);
      return new Response("Error fetching products", { status: 500 });
    }

    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error("Unexpected error in the API route:", error);
    return new Response("Unexpected error in the API route", { status: 500 });
  }
};
