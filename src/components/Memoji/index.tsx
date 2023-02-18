import NextImage, { ImageProps } from "next/image";
import { SlideUpTransition } from "../ui/animation/Transitions";

export const Memoji = ({ alt = "memoji", src, width = 128, height = 128, ...props }: ImageProps) => (
  <SlideUpTransition>
    <NextImage alt={alt} src={src} width={width} height={height} priority {...props} />
  </SlideUpTransition>
);
