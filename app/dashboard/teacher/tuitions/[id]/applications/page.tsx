import React from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Clock,
  Sparkles,
  Users,
  XCircle,
} from "lucide-react"
import { ApplicationTable } from "@/app/components/applications/ApplicationTable"
import { getApplication } from "@/lib/api/applications"
import { getTuitionById } from "@/lib/api/tuition"
import type { TuitionRow } from "../../page"

const TuitionApplicationPage = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params
  const tuition: TuitionRow = await getTuitionById(id)

  if (!tuition) notFound()

  const applications = await getApplication(`tuitionId=${id}`)
  const pending = applications.filter((a) => a.status === "pending").length
  const approved = applications.filter((a) => a.status === "approved").length
  const rejected = applications.filter((a) => a.status === "rejected").length

  const stats = [
    { label: "Total", value: applications.length, icon: Users },
    { label: "Pending", value: pending, icon: Clock },
    { label: "Approved", value: approved, icon: CheckCircle2 },
    { label: "Rejected", value: rejected, icon: XCircle },
  ]

  return (
    <main className="min-h-screen bg-[#F5F9FF] px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <Link
          href={`/dashboard/teacher/tuitions/${id}`}
          className="group inline-flex items-center gap-2 text-xs font-bold text-[#52627A] transition-colors hover:text-[#087FAF]"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#DCE8F5] bg-white shadow-2xs transition-transform group-hover:-translate-x-0.5">
            <ArrowLeft size={14} className="text-[#102B59]" />
          </span>
          Back to tuition details
        </Link>

        <section className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#102B59] via-[#174A85] to-[#087FAF] px-7 py-9 text-white shadow-xl shadow-[#102B59]/10 sm:px-10">
          <div className="pointer-events-none absolute -top-24 -right-20 h-72 w-72 rounded-full bg-[#08B9DF]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-[#08B9DF]/10 blur-3xl" />
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-extrabold tracking-[1.4px] text-white/90 uppercase backdrop-blur-md">
              <Sparkles size={12} className="text-[#6FE1F7]" />
              Applications
            </span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Review applicants
            </h1>
            <div className="mt-3 flex items-center gap-2 text-sm text-white/75">
              <BookOpen size={15} className="text-[#6FE1F7]" />
              {String(tuition.title)}
            </div>
          </div>
        </section>

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

        <section className="overflow-hidden rounded-2xl border border-[#DCE8F5] bg-white py-0 shadow-lg shadow-[#102B59]/5">
          <div className="h-1 w-full bg-linear-to-r from-[#102B59] via-[#087FAF] to-[#08B9DF]" />
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#EDF3FA] bg-[#FAFCFF] px-6 py-5 sm:px-8">
            <div>
              <h2 className="text-base font-extrabold text-[#102B59]">
                Applicants
              </h2>
              <p className="mt-0.5 text-xs text-[#8493A8]">
                Approve or reject students who applied to this tuition.
              </p>
            </div>
            <span className="rounded-full bg-[#E4F8FE] px-3 py-1 text-xs font-extrabold text-[#087FAF]">
              {applications.length} total
            </span>
          </div>

          {applications.length === 0 ? (
            <div className="px-6 py-16 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F0F8FE] text-[#087FAF]">
                <Users size={24} />
              </div>
              <h3 className="mt-4 text-base font-extrabold text-[#102B59]">
                No applications yet
              </h3>
              <p className="mt-1 text-xs text-[#8493A8]">
                Students who apply to this tuition will appear here.
              </p>
            </div>
          ) : (
            <ApplicationTable applications={applications} />
          )}
        </section>
      </div>
    </main>
  )
}

export default TuitionApplicationPage
