"use client";

import DataTableWrapper from './data-table-wrapper';
import { CUSTOMER_DATA, customerColumn } from '../table/customer-column';

const DashboarCustomerTableWrapper = () => {
  return (
    <DataTableWrapper data={CUSTOMER_DATA} columns={customerColumn}>
        <DataTableWrapper.HeaderWrapper>
            <DataTableWrapper.Title title='Customers'/>
            <DataTableWrapper.ActionWrapper>
                <DataTableWrapper.Search />
            </DataTableWrapper.ActionWrapper>
        </DataTableWrapper.HeaderWrapper>
        <DataTableWrapper.Content length={CUSTOMER_DATA.length}/>
    </DataTableWrapper>
  )
}

export default DashboarCustomerTableWrapper;