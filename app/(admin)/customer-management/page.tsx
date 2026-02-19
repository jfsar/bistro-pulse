import CustomerTableWrapper from "@/components/wrapper/customer-table-wrapper";

const CustomerManagement = () => {
  return (
     <div className="space-y-4">
        <div className="flex flex-col overflow-x-auto">
           <CustomerTableWrapper />
         </div>
      </div>
  )
}

export default CustomerManagement;