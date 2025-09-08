"use client";

import { useEditor, EditorContent, type JSONContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import MenuBar from "./MenuBar";

import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import { AlignableImage } from "./extensions/Image/AlignableImage";
import Selection from "./extensions/Image/Selection";

interface TiptapProps {
  content: JSONContent;
  onChange: (content: JSONContent) => void;
}

export default function Tiptap({ content, onChange }: TiptapProps) {
  const editor = useEditor({
    autofocus: true,
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: "list-disc ml-3",
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: "list-decimal ml-3",
          },
        },
        paragraph: {
          HTMLAttributes: {
            class: "py-2 px-2",
          },
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph", "figure"],
      }),
      Highlight,
      AlignableImage.configure({
        inline: true,
        allowBase64: true,
      }),
      Selection,
    ],
    content: content,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          "min-h-[350px] prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl focus:outline-none bg-gray-100 rounded-xl shadow-xs py-3 px-3",
      },
    },
    onUpdate: ({ editor }) => {
      console.log(editor.getJSON());
      onChange(editor.getJSON());
    },
  });

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
