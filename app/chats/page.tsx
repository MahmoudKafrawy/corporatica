import { Chats } from "@/components/chat/Chats";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chats",
};
export default function Page() {
  return (
    <main className="h-full flex flex-col items-center container">
      <Chats />
    </main>
  );
}
