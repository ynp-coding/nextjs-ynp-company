"use client";

import { Button, Input, Textarea } from "@heroui/react";
import { Save } from "lucide-react";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { saveSeo } from "../_actions/seo";
import { useRouter } from "next/navigation";

type SeoSettings = {
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  seoAuthors: string;
};

type Props = {
  settings: SeoSettings;
};

export default function FormSEO({ settings }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SeoSettings>({
    defaultValues: {
      seoTitle: settings?.seoTitle ?? "",
      seoDescription: settings?.seoDescription ?? "",
      seoKeywords: settings?.seoKeywords ?? "",
      seoAuthors: settings?.seoAuthors ?? "",
    },
  });

  const onSubmit = (data: SeoSettings) => {
    startTransition(async () => {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) =>
        formData.append(key, value)
      );

      const res = await saveSeo(formData);
      if (res.success) {
        router.push("/admin/settings/seo");
      }
    });
  };

  return (
    <form className="w-full py-6 space-y-6" onSubmit={handleSubmit(onSubmit)}>
      {/* Row 1 */}
      <div className="grid grid-cols-2 gap-4">
        <Input
          isRequired
          label="SEO Title"
          labelPlacement="outside"
          placeholder="My Awesome Website"
          {...register("seoTitle")}
          isDisabled={isPending || isSubmitting}
        />

        <Input
          label="SEO Authors"
          labelPlacement="outside"
          placeholder="John Doe, Jane Smith"
          {...register("seoAuthors")}
          isDisabled={isPending || isSubmitting}
        />
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-2 gap-4">
        <Textarea
          isRequired
          label="SEO Description"
          labelPlacement="outside"
          placeholder="This is the best website for..."
          {...register("seoDescription")}
          isDisabled={isPending || isSubmitting}
          minRows={5}
        />

        <Textarea
          label="SEO Keywords"
          labelPlacement="outside"
          placeholder="blog, cms, headless, seo"
          {...register("seoKeywords")}
          isDisabled={isPending || isSubmitting}
          minRows={5}
        />
      </div>

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
  );
}
