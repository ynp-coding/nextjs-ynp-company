"use client";

import { Button, Divider } from "@heroui/react";
import { CalendarDays, ArrowRight } from "lucide-react";
import Link from "next/link";

const events = [
  {
    id: 1,
    title: "การอบรมเชิงปฏิบัติการด้านดิจิทัล",
    date: "12 กันยายน 2568",
    location: "ห้องประชุมใหญ่ กรมฯ",
    category: "อบรม",
  },
  {
    id: 2,
    title: "ประชุมผู้บริหารประจำเดือน",
    date: "15 กันยายน 2568",
    location: "ออนไลน์ (Zoom)",
    category: "ประชุม",
  },
  {
    id: 3,
    title: "กิจกรรมวันสุขภาพดี",
    date: "20 กันยายน 2568",
    location: "ลานกิจกรรม กรมฯ",
    category: "กิจกรรม",
  },
  {
    id: 4,
    title: "ประกวดนวัตกรรมองค์กร",
    date: "25 กันยายน 2568",
    location: "ห้องประชุม A-201",
    category: "ประกวด",
  },
  {
    id: 5,
    title: "แข่งขันกีฬาสี",
    date: "25 กันยายน 2568",
    location: "ห้องประชุม A-201",
    category: "ประกวด",
  },
  {
    id: 6,
    title: "แข่งขันกีฬาสี",
    date: "25 กันยายน 2568",
    location: "ห้องประชุม A-201",
    category: "ประกวด",
  },
];

export default function EventsCalendar() {
  return (
    <section className="my-3 py-12">
      {/* หัวข้อ */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <CalendarDays className="w-6 h-6 text-primary" />
            ปฏิทินกิจกรรม
          </h2>
          <p className="text-gray-500 text-sm">ติดตามกิจกรรมวันนี้</p>
        </div>
        <Button
          endContent={<ArrowRight size={18} />}
          color="primary"
          variant="flat"
        >
          ดูทั้งหมด
        </Button>
      </div>

      {/* กริดกิจกรรม */}

      <div className="grid grid-cols-1 gap-2">
        {events.map((event) => (
          <Link
            key={event.id}
            href={event.location}
            className="hover:shadow-lg py-2 px-2 rounded-lg"
          >
            <h5 className="text-sm font-medium line-clamp-2">{event.title}</h5>

            <div className="text-sm text-gray-600 space-y-2">
              <p className="text-gray-500">{event.location}</p>
              <Divider />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
