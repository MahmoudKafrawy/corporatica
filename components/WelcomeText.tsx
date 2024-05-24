"use client";
import { useChatStore } from "@/store/useChatStore";
import { motion } from "framer-motion";
export function WelcomeText() {
  const { name } = useChatStore();

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="[font-size:_clamp(1em,10vw,3rem)] my-14 text-primary-foreground "
    >
      Good evening, {name}
    </motion.div>
  );
}
