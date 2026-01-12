import Header from "./components/Header/Index";
import FestivalSection from "./components/Home/FestivalSection";
import HeroSection from "./components/Home/HeroSection";
import LineUpSection from "./components/Home/LineUpSection";

export default function DashboardPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <LineUpSection />
      <FestivalSection />
    </>
  );
}
