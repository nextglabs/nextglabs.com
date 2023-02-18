// Image.js
import { chakra } from "@chakra-ui/react";
import NextImage from "next/image";

export const Image = chakra(NextImage, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt", "fill"].includes(prop),
});
