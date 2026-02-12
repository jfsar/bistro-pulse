import BreadCrumbs from "@/components/navigation/bread-crumbs";
import DashboardSidebar from "@/components/navigation/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Bell, Menu, MessageSquareText } from "lucide-react";
import Image from "next/image";


const AdminLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <SidebarProvider className="min-h-screen w-full flex">
        <DashboardSidebar />
        <div className='flex-1 flex flex-col min-w-0'> {/* min-w-0 prevents flex overflow */}
            <header className='w-full px-4 md:px-6 py-3.5 flex justify-between items-center border-b'>
               <BreadCrumbs />
               <Menu className="w-5 h-5  stroke-brand-neutral-04 md:hidden"/>
               <div className="flex items-center gap-4 md:gap-7">
                   <div className="relative">
                      <MessageSquareText className="w-5 h-5 md:w-6 md:h-6 stroke-brand-neutral-04" />
                      <div className="absolute top-0 right-0 w-2.5 h-2.5 rounded-full bg-[#FF6A55]" />
                   </div>
                   <div className="relative">
                      <Bell className="w-5 h-5 md:w-6 md:h-6 stroke-brand-neutral-04" />
                      <div className="absolute top-0 right-0 w-2.5 h-2.5 rounded-full bg-[#FF6A55]" />
                   </div>
                   <Image 
                     src="/profile_pic.svg" 
                     alt="Profile" 
                     width={40} 
                     height={40} 
                     className="rounded-full w-8 h-8 md:w-10 md:h-10"
                   />
               </div>
            </header>
            <section className='bg-neutral-50 px-4 md:px-6 py-4 flex-1 overflow-auto'>
                {children}
            </section>
        </div>
    </SidebarProvider>
  )
}


export default AdminLayout;