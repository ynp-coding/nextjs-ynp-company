"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">ข้อมูลติดต่อ</h2>

      <div className="flex items-center space-x-4">
        <Phone className="w-7 h-7" />
        <span className="text-lg">โทร: 02-123-4567</span>
      </div>

      <div className="flex items-center space-x-4">
        <Mail className="w-7 h-7" />
        <span className="text-lg">อีเมล: info@example.com</span>
      </div>

      <div className="flex items-center space-x-4">
        <MapPin className="w-7 h-7" />
        <span className="text-lg">123 ถนนหลัก เขตบางรัก กรุงเทพฯ</span>
      </div>

      <div className="flex items-center space-x-4">
        <Clock className="w-7 h-7" />
        <span className="text-lg">
          เวลาทำการ: จันทร์ - ศุกร์ 8:30 - 16:30 น.
        </span>
      </div>
    </div>
  );
}
