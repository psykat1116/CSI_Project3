"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Charts from "./Charts";
import { Separator } from "./ui/separator";
import Apps from "./Apps";
import Pages from "./Pages";
import Dashboard from "./Dashboard";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside
      className={cn(
        "h-full w-60 bg-neutral-200 flex flex-col gap-y-2 pl-2.5 pr-1.5 py-2 shadow-md overflow-y-scroll relative"
      )}
    >
      <Link href="/" className="relative flex w-full items-center justify-center">
        <Image
          src="/icon.svg"
          alt="icon"
          height={40}
          width={40}
          className="object-cover"
        />
      </Link>
      <Separator className="bg-neutral-500 mt-2" />
      <Dashboard />
      <Separator className="bg-neutral-500 mt-2" />
      <Charts />
      <Separator className="bg-neutral-500 mt-2" />
      <Apps />
      <Separator className="bg-neutral-500 mt-2" />
      <Pages />
    </aside>
  );
};

export default Sidebar;
