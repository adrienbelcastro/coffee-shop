import beans from "../../assets/coffeebeans-hero.png";
import Image from "next/image";

const Card = () => {
  return (
    <>
      <div className="border-black  ">
        <Image sizes="(max-height: 550px)" src={beans} alt="Coffee Beans" />
        <div className="flex justify-between">
          <div>
            <h2>Coffee Beans</h2>
            <h3>Pack of 3</h3>
          </div>
          <h2>$19</h2>
        </div>
      </div>
    </>
  );
};

export default Card;
