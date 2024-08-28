import { initSupabase } from "../../../../lib/supabase/supabaseClient";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const categoryId = req.query;
  console.log("Received categoryId:", categoryId);
  if (!categoryId || typeof categoryId !== "string") {
    return res
      .status(400)
      .json({ error: "Category parameter is missing or invalid" });
  }

  const supabase = initSupabase();
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category_id", categoryId);

  if (error) {
    console.error("Error fetching products:", error.message);
    return res.status(500).json({ error: "Error fetching products" });
  }

  res.status(200).json(data);
}
