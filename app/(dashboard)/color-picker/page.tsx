"use client";
import React, { useState } from "react";
import { SketchPicker, PhotoshopPicker } from "react-color";

const Page = () => {
  const [sketchColor, setSketchColor] = useState("#ff0000");
  const [psColor, setPsColor] = useState("#00ff00");
  return (
    <div className="m-3 bg-slate-200 p-2 h-[89%] flex items-center justify-center gap-5">
      <SketchPicker
        color={sketchColor}
        onChange={(color) => setSketchColor(color.hex)}
      />
      <PhotoshopPicker
        color={psColor}
        onChange={(color) => setPsColor(color.hex)}
      />
    </div>
  );
};

export default Page;
