"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const liveItems = [
    {
        id: 1,
        artist: "Demi Lovato",
        stage: "Stage Sunset",
        image: "/assets/dashboard/inlive/demi-lovato/stage-sunset.png",
        date: "dd.mm.aa - 00:00 h",
    },
    {
        id: 2,
        artist: "Demi Lovato",
        stage: "Stage World",
        image: "/assets/dashboard/inlive/demi-lovato/stage-world.png",
        date: "dd.mm.aa - 00:00 h",
    },
    {
        id: 3,
        artist: "Demi Lovato",
        stage: "Stage Rock District",
        image: "/assets/dashboard/inlive/demi-lovato/stage-rockdistrict.png",
        date: "dd.mm.aa - 00:00 h",
    },
    {
        id: 4,
        artist: "Demi Lovato",
        stage: "Stage Supernova",
        image: "/assets/dashboard/inlive/demi-lovato/stage-supernova.png",
        date: "dd.mm.aa - 00:00 h",
    },
    {
        id: 5,
        artist: "Demi Lovato",
        stage: "Stage Favela",
        image: "/assets/dashboard/inlive/demi-lovato/stage-favela.png",
        date: "dd.mm.aa - 00:00 h",
    },
    {
        id: 6,
        artist: "Demi Lovato",
        stage: "Stage Rock Street",
        image: "/assets/dashboard/inlive/demi-lovato/stage-rockstreet.png",
        date: "dd.mm.aa - 00:00 h",
    },
];

export default function InLive() {
    return(
        <section className="bg-main-bg py-8 lg:py-10">
            <div className="container mx-auto px-4 lg:px-0">
                <div className="flex flex-col gap-4 lg:gap-6">
                    <div className="flex justify-start">
                        <h4 className="text-[#FAFAFA] text-xl lg:text-2xl font-bold leading-[120%] tracking-[-0.48px]">In Live</h4>
                    </div>
                    <div className="inlive-swiper -mx-4 px-4 lg:mx-0 lg:px-0">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={12}
                            slidesPerView="auto"
                            navigation
                            className="w-full"
                            breakpoints={{
                                640: { spaceBetween: 16 }
                            }}
                        >
                        {liveItems.map((item) => (
                            <SwiperSlide key={item.id} className="w-72! sm:w-85! lg:w-auto!">
                                <div className="flex flex-col w-full lg:w-fit bg-[#3D3D3F] rounded-lg">
                                    <div className="relative rounded-lg overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={`${item.artist} - ${item.stage}`}
                                            width={440}
                                            height={208}
                                            className="object-cover rounded-lg w-full h-auto"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2 lg:gap-3 p-3">
                                        <div className="flex items-center justify-between">
                                            <h6 className="text-[#F97316] text-sm font-medium">{item.artist}</h6>
                                            <div className="flex items-center gap-1">
                                                <span className="w-2 h-2 rounded-full bg-[#FF2828] animate-pulse"></span>
                                                <span className="text-[#FF2828] text-xs font-medium">Live</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <p className="text-primary-text text-xs">{item.stage}</p>
                                            <p className="text-primary-text text-xs">{item.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}
