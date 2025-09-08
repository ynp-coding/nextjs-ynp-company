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
import { useRouter } from "next/navigation";

import Image from "next/image";

export const AcmeLogo = () => (
  <svg fill="none" height="100" width="100" viewBox="0 0 32 32">
    <path
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
    />
  </svg>
);

export default function Header() {
  const router = useRouter();

  // Font size state
  const [fontSize, setFontSize] = useState(16);
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  // Language state
  const [language, setLanguage] = useState<"th" | "en">("th");

  // Social links
  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Youtube, label: "Youtube", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Contact, label: "Contact", href: "/contact" },
  ];

  return (
    <NavbarUI maxWidth="2xl" isBordered classNames={{ base: ["h-24"] }}>
      <div className="w-full">
        <div className="flex items-center justify-between">
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
              className="rounded-full h-18 w-18 mr-2"
            />
            <div className="ml-2">
              <p className="font-bold text-2xl">YNP Company</p>
              <span className="text-sm text-gray-600">
                Department of YNP Company
              </span>
            </div>
          </NavbarBrand>

          <NavbarContent justify="end">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="light"
                    isIconOnly
                    aria-label="ลดขนาดตัวอักษร"
                    onPress={() =>
                      setFontSize((prev) => Math.max(14, prev - 2))
                    }
                    radius="full"
                  >
                    ก <Minus size={12} />
                  </Button>
                  <span className="text-sm font-medium">{fontSize}px</span>
                  <Button
                    size="sm"
                    variant="light"
                    isIconOnly
                    aria-label="เพิ่มขนาดตัวอักษร"
                    onPress={() =>
                      setFontSize((prev) => Math.min(24, prev + 2))
                    }
                    radius="full"
                  >
                    ก <Plus size={12} />
                  </Button>
                </div>

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
                    onAction={(key) => setLanguage(key as "th" | "en")}
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
              </div>

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
                  >
                    <Icon size={16} />
                  </Button>
                ))}
              </div>
            </div>
          </NavbarContent>
        </div>
      </div>
    </NavbarUI>
  );
}
