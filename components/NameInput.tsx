"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useBoundStore } from "@/store/useBoundStore";
import { useChatStore } from "@/store/useChatStore";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export function NameInput() {
  const router = useRouter();
  const ref = useRef<any>();
  const { setName, name } = useChatStore();
  const { _hasHydrated } = useBoundStore();

  if (!_hasHydrated) return null;

  if (name)
    return (
      <div className="flex flex-col gap-8">
        <Button type="submit" onClick={() => router.push("/chats")}>
          Start chat
          <ChevronRight />
        </Button>
      </div>
    );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setName(ref.current.value);
      }}
      className="z-10 bg-[#333230] hover:bg-[#393937] border border-[#464641] shadow-md flex items-center  p-4 rounded-xl h-14 w-[340px] "
    >
      <Input
        ref={ref}
        id="input"
        placeholder="Enter your name"
        className="bg-transparent outline-none focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-transparent focus-visible:ring-0 h-14 text-primary-foreground"
      />
      <Button type="submit">
        Start chat
        <ChevronRight />
      </Button>
    </form>
  );
}
