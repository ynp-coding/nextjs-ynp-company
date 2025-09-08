"use server";

import { prisma } from "@/lib/prisma";
import fs from "fs";
import path from "path";

export async function savePage(formData: FormData) {
  const slug = formData.get("slug") as string;
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const content = formData.get("content") as string;
  const coverFile = formData.get("cover") as File | null;
  const group = formData.get("group") as File | null;

  try {
    let coverPath: string | null = null;

    // ถ้ามีการอัปโหลดไฟล์ cover → บันทึกไฟล์ไปที่ /public/uploads
    if (coverFile && coverFile.size > 0) {
      const buffer = Buffer.from(await coverFile.arrayBuffer());
      const filename = `${Date.now()}-${coverFile.name}`;
      const uploadDir = path.join(process.cwd(), "public/uploads");
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }
      fs.writeFileSync(path.join(uploadDir, filename), buffer);
      coverPath = `${process.env.NEXT_PUBLIC_PUBLIC_URL}/uploads/images/${filename}`;
    }

    // ใช้ upsert → update ถ้ามี slug เดิม, create ถ้าไม่มี
    await prisma.content.upsert({
      where: { slug },
      update: {
        title,
        description,
        cover: String(coverPath),
        content,
        group: String(group),
      },
      create: {
        slug,
        title,
        description,
        cover: String(coverPath),
        content,
        group: String(group),
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Error saving content:", error);
    return {
      success: false,
      error: "Failed to save content",
    };
  }
}
