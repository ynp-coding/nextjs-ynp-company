"use client";

import { Newspaper, ArrowRight } from "lucide-react";
import { Button } from "@heroui/react";

import NewsCard from "@/components/ui/news-card";
import Link from "next/link";

type ExecutiveNews = {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  href: string;
  views: number;
};

export default function ExecutivesNews() {
  const newsList: ExecutiveNews[] = [
    {
      id: 1,
      title: "อธิบดีกรมสาธารณสุขประชุมความร่วมมือด้านสาธารณสุขกับ WHO",
      date: "5 กันยายน 2568",
      description:
        "อธิบดีกรมสาธารณสุขเข้าร่วมประชุมกับองค์การอนามัยโลก เพื่อหารือแนวทางความร่วมมือในการพัฒนาระบบสาธารณสุขของประเทศ...",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      href: "#",
      views: 1200,
    },
    {
      id: 2,
      title: "รองอธิบดีกรมลงพื้นที่ตรวจเยี่ยมโรงพยาบาลชุมชน",
      date: "3 กันยายน 2568",
      description:
        "รองอธิบดีกรมสาธารณสุข ลงพื้นที่จังหวัดเชียงใหม่ เพื่อตรวจเยี่ยมโรงพยาบาลชุมชน และรับฟังปัญหาการทำงานจากบุคลากรทางการแพทย์...",
      image:
        "https://images.pexels.com/photos/3279207/pexels-photo-3279207.jpeg",
      href: "#",
      views: 950,
    },
    {
      id: 3,
      title: "ผู้บริหารกรมร่วมเปิดงานมหกรรมสุขภาพแห่งชาติ",
      date: "1 กันยายน 2568",
      description:
        "คณะผู้บริหารกรมสาธารณสุขเข้าร่วมงานมหกรรมสุขภาพแห่งชาติ ณ ศูนย์การประชุมแห่งชาติสิริกิติ์...",
      image: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe",
      href: "#",
      views: 1430,
    },
    {
      id: 4,
      title: "รองอธิบดีกรมร่วมประชุมเชิงปฏิบัติการพัฒนาระบบข้อมูลสุขภาพ",
      date: "28 สิงหาคม 2568",
      description:
        "รองอธิบดีกรมสาธารณสุขเข้าร่วมการประชุมเชิงปฏิบัติการ เพื่อพัฒนาระบบข้อมูลด้านสุขภาพให้มีความทันสมัยและมีประสิทธิภาพ...",
      image: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe",
      href: "#",
      views: 770,
    },
    {
      id: 5,
      title: "ผู้บริหารกรมหารือแนวทางการพัฒนาบุคลากรทางการแพทย์",
      date: "25 สิงหาคม 2568",
      description:
        "ผู้บริหารกรมสาธารณสุขจัดประชุมหารือเพื่อกำหนดแนวทางการพัฒนาศักยภาพบุคลากรทางการแพทย์และสาธารณสุข...",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      href: "#",
      views: 880,
    },
    {
      id: 6,
      title: "รองอธิบดีกรมเข้าร่วมกิจกรรมรณรงค์วันงดสูบบุหรี่โลก",
      date: "20 สิงหาคม 2568",
      description:
        "รองอธิบดีกรมสาธารณสุขเข้าร่วมกิจกรรมรณรงค์วันงดสูบบุหรี่โลก พร้อมเชิญชวนประชาชนตระหนักถึงอันตรายจากบุหรี่...",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      href: "#",
      views: 1090,
    },
    {
      id: 7,
      title: "ผู้บริหารกรมลงพื้นที่ตรวจสอบคุณภาพน้ำดื่มในโรงเรียน",
      date: "15 สิงหาคม 2568",
      description:
        "ผู้บริหารกรมสาธารณสุขลงพื้นที่ตรวจสอบคุณภาพน้ำดื่มในโรงเรียน พร้อมหารือแนวทางแก้ไขปัญหาน้ำดื่มไม่สะอาด...",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
      href: "#",
      views: 1320,
    },
    {
      id: 8,
      title: "ผู้บริหารกรมจัดงานเสวนาเรื่องสุขภาพจิตในวัยทำงาน",
      date: "10 สิงหาคม 2568",
      description:
        "กรมสาธารณสุขจัดเสวนาใหญ่ เรื่องสุขภาพจิตในวัยทำงาน เพื่อสร้างความเข้าใจและหาวิธีดูแลสุขภาพจิตในสังคมยุคปัจจุบัน...",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      href: "#",
      views: 640,
    },
    {
      id: 9,
      title: "ผู้บริหารกรมเข้าร่วมพิธีเปิดโครงการพัฒนาชุมชน",
      date: "5 สิงหาคม 2568",
      description:
        "ผู้บริหารกรมเข้าร่วมพิธีเปิดโครงการพัฒนาชุมชน เพื่อส่งเสริมการมีส่วนร่วมและสุขภาวะที่ยั่งยืนในพื้นที่ห่างไกล...",
      image: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d",
      href: "#",
      views: 720,
    },
  ];

  const firstRow = newsList.slice(0, 4);

  return (
    <section className="container mx-auto px-8 sm:px-0 md:px-0">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Newspaper
              className="w-6 h-6 text-primary"
              aria-label="ข่าวผู้บริหาร"
            />
            ข่าวผู้บริหาร
          </h2>
          <p className="text-gray-500 text-sm">ติดตามข่าวผู้บริหารล่าสุด</p>
        </div>
        <Button
          endContent={
            <ArrowRight size={16} aria-hidden="true" focusable="false" />
          }
          color="primary"
          variant="flat"
          as={Link}
          href="/news/executive"
        >
          ดูทั้งหมด
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        {firstRow.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </section>
  );
}
