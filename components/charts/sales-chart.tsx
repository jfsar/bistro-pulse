"use client";

import * as React from "react";

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";


import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import CardHeading from "../commons/card-heading";
import OrderCountsCard from "../commons/order-counts-card";
import BadgeWithIcon from "../commons/badge-with-icon";

export const description = "Total Revenue";


export function SaleChart() {

  const [timeRange, setTimeRange] = React.useState("daily");

  return (
    <Card className="pt-0 rounded-sm w-full flex-1 flex flex-col">
      <CardHeader className="flex items-center gap-2 space-y-0 py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
           <CardHeading title="Sales"/>
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
      <CardContent className="px-2 pt-0 sm:px-6 sm:pt-4 flex-1 flex flex-col justify-center">
        <div className="flex flex-col flex-wrap space-y-4">
           <OrderCountsCard 
                title="Total Sales" 
                counts="1,390"
                cardClassName="border-none bg-transparent shadow-none"
                icon={
                        <BadgeWithIcon title="2.35%" className="ml-auto bg-orange-50 text-orange-400" />
                }
            />
            <OrderCountsCard 
                title="Bindirigu Sales" 
                counts="139"
                cardClassName="border-none bg-transparent shadow-none"
                icon={
                        <BadgeWithIcon title="2.35%" className="ml-auto bg-teal-50 text-teal-400" />
                }
            />
            <OrderCountsCard 
                title="Damm Sales" 
                counts="1123"
                cardClassName="border-none bg-transparent shadow-none"
                icon={
                    <BadgeWithIcon title="2.35%" className="ml-auto bg-green-50 text-green-400" />
                }
            />
        </div>
      </CardContent>
    </Card>
  )
}
