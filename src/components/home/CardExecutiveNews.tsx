"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Button,
  Chip,
  Link,
  Divider,
} from "@heroui/react";
import { CalendarDays, Newspaper } from "lucide-react";
import { formatDate } from "@/utils/format";

export type NewsItem = {
  id: string | number;
  title: string;
  href: string;
  date?: string; // ISO or display-ready string
  description?: string;
  imageUrl?: string;
  tag?: string;
};

export type ExecutiveNewsCardProps = {
  heading?: string;
  main: NewsItem; // latest headline
  sub: NewsItem[]; // 5 items recommended
};

/**
 * ExecutiveNewsCard – HeroUI + Tailwind
 *
 * Renders a news card with 1 main (featured) item and up to 5 sub items.
 * - Drop this file anywhere in your Next.js app (e.g. `components/ExecutiveNewsCard.tsx`).
 * - Ensure `@heroui/react` is installed and Tailwind is configured.
 */
export default function CardExecutiveNews({
  heading = "ข่าวผู้บริหาร",
  main,
  sub,
}: ExecutiveNewsCardProps) {
  const subItems = sub.slice(0, 6);

  return (
    <Card className="max-w-screen-2xl mx-auto" isBlurred>
      <CardHeader className="flex items-center gap-2 p-4">
        <Newspaper className="size-5 shrink-0" aria-hidden />
        <div className="flex-1">
          <h2 className="text-lg sm:text-xl font-semibold leading-tight">
            {heading}
          </h2>
          <p className="text-default-500 text-xs sm:text-sm">
            อัปเดตล่าสุดจากฝ่ายผู้บริหาร
          </p>
        </div>
      </CardHeader>

      <Divider />

      <CardBody className="p-4">
        <section className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <Image
              alt={main.title}
              src={main.imageUrl || "/placeholder-feature.jpg"}
              className="aspect-[16/9] object-cover rounded-b-none"
              removeWrapper
            />
            <div className="flex items-center gap-2 flex-wrap mt-4 mb-2">
              {main.tag && (
                <Chip size="sm" variant="flat" color="primary">
                  {main.tag}
                </Chip>
              )}
              {main.date && (
                <span className="inline-flex items-center gap-1 text-default-500 text-xs">
                  <CalendarDays className="size-3" aria-hidden />
                  {formatDate(main.date)}
                </span>
              )}
            </div>

            <h3 className="text-xl sm:text-2xl font-bold leading-snug group-hover:underline">
              {main.title}
            </h3>

            {main.description && (
              <p className="text-sm line-clamp-3">{main.description}</p>
            )}
          </div>
          <div>
            <ul className="space-y-3">
              {subItems.map((item) => (
                <li key={item.id} className="">
                  <Link
                    href={item.href}
                    className="group flex items-center gap-3 rounded-xl p-2 hover:bg-default-100 transition"
                  >
                    <div className="relative overflow-hidden rounded-xl w-20 h-14 bg-default-100 shrink-0">
                      <Image
                        alt={item.title}
                        src={item.imageUrl || "/placeholder-thumb.jpg"}
                        className="w-full h-full object-cover"
                        removeWrapper
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        {item.tag && (
                          <Chip size="sm" variant="flat" color="secondary">
                            {item.tag}
                          </Chip>
                        )}
                        {item.date && (
                          <span className="inline-flex items-center gap-1 text-default-500 text-[11px]">
                            <CalendarDays className="size-3" aria-hidden />
                            {formatDate(item.date)}
                          </span>
                        )}
                      </div>
                      <p className="font-medium text-sm sm:text-base line-clamp-2 group-hover:underline">
                        {item.title}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex justify-end mt-2">
              <Button as={Link} href="#" variant="bordered" size="sm">
                ดูข่าวทั้งหมด
              </Button>
            </div>
          </div>
        </section>
      </CardBody>
    </Card>
  );
}
