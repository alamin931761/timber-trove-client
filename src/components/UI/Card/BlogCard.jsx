import { inter, MochiyPopOne, RobotoSlab } from "@/app/fonts";
import Image from "next/image";

const BlogCard = ({ blog }) => {
  const { image, title, subtitle, description } = blog;
  return (
    <div>
      <div className="relative mb-8">
        {/* Blog image */}
        <Image
          src={image}
          width={418}
          height={267}
          alt="blog image"
          className="h-[267px] rounded-lg"
        />
        {/* Date overlay on the image */}
        <div
          className={`absolute top-[34px] left-[25px] ${inter.className} bg-white px-[18px] py-4 rounded-lg text-center`}
        >
          <p>5</p>
          <p>June</p>
        </div>
      </div>

      {/* Blog title */}
      <p
        className={`${RobotoSlab.className} text-pumpkin-orange font-medium mb-[11px]`}
      >
        {title}
      </p>

      {/* Blog subtitle */}
      <h3 className={`${MochiyPopOne.className} text-xl mb-[9px]`}>
        {subtitle}
      </h3>

      {/* Blog description */}
      <p
        className={`${RobotoSlab.className} text-mountain-mist mb-8`}
      >{`"${description}"`}</p>

      {/* Read more button */}
      <button
        className={`${MochiyPopOne.className} underline underline-offset-[7px]`}
      >
        Read more
      </button>
    </div>
  );
};

export default BlogCard;
