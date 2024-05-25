"use client";
import { db } from "@/lib/firestore";
import { useChatStore } from "@/store/useChatStore";
import { collection } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useCollection } from "react-firebase-hooks/firestore";
import { ChatArea } from "./ChatArea";
import { ChatControllers } from "./ChatControllers";

export function Chats() {
  const { ip, name } = useChatStore();
  const router = useRouter();
  const [_, loading] = useCollection(collection(db, "chats"));

  if (!ip || !name) router.push("/");
  if (loading) return <div className="h-full flex items-center text-secondary">loading...</div>;

  return (
    <div className="w-full lg:w-[700px] h-[calc(100vh-100px)] py-5">
      <div className="py-5 h-full ">
        <ChatArea />
      </div>
      <div className="w-full flex gap-2">
        <ChatControllers />
      </div>
    </div>
  );
}
