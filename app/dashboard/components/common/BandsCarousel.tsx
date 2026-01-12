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
    <section className="py-12 bg-main-bg">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-primary-text text-2xl font-bold">{title}</h2>
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
