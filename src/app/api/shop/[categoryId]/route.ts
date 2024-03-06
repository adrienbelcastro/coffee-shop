import { initSupabase } from "../../../../lib/supabase/supabaseClient";
import { NextApiRequest, NextApiResponse } from "next";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    console.log(req);
    const categoryId = res.params.categoryId;

    if (!categoryId) {
      return new Response("Category parameter is missing", { status: 400 });
    }

    const supabase = initSupabase();
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("category_id", categoryId);

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
