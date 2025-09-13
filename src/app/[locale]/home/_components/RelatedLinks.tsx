"use client";

import { Card, CardBody } from "@heroui/react";
import Link from "next/link";
import { Globe, Building2, BarChart3, Users } from "lucide-react";

type RelatedLink = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

const relatedLinks: RelatedLink[] = [
  {
    name: "กระทรวงสาธารณสุข",
    href: "https://www.moph.go.th",
    icon: <Building2 className="w-7 h-7" />,
  },
  {
    name: "กรมควบคุมโรค",
    href: "https://www.ddc.moph.go.th",
    icon: <Globe className="w-7 h-7" />,
  },
  {
    name: "สำนักงานสถิติแห่งชาติ",
    href: "http://www.nso.go.th",
    icon: <BarChart3 className="w-7 h-7" />,
  },
  {
    name: "องค์การอนามัยโลก (WHO)",
    href: "https://www.who.int",
    icon: <Users className="w-7 h-7" />,
  },
  {
    name: "สำนักงานรัฐบาลอิเล็กทรอนิกส์",
    href: "https://www.ega.or.th",
    icon: <Globe className="w-7 h-7" />,
  },
];

export default function RelatedLinks() {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-8 py-8 sm:px-0 md:px-0">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Building2 className="w-6 h-6 text-primary" />
              หน่วยงานที่เกี่ยวข้อง
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {relatedLinks.map((link) => (
            <Link key={link.name} href={link.href} target="_blank">
              <Card
                isHoverable
                isPressable
                className="w-full h-[180px] flex flex-col items-center justify-center p-6 rounded-2xl shadow-md"
              >
                <CardBody className="flex flex-col items-center justify-center gap-3 text-center">
                  <div className="text-primary">{link.icon}</div>
                  <span className="text-sm font-medium">{link.name}</span>
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
