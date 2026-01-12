"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const festivals = [
    { id: 1, name: "Rock", gradient: "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(337deg, #2433C0 22.25%, #4F60FF 124.95%)" },
    { id: 2, name: "Pop", gradient: "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(337deg, #016500 22.25%, #06DE03 124.95%)" },
    { id: 3, name: "Funk", gradient: "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(337deg, #5E006C 22.25%, #AF01CA 124.95%)" },
    { id: 4, name: "Jazz", gradient: "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(337deg, #BF4900 22.25%, #FF6100 124.95%)" },
    { id: 5, name: "Samba", gradient: "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(143deg, #FF009A -19.45%, #A30062 76.86%)" },
    { id: 6, name: "MPB", gradient: "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(337deg, #7A5000 22.25%, #FFA801 124.95%)" },
    { id: 7, name: "Trap", gradient: "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(337deg, #006A8D 22.25%, #00C0FF 124.95%)" },
    { id: 8, name: "Rap", gradient: "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(337deg, #A80100 22.25%, #FF0100 124.95%)" },
];

export default function FestivalSection() {
    return (
        <section className="py-12 bg-main-bg">
            <div className="container mx-auto">
                <div className="flex gap-4">
                    <div className="flex flex-col gap-4 w-[218px] shrink-0">
                        <h5 className="text-primary-text text-lg font-bold">Festival for you</h5>
                        <p className="text-primary-text text-base font-normal">Explore your favorite genres and discover new rhythms to love!</p>
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center px-6 h-8 rounded-2xl bg-[#E96744] text-white text-sm font-medium w-fit"
                        >
                            See All
                        </Link>
                    </div>
                    <div className="flex-1 min-w-0">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={16}
                            slidesPerView="auto"
                            navigation
                            className="festival-swiper"
                        >
                            {festivals.map((festival) => (
                                <SwiperSlide key={festival.id} className="!w-[208px]">
                                    <div
                                        className="rounded-lg px-4 pb-8 w-[208px] h-[208px] flex flex-col justify-end cursor-pointer transition-shadow duration-300 hover:shadow-[inset_0_0_0_3px_#E96744]"
                                        style={{
                                            background: `${festival.gradient}, url(/assets/dashboard/bg/w.svg) right bottom no-repeat`
                                        }}
                                    >
                                        <h3 className="text-primary-text text-[32px] font-bold leading-none">{festival.name}</h3>
                                        <h3 className="text-primary-text text-2xl font-normal opacity-60">Festival</h3>
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
