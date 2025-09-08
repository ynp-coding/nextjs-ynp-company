"use server";

import { prisma } from "@/lib/prisma";

export async function getSeo(group: string) {
  const rows = await prisma.setting.findMany({
    where: { group },
  });

  const map: Record<string, string> = {};
  rows.forEach((row) => {
    map[row.key] = String(row.value ?? "");
  });

  return {
    seoTitle: map["seoTitle"] ?? "",
    seoDescription: map["seoDescription"] ?? "",
    seoKeywords: map["seoKeywords"] ?? "",
    seoAuthors: map["seoAuthors"] ?? "",
  };
}

export async function saveSeo(formData: FormData) {
  const entries = [
    {
      key: "seoTitle",
      value: formData.get("seoTitle"),
      group: "seo",
    },
    {
      key: "seoDescription",
      value: formData.get("seoDescription"),
      group: "seo",
    },
    {
      key: "siteLogo",
      value: formData.get("siteLogo"),
      group: "general",
    },
    {
      key: "seoKeywords",
      value: formData.get("seoKeywords"),
      group: "seo",
    },
    {
      key: "seoAuthors",
      value: formData.get("seoAuthors"),
      group: "seo",
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
