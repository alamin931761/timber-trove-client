import { inter, MochiyPopOne } from "@/app/fonts";
import assets from "@/assets";
import Image from "next/image";

const BestDeals = () => {
  return (
    <div className="bg-pale-sky lg:h-[782px] h-full relative max-w-[1536px] mx-auto">
      {/* Main grid container for the best deals section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full relative z-50 xl:px-[60px] lg:px-[30px] px-4 text-white">
        {/* Left side content */}
        <div
          className={`${MochiyPopOne.className} grid lg:grid-cols-2 grid-cols-1 lg:p-10`}
        >
          <div className="flex flex-col justify-center">
            <div>
              {/* Title and price */}
              <h4 className="text-[30px] mb-[20px]">Best Deals</h4>
              <p className="text-xl">$77.00</p>
            </div>

            <div className="mt-[86px]">
              {/* Offer message */}
              <p className="text-xl mb-[27px]">
                Grab your best
                <br />
                offers!!
              </p>

              {/* Shop now button */}
              <button className="rounded-lg px-[30px] py-[13px] bg-white hover:bg-black text-black hover:text-white transition ease-linear duration-500">
                Shop now
              </button>
            </div>
          </div>

          {/* Countdown timer */}
          <div className="flex lg:justify-center items-center lg:gap-[15px] gap-2 mt-10 lg:mt-0">
            <div className="w-fit text-center">
              <p
                className={`${inter.className} font-medium bg-pumpkin-orange text-[34px] rounded-lg text-white mb-4 w-[67px] h-[64px] flex justify-center items-center`}
              >
                10
              </p>
              <p className="uppercase">days</p>
            </div>

            <div className="w-fit text-center">
              <p
                className={`${inter.className} font-medium bg-pumpkin-orange text-[34px] w-[67px] h-[64px] flex justify-center items-center rounded-lg text-white mb-4`}
              >
                11
              </p>
              <p className="uppercase">hour</p>
            </div>

            <div className="w-fit text-center">
              <p
                className={`${inter.className} font-medium bg-pumpkin-orange text-[34px] w-[67px] h-[64px] flex justify-center items-center rounded-lg text-white mb-4`}
              >
                13
              </p>
              <p className="uppercase">mins</p>
            </div>

            <div className="w-fit text-center">
              <p
                className={`${inter.className} font-medium bg-pumpkin-orange text-[34px] w-[67px] h-[64px] flex justify-center items-center rounded-lg text-white mb-4`}
              >
                20
              </p>
              <p className="uppercase">secs</p>
            </div>
          </div>
        </div>

        {/* Right side images */}
        <div className="grid grid-cols-2 items-end mb-2">
          <Image
            src={assets.images.bestDeals1}
            height={626}
            width={466}
            alt="best deals1"
            className=""
          />
          <Image
            src={assets.images.bestDeals2}
            width={481}
            height={543}
            alt="best deals2"
            className=""
          />
        </div>
      </div>

      {/* Bottom background bar */}
      <div className="bg-silver h-[111px] absolute bottom-0 w-full z-10"></div>
    </div>
  );
};

export default BestDeals;
