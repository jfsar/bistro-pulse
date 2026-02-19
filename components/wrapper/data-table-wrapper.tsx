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
  Table as TanStackTable,
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
import { createContext, useContext, useState } from "react";
import { Card } from "../ui/card";
import { Field, FieldLabel } from "../ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group";
import { DownloadIcon, Filter, SearchIcon } from "lucide-react";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { useRouter } from "next/navigation";

interface DataTableContextType<TData> {
  table: TanStackTable<TData>;
}

const DataTableContext = createContext<DataTableContextType<any> | undefined>(undefined);

const useDataTable = <TData,>() => {
  const context = useContext(DataTableContext) as DataTableContextType<TData> | undefined;
  if (!context) {
    throw new Error('useDataTable must be used inside the DataTable Provider');
  }
  return context;
};

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  children?: React.ReactNode;
}

function DataTableWrapper<TData, TValue>({
  columns,
  data,
  children,
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
      rowSelection,
    },
  });

  return (
    <DataTableContext.Provider value={{ table }}>
      <Card className="p-6 rounded-sm">
        {children}
      </Card>
    </DataTableContext.Provider>
  );
}

function HeaderWrapper({children}: {children: React.ReactNode}) {
    return (
        <div className="flex items-center">
            {children}
        </div>
    )
}

function ActionWrapper({children}: {children: React.ReactNode}) {
    return (
        <div className="ml-auto gap-2 flex justify-end">
            {children}
        </div>
    )
}

function TitleHandler({title}: {title: string;}) {
    return (
        <div className='border-l-8 hidden h-6 md:flex items-center pl-4 border-brand-primary'>
            <h2 className="text-brand-neutral-07 font-semibold text-lg leading-6">{title}</h2>
        </div>
    )
}

function SearchHandler() {
    return(
         <Field className="max-w-sm">
            <FieldLabel className='sr-only' htmlFor="inline-start-input">Input</FieldLabel>
            <InputGroup>
                <InputGroupInput id="inline-start-input" placeholder="Search..." />
                <InputGroupAddon align="inline-start">
                <SearchIcon className="text-muted-foreground" />
                </InputGroupAddon>
            </InputGroup>
        </Field>
    )
}

function FilterHandler() {
    const { table } = useDataTable();

    return (
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
    )
}

function ExportHandler() {
  return(
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
  )
}

function ButtonClickHandler({pathTo, text}: {pathTo: string; text: string;}) {
    const router = useRouter();

    function handleClick() {

      if(!pathTo) {
        return;
      }

      router.push(pathTo);
    }

    return (
         <Button 
            className="bg-brand-primary rounded-sm hover:bg-brand-primary/95"
            onClick={handleClick}
         >
          {text}
        </Button>
    )
}

function ContentHandler({ length }: {length: number}) {
  const { table } = useDataTable();
   return (
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
              <TableCell colSpan={length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
   )
}

DataTableWrapper.Title = TitleHandler;
DataTableWrapper.HeaderWrapper = HeaderWrapper;
DataTableWrapper.ActionWrapper = ActionWrapper;
DataTableWrapper.Search = SearchHandler;
DataTableWrapper.Filter = FilterHandler;
DataTableWrapper.Export = ExportHandler;
DataTableWrapper.Button = ButtonClickHandler;
DataTableWrapper.Content = ContentHandler;

export default DataTableWrapper;