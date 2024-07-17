import { poppins } from "@/app/fonts";
import assets from "@/assets";
import Image from "next/image";

const LuxuryKitchen = () => {
  return (
    <div className="relative">
      <Image
        src={assets.images.luxuryKitchen}
        width={1500}
        height={806}
        alt="luxury kitchen image"
      />

      <div
        className={`${poppins.className} font-bold absolute top-0 flex flex-col justify-center items-center w-full h-full`}
      >
        <button
          className={`btn bg-pumpkin-orange hover:bg-black text-white rounded-lg p-[10px] w-[374px] h-[70px] text-[30px] capitalize border-none`}
        >
          Shop the look
        </button>

        <div className="relative">
          <Image
            src={assets.images.targetIcon}
            alt="target icon"
            className="absolute left-[90px] -top-3"
          />

          <Image
            src={assets.images.targetIcon}
            alt="target icon"
            className="absolute -left-[170px] -bottom-0"
          />

          <Image
            src={assets.images.targetIcon}
            alt="target icon"
            className="absolute -right-[90px] bottom-[40px]"
          />

          <Image
            src={assets.images.targetIcon}
            alt="target icon"
            className="absolute right-[10px] -bottom-[170px]"
          />
          <h1 className="text-white text-[190px]">Kitchen</h1>
        </div>
        <h2 className="text-[30px] text-center text-white">
          Creating your beautiful home should not <br />
          Cost the World!
        </h2>
      </div>
    </div>
  );
};

export default LuxuryKitchen;
