import DashboardMenu  from "@/components/menus/dashboar-menu";
import Image from "next/image";

const AdminLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='min-h-screen flex'>
        <div className='min-w-65 hidden md:block'>
            <nav className='w-full h-full py-4.5 px-5'>
                <div className='flex gap-2.5 mb-10'>
                    <Image src="/logo.svg" alt="Bistro Pulse Logo" width={40} height={40} />
                    <div>
                        <h2 className="text-brand-primary text-[20px] leading-11 font-bold tracking-smallest">
                            BistroPulse
                        </h2>
                    </div>
                </div>
                 <DashboardMenu />
            </nav>
        </div>
        <div className='flex-1 h-full'>
            <header className='w-full'>Header</header>
            <section className='w-full bg-neutral-50'>
                {children}
            </section>
        </div>
    </div>
  )
}

export default AdminLayout;