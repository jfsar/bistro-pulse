"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CardHeading from "../commons/card-heading";
import OrderCountsCard from "../commons/order-counts-card";
import { EllipsisVertical } from "lucide-react";
import { ReactNode } from "react";

interface TabDataItem {
  pending: number;
  open: string;
  closed: string;
}

type TabKey = "today" | "yesterday" | "last-week" | "last-month";

interface TabDataMap {
  today: TabDataItem;
  yesterday: TabDataItem;
  "last-week": TabDataItem;
  "last-month": TabDataItem;
}

interface TabConfig {
  value: TabKey;
  label: string;
}

interface RestaurantChartProps {
  data?: TabDataMap;
  className?: string;
}

const TAB_CONFIGS: readonly TabConfig[] = [
  { value: "today", label: "Today" },
  { value: "yesterday", label: "Yesterday" },
  { value: "last-week", label: "Last Week" },
  { value: "last-month", label: "Last Month" },
] as const;

const DEFAULT_TAB_DATA: TabDataMap = {
  today: { pending: 2390, open: "2770", closed: "2770" },
  yesterday: { pending: 2350, open: "2770", closed: "2770"  },
  "last-week": { pending: 15890, open: "2770", closed: "2770" },
  "last-month": { pending: 68450, open: "2770", closed: "2770"  },
};

export function RestaurantChart({ 
  data = DEFAULT_TAB_DATA,
  className 
}: RestaurantChartProps) {
  
  const renderTabContent = (tabData: TabDataItem): ReactNode => (
    <div className="space-y-3">
      <OrderCountsCard
        imgUrl="/images/orders/spoon-fork.png"
        title="Pending Restaurants"
        counts={tabData.pending}
        cardClassName="bg-neutral-50 rounded-sm border-neutral-50"
        cardContentClassName="items-start"
        imgContainerClassName="w-28 h-28"
        icon={<EllipsisVertical className="w-4 h-4 ml-auto" />}
      />
      <div className="flex flex-wrap gap-4 flex-col lg:flex-row lg:justify-between">
        <div className="w-full lg:w-auto">
          <OrderCountsCard
            title="Open Restaurants"
            cardClassName="bg-neutral-50 border-neutral-50 shadow-sm w-full"
            imgContainerClassName="w-9 h-9"
            counts={tabData.open}
          />
        </div>
        <div className="w-full lg:w-auto">
          <OrderCountsCard
            title="Closed Restaurants"
            cardClassName="bg-neutral-50 border-neutral-50 shadow-sm w-full"
            imgContainerClassName="w-9 h-9"
            counts={tabData.closed}
          />
        </div>
      </div>
    </div>
  );

  return (
    <Card className={`pt-0 rounded-sm w-full flex-1 flex flex-col ${className || ""}`}>
      <CardHeader className="flex items-center gap-2 space-y-0 py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardHeading title="Restaurants" />
        </div>
      </CardHeader>
      <CardContent className="px-2 pt-0 md:px-6">
        <Tabs defaultValue="today" className="w-full space-y-6">
          <TabsList className="bg-transparent flex flex-wrap gap-1">
            {TAB_CONFIGS.map((tab) => (
              <TabsTrigger
                key={tab.value}
                className="data-[state=active]:bg-brand-primary data-[state=active]:text-white rounded-sm"
                value={tab.value}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          
          
          <div className="relative w-full">
            {TAB_CONFIGS.map((tab) => (
              <TabsContent 
                key={tab.value} 
                value={tab.value}
                className="data-[state=inactive]:hidden"
              >
                {renderTabContent(data[tab.value])}
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
}