"use client"

import Link from "next/link"
import { ArrowUpRight, Plus, Sparkles } from "lucide-react"
import { useSession } from "@/lib/auth-client"

export default function TeacherDashboardPage() {
  const { data: session } = useSession()

  return (
    <div className="min-h-screen bg-[#F5F9FF] p-5 sm:p-8">
      {/* Header Card */}
      <div className="relative overflow-hidden rounded-3xl border border-[#DCE8F5] bg-white p-7 shadow-lg shadow-[#102B59]/5 sm:p-10">
        {/* Top Gradient Accent Line */}
        <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-[#102B59] via-[#087FAF] to-[#08B9DF]" />

        {/* Subtle Ambient Glows */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#08B9DF]/12 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-[#102B59]/5 blur-3xl" />

        <div className="relative z-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D5EAF7] bg-[#F2FAFE] px-3.5 py-1 text-[11px] font-extrabold tracking-[1.4px] text-[#087FAF] uppercase">
              <Sparkles size={13} className="text-[#08B9DF]" />
              Teacher Dashboard
            </span>

            <h1 className="mt-3.5 text-2xl font-extrabold tracking-tight text-[#102B59] sm:text-3xl lg:text-4xl">
              Welcome{session?.user?.name ? `, ${session.user.name}` : ""}
            </h1>

            <p className="mt-2 text-sm leading-relaxed text-[#64748B] sm:text-base">
              Manage your tuitions, schedule, and student messages from one
              place.
            </p>
          </div>

          <div className="flex shrink-0 items-center">
            <Link
              href="/dashboard/teacher/tuitions"
              className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-linear-to-r from-[#102B59] to-[#087FAF] px-6 py-3.5 text-xs font-bold tracking-wide text-white shadow-lg shadow-[#102B59]/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#087FAF]/20 sm:text-sm"
            >
              <Plus size={17} />
              <span>Manage Tuitions</span>
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
