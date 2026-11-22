import React from "react"
import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ClipboardList,
  Clock,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  UserRound,
  Users,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { getApplication } from "@/lib/api/applications"
import { getTuitions } from "@/lib/api/tuition"
import { getUsers } from "@/lib/api/user-server"

const roleStyles: Record<string, string> = {
  admin: "bg-[#102B59] text-white",
  teacher: "bg-amber-50 text-amber-700",
  student: "bg-[#E4F8FE] text-[#087FAF]",
}

const statusStyles: Record<string, string> = {
  approved: "bg-emerald-50 text-emerald-700",
  pending: "bg-[#E4F8FE] text-[#087FAF]",
  rejected: "bg-rose-50 text-rose-600",
}

const AdminDashboardPage = async () => {
  const { users } = await getUsers()
  const tuitions = await getTuitions()
  const applications = await getApplication()

  const admins = users.filter((u) => u.role === "admin").length
  const teachers = users.filter((u) => u.role === "teacher").length
  const students = users.filter((u) => u.role === "student").length
  const pending = applications.filter((a) => a.status === "pending").length
  const approved = applications.filter((a) => a.status === "approved").length

  const stats = [
    { label: "Total users", value: users.length, icon: Users },
    { label: "Students", value: students, icon: UserRound },
    { label: "Teachers", value: teachers, icon: GraduationCap },
    { label: "Admins", value: admins, icon: ShieldCheck },
    { label: "Tuitions", value: tuitions.length, icon: BookOpen },
    { label: "Applications", value: applications.length, icon: ClipboardList },
  ]

  const recentUsers = [...users].slice(0, 5)
  const recentApplications = [...applications]
    .sort(
      (a, b) =>
        new Date(b.createdAt || 0).getTime() -
        new Date(a.createdAt || 0).getTime()
    )
    .slice(0, 5)

  return (
    <main className="min-h-screen bg-[#F5F9FF] px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-6xl space-y-6">
        {/* Header */}
        <section className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#102B59] via-[#174A85] to-[#087FAF] px-6 py-9 text-white shadow-xl shadow-[#102B59]/10 sm:px-10">
          <div className="pointer-events-none absolute -top-24 -right-20 h-72 w-72 rounded-full bg-[#08B9DF]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-[#08B9DF]/10 blur-3xl" />
          <div className="pointer-events-none absolute top-4 right-10 h-40 w-40 rounded-full border-25 border-white/5" />
          <div className="relative z-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-extrabold tracking-[1.4px] text-white/90 uppercase backdrop-blur-md">
                <Sparkles size={12} className="text-[#6FE1F7]" />
                Administration
              </span>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Admin overview
              </h1>
              <p className="mt-2 text-sm leading-7 text-white/70">
                A snapshot of your community, listings, and applications.
              </p>
            </div>
            <Link
              href="/dashboard/admin/users"
              className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 text-xs font-extrabold text-[#102B59] shadow-lg shadow-[#102B59]/15 transition-all hover:-translate-y-0.5 hover:bg-[#F0F9FF]"
            >
              <Users size={16} />
              Manage users
              <ArrowRight size={15} />
            </Link>
          </div>
        </section>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="rounded-2xl border border-[#DCE8F5] bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-bold tracking-wide text-[#8493A8] uppercase">
                  {label}
                </p>
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E4F8FE] text-[#087FAF]">
                  <Icon size={17} />
                </span>
              </div>
              <p className="mt-3 text-2xl font-extrabold text-[#102B59]">
                {value}
              </p>
            </div>
          ))}
        </div>

        {/* Activity summary */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex items-center gap-4 rounded-2xl border border-[#DCE8F5] bg-white p-5 shadow-sm">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E4F8FE] text-[#087FAF]">
              <Clock size={20} />
            </span>
            <div>
              <p className="text-xs font-extrabold text-[#102B59]">
                {pending} pending applications
              </p>
              <p className="mt-0.5 text-[11px] text-[#8493A8]">
                Awaiting tutor review
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-2xl border border-[#DCE8F5] bg-white p-5 shadow-sm">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
              <CheckCircle2 size={20} />
            </span>
            <div>
              <p className="text-xs font-extrabold text-[#102B59]">
                {approved} approved applications
              </p>
              <p className="mt-0.5 text-[11px] text-[#8493A8]">
                Successful mentor matches
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Recent users */}
          <section className="overflow-hidden rounded-2xl border border-[#DCE8F5] bg-white py-0 shadow-lg shadow-[#102B59]/5">
            <div className="h-1 w-full bg-linear-to-r from-[#102B59] via-[#087FAF] to-[#08B9DF]" />
            <div className="flex items-center justify-between gap-3 border-b border-[#EDF3FA] bg-[#FAFCFF] px-6 py-5">
              <div>
                <h2 className="text-base font-extrabold text-[#102B59]">
                  Recent users
                </h2>
                <p className="mt-0.5 text-xs text-[#8493A8]">
                  Newest members of your community.
                </p>
              </div>
              <Link
                href="/dashboard/admin/users"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#087FAF] hover:underline"
              >
                View all
                <ArrowRight size={14} />
              </Link>
            </div>
            <div className="divide-y divide-[#EDF3FA]">
              {recentUsers.map((user) => {
                const role = String(user.role || "student").toLowerCase()
                return (
                  <div
                    key={user.id}
                    className="flex items-center justify-between gap-3 px-6 py-4"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#102B59] to-[#087FAF] text-xs font-extrabold text-white">
                        {String(user.name || "?")
                          .charAt(0)
                          .toUpperCase()}
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-xs font-bold text-[#17345F]">
                          {String(user.name || "—")}
                        </p>
                        <p className="mt-0.5 truncate text-[11px] text-[#8493A8]">
                          {String(user.email)}
                        </p>
                      </div>
                    </div>
                    <Badge
                      className={`rounded-full border-0 px-2.5 py-0.5 text-[10px] font-bold capitalize ${roleStyles[role] ?? "bg-[#F1F5F9] text-[#52627A]"}`}
                    >
                      {role}
                    </Badge>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Recent applications */}
          <section className="overflow-hidden rounded-2xl border border-[#DCE8F5] bg-white py-0 shadow-lg shadow-[#102B59]/5">
            <div className="h-1 w-full bg-linear-to-r from-[#102B59] via-[#087FAF] to-[#08B9DF]" />
            <div className="border-b border-[#EDF3FA] bg-[#FAFCFF] px-6 py-5">
              <h2 className="text-base font-extrabold text-[#102B59]">
                Recent applications
              </h2>
              <p className="mt-0.5 text-xs text-[#8493A8]">
                Latest activity across all tuitions.
              </p>
            </div>
            <div className="divide-y divide-[#EDF3FA]">
              {recentApplications.map((application) => {
                const status = String(
                  application.status || "pending"
                ).toLowerCase()
                return (
                  <div
                    key={application._id}
                    className="flex items-center justify-between gap-3 px-6 py-4"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F0F8FE] text-[#087FAF]">
                        <ClipboardList size={16} />
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-xs font-bold text-[#17345F]">
                          {String(application.tuitionTitle)}
                        </p>
                        <p className="mt-0.5 truncate text-[11px] text-[#8493A8]">
                          {String(application.studentName || "Student")}
                        </p>
                      </div>
                    </div>
                    <Badge
                      className={`rounded-full border-0 px-2.5 py-0.5 text-[10px] font-bold capitalize ${statusStyles[status] ?? "bg-[#F1F5F9] text-[#52627A]"}`}
                    >
                      {status}
                    </Badge>
                  </div>
                )
              })}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default AdminDashboardPage
