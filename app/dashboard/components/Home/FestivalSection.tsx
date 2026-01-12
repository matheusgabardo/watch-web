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
        <section className="py-8 lg:py-12 bg-main-bg">
            <div className="container mx-auto px-4 lg:px-0">
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="flex flex-col gap-2 lg:gap-4 lg:w-55 shrink-0">
                        <h5 className="text-primary-text text-base lg:text-lg font-bold">Festival for you</h5>
                        <p className="text-primary-text text-sm lg:text-base font-normal hidden sm:block">Explore your favorite genres and discover new rhythms to love!</p>
                        <Link
                            href="/"
                            className="hidden lg:inline-flex items-center justify-center px-6 h-8 rounded-2xl bg-[#E96744] text-white text-sm font-medium w-fit"
                        >
                            See All
                        </Link>
                    </div>
                    <div className="flex-1 min-w-0 -mx-4 px-4 lg:mx-0 lg:px-0">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={12}
                            slidesPerView="auto"
                            navigation
                            className="festival-swiper"
                            breakpoints={{
                                640: { spaceBetween: 16 }
                            }}
                        >
                            {festivals.map((festival) => (
                                <SwiperSlide key={festival.id} className="w-40! sm:w-45! lg:w-52!">
                                    <div
                                        className="rounded-lg px-3 lg:px-4 pb-6 lg:pb-8 w-full aspect-square flex flex-col justify-end cursor-pointer transition-shadow duration-300 hover:shadow-[inset_0_0_0_3px_#E96744]"
                                        style={{
                                            background: `${festival.gradient}, url(/assets/dashboard/bg/w.svg) right bottom no-repeat`
                                        }}
                                    >
                                        <h3 className="text-primary-text text-2xl lg:text-[32px] font-bold leading-none">{festival.name}</h3>
                                        <h3 className="text-primary-text text-lg lg:text-2xl font-normal opacity-60">Festival</h3>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-6 h-8 rounded-2xl bg-[#E96744] text-white text-sm font-medium w-fit lg:hidden self-start"
                    >
                        See All
                    </Link>
                </div>
            </div>
        </section>
    );
}
