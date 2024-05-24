import { db } from "@/lib/firestore";
import { addDoc, collection } from "firebase/firestore";

export async function sendChatMessage({ message, name, ip }: { message: string; name: string; ip: string }) {
  await addDoc(collection(db, "chats"), {
    message,
    name,
    ip,
    //TODO add timestamp from server
    created: new Date(),
  });
}
