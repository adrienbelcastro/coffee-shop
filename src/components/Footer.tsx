import Image from "next/image";
import facebook from "../../public/assets/Facebook-Icon.svg";
import instagram from "../../public/assets/Instagram-Icon.svg";
import yelp from "../../public/assets/Yelp-Icon.svg";

const Footer = () => {
  return (
    <>
      <div className="flex justify-evenly">
        <div>
          <h3>Address</h3>
          <p>503 Broadway Penthouse</p>
          <p>New York</p>
        </div>
        <div>
          <h3>Hours</h3>
          <p>503 Broadway Penthouse</p>
          <p>New York</p>
        </div>
        <div>
          <h3>Social</h3>
          <div className="flex gap-2">
            <Image src={facebook} />
            <Image src={instagram} />
            <Image src={yelp} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
``;
