import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionSection = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  id,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "0px 0px -60px 0px",
  });

  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  const d = directions[direction] || directions.up;

  return (
    <motion.div
      ref={ref}
      id={id}
      className={className}
      initial={{ opacity: 0, y: d.y, x: d.x, filter: "blur(8px)" }}
      animate={inView ? { opacity: 1, y: 0, x: 0, filter: "blur(0px)" } : {}}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionSection;
