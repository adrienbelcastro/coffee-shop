import Image from "next/image";
import logo from "../../assets/coffee-beans-logo-and-footer.svg";
import Link from "../../node_modules/next/link";

const header = () => {
  return (
    <>
      {" "}
      <div className="w-full flex bg-rose-50 py-4 px-4">
        <div className="flex ml-2 mt-4 ">
          <div className="flex justify-between">
            <Image className="h-auto max-w-full" src={logo} alt="Nitro Logo" />

            <h1 className="text-6xl font-extralight">nitro</h1>
            <ul className="flex items-end">
              <li>
                <Link href="/about">
                  <h3 className="px-5 text-xl">ABOUT</h3>
                </Link>
              </li>
              <li>
                <Link href="/menu">
                  <h3 className="px-5 text-xl">MENU</h3>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <h3 className="px-5 text-xl">SHOP NOW</h3>
                </Link>
              </li>
            </ul>
            <ul className=" flex items-end">
              <li>
                <Link href="/">
                  <h3 className="px-5 text-xl ">SIGN UP</h3>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <h3 className="px-5 text-xl">LOG IN</h3>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default header;
