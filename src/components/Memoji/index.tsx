import { Avatar, AvatarProps } from "@chakra-ui/react";
import { SlideUpTransition } from "../ui/animation/Transitions";

export const Memoji = ({ name = " ", src, size = "2xl", ...restProps }: AvatarProps) => (
	<SlideUpTransition>
		<Avatar name={name} size={size} src={src} bg="transparent" {...restProps} />
	</SlideUpTransition>
);
