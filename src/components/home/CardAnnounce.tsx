"use client";

import Marquee from "react-fast-marquee";

export default function CardAnnounce() {
  return (
    <div className="mt-3 mb-6">
      <Marquee speed={50} gradient={false}>
        ข้อความวิ่งวนไปเรื่อย ๆ 🚀 | โปรโมชั่นวันนี้ลด 50% | สมัครเลย!
      </Marquee>
    </div>
  );
}
