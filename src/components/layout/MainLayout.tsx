"use client";

import { useEffect, useRef, useState } from "react";
import Header from "@/components/layout/Header";
import Carousel from "@/components/ui/carousel";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

// ตัวอย่างข้อมูลภาพฟรีจาก Unsplash (remotePatterns ต้องเพิ่มใน next.config.js)
const slides = [
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    href: "https://unsplash.com/photos/6anudmpILw4",
    alt: "banner-1",
  },
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    href: "https://unsplash.com/photos/3ZUsNJhi_Ik",
    alt: "banner-2",
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    href: "https://unsplash.com/photos/FV_PxCqgtwc",
    alt: "banner-3",
  },
  {
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80",
    href: "https://unsplash.com/photos/oMpAz-DN-9I",
    alt: "banner-4",
  },
];

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hideHeader, setHideHeader] = useState(false);
  // sentinel จะวางไว้ "ก่อน Navbar" เพื่อเช็กว่าเลื่อนถึงจุดบนสุดหรือยัง
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // ขณะ sentinel ยังเห็นใน viewport -> แสดง Header
        // เมื่อ sentinel พ้นจอด้านบน (navbar ชิดขอบบน) -> ซ่อน Header
        setHideHeader(!entry.isIntersecting);
      },
      {
        // กระตุกซ่อนทันทีที่ถึงขอบบน (แทบไม่หน่วง)
        root: null,
        threshold: 0,
        rootMargin: "-24px 0px 0px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {!hideHeader && <Header />}

      <Carousel items={slides} />

      <div ref={sentinelRef} aria-hidden="true" className="h-px w-full" />

      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  );
}
