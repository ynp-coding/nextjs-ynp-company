"use client";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import { CalendarClockIcon } from "lucide-react";

export default function CardCalendarActivity() {
  return (
    <section className="grid grid-cols-3 my-6 gap-4">
      <div className="">
        <Card>
          <CardHeader className="flex items-center gap-2 p-4">
            <CalendarClockIcon className="size-5 shrink-0" aria-hidden />
            <div className="flex-1">
              <h2 className="text-lg sm:text-xl font-semibold leading-tight">
                ปฎิทินกิจกรรม
              </h2>
              <p className="text-default-500 text-xs sm:text-sm">
                อัปเดตล่าสุดจากฝ่ายผู้บริหาร
              </p>
            </div>
          </CardHeader>
          <CardBody className="h-[374px]">
            <Divider />
          </CardBody>
        </Card>
      </div>
      <div className="col-span-2">
        <Card className="h-[450px] rounded-xl"></Card>
      </div>
    </section>
  );
}
