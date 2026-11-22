import React from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Clock,
  DollarSign,
  Layers,
  Monitor,
  Sparkles,
  Users,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { getApplication } from "@/lib/api/applications"
import { getTuitionById } from "@/lib/api/tuition"
import type { TuitionRow } from "../page"

const TuitionDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params
  const tuition: TuitionRow = await getTuitionById(id)

  if (!tuition) notFound()

  const applications = await getApplication(`tuitionId=${id}`)

  const details = [
    { label: "Subject", value: String(tuition.subject), icon: BookOpen },
    { label: "Level", value: String(tuition.level), icon: Layers },
    {
      label: "Mode",
      value: String(tuition.mode).replace("-", " "),
      icon: Monitor,
    },
    {
      label: "Duration",
      value: `${String(tuition.duration)} min`,
      icon: Clock,
    },
    {
      label: "Price per hour",
      value: `৳${String(tuition.price)}`,
      icon: DollarSign,
    },
  ]

  return (
    <main className="min-h-screen bg-[#F5F9FF] px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-4xl space-y-6">
        <Link
          href="/dashboard/teacher/tuitions"
          className="group inline-flex items-center gap-2 text-xs font-bold text-[#52627A] transition-colors hover:text-[#087FAF]"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#DCE8F5] bg-white shadow-2xs transition-transform group-hover:-translate-x-0.5">
            <ArrowLeft size={14} className="text-[#102B59]" />
          </span>
          Back to My Tuitions
        </Link>

        <section className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#102B59] via-[#174A85] to-[#087FAF] px-7 py-10 text-white shadow-xl shadow-[#102B59]/10 sm:px-10">
          <div className="pointer-events-none absolute -top-24 -right-20 h-72 w-72 rounded-full bg-[#08B9DF]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-[#08B9DF]/10 blur-3xl" />
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-extrabold tracking-[1.4px] text-white/90 uppercase backdrop-blur-md">
              <Sparkles size={12} className="text-[#6FE1F7]" />
              Your listing
            </span>
            <h1 className="mt-5 text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl">
              {String(tuition.title)}
            </h1>
            <p className="mt-4 text-sm leading-7 text-white/70">
              {String(tuition.description)}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge className="rounded-full border-0 bg-white/15 px-3 py-1 text-[11px] font-bold text-white capitalize backdrop-blur-md">
                {String(tuition.subject)}
              </Badge>
              <Badge className="rounded-full border-0 bg-white/15 px-3 py-1 text-[11px] font-bold text-white capitalize backdrop-blur-md">
                {String(tuition.level)}
              </Badge>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-[#DCE8F5] bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-lg font-extrabold text-[#102B59]">
            Tuition details
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {details.map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl bg-[#F8FAFD] p-4"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E4F8FE] text-[#087FAF]">
                  <Icon size={17} />
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold tracking-wide text-[#8493A8] uppercase">
                    {label}
                  </p>
                  <p className="truncate text-sm font-bold text-[#102B59] capitalize">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col items-start justify-between gap-5 rounded-2xl border border-[#DCE8F5] bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:p-8">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E4F8FE] text-[#087FAF]">
              <Users size={22} />
            </span>
            <div>
              <h2 className="text-base font-extrabold text-[#102B59]">
                Student applications
              </h2>
              <p className="mt-1 text-xs text-[#64748B]">
                You have {applications.length} applicant
                {applications.length === 1 ? "" : "s"} for this tuition. Review
                and update their status.
              </p>
            </div>
          </div>
          <Link
            href={`/dashboard/teacher/tuitions/${id}/applications`}
            className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#102B59] to-[#087FAF] px-5 text-xs font-bold text-white shadow-lg shadow-[#102B59]/15 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#087FAF]/20"
          >
            View applications
            <ArrowRight size={15} />
          </Link>
        </section>
      </div>
    </main>
  )
}

export default TuitionDetailPage
