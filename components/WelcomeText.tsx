"use client";
import { useIP } from "@/hooks/useIP";
import { useChatStore } from "@/store/useChatStore";
import { motion } from "framer-motion";
import { useEffect } from "react";
export function WelcomeText() {
  const { name, setIp } = useChatStore();
  const { ip } = useIP();

  useEffect(() => {
    setIp(ip);
  }, [ip]);

  const welcomeMsg = () => {
    var today = new Date();
    var curHr = today.getHours();
    if (curHr < 12) {
      return "Good Morning";
    } else if (curHr < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="[font-size:_clamp(1em,10vw,3rem)] my-14 text-primary-foreground "
    >
      {welcomeMsg()}, {name}
    </motion.div>
  );
}
