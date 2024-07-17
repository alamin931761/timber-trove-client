import assets from "@/assets";
import SectionTitle from "@/components/UI/HomePage/SectionTitle";
import BlogCard from "../BlogCard";

const OurBlog = () => {
  const blogs = [
    {
      _idid: 1,
      image: assets.images.doubleSofa1,
      title: "Dining Chair",
      subtitle: "DOUBLE SOFA- ATHENS",
      description:
        "Elegant, ergonomic dining chair with premium materials and modern design.",
    },
    {
      _id: 2,
      image: assets.images.doubleSofa2,
      title: "Sofa",
      subtitle: "DOUBLE SOFA- ATHENS",
      description:
        "Luxurious, comfortable sofa with modern design and premium materials. Shop now!",
    },
    {
      _id: 3,
      image: assets.images.doubleSofa3,
      title: "Sofa",
      subtitle: "DOUBLE SOFA- ATHENS",
      description:
        "Luxurious, comfortable sofa with modern design and premium materials. Shop now!",
    },
  ];
  return (
    <div>
      <SectionTitle title="our blog" />

      <div className="grid grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default OurBlog;
