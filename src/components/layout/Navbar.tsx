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

interface MenuItem {
  id: string;
  label: string;
  href: string;
}

export default function Navbar() {
  const router = useRouter();
  const t = useTranslations();

  const aboutUs = Object.values(t.raw("navbar.about.links")) as MenuItem[];
  const news = Object.values(t.raw("navbar.news.links")) as MenuItem[];
  const services = Object.values(t.raw("navbar.services.links")) as MenuItem[];

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
            <DropdownMenu aria-label={t("navbar.about.label")} items={aboutUs}>
              {(item) => (
                <DropdownItem
                  key={`${item.id}`}
                  onPress={() => router.push(item.href)}
                >
                  {item.label}
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
            <DropdownMenu aria-label={t("navbar.news.label")} items={news}>
              {(item) => (
                <DropdownItem
                  key={`${item.id}`}
                  onPress={() => router.push(item.href)}
                >
                  {item.label}
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
            <DropdownMenu
              aria-label={t("navbar.services.label")}
              items={services}
            >
              {(item) => (
                <DropdownItem
                  key={`${item.id}`}
                  onPress={() => router.push(item.href)}
                >
                  {item.label}
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
            placeholder={t("common.search")}
            aria-label={t("common.search")}
            type="text"
            label={t("common.search")}
          />
        </NavbarItem>
      </NavbarContent>
    </NavbarUI>
  );
}
