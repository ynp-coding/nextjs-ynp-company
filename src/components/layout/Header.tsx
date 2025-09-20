"use client";

import { useState, useEffect } from "react";
import {
  Navbar as NavbarUI,
  NavbarBrand,
  NavbarContent,
  Link,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  NavbarItem,
} from "@heroui/react";
import {
  ChevronDown,
  Contact,
  Facebook,
  Globe,
  Instagram,
  Minus,
  Network,
  Plus,
  Youtube,
} from "lucide-react";

import { useRouter, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { useTheme } from "next-themes";

import Image from "next/image";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const { setTheme } = useTheme();

  // Font size state
  const [fontSize, setFontSize] = useState(16);
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--font-size-base",
      `${fontSize}px`
    );
  }, [fontSize]);

  // Language state
  const [language, setLanguage] = useState<"th" | "en">(
    (currentLocale as "th" | "en") || "th"
  );

  const changeLocale = (key: string) => {
    setLanguage(key as "th" | "en");
    router.push(pathname, { locale: key });
  };

  // Social links
  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Youtube, label: "Youtube", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Contact, label: "Contact", href: "/contact" },
  ];

  return (
    <NavbarUI
      maxWidth="full"
      isBordered
      classNames={{ base: ["h-24"], content: "gap-2" }}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <NavbarBrand
          onClick={() => router.push("/home")}
          className="cursor-pointer"
        >
          <Image
            src={"/uploads/logo/logo.png"}
            width={100}
            height={100}
            alt="Logo"
            priority
            className="rounded-full h-10 w-10 sm:h-18 sm:w-18"
          />
          <div className="ml-2">
            <p className="font-bold sm:text-2xl">YNP Company</p>
            <span className="sm:text-lg">Department of YNP Company</span>
          </div>
        </NavbarBrand>

        <NavbarContent className="flex-col items-end hidden sm:flex">
          {/* แถวที่ 1: font size + language */}
          <NavbarItem className="flex gap-2">
            <Button
              size="sm"
              variant="light"
              className="bg-[#18181B] text-white"
              isIconOnly
              aria-label="พื้นหลังสีดำ ตัวอักษรสีขาว"
              onPress={() => setTheme("dark")}
              radius="full"
            >
              ก
            </Button>
            <Button
              size="sm"
              variant="light"
              className="bg-white text-black"
              isIconOnly
              aria-label="พื้นหลังสีขาว ตัวอักษรสีดำ"
              onPress={() => setTheme("light")}
              radius="full"
            >
              ก
            </Button>
            <Button
              size="sm"
              variant="light"
              className="bg-black text-[#FFFF00]"
              isIconOnly
              aria-label="พื้นหลังสีดำ ตัวอักษรสีเหลือง"
              onPress={() => setTheme("contrast")}
              radius="full"
            >
              ก
            </Button>
            <Button
              size="sm"
              variant="light"
              isIconOnly
              aria-label="ลดขนาดตัวอักษร"
              onPress={() => setFontSize((prev) => Math.max(12, prev - 2))}
              radius="full"
            >
              ก <Minus size={14} />
            </Button>
            <Button
              size="sm"
              variant="light"
              isIconOnly
              aria-label="ลดขนาดตัวอักษร"
              onPress={() => setFontSize(16)}
              radius="full"
            >
              ก
            </Button>
            <Button
              size="sm"
              variant="light"
              isIconOnly
              aria-label="เพิ่มขนาดตัวอักษร"
              onPress={() => setFontSize((prev) => Math.min(20, prev + 2))}
              radius="full"
            >
              ก <Plus size={14} />
            </Button>

            <Dropdown>
              <DropdownTrigger>
                <Button
                  size="sm"
                  variant="light"
                  startContent={<Globe size={16} />}
                  endContent={<ChevronDown size={16} />}
                  className="bg-transparent"
                >
                  {language === "th" ? "ไทย" : "English"}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="เลือกภาษา"
                onAction={(key) => changeLocale(key as "th" | "en")}
              >
                <DropdownItem key="th">ไทย</DropdownItem>
                <DropdownItem key="en">English</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Button
              size="sm"
              variant="light"
              isIconOnly
              aria-label="site map"
              onPress={() => router.push("/site-map")}
            >
              <Network size={16} />
            </Button>
          </NavbarItem>

          {/* แถวที่ 2: site map + social links */}
          <NavbarItem className="flex gap-2">
            <div className="flex gap-2 justify-end">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <Button
                  key={label}
                  as={Link}
                  href={href}
                  size="sm"
                  variant="light"
                  isIconOnly
                  aria-label={`ลิงก์ ${label}`}
                  radius="full"
                  aria-labelledby={`ลิงก์ ${label}`}
                >
                  <Icon size={16} />
                  <span className="sr-only">{`links social ${label}`}</span>
                </Button>
              ))}
            </div>
          </NavbarItem>
        </NavbarContent>
      </div>
    </NavbarUI>
  );
}
