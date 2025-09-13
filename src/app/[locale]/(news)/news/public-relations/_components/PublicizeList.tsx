"use client";

import { useMemo, useState } from "react";
import { Input, Button, Pagination, Select, SelectItem } from "@heroui/react";

import { parseThaiDate } from "@/utils/format";
import NewsList from "@/components/ui/news-list";

type NewsItem = {
  id: number;
  title: string;
  date: string;
  views: number;
  href: string;
};

const newsData: NewsItem[] = [
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

export default function PublicizeList() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("date-desc");
  const pageSize = 8;

  // filter & sort
  const filteredItems = useMemo(() => {
    let result = [...newsData];

    if (search) {
      result = result.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    result.sort((a, b) => {
      switch (sort) {
        case "date-desc":
          return (
            parseThaiDate(b.date).getTime() - parseThaiDate(a.date).getTime()
          );
        case "date-asc":
          return (
            parseThaiDate(a.date).getTime() - parseThaiDate(b.date).getTime()
          );
        case "views-desc":
          return b.views - a.views;
        case "views-asc":
          return a.views - b.views;
        case "title-asc":
          return a.title.localeCompare(b.title, "th");
        case "title-desc":
          return b.title.localeCompare(a.title, "th");
        default:
          return 0;
      }
    });

    return result;
  }, [search, sort]);

  const totalPages = Math.ceil(filteredItems.length / pageSize);

  const paginatedItems = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredItems.slice(start, start + pageSize);
  }, [page, filteredItems]);

  return (
    <div className="space-y-6">
      {/* Search + Sort */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
        <Input
          placeholder="ค้นหาข่าว..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="max-w-sm"
        />

        <Select
          aria-label="เรียงลำดับ"
          selectedKeys={[sort]}
          onChange={(e) => {
            setSort(e.target.value);
            setPage(1);
          }}
          className="max-w-xs"
        >
          <SelectItem key="title-asc">ชื่อเรื่อง ก - ฮ</SelectItem>
          <SelectItem key="title-desc">ชื่อเรื่อง ฮ - ก</SelectItem>
          <SelectItem key="date-desc">วันที่ปรับปรุงล่าสุด</SelectItem>
          <SelectItem key="date-asc">วันที่ปรับปรุงเก่าสุด</SelectItem>
          <SelectItem key="views-desc">ยอดเข้าชมมากที่สุด</SelectItem>
          <SelectItem key="views-asc">ยอดเข้าชมน้อยที่สุด</SelectItem>
        </Select>
      </div>

      {/* List */}
      {filteredItems.length === 0 ? (
        <div className="text-center text-gray-500 py-10">
          ไม่พบข้อมูลที่ค้นหา
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          <NewsList items={paginatedItems} />
        </div>
      )}

      {/* Pagination */}
      <div className="py-2 px-2 flex flex-col sm:flex-row justify-between items-center mt-6 gap-2">
        <span className="text-sm text-gray-500">
          ทั้งหมด {filteredItems.length} รายการ
        </span>

        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={totalPages}
          onChange={setPage}
        />

        <div className="hidden sm:flex justify-end gap-2">
          <Button
            isDisabled={page === 1}
            size="sm"
            variant="flat"
            onPress={() => setPage((prev) => Math.max(prev - 1, 1))}
          >
            ก่อนหน้า
          </Button>
          <Button
            isDisabled={page === totalPages}
            size="sm"
            variant="flat"
            onPress={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          >
            ถัดไป
          </Button>
        </div>
      </div>
    </div>
  );
}
