import { NodeViewWrapper, NodeViewProps } from "@tiptap/react";
import NextImage from "next/image";

export default function ImageNode({ node, selected }: NodeViewProps) {
  const { src, alt, align } = node.attrs;

  return (
    <NodeViewWrapper
      className={`w-full my-2 flex ${
        align === "left"
          ? "justify-start"
          : align === "right"
          ? "justify-end"
          : "justify-center"
      }`}
    >
      <NextImage
        src={src}
        alt={alt || ""}
        width={600}
        height={400}
        className={`p-1 ${selected ? "ring-2 ring-blue-500" : ""}`}
      />
    </NodeViewWrapper>
  );
}
