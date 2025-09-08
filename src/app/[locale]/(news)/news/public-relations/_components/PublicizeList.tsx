"use client";

import { useMemo, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Input,
  Button,
  Pagination,
} from "@heroui/react";
import { CalendarDays, Eye, Search } from "lucide-react";
import Link from "next/link";

type NewsItem = {
  id: number;
  title: string;
  date: string;
  publishDate: string;
  description: string;
  views: number;
  documentUrl?: string;
  url?: string; // สำหรับลิงก์ "อ่านเพิ่มเติม"
};

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "การอบรมเชิงปฏิบัติการประจำปี 2568",
    date: "6 กันยายน 2568",
    publishDate: "1 กันยายน 2568",
    description:
      "เชิญชวนเข้าร่วมการอบรมเชิงปฏิบัติการด้านนวัตกรรมและเทคโนโลยี ณ ศูนย์ประชุมแห่งชาติสิริกิติ์",
    views: 120,
    documentUrl: "/docs/workshop-2568.pdf",
    url: "/news/1",
  },
  {
    id: 2,
    title: "ประกาศปิดทำการชั่วคราว",
    date: "1 กันยายน 2568",
    publishDate: "25 สิงหาคม 2568",
    description:
      "สำนักงานจะปิดทำการในวันที่ 5 กันยายน 2568 เพื่อปรับปรุงระบบไฟฟ้า",
    views: 85,
    documentUrl: "/docs/close-announce.pdf",
    url: "/news/2",
  },
  {
    id: 3,
    title: "กิจกรรมวันเด็กแห่งชาติ",
    date: "10 มกราคม 2568",
    publishDate: "20 ธันวาคม 2567",
    description:
      "ขอเชิญผู้ปกครองนำบุตรหลานเข้าร่วมงานวันเด็กแห่งชาติ ณ ลานกิจกรรมสวนสาธารณะกลางเมือง",
    views: 240,
    documentUrl: "/docs/child-day.pdf",
    url: "/news/3",
  },
];

export default function PublicizeList() {
  const [filterValue, setFilterValue] = useState("");
  const [page, setPage] = useState(1);
  const rowsPerPage = 2;

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
      {items.map((item) => (
        <Card
          key={item.id}
          shadow="sm"
          radius="lg"
          className="hover:shadow-lg transition"
        >
          <CardHeader className="flex flex-col items-start">
            <h2 className="text-xl font-semibold mb-3">{item.title}</h2>
            <div className="flex items-center text-sm text-gray-500 gap-2">
              <CalendarDays size={14} />
              <span>วันที่เผยแพร่: {item.publishDate}</span>
            </div>
          </CardHeader>

          <CardBody className="space-y-3">
            <p className="text-gray-700">{item.description}</p>

            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span>{item.views} ครั้ง</span>
              </div>

              {item.documentUrl && (
                <Link href={item.documentUrl} passHref>
                  <Button size="sm" color="primary" variant="flat">
                    อ่านเพิ่มเติม
                  </Button>
                </Link>
              )}
            </div>
          </CardBody>
        </Card>
      ))}

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
