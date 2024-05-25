"use client";
import { useIP } from "@/hooks/useIP";
import { useChatStore } from "@/store/useChatStore";
import { sendChatMessage } from "@/utils/firestore/sendMessgae";
import { useRef } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { UploadFileButton } from "./UploadFileButton";

export function ChatControllers() {
  const { name } = useChatStore();
  const { ip } = useIP();

  const ref = useRef<any>();
  const handleSendMessage = async () => {
    if (ref.current) {
      await sendChatMessage({ message: ref.current.value, name: name as string, ip: ip });
      ref.current.value = "";
      ref.current.focus();
    }
  };

  return (
    <>
      <Input placeholder="message" ref={ref} className="w-full" />
      <UploadFileButton />
      <Button onClick={handleSendMessage}>send</Button>
    </>
  );
}
