import React from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Clock,
  GraduationCap,
  Hash,
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
      <div className="mx-auto max-w-6xl space-y-7">
        {/* Back Link */}
        <Link
          href="/tuitions"
          className="group inline-flex items-center gap-2.5 text-xs font-bold text-[#52627A] transition-colors hover:text-[#087FAF]"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#DCE8F5] bg-white shadow-2xs transition-all duration-200 group-hover:-translate-x-0.5 group-hover:border-[#08B9DF]/50 group-hover:text-[#087FAF]">
            <ArrowLeft
              size={15}
              className="text-[#102B59] group-hover:text-[#087FAF]"
            />
          </span>
          Back to browse
        </Link>

        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-[#102B59] via-[#153E78] to-[#087FAF] px-6 py-10 text-white shadow-2xl shadow-[#102B59]/15 sm:px-10 sm:py-12">
          {/* Ambient Glows & Geometric Accents */}
          <div className="pointer-events-none absolute -top-24 -right-20 h-80 w-80 rounded-full bg-[#08B9DF]/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-[#08B9DF]/15 blur-3xl" />
          <div className="pointer-events-none absolute top-8 right-12 hidden h-44 w-44 rounded-full border-24 border-white/4 sm:block" />
          <div className="pointer-events-none absolute -right-6 -bottom-10 hidden h-28 w-28 rounded-full border-14 border-[#08B9DF]/10 sm:block" />

          <div className="relative z-10 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-[10.5px] font-extrabold tracking-[1.4px] text-white uppercase backdrop-blur-md">
                <Sparkles size={12} className="text-[#6FE1F7]" />
                {String(tuition.subject)}
              </span>

              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/25 bg-amber-400/15 px-3 py-1 text-[10.5px] font-extrabold tracking-wide text-amber-100 uppercase backdrop-blur-md">
                <Star size={12} className="fill-[#F7BC55] text-[#F7BC55]" />
                Top rated
              </span>
            </div>

            <h1 className="mt-5 text-3xl leading-[1.18] font-extrabold tracking-tight text-white sm:text-4xl lg:text-[42px]">
              {String(tuition.title)}
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100/80 sm:text-[15px]">
              {String(tuition.description)}
            </p>

            {/* Quick Spec Pills */}
            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-semibold text-white/95">
              <span className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3.5 py-2 backdrop-blur-sm">
                <Layers size={15} className="text-[#6FE1F7]" />
                <span className="capitalize">{String(tuition.level)}</span>
              </span>

              <span className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3.5 py-2 backdrop-blur-sm">
                <Monitor size={15} className="text-[#6FE1F7]" />
                <span className="capitalize">
                  {String(tuition.mode).replace("-", " ")}
                </span>
              </span>

              <span className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3.5 py-2 backdrop-blur-sm">
                <Clock size={15} className="text-[#6FE1F7]" />
                <span>{String(tuition.duration)} min / session</span>
              </span>
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <div className="grid gap-7 lg:grid-cols-[1fr_340px]">
          {/* Main Left Column */}
          <div className="space-y-6">
            {/* About Section */}
            <section className="rounded-3xl border border-[#DCE8F5] bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E4F8FE] text-[#087FAF]">
                  <BookOpen size={18} />
                </span>
                <div>
                  <h2 className="text-lg font-extrabold tracking-tight text-[#102B59]">
                    About this tuition
                  </h2>
                  <p className="text-xs text-[#8493A8]">
                    Course overview &amp; learning format
                  </p>
                </div>
              </div>

              <div className="mt-5 h-px w-full bg-[#EDF3FA]" />

              <p className="mt-5 text-sm leading-7 text-[#52627A]">
                {String(tuition.description)}
              </p>

              <div className="mt-5 rounded-2xl border border-[#E5EFF9] bg-[#F8FBFF] p-4 sm:p-5">
                <p className="text-sm leading-7 text-[#52627A]">
                  This tuition is designed for{" "}
                  <span className="font-extrabold text-[#102B59] capitalize">
                    {String(tuition.level)}
                  </span>{" "}
                  learners who want to build confidence and make steady
                  progress. Sessions are delivered{" "}
                  <span className="font-extrabold text-[#087FAF]">
                    {String(tuition.mode).replace("-", " ")}
                  </span>
                  , with each lesson lasting{" "}
                  <span className="font-extrabold text-[#102B59]">
                    {String(tuition.duration)} minutes
                  </span>
                  .
                </p>
              </div>
            </section>

            {/* Highlights Section */}
            <section className="rounded-3xl border border-[#DCE8F5] bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E4F8FE] text-[#087FAF]">
                  <Sparkles size={18} />
                </span>
                <div>
                  <h2 className="text-lg font-extrabold tracking-tight text-[#102B59]">
                    What you&apos;ll get
                  </h2>
                  <p className="text-xs text-[#8493A8]">
                    Included with every session
                  </p>
                </div>
              </div>

              <div className="mt-5 h-px w-full bg-[#EDF3FA]" />

              <div className="mt-5 grid gap-3.5 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-[#EDF3FA] bg-[#FAFCFF] p-4 transition-colors hover:border-[#CBE9F8] hover:bg-[#F3FAFE]"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#E4F8FE] text-[#08A9B8]">
                      <CheckCircle2 size={15} />
                    </span>
                    <span className="text-xs leading-5 font-semibold text-[#40536F]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* At a Glance Section */}
            <section className="rounded-3xl border border-[#DCE8F5] bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E4F8FE] text-[#087FAF]">
                  <Layers size={18} />
                </span>
                <div>
                  <h2 className="text-lg font-extrabold tracking-tight text-[#102B59]">
                    At a glance
                  </h2>
                  <p className="text-xs text-[#8493A8]">
                    Key specifications for this listing
                  </p>
                </div>
              </div>

              <div className="mt-5 h-px w-full bg-[#EDF3FA]" />

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3.5 rounded-2xl border border-[#E6EFF8] bg-[#F8FBFF] p-4 transition-all hover:border-[#08B9DF]/50 hover:bg-white hover:shadow-sm">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-[#102B59] to-[#087FAF] text-white shadow-xs">
                    <BookOpen size={18} />
                  </span>
                  <div>
                    <p className="text-[10.5px] font-extrabold tracking-wider text-[#8493A8] uppercase">
                      Subject
                    </p>
                    <p className="mt-0.5 text-sm font-extrabold text-[#102B59]">
                      {String(tuition.subject)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 rounded-2xl border border-[#E6EFF8] bg-[#F8FBFF] p-4 transition-all hover:border-[#08B9DF]/50 hover:bg-white hover:shadow-sm">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-[#102B59] to-[#087FAF] text-white shadow-xs">
                    <Layers size={18} />
                  </span>
                  <div>
                    <p className="text-[10.5px] font-extrabold tracking-wider text-[#8493A8] uppercase">
                      Level
                    </p>
                    <p className="mt-0.5 text-sm font-extrabold text-[#102B59] capitalize">
                      {String(tuition.level)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 rounded-2xl border border-[#E6EFF8] bg-[#F8FBFF] p-4 transition-all hover:border-[#08B9DF]/50 hover:bg-white hover:shadow-sm">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-[#102B59] to-[#087FAF] text-white shadow-xs">
                    <Monitor size={18} />
                  </span>
                  <div>
                    <p className="text-[10.5px] font-extrabold tracking-wider text-[#8493A8] uppercase">
                      Mode
                    </p>
                    <p className="mt-0.5 text-sm font-extrabold text-[#102B59] capitalize">
                      {String(tuition.mode).replace("-", " ")}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 rounded-2xl border border-[#E6EFF8] bg-[#F8FBFF] p-4 transition-all hover:border-[#08B9DF]/50 hover:bg-white hover:shadow-sm">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-[#102B59] to-[#087FAF] text-white shadow-xs">
                    <Clock size={18} />
                  </span>
                  <div>
                    <p className="text-[10.5px] font-extrabold tracking-wider text-[#8493A8] uppercase">
                      Duration
                    </p>
                    <p className="mt-0.5 text-sm font-extrabold text-[#102B59]">
                      {String(tuition.duration)} minutes
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Sticky Booking Sidebar */}
          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <div className="relative overflow-hidden rounded-3xl border border-[#DCE8F5] bg-white shadow-xl shadow-[#102B59]/8">
              <div className="h-1.5 w-full bg-linear-to-r from-[#102B59] via-[#087FAF] to-[#08B9DF]" />

              <div className="p-6 sm:p-7">
                {/* Price Box */}
                <div className="rounded-2xl border border-[#E1EEF9] bg-[#F5FAFF] p-4">
                  <p className="text-[11px] font-extrabold tracking-wider text-[#7A91AC] uppercase">
                    Hourly Rate
                  </p>
                  <div className="mt-1 flex items-baseline gap-1.5">
                    <span className="text-3xl font-extrabold tracking-tight text-[#102B59] sm:text-4xl">
                      ৳{String(tuition.price)}
                    </span>
                    <span className="text-xs font-bold text-[#7A91AC]">
                      / hour
                    </span>
                  </div>
                </div>

                <div className="my-5 h-px w-full bg-[#EDF3FA]" />

                {/* Tutor Trust Block */}
                <div className="flex items-center gap-3.5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-[#102B59] to-[#087FAF] text-white shadow-sm">
                    <GraduationCap size={20} />
                  </span>
                  <div>
                    <p className="text-sm font-extrabold text-[#102B59]">
                      Expert tutor
                    </p>
                    <p className="text-xs font-medium text-[#7A91AC]">
                      Verified &amp; experienced
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <HireNowButton tuition={tuition} />
                </div>

                <div className="mt-5 flex items-start gap-2.5 rounded-xl bg-[#F8FAFD] p-3 text-[11px] leading-5 text-[#64748B]">
                  <ShieldCheck
                    size={16}
                    className="mt-0.5 shrink-0 text-[#08A9B8]"
                  />
                  <span>
                    Secure booking. You can message the tutor before you commit.
                  </span>
                </div>
              </div>
            </div>

            {/* Listing Reference Card */}
            <div className="rounded-3xl border border-[#DCE8F5] bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold tracking-wider text-[#7A91AC] uppercase">
                  <Hash size={13} className="text-[#087FAF]" />
                  Tuition ID
                </span>
                <Badge className="rounded-full border border-[#CBE9F8] bg-[#E8F8FE] px-2.5 py-0.5 text-[10px] font-extrabold text-[#087FAF] capitalize">
                  {String(tuition.level)}
                </Badge>
              </div>
              <p className="mt-2 truncate rounded-xl bg-[#F8FAFD] px-3 py-2 font-mono text-[11px] text-[#52627A]">
                {String(tuition._id)}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}

export default TuitionDetailsPage
