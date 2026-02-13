"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import CardHeading from "../commons/card-heading";
import OrderCountsCard from "../commons/order-counts-card";

export const description = "Total Revenue";

const chartData = [
  { date: "10:00 AM", expense: 222, income: 500 },
  { date: "11:00 AM", expense: 500, income: 1000 },
  { date: "12:00 PM", expense: 900, income: 1800 },
  { date: "1:00 PM", expense: 400, income: 600 },
  { date: "2:00 PM", expense: 300, income: 700 },
  { date: "3:00 PM", expense: 600, income: 1200 },
  { date: "4:00 PM", expense: 1000, income: 1300 },
  { date: "5:00 PM", expense: 500, income: 600 },
  { date: "6:00 PM", expense: 800, income: 900 },
  { date: "7:00 PM", expense: 700, income: 850 },
  { date: "8:00 PM", expense: 800, income: 900 },
  { date: "9:00 PM", expense: 600, income: 700 },
  { date: "10:00 PM", expense: 800, income: 1600 },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
   income: {
    label: "Income",
    color: "#2A85FF",
  },
  expense: {
    label: "Expense",
    color: "#F04D58",
  },
 
} satisfies ChartConfig;

export function TotalRevenueChart() {

  const [timeRange, setTimeRange] = React.useState("daily");

  return (
    <Card className="pt-0 rounded-sm">
      <CardHeader className="flex items-center gap-2 space-y-0 py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
           <CardHeading title="Total Revenue"/>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden w-40 rounded-sm sm:ml-auto sm:flex focus-visible:border-gray-200 focus-visible:ring-0 focus-visible:outline-0"
            aria-label="Select a value"
          >
            <SelectValue placeholder="daily" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="daily" className="rounded-lg">
              Daily
            </SelectItem>
            <SelectItem value="weekly" className="rounded-lg">
              Weekly
            </SelectItem>
            <SelectItem value="monthly" className="rounded-lg">
              Monthly
            </SelectItem>
            <SelectItem value="quarterly" className="rounded-lg">
              Quarterly
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-0 sm:px-6 sm:pt-4">
        <div className="flex flex-col mb-16 md:flex-row space-y-4 md:justify-between">
            <div>
              <OrderCountsCard 
                title="Income"
                cardClassName="bg-neutral-50 border-neutral-50 shadow-sm"
                imgContainerClassName="w-9 h-9"
                counts="$1,390,39"
                imgUrl="/images/orders/income.png"
              />
            </div>
            <div>
              <OrderCountsCard 
                title="Expense"
                cardClassName="bg-neutral-50 border-neutral-50 shadow-sm"
                imgContainerClassName="w-9 h-9"
                counts="$1,390,39"
                imgUrl="/images/orders/expense.png"
              />
            </div>
        </div>
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-62.5 w-full"
        >
          <AreaChart data={chartData}>
            <defs>
               <linearGradient id="fillIncome" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-income)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-income)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillExpense" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-expense)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-expense)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                return value;
              }}
            />
            <YAxis width={30} tickLine={false} axisLine={false} />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return value;
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="income"
              type="natural"
              fill="url(#fillIncome)"
              stroke="var(--color-income)"
              strokeWidth={2}
              stackId="a"
            />
            <Area
              dataKey="expense"
              type="natural"
              fill="url(#fillExpense)"
              stroke="var(--color-expense)"
              strokeWidth={2}
              stackId="b"
            />
            {/* <ChartLegend content={<ChartLegendContent />} /> */}
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
