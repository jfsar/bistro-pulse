import BreadCrumbs from "@/components/navigation/bread-crumbs";
import DashboardSidebar from "@/components/navigation/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Bell, MessageSquareText } from "lucide-react";
import Image from "next/image";


const AdminLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <SidebarProvider className="min-h-screen flex gap-1">
        <DashboardSidebar />
        <div className='flex-1'>
            <header className='w-full px-6 py-3.5 flex justify-between items-center'>
               <BreadCrumbs />
               <div className="flex items-center gap-7">
                   <div className="relative">
                      <MessageSquareText className="w-6 h-6 stroke-brand-neutral-04" />
                      <div className="absolute top-0 -right-1 w-2.5 h-2.5 rounded-full bg-[#FF6A55]"></div>
                   </div>
                   <div className="relative">
                      <Bell className="w-6 h-6 stroke-brand-neutral-04" />
                      <div className="absolute top-0 right-0.5 w-2.5 h-2.5 rounded-full bg-[#FF6A55]"></div>
                   </div>
                   <div>
                     <Image src="/profile_pic.svg" alt="Profile Pic Placeholder" width={40} height={40} className="rounded-full"/>
                   </div>
               </div>
            </header>
            <section className='w-full bg-neutral-50'>
                {children}
            </section>
        </div>
    </SidebarProvider>
  )
}

export default AdminLayout;