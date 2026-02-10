import DashboardSidebar from "@/components/navigation/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";


const AdminLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <SidebarProvider className="min-h-screen flex gap-1">
        <DashboardSidebar />
        <div className='flex-1 h-full'>
            <header className='w-full'>Header</header>
            <section className='w-full bg-neutral-50'>
                {children}
            </section>
        </div>
    </SidebarProvider>
  )
}

export default AdminLayout;