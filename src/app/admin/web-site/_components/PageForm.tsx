"use client";

import { useForm, Controller } from "react-hook-form";
import Tiptap from "@/components/ui/tiptap";
import { type JSONContent } from "@tiptap/react";
import { Button, Input, Select, SelectItem } from "@heroui/react";
import { useTransition } from "react";
import { Save } from "lucide-react";
import { savePage } from "../_actions/create";

type FormValues = {
  slug: string;
  title: string;
  description: string;
  cover: string;
  group: string;
  content: JSONContent;
};

const navigations = [
  { key: "about", label: "About" },
  { key: "service", label: "Service" },
];

export default function PageForm() {
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      slug: "",
      title: "",
      description: "",
      cover: "",
      group: "",
      content: {},
    },
  });

  const toFormData = (data: FormValues) => {
    const formData = new FormData();

    // Loop through all keys in the object
    for (const key in data) {
      if (!data.hasOwnProperty(key)) continue;

      const value = data[key as keyof FormValues];

      // If value is an object (like your content), stringify it
      if (typeof value === "object" && value !== null) {
        formData.append(key, JSON.stringify(value));
      } else if (value !== undefined && value !== null) {
        formData.append(key, String(value));
      }
    }

    return formData;
  };

  const onSubmit = (data: FormValues) => {
    startTransition(async () => {
      console.log("Form data:", data);
      const formData = toFormData(data);
      savePage(formData); // now type matches FormData
    });
  };

  return (
    <>
      <h1 className="text-xl font-bold mb-4">สร้าง Web Page ใหม่</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {/* Slug */}
        <Input {...register("slug")} label="Slug" />

        <div className="grid grid-cols-2 gap-4">
          {/* Title */}
          <Input {...register("title")} label="Title" />

          {/* Group Navigation ใช้ Controller */}
          <Controller
            name="group"
            control={control}
            render={({ field }) => (
              <Select
                label="Group Navigation"
                placeholder="Select a group"
                selectedKeys={field.value ? [field.value] : []}
                onSelectionChange={(keys) =>
                  field.onChange(Array.from(keys)[0] || "")
                }
              >
                {navigations.map((item) => (
                  <SelectItem key={item.key}>{item.label}</SelectItem>
                ))}
              </Select>
            )}
          />
        </div>

        {/* Description + Cover */}
        <Input {...register("description")} label="Description" />
        <Input {...register("cover")} label="Cover" />

        {/* Content (Tiptap) */}
        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <Tiptap content={field.value} onChange={field.onChange} />
          )}
        />

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button
            startContent={<Save size={16} />}
            color="primary"
            type="submit"
            isDisabled={isPending || isSubmitting}
          >
            {isPending || isSubmitting ? "กำลังบันทึก..." : "บันทึกข้อมูล"}
          </Button>
        </div>
      </form>
    </>
  );
}
