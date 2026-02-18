import { CUSTOMER_DATA, customerColumn } from "@/components/table/customer-column";
import { DataTable } from "@/components/table/data-table";


const CustomerManagement = () => {
  return (
     <div className="space-y-4">
        <div className="flex flex-col overflow-x-auto">
           <DataTable 
            data={CUSTOMER_DATA} 
            columns={customerColumn}
            hasHeading={true}
            tableTitle="Customers"
            hasFilter={true}
            hasSearchInput={true}
            hasAddButton={true}
            hasExport={true}
          />
         </div>
      </div>
  )
}

export default CustomerManagement;