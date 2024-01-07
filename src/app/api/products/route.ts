import { NextApiRequest, NextApiResponse } from "next";
import { initSupabase } from "../../../lib/supabase/supabaseClient";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const supabase = initSupabase();
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    return res.status(500).json({ error: "Error fetching products" });
  }

  return res.status(200).json(data);
};

export default handler;
