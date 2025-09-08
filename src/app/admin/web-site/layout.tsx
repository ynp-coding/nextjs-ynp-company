import SubSidebar from "@/components/ui/sub-sidebar";
import { FileText, ImageDown, Calendar1, Layout, Home } from "lucide-react";

const items = [
  {
    icon: <Home className="h-5 w-5" />,
    label: "Home",
    href: "/admin/web-site",
  },
  {
    icon: <FileText className="h-5 w-5" />,
    label: "Pages",
    href: "/admin/web-site/pages",
  },
  {
    icon: <ImageDown className="h-5 w-5" />,
    label: "News",
    href: "/admin/web-site/news",
  },
  {
    icon: <Calendar1 className="h-5 w-5" />,
    label: "Calendar",
    href: "/admin/web-site/calendar",
  },
  {
    icon: <Layout className="h-5 w-5" />,
    label: "Global",
    href: "/admin/web-site/posts",
  },
];

export default function WebSiteLayout({
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
