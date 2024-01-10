import Image from "next/image";
import facebook from "../../public/assets/Facebook-Icon.svg";
import instagram from "../../public/assets/Instagram-Icon.svg";
import yelp from "../../public/assets/Yelp-Icon.svg";

const Footer = () => {
  return (
    <>
      <div className="flex justify-evenly bg-rose-50 py-20">
        <div>
          <h3 className="text-3xl font-light">Address</h3>
          <p className="pt-4">503 Broadway Penthouse</p>
          <p>New York</p>
        </div>
        <div>
          <h3 className="text-3xl font-light">Hours</h3>
          <div className="flex gap-1 pt-4">
            <p className="font-bold">Monday - Friday:</p>
            <p>9am - 7pm</p>
          </div>
          <div className="flex gap-1 ">
            <p className="font-bold">Saturday - Sunday:</p>
            <p>10am - 5pm</p>
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-light">Social</h3>
          <div className="flex gap-2 pt-4">
            <Image
              className="max-w-[120px] min-w-[50px]"
              src={facebook}
              alt="Facebook Logo"
            />
            <Image
              className="max-w-[120px] min-w-[50px]"
              src={instagram}
              alt="Instagram Logo"
            />
            <Image
              className="max-w-[120px] min-w-[50px]"
              src={yelp}
              alt="Yelp Logo"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
