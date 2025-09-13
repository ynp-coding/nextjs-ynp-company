import Breadcrumbs from "@/components/ui/breadcrumbs";

import ContactInfo from "./_components/ContactInfo";
import ContactForm from "./_components/ContactForm";

import dynamic from "next/dynamic";
import Spinner from "@/components/ui/spinner";
import { Metadata } from "next";

const DynamicMap = dynamic(() => import("@/components/ui/map"), {
  loading: () => (
    <div className="flex items-center justify-center">
      <Spinner />
    </div>
  ),
  ssr: !!false,
});

export const metadata: Metadata = {
  title: "Contact | YNP Company",
  description: "Description",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-8 sm:px-0 md:px-0 lg:px-0">
      <Breadcrumbs
        items={[{ label: "หน้าหลัก", href: "/home" }, { label: "ติดต่อเรา" }]}
      />

      <h1 className="mb-6">ติดต่อเรา</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <ContactInfo />
        <ContactForm />
      </div>

      <DynamicMap />
    </div>
  );
}
