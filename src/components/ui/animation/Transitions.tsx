import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MotionBox } from "./Motion";

const dynamicOrderVariants = {
  visible: (custom = 0) => ({
    opacity: 1,
    transition: { delay: custom * 0.2 },
    translateY: 0,
  }),
  hidden: { opacity: 0, translateY: 50 },
};

export const SlideUpTransition = ({ children, order = 0 }) => {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <MotionBox ref={ref} custom={order} variants={dynamicOrderVariants} initial="hidden" animate={controls}>
      {children}
    </MotionBox>
  );
};

export const HoverTransition = ({ children }) => {
  return <MotionBox whileHover={{ translateY: -5 }}>{children}</MotionBox>;
};
