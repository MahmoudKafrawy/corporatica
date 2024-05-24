import { useEffect, useState } from "react";

export function useIP() {
  const [ip, setIp] = useState<string>("");

  useEffect(() => {
    const getIP = async () => {
      const res = await fetch("https://api.ipify.org/?format=json");
      if (res.ok && res.status == 200) {
        const { ip } = await res.json();
        setIp(ip);
      }
    };
    getIP();
  }, []);

  return { ip };
}
