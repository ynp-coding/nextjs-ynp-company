"use client";

import {
  Navbar as NavbarUI,
  NavbarContent,
  NavbarItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Input,
} from "@heroui/react";

import { ChevronDown, SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const aboutUs = [
  { id: "about-1", href: "/history" },
  { id: "about-2", href: "/vision-mission" },
  { id: "about-3", href: "/executive" },
  { id: "about-4", href: "/structure" },
];

const services = [
  { id: "service-1", href: "/information" },
  { id: "service-2", href: "/complain" },
];

const news = [
  { id: "news-1", href: "/news/executive" },
  { id: "news-2", href: "/news/public-relations" },
];

export default function Navbar() {
  const router = useRouter();
  const t = useTranslations();

  return (
    <NavbarUI maxWidth="2xl" isBordered>
      <NavbarContent className="hidden sm:flex">
        <NavbarItem>
          <Button
            disableRipple
            variant="light"
            onPress={() => router.push("/home")}
          >
            {t("navbar.home")}
          </Button>
        </NavbarItem>

        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button
                disableRipple
                variant="light"
                endContent={<ChevronDown size={16} />}
              >
                {t("navbar.about.label")}
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="เมนูเกี่ยวกับองค์กร" items={aboutUs}>
              {(item) => (
                <DropdownItem
                  key={`${item.id}`}
                  onPress={() => router.push(item.href)}
                >
                  {t(`navbar.about.links.${item.id}`)}
                </DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>

        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button
                disableRipple
                variant="light"
                endContent={<ChevronDown size={16} />}
              >
                {t("navbar.news.label")}
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="ข่าวสาร" items={news}>
              {(item) => (
                <DropdownItem
                  key={`${item.id}`}
                  onPress={() => router.push(item.href)}
                >
                  {t(`navbar.news.links.${item.id}`)}
                </DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>

        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button
                disableRipple
                variant="light"
                endContent={<ChevronDown size={16} />}
              >
                {t("navbar.services.label")}
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="บริการเมนู" items={services}>
              {(item) => (
                <DropdownItem
                  key={`${item.id}`}
                  onPress={() => router.push(item.href)}
                >
                  {t(`navbar.services.links.${item.id}`)}
                </DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>

        <NavbarItem>
          <Button
            disableRipple
            variant="light"
            onPress={() => router.push("/contact")}
          >
            {t("navbar.contact")}
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex" justify="end">
        <NavbarItem>
          <Input
            startContent={<SearchIcon size={16} />}
            isClearable
            className="w-full"
            classNames={{
              input: "w-full",
              mainWrapper: "w-full",
            }}
            placeholder="ค้นหา..."
            aria-label="ค้นหา"
          />
        </NavbarItem>
      </NavbarContent>
    </NavbarUI>
  );
}
