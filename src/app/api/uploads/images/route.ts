import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const POST = async (req: Request) => {
  const uploadDir = path.join(process.cwd(), "public/uploads/images");
  if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

  const formData = await req.formData();
  const file = formData.get("image") as File;

  if (!file) return NextResponse.json({ success: 0, message: "No file" });

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const fileName = `${Date.now()}-${file.name}`;
  const filePath = path.join(uploadDir, fileName);

  fs.writeFileSync(filePath, buffer);

  const url = `${
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  }/uploads/images/${fileName}`;

  return NextResponse.json({ success: 1, file: { url } });
};
