import { RankedRestaurantChart } from "@/components/charts/ranked-restaurant-chart";
import { RestaurantChart } from "@/components/charts/restaurant-chart";
import { RewardsChart } from "@/components/charts/rewards-chart";
import { RidersChart } from "@/components/charts/riders-chart";
import { SaleChart } from "@/components/charts/sales-chart";
import { ShiftStatisticsChart } from "@/components/charts/shift-statistics-chart";
import { TotalRevenueChart } from "@/components/charts/total-revenue-chart";
import OrderCountsCard from "@/components/commons/order-counts-card";
import DashboarCustomerTableWrapper from "@/components/wrapper/dashboar-customer-table-wrapper";
import RecentOrderRequestTableWrapper from "@/components/wrapper/recent-order-request-table-wrapper";
import ReviewsTableWrapper from "@/components/wrapper/reviews-table-wrapper";


const Overview = () => {
  return (
    <div className="space-y-4">
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <OrderCountsCard
            imgUrl="/images/orders/1.svg"
            title="Active Orders"
            counts={2390}
          />
           <OrderCountsCard
            imgUrl="/images/orders/2.svg"
            title="Pending Orders"
            counts={2770}
          />
           <OrderCountsCard
            imgUrl="/images/orders/3.svg"
            title="Delivered Orders"
            counts={3870}
          />
           <OrderCountsCard
            imgUrl="/images/orders/4.svg"
            title="Returned Orders"
            counts={970}
          />
       </div>
       <div className="overflow-x-auto">
          <RecentOrderRequestTableWrapper />
       </div>
       <div className="flex flex-col lg:flex-row gap-2 overflow-hidden">
         <div className="w-full lg:w-[60%] flex flex-col">
          <TotalRevenueChart />
         </div>
         <div className="w-full lg:w-[40%] flex flex-col">
           <SaleChart />
         </div>
       </div>
        <div className="flex flex-col lg:flex-row gap-2">
         <div className="w-full lg:w-[60%] flex flex-col">
          <RestaurantChart />
         </div>
         <div className="w-full lg:w-[40%] flex flex-col">
            <RankedRestaurantChart />
         </div>
       </div>
       <div className="overflow-x-auto">
         <ReviewsTableWrapper />
       </div>
        <div className="flex flex-col lg:flex-row gap-2">
         <div className="w-full lg:w-[60%] flex flex-col overflow-x-auto">
          <DashboarCustomerTableWrapper />
         </div>
         <div className="w-full lg:w-[40%] flex flex-col">
            <RewardsChart />
         </div>
       </div>
       <div className="flex flex-col lg:flex-row gap-2">
        <div className="w-full lg:w-[60%] flex flex-col">
         <ShiftStatisticsChart />
        </div>
        <div className="w-full lg:w-[40%] flex flex-col">
           <RidersChart />
        </div>
       </div>
    </div>
  )
}

export default Overview;