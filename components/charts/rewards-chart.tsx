"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import CardHeading from "../commons/card-heading";
import OrderCountsCard from "../commons/order-counts-card";



interface RankedRestaurantChartProps {
  className?: string;
}




export function RewardsChart({ 
  className 
}: RankedRestaurantChartProps) {
  

  return (
    <Card className={`pt-0 rounded-sm w-full flex-1 flex flex-col ${className || ""}`}>
      <CardHeader className="flex items-center gap-2 space-y-0 py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardHeading title="Rewards Points" />
        </div>
      </CardHeader>
      <CardContent className="px-2 pt-0 md:px-4">
        <div className="flex flex-col flex-wrap space-y-4">
            <OrderCountsCard
               title="Total Points"
               counts="2770"
               imgContainerClassName="w-20 h-20"
               imgUrl="/images/orders/rewards.png"
             />
             <OrderCountsCard
               title="Used Points"
               counts="770"
               imgContainerClassName="w-20 h-20"
               imgUrl="/images/orders/rewards.png"
             />
        </div>
      </CardContent>
    </Card>
  );
}