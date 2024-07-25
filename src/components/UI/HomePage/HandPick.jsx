import { MochiyPopOne } from "@/app/fonts";
import assets from "@/assets";
import SofaCard from "@/components/UI/Card/SofaCard";
import Image from "next/image";

const HandPick = () => {
  // Data for hand-picked sofas
  const handPickData = [
    {
      _id: 4,
      image: assets.images.sofa1,
      name: "Wooden  sofa Set",
      price: 39.99,
      rating: 5.0,
      hot: false,
    },
    {
      _id: 5,
      image: assets.images.sofa2,
      name: "L-SHAPE SOFA-PARIS",
      price: 39.99,
      rating: 5.0,
      hot: false,
    },
    {
      _id: 6,
      image: assets.images.sofa4,
      name: "L-SHAPE SOFA-PARIS",
      price: 39.99,
      rating: 5.0,
      hot: false,
    },
    {
      _id: 7,
      image: assets.images.sofa5,
      name: "L-SHAPE chair",
      price: 39.99,
      rating: 5.0,
      hot: false,
    },
  ];

  return (
    <div className="mb-[200px]">
      {/* Section title */}
      <h2
        className={`${MochiyPopOne.className} text-[30px] text-center mb-[93px] mt-[100px]`}
      >
        Hand Pick
      </h2>

      {/* Grid layout for sofas and image */}
      <div className="grid lg:grid-cols-4 grid-cols-1 justify-items-center gap-y-16">
        {/* First column with two SofaCards */}
        <div className="col-span-1 flex flex-col gap-16">
          {handPickData.slice(0, 2).map((data) => (
            <SofaCard key={data._id} data={data} />
          ))}
        </div>

        {/* Center image column */}
        <div className="flex items-center justify-center col-span-1 lg:col-span-2">
          <Image
            src={assets.images.sofa3}
            width={534}
            height={461}
            alt="sofa3"
          />
        </div>

        {/* Third column with two SofaCards */}
        <div className="col-span-1 flex flex-col gap-16">
          {handPickData.slice(2, 4).map((data) => (
            <SofaCard key={data._id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HandPick;
