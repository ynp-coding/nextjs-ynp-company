"use client";
import { Button, Chip, Divider } from "@heroui/react";
import { Facebook, Github, Youtube, Instagram } from "lucide-react";
import Link from "next/link";

const aboutUs = [
  {
    title: "ประวัติความเป็นมา",
    href: "/history",
  },
  {
    title: "วิสัยทัศน์ พันธกิจ",
    href: "/vision-mission",
  },
  {
    title: "ผู้บริหาร",
    href: "/executive",
  },
  {
    title: "โครงสร้างองค์กร",
    href: "/structure",
  },
];

const news = [
  {
    title: "ข่าวผู้บริหาร",
    href: "/news/executive",
  },
  {
    title: "ประชาสัมพันธ์",
    href: "/news/public-relations",
  },
];

const services = [
  {
    title: "ข้อมูลการบริการ",
    href: "/information",
  },
  {
    title: "ร้องเรียน ร้องทุกข์",
    href: "/complain",
  },
];

const policies = [
  {
    title: "นโยบายเว็บไซต์",
    href: "policy",
  },
  {
    title: "นโยบายคุ้มครองข้อมูลส่วนบุคคล",
    href: "/privacy",
  },
  {
    title: "นโยบายการรักษาความมั่นคงปลอดภัยเว็บไซต์",
    href: "/security-policy",
  },
];

const socials = [
  {
    icon: <Facebook className="size-4" />,
    href: "#",
  },
  {
    icon: <Github className="size-4" />,
    href: "#",
  },
  {
    icon: <Youtube className="size-4" />,
    href: "#",
  },
  {
    icon: <Instagram className="size-4" />,
    href: "#",
  },
];

export default function Footer() {
  return (
    <div>
      <section className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="flex flex-col gap-y-2">
            <h3>เกี่ยวกับ</h3>
            {aboutUs.map((about, index) => (
              <Link
                key={`about-${index}`}
                href={about.href}
                className="hover:underline"
              >
                {about.title}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-y-2">
            <h3>ข่าวสาร</h3>
            {news.map((news, index) => (
              <Link
                key={`service-${index}`}
                href={news.href}
                className="hover:underline"
              >
                {news.title}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-y-2">
            <h3>บริการประชาชน</h3>
            {services.map((service, index) => (
              <Link
                key={`service-${index}`}
                href={service.href}
                className="hover:underline"
              >
                {service.title}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-y-2">
            <h3>YNP Company</h3>
            <p>ถนนติวานนท์ ปากเกร็ด นนทบุรี 11120</p>
            <div className="flex flex-row gap-2 py-2">
              {socials.map((social, index) =>
                social.href ? (
                  <Button
                    as={Link}
                    key={index}
                    href={social.href}
                    size="sm"
                    variant="light"
                    isIconOnly
                  >
                    {social.icon}
                  </Button>
                ) : (
                  ""
                )
              )}
            </div>
            <span className="text-sm">
              จำนวนผู้เข้าชม{" "}
              <Chip
                color="primary"
                variant="flat"
                size="sm"
                className="uppercase tracking-wide"
              >
                12,999
              </Chip>
            </span>
          </div>
        </div>
      </section>
      <section className="container mx-auto">
        <Divider className="mt-6" />
        <div className="py-6 flex justify-between">
          <small>Copyright &copy; 2025 YNP Coding. All rights reserved.</small>

          <div className="flex gap-x-2">
            {policies.map((policy, index) => (
              <Link
                key={`policy-${index}`}
                href={policy.href}
                className="text-sm hover:underline block"
              >
                {policy.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
