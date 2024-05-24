"use client";
import { useIP } from "@/hooks/useIP";
import { db } from "@/lib/firestore";
import { useChatStore } from "@/store/useChatStore";
import { sendChatMessage } from "@/utils/firestore/sendMessgae";
import { collection } from "firebase/firestore";
import { motion } from "framer-motion";
import moment from "moment";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";

export function Chats() {
  const { name } = useChatStore();

  const [col, loading] = useCollection(collection(db, "chats"));
  const ref = useRef<any>();
  const chatBoxRef = useRef<any>();

  const params = useSearchParams();

  const { ip } = useIP();

  const handleSendMessage = async () => {
    if (ref.current) {
      await sendChatMessage({ message: ref.current.value, name: name as string, ip: ip });
      ref.current.value = "";
      ref.current.focus();
    }
  };

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef?.current.scrollBy(0, chatBoxRef.current.scrollHeight);
    }
  }, [col?.docs.length]);

  if (loading) return <div className="h-full flex items-center">loading</div>;

  return (
    <div className="w-full lg:w-[700px] h-[calc(100vh-100px)] py-5">
      <div className="py-5 h-full ">
        <ScrollArea className="w-full h-full bg-primary-foreground/10 rounded-lg " ref={chatBoxRef}>
          <div className="flex flex-col p-5 ">
            {col?.docs &&
              col.docs
                .sort((a, b) => a.data().created.seconds - b.data().created.seconds)
                .map((v, index) => (
                  <motion.div
                    initial={{ opacity: 0, x: "-10px" }}
                    animate={{ opacity: 1, x: "0" }}
                    transition={{ duration: 0.3 }}
                    key={index}
                    className={`my-2 p-2 rounded-md w-fit ${
                      v.data().ip == ip ? "self-end bg-primary text-white" : "bg-secondary text-black"
                    } `}
                    // style={{ backgroundColor: ipHexEncode(ip) }}
                  >
                    <p>{v.data().message}</p>
                    <div className="flex gap-2">
                      <p className={`text-xs  ${v.data().ip == ip ? "text-white/60" : "text-black/60"}`}>
                        {v.data().name}
                      </p>
                      <p
                        className={`text-xs text-white/60 
                      ${v.data().ip == ip ? "text-white/60" : "text-black/60"}`}
                      >
                        {moment.unix(v.data()?.created?.seconds).fromNow()}
                      </p>
                    </div>
                  </motion.div>
                ))}
          </div>
        </ScrollArea>
      </div>

      <div className="w-full flex gap-2">
        <Input placeholder="message" ref={ref} className="w-full" />
        <Button onClick={handleSendMessage}>send</Button>
      </div>
    </div>
  );
}
