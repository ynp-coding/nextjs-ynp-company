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

const aboutUs = [
  { id: 1, label: "ประวัติความเป็นมา", href: "/history" },
  { id: 2, label: "วิสัยทัศน์ พันธกิจ", href: "/vision-mission" },
  { id: 3, label: "ผู้บริหาร", href: "/executive" },
  { id: 4, label: "โครงสร้างหน่วยงาน", href: "/structure" },
];

const services = [
  { id: 1, label: "ข้อมูลการบริการ", href: "/information" },
  { id: 2, label: "ร้องเรียน ร้องทุกข์", href: "/complain" },
];

const news = [
  { id: 1, label: "ข่าวผู้บริหาร", href: "/news/executive" },
  { id: 1, label: "ประชาสัมพันธ์", href: "/news/public-relations" },
];
export default function Navbar() {
  const router = useRouter();

  return (
    <NavbarUI maxWidth="2xl" isBordered>
      <div className="w-full">
        <div className="flex mt-1">
          <NavbarContent>
            <NavbarItem>
              <Button
                disableRipple
                variant="light"
                onPress={() => router.push("/home")}
              >
                หน้าหลัก
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
                    เกี่ยวกับ
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="เมนูเกี่ยวกับองค์กร" items={aboutUs}>
                  {(item) => (
                    <DropdownItem
                      key={`about-${item.id}`}
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
                    ข่าวสาร
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="ข่าวสาร" items={news}>
                  {(item) => (
                    <DropdownItem
                      key={`about-${item.id}`}
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
                    บริการประชาชน
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="บริการเมนู" items={services}>
                  {(item) => (
                    <DropdownItem
                      key={`service-${item.id}`}
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
                ติดต่อ
              </Button>
            </NavbarItem>
          </NavbarContent>

          <NavbarContent justify="end">
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
        </div>
      </div>
    </NavbarUI>
  );
}
