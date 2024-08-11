import beans from "../../public/assets/coffeebeans-hero.png";
import Image from "next/image";
import API_URL from "./../../utils";

import Link from "../../node_modules/next/link";

interface Data {
  product_id: string;
  category_id: Number;
  name: string;
}

async function fetchProducts() {
  const result = await fetch(`${API_URL}/api/products`);

  if (!result) {
    throw new Error("Error fetching data on the client:");
  }

  return result.json();
}
export default async function Card() {
  if (!API_URL) {
    return null;
  }

  const data = await fetchProducts();

  const itemShowcase = data.slice(0, 3);

  return (
    <>
      {itemShowcase.map((product: Data) => (
        <Link
          key={product.product_id}
          href={`/shop/${product.category_id}/${product.product_id}`}
        >
          <div className="max-h-[550px] max-w-[350px] cursor-pointer transform transition duration-500  hover: hover:scale-110 shadow-lg  rounded-xl shadow-[#00000040] bg-white">
            <Image
              className="min-h-[240px] max-h-[350px] max-w-[250px] min-w-[230px] px-20 py-10"
              src={beans}
              alt="Coffee Beans"
            />
            <div className="flex justify-around py-8 bg-rose-50  ">
              <h2>{product.name}</h2>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
