"use client";
import { CalendarDays, Eye } from "lucide-react";
import Link from "next/link";
import { Button } from "@heroui/react";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  views: number;
  href: string;
}

interface NewsListProps {
  items: NewsItem[];
}

export default function NewsList({ items }: NewsListProps) {
  return (
    <ul className="divide-y divide-gray-200">
      {items.map((news) => (
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
            aria-labelledby="อ่านต่อ"
          >
            อ่านต่อ
          </Button>
        </li>
      ))}
    </ul>
  );
}
