import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy | YNP Company",
  description: "Description",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-8 sm:px-0 md:px-0 lg:px-0">
      <Breadcrumbs
        items={[
          { label: "หน้าหลัก", href: "/home" },
          { label: "นโยบายคุ้มครองข้อมูลส่วนบุคคล" },
        ]}
      />

      <h1 className="mb-6">นโยบายคุ้มครองข้อมูลส่วนบุคคล</h1>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          องค์กรให้ความสำคัญกับการคุ้มครองข้อมูลส่วนบุคคลของผู้ใช้งาน
          ข้อมูลทั้งหมดจะถูกเก็บรักษาอย่างปลอดภัย
          และใช้เพื่อวัตถุประสงค์ตามที่แจ้งในเว็บไซต์
        </p>
        <p>
          เราไม่เปิดเผยข้อมูลส่วนบุคคลแก่บุคคลที่สามโดยไม่ได้รับความยินยอม
          เว้นแต่จะเป็นไปตามกฎหมายหรือข้อบังคับที่เกี่ยวข้อง
        </p>
      </div>
    </div>
  );
}
