import React from "react"
import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Crown,
  GraduationCap,
  Search,
  Sparkles,
  XCircle,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { getApplication } from "@/lib/api/applications"
import { getUserPremiumById } from "@/lib/api/user"
import { getSession } from "@/lib/core/server"

const formatDate = (value?: string) => {
  if (!value) return "—"
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value
  return date.toLocaleDateString("en-US", { day: "numeric", month: "short" })
}

const statusStyles: Record<string, string> = {
  approved: "bg-emerald-50 text-emerald-700",
  pending: "bg-[#E4F8FE] text-[#087FAF]",
  rejected: "bg-rose-50 text-rose-600",
}

const StudentDashboardPage = async () => {
  const session = await getSession()
  const userId = session?.user?.id

  const applications = userId
    ? await getApplication(`applicantId=${userId}`)
    : []

  let isPremium = false
  if (userId) {
    try {
      const result = (await getUserPremiumById(userId)) as {
        premium?: boolean
      }
      isPremium = Boolean(result?.premium)
    } catch {
      isPremium = false
    }
  }

  const pending = applications.filter((a) => a.status === "pending").length
  const approved = applications.filter((a) => a.status === "approved").length
  const rejected = applications.filter((a) => a.status === "rejected").length

  const stats = [
    { label: "Total applications", value: applications.length, icon: BookOpen },
    { label: "Pending", value: pending, icon: Clock },
    { label: "Approved", value: approved, icon: CheckCircle2 },
    { label: "Rejected", value: rejected, icon: XCircle },
  ]

  const recent = [...applications]
    .sort(
      (a, b) =>
        new Date(b.createdAt || 0).getTime() -
        new Date(a.createdAt || 0).getTime()
    )
    .slice(0, 4)

  return (
    <main className="min-h-screen bg-[#F5F9FF] px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-6xl space-y-6">
        {/* Welcome */}
        <section className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#102B59] via-[#174A85] to-[#087FAF] px-6 py-9 text-white shadow-xl shadow-[#102B59]/10 sm:px-10">
          <div className="pointer-events-none absolute -top-24 -right-20 h-72 w-72 rounded-full bg-[#08B9DF]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-[#08B9DF]/10 blur-3xl" />
          <div className="pointer-events-none absolute top-4 right-10 h-40 w-40 rounded-full border-25 border-white/5" />
          <div className="relative z-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-extrabold tracking-[1.4px] text-white/90 uppercase backdrop-blur-md">
                <Sparkles size={12} className="text-[#6FE1F7]" />
                Student dashboard
              </span>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Welcome back, {session?.user?.name?.split(" ")[0] || "Learner"}
              </h1>
              <p className="mt-2 text-sm leading-7 text-white/70">
                Keep track of your applications and find the mentor that fits
                your goals.
              </p>
            </div>
            <Link
              href="/tuitions"
              className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 text-xs font-extrabold text-[#102B59] shadow-lg shadow-[#102B59]/15 transition-all hover:-translate-y-0.5 hover:bg-[#F0F9FF]"
            >
              <Search size={16} />
              Browse tuitions
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </section>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          {/* Recent applications */}
          <section className="overflow-hidden rounded-2xl border border-[#DCE8F5] bg-white py-0 shadow-lg shadow-[#102B59]/5">
            <div className="h-1 w-full bg-linear-to-r from-[#102B59] via-[#087FAF] to-[#08B9DF]" />
            <div className="flex items-center justify-between gap-3 border-b border-[#EDF3FA] bg-[#FAFCFF] px-6 py-5">
              <div>
                <h2 className="text-base font-extrabold text-[#102B59]">
                  Recent applications
                </h2>
                <p className="mt-0.5 text-xs text-[#8493A8]">
                  Your latest applications and their status.
                </p>
              </div>
              <Link
                href="/dashboard/student/bookings"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#087FAF] hover:underline"
              >
                View all
                <ArrowRight size={14} />
              </Link>
            </div>

            {recent.length === 0 ? (
              <div className="px-6 py-12 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F0F8FE] text-[#087FAF]">
                  <BookOpen size={22} />
                </div>
                <h3 className="mt-3 text-sm font-extrabold text-[#102B59]">
                  No applications yet
                </h3>
                <p className="mt-1 text-xs text-[#8493A8]">
                  Browse tuitions and apply to your first mentor.
                </p>
                <Link
                  href="/tuitions"
                  className="mt-4 inline-flex h-9 items-center gap-2 rounded-xl bg-linear-to-r from-[#102B59] to-[#087FAF] px-4 text-xs font-bold text-white"
                >
                  Explore tuitions
                  <ArrowRight size={14} />
                </Link>
              </div>
            ) : (
              <div className="divide-y divide-[#EDF3FA]">
                {recent.map((application) => {
                  const status = String(
                    application.status || "pending"
                  ).toLowerCase()
                  return (
                    <div
                      key={application._id}
                      className="flex flex-wrap items-center justify-between gap-3 px-6 py-4"
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F0F8FE] text-[#087FAF]">
                          <GraduationCap size={16} />
                        </span>
                        <div className="min-w-0">
                          <p className="truncate text-xs font-bold text-[#17345F]">
                            {String(application.tuitionTitle)}
                          </p>
                          <p className="mt-0.5 text-[11px] text-[#8493A8]">
                            Applied {formatDate(application.createdAt)}
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
            )}
          </section>

          {/* Side cards */}
          <aside className="space-y-4">
            <div className="overflow-hidden rounded-2xl border border-[#D5EAF7] bg-white shadow-sm">
              <div className="h-1 w-full bg-linear-to-r from-[#102B59] to-[#087FAF]" />
              <div className="p-5">
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                      isPremium
                        ? "bg-amber-100 text-amber-700"
                        : "bg-[#E4F8FE] text-[#087FAF]"
                    }`}
                  >
                    <Crown size={19} />
                  </span>
                  <div>
                    <p className="text-sm font-extrabold text-[#102B59]">
                      {isPremium ? "Premium member" : "Free plan"}
                    </p>
                    <p className="text-[11px] text-[#8493A8]">
                      {isPremium
                        ? "Unlimited applications unlocked"
                        : "Up to 5 applications"}
                    </p>
                  </div>
                </div>
                {!isPremium && (
                  <>
                    <div className="my-4 h-px w-full bg-[#EDF3FA]" />
                    <p className="text-xs leading-5 text-[#64748B]">
                      Unlock unlimited applications and get priority responses
                      from tutors.
                    </p>
                    <Link
                      href="/pricing"
                      className="mt-4 flex h-10 items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#102B59] to-[#087FAF] text-xs font-bold text-white transition-transform hover:-translate-y-0.5"
                    >
                      See plans
                      <ArrowRight size={14} />
                    </Link>
                  </>
                )}
              </div>
            </div>

            <div className="rounded-2xl border border-[#DCE8F5] bg-white p-5 shadow-sm">
              <h3 className="text-sm font-extrabold text-[#102B59]">
                Quick actions
              </h3>
              <div className="mt-4 space-y-2">
                <QuickLink
                  href="/tuitions"
                  icon={<Search size={15} />}
                  label="Find a tuition"
                />
                <QuickLink
                  href="/dashboard/student/bookings"
                  icon={<BookOpen size={15} />}
                  label="My applications"
                />
                <QuickLink
                  href="/pricing"
                  icon={<Crown size={15} />}
                  label="Compare plans"
                />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}

const QuickLink = ({
  href,
  icon,
  label,
}: {
  href: string
  icon: React.ReactNode
  label: string
}) => (
  <Link
    href={href}
    className="flex items-center justify-between rounded-xl border border-[#E2E9F3] px-3.5 py-3 text-xs font-bold text-[#40536F] transition-colors hover:border-[#08B9DF] hover:bg-[#F0FAFF] hover:text-[#087FAF]"
  >
    <span className="flex items-center gap-2.5">
      <span className="text-[#087FAF]">{icon}</span>
      {label}
    </span>
    <ArrowUpRight size={14} />
  </Link>
)

export default StudentDashboardPage
