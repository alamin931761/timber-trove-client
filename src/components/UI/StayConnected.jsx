import assets from "@/assets";
import Image from "next/image";

const StayConnected = () => {
  return (
    <div className="h-[370px] grid grid-cols-2 bg-aqua-spring relative">
      <div>hello</div>

      <Image
        src={assets.images.stayConnected}
        height={370}
        width={753}
        alt="stay connected image"
        className="h-[370px]"
      />
    </div>
  );
};

export default StayConnected;
