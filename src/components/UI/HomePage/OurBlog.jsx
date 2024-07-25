import assets from "@/assets";
import SectionTitle from "@/components/UI/HomePage/SectionTitle";
import BlogCard from "@/components/UI/Card/BlogCard";

const OurBlog = () => {
  const blogs = [
    {
      _id: 22,
      image: assets.images.doubleSofa1,
      title: "Dining Chair",
      subtitle: "DOUBLE SOFA- ATHENS",
      description:
        "Elegant, ergonomic dining chair with premium materials and modern design.",
    },
    {
      _id: 23,
      image: assets.images.doubleSofa2,
      title: "Sofa",
      subtitle: "DOUBLE SOFA- ATHENS",
      description:
        "Luxurious, comfortable sofa with modern design and premium materials. Shop now!",
    },
    {
      _id: 24,
      image: assets.images.doubleSofa3,
      title: "Sofa",
      subtitle: "DOUBLE SOFA- ATHENS",
      description:
        "Luxurious, comfortable sofa with modern design and premium materials. Shop now!",
    },
  ];
  return (
    <div className="mt-[102px]">
      {/* Section title */}
      <SectionTitle title="our blog" />

      {/* Grid container for blog cards */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-[51px] mb-[161px]">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default OurBlog;
