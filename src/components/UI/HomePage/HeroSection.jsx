import assets from "@/assets";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="h-full bg-aqua-squeeze">
      <div className="flex justify-center relative">
        {/* <Image
          src={assets.images.treeBranch}
          width={767}
          height={339}
          alt="tree branch"
          className="absolute rotate-[45deg] left-0 top-[200px]"
        /> */}

        <Image
          src={assets.images.chair1}
          width={496}
          height={465}
          alt="chair"
        />
      </div>
      {/* <h2 className="text-[131.5px] absolute">arrivals</h2> */}
    </div>
  );
};

export default HeroSection;
