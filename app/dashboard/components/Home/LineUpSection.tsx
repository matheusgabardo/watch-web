"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

type CarouselItem =
  | { id: number; type: "band"; name: string; image: string }
  | { id: number; type: "ad"; image: string; link: string };

const items: CarouselItem[] = [
  { id: 1, type: "band", name: "Emicida", image: "emicida.png" },
  { id: 2, type: "band", name: "Iron Maiden", image: "iron-maiden.png" },
  { id: 3, type: "band", name: "Rita Ora", image: "rita-ora.png" },
  { id: 4, type: "band", name: "Dream Theater", image: "dream-theate.png" },
  { id: 5, type: "ad", image: "/assets/dashboard/common/tesla-announcement.png", link: "https://tesla.com" },
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

export default function LineUpSection() {
  return (
    <section className="py-12 bg-main-bg">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-primary-text text-2xl font-bold">Line Up</h2>
          </div>
          <div className="relative">
            <Swiper
              modules={[Navigation]}
              spaceBetween={16}
              slidesPerView="auto"
              navigation
              className="lineup-swiper"
            >
              {items.map((item) =>
                item.type === "band" ? (
                  <SwiperSlide key={item.id} className="!w-[208px]">
                    <div
                      className="relative w-[208px] h-[288px] rounded-lg overflow-hidden bg-cover bg-center cursor-pointer transition-shadow duration-300 hover:shadow-[inset_0_0_0_3px_#E96744]"
                      style={{
                        backgroundImage: `url(/assets/dashboard/lineup/${item.image})`,
                      }}
                    >
                      <div className="absolute inset-0 flex items-end justify-center px-4 pb-12">
                        <h5 className="text-white text-center font-roboto text-lg font-bold leading-[120%] tracking-[-0.36px]">
                          {item.name}
                        </h5>
                      </div>
                    </div>
                  </SwiperSlide>
                ) : (
                  <SwiperSlide key={item.id} className="!w-[440px]">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-[440px] h-[288px] rounded-lg overflow-hidden"
                    >
                      <img
                        src={item.image}
                        alt="Anúncio"
                        className="w-full h-full object-cover"
                      />
                    </a>
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
