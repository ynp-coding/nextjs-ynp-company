"use client";

import { Card, CardBody, CardFooter, Image, Button } from "@heroui/react";
import { Eye, CalendarDays } from "lucide-react";
import Link from "next/link";

type NewsCardProps = {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  href: string;
  views: number;
};

export default function NewsCard({ news }: { news: NewsCardProps }) {
  return (
    <Card className="shadow-md hover:shadow-xl transition rounded-2xl overflow-hidden h-full flex flex-col">
      <div className="h-[220px] w-full overflow-hidden">
        <Image
          src={news.image}
          alt={news.title}
          width="100%"
          height={220}
          className="object-cover w-full h-full"
        />
      </div>

      <CardBody className="flex-1 p-5">
        <div className="mb-2">
          <h3 className="text-lg font-semibold line-clamp-2">{news.title}</h3>
          <div className="flex gap-2">
            <CalendarDays size={14} />
            <span className="text-xs text-foreground/60">{news.date}</span>
          </div>
        </div>

        <p className="text-sm text-foreground/60 mt-2 line-clamp-3">
          {news.description}
        </p>
      </CardBody>

      <CardFooter className="flex justify-between p-4">
        <div className="flex items-center space-x-1">
          <Eye className="w-4 h-4" />
          <span className="text-xs text-foreground/60">
            {news.views.toLocaleString()} ครั้ง
          </span>
        </div>
        <Button
          as={Link}
          href={news.href}
          size="sm"
          variant="flat"
          color="primary"
          aria-labelledby="อ่านต่อ"
          className="text-xs"
        >
          อ่านต่อ
        </Button>
      </CardFooter>
    </Card>
  );
}
