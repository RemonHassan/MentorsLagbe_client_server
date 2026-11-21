import Link from "next/link"
import {
  ArrowLeft,
  BookOpen,
  GraduationCap,
  Monitor,
  Sparkles,
  Star,
} from "lucide-react"
import { TuitionFilters } from "@/app/components/TuitionFilters"
import { getTuitions } from "@/lib/api/tuition"
import type { TuitionRow } from "../dashboard/teacher/tuitions/page"
import TuitionCard from "../components/TuitionCard"

const BrowseTuitions = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) => {
  const search = await searchParams
  const first = (key: string) => {
    const value = search[key]
    return Array.isArray(value) ? value[0] : value
  }

  const urlSearch = new URLSearchParams(search as Record<string, string>)
  const query = urlSearch.toString()
  const tuitions: TuitionRow[] = await getTuitions(query)

  return (
    <main className="min-h-screen bg-[#F5F9FF] px-4 py-8 sm:px-8 sm:py-12">
      <div className="mx-auto max-w-6xl space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#52627A] transition-colors hover:text-[#087FAF]"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>

        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#102B59] via-[#174A85] to-[#087FAF] px-6 py-10 text-white shadow-xl shadow-[#102B59]/10 sm:px-10 sm:py-12">
          <div className="pointer-events-none absolute -top-24 -right-20 h-72 w-72 rounded-full bg-[#08B9DF]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-[#08B9DF]/10 blur-3xl" />
          <div className="pointer-events-none absolute top-6 right-10 h-40 w-40 rounded-full border-25 border-white/5" />

          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-extrabold tracking-[1.4px] text-white/90 uppercase backdrop-blur-md">
              <Sparkles size={12} className="text-[#6FE1F7]" />
              Find your perfect mentor
            </span>
            <h1 className="mt-5 text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl">
              Browse Tuitions
            </h1>
            <p className="mt-3 text-sm leading-7 text-white/70 sm:text-base">
              Explore expert-led tuitions across subjects, levels, and learning
              modes. Find the one that fits your goals and your schedule.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs text-white/70">
              <span className="flex items-center gap-2">
                <GraduationCap size={15} className="text-[#6FE1F7]" />
                Expert tutors
              </span>
              <span className="flex items-center gap-2">
                <Monitor size={15} className="text-[#6FE1F7]" />
                Online &amp; in person
              </span>
              <span className="flex items-center gap-2">
                <Star size={15} className="fill-[#F7BC55] text-[#F7BC55]" />
                Top rated
              </span>
            </div>
          </div>
        </section>

        <TuitionFilters
          searchField={first("q")}
          subject={first("subject")}
          level={first("level")}
          mode={first("mode")}
          duration={first("duration")}
        />

        {/* Results */}
        <section className="space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-extrabold text-[#102B59]">
                Available tuitions
              </h2>
              <p className="mt-0.5 text-xs text-[#8493A8]">
                Showing {tuitions.length} result
                {tuitions.length === 1 ? "" : "s"}
              </p>
            </div>
            <span className="rounded-full bg-[#E4F8FE] px-3 py-1 text-xs font-extrabold text-[#087FAF]">
              {tuitions.length} total
            </span>
          </div>

          {tuitions.length === 0 ? (
            <div className="rounded-2xl border border-[#DCE8F5] bg-white px-6 py-16 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F0F8FE] text-[#087FAF]">
                <BookOpen size={24} />
              </div>
              <h3 className="mt-4 text-base font-extrabold text-[#102B59]">
                No tuitions found
              </h3>
              <p className="mt-1 text-xs text-[#8493A8]">
                Try adjusting your filters or search keywords.
              </p>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {tuitions.map((tuition) => (
                <TuitionCard key={tuition._id} tuition={tuition}></TuitionCard>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  )
}

export default BrowseTuitions
