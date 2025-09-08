import SubSidebar from "@/components/ui/sub-sidebar";
import { FileText, PanelsTopLeft } from "lucide-react";

const items = [
  {
    icon: <PanelsTopLeft className="h-5 w-5" />,
    label: "General",
    href: "/admin/settings/general",
  },
  {
    icon: <FileText className="h-5 w-5" />,
    label: "SEO",
    href: "/admin/settings/seo",
  },
];

export default function SettingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex">
      <SubSidebar items={items} />
      <div className="px-4 w-full">{children}</div>
    </div>
  );
}
