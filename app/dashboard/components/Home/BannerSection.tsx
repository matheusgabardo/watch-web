"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const banners = [
    { id: 1, image: "/assets/dashboard/common/heineken-announcement.png", link: "#" },
    { id: 2, image: "/assets/dashboard/common/heineken-announcement.png", link: "#" },
    { id: 3, image: "/assets/dashboard/common/heineken-announcement.png", link: "#" },
];

export default function BannerSection() {
    return (
        <section className="py-12 bg-main-bg">
            <div className="container mx-auto">
                <div className="bg-white px-8 py-6 rounded-lg">
                    <Swiper
                        modules={[Navigation, Autoplay, Pagination]}
                        spaceBetween={16}
                        slidesPerView={1}
                        navigation
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        pagination={{
                            clickable: true,
                            el: ".banner-pagination"
                        }}
                        loop
                        className="banner-swiper"
                    >
                        {banners.map((banner) => (
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
                    <div className="banner-pagination flex justify-center gap-2 mt-4"></div>
                </div>
            </div>
        </section>
    );
}
