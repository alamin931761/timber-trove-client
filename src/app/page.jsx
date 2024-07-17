import Footer from "@/components/Shared/Footer";
import FeedbackCorner from "@/components/UI/HomePage/FeedbackCorner";
import HandPick from "@/components/UI/HomePage/HandPick";
import OurBlog from "@/components/UI/HomePage/OurBlog";
import TopBrand from "@/components/UI/HomePage/TopBrand";
import LuxuryKitchen from "@/components/UI/LuxuryKitchen";
import StayConnected from "@/components/UI/StayConnected";

const HomePage = () => {
  return (
    <div className="">
      {/* <HeroSection /> */}
      <HandPick />
      <StayConnected />
      <LuxuryKitchen />
      <OurBlog />
      <FeedbackCorner />
      <TopBrand />
      <Footer />
    </div>
  );
};

export default HomePage;
