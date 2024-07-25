import assets from "@/assets";
import LoungeChairSectionCard from "../Card/LoungeChairSectionCard";

const LoungeChairSection = () => {
  const loungeChairData = [
    {
      _id: 11,
      image: assets.images.chair5,
      vectorImage: false,
    },
    {
      _id: 12,
      image: assets.images.chair6,
      vectorImage: true,
    },
    {
      _id: 13,
      image: assets.images.chair7,
      vectorImage: false,
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-20 mb-[90px] mt-[118px] justify-items-center">
      {loungeChairData.map((data) => (
        <LoungeChairSectionCard key={data._id} data={data} />
      ))}
    </div>
  );
};

export default LoungeChairSection;
