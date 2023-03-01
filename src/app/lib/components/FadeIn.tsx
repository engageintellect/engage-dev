"use client";

import { motion, Variants } from "framer-motion";
import { type PropsWithChildren } from "react";

type FaderProps = {
  component: any;
};

const cardVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 0,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function FadeIn({ component }: PropsWithChildren<FaderProps>) {
  return (
    <>
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0 }}
      >
        <motion.div className="" variants={cardVariants}>
          <div>{component}</div>
        </motion.div>
      </motion.div>
    </>
  );
}
