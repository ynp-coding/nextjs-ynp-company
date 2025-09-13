import Breadcrumbs from "@/components/ui/breadcrumbs";
import ExecutiveNewsList from "./_components/ExecutiveNewsList";

import { newsExecutive } from "@/stores/executive";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News Executive | YNP Company",
  description: "Description",
};

export default async function ExecutiveNewsPage() {
  return (
    <div className="container mx-auto px-8 sm:px-0 md:px-0 lg:px-0">
      <Breadcrumbs
        items={[
          { label: "หน้าหลัก", href: "/home" },
          { label: "ข่าวสาร" },
          { label: "ข่าวผู้บริหาร" },
        ]}
      />

      <h1 className="mb-6">ข่าวผู้บริหาร</h1>

      <ExecutiveNewsList items={newsExecutive} />
    </div>
  );
}
