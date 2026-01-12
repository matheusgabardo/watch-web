import Footer from "./components/Footer/Index";
import Header from "./components/Header/Index";
import BannerSection, { BannerItem } from "./components/Home/BannerSection";
import FestivalSection from "./components/Home/FestivalSection";
import HeroSection from "./components/Home/HeroSection";
import InLiveSection from "./components/Home/InLiveSection";
import LatestShowsSection from "./components/Home/LatestShowsSection";
import LineUpSection from "./components/Home/LineUpSection";
import RockSingers from "./components/Home/RockSingers";
import WatchAgain from "./components/Home/WatchAgain";

const banners1: BannerItem[] = [
  { id: 1, image: "/assets/dashboard/common/heineken-announcement.png", link: "#" },
  { id: 2, image: "/assets/dashboard/common/coke-announcement.png", link: "#" },
  { id: 3, image: "/assets/dashboard/common/heineken-announcement.png", link: "#" },
];
const banners2: BannerItem[] = [
  { id: 1, image: "/assets/dashboard/common/coke-announcement.png", link: "#" },
  { id: 2, image: "/assets/dashboard/common/heineken-announcement.png", link: "#" },
  { id: 3, image: "/assets/dashboard/common/coke-announcement.png", link: "#" },
];

export default function DashboardPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <LineUpSection />
      <FestivalSection />
      <BannerSection items={banners1} />
      <InLiveSection />
      <LatestShowsSection />
      <RockSingers />
      <BannerSection items={banners2} />
      <WatchAgain />
      <Footer />
    </>
  );
}
