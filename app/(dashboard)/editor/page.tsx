"use client";
import React from "react";
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";

const Page = () => {
  const editor = useCreateBlockNote();
  return (
    <div className="m-3 bg-slate-200 p-2 h-[88%]">
      <BlockNoteView editor={editor} />
    </div>
  );
};

export default Page;
