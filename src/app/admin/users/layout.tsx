import SubSidebar from "@/components/ui/sub-sidebar";
import { FileText, Users, BrickWallShield } from "lucide-react";

const items = [
  {
    icon: <Users className="h-5 w-5" />,
    label: "All User",
    href: "/admin/users",
  },
  {
    icon: <FileText className="h-5 w-5" />,
    label: "Roles",
    href: "/admin/users/roles",
  },
  {
    icon: <BrickWallShield className="h-5 w-5" />,
    label: "Access Control",
    href: "/admin/users/access-control",
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
