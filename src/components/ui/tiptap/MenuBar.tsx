"use client";

import { useState, useEffect } from "react";
import {
  Button,
  Divider,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import type { Editor } from "@tiptap/react";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  ChevronDown,
  Heading,
  Heading1,
  Heading2,
  Heading3,
  Highlighter,
  Italic,
  List,
  ListOrdered,
  Strikethrough,
} from "lucide-react";

import InsertImageButton from "./extensions/Image";

interface MenuBarProps {
  editor: Editor | null;
}

export default function MenuBar({ editor }: MenuBarProps) {
  const [currentHeading, setCurrentHeading] = useState(<Heading size={14} />);

  useEffect(() => {
    if (!editor) return;

    const updateHeadingState = () => {
      if (editor.isActive("heading", { level: 1 }))
        setCurrentHeading(<Heading1 size={14} />);
      else if (editor.isActive("heading", { level: 2 }))
        setCurrentHeading(<Heading2 size={14} />);
      else if (editor.isActive("heading", { level: 3 }))
        setCurrentHeading(<Heading3 size={14} />);
      else setCurrentHeading(<Heading size={14} />);
    };

    updateHeadingState();
    editor.on("selectionUpdate", updateHeadingState);
    editor.on("transaction", updateHeadingState);

    return () => {
      editor.off("selectionUpdate", updateHeadingState);
      editor.off("transaction", updateHeadingState);
    };
  }, [editor]);

  if (!editor) return null;

  const headings = [
    {
      key: "h1",
      label: "Heading 1",
      icon: <Heading1 className="size-4" />,
      action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      active: editor.isActive("heading", { level: 1 }),
    },
    {
      key: "h2",
      label: "Heading 2",
      icon: <Heading2 className="size-4" />,
      action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      active: editor.isActive("heading", { level: 2 }),
    },
    {
      key: "h3",
      label: "Heading 3",
      icon: <Heading3 className="size-4" />,
      action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      active: editor.isActive("heading", { level: 3 }),
    },
  ];

  const groups = [
    [
      {
        icon: <Bold className="size-4" />,
        onClick: () => editor.chain().focus().toggleBold().run(),
        active: editor.isActive("bold"),
        label: "Bold",
      },
      {
        icon: <Italic className="size-4" />,
        onClick: () => editor.chain().focus().toggleItalic().run(),
        active: editor.isActive("italic"),
        label: "Italic",
      },
      {
        icon: <Strikethrough className="size-4" />,
        onClick: () => editor.chain().focus().toggleStrike().run(),
        active: editor.isActive("strike"),
        label: "Strikethrough",
      },
      {
        icon: <Highlighter className="size-4" />,
        onClick: () => editor.chain().focus().toggleHighlight().run(),
        active: editor.isActive("highlight"),
        label: "Highlight",
      },
    ],
    [
      {
        icon: <AlignLeft className="size-4" />,
        onClick: () => {
          if (editor.isActive("image")) {
            editor
              .chain()
              .focus()
              .updateAttributes("image", { align: "left" })
              .run();
          } else {
            editor.chain().focus().setTextAlign("left").run();
          }
        },
        active:
          editor.isActive("image", { align: "left" }) ||
          editor.isActive({ textAlign: "left" }),
        label: "Align Left",
      },
      {
        icon: <AlignCenter className="size-4" />,
        onClick: () => {
          if (editor.isActive("image")) {
            editor
              .chain()
              .focus()
              .updateAttributes("image", { align: "center" })
              .run();
          } else {
            editor.chain().focus().setTextAlign("center").run();
          }
        },
        active:
          editor.isActive("image", { align: "center" }) ||
          editor.isActive({ textAlign: "center" }),
        label: "Align Center",
      },
      {
        icon: <AlignRight className="size-4" />,
        onClick: () => {
          if (editor.isActive("image")) {
            editor
              .chain()
              .focus()
              .updateAttributes("image", { align: "right" })
              .run();
          } else {
            editor.chain().focus().setTextAlign("right").run();
          }
        },
        active:
          editor.isActive("image", { align: "right" }) ||
          editor.isActive({ textAlign: "right" }),
        label: "Align Right",
      },
    ],
    [
      {
        icon: <List className="size-4" />,
        onClick: () => editor.chain().focus().toggleBulletList().run(),
        active: editor.isActive("bulletList"),
        label: "Bullet List",
      },
      {
        icon: <ListOrdered className="size-4" />,
        onClick: () => editor.chain().focus().toggleOrderedList().run(),
        active: editor.isActive("orderedList"),
        label: "Ordered List",
      },
    ],
  ];

  return (
    <div className="rounded-xl py-2 px-2 mb-4 bg-gray-100 flex items-center space-x-1 shadow-xs">
      {/* Heading Dropdown */}
      <Dropdown>
        <DropdownTrigger>
          <Button
            size="sm"
            variant="light"
            endContent={<ChevronDown className="size-4" />}
            aria-label={`Current heading: ${currentHeading}`}
          >
            {currentHeading}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Select heading level"
          onAction={(key) => {
            const h = headings.find((item) => item.key === key);
            if (h) h.action();
          }}
        >
          {headings.map((h) => (
            <DropdownItem
              key={h.key}
              startContent={h.icon}
              className={h.active ? "bg-slate-200 font-semibold" : ""}
            >
              {h.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>

      <Divider orientation="vertical" className="mx-2 h-6" />

      {/* Other Toolbar Buttons */}
      {groups.map((group, groupIndex) => (
        <div key={groupIndex} className="flex items-center space-x-1">
          {group.map((option, index) => (
            <Button
              key={index}
              isIconOnly
              size="sm"
              variant={option.active ? "solid" : "light"}
              onPress={option.onClick}
              aria-label={option.label}
            >
              {option.icon}
            </Button>
          ))}
          {groupIndex < groups.length - 1 && (
            <Divider orientation="vertical" className="mx-2 h-6" />
          )}
        </div>
      ))}
      <Divider orientation="vertical" className="mx-2 h-6" />

      <InsertImageButton editor={editor} />
    </div>
  );
}
