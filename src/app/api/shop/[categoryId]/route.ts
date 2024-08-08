import { initSupabase } from "../../../../lib/supabase/supabaseClient";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const categoryId = params.id;

    if (!categoryId) {
      return NextResponse.json({ error: "Category parameter is missing" });
    }

    const supabase = initSupabase();
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("category_id", categoryId);

    if (error) {
      console.error("Error fetching products:", error);
      return NextResponse.json({ error: "Error fetching products" });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Unexpected error in the API route:", error);
    return NextResponse.json({ error: "Unexpected error in the API route" });
  }
}
