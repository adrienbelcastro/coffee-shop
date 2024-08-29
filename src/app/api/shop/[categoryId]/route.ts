import { NextResponse, NextRequest } from "next/server";
import { initSupabase } from "../../../../lib/supabase/supabaseClient";

export async function GET(
  request: NextRequest,
  { params }: { params: { categoryId: string } }
) {
  console.log("Received request with categoryId:", params.categoryId);
  try {
    const categoryId = params.categoryId;

    if (!categoryId) {
      return NextResponse.json(
        { error: "Category parameter is missing" },
        { status: 400 }
      );
    }

    const supabase = initSupabase();
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("category_id", categoryId);

    if (error) {
      console.error("Error fetching products:", error.message);
      return NextResponse.json(
        { error: "Error fetching products" },
        { status: 500 }
      );
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Unexpected error in the API route:", error);
    return NextResponse.json(
      { error: "Unexpected error in the API route" },
      { status: 500 }
    );
  }
}
