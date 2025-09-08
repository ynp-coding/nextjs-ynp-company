"use client";

import Link from "next/link";
import { Breadcrumbs as BreadcrumbsUI, BreadcrumbItem } from "@heroui/react";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <BreadcrumbsUI className="mt-12 mb-8" isDisabled>
      {items.map((item, idx) =>
        item.href ? (
          <BreadcrumbItem key={idx}>
            <Link href={item.href}>{item.label}</Link>
          </BreadcrumbItem>
        ) : (
          <BreadcrumbItem key={idx}>{item.label}</BreadcrumbItem>
        )
      )}
    </BreadcrumbsUI>
  );
}
