"use client";

import { Button, Input } from "@heroui/react";
import { Save } from "lucide-react";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { saveGeneralSettings } from "../_actions/general";
import { useRouter } from "next/navigation";

type GeneralSettings = {
  siteName: string;
  siteDescription: string;
  siteLogo: string;
  siteTimezone: string;
  siteLanguage: string;
};

type Props = {
  settings: GeneralSettings;
};

export default function FormGeneral({ settings }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<GeneralSettings>({
    defaultValues: {
      siteName: settings?.siteName ?? "",
      siteDescription: settings?.siteDescription ?? "",
      siteLogo: settings?.siteLogo ?? "",
      siteTimezone: settings?.siteTimezone ?? "",
      siteLanguage: settings?.siteLanguage ?? "th",
    },
  });

  const onSubmit = (data: GeneralSettings) => {
    startTransition(async () => {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) =>
        formData.append(key, value)
      );

      const res = await saveGeneralSettings(formData);
      if (res.success) {
        router.push("/admin/settings/general");
      }
    });
  };

  return (
    <form className="w-full py-6 space-y-6" onSubmit={handleSubmit(onSubmit)}>
      {/* Row 1 */}
      <div className="grid grid-cols-2 gap-4">
        <Input
          isRequired
          label="Site Name"
          labelPlacement="outside"
          placeholder="..."
          {...register("siteName")}
          isDisabled={isPending || isSubmitting}
        />

        <Input
          isRequired
          label="Site Description"
          labelPlacement="outside"
          placeholder="..."
          {...register("siteDescription")}
          isDisabled={isPending || isSubmitting}
        />
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-2 gap-4">
        <Input
          isRequired
          label="Site Logo"
          labelPlacement="outside"
          placeholder="..."
          {...register("siteLogo")}
          isDisabled={isPending || isSubmitting}
        />

        <Input
          isRequired
          label="Site Timezone"
          labelPlacement="outside"
          placeholder="..."
          {...register("siteTimezone")}
          isDisabled={isPending || isSubmitting}
        />
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-2 gap-4">
        <Input
          isRequired
          label="Site Language"
          labelPlacement="outside"
          placeholder="..."
          {...register("siteLanguage")}
          isDisabled={isPending || isSubmitting}
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
