"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, CSSProperties } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number; // in seconds
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number; // in px, default 16
  duration?: number; // in seconds, default 0.45
  className?: string;
  style?: CSSProperties;
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  distance = 16,
  duration = 0.45,
  className = "",
  style = {},
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  const getInitialY = () => {
    if (shouldReduceMotion || direction === "none") return 0;
    if (direction === "up") return distance;
    if (direction === "down") return -distance;
    return 0;
  };

  const getInitialX = () => {
    if (shouldReduceMotion || direction === "none") return 0;
    if (direction === "left") return distance;
    if (direction === "right") return -distance;
    return 0;
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: getInitialY(),
        x: getInitialX(),
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
