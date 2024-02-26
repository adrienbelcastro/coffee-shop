import Image from "next/image";
import logo from "../../public/assets/coffee-beans-logo-and-footer.svg";
import Link from "../../node_modules/next/link";

const Header = () => {
  return (
    <>
      <div className="w-full flex bg-rose-50 py-8 px-4">
        <div className="flex ml-2 mt-4 ">
          <div className="flex justify-between">
            <Link href="/">
              <div className="flex justify-between">
                <Image
                  className="h-auto max-w-[120px] min-w-[50px]"
                  src={logo}
                  alt="Nitro Logo"
                />

                <h1 className="text-6xl font-extralight">nitro</h1>
              </div>
            </Link>
            <ul className="flex items-end">
              <li>
                <Link href="/about">
                  <h3 className="px-5 text-xl">OUR STORY</h3>
                </Link>
              </li>
              <li>
                <Link href="/menu">
                  <h3 className="px-5 text-xl">MENU</h3>
                </Link>
              </li>
              <li>
                <Link href="/shop">
                  <h3 className="px-5 text-xl">SHOP NOW</h3>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
