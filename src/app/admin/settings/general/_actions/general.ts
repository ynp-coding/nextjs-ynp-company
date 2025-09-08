"use server";

import { prisma } from "@/lib/prisma";

export async function getGenerals(group: string) {
  const rows = await prisma.setting.findMany({
    where: { group },
  });

  const map: Record<string, string> = {};
  rows.forEach((row) => {
    map[row.key] = String(row.value ?? "");
  });

  return {
    siteName: map["siteName"] ?? "",
    siteDescription: map["siteDescription"] ?? "",
    siteLogo: map["siteLogo"] ?? "",
    siteTimezone: map["siteTimezone"] ?? "",
    siteLanguage: map["siteLanguage"] ?? "th",
  };
}

export async function saveGeneralSettings(formData: FormData) {
  const entries = [
    {
      key: "siteName",
      value: formData.get("siteName"),
      group: "general",
    },
    {
      key: "siteDescription",
      value: formData.get("siteDescription"),
      group: "general",
    },
    {
      key: "siteLogo",
      value: formData.get("siteLogo"),
      group: "general",
    },
    {
      key: "siteTimezone",
      value: formData.get("siteTimezone"),
      group: "general",
    },
    {
      key: "siteLanguage",
      value: formData.get("siteLanguage"),
      group: "general",
    },
  ];

  try {
    for (const entry of entries) {
      if (
        !entry ||
        entry.value === null ||
        entry.value === undefined ||
        entry.value === ""
      ) {
        continue;
      }

      await prisma.setting.upsert({
        where: { key: entry.key }, // แก้ไข syntax error
        update: {
          value: String(entry.value),
          group: entry.group, // แก้ไข variable name
        },
        create: {
          key: entry.key, // แก้ไข variable name
          value: String(entry.value),
          group: entry.group, // เพิ่ม group ในการสร้าง
        },
      });
    }

    return { success: true };
  } catch (error) {
    console.error("Error saving settings:", error);
    return {
      success: false,
      error: "Failed to save settings",
    };
  }
}
