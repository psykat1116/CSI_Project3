import React from "react";
import { DataTable } from "@/components/ui/datatable";
import { employeeColumns } from "@/components/table/EmployeeCol";
import { mockDataTeam } from "@/constant/MockData";

const Page = () => {
  return (
    <div className="m-3 bg-slate-200 p-2 h-[88%] overflow-y-scroll">
      <DataTable columns={employeeColumns} data={mockDataTeam} />
    </div>
  );
};

export default Page;
