import { Box, BoxProps } from "@chakra-ui/react";
import { motion } from "framer-motion";

export type MotionBoxProps = BoxProps & { custom?: number };
export const MotionBox = motion<MotionBoxProps>(Box);
