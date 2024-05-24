import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { UsersList } from "../UsersList";

export function NavBar() {
  return (
    <nav className="flex justify-center relative pt-4">
      <UsersList />
      <Link href={"/"}>
        <h1 className="text-2xl text-primary-foreground">Corportica Chat</h1>
      </Link>
      <Avatar className="absolute right-4">
        <AvatarFallback>MK</AvatarFallback>
      </Avatar>
    </nav>
  );
}
