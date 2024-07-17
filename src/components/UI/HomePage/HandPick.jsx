import { mochiy_pop_one } from "@/app/fonts";
import assets from "@/assets";
import HandPickCard from "@/components/UI/HandPickCard";
import Image from "next/image";

const HandPick = () => {
  const handPickData = [
    {
      _id: 1,
      image: assets.images.sofa1,
      name: "Wooden  sofa Set",
      price: 39.99,
      rating: 5.0,
    },
    {
      _id: 2,
      image: assets.images.sofa2,
      name: "L-SHAPE SOFA-PARIS",
      price: 39.99,
      rating: 5.0,
    },
    {
      _id: 3,
      image: assets.images.sofa4,
      name: "L-SHAPE SOFA-PARIS",
      price: 39.99,
      rating: 5.0,
    },
    {
      _id: 4,
      image: assets.images.sofa5,
      name: "L-SHAPE chair",
      price: 39.99,
      rating: 5.0,
    },
  ];

  return (
    <div>
      <h2 className={`${mochiy_pop_one.className} text-[30px] text-center`}>
        Hand Pick
      </h2>

      <div className="grid grid-cols-4 justify-items-center">
        <div className="border-2 border-red-orange col-span-1">
          {handPickData.slice(0, 2).map((data) => (
            <HandPickCard key={data._id} data={data} />
          ))}
        </div>

        <div className="flex items-center justify-center border-2 border-artyClick-ocean-green col-span-2">
          <Image
            src={assets.images.sofa3}
            width={534}
            height={461}
            alt="sofa3"
          />
        </div>

        <div className="border-2 border-red-orange col-span-1">
          {handPickData.slice(2, 4).map((data) => (
            <HandPickCard key={data._id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HandPick;
