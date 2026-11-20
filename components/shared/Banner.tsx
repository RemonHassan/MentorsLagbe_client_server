import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  Users,
  Star,
  CheckCircle2,
  Sparkles,
  Search,
} from "lucide-react"

export default function Banner() {
  return (
    <section className="relative overflow-hidden bg-[#F5F9FF]">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#08B9DF]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 -bottom-40 h-96 w-96 rounded-full bg-[#174A85]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-350 items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-10 lg:px-12 lg:py-28">
        {/* Left Content */}
        <div className="relative z-10 max-w-2xl">
          {/* Announcement */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#D5EAF7] bg-white px-4 py-2 shadow-sm transition-transform duration-300 hover:-translate-y-0.5">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E4F8FE]">
              <Sparkles size={14} className="text-[#079BC8]" />
            </span>
            <span className="text-xs font-bold tracking-wide text-[#174A85]">
              YOUR LEARNING JOURNEY STARTS HERE
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl leading-[1.18] font-extrabold tracking-tight text-[#102B59] sm:text-5xl lg:text-[58px]">
            Find Your Perfect
            <span className="relative mt-2 block text-[#079BC8]">
              Mentor & Learn
            </span>
            <span className="block">Without Limits.</span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-8 text-[#64748B] sm:text-lg">
            Connect with experienced tutors, discover the right tuition, and
            take your learning to the next level. Your future starts with the
            right mentor.
          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/tuitions"
              className="group flex items-center justify-center gap-3 rounded-xl bg-linear-to-r from-[#102B59] to-[#087FAF] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-[#102B59]/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <Search size={18} />
              Explore Tuitions
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <Link
              href="/sign-up"
              className="group flex items-center justify-center gap-2 rounded-xl border border-[#CFE0F0] bg-white px-7 py-4 text-sm font-bold text-[#102B59] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#08B9DF] hover:bg-[#F0FAFF]"
            >
              Become a Tutor
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-[#DFE9F4] pt-7">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E2F5FC]">
                <Users size={18} className="text-[#087FAF]" />
              </div>
              <div>
                <p className="text-sm font-extrabold text-[#102B59]">Trusted</p>
                <p className="text-xs text-[#8493A8]">Learning community</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E2F5FC]">
                <GraduationCap size={19} className="text-[#087FAF]" />
              </div>
              <div>
                <p className="text-sm font-extrabold text-[#102B59]">
                  Expert Tutors
                </p>
                <p className="text-xs text-[#8493A8]">Quality guidance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="relative mx-auto w-full max-w-135">
          {/* Main Illustration Container */}
          <div className="relative overflow-hidden rounded-[32px] border border-white bg-linear-to-br from-[#E5F5FF] via-[#F4FAFF] to-[#DCEEFF] p-5 shadow-2xl shadow-[#174A85]/10 sm:p-8">
            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full border-30 border-white/40" />
            <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[#08B9DF]/10 blur-2xl" />

            {/* Top Card */}
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold tracking-[2px] text-[#7A91AC] uppercase">
                  Learning Dashboard
                </p>
                <h3 className="mt-1 text-xl font-extrabold text-[#102B59]">
                  Grow Your Skills
                </h3>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#087FAF] shadow-sm">
                <GraduationCap size={24} />
              </div>
            </div>

            {/* Main Illustration */}
            <div className="relative z-10 my-8 flex min-h-62.5 items-center justify-center">
              {/* Ultra-slow rotating dashed ring */}
              <div className="absolute h-64 w-64 animate-[spin_40s_linear_infinite] rounded-full border border-dashed border-[#7BBDE0]/70" />
              <div className="absolute h-48 w-48 rounded-full bg-linear-to-br from-[#B8E9F9] to-[#D8EAFF]" />

              <div className="group relative flex h-44 w-44 items-center justify-center rounded-[36px] bg-linear-to-br from-[#102B59] to-[#087FAF] shadow-2xl shadow-[#102B59]/25 transition-transform duration-500 hover:scale-105">
                <div className="absolute inset-3 rounded-[28px] border border-white/15" />
                <GraduationCap
                  size={100}
                  strokeWidth={1.4}
                  className="text-white transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute -top-4 -right-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#08B9DF] text-white shadow-lg">
                  <Sparkles size={23} />
                </div>
              </div>

              {/* Floating Book Icon (Gentle float) */}
              <div className="absolute top-4 left-2 flex h-14 w-14 animate-[bounce_5s_ease-in-out_infinite] items-center justify-center rounded-2xl bg-white shadow-lg shadow-blue-900/10 sm:left-5">
                <BookOpen size={26} className="text-[#087FAF]" />
              </div>

              {/* Floating Star Icon (Offset gentle float) */}
              <div className="absolute right-2 bottom-4 flex h-12 w-12 animate-[bounce_6s_ease-in-out_infinite] items-center justify-center rounded-2xl bg-white shadow-lg shadow-blue-900/10 sm:right-5">
                <Star size={23} className="fill-[#F7BC55] text-[#F7BC55]" />
              </div>
            </div>

            {/* Bottom Info */}
            <div className="relative z-10 rounded-2xl border border-white/80 bg-white/85 p-4 shadow-lg shadow-[#102B59]/5 backdrop-blur-md transition-transform duration-300 hover:-translate-y-0.5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-[#8493A8]">
                    Your next step
                  </p>
                  <p className="mt-1 text-sm font-extrabold text-[#102B59]">
                    Find Your Ideal Tutor
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E3F8FE]">
                  <ArrowUpRight size={21} className="text-[#087FAF]" />
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <CheckCircle2 size={15} className="text-[#08A9B8]" />
                <p className="text-xs font-medium text-[#64748B]">
                  Personalized learning opportunities
                </p>
              </div>
            </div>
          </div>

          {/* Floating Badge */}
          <div className="absolute top-1/3 -left-3 hidden items-center gap-3 rounded-2xl border border-[#E6EDF6] bg-white p-3 shadow-xl shadow-[#102B59]/10 transition-transform duration-300 hover:-translate-y-1 sm:flex lg:-left-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E3F8FE]">
              <Users size={20} className="text-[#087FAF]" />
            </div>
            <div>
              <p className="text-sm font-extrabold text-[#102B59]">
                Better Learning
              </p>
              <p className="text-[11px] text-[#8493A8]">
                With the right mentor
              </p>
            </div>
          </div>

          {/* Bottom Floating Badge */}
          <div className="absolute -right-2 -bottom-5 hidden items-center gap-2 rounded-2xl border border-[#E6EDF6] bg-white px-4 py-3 shadow-xl shadow-[#102B59]/10 transition-transform duration-300 hover:-translate-y-1 sm:flex lg:-right-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E5F9F1]">
              <CheckCircle2 size={19} className="text-emerald-500" />
            </div>
            <span className="text-xs font-bold text-[#102B59]">
              Learn With Confidence
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
