import Image from "next/image";
import beans from "../../public/assets/coffeebeans-hero.png";
import Header from "@/components/Header";
import Card from "@/components/card";
import Footer from "@/components/footer";
import Link from "../../node_modules/next/link";

const Home = () => {
  return (
    <>
      <Header />
      <div className="w-full flex justify-around bg-rose-50">
        <div className="self-center">
          <h1 className="text-6xl font-light pb-6">Nitro Coffee</h1>
          <p className="text-lg max-w-sm">
            Coffee is a brewed drink prepared from roasted coffee beans, the
            seeds of berries from certain Coffee species
          </p>
          <Link href="/menu">
            <button className="mt-6 p-4 bg-blue-400">SHOP NOW</button>
          </Link>
        </div>
        <div className="py-8">
          <Image src={beans} alt="Coffee Beans" />
        </div>
      </div>
      <div>
        <h2 className="py-20 text-6xl font-light text-center">Our Products</h2>
        <div className="flex justify-evenly">
          <Card />
        </div>
        <div className="flex justify-center">
          <Link href="/shop">
            <button className="mt-8 mb-10 px-10 py-4 bg-blue-400">
              VIEW ALL
            </button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center bg-white py-40">
        <h1 className="w-4/5 text-5xl text-center p-8 text-white  bg-gray-800">
          Get 20% off your first order with code: FirstNitro
        </h1>
      </div>
      <Footer />
    </>
  );
};

export default Home;
