import React from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-start gap-4">
      <h1 className="text-sm">Dashboard</h1>
      <div className="flex flex-col w-full space-y-2 px-3">
        <Button variant="ghost" className="flex space-x-4 text-sm justify-start p-2 rounded-sm">
          <ShoppingCart className="h-5 w-5" />
          <p>Ecommerce</p>
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
