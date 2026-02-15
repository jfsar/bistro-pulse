"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

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
} from "@/components/ui/select";
import CardHeading from "../commons/card-heading";

export const description = "Total Revenue";

const chartData = [
  { date: "8:00 AM - 9:00 AM", riders: 10 },
  { date: "9:00 AM - 10:00 AM", riders: 11 },
  { date: "10:00 AM - 11:00 AM", riders: 30 },
  { date: "11:00 AM - 12:00 PM", riders: 15 },
  { date: "12:00 PM - 1:00 PM", riders: 25 },
  { date: "1:00 PM - 2:00 PM", riders: 35 },
  { date: "2:00 PM - 3:00 PM", riders: 19 },
  { date: "3:00 PM - 4:00 PM", riders: 12 },
  { date: "4:00 PM - 5:00 PM", riders: 24 },
];

const chartConfig = {
   riders: {
    label: "Riders",
    color: "#2A85FF",
  },
 
} satisfies ChartConfig;

export function ShiftStatisticsChart() {

  const [timeRange, setTimeRange] = React.useState("daily");

  return (
    <Card className="pt-0 rounded-sm w-full flex-1 flex flex-col">
      <CardHeader className="flex items-center gap-2 space-y-0 py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
           <CardHeading title="Shift Statistics"/>
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
      <CardContent className="px-2 pt-0 md:px-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-62.5 w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
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
              content={
                <ChartTooltipContent
                  className="w-37.5"
                  nameKey="riders"
                  labelFormatter={(value) => {
                    return value;
                  }}
                />
              }
            />
            <Bar dataKey="riders" fill={`var(--color-riders)`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
