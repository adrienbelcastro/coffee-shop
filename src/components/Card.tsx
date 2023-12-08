import beans from "../../public/assets/coffeebeans-hero.png";
import Image from "next/image";

const Card = () => {
  return (
    <>
      <div className="max-h-[550px] max-w-[350px] cursor-pointer transform transition duration-500  hover: hover:scale-110 shadow-lg  rounded-xl shadow-[#00000040] bg-white">
        <Image
          className="min-h-[240px] max-h-[350px] max-w-[250px] min-w-[230px] px-20 py-10"
          src={beans}
          alt="Coffee Beans"
        />
        <div className="flex justify-around py-8 bg-rose-50  ">
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
