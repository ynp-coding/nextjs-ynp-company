import MainLayout from "@/components/layout/MainLayout";

export default async function PoliciesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout>{children}</MainLayout>;
}
