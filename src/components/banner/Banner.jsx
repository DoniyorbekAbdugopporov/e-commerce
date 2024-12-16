import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="h-[532px] grid grid-cols-2">
      <div className="bg-hero2 bg-center bg-no-repeat bg-cover"></div>
      <div className="flex items-center  bg-[#F3F5F7]">
        <div className="pl-[63px] max-w-[500px] text-[#141718] flex flex-col gap-4">
          <h3 className="text-blue-600 font-bold text-base">
            SALE UP TO 35% OFF
          </h3>
          <h1 className="text-5xl font-medium">
            HUNDREDS of <br /> New lower prices!
          </h1>
          <p className="mt-2 mb-5 text-lg">Hurry up!!! Winter is coming!</p>
          <Link className="flex gap-1 items-center border-b-2 border-black w-[96px] pt-10" to={"/"}>
            <span className="font-medium">Shop Now</span>
            <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
