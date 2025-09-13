import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Metadata } from "next";
import PublicizeList from "./_components/PublicizeList";

export const metadata: Metadata = {
  title: "Public Relations | YNP Company",
  description: "Description",
};

export default async function Page() {
  return (
    <div className="container mx-auto px-8 sm:px-0 md:px-0 lg:px-0">
      <Breadcrumbs
        items={[
          { label: "หน้าหลัก", href: "/home" },
          { label: "ข่าวสาร" },
          { label: "ประชาสัมพันธ์" },
        ]}
      />

      <h1 className="mb-6">ประชาสัมพันธ์</h1>

      <PublicizeList />
    </div>
  );
}
