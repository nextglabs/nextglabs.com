import { Box, Flex, Image, BoxProps, ImageProps, FlexProps } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const MotionBox = motion<BoxProps & { custom?: number }>(Box);
export const MotionFlex = motion<FlexProps>(Flex);
export const MotionImage = motion<ImageProps>(Image);
