import OrderCountsCard from "@/components/commons/order-counts-card";


const Overview = () => {
  return (
    <div className="w-full space-y-4">
       <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4">
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
    </div>
  )
}

export default Overview;