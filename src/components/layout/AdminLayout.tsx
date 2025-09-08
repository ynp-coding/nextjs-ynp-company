"use client";

import { useState } from "react";
import { SearchIcon } from "lucide-react";
import { Navbar, NavbarContent, Input } from "@heroui/react";

import Sidebar from "@/components/ui/sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((c) => !c)} />

      {/* Main area */}
      <div
        className={`ml-16 transition-[margin] duration-300 ${
          collapsed ? "sm:ml-16" : "sm:ml-64"
        } w-full`}
      >
        <main className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <Navbar
            isBordered
            className="w-full"
            classNames={{
              wrapper: "w-full max-w-full",
            }}
          >
            <NavbarContent className="w-full max-md:hidden">
              <Input
                startContent={<SearchIcon />}
                isClearable
                className="w-full"
                classNames={{
                  input: "w-full",
                  mainWrapper: "w-full",
                }}
                placeholder="Search..."
              />
            </NavbarContent>
          </Navbar>

          <div className="">{children}</div>
        </main>
      </div>
    </div>
  );
}
