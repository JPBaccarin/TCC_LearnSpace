import React from "react";
import { columns, Payment } from "@/components/questoes/edit/columns";
import { DataTable } from "@/components/questoes/edit/data-table";

async function getData(): Promise<Payment[]> {
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
  ]
}

export default async function page() {

  const data = await getData();
  
 

  return (
    <div className="flex h-screen items-center justify-center">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

