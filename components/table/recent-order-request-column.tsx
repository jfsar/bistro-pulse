"use client";

import { ColumnDef } from "@tanstack/react-table";

import { ArrowUpDown, MoreVertical } from "lucide-react";
 
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { Status } from "@/types";
import StatusBadge from "../commons/status-badge";
import { formatPrice } from "@/lib/utils";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


export type Payment = {
  id: string;
  amount: number;
  status: Status;
  email: string;
}

export type OrderRequest = {
   orderId: string;
   date: string;
   customer: { imgUrl: string; name: string;},
   restaurant: string;
   price: number;
   status: Status
}

export const customerSampleData: OrderRequest[] = [
   {
    orderId: "B13789",
    date: "Feb 08, 2026",
    customer: { imgUrl: "/images/customers/1.png", name: "Dianne Russell"},
    restaurant: "Louis Vuitton",
    price: 90,
    status: "pending"
   },
   {
    orderId: "B13789",
    date: "Feb 08, 2026",
    customer: { imgUrl: "/images/customers/2.png", name: "Leslie Alexander"},
    restaurant: "Queenstown Public House",
    price: 75,
    status: "pending"
   },
   {
    orderId: "B13789",
    date: "Feb 08, 2026",
    customer: { imgUrl: "/images/customers/3.png", name: "Ralph Edwards"},
    restaurant: "Top of the Mark",
    price: 110,
    status: "pending"
   },
   {
    orderId: "B13789",
    date: "Feb 08, 2026",
    customer: { imgUrl: "/images/customers/4.png", name: "Jane Cooper"},
    restaurant: "Bean Around the World Coffees",
    price: 80,
    status: "pending"
   },
   {
    orderId: "B13789",
    date: "Feb 08, 2026",
    customer: { imgUrl: "/images/customers/5.png", name: "Kathryn Murphy"},
    restaurant: "Top of the Mark",
    price: 80,
    status: "pending"
   },
   {
    orderId: "B13789",
    date: "Feb 08, 2026",
    customer: { imgUrl: "/images/customers/6.png", name: "Jenny Wilson"},
    restaurant: "Mirazur",
    price: 30,
    status: "pending"
   },
];

export const sampleData: Payment[] = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
        {
      id: "728ed52fg",
      amount: 100,
      status: "pending",
      email: "a@example.com",
    },
    {
      id: "728ed52h",
      amount: 100,
      status: "pending",
      email: "l@example.com",
    },


];

export const columns: ColumnDef<Payment>[] = [
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
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)
 
      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    id: "actions",
    header: () => <div>Actions</div>,
    cell: ({ row }) => {
      const payment = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreVertical className="h-4 w-4 stroke-brand-neutral-08" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
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
]

export const orderRequestColumns: ColumnDef<OrderRequest>[] = [
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
    accessorKey: 'orderId',
    header: 'Order ID'
  },
  {
    accessorKey: 'date',
    header: "Date"
  },
  {
    accessorKey: 'customer',
    header: "Customer",
    cell: ({ row }) => (
      <div className="flex items-center gap-2 text-[14px] text-brand-neutral-04 leading-6">
         <div className="w-5 h-5 md:w-6 md:h-6 relative">
          <Image 
              src={row.original.customer.imgUrl} 
              alt={row.original.customer.name}
              fill
              className="rounded-full"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
         </div>
          <p>{row.original.customer.name}</p>
      </div>
    ),
  },
  {
    accessorKey: 'restaurant',
    header: 'Restaurant'
  },
  {
    accessorKey: 'price',
    header: 'Price',
    cell: ({row}) => (
      <p>{formatPrice(row.original.price)}</p>
    )
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({row}) => (
      <StatusBadge status={row.original.status}/>
    )
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
              onClick={() => navigator.clipboard.writeText(row.original.orderId)}
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