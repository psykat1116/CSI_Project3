"use client";
import React from "react";
import Image from "next/image";
import ProgressCircle from "@/components/ProgressCircle";
import Line from "@/components/routes/Line";
import Bar from "@/components/routes/Bar";
import Geography from "@/components/routes/Geography";

const Home = () => {
  return (
    <div className="m-2 h-[89.5%] w-[98.5%] bg-neutral-300 rounded-md overflow-y-scroll">
      <div className="w-[calc(100%-16px)] h-1/2 border border-[#232323] m-2 rounded-sm">
        <Line isDashboard />
      </div>
      <div className="h-1/2 w-[calc(100%-24px)] flex items-center m-2 gap-2">
        <div className="w-1/2 h-full border border-[#232323] rounded-sm">
          <Bar isDashboard />
        </div>
        <div className="w-1/2 h-full border border-[#232323] rounded-sm">
          <Geography isDashboard />
        </div>
      </div>
    </div>
  );
};

export default Home;
