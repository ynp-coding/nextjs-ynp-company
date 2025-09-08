"use client";

import { Button } from "@heroui/react";
import { CalendarDays, ArrowRight, MapPin, Tag } from "lucide-react";
import Link from "next/link";

const events = [
  {
    id: 1,
    title: "การอบรมเชิงปฏิบัติการด้านดิจิทัล",
    date: "12 ก.ย. 2568",
    location: "ห้องประชุมใหญ่ กรมฯ",
    category: "อบรม",
    href: "/events/1",
  },
  {
    id: 2,
    title: "ประชุมผู้บริหารประจำเดือน",
    date: "15 ก.ย. 2568",
    location: "ออนไลน์ (Zoom)",
    category: "ประชุม",
    href: "/events/2",
  },
  {
    id: 3,
    title: "กิจกรรมวันสุขภาพดี",
    date: "20 ก.ย. 2568",
    location: "ลานกิจกรรม กรมฯ",
    category: "กิจกรรม",
    href: "/events/3",
  },
  {
    id: 4,
    title: "ประกวดนวัตกรรมองค์กร",
    date: "25 ก.ย. 2568",
    location: "ห้องประชุม A-201",
    category: "ประกวด",
    href: "/events/4",
  },
];

export default function EventsCalendar() {
  return (
    <section className="my-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-12 container mx-auto px-4">
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2">
            <CalendarDays className="w-5 h-5 text-primary" />
            ปฏิทินกิจกรรม
          </h2>
          <p className="text-gray-500 text-sm">
            ติดตามกิจกรรมที่กำลังจะเกิดขึ้น
          </p>
        </div>
        <Button
          as={Link}
          href="/events"
          endContent={<ArrowRight size={16} />}
          color="primary"
          variant="flat"
        >
          ดูทั้งหมด
        </Button>
      </div>

      {/* Event List */}
      <ul className="container mx-auto px-2 divide-y divide-gray-200 bg-white rounded-xl shadow-sm">
        {events.map((event) => (
          <li
            key={event.id}
            className="flex flex-col sm:flex-row sm:justify-between py-3 px-4 hover:bg-gray-50 transition"
          >
            <div>
              <Link
                href={event.href}
                className="text-base font-medium text-gray-800 hover:text-primary"
              >
                {event.title}
              </Link>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <CalendarDays size={14} className="text-primary" />
                  {event.date}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={14} className="text-green-600" />
                  {event.location}
                </span>
                <span className="flex items-center gap-1">
                  <Tag size={14} className="text-blue-600" />
                  {event.category}
                </span>
              </div>
            </div>
            <Button
              as={Link}
              href={event.href}
              size="sm"
              color="primary"
              variant="flat"
              className="mt-2 sm:mt-0"
            >
              รายละเอียด
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
}
