import { MochiyPopOne } from "@/app/fonts";
import Image from "next/image";

const HeroSectionCard = ({ data }) => {
  const { name, originalPrice, discountedPrice, image } = data;
  return (
    <div
      className={`h-[260px] w-full max-w-[372px] rounded-lg shadow-lg ${MochiyPopOne.className} flex flex-col items-center relative bg-white`}
    >
      {/* Image of the product */}
      <div className="absolute -top-[28%]">
        <Image
          src={image}
          alt="chair"
          height={198}
          width={198}
          className="h-[198px] w-[198px]"
        />
      </div>

      {/* Product details */}
      <div className="text-center mt-[140px]">
        {/* Product name */}
        <h6 className="text-xl mb-[10px]">{name}</h6>

        {/* Price information */}
        <p className="text-sm text-pastel-orange">
          <span className="text-pale-slate line-through mr-1">
            {/* Display discounted price if available */}
            {discountedPrice ? `$${discountedPrice.toFixed(2)}` : ""}
          </span>{" "}
          ${originalPrice}
        </p>
      </div>
    </div>
  );
};

export default HeroSectionCard;
