import { initSupabase } from "../../../../lib/supabase/supabaseClient";
import { NextApiRequest, NextApiResponse } from "next";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log(req);
    const categoryId = res.params.categoryId;

    if (!categoryId) {
      return res.status(400).json({ error: "Category parameter is missing" });
    }

    const supabase = initSupabase();
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("category_id", categoryId);

    if (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({ error: "Error fetching products" });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error("Unexpected error in the API route:", error);
    return res.status(500).json({ error: "Unexpected error in the API route" });
  }
}
