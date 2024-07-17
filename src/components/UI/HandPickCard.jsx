import { poppins } from "@/app/fonts";
import Image from "next/image";
import { IoMdStar } from "react-icons/io";

const HandPickCard = ({ data }) => {
  const { image, name, price, rating } = data;

  return (
    <div>
      <Image
        width={333}
        height={330}
        src={image}
        alt="sofa1"
        className="rounded-[10px] h-[330px] w-[333px] mb-10"
      />

      <div className={`${poppins.className} text-[17px]`}>
        <h6 className="font-semibold">{name}</h6>
        <div className="font-medium flex">
          <p>${price}</p>
          <p className="ml-[30px] mr-[37px]">|</p>
          <p>
            {rating.toFixed(1)}
            <IoMdStar className="inline text-golden-dream mb-1 ml-[7px]" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default HandPickCard;
