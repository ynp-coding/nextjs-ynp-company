import Breadcrumbs from "@/components/ui/breadcrumbs";
import OrganizationTree from "./_components/OrganizationTree";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Structure | YNP Company",
  description: "Description",
};

export default function StructurePage() {
  return (
    <div className="container mx-auto px-8 sm:px-0 md:px-0 lg:px-0">
      <Breadcrumbs
        items={[
          { label: "หน้าหลัก", href: "/home" },
          { label: "เกี่ยวกับ" },
          { label: "โครงสร้างองค์กร" },
        ]}
      />

      <h1 className="mb-6">โครงสร้างองค์กร</h1>

      <OrganizationTree />
    </div>
  );
}
