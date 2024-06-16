"use client";
import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-white flex w-full">
      <Sidebar />
      <main
        className={cn(
          "flex-1 overflow-y-auto h-full transition-all duration-300 ease-in-out"
        )}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
