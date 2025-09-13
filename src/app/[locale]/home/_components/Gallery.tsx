"use client";

import { useState, useRef } from "react";
import { Image } from "@heroui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);

  const images = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    "https://images.unsplash.com/photo-1503428593586-e225b39bddfe",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  ];

  const handleThumbnailClick = (idx: number) => {
    setCurrentIndex(idx);
    swiperRef.current?.slideToLoop(idx);
  };

  const onAutoplayTimeLeft = (
    _swiper: SwiperClass,
    time: number,
    progress: number
  ) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", `${1 - progress}`);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <section className="py-8">
      {/* Swiper หลัก */}
      <div className="w-full h-[400px] mb-6 overflow-hidden rounded-2xl shadow-lg">
        <Swiper
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          modules={[Autoplay, Pagination, Navigation]}
          loop
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="w-full h-full"
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <Image
                src={src}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}

          {/* Progress autoplay */}
          <div
            className="z-50 absolute right-4 bottom-4 flex items-center gap-2 bg-black/50 text-white px-2 py-1 rounded-full text-xs"
            slot="container-end"
          >
            <svg
              viewBox="0 0 48 48"
              className="w-6 h-6 rotate-[-90deg]"
              ref={progressCircle}
            >
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="white"
                strokeWidth="4"
                fill="none"
                strokeDasharray="125.6"
                strokeDashoffset="calc(125.6 * var(--progress, 1))"
                style={{ transition: "stroke-dashoffset 0.3s linear" }}
              />
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>

      {/* Thumbnail */}
      <div className="grid grid-cols-5 gap-4">
        {images.map((src, idx) => (
          <div
            key={idx}
            onClick={() => handleThumbnailClick(idx)}
            className={`cursor-pointer rounded-lg overflow-hidden transition ${
              currentIndex === idx ? "" : "border-transparent"
            }`}
          >
            <Image
              src={src}
              alt={`Thumbnail ${idx + 1}`}
              className="object-cover w-full h-24"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
