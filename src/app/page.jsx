import BestDeals from "@/components/UI/HomePage/BestDeals";
import FeedbackCorner from "@/components/UI/HomePage/FeedbackCorner";
import HandPick from "@/components/UI/HomePage/HandPick";
import HeroSection from "@/components/UI/HomePage/HeroSection";
import LoungeChairSection from "@/components/UI/HomePage/LoungeChairSection";
import OurBlog from "@/components/UI/HomePage/OurBlog";
import TopBrand from "@/components/UI/HomePage/TopBrand";
import LuxuryKitchen from "@/components/UI/HomePage/LuxuryKitchen";
import StayConnected from "@/components/UI/HomePage/StayConnected";
import NewArrival from "@/components/UI/HomePage/NewArrival";
import Container from "@/components/Shared/Container";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Container>
        <div className="bg-white">
          <LoungeChairSection />
          <NewArrival />
        </div>
      </Container>

      <BestDeals />

      <Container>
        <HandPick />
      </Container>

      <div className="max-w-[1536px] mx-auto">
        <StayConnected />
        <LuxuryKitchen />
      </div>

      <Container>
        <OurBlog />
        <FeedbackCorner />
        <TopBrand />
      </Container>
    </div>
  );
};

export default HomePage;
