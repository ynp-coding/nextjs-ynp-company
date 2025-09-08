import SubSidebar from "@/components/ui/sub-sidebar";
import { FileText, ImageDown, Video, Library } from "lucide-react";

const items = [
  {
    icon: <Library className="h-5 w-5" />,
    label: "All Library",
    href: "/admin/uploads",
  },
  {
    icon: <FileText className="h-5 w-5" />,
    label: "Files",
    href: "/admin/uploads/files",
  },
  {
    icon: <ImageDown className="h-5 w-5" />,
    label: "Images",
    href: "/admin/uploads/images",
  },
  {
    icon: <Video className="h-5 w-5" />,
    label: "Video",
    href: "/admin/uploads/video",
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
