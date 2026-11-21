import React from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Clock,
  GraduationCap,
  Layers,
  Monitor,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

import { getTuitionById } from "@/lib/api/tuition"

import HireNowButton from "@/app/components/HireNowButton"

const TuitionDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params
  const tuition = await getTuitionById(id)

  if (!tuition) notFound()

  const highlights = [
    "Personalized lessons tailored to your goals",
    "Learn at your own pace with expert guidance",
    "Practical exercises and real-world examples",
    "Flexible scheduling to fit your routine",
  ]

  return (
    <main className="min-h-screen bg-[#F5F9FF] px-4 py-8 sm:px-8 sm:py-12">
      <div className="mx-auto max-w-5xl space-y-6">
        <Link
          href="/tuitions"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#52627A] transition-colors hover:text-[#087FAF]"
        >
          <ArrowLeft size={16} />
          Back to browse
        </Link>

        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#102B59] via-[#174A85] to-[#087FAF] px-6 py-10 text-white shadow-xl shadow-[#102B59]/10 sm:px-10 sm:py-12">
          <div className="pointer-events-none absolute -top-24 -right-20 h-72 w-72 rounded-full bg-[#08B9DF]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-[#08B9DF]/10 blur-3xl" />
          <div className="pointer-events-none absolute top-6 right-10 h-40 w-40 rounded-full border-25 border-white/5" />

          <div className="relative z-10 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-extrabold tracking-[1.4px] text-white/90 uppercase backdrop-blur-md">
                <Sparkles size={12} className="text-[#6FE1F7]" />
                {String(tuition.subject)}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-extrabold tracking-wide text-white/90 uppercase backdrop-blur-md">
                <Star size={12} className="fill-[#F7BC55] text-[#F7BC55]" />
                Top rated
              </span>
            </div>

            <h1 className="mt-5 text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl">
              {String(tuition.title)}
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              {String(tuition.description)}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs text-white/80">
              <span className="flex items-center gap-2">
                <Layers size={15} className="text-[#6FE1F7]" />
                <span className="capitalize">{String(tuition.level)}</span>
              </span>
              <span className="flex items-center gap-2">
                <Monitor size={15} className="text-[#6FE1F7]" />
                <span className="capitalize">
                  {String(tuition.mode).replace("-", " ")}
                </span>
              </span>
              <span className="flex items-center gap-2">
                <Clock size={15} className="text-[#6FE1F7]" />
                {String(tuition.duration)} min / session
              </span>
            </div>
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          {/* Main content */}
          <div className="space-y-6">
            <section className="rounded-2xl border border-[#DCE8F5] bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-lg font-extrabold text-[#102B59]">
                About this tuition
              </h2>
              <div className="mt-4 h-px w-full bg-[#EDF3FA]" />
              <p className="mt-4 text-sm leading-7 text-[#52627A]">
                {String(tuition.description)}
              </p>
              <p className="mt-4 text-sm leading-7 text-[#52627A]">
                This tuition is designed for{" "}
                <span className="font-bold text-[#102B59] capitalize">
                  {String(tuition.level)}
                </span>{" "}
                learners who want to build confidence and make steady progress.
                Sessions are delivered{" "}
                <span className="font-bold text-[#102B59]">
                  {String(tuition.mode).replace("-", " ")}
                </span>
                , with each lesson lasting {String(tuition.duration)} minutes.
              </p>
            </section>

            <section className="rounded-2xl border border-[#DCE8F5] bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-lg font-extrabold text-[#102B59]">
                What you&apos;ll get
              </h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0 text-[#08A9B8]"
                    />
                    <span className="text-xs leading-5 text-[#52627A]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-[#DCE8F5] bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-lg font-extrabold text-[#102B59]">
                At a glance
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-xl bg-[#F8FAFD] p-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E4F8FE] text-[#087FAF]">
                    <BookOpen size={17} />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold tracking-wide text-[#8493A8] uppercase">
                      Subject
                    </p>
                    <p className="text-sm font-bold text-[#102B59]">
                      {String(tuition.subject)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-[#F8FAFD] p-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E4F8FE] text-[#087FAF]">
                    <Layers size={17} />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold tracking-wide text-[#8493A8] uppercase">
                      Level
                    </p>
                    <p className="text-sm font-bold text-[#102B59] capitalize">
                      {String(tuition.level)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-[#F8FAFD] p-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E4F8FE] text-[#087FAF]">
                    <Monitor size={17} />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold tracking-wide text-[#8493A8] uppercase">
                      Mode
                    </p>
                    <p className="text-sm font-bold text-[#102B59] capitalize">
                      {String(tuition.mode).replace("-", " ")}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-[#F8FAFD] p-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E4F8FE] text-[#087FAF]">
                    <Clock size={17} />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold tracking-wide text-[#8493A8] uppercase">
                      Duration
                    </p>
                    <p className="text-sm font-bold text-[#102B59]">
                      {String(tuition.duration)} minutes
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-6 lg:self-start">
            <div className="overflow-hidden rounded-2xl border border-[#DCE8F5] bg-white shadow-lg shadow-[#102B59]/5">
              <div className="h-1 w-full bg-linear-to-r from-[#102B59] via-[#087FAF] to-[#08B9DF]" />
              <div className="p-6">
                <p className="text-xs font-semibold text-[#8493A8]">
                  Price per hour
                </p>
                <p className="mt-1 text-3xl font-extrabold text-[#102B59]">
                  ৳{String(tuition.price)}
                </p>

                <div className="my-5 h-px w-full bg-[#EDF3FA]" />

                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E4F8FE] text-[#087FAF]">
                    <GraduationCap size={19} />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-[#102B59]">
                      Expert tutor
                    </p>
                    <p className="text-[11px] text-[#8493A8]">
                      Verified &amp; experienced
                    </p>
                  </div>
                </div>

                <HireNowButton tuition={tuition}></HireNowButton>

                <div className="mt-5 flex items-start gap-2 text-[11px] leading-5 text-[#8493A8]">
                  <ShieldCheck
                    size={14}
                    className="mt-0.5 shrink-0 text-[#08A9B8]"
                  />
                  <span>
                    Secure booking. You can message the tutor before you commit.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-[#DCE8F5] bg-white p-5">
              <p className="text-xs font-bold text-[#102B59]">Tuition ID</p>
              <p className="mt-1 truncate text-[11px] text-[#8493A8]">
                {String(tuition._id)}
              </p>
              <Badge className="mt-3 rounded-full border-0 bg-[#E4F8FE] text-[10px] font-bold text-[#087FAF] capitalize">
                {String(tuition.level)}
              </Badge>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}

export default TuitionDetailsPage
