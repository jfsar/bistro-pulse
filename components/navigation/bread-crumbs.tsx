"use client";

import React, { useMemo } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { dashboardMenu, DashboardMenuItem, DashboardSubItem } from "../menus/dashboard-menu";
import Link from "next/link";

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface PathMenuItem {
  parent?: string;
  name: string;
  href: string;
}

const BreadCrumbs: React.FC = () => {
  const pathname = usePathname();

  // Create lookup map once (memoized)
  const pathToMenuItem = useMemo((): Map<string, PathMenuItem> => {
    const map = new Map<string, PathMenuItem>();
    
    dashboardMenu.forEach((menuItem: DashboardMenuItem) => {
      if (menuItem.href) {
        map.set(menuItem.href, { 
          name: menuItem.name, 
          href: menuItem.href 
        });
      }
      if (menuItem.items) {
        menuItem.items.forEach((subItem: DashboardSubItem) => {
          map.set(subItem.href, {
            parent: menuItem.name,
            name: subItem.name,
            href: subItem.href,
          });
        });
      }
    });
    return map;
  }, []); // dashboardMenu is assumed to be static



  // Validate internal path
  const isValidInternalPath = (href: string): boolean => {
    return (
      href.startsWith('/') && 
      !href.includes('javascript:') && 
      !href.includes('data:')
    );
  };

  // Build breadcrumbs (memoized)
  const breadcrumbItems = useMemo((): BreadcrumbItem[] => {
    // Sanitize pathname
    const sanitizedPathname = pathname.replace(/[<>'"]/g, '');
    
    const breadcrumbs: BreadcrumbItem[] = [
      { name: 'Dashboard', href: '/dashboard' }
    ];

    // Skip if we're on dashboard
    if (sanitizedPathname === '/dashboard') {
      return breadcrumbs;
    }

    // O(1) lookup instead of O(n*m)
    const matchedItem = pathToMenuItem.get(sanitizedPathname);
    
    if (matchedItem) {
      // Validate href before using
      if (matchedItem.href && !isValidInternalPath(matchedItem.href)) {
        console.warn('Invalid href detected:', matchedItem.href);
        return breadcrumbs;
      }

      if (matchedItem.parent) {
        // Nested item
        breadcrumbs.push({ name: matchedItem.parent });
        breadcrumbs.push({ 
          name: matchedItem.name, 
          href: matchedItem.href 
        });
      } else {
        // Direct item
        breadcrumbs.push({ 
          name: matchedItem.name, 
          href: matchedItem.href 
        });
      }
    }

    return breadcrumbs;
  }, [pathname, pathToMenuItem]);

  return (
    <div className="border-l-8 hidden md:block px-2 border-brand-primary">
      <Breadcrumb>
        <BreadcrumbList>
          {breadcrumbItems.map((item: BreadcrumbItem, index: number) => {
            const isLast = index === breadcrumbItems.length - 1;
            const hasValidHref = item.href && isValidInternalPath(item.href);

            return (
              <React.Fragment key={`${item.href || item.name}-${index}`}>
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage>{item.name}</BreadcrumbPage>
                  ) : hasValidHref ? (
                    <BreadcrumbLink asChild>
                      <Link href={item.href as string}>{item.name}</Link>
                    </BreadcrumbLink>
                  ) : (
                    <span>{item.name}</span>
                  )}
                </BreadcrumbItem>
                {!isLast && <BreadcrumbSeparator />}
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};


export default BreadCrumbs;