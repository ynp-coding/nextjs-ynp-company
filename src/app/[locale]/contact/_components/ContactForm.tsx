"use client";

import { useState } from "react";
import { Input, Textarea, Button } from "@heroui/react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("ส่งข้อมูลเรียบร้อยแล้ว ✅");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">ส่งเรื่องร้องเรียน/ติดต่อเรา</h2>

      <Input
        label="ชื่อ-นามสกุล"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        fullWidth
        radius="lg"
        variant="bordered"
        type="text"
      />

      <Input
        type="email"
        label="อีเมล"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        fullWidth
        radius="lg"
        variant="bordered"
      />

      <Textarea
        label="ข้อความ"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        fullWidth
        minRows={4}
        radius="lg"
        variant="bordered"
        type="text"
      />

      <Button type="submit" color="primary" fullWidth>
        ส่งข้อความ
      </Button>
    </form>
  );
}
