"use client";

import { useMemo, useState } from "react";
import { Input, Button, Pagination } from "@heroui/react";
import { Search } from "lucide-react";

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
  const [filterValue, setFilterValue] = useState("");
  const [page, setPage] = useState(1);
  const rowsPerPage = 6;

  const filteredItems = useMemo(() => {
    return newsData.filter((item) =>
      item.title.toLowerCase().includes(filterValue.toLowerCase())
    );
  }, [filterValue]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    return filteredItems.slice(start, start + rowsPerPage);
  }, [page, filteredItems]);

  const onPreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const onNextPage = () => {
    if (page < pages) setPage(page + 1);
  };

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="flex justify-between items-center">
        <Input
          isClearable
          className="w-full sm:max-w-[400px]"
          placeholder="ค้นหาประชาสัมพันธ์..."
          startContent={<Search className="text-gray-400" size={18} />}
          value={filterValue}
          onClear={() => setFilterValue("")}
          onValueChange={setFilterValue}
        />
      </div>

      {/* List */}
      <NewsList items={items} />

      {/* Footer Pagination */}
      <div className="py-2 px-2 flex justify-between items-center">
        <span className="w-[30%] text-small text-default-400">
          {filteredItems.length} รายการ
        </span>
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button
            isDisabled={page === 1}
            size="sm"
            variant="flat"
            onPress={onPreviousPage}
          >
            ก่อนหน้า
          </Button>
          <Button
            isDisabled={page === pages}
            size="sm"
            variant="flat"
            onPress={onNextPage}
          >
            ถัดไป
          </Button>
        </div>
      </div>
    </div>
  );
}
