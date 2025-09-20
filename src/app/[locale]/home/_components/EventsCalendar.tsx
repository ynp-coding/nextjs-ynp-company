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
    href: "#",
  },
  {
    id: 2,
    title: "ประชุมผู้บริหารประจำเดือน",
    date: "15 ก.ย. 2568",
    location: "ออนไลน์ (Zoom)",
    category: "ประชุม",
    href: "#",
  },
  {
    id: 3,
    title: "กิจกรรมวันสุขภาพดี",
    date: "20 ก.ย. 2568",
    location: "ลานกิจกรรม กรมฯ",
    category: "กิจกรรม",
    href: "#",
  },
  {
    id: 4,
    title: "ประกวดนวัตกรรมองค์กร",
    date: "25 ก.ย. 2568",
    location: "ห้องประชุม A-201",
    category: "ประกวด",
    href: "#",
  },
  {
    id: 5,
    title: "แข่งขันกีฬาสี",
    date: "28 ก.ย. 2568",
    location: "สนามกีฬา กรมฯ",
    category: "กีฬา",
    href: "#",
  },
  {
    id: 6,
    title: "สัมมนาวิชาการสาธารณสุข",
    date: "30 ก.ย. 2568",
    location: "ห้องประชุม B-101",
    category: "สัมมนา",
    href: "#",
  },
];

export default function EventsCalendar() {
  return (
    <section className="my-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2">
            <CalendarDays
              className="w-5 h-5 text-primary"
              aria-label="ปฏิทินกิจกรรม"
            />
            ปฏิทินกิจกรรม
          </h2>
          <p className="text-foreground/60 text-sm">
            ติดตามกิจกรรมที่กำลังจะเกิดขึ้น
          </p>
        </div>
        <Button
          as={Link}
          href="#"
          endContent={
            <ArrowRight size={16} aria-hidden="true" focusable="false" />
          }
          color="primary"
          variant="flat"
          aria-labelledby="ดูปฏิทินกิจกรรมทั้งหมด"
        >
          ดูทั้งหมด
        </Button>
      </div>

      {/* Event List */}
      <ul className="divide-y divide-gray-200 bg-white rounded-xl shadow-sm">
        {events.map((event) => (
          <li
            key={event.id}
            className="flex flex-row justify-between py-3 px-4 transition"
          >
            <div>
              <Link
                href={event.href}
                className="text-base font-medium text-gray-800 hover:text-primary"
              >
                {event.title}
              </Link>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-gray-600">
                <span className="flex items-center gap-1">
                  <CalendarDays
                    size={14}
                    className="text-primary"
                    aria-hidden="true"
                    focusable="false"
                  />
                  {event.date}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin
                    size={14}
                    className="text-green-600"
                    aria-hidden="true"
                    focusable="false"
                  />
                  {event.location}
                </span>
                <span className="flex items-center gap-1">
                  <Tag
                    size={14}
                    className="text-blue-600"
                    aria-hidden="true"
                    focusable="false"
                  />
                  {event.category}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
