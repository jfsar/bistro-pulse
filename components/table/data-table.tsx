"use client";

import {
  ColumnDef,
  flexRender,
  SortingState,
  ColumnFiltersState,
  VisibilityState,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";

import { Input } from "@/components/ui/input";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useState } from "react";
import { Card } from "../ui/card";
import { DownloadIcon, Filter } from "lucide-react";
import CardHeading from "../commons/card-heading";
import { SearchInPut } from "../commons/search-input";
import { DataTablePagination } from "./data-table-pagination";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  showSelectedRows?: boolean;
  showPagination?: boolean;
  hasHeading?: boolean;
  hasAddButton?: boolean;
  hasExport?: boolean;
  hasLink?: boolean;
  hasSearchInput?: boolean;
  hasFilter?: boolean;
  tableTitle?: string;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  showSelectedRows = false,
  showPagination = false,
  hasHeading = false,
  hasLink = false,
  hasSearchInput = false,
  hasFilter = true,
  hasAddButton = false,
  hasExport = false,
  tableTitle
}: DataTableProps<TData, TValue>) {

  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

   const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
   const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection
    }
  });

  return (
    <Card className="p-6 rounded-sm">
    <div className="flex items-center">
        {/* <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        /> */}
        {hasHeading && <CardHeading title={tableTitle || ""} />}
        <div className="ml-auto gap-2 flex justify-end">
          {hasSearchInput && <SearchInPut />}
          { hasFilter && 
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="items-center text-brand-neutral-04">
                  <Filter className="w-6 h-6 stroke-brand-neutral-04"/>
                  Filter
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {table
                  .getAllColumns()
                  .filter(
                    (column) => column.getCanHide()
                  )
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {column.id}
                      </DropdownMenuCheckboxItem>
                    )
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
          }
          { hasAddButton && <Button className="bg-brand-primary rounded-sm hover:bg-brand-primary/95">Add new Customer</Button>}
          { hasExport && 
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="items-center focus-visible:ring-0 focus-visible:border-neutral-200 text-brand-neutral-04">
                   <DownloadIcon className="w-4 h-4" />
                   Export
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>PDF</DropdownMenuItem>
                <DropdownMenuItem>Excel</DropdownMenuItem>
                <DropdownMenuItem>Word</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          }
        </div>
    </div>
    <div className="overflow-hidden border-b rounded-none bg-white text-brand-neutral-04 text-xs font-normal leading-6 tracking-[-1%] shadow-none">
      <Table>
        <TableHeader className="text-sm text-brand-neutral-05 font-medium leaading-[16px] tracking-[-1%]">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
    <div className="flex items-center justify-between space-x-2">
      { showSelectedRows && 
        <div className="text-muted-foreground text-sm">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
      }

      { showPagination && 
        <div>
          <DataTablePagination table={table}/>
        </div>
      }
    </div>
    </Card>
  )
}