import { MochiyPopOne } from "@/app/fonts";
import assets from "@/assets";
import Image from "next/image";
import HeroSectionCard from "@/components/UI/Card/HeroSectionCard";

const HeroSection = () => {
  // Data for chair items
  const chairData = [
    {
      _id: 8,
      image: assets.images.chair2,
      name: "Comfy  Chair",
      discountedPrice: 0,
      originalPrice: 30.5,
    },
    {
      _id: 9,
      image: assets.images.chair3,
      name: "Comfy  Chair",
      discountedPrice: 17.5,
      originalPrice: 30.5,
    },
    {
      _id: 10,
      image: assets.images.chair4,
      name: "VibeLiving  Chair",
      discountedPrice: 17.5,
      originalPrice: 30.5,
    },
  ];

  return (
    <div className="relative bg-aqua-squeeze w-full max-w-[1536px] mx-auto">
      {/* Main grid container for the hero section */}
      <div
        className={`grid grid-cols-2 w-full h-[400px] md:h-[700px] lg:h-[871px] ${MochiyPopOne.className} relative`}
      >
        {/* Left side content */}
        <div className="relative">
          <Image
            src={assets.images.treeBranch}
            width={767}
            height={339}
            alt="tree branch"
            className="rotate-[-53deg] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 me-5"
          />

          {/* Large text on the left */}
          <div className="xl:text-[192px] lg:text-[162px] md:text-[112px] sm:text-[98px] text-[48px] text-wax-flower absolute z-10 flex justify-end items-center h-full w-full">
            <div className="relative">
              <div className="flex justify-center items-center rotate-90 absolute lg:top-32 lg:-left-[130px] sm:-left-24 sm:top-20 -left-16 top-12">
                <span className="w-10 h-[1px] bg-black"></span>

                <span className="sm:text-sm text-[8px] text-black text-nowrap ml-4">
                  2024 EDITION
                </span>
              </div>
              <h1>New</h1>

              {/* "TimberTrove Furniture" text */}
              <div className="absolute top-3/2 left-[40%] flex items-center">
                <div className="w-[3px] bg-black h-[53px]"></div>

                <div className="sm:text-sm text-[8px] text-black ml-3">
                  <h6>TimberTrove</h6>
                  <h6>Furniture</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side content */}
        <div className="relative">
          {/* "arrivals" text */}
          <h1 className="xl:text-[131px] lg:text-[99px] md:text-[49px] sm:text-[49px] text-[29px] text-pumpkin-orange absolute flex justify-start items-center h-full w-1/2 pt-[80px] sm:pt-[150px] md:pt-48 lg:pt-64">
            arrivals
          </h1>

          {/* "2024" text */}
          <div className="uppercase rotate-90 lg:top-[40%] sm:top-1/2 sm:left-[45%] md:top-[52%] md:left-[40%] lg:left-[60%] top-[48%] left-1/2 transform -translate-x-1/2 absolute">
            <p className="md:text-2xl lg:text-[55px] text-base text-white">
              2024
            </p>
          </div>

          {/* "2024 EDITION" label */}
          <div className="absolute right-0 lg:bottom-[210px] md:bottom-40 sm:bottom-20 bottom-16 rotate-90">
            <div className="flex justify-center items-center">
              <span className="w-10 h-[1px] bg-black"></span>

              <span className="sm:text-sm text-[8px] text-black text-nowrap ml-4">
                2024 EDITION
              </span>
            </div>
          </div>
        </div>

        {/* Centered chair image */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src={assets.images.chair1}
            width={496}
            height={465}
            alt="chair"
          />
        </div>
      </div>

      {/* Cards for chairs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-[27px] gap-y-24 relative lg:absolute lg:-bottom-[170px] w-full xl:px-[60px] lg:px-[30px] px-4 pb-10 justify-items-center">
        {chairData.map((data) => (
          <HeroSectionCard key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
