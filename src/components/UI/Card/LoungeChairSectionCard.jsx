import { MochiyPopOne, RobotoSlab } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";

const LoungeChairSectionCard = ({ data }) => {
  const { vectorImage, image } = data;
  return (
    <div className="mt-[120px] relative">
      {/* Main image of the lounge chair */}
      <Image
        height={368}
        width={404}
        src={image}
        alt="lounge chair"
        className="h-[368px] w-[404px] rounded-lg"
      />

      {/* Overlay content if `vectorImage` is not provided */}
      {vectorImage ? (
        ""
      ) : (
        <div className="absolute bottom-5 left-6 ">
          <p className={`${RobotoSlab.className} font-medium text-liver`}>
            Hot Product
          </p>

          {/* Product title */}
          <h6 className={`${MochiyPopOne.className} text-2xl mb-5 mt-2`}>
            Lounge Chair
          </h6>

          {/* Link to shop now */}
          <Link
            href="/"
            className={`${RobotoSlab.className} font-medium text-liver`}
          >
            Shop now
          </Link>
        </div>
      )}
    </div>
  );
};

export default LoungeChairSectionCard;
