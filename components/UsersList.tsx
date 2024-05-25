"use client";
import { useChatStore } from "@/store/useChatStore";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { ScrollArea } from "./ui/scroll-area";

export function UsersList() {
  const { name } = useChatStore();

  if (!name) return null;

  return (
    <div className={`absolute top-0 left-0 p-4 h-[calc(100vh-80px)] hidden lg:block `}>
      <p className="text-2xl text-primary pb-5">Online Users</p>
      <ScrollArea className="h-[calc(100vh-80px)] pe-8">
        <div className="flex items-center gap-3 hover:bg-primary/10 p-3 rounded-lg cursor-pointer ">
          <Avatar>
            <AvatarFallback>MK</AvatarFallback>
          </Avatar>
          <p className="text-secondary">Mahmoud </p>
        </div>
        <div className="flex items-center gap-3 hover:bg-primary/10 p-3 rounded-lg cursor-pointer ">
          <Avatar>
            <AvatarFallback>AK</AvatarFallback>
          </Avatar>
          <p className="text-secondary">Ahmed </p>
        </div>
      </ScrollArea>
    </div>
  );
}
