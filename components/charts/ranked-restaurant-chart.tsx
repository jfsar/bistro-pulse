"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import CardHeading from "../commons/card-heading";
import OrderCountsCard from "../commons/order-counts-card";

interface RankedRestaurant {
  id: string;
  name: string;
  description: string;
  imgUrl: string;
  orderCount: string;
}


interface RankedRestaurantChartProps {
  className?: string;
}


const RANKED_RESTAURANTS: RankedRestaurant[] = [
    {
        id: crypto.randomUUID(),
        name: "Star Valley Restaurant", 
        description: "G. P. O., Asafoatse Nettey Road, Accra",
        imgUrl: "/images/orders/pizza.png",
        orderCount: "29"
    },
    {
        id: crypto.randomUUID(),
        name: "Star Valley Restaurant", 
        description: "G. P. O., Asafoatse Nettey Road, Accra",
        imgUrl: "/images/orders/pizza.png",
        orderCount: "29"
    },
    {
        id: crypto.randomUUID(),
        name: "Star Valley Restaurant", 
        description: "G. P. O., Asafoatse Nettey Road, Accra",
        imgUrl: "/images/orders/pizza.png",
        orderCount: "29"
    },
    {
        id: crypto.randomUUID(),
        name: "Star Valley Restaurant", 
        description: "G. P. O., Asafoatse Nettey Road, Accra",
        imgUrl: "/images/orders/pizza.png",
        orderCount: "29"
    }
    
];


export function RankedRestaurantChart({ 
  className 
}: RankedRestaurantChartProps) {
  

  return (
    <Card className={`pt-0 rounded-sm w-full flex-1 flex flex-col ${className || ""}`}>
      <CardHeader className="flex items-center gap-2 space-y-0 py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardHeading title="Ranked Restaurants" />
        </div>
        <p className="text-brand-neutral-07 font-medium text-sm">See All</p>
      </CardHeader>
      <CardContent className="px-2 pt-0 md:px-6">
        <div className="flex flex-col flex-wrap space-y-4">
            {RANKED_RESTAURANTS.map((item) => (
             <OrderCountsCard 
                key={item.id}
                title={item.name}
                counts={item.description}
                cardClassName="bg-neutral-50"
                cardContentClassName="justify-between"
                titleContainerClassName="text-sm font-semibold text-brand-neutral-08"
                countsContainerClassName="text-xs font-normal text-brand-neutral-04"
                imgContainerClassName="w-14 h-14"
                imgUrl={item.imgUrl}
                icon={
                    <div className="text-center">
                        <p className="text-sm font-semibold text-brand-neutral-08">{item.orderCount}</p>
                        <p className="text-xs font-normal text-brand-neutral-04">Orders</p>
                    </div>
                }
                />
            ))}
        </div>
      </CardContent>
    </Card>
  );
}