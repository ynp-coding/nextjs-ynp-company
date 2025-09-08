"use client";

import Tiptap from "@/components/ui/tiptap";
import { type JSONContent } from "@tiptap/react";
import { useState } from "react";

export default function Pages() {
  const [content, setContent] = useState<JSONContent>({
    type: "doc",
    content: [],
  });

  return (
    <div className="px-4 mx-auto py-8">
      <h1 id="page-content" className="text-3xl font-bold mb-4">
        Page Content
      </h1>

      <Tiptap content={content} onChange={setContent} />

      <pre className="mt-4 p-2 bg-gray-100 rounded">
        {JSON.stringify(content, null, 2)}
      </pre>
    </div>
  );
}
