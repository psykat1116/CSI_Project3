import React from "react";
import { DataTable } from "@/components/ui/datatable";
import { contactColumns } from "@/components/table/ContactCol";
import { mockDataContacts } from "@/constant/MockData";

const Page = () => {
  return (
    <div className="m-3 bg-slate-200 p-2 h-[88%] overflow-y-scroll">
      <DataTable columns={contactColumns} data={mockDataContacts} />
    </div>
  );
};

export default Page;
