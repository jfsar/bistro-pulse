"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "../ui/checkbox";
import { MoreVertical, Star } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";

interface Review {
    name: string;
    date: string;
    review: string;
    rating: string;
}

export const REVIEW_DATA: Review[] = [
    { name: "Beef onion pizza", date: "Feb 08, 2024", review: "I'm very much happy. Food is good.", rating: "4.8"},
    { name: "Cheese Pizza", date: "Feb 08, 2024", review: "I'm very much happy. Food is good.", rating: "4.8"},
    { name: "Chicken burger", date: "Feb 08, 2024", review: "I'm very much happy. Food is good.", rating: "4.8"},
    { name: "Beef burger", date: "Feb 08, 2024", review: "I'm very much happy. Food is good.", rating: "4.8"},
];


export const reviewColumn: ColumnDef<Review>[] = [
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
    header: "Name"
  },
  {
    accessorKey: "date",
    header: "Date"
  },
  {
    accessorKey: "rating",
    header: "Ratings",
    cell: ({ row }) => (
        <div className="flex items-center gap-2">
            <Star className="w-3 h-3 fill-yellow-400 stroke-yellow-600"/>
            <p>{row.original.rating}</p>
        </div>
    ),
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