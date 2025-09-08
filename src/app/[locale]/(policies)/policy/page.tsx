import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Policy | YNP Company",
  description: "Description",
};

export default function WebsitePolicyPage() {
  return (
    <div className="container mx-auto py-8">
      <Breadcrumbs
        items={[
          { label: "หน้าหลัก", href: "/home" },
          { label: "นโยบายเว็บไซต์" },
        ]}
      />

      <h1 className="mb-6">นโยบายเว็บไซต์</h1>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          เว็บไซต์นี้จัดทำขึ้นเพื่อให้บริการข้อมูลข่าวสาร และบริการออนไลน์
          ขององค์กร เรามุ่งเน้นความถูกต้อง ความโปร่งใส
          และประสบการณ์ที่ดีต่อผู้ใช้งาน
          ทุกข้อมูลที่เผยแพร่บนเว็บไซต์จะได้รับการตรวจสอบและอัปเดตอย่างสม่ำเสมอ
        </p>
        <p>
          ผู้เข้าชมเว็บไซต์ควรใช้ข้อมูลเพื่อวัตถุประสงค์ส่วนบุคคล
          และไม่กระทำการใด ๆ ที่ละเมิดสิทธิ์ของบุคคลอื่นหรือกฎหมายที่เกี่ยวข้อง
        </p>
      </div>
    </div>
  );
}
