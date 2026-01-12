"use client";

import { useId } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export type BannerItem = {
  id: number;
  image: string;
  link: string;
};

type Props = {
  items: BannerItem[];
};

export default function BannerCarousel({ items }: Props) {
  const paginationId = useId().replace(/:/g, "");

  return (
    <section className="py-8 lg:py-12 bg-main-bg">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="bg-white px-4 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6 rounded-lg">
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              el: `.banner-pagination-${paginationId}`,
            }}
            loop
            className="banner-swiper"
          >
            {items.map((banner) => (
              <SwiperSlide key={banner.id}>
                <a href={banner.link} className="block">
                  <img
                    src={banner.image}
                    alt="Banner"
                    className="w-full h-auto rounded-lg"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={`banner-pagination banner-pagination-${paginationId} mt-4`} />
        </div>
      </div>
    </section>
  );
}
