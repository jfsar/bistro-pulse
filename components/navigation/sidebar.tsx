"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  useSidebar
} from "@/components/ui/sidebar";
import DashboardMenu from "../menus/dashboard-menu";
import Image from "next/image";

export default function DashboardSidebar() {
  const { state } = useSidebar();
  const isSidebarCollapsed = state === "collapsed";
  
  return (
    <Sidebar collapsible="icon" className="bg-white">
        <SidebarHeader className="bg-white">
            <div className='flex items-center gap-2.5 mb-10 h-10'>
                <Image src="/logo.svg" alt="Bistro Pulse Logo" width={40} height={40} />
                {!isSidebarCollapsed && (
                    <h2 className="text-brand-primary text-[20px] leading-11 font-bold tracking-smallest whitespace-nowrap">
                        BistroPulse
                    </h2>
                )}
            </div>
        </SidebarHeader>
        <SidebarContent className="bg-white border-none">
            <DashboardMenu isSidebarCollapsed={isSidebarCollapsed} />
        </SidebarContent> 
        <SidebarRail />
    </Sidebar>
  )
}