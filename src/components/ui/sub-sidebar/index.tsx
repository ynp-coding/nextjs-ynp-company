"use client";
import { ReactNode } from "react";
import { Button } from "@heroui/react";
import Link from "next/link";

interface Item {
  label: string;
  icon: ReactNode;
  href: string;
}

interface SubSidebarProps {
  items: Item[];
}

export default function SubSidebar({ items }: SubSidebarProps) {
  return (
    <div className="w-64 top-0 z-40 p-2 h-screen bg-content1/80 backdrop-blur supports-[backdrop-filter]:bg-content1/60 border-r border-divider transition-[width] duration-300">
      {items.map((it) => (
        <Button
          key={it.label}
          variant="light"
          className={`w-full justify-start px-3`}
          startContent={it.icon}
          as={Link}
          href={it.href}
        >
          {it.label}
        </Button>
      ))}
    </div>
  );
}
