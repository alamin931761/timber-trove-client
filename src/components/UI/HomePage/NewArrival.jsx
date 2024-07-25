import assets from "@/assets";
import SofaCard from "@/components/UI/Card/SofaCard";
import SectionTitle from "@/components/UI/HomePage/SectionTitle";

const NewArrival = () => {
  const newArrivalData = [
    {
      _id: 14,
      image: assets.images.lShapeSofaParis1,
      name: "L-SHAPE SOFA-PARIS",
      price: "39.99",
      rating: 5,
      hot: true,
    },
    {
      _id: 15,
      image: assets.images.lShapeSofaParis2,
      name: "L-SHAPE SOFA-PARIS",
      price: "39.99",
      rating: 5,
      hot: true,
    },
    {
      _id: 16,
      image: assets.images.lShapeSofaParis3,
      name: "L-SHAPE SOFA-PARIS",
      price: "39.99",
      rating: 5,
      hot: true,
    },
    {
      _id: 17,
      image: assets.images.lShapeSofaParis4,
      name: "L-SHAPE SOFA-PARIS",
      price: "39.99",
      rating: 5,
      hot: true,
      discount: true,
    },
    {
      _id: 18,
      image: assets.images.lShapeSofaParis5,
      name: "L-SHAPE SOFA-PARIS",
      price: "39.99",
      rating: 5,
      hot: true,
    },
    {
      _id: 19,
      image: assets.images.lShapeSofaParis6,
      name: "L-SHAPE SOFA-PARIS",
      price: "39.99",
      rating: 5,
      hot: true,
      discount: true,
    },
    {
      _id: 20,
      image: assets.images.lShapeSofaParis7,
      name: "L-SHAPE SOFA-PARIS",
      price: "39.99",
      rating: 5,
    },
    {
      _id: 21,
      image: assets.images.lShapeSofaParis8,
      name: "L-SHAPE SOFA-PARIS",
      price: "39.99",
      rating: 5,
      hot: true,
      discount: true,
    },
  ];

  return (
    <div>
      {/* section title */}
      <SectionTitle title="new arrival" />

      {/* Grid container for sofa cards */}
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center mb-28 mt-[98px] gap-x-10 gap-y-[112px]">
        {newArrivalData.map((data) => (
          <SofaCard key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
