import { initSupabase } from "../../../../../lib/supabase/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

interface Product {
  productId: number;
  name: string;
  description: string;
  sizes_needed: Boolean;
}

interface ProductOptions {
  product_id: number;
  option_id: number;
}

interface Option {
  option_id: number;
  option_name: string;
  description: string;
}

interface Choice {
  choice_id: number;
  choice_name: string;
}

interface Price {
  price: number;
}

export async function GET(
  request: NextRequest,
  { params }: { params: { categoryId: string; id: string } }
) {
  try {
    const { categoryId, id } = params;

    if (!id || !categoryId) {
      return new Response("Category parameter is missing", { status: 400 });
    }

    const supabase = initSupabase();
    const { data: productData, error: productError } = await supabase
      .from("products")
      .select("product_id, name, description, sizes_needed")
      .eq("product_id", parseInt(id))
      .eq("category_id", parseInt(categoryId))
      .single();

    const { data: optionData, error: optionsError } = await supabase
      .from("options")
      .select("*");

    const { data: productOptionsData, error: productOptionsError } =
      await supabase
        .from("product_options")
        .select("*")
        .eq("product_id", parseInt(id));

    if (productError || optionsError || productOptionsError) {
      console.error("Error fetching products:", productError || optionsError);
      return new Response("Error fetching products", { status: 500 });
    }

    const optionsWithChoice = await Promise.all(
      productOptionsData.map(async (productOption: ProductOptions) => {
        const option = optionData.find(
          (opt: Option) => opt.option_id === productOption.option_id
        );

        if (!option) {
          console.error(`Option with ID ${productOption.option_id} not found`);
          return null;
        }

        const { data: choices, error: choicesError } = await supabase
          .from("options_choices")
          .select("choice_id, choice_name")
          .eq("option_id", option.option_id);

        if (choicesError) {
          console.error("Error fetching choices:", choicesError);
          return [];
        }

        const choicesWithPrices = await Promise.all(
          choices.map(async (choice: Choice) => {
            const { data: prices, error: pricesError } = await supabase
              .from("prices")
              .select("price")
              .eq("option_id", option.option_id)
              .eq("choice_id", choice.choice_id)
              .eq("product_id", parseInt(id));

            if (pricesError) {
              console.error("Error fetching prices:", pricesError);
              return [];
            }

            return {
              ...choice,
              prices,
            };
          })
        );

        return {
          ...option,
          choices: choicesWithPrices,
        };
      })
    );

    console.log(productData.sizes_needed);

    const transformedProductData: Product = {
      productId: productData.product_id,
      name: productData.name,
      description: productData.description,
      sizes_needed: productData.sizes_needed,
    };

    const responseData: ProductDataResponse = {
      product: transformedProductData,
      options: optionsWithChoice,
    };

    return NextResponse.json(responseData, { status: 200 });
  } catch (error) {
    console.error(`Error fetching product details`, error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

interface ProductDataResponse {
  product: Product;
  options: OptionWithChoices[];
}

interface OptionWithChoices extends Option {
  choices: ChoiceWithPrices[];
}

interface ChoiceWithPrices extends Choice {
  prices: Price[];
}

// interface ErrorResponse {
//   error: string;
// }
