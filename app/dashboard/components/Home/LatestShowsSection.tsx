import BandsCarousel, { CarouselItem } from "../common/BandsCarousel";

const items: CarouselItem[] = [
  { id: 1, type: "band", name: "Marshmello", image: "marshmello.png" },
  { id: 2, type: "band", name: "Alok", image: "alok.png" },
  { id: 3, type: "band", name: "Rita Ora", image: "rita-ora.png" },
  { id: 4, type: "band", name: "Dream Theater", image: "dream-theate.png" },
  { id: 6, type: "band", name: "Dua Lipa", image: "dua-lipa.png" },
  { id: 7, type: "band", name: "Maneskin", image: "maneskin.png" },
  { id: 8, type: "band", name: "Coldplay", image: "coldplay.png" },
  { id: 9, type: "band", name: "Justin Bieber", image: "justin-bieber.png" },
  { id: 10, type: "band", name: "Luisa Sonza", image: "luisa-sonza.png" },
  { id: 11, type: "band", name: "Marshmello", image: "marshmello.png" },
  { id: 12, type: "band", name: "Djavan", image: "djavan.png" },
  { id: 13, type: "band", name: "Offspring", image: "offspring.png" },
  { id: 14, type: "band", name: "Avril Lavigne", image: "avril-lavigne.png" },
  { id: 15, type: "band", name: "Black Pantera", image: "black-pantera.png" },
  { id: 16, type: "band", name: "Ed Sheeran", image: "ed-sheeron.png" },
];

export default function LatestShowsSection() {
  return <BandsCarousel title="Yesterday Shows" items={items} />;
}
