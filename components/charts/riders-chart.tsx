"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
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
  { riders: "inactive", count: 312, fill: 'var(--color-inactive)'},
  { riders: "roaming", count: 532, fill: 'var(--color-roaming)'},
  { riders: "travelling", count: 839, fill: 'var(--color-travelling)'},
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
   inactive: {
    label: "Inactive",
    color: "#F04D58",
  },
  roaming: {
    label: "Roaming",
    color: "#2796AE",
  },
  travelling: {
    label: "Travelling",
    color: "#39C272"
  }
} satisfies ChartConfig;

export function RidersChart() {

  const [timeRange, setTimeRange] = React.useState("daily");

   const totalRiders = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.count, 0)
  }, []);


  return (
    <Card className="pt-0 rounded-sm w-full flex-1 flex flex-col">
      <CardHeader className="flex items-center gap-2 space-y-0 py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
           <CardHeading title="Riders"/>
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
          className="mx-auto aspect-square max-h-62.5"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <ChartLegend content={<ChartLegendContent />}/>
            <Pie
              data={chartData}
              dataKey="count"
              nameKey="riders"
              innerRadius={60}
              strokeWidth={5}
              paddingAngle={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalRiders.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Riders
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
