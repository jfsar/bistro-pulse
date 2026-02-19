"use client";

import { CUSTOMER_DATA, customerColumn } from "../table/customer-column";
import DataTableWrapper from "./data-table-wrapper";


const CustomerTableWrapper = () => {
  return (
    <DataTableWrapper data={CUSTOMER_DATA} columns={customerColumn}>
       <DataTableWrapper.HeaderWrapper>
          <DataTableWrapper.Title title="Customers"/>
          <DataTableWrapper.ActionWrapper>
             <DataTableWrapper.Search />
             <DataTableWrapper.Filter />
             <DataTableWrapper.Export />
             <DataTableWrapper.Button pathTo="/customer-management/add-customer" text="Add Customer"/>
          </DataTableWrapper.ActionWrapper>
       </DataTableWrapper.HeaderWrapper>
       <DataTableWrapper.Content length={CUSTOMER_DATA.length}/>
    </DataTableWrapper>
  )
}

export default CustomerTableWrapper;