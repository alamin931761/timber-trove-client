import Footer from "@/components/Shared/Footer";
import FeedbackCorner from "@/components/UI/HomePage/FeedbackCorner";
import OurBlog from "@/components/UI/HomePage/OurBlog";
import TopBrand from "@/components/UI/HomePage/TopBrand";
import LuxuryKitchen from "@/components/UI/LuxuryKitchen";

const HomePage = () => {
  return (
    <div className="">
      {/* <HeroSection /> */}
      <LuxuryKitchen />
      <OurBlog />
      <FeedbackCorner />
      <TopBrand />
      <Footer />
    </div>
  );
};

export default HomePage;
