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
  HomeIcon,
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
      name: "Home",
      url: "/",
      icon: HomeIcon,
    },
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
      name: "Home",
      url: "/",
      icon: HomeIcon,
    },
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
      name: "Add Tuitions",
      url: "/dashboard/teacher/tuitions/new",
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
      name: "Home",
      url: "/",
      icon: HomeIcon,
    },
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
  const role = (session?.user?.role as Role) || "student"

  const initials = session?.user?.name
    ? session.user.name
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((word) => word[0]?.toUpperCase())
        .join("")
    : "U"

  return (
    <Sidebar className="border-r border-[#E1ECF7] bg-[#F5F9FF]">
      {/* Brand Header */}
      <SidebarHeader className="border-b border-[#E5EFF9] bg-white/80 px-4 py-4 backdrop-blur-md">
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-linear-to-br from-[#102B59] to-[#174A85] shadow-md shadow-[#102B59]/15 transition-transform duration-300 group-hover:-translate-y-0.5">
            <div className="absolute -top-2.5 -right-2.5 h-7 w-7 rounded-full bg-[#16C5E8]/30 blur-sm" />
            <GraduationCap
              size={22}
              strokeWidth={2}
              className="relative text-white"
            />
          </div>

          <div className="flex flex-col group-data-[collapsible=icon]:hidden">
            <span className="text-[20px] leading-none font-extrabold tracking-[-0.8px] text-[#102B59]">
              Mentor<span className="text-[#08B9DF]">Lagbe</span>
            </span>
            <span className="mt-1 text-[8px] font-bold tracking-[2.4px] text-[#8493A8] uppercase">
              Learning Portal
            </span>
          </div>
        </Link>
      </SidebarHeader>

      {/* Navigation Links */}
      <SidebarContent className="bg-[#F5F9FF] px-2.5 py-4">
        <SidebarGroup className="p-0">
          <SidebarGroupLabel className="mb-2 px-3 text-[11px] font-extrabold tracking-[1.6px] text-[#7A91AC] uppercase">
            {role} Menu
          </SidebarGroupLabel>

          <SidebarMenu className="gap-1.5">
            {menuItemsByRole[role].map((item) => {
              const isActive = pathname === item.url
              return (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton
                    render={<Link href={item.url} />}
                    isActive={isActive}
                    tooltip={item.name}
                    className={`group/item h-11 rounded-xl px-3.5 text-[13.5px] font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-linear-to-r from-[#102B59] to-[#087FAF] text-white shadow-md shadow-[#102B59]/15 hover:text-white"
                        : "text-[#52627A] hover:bg-white hover:text-[#102B59] hover:shadow-xs"
                    }`}
                  >
                    <item.icon
                      className={`size-4.5 transition-colors ${
                        isActive
                          ? "text-[#7CE4FF]"
                          : "text-[#087FAF] group-hover/item:text-[#08B9DF]"
                      }`}
                    />
                    <span>{item.name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      {/* User Card Footer */}
      <SidebarFooter className="border-t border-[#E5EFF9] bg-white/80 p-3 backdrop-blur-md">
        <div className="flex items-center gap-3 rounded-2xl border border-[#D5EAF7] bg-[#F5F9FF] p-2.5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-[#102B59] to-[#087FAF] text-xs font-extrabold tracking-wide text-white shadow-xs">
            {initials}
          </div>

          <div className="min-w-0 flex-1 group-data-[collapsible=icon]:hidden">
            <p className="truncate text-[13px] font-bold text-[#102B59]">
              {session?.user?.name || "User"}
            </p>
            <span
              className={`mt-0.5 inline-flex items-center rounded-full px-2 py-0.5 text-[9.5px] font-bold tracking-wider uppercase ${
                role === "admin"
                  ? "bg-amber-100 text-amber-700"
                  : role === "teacher"
                    ? "bg-[#E4F8FE] text-[#087FAF]"
                    : "bg-emerald-50 text-emerald-700"
              }`}
            >
              {role}
            </span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
