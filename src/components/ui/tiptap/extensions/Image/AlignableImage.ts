import Image from "@tiptap/extension-image";
import { ReactNodeViewRenderer } from "@tiptap/react";
import ImageNode from "./ImageNode";

export const AlignableImage = Image.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      align: {
        default: "left", // left | center | right
        parseHTML: (element) => element.getAttribute("data-align") || "center",
        renderHTML: (attributes) => {
          let style = "display: block;";

          if (attributes.align === "left") {
            style += "margin: 0 auto 0 0;";
          } else if (attributes.align === "right") {
            style += "margin: 0 0 0 auto;";
          } else {
            style += "margin: 0 auto;";
          }

          return {
            "data-align": attributes.align,
            style,
          };
        },
      },
    };
  },
  addNodeView() {
    return ReactNodeViewRenderer(ImageNode);
  },
});
