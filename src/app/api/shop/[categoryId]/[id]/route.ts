import { NextApiRequest, NextApiResponse } from "next";
import { initSupabase } from "../../../../../lib/supabase/supabaseClient";

interface Product {
  productId: number;
  name: string;
  description: string;
}

interface CustomizationOption {
  id: number;
  name: string;
  category: string;
}

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const productId = res.params.id;

    if (!productId) {
      return new Response("Category parameter is missing", { status: 400 });
    }

    const supabase = initSupabase();
    const { data: productData, error: productError } = await supabase
      .from<Product>("products")
      .select("*")
      .eq("product_id", parseInt(productId))
      .single();

    const { data: prices, error: pricesError } = await supabase
      .from("prices")
      .select("*")
      .eq("product_id", productId);

    const { data: sizes, error: sizesError } = await supabase
      .from("sizes")
      .select("*")
      .eq("product_id", productId);

    const { data: customizationOptions, error: optionsError } = await supabase
      .from("product_customization_options")
      .select("*")
      .eq("product_id", productId);

    if (productError || pricesError || sizesError || optionsError) {
      console.error(
        "Error fetching products:",
        productError || pricesError || sizesError || optionsError
      );
      return new Response("Error fetching products", { status: 500 });
    }

    const groupedCustomizationOptions = customizationOptions.reduce(
      (
        acc: { [category: string]: CustomizationOption[] },
        option: CustomizationOption
      ) => {
        if (!acc[option.category]) {
          acc[option.category] = [];
        }
        acc[option.category].push(option);
        return acc;
      },
      {}
    );

    console.log(groupedCustomizationOptions);

    return new Response(
      JSON.stringify({
        product: productData,
        prices,
        sizes,
        customizationOptions: groupedCustomizationOptions,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error(`Error fetching product details`, error);
    return new Response("Internal Server Error", { status: 500 });
  }
};
