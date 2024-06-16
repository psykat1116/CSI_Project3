import React from "react";
import {
  ContactRound,
  ReceiptIndianRupee,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const Pages = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="flex flex-col items-start gap-4">
      <h1 className="text-sm">Pages</h1>
      <div className="flex flex-col w-full space-y-2 px-3">
        <Button
          variant="ghost"
          onClick={() => router.push("/invoice")}
          className={cn(
            "flex space-x-4 text-sm justify-start p-2 rounded-sm",
            pathname === "/invoice" && "bg-accent text-accent-foreground"
          )}
        >
          <ReceiptIndianRupee className="h-5 w-5" />
          <p>Invoice</p>
        </Button>
        <Button
          onClick={() => router.push("/employee")}
          variant="ghost"
          className={cn(
            "flex space-x-4 text-sm justify-start p-2 rounded-sm",
            pathname === "/employee" && "bg-accent text-accent-foreground"
          )}
        >
          <Users className="h-5 w-5" />
          <p>Employee</p>
        </Button>
        <Button
          onClick={() => router.push("/contact")}
          variant="ghost"
          className={cn(
            "flex space-x-4 text-sm justify-start p-2 rounded-sm",
            pathname === "/contact" && "bg-accent text-accent-foreground"
          )}
        >
          <ContactRound className="h-5 w-5" />
          <p>Contact</p>
        </Button>
      </div>
    </div>
  );
};

export default Pages;
