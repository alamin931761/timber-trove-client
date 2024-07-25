import { MochiyPopOne } from "@/app/fonts";

const SectionTitle = ({ title }) => {
  return (
    <div className="flex flex-col items-center">
      {/* Title with custom font and styling */}
      <h3 className={`${MochiyPopOne.className} text-[30px] capitalize`}>
        {title}
      </h3>

      {/* Decorative line under the title */}
      <div className="bg-blaze-orange w-[61px] h-[3px] mt-[19px]"></div>
    </div>
  );
};

export default SectionTitle;
