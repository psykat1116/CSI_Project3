import React from "react";
import { Button } from "@/components/ui/button";
import { BarChartBig, LineChart, Map, PieChart } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const Charts = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="flex flex-col items-start gap-4">
      <h1 className="text-sm">Charts</h1>
      <div className="flex flex-col w-full space-y-2 px-3">
        <Button
          variant="ghost"
          onClick={() => router.push("/bar")}
          className={cn(
            "flex space-x-4 text-sm justify-start p-2 rounded-sm",
            pathname === "/bar" && "bg-accent text-accent-foreground"
          )}
        >
          <BarChartBig className="h-5 w-5" />
          <p>Bar Chart</p>
        </Button>
        <Button
          variant="ghost"
          onClick={() => router.push("/pie")}
          className={cn(
            "flex space-x-4 text-sm justify-start p-2 rounded-sm",
            pathname === "/pie" && "bg-accent text-accent-foreground"
          )}
        >
          <PieChart className="h-5 w-5" />
          <p>Pie Chart</p>
        </Button>
        <Button
          variant="ghost"
          onClick={() => router.push("/line")}
          className={cn(
            "flex space-x-4 text-sm justify-start p-2 rounded-sm",
            pathname === "/line" && "bg-accent text-accent-foreground"
          )}
        >
          <LineChart className="h-5 w-5" />
          <p>Line Chart</p>
        </Button>
        <Button
          variant="ghost"
          onClick={() => router.push("/geography")}
          className={cn(
            "flex space-x-4 text-sm justify-start p-2 rounded-sm",
            pathname === "/geography" && "bg-accent text-accent-foreground"
          )}
        >
          <Map className="h-5 w-5" />
          <p>Geography Chart</p>
        </Button>
      </div>
    </div>
  );
};

export default Charts;
