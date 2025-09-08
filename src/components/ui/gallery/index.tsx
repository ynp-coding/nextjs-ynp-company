"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface GalleryProps {
  onSelect: (src: string) => void;
}

interface ImageInfo {
  src: string;
  name: string;
  ext: string;
  size?: string; // e.g. "120 KB"
}

const images = [
  "/uploads/images/img1.jpg",
  "/uploads/images/img2.jpg",
  "/uploads/images/img3.jpg",
];

export default function Gallery({ onSelect }: GalleryProps) {
  const [imageInfo, setImageInfo] = useState<ImageInfo[]>([]);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    async function fetchInfo() {
      const info: ImageInfo[] = await Promise.all(
        images.map(async (src) => {
          const fileName = src.split("/").pop() ?? "image.jpg";

          // แยก name + ext แบบปลอดภัย
          const dotIndex = fileName.lastIndexOf(".");
          const name = dotIndex !== -1 ? fileName.slice(0, dotIndex) : fileName;
          const ext = dotIndex !== -1 ? fileName.slice(dotIndex + 1) : "";

          let size = "";
          try {
            const res = await fetch(src, { method: "HEAD" });
            if (res.ok) {
              const contentLength = res.headers.get("content-length");
              if (contentLength) {
                const kb = Number(contentLength) / 1024;
                size =
                  kb > 1024
                    ? `${(kb / 1024).toFixed(1)} MB`
                    : `${kb.toFixed(1)} KB`;
              }
            }
          } catch {
            console.warn("Cannot fetch size for", src);
          }

          return { src, name, ext, size };
        })
      );
      setImageInfo(info);
    }

    fetchInfo();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-2">
        {imageInfo.map(({ src, name, ext, size }) => {
          const isSelected = selected === src;
          return (
            <button
              key={src}
              type="button"
              className={`relative w-full aspect-square overflow-hidden rounded-lg focus:ring-2 focus:ring-blue-500 flex flex-col ${
                isSelected ? "ring-2 ring-blue-500" : "hover:opacity-80"
              }`}
              onClick={() => setSelected(src)}
              aria-label={`Select ${name}.${ext}`}
            >
              <div className="relative flex-1 w-full">
                <Image
                  src={src}
                  alt={`${name}.${ext}`}
                  fill
                  sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
                  className="object-cover"
                />
                {isSelected && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-3xl font-bold">
                    ✓
                  </div>
                )}
              </div>
              <div className="p-1 text-xs text-center bg-white dark:bg-gray-800">
                <p className="truncate font-medium">{name}</p>
                <p className="text-gray-500">
                  .{ext} {size && `- ${size}`}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Insert button */}
      <div className="flex justify-end px-2">
        <Button
          type="button"
          isDisabled={!selected}
          onPress={() => selected && onSelect(selected)}
          color="primary"
        >
          เลือก
        </Button>
      </div>
    </div>
  );
}
