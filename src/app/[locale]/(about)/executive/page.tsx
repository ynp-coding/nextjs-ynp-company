import Image from "next/image";
import Breadcrumbs from "@/components/ui/breadcrumbs";

const executives = [
  {
    name: "นายสมชาย สุขเจริญ",
    role: "ประธานกรรมการบริหาร (CEO)",
    image: "https://i.pravatar.cc/256?img=1",
  },
  {
    name: "นางสาววารุณี อินทรสุข",
    role: "รองประธานฝ่ายกลยุทธ์และพัฒนาองค์กร (CSO)",
    image: "https://i.pravatar.cc/256?img=2",
  },
  {
    name: "นายปริญญา ทองแท้",
    role: "ประธานเจ้าหน้าที่ฝ่ายเทคโนโลยี (CTO)",
    image: "https://i.pravatar.cc/256?img=3",
  },
  {
    name: "นางกมลวรรณ ศรีสวัสดิ์",
    role: "ประธานเจ้าหน้าที่ฝ่ายนวัตกรรม (CINO)",
    image: "https://i.pravatar.cc/256?img=4",
  },
  {
    name: "นายพงษ์ศักดิ์ ธนบดี",
    role: "ประธานเจ้าหน้าที่ฝ่ายการเงิน (CFO)",
    image: "https://i.pravatar.cc/256?img=5",
  },
];

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Executive | YNP Company",
  description: "Description",
};

export default function ExecutivesPage() {
  return (
    <div className="container mx-auto">
      <Breadcrumbs
        items={[
          { label: "หน้าหลัก", href: "/home" },
          { label: "เกี่ยวกับ" },
          { label: "ผู้บริหาร" },
        ]}
      />

      <div className="space-y-8">
        <h1 className="mb-6">ผู้บริหาร</h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {executives.map((exec, index) => (
            <div
              key={index}
              className="p-4 flex flex-col items-center text-center bg-white"
            >
              <div className="w-32 h-32 relative mb-4">
                <Image
                  src={exec.image}
                  alt={exec.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <p className="font-semibold text-lg">{exec.name}</p>
              <p className="text-gray-600">{exec.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
