import { initSupabase } from "../../../../lib/supabase/supabaseClient";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { categoryId: string } }
) {
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

    // if (error) {
    //   console.error("Error fetching products:", error.message);
    //   return NextResponse.json(
    //     { error: "Error fetching products" },
    //     { status: 500 }
    //   );
    // }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    // console.error("Unexpected error in the API route:", error);
    // return NextResponse.json(
    //   { error: "Unexpected error in the API route" },
    //   { status: 500 }
    // );
  }
}

// export async function GET(
//   request: Request,
//   { params }: { params: { categoryId: string } }
// ) {
//   return new NextResponse(`Category ID: ${params.categoryId}`);
// }
