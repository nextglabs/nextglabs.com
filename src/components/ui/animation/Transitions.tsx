import { useEffect } from "react";
import { SlideFade } from "@chakra-ui/react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MotionBox } from "./Motion";

export const PageSlideFade = ({ children }) => {
	return <SlideFade in>{children}</SlideFade>;
};

const dynamicOrderVariants = {
	visible: (custom = 0) => ({
		opacity: 1,
		transition: { delay: custom * 0.2 },
		translateY: 0,
	}),
	hidden: { opacity: 0, translateY: 50 },
};

export const CardTransition = ({ children, order }) => {
	const [ref, inView] = useInView();
	const controls = useAnimation();

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		} else {
			controls.start("hidden");
		}
	}, [controls, inView]);

	return (
		<MotionBox ref={ref} custom={order} variants={dynamicOrderVariants} initial="hidden" animate={controls}>
			{children}
		</MotionBox>
	);
};
