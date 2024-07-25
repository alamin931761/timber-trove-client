import { MochiyPopOne, poppins } from "@/app/fonts";
import Image from "next/image";
import { IoMdStar } from "react-icons/io";

const SofaCard = ({ data }) => {
  const { image, name, price, rating, hot = false, discount = false } = data;

  return (
    <div>
      {/* Container for the sofa image and labels */}
      <div className={`${hot ? "mb-[50px]" : "mb-10"} relative`}>
        <Image
          width={hot || discount ? 306 : 333}
          height={333}
          src={image}
          alt="sofa1"
          className="rounded-[10px] h-[330px] w-[333px] relative"
        />

        <div>
          {/* Hot label, displayed if `hot` is true */}
          {hot ? (
            <p
              className={`absolute top-3 left-[15px] ${MochiyPopOne.className} bg-blaze-orange text-white rounded-md text-[10px] px-3 py-1`}
            >
              Hot
            </p>
          ) : (
            ""
          )}

          {/* Discount label, displayed if `discount` is true */}
          {discount ? (
            <p
              className={`absolute top-3 right-[15px]  ${MochiyPopOne.className} bg-red-orange text-white rounded-md text-[10px] px-3 py-1`}
            >
              -10%
            </p>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* Sofa details: name, price, and rating */}
      <div className={`${poppins.className} text-[17px]`}>
        {/* Sofa name */}
        <h6 className="font-semibold text-[#373737]">{name}</h6>
        <div className="font-medium flex text-[#454545]">
          {/* Price */}
          <p>${price}</p>

          <p className="ml-[30px] mr-[37px] text-[#454545]">|</p>
          {/* Rating with star icon */}
          <p>
            {rating.toFixed(1)}
            <IoMdStar className="inline text-golden-dream mb-1 ml-[7px]" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default SofaCard;
