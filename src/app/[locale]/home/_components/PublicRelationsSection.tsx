"use client";

import { CalendarDays, ArrowRight, Eye } from "lucide-react";
import Link from "next/link";
import { Button } from "@heroui/react";

type PRNews = {
  id: number;
  title: string;
  date: string;
  views: number;
  href: string;
};

export default function PublicRelationsSection() {
  const newsList: PRNews[] = [
    {
      id: 1,
      title: "กรมสาธารณสุขจัดอบรมเชิงปฏิบัติการด้านสุขภาพชุมชน",
      date: "7 กันยายน 2568",
      views: 1234,
      href: "/pr/news/1",
    },
    {
      id: 2,
      title: "เปิดรับสมัครอบรมออนไลน์ด้านโภชนาการ",
      date: "6 กันยายน 2568",
      views: 980,
      href: "/pr/news/2",
    },
    {
      id: 3,
      title: "การรณรงค์ป้องกันโรคไข้เลือดออก",
      date: "4 กันยายน 2568",
      views: 754,
      href: "/pr/news/3",
    },
    {
      id: 4,
      title: "ประชุมวิชาการสาธารณสุขแห่งชาติ",
      date: "2 กันยายน 2568",
      views: 652,
      href: "/pr/news/4",
    },
    {
      id: 5,
      title: "เปิดตัวโครงการสุขภาพดีถ้วนหน้า",
      date: "1 กันยายน 2568",
      views: 511,
      href: "/pr/news/5",
    },
    {
      id: 6,
      title: "รณรงค์ออกกำลังกายเพื่อสุขภาพ",
      date: "30 สิงหาคม 2568",
      views: 432,
      href: "/pr/news/6",
    },
    {
      id: 7,
      title: "เปิดคลินิกชุมชนอบอุ่นแห่งใหม่",
      date: "29 สิงหาคม 2568",
      views: 389,
      href: "/pr/news/7",
    },
    {
      id: 8,
      title: "ประกาศนโยบายอาหารปลอดภัย",
      date: "28 สิงหาคม 2568",
      views: 310,
      href: "/pr/news/8",
    },
  ];

  const firstRow = newsList.slice(0, 5);

  return (
    <section className="my-6 py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* หัวข้อ Section */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <CalendarDays className="w-6 h-6 text-primary" />
              ข่าวประชาสัมพันธ์
            </h2>
            <p className="text-gray-500 text-sm">
              ติดตามข่าวประชาสัมพันธ์ล่าสุดจากกรม/องค์กร
            </p>
          </div>
          <Button
            endContent={<ArrowRight size={18} />}
            color="primary"
            variant="flat"
          >
            ดูทั้งหมด
          </Button>
        </div>

        {/* รายการข่าว */}
        <ul className="divide-y divide-gray-200">
          {firstRow.map((news) => (
            <li
              key={news.id}
              className="flex items-center justify-between py-4 hover:bg-gray-100 px-2 transition"
            >
              {/* เนื้อหาซ้าย */}
              <div>
                <Link
                  href={news.href}
                  className="text-base font-medium text-gray-800 hover:text-primary transition"
                >
                  {news.title}
                </Link>
                <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                  <span className="flex items-center gap-1">
                    <CalendarDays size={14} /> {news.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye size={14} /> {news.views.toLocaleString()} ครั้ง
                  </span>
                </div>
              </div>

              {/* ปุ่มอ่านต่อ */}
              <Button
                as={Link}
                href={news.href}
                size="sm"
                color="primary"
                variant="flat"
              >
                อ่านต่อ
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
