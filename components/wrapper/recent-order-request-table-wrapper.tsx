"use client";

import { customerSampleData, orderRequestColumns } from "../table/recent-order-request-column";
import DataTableWrapper from "./data-table-wrapper";

const RecentOrderRequestTableWrapper = () => {
  return (
    <DataTableWrapper columns={orderRequestColumns} data={customerSampleData}>
        <DataTableWrapper.HeaderWrapper>
            <DataTableWrapper.Title title="Recent Order Requests"/>
            <DataTableWrapper.ActionWrapper>
                <DataTableWrapper.Search />
                <DataTableWrapper.Filter />
            </DataTableWrapper.ActionWrapper>
        </DataTableWrapper.HeaderWrapper>
        <DataTableWrapper.Content length={customerSampleData.length}/>
    </DataTableWrapper>
  )
}

export default RecentOrderRequestTableWrapper;