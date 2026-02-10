import { DiamondPlus, Motorbike, Store, Users, UsersRound, WalletCards } from "lucide-react";
import Image from "next/image";

export type DashboardMenuItem = 
  { name: string; icon?: React.ReactNode; href?: string;} 
  | {name: string; items: DashboardMenuItem[]};

  const DashboardMenu: DashboardMenuItem[] = [
    {
      name: "Dashboard",
      icon: <Image src="/dashboard-icon.svg" alt="Bistro Pulse Dashboard Icon" width={20} height={20}/>,
      href: '/dashboard'
    },
    {
      name: "Customer Management",
      icon: <Users className="w-5 h-5 stroke-brand" />,
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
        { name: "Todo Link", href: ""},
        { name: "Todo Link", href: ""}
      ]
    },
    {
      name: "Advertisement",
      icon: <DiamondPlus className="w-5 h-5"/>,
      items: [
        { name: "Todo Link", href: ""},
        { name: "Todo Link", href: ""}
      ]
    },
    {
      name: "Employee Management",
      icon: <UsersRound className="w-5 h-5"/>,
      href: '/employee-management'
    }
  ]

