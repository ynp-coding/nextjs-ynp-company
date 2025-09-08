"use client";

import { useState, useMemo } from "react";
import { Input, Button, Pagination, Select, SelectItem } from "@heroui/react";

import NewsCard from "@/components/ui/news-card";
import { parseThaiDate } from "@/utils/format";

interface NewsItemProps {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  href: string;
  views: number;
}

export default function ExecutiveNewsList({
  items,
}: {
  items: NewsItemProps[];
}) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("latest");
  const pageSize = 8;

  // filter data ตาม search
  const filteredItems = useMemo(() => {
    let result = [...items];
    if (search) {
      result = result.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // sort
    result.sort((a, b) => {
      if (sort === "latest") {
        return (
          parseThaiDate(b.date).getTime() - parseThaiDate(a.date).getTime()
        );
      }
      if (sort === "oldest") {
        return (
          parseThaiDate(a.date).getTime() - parseThaiDate(b.date).getTime()
        );
      }
      if (sort === "views-desc") {
        return b.views - a.views;
      }
      if (sort === "views-asc") {
        return a.views - b.views;
      }
      if (sort === "title-asc") {
        return a.title.localeCompare(b.title, "th");
      }
      if (sort === "title-desc") {
        return b.title.localeCompare(a.title, "th");
      }
      return 0;
    });

    return result;
  }, [search, items, sort]);

  // แบ่งหน้า
  const paginatedItems = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredItems.slice(start, start + pageSize);
  }, [page, filteredItems]);

  const totalPages = Math.ceil(filteredItems.length / pageSize);

  return (
    <>
      {/* Search + Sort Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
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
          onChange={(e) => setSort(e.target.value)}
          className="max-w-xs"
        >
          <SelectItem key="title-asc">เรียงตามชื่อเรื่อง ก - ฮ</SelectItem>
          <SelectItem key="title-desc">รียงตามชื่อเรื่อง ฮ - ก</SelectItem>
          <SelectItem key="latest">เรียงตามวันที่ปรับปรุงล่าสุด</SelectItem>
          <SelectItem key="oldest">เรียงตามวันที่ปรับปรุงเก่าสุด</SelectItem>
          <SelectItem key="views-desc">เรียงตามยอดเข้าชมมากที่สุด</SelectItem>
          <SelectItem key="views-asc">เรียงตามยอดเข้าชมน้อยที่สุด</SelectItem>
        </Select>
      </div>

      {/* Card List or Empty Message */}
      {filteredItems.length === 0 ? (
        <div className="text-center text-gray-500 py-10">
          ไม่พบข้อมูลที่ค้นหา
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {paginatedItems.map((news) => (
            <div key={news.id}>
              <NewsCard news={news} />
            </div>
          ))}
        </div>
      )}

      {/* Pagination + Info */}
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
    </>
  );
}
