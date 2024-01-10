import { NextApiRequest, NextApiResponse } from "next";
import { initSupabase } from "../../../lib/supabase/supabaseClient";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const supabase = initSupabase();
    const { data, error } = await supabase.from("categories").select("*");

    if (error) {
      console.error("Error fetching products:", error);
      return new Response("Error fetching products", { status: 500 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error("Unexpected error in the API route:", error);
    return new Response("Unexpected error in the API route", { status: 500 });
  }
};
