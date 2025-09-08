import MainLayout from "@/components/layout/MainLayout";

export default async function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout>{children}</MainLayout>;
}
