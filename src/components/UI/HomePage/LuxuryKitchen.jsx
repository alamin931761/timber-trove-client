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
        className="w-full"
      />

      <div
        className={`${poppins.className} font-bold absolute top-0 flex flex-col justify-center items-center w-full h-full`}
      >
        <button
          className={`bg-pumpkin-orange hover:bg-white text-white hover:text-black transition ease-linear duration-500 rounded-lg xl:text-[30px] lg:text-2xl sm:text-sm text-xs capitalize xl:px-[87px] xl:py-[22px] lg:px-[80px] lg:py-[16px] md:px-[60px] md:py-[14px] px-[20px] py-[8px] mb-2`}
        >
          Shop the look
        </button>

        <div className="relative">
          {/* 1st */}
          <Image
            src={assets.images.targetIcon}
            alt="target icon"
            width={80}
            height={80}
            className="h-[20px] w-[20px] lg:h-[50px] lg:w-[50px] md:h-[40px] md:w-[40px] absolute xl:left-[110px] xl:top-4 lg:left-[50px] lg:-top-2 md:-top-2 md:left-[35px] -top-2 left-4"
          />
          {/* 2nd */}
          <Image
            src={assets.images.targetIcon}
            alt="target icon"
            width={80}
            height={80}
            className="h-[20px] w-[20px] md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px] absolute 2xl:-left-[150px] 2xl:top-56 xl:-left-16 xl:top-52 lg:-left-32 lg:top-36 md:-left-[92px] md:top-24 top-11 -left-9 border-2"
          />
          {/* 3rd */}
          <Image
            src={assets.images.targetIcon}
            alt="target icon"
            width={80}
            height={80}
            className="h-[20px] w-[20px] md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px] absolute xl:-right-[60px] lg:-right-[70px] md:-right-[50px] xl:bottom-[50px] lg:bottom-[30px] md:bottom-[20px] bottom-[10px] -right-6"
          />
          {/* 4th */}
          <Image
            src={assets.images.targetIcon}
            alt="target icon"
            width={80}
            height={80}
            className="h-[20px] w-[20px] md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px] absolute 2xl:-bottom-[150px] 2xl:right-4 xl:-bottom-[105px] xl:right-[74px] lg:-bottom-[110px] lg:-right-[6px] md:-bottom-[80px] md:-right-1 right-0 -bottom-[40px] "
          />
          <h1 className="text-white xl:text-[190px] lg:text-[120px] md:text-[90px] text-[40px]">
            Kitchen
          </h1>
        </div>
        <h2 className="xl:text-[30px] lg:text-xl text-[8px] text-center text-white">
          Creating your beautiful home should not <br />
          Cost the World!
        </h2>
      </div>
    </div>
  );
};

export default LuxuryKitchen;
