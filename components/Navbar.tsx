import React from "react";
import { Bell, Settings, User } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Navbar = () => {
  return (
    <div className="w-full bg-neutral-300 flex justify-between items-center gap-x-2 px-4 py-2">
      <div className="w-1/2">
        <Input
          type="text"
          placeholder="Search"
          className="bg-transparent h-9 w-1/2 rounded-3xl border border-black focus-visible:ring-offset-0 focus-visible:ring-0"
        />
      </div>
      <div className="flex items-center justify-end">
        <Button
          variant="ghost"
          className="px-2"
        >
          <Settings className="h-5 w-5 cursor-pointer" />
        </Button>
        <Button
          variant="ghost"
          className="px-2"
        >
          <Bell className="h-5 w-5 cursor-pointer" />
        </Button>
        <Button
          variant="ghost"
          className="px-2"
        >
          <User className="h-5 w-5 cursor-pointer" />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
