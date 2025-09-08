"use client";

import { useState, useEffect } from "react";
import { Card, CardBody, CardHeader, Button, Switch } from "@heroui/react";
import Link from "next/link";

type CookieSettings = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

export default function CookieConsentFull() {
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [settings, setSettings] = useState<CookieSettings>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem("cookie_consent_full");
    if (!saved) setVisible(true);
  }, []);

  const acceptAll = () => {
    const all: CookieSettings = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setSettings(all);
    localStorage.setItem("cookie_consent_full", JSON.stringify(all));
    setVisible(false);
  };

  const saveSettings = () => {
    localStorage.setItem("cookie_consent_full", JSON.stringify(settings));
    setShowModal(false);
    setVisible(false);
  };

  const toggleSetting = (key: keyof CookieSettings) => {
    setSettings({ ...settings, [key]: !settings[key] });
  };

  if (!visible) return null;

  return (
    <>
      {/* Banner */}
      <div className="fixed bottom-4 left-4 right-4 z-50 flex justify-center">
        <Card className="bg-white max-w-3xl w-full shadow-xl rounded-2xl border border-gray-200">
          <CardBody className="flex flex-col md:flex-row items-center justify-between gap-4 p-6">
            <p className="text-gray-700 text-sm md:flex-1">
              เว็บไซต์นี้ใช้คุกกี้เพื่อปรับปรุงประสบการณ์การใช้งาน
              <Link
                href="/cookie-policy"
                className="text-primary underline ml-1"
              >
                อ่านเพิ่มเติม
              </Link>
            </p>

            <div className="flex gap-3">
              <Button
                color="default"
                size="sm"
                onPress={() => setShowModal(true)}
              >
                ตั้งค่าคุกกี้
              </Button>
              <Button color="primary" size="sm" onPress={acceptAll}>
                ยอมรับทั้งหมด
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Modal ตั้งค่าคุกกี้ */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <Card className="max-w-md w-full rounded-2xl shadow-2xl overflow-hidden">
            <CardHeader className="text-xl font-bold text-gray-800">
              ตั้งค่าคุกกี้
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">คุกกี้จำเป็น</p>
                  <p className="text-gray-500 text-sm">
                    จำเป็นสำหรับเว็บไซต์ ใช้งานไม่ได้ถ้าไม่เปิด
                  </p>
                </div>
                <Switch checked={true} disabled />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">คุกกี้สถิติ</p>
                  <p className="text-gray-500 text-sm">
                    ช่วยปรับปรุงประสบการณ์ผู้ใช้งาน
                  </p>
                </div>
                <Switch
                  checked={settings.analytics}
                  onChange={() => toggleSetting("analytics")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">คุกกี้การตลาด</p>
                  <p className="text-gray-500 text-sm">
                    ใช้เพื่อแสดงโฆษณาและโปรโมชั่น
                  </p>
                </div>
                <Switch
                  checked={settings.marketing}
                  onChange={() => toggleSetting("marketing")}
                />
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <Button
                  variant="solid"
                  color="default"
                  size="sm"
                  onPress={() => setShowModal(false)}
                >
                  ยกเลิก
                </Button>
                <Button color="primary" size="sm" onPress={saveSettings}>
                  บันทึกการตั้งค่า
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      )}
    </>
  );
}
