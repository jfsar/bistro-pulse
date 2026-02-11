import { 
    DiamondPlus, 
    Motorbike, 
    Store, 
    Users, 
    UsersRound, 
    WalletCards, 
    ChevronRightIcon, 
    StoreIcon
} from "lucide-react";

import { 
    Collapsible,
    CollapsibleTrigger,
    CollapsibleContent
 } from "../ui/collapsible"; 

 import { Button } from '../ui/button';

import Image from "next/image";
import Link from "next/link";

export interface DashboardSubItem {
  name: string;
  href: string;
}

export interface DashboardMenuItem {
  name: string;
  icon?: React.ReactNode;
  href?: string;
  items?: DashboardSubItem[];
}



export const dashboardMenu: DashboardMenuItem[] = [
    {
      name: "Dashboard",
      icon: <Image src="/dashboard-icon.svg" alt="Bistro Pulse Dashboard Icon" width={25} height={25}/>,
      href: '/dashboard'
    },
    {
      name: "Customer Management",
      icon: <Users className="w-5 h-5" />,
      href: '/customer-management'
    },
    {
      name:"Restaurant Management",
      icon: <Store className="w-5 h-5"/>,
      items: [
        { name: 'Restaurant List', href: '/restaurant'},
        { name: 'New Restaurant Request', href: '/restaurant/requests'}
      ],
    },
    {
      name: "Rider Management",
      icon: <Motorbike className="w-5 h-5"/>,
      href: "/rider-management"
    },
    {
      name: "Order Management",
      icon: <WalletCards className="w-5 h-5"/>,
      items: [
        { name: "Todo Link 1", href: "#"},
        { name: "Todo Link 2", href: "#"}
      ]
    },
    {
      name: "Advertisement",
      icon: <DiamondPlus className="w-5 h-5"/>,
      items: [
        { name: "Todo  1", href: "#"},
        { name: "Todo Link 2", href: "#"}
      ]
    },
    {
      name: "Employee Management",
      icon: <UsersRound className="w-5 h-5"/>,
      href: '/employee-management'
    }
  ];


  type DashboardMenuProps = {
    isSidebarCollapsed: boolean; 
  }


export default function DashboardMenu({ isSidebarCollapsed }: DashboardMenuProps) {

  const renderItem = (menu: DashboardMenuItem) => {
    if ("items" in menu) {
      return (
        <Collapsible key={menu.name}>
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="group text-[14px] text-brand-neutral-04 hover:bg-accent hover:text-brand-neutral-08 justify-start transition-none"
            >
              {menu.icon}
              {!isSidebarCollapsed && menu.name}
              {!isSidebarCollapsed && <ChevronRightIcon className="transition-transform group-data-[state=open]:rotate-90" />}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="style-lyra:ml-4 mt-1 ml-5">
            <div className="flex flex-col gap-1">
              {menu.items && menu.items.map((child) => renderItem(child))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      )
    }
    return (
     <li key={menu.name}>
      <Button
        key={menu.name}
        variant="ghost"
        size="sm"
        className="text-brand-neutral-04 hover:text-brand-neutral-08 font-medium text-[14px] items-center align-middle justify-start gap-2"
      >
        {menu.icon}
        {!isSidebarCollapsed && menu.href && <Link href={menu.href}>{menu.name}</Link>}
      </Button>

     </li>
    )
  }

  return (
    <ul className="w-full space-y-6">
         {dashboardMenu.map((item) => renderItem(item))}
    </ul>
  )
}


