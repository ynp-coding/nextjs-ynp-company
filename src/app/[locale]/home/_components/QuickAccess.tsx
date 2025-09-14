"use client";

import { Card, CardBody } from "@heroui/react";
import {
  Search,
  Download,
  CalendarClock,
  Megaphone,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

type QuickAccessItem = {
  title: string;
  icon: React.ReactNode;
  href: string;
  color: string;
};

const quickAccessItems: QuickAccessItem[] = [
  {
    title: "ตรวจสอบข้อมูล",
    icon: <Search className="w-6 h-6" />,
    href: "#",
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "ดาวน์โหลดเอกสาร",
    icon: <Download className="w-6 h-6" />,
    href: "#",
    color: "bg-green-100 text-green-600",
  },
  {
    title: "จองคิวออนไลน์",
    icon: <CalendarClock className="w-6 h-6" />,
    href: "#",
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "ระบบร้องเรียน/แจ้งเรื่อง",
    icon: <Megaphone className="w-6 h-6" />,
    href: "#",
    color: "bg-red-100 text-red-600",
  },
  {
    title: "ศูนย์ข้อมูลสถิติ",
    icon: <BarChart3 className="w-6 h-6" />,
    href: "#",
    color: "bg-purple-100 text-purple-600",
  },
];

export default function QuickAccess() {
  return (
    <section className="container mx-auto px-8 py-8 sm:px-0 md:px-0">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        {quickAccessItems.map((item) => (
          <Link key={item.title} href={item.href} className="h-full">
            <Card
              isHoverable
              isPressable
              className="h-full w-full flex flex-col items-center justify-center rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200"
            >
              <CardBody className="flex flex-col items-center justify-between gap-4 text-center p-6 h-full">
                <div
                  className={`flex items-center justify-center w-14 h-14 rounded-full ${item.color} transition-transform duration-200 group-hover:scale-110`}
                >
                  {item.icon}
                </div>
                <span className="text-sm font-medium min-h-[40px] flex items-center justify-center">
                  {item.title}
                </span>
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
