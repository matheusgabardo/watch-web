import BandsCarousel, { CarouselItem } from "../common/BandsCarousel";

const items: CarouselItem[] = [
  { id: 4, type: "band", name: "Dream Theater", image: "dream-theate.png" },
  { id: 7, type: "band", name: "Maneskin", image: "maneskin.png" },
  { id: 8, type: "band", name: "Coldplay", image: "coldplay.png" },
  { id: 13, type: "band", name: "Offspring", image: "offspring.png" },
  { id: 14, type: "band", name: "Avril Lavigne", image: "avril-lavigne.png" },
  { id: 15, type: "band", name: "Black Pantera", image: "black-pantera.png" },
  { id: 16, type: "band", name: "Ed Sheeran", image: "ed-sheeron.png" },
];

export default function RockSingers() {
  return <BandsCarousel title="Rock Singers" items={items} />;
}
