"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  BookMarked,
  BookOpen,
  CalendarDays,
  ClipboardList,
  GraduationCap,
  LayoutDashboard,
  MessageSquare,
  Search,
  Settings,
  ShieldCheck,
  Star,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useSession } from "@/lib/auth-client"

type Role = "student" | "teacher" | "admin"

type MenuItem = {
  name: string
  url: string
  icon: LucideIcon
}

const menuItemsByRole: Record<Role, MenuItem[]> = {
  student: [
    {
      name: "Dashboard",
      url: "/dashboard/student",
      icon: LayoutDashboard,
    },
    {
      name: "Browse Tuitions",
      url: "/dashboard/student/tuitions",
      icon: Search,
    },
    {
      name: "My Bookings",
      url: "/dashboard/student/bookings",
      icon: CalendarDays,
    },
    {
      name: "Messages",
      url: "/dashboard/student/messages",
      icon: MessageSquare,
    },
    {
      name: "Reviews",
      url: "/dashboard/student/reviews",
      icon: Star,
    },
    {
      name: "Settings",
      url: "/dashboard/student/settings",
      icon: Settings,
    },
  ],
  teacher: [
    {
      name: "Dashboard",
      url: "/dashboard/teacher",
      icon: LayoutDashboard,
    },
    {
      name: "My Tuitions",
      url: "/dashboard/teacher/tuitions",
      icon: BookMarked,
    },
    {
      name: "Students",
      url: "/dashboard/teacher/students",
      icon: Users,
    },
    {
      name: "Schedule",
      url: "/dashboard/teacher/schedule",
      icon: CalendarDays,
    },
    {
      name: "Earnings",
      url: "/dashboard/teacher/earnings",
      icon: Wallet,
    },
    {
      name: "Messages",
      url: "/dashboard/teacher/messages",
      icon: MessageSquare,
    },
    {
      name: "Reviews",
      url: "/dashboard/teacher/reviews",
      icon: Star,
    },
    {
      name: "Settings",
      url: "/dashboard/teacher/settings",
      icon: Settings,
    },
  ],
  admin: [
    {
      name: "Dashboard",
      url: "/dashboard/admin",
      icon: LayoutDashboard,
    },
    {
      name: "Users",
      url: "/dashboard/admin/users",
      icon: Users,
    },
    {
      name: "Tutors",
      url: "/dashboard/admin/tutors",
      icon: GraduationCap,
    },
    {
      name: "Tuitions",
      url: "/dashboard/admin/tuitions",
      icon: BookOpen,
    },
    {
      name: "Bookings",
      url: "/dashboard/admin/bookings",
      icon: ClipboardList,
    },
    {
      name: "Reports",
      url: "/dashboard/admin/reports",
      icon: BarChart3,
    },
    {
      name: "Moderation",
      url: "/dashboard/admin/moderation",
      icon: ShieldCheck,
    },
    {
      name: "Settings",
      url: "/dashboard/admin/settings",
      icon: Settings,
    },
  ],
}

export function DashboardSidebar() {
  const { data: session } = useSession()
  const pathname = usePathname()
  const role = session?.user?.role || "student"

  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarMenu>
            {menuItemsByRole[role].map((item) => (
              <SidebarMenuItem key={item.url}>
                <SidebarMenuButton
                  render={<Link href={item.url} />}
                  isActive={pathname === item.url}
                  tooltip={item.name}
                >
                  <item.icon />
                  <span>{item.name}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
