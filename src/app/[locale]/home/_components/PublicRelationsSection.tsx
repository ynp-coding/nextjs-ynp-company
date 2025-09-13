"use client";

import { ArrowRight, Megaphone } from "lucide-react";
import { Button } from "@heroui/react";
import NewsList from "@/components/ui/news-list";

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
    <section className="bg-gray-50">
      <div className="container mx-auto px-8 py-8 sm:px-0 md:px-0">
        {/* หัวข้อ Section */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Megaphone className="w-6 h-6 text-primary" />
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
        <NewsList items={firstRow} />
      </div>
    </section>
  );
}
