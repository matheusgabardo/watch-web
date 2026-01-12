import BandsCarousel, { CarouselItem } from "../common/BandsCarousel";

const items: CarouselItem[] = [
  { id: 1, type: "band", name: "Alok", image: "Alok.png" },
  { id: 2, type: "band", name: "Rita Ora", image: "rita-ora.png" },
  { id: 3, type: "ad", image: "/assets/dashboard/common/tesla-announcement.png", link: "https://tesla.com" },
  { id: 4, type: "band", name: "Dua Lipa", image: "dua-lipa.png" },
  { id: 5, type: "band", name: "Maneskin", image: "Maneskin.png" },
  { id: 6, type: "band", name: "Avril Lavigne", image: "avril-lavigne.png" },
  { id: 7, type: "band", name: "Black Pantera", image: "black-pantera.png" },
  { id: 8, type: "band", name: "Ed Sheeran", image: "ed-sheeron.png" },
];

export default function WatchAgain() {
  return <BandsCarousel title="Watch Again" items={items} />;
}
