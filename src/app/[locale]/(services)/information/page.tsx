import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Metadata } from "next";

const services = [
  {
    title: "ดาวน์โหลดเอกสาร",
    description:
      "เอกสาร คู่มือ หรือแบบฟอร์มต่าง ๆ เกี่ยวกับบริการที่ประชาชนสามารถดาวน์โหลดได้",
    link: "/services/downloads",
  },
  {
    title: "แบบฟอร์มติดต่อ",
    description:
      "ส่งคำถาม ข้อเสนอแนะ หรือร้องขอข้อมูลเพิ่มเติมผ่านแบบฟอร์มออนไลน์",
    link: "/services/contact-form",
  },
  {
    title: "รายงานและสถิติ",
    description:
      "เข้าถึงรายงานและข้อมูลสถิติที่เปิดเผยต่อประชาชน เช่น ผลสำรวจหรือข้อมูลสาธารณะ",
    link: "/services/reports",
  },
  {
    title: "คำถามที่พบบ่อย (FAQ)",
    description:
      "ข้อมูลคำถามและคำตอบเกี่ยวกับการให้บริการ เพื่อให้ประชาชนเข้าใจและเข้าถึงบริการได้ง่าย",
    link: "/services/faq",
  },
];

export const metadata: Metadata = {
  title: "Information | YNP Company",
  description: "Description",
};

export default function ServiceInfoPage() {
  return (
    <div className="container mx-auto">
      <Breadcrumbs
        items={[
          { label: "หน้าหลัก", href: "/home" },
          { label: "บริการประชาชน", href: "/home" },
          { label: "ข้อมูลการบริการ" },
        ]}
      />

      <h1 className="mb-6">ข้อมูลการบริการ</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <a
            key={service.title}
            href={service.link}
            className="block bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border border-gray-100"
          >
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
