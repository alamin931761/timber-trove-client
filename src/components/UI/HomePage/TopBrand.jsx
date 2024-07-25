import assets from "@/assets";
import SectionTitle from "@/components/UI/HomePage/SectionTitle";
import Image from "next/image";

const TopBrand = () => {
  return (
    <div>
      {/* Section title for the top brand section */}
      <SectionTitle title="top brand" />

      {/* Grid layout to display brand images */}
      <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 justify-items-center mt-[131px] mb-[156px] gap-5">
        <Image
          src={assets.images.partex}
          width={136}
          height={93}
          alt="partex"
        />
        <Image src={assets.images.otobi} width={135} height={90} alt="otobi" />
        <Image src={assets.images.bloon} width={167} height={81} alt="bloon" />
        <Image src={assets.images.regal} width={132} height={91} alt="regal" />
        <Image src={assets.images.hatil} width={104} height={92} alt="hatil" />
      </div>
    </div>
  );
};

export default TopBrand;
