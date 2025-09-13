import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Policy | YNP Company",
  description: "Description",
};

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-8 sm:px-0 md:px-0 lg:px-0">
      <Breadcrumbs
        items={[
          { label: "หน้าหลัก", href: "/home" },
          { label: "นโยบายการรักษาความมั่นคงปลอดภัยเว็บไซต์" },
        ]}
      />

      <h1 className="mb-6">นโยบายการรักษาความมั่นคงปลอดภัยเว็บไซต์</h1>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          เว็บไซต์นี้ใช้คุกกี้เพื่อปรับปรุงประสบการณ์ผู้ใช้งาน
          การวิเคราะห์สถิติการเข้าชม และปรับปรุงเนื้อหาให้เหมาะสม
        </p>
        <p>
          ผู้ใช้งานสามารถปฏิเสธการใช้คุกกี้ได้ แต่บางฟังก์ชันของเว็บไซต์
          อาจไม่สามารถใช้งานได้เต็มประสิทธิภาพ
        </p>
      </div>
    </div>
  );
}
