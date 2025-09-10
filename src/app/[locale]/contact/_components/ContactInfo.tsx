"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">ข้อมูลติดต่อ</h2>

      <div className="flex items-center space-x-4">
        <Phone className="w-7 h-7" />
        <span className="text-lg">ID: @341eoawp</span>
      </div>

      <div className="flex items-center space-x-4">
        <Mail className="w-7 h-7" />
        <span className="text-lg">อีเมล: onlinepon.dev@gmail.com</span>
      </div>

      <div className="flex items-center space-x-4">
        <MapPin className="w-7 h-7" />
        <span className="text-lg">ถนนติวานนท์ ปากเกร็ด นนทบุรี 11120</span>
      </div>

      <div className="flex items-center space-x-4">
        <Clock className="w-7 h-7" />
        <span className="text-lg">
          เวลาทำการ: เสาร์ - อาทิตย์ 8:30 - 16:30 น.
        </span>
      </div>
    </div>
  );
}
