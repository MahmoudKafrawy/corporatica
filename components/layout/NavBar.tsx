"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useChatStore } from "@/store/useChatStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UsersList } from "../UsersList";
import { Button } from "../ui/button";

export function NavBar() {
  const { setName, name } = useChatStore();
  const router = useRouter();

  return (
    <nav className="flex justify-center relative pt-4">
      <UsersList />
      <Link href={"/"}>
        <h1 className="text-2xl text-primary-foreground">Corportica Chat</h1>
      </Link>
      <div className="absolute right-4 flex gap-2">
        {name && (
          <>
            <Button
              onClick={() => {
                router.push("/");
                setName("");
              }}
            >
              Log out
            </Button>
            <Avatar>
              <AvatarFallback>MK</AvatarFallback>
            </Avatar>
          </>
        )}
      </div>
    </nav>
  );
}
