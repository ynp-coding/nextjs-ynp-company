"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination } from "swiper/modules";

// ตัวอย่างข้อมูลภาพฟรีจาก Unsplash (remotePatterns ต้องเพิ่มใน next.config.js)
const slides = [
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    link: "https://unsplash.com/photos/6anudmpILw4",
  },
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    link: "https://unsplash.com/photos/3ZUsNJhi_Ik",
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    link: "https://unsplash.com/photos/FV_PxCqgtwc",
  },
  {
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80",
    link: "https://unsplash.com/photos/oMpAz-DN-9I",
  },
];

export default function Carousel() {
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
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <a href={slide.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={slide.src}
                alt={`Slide ${index + 1}`}
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
