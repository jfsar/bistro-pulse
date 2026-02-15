"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { ArrowUpDown, MoreVertical } from "lucide-react";
import Image from "next/image";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";

interface Customer {
    name: string;
    img: string;
    phone: string;
    location: string;
}

export const CUSTOMER_DATA: Customer[] = [
    { name: "Chelsie Jhonson", img: "/profile_pic.svg", phone:"880160000770", location:"Corner Street 5th London"},
    { name: "Chelsie Jhonson", img: "/profile_pic.svg", phone:"880160000770", location:"Corner Street 5th London"},
    { name: "Chelsie Jhonson", img: "/profile_pic.svg", phone:"880160000770", location:"Corner Street 5th London"},
    { name: "Chelsie Jhonson", img: "/profile_pic.svg", phone:"880160000770", location:"Corner Street 5th London"}
];

export const customerColumn: ColumnDef<Customer>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="border-brand-neutral-04"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="border-brand-neutral-04"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({column}) => {
        return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
        )
    },
    cell: ({ row }) => (
          <div className="flex items-center gap-2 text-[14px] text-brand-neutral-04 leading-6">
             <div className="w-5 h-5 md:w-6 md:h-6 relative">
              <Image
                  src={row.original.img} 
                  alt={row.original.name}
                  fill
                  className="rounded-full"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
             </div>
              <p>{row.original.name}</p>
          </div>
    ),
  },
  {
    accessorKey: "phone",
    header: "Phone"
  },
  {
    accessorKey: "location",
    header: "Location"
  },
  {
    id: "actions",
    header: () => <div className="text-right"><p>Action</p></div>,
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="w-24 p-0 shadow-none">
            <Button variant="ghost" className="flex w-full justify-end hover:bg-transparent p-0 items-end focus-visible:ring-0 focus-visible:ring-offset-0">
              <span className="sr-only">Open menu</span>
              <MoreVertical className="h-4 w-4 stroke-brand-neutral-08" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(row.original.name)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
];



