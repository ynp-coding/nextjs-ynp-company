import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complain | YNP Company",
  description: "Description",
};

export default function ComplaintPage() {
  return (
    <div className="container mx-auto">
      <Breadcrumbs
        items={[
          { label: "หน้าหลัก", href: "/home" },
          { label: "บริการประชาชน", href: "/home" },
          { label: "ร้องเรียน-ร้องทุกข์" },
        ]}
      />

      <h1 className="mb-6">ร้องเรียน-ร้องทุกข์</h1>
    </div>
  );
}
