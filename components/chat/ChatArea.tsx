"use client";
import { db } from "@/lib/firestore";
import { useChatStore } from "@/store/useChatStore";
import { collection } from "firebase/firestore";
import { motion } from "framer-motion";
import moment from "moment";
import { useEffect, useRef } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { ScrollArea } from "../ui/scroll-area";

export function ChatArea() {
  const chatBoxRef = useRef<any>();
  const { ip } = useChatStore();
  const [col] = useCollection(collection(db, "chats"));

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef?.current.scrollBy(0, chatBoxRef.current.scrollHeight);
    }
  }, [col?.docs.length]);

  return (
    <ScrollArea className="w-full h-full bg-primary-foreground/10 rounded-lg " ref={chatBoxRef}>
      <div className="flex flex-col p-5 ">
        {col?.docs &&
          col.docs
            .sort((a, b) => a.data().created.seconds - b.data().created.seconds)
            .map((v, index) => {
              return (
                <motion.div
                  initial={{ opacity: 0, x: "-10px" }}
                  animate={{ opacity: 1, x: "0" }}
                  transition={{ duration: 0.3 }}
                  key={index}
                  className={`my-2 p-2 rounded-md w-fit ${
                    v.data().ip == ip ? "self-end bg-primary text-white" : "bg-secondary text-black"
                  } `}
                >
                  {v.data()?.img && (
                    <a href={v.data().img} target="_blank">
                      <img src={v.data().img} className="w-28 h-28 rounded-md" alt={v.data().name} />
                    </a>
                  )}
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
              );
            })}
      </div>
    </ScrollArea>
  );
}
