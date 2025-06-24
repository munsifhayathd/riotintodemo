"use client";

import { cn } from "@/lib/utils";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Settings,
  Users,
  ChevronRight,
  LogOut,
  BarChart3,
  Briefcase,
  Plane,
  FileCheck,
  UserCircle,
  Mountain,
  Pickaxe,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Logo } from "@/components/ui/logo";
import { PREFFIX, SUFFIX } from "../../../global-config";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  // Mining Operations Management Routes
  {
    label: "Personnel Allocation",
    icon: Briefcase,
    href: "/dashboard/mobilisation/personnel",
  },
  {
    label: "Travel & Logistics",
    icon: Plane,
    href: "/dashboard/mobilisation/travel",
  },
  {
    label: "Safety Certifications",
    icon: FileCheck,
    href: "/dashboard/mobilisation/certifications",
  },
  {
    label: "Employee Profile",
    icon: UserCircle,
    href: "/dashboard/employee-profile",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <div className="fixed left-0 top-0 z-50 h-screen w-64 border-r border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="flex h-full flex-col">
        <div className="px-4 py-6">
          <Logo size="sm" />
        </div>

        <div className="flex-1 space-y-1 px-3">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "group flex items-center justify-between rounded-lg p-2 text-sm font-medium transition-all hover:bg-gray-100 dark:hover:bg-gray-800",
                pathname === route.href 
                  ? "bg-primary/10 text-primary dark:bg-primary/20" 
                  : "text-gray-600 dark:text-gray-400"
              )}
            >
              <div className="flex items-center">
                <route.icon 
                  className={cn(
                    "mr-3 h-4 w-4",
                    pathname === route.href 
                      ? "text-primary" 
                      : "text-primary/60 group-hover:text-primary"
                  )} 
                />
                {route.label}
              </div>
              <ChevronRight
                className={cn(
                  "h-4 w-4 text-primary/40 transition-all",
                  pathname === route.href 
                    ? "opacity-100" 
                    : "opacity-0 group-hover:opacity-100"
                )}
              />
            </Link>
          ))}
        </div>

        <div className="mt-auto p-3 border-t">
          <div className="flex items-center gap-2 rounded-lg p-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={session?.user?.image || ""} />
              <AvatarFallback>
                {session?.user?.name?.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{session?.user?.name}</p>
              <p className="text-xs text-gray-500 truncate">{session?.user?.email}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => signOut()}
              className="text-primary/60 hover:text-primary"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 