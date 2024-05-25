import { create } from "zustand";
import { persist } from "zustand/middleware";

type Store = {
  name: string;
  setName: (name: string) => void;
  ip: string;
  setIp: (ip: string) => void;
};

export const useChatStore = create<Store>()(
  persist(
    (set) => ({
      name: "",
      setName: (name) => set(() => ({ name })),
      ip: "",
      setIp: (ip) => set(() => ({ ip })),
    }),
    { name: "chatStore" }
  )
);
