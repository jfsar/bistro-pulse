import OrderCountsCard from "@/components/commons/order-counts-card";
import { DataTable } from "@/components/table/data-table";
import { customerSampleData, orderRequestColumns } from "@/components/table/recent-order-request-column";


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
          <DataTable 
            data={customerSampleData} 
            columns={orderRequestColumns}
            hasHeading={true} 
            hasSearchInput={true}
          />
       </div>
    </div>
  )
}

export default Overview;