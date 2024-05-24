import { NameInput } from "@/components/NameInput";
import { WelcomeText } from "@/components/WelcomeText";

export default function Home() {
  return (
    <main className="h-full flex flex-col items-center container">
      <WelcomeText />
      <NameInput />
    </main>
  );
}
