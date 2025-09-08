import Breadcrumbs from "@/components/ui/breadcrumbs";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vision Mission | YNP Company",
  description: "Description",
};

export default function VisionMissionPage() {
  return (
    <div className="container mx-auto">
      <Breadcrumbs
        items={[
          { label: "หน้าหลัก", href: "/home" },
          { label: "เกี่ยวกับ" },
          { label: "วิสัยทัศน์และพันธกิจ" },
        ]}
      />

      <div className="space-y-8">
        {/* วิสัยทัศน์ */}
        <section>
          <h1 className="mb-6">วิสัยทัศน์</h1>
          <p className="text-lg font-medium italic text-gray-700 leading-relaxed">
            “เป็นองค์กรชั้นนำด้านนวัตกรรมดิจิทัลที่มุ่งสร้างคุณค่า
            ยกระดับคุณภาพชีวิต และขับเคลื่อนเศรษฐกิจดิจิทัลไทยสู่มาตรฐานสากล”
          </p>
        </section>

        {/* พันธกิจ */}
        <section>
          <h2 className="text-2xl font-bold mb-4">พันธกิจ</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              พัฒนาระบบและแพลตฟอร์มดิจิทัลที่มีคุณภาพสูง
              รองรับการใช้งานในระดับประเทศ
            </li>
            <li>ส่งเสริมการใช้เทคโนโลยีสารสนเทศในทุกภาคส่วน</li>
            <li>ยกระดับความมั่นคงปลอดภัยไซเบอร์ให้กับระบบสารสนเทศสำคัญ</li>
            <li>สนับสนุนงานวิจัยและนวัตกรรมดิจิทัล</li>
            <li>พัฒนาบุคลากรดิจิทัลให้มีศักยภาพแข่งขันระดับโลก</li>
            <li>สร้างความร่วมมือระหว่างประเทศด้านเทคโนโลยี</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
