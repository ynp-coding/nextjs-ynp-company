"use client";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalContent,
  useDisclosure,
  Tooltip,
} from "@heroui/react";

import type { Editor } from "@tiptap/react";
import Gallery from "./Gallery";
import { ImageDown } from "lucide-react";

interface ImageProps {
  editor: Editor | null;
}

export default function InsertImageButton({ editor }: ImageProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (!editor) return null;

  const insertImage = (url: string) => {
    // editor
    //   .chain()
    //   .focus()
    //   .setImage({ src: url, width: 300, height: 300 })
    //   .run();
    // Assuming you have a way to get the editor instance and the selected image node
    editor
      .chain()
      .focus()
      .setImage({ src: url, width: 300, height: 300 })
      .updateAttributes("image", { align: "center" })
      .run();

    onClose();
  };

  return (
    <>
      <Tooltip content="Image" placement="bottom">
        <Button
          onPress={onOpen}
          startContent={<ImageDown className="size-4" />}
          size="sm"
          isIconOnly
          variant="light"
        />
      </Tooltip>
      <Modal isOpen={isOpen} size={"4xl"} onClose={onClose}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            Uploads Images
          </ModalHeader>
          <ModalBody>
            <Gallery onSelect={insertImage} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
