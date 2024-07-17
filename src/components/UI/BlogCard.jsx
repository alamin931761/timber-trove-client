import { inter, mochiy_pop_one, roboto_slab } from "@/app/fonts";
import Image from "next/image";

const BlogCard = ({ blog }) => {
  const { image, title, subtitle, description } = blog;
  return (
    <div>
      <div className="relative mb-8">
        <Image
          src={image}
          width={418}
          height={267}
          alt="blog image"
          className="h-[267px] rounded-lg"
        />
        <div
          className={`absolute top-[34px] left-[25px] ${inter.className} bg-white px-[18px] py-4 rounded-lg text-center`}
        >
          <p>5</p>
          <p>June</p>
        </div>
      </div>

      <p
        className={`${roboto_slab.className} text-pumpkin-orange font-medium mb-[11px]`}
      >
        {title}
      </p>

      <h3 className={`${mochiy_pop_one.className} text-xl mb-[9px]`}>
        {subtitle}
      </h3>

      <p
        className={`${roboto_slab.className} text-mountain-mist mb-8`}
      >{`"${description}"`}</p>

      <button
        className={`${mochiy_pop_one.className} underline underline-offset-[7px]`}
      >
        Read more
      </button>
    </div>
  );
};

export default BlogCard;
