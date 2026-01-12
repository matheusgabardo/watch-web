"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export type CarouselItem =
  | { id: number; type: "band"; name: string; image: string }
  | { id: number; type: "ad"; image: string; link: string };

type Props = {
  title: string;
  items: CarouselItem[];
};

export default function BandsCarousel({ title, items }: Props) {
  return (
    <section className="py-8 lg:py-12 bg-main-bg">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="flex flex-col gap-4 lg:gap-8">
          <div>
            <h2 className="text-primary-text text-xl lg:text-2xl font-bold">{title}</h2>
          </div>
          <div className="relative -mx-4 px-4 lg:mx-0 lg:px-0">
            <Swiper
              modules={[Navigation]}
              spaceBetween={12}
              slidesPerView="auto"
              navigation
              className="lineup-swiper"
              breakpoints={{
                640: { spaceBetween: 16 }
              }}
            >
              {items.map((item) =>
                item.type === "band" ? (
                  <SwiperSlide key={item.id} className="w-40! sm:w-45! lg:w-52!">
                    <div
                      className="relative w-full aspect-208/288 rounded-lg overflow-hidden bg-cover bg-center cursor-pointer transition-shadow duration-300 hover:shadow-[inset_0_0_0_3px_#E96744]"
                      style={{
                        backgroundImage: `url(/assets/dashboard/lineup/${item.image})`,
                      }}
                    >
                      <div className="absolute inset-0 flex items-end justify-center px-3 lg:px-4 pb-8 lg:pb-12">
                        <h5 className="text-white text-center font-roboto text-base lg:text-lg font-bold leading-[120%] tracking-[-0.36px]">
                          {item.name}
                        </h5>
                      </div>
                    </div>
                  </SwiperSlide>
                ) : (
                  <SwiperSlide key={item.id} className="w-70! sm:w-85! lg:w-110!">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full aspect-440/288 rounded-lg overflow-hidden"
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
