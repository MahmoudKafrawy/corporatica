"use client";
import { useIP } from "@/hooks/useIP";
import { storage } from "@/lib/firestore";
import { useChatStore } from "@/store/useChatStore";
import { sendChatMessage } from "@/utils/firestore/sendMessgae";
import { getDownloadURL, ref as storageRef } from "firebase/storage";
import { Paperclip } from "lucide-react";
import { useState } from "react";
import { useUploadFile } from "react-firebase-hooks/storage";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../ui/button";

export function UploadFileButton() {
  const { name } = useChatStore();
  const { ip } = useIP();

  const [uploadFile, uploading] = useUploadFile();
  const fileRef = storageRef(storage, uuidv4());
  const [selectedFile, setSelectedFile] = useState<File>();

  const upload = async () => {
    if (selectedFile) {
      const result = await uploadFile(fileRef, selectedFile, {
        contentType: "image/jpeg",
      });
    }
    const url = await getDownloadURL(fileRef);

    await sendChatMessage({ message: "", img: url, name: name as string, ip: ip });
    setSelectedFile(undefined);
  };

  return (
    <>
      <label
        htmlFor="file"
        className="w-12 h-10 bg-secondary rounded-md flex justify-center items-center cursor-pointer"
      >
        <Paperclip />
      </label>
      <input type="file" id="file" hidden onChange={(e) => setSelectedFile(e.target.files?.[0])} />
      {
        <Button onClick={upload} disabled={uploading || !selectedFile}>
          {uploading ? "Uploading..." : "Send Image"}
        </Button>
      }
    </>
  );
}
