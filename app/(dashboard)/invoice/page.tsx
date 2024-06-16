import React from "react";
import { DataTable } from "@/components/ui/datatable";
import { invoiceColumns } from "@/components/table/InvoiceCol";
import { mockDataInvoices } from "@/constant/MockData";

const Page = () => {
  return (
    <div className="m-3 bg-slate-200 p-2 h-[88%] overflow-y-scroll">
      <DataTable columns={invoiceColumns} data={mockDataInvoices} />
    </div>
  );
};

export default Page;
