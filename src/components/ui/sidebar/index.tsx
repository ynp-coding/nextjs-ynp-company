"use client";

import { Button, Divider } from "@heroui/react";
import {
  Home,
  Settings,
  Users,
  Menu,
  LogOut,
  Layers2,
  Upload,
} from "lucide-react";
import Link from "next/link";

const items = [
  {
    icon: <Home className="h-5 w-5" />,
    label: "Dashboard",
    href: "/admin/dashboard",
  },
  {
    icon: <Layers2 className="h-5 w-5" />,
    label: "Web Site",
    href: "/admin/web-site",
  },
  {
    icon: <Upload className="h-5 w-5" />,
    label: "Uploads",
    href: "/admin/uploads",
  },
  {
    icon: <Users className="h-5 w-5" />,
    label: "Users",
    href: "/admin/users",
  },
  {
    icon: <Settings className="h-5 w-5" />,
    label: "Settings",
    href: "/admin/settings/general",
  },
];

export default function Sidebar({
  collapsed,
  onToggle,
}: {
  collapsed: boolean;
  onToggle: () => void;
}) {
  return (
    <aside
      className={`fixed left-0 top-0 z-40 h-screen bg-content1/80 backdrop-blur supports-[backdrop-filter]:bg-content1/60 border-r border-divider transition-[width] duration-300 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex h-16 items-center gap-2 px-3">
        <Button
          isIconOnly
          variant="light"
          onPress={onToggle}
          aria-label="Toggle sidebar"
        >
          <Menu className="h-5 w-5" />
        </Button>
        {!collapsed && (
          <div className="gap-2">
            <span className="font-semibold">YNP Company Admin</span>
          </div>
        )}
      </div>

      <Divider />

      <nav className="p-2">
        {items.map((it) => (
          <Button
            key={it.label}
            variant="light"
            className={`w-full justify-start ${collapsed ? "px-3" : "px-4"}`}
            startContent={it.icon}
            isIconOnly={collapsed}
            as={Link}
            href={it.href}
          >
            {!collapsed && <span className="truncate">{it.label}</span>}
          </Button>
        ))}
      </nav>

      <div className="absolute bottom-0 w-full p-3">
        <Button
          variant="light"
          className={`w-full justify-start ${collapsed ? "px-3" : "px-4"}`}
          startContent={<LogOut />}
          isIconOnly={collapsed}
        >
          {!collapsed && <span className="truncate">ออกจากระบบ</span>}
        </Button>
      </div>
    </aside>
  );
}
