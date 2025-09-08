"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination } from "swiper/modules";

type CarouselItem = {
  src: string;
  href: string;
  alt: string;
};

type CarouselProps = {
  items: CarouselItem[];
};

export default function Carousel({ items }: CarouselProps) {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              <Image
                src={item.src}
                alt={`Banner ${item.alt}`}
                width={1200}
                height={500}
                className="w-full h-[500px] object-cover"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
