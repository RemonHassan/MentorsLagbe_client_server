import React from "react"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  BookOpen,
  CheckCircle2,
  Compass,
  GraduationCap,
  HeartHandshake,
  Monitor,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react"

const AboutPage = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Verified & Trusted Mentors",
      description:
        "Every teacher on MentorLagbe goes through a structured profile review so students and parents can connect with genuine, qualified educators.",
    },
    {
      icon: Monitor,
      title: "Flexible Online & In-Person Learning",
      description:
        "Whether you prefer interactive online sessions from home or focused in-person guidance, you can choose the mode that fits your routine.",
    },
    {
      icon: HeartHandshake,
      title: "Transparent & Direct Matching",
      description:
        "Clear hourly pricing, defined session durations, and straightforward subject levels eliminate guesswork before your first class even begins.",
    },
  ]

  const steps = [
    {
      step: "01",
      title: "Explore Curated Tuitions",
      description:
        "Filter listings by subject, academic level, teaching mode, and session duration to find the exact match for your learning goals.",
    },
    {
      step: "02",
      title: "Review Full Details",
      description:
        "Inspect lesson syllabi, hourly rates, and tutor expertise upfront with complete clarity and zero hidden charges.",
    },
    {
      step: "03",
      title: "Book & Start Learning",
      description:
        "Confirm your booking securely in seconds and begin personalized one-on-one sessions tailored to your pace.",
    },
  ]

  const commitments = [
    "Personalized one-on-one academic attention",
    "Clear, upfront hourly rates in BDT (৳)",
    "Support for beginner to advanced learners",
    "Seamless scheduling for students and educators",
  ]

  return (
    <main className="min-h-screen bg-[#F5F9FF] px-4 py-8 sm:px-8 sm:py-12">
      <div className="mx-auto max-w-6xl space-y-10">
        {/* Back Link */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2.5 text-xs font-bold text-[#52627A] transition-colors hover:text-[#087FAF]"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#DCE8F5] bg-white shadow-2xs transition-all duration-200 group-hover:-translate-x-0.5 group-hover:border-[#08B9DF]/50 group-hover:text-[#087FAF]">
            <ArrowLeft
              size={15}
              className="text-[#102B59] group-hover:text-[#087FAF]"
            />
          </span>
          Back to home
        </Link>

        {/* Hero Banner */}
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-[#102B59] via-[#153E78] to-[#087FAF] px-6 py-11 text-white shadow-2xl shadow-[#102B59]/15 sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -top-24 -right-20 h-80 w-80 rounded-full bg-[#08B9DF]/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-[#08B9DF]/15 blur-3xl" />
          <div className="pointer-events-none absolute top-8 right-12 hidden h-48 w-48 rounded-full border-26 border-white/4 lg:block" />

          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-[10.5px] font-extrabold tracking-[1.5px] text-white uppercase backdrop-blur-md">
              <Sparkles size={12} className="text-[#6FE1F7]" />
              About MentorLagbe
            </span>

            <h1 className="mt-5 text-3xl leading-[1.18] font-extrabold tracking-tight text-white sm:text-4xl lg:text-[44px]">
              Bridging the gap between dedicated mentors and eager learners.
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-blue-100/80 sm:text-base">
              MentorLagbe is a modern tuition and mentorship platform built to
              make finding the right teacher effortless, transparent, and
              reliable—empowering students to learn better and educators to grow
              their teaching practice.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link
                href="/tuitions"
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-white px-6 text-xs font-extrabold tracking-wide text-[#102B59] shadow-lg shadow-black/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#E8F8FE]"
              >
                <span>Explore Tuitions</span>
                <ArrowUpRight
                  size={15}
                  className="text-[#087FAF] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                href="/signup"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 text-xs font-bold text-white backdrop-blur-md transition-colors hover:border-white/40 hover:bg-white/15"
              >
                <GraduationCap size={16} className="text-[#6FE1F7]" />
                <span>Join as a Mentor</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Mission & Vision Split Section */}
        <section className="grid gap-6 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl border border-[#DCE8F5] bg-white p-7 shadow-sm sm:p-9">
            <div className="h-1 w-16 rounded-full bg-linear-to-r from-[#102B59] to-[#08B9DF]" />

            <div className="mt-5 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E4F8FE] text-[#087FAF]">
                <Compass size={22} />
              </span>
              <div>
                <p className="text-[11px] font-extrabold tracking-wider text-[#087FAF] uppercase">
                  Our Mission
                </p>
                <h2 className="text-xl font-extrabold tracking-tight text-[#102B59]">
                  Accessible, Quality Guidance for Every Student
                </h2>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-[#52627A]">
              Finding a trustworthy tutor shouldn&apos;t rely on word-of-mouth
              luck or scattered social media posts. We created MentorLagbe to
              give students a structured, searchable catalog of subject-matter
              mentors with clear expectations from day one.
            </p>

            <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {commitments.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 rounded-xl bg-[#F8FBFF] p-3 text-xs font-semibold text-[#40536F]"
                >
                  <CheckCircle2
                    size={15}
                    className="mt-0.5 shrink-0 text-[#08A9B8]"
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-[#DCE8F5] bg-white p-7 shadow-sm sm:p-9">
            <div className="h-1 w-16 rounded-full bg-linear-to-r from-[#087FAF] to-[#08B9DF]" />

            <div className="mt-5 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E4F8FE] text-[#087FAF]">
                <Award size={22} />
              </span>
              <div>
                <p className="text-[11px] font-extrabold tracking-wider text-[#087FAF] uppercase">
                  For Educators
                </p>
                <h2 className="text-xl font-extrabold tracking-tight text-[#102B59]">
                  Tools Built to Empower Great Teachers
                </h2>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-[#52627A]">
              Passionate teachers deserve a professional workspace to showcase
              their expertise, manage tuition listings, and connect directly
              with motivated students—whether they teach foundational school
              subjects or advanced technical skills.
            </p>

            <div className="mt-6 rounded-2xl border border-[#E1EEF9] bg-[#F5FAFF] p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-[#102B59] to-[#087FAF] text-white">
                  <Users size={18} />
                </span>
                <div>
                  <p className="text-sm font-extrabold text-[#102B59]">
                    Built for Clarity &amp; Trust
                  </p>
                  <p className="mt-0.5 text-xs leading-relaxed text-[#64748B]">
                    Streamlined dashboards for both students and teachers keep
                    bookings, subjects, and schedules organized in one place.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Pillars */}
        <section className="space-y-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#CBE9F8] bg-[#E8F8FE] px-3.5 py-1 text-[11px] font-extrabold tracking-[1.4px] text-[#087FAF] uppercase">
              Why MentorLagbe
            </span>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#102B59] sm:text-3xl">
              Designed around better learning outcomes
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.title}
                  className="group relative overflow-hidden rounded-3xl border border-[#DCE8F5] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#08B9DF]/60 hover:shadow-xl hover:shadow-[#102B59]/8"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-[#102B59] via-[#087FAF] to-[#08B9DF] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-[#102B59] to-[#087FAF] text-white shadow-md shadow-[#102B59]/15">
                    <Icon size={22} className="text-[#7CE4FF]" />
                  </span>

                  <h3 className="mt-5 text-base font-extrabold text-[#102B59]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-6 text-[#64748B]">
                    {pillar.description}
                  </p>
                </div>
              )
            })}
          </div>
        </section>

        {/* How It Works */}
        <section className="relative overflow-hidden rounded-3xl border border-[#DCE8F5] bg-white p-7 shadow-sm sm:p-10">
          <div className="flex flex-col justify-between gap-4 border-b border-[#EDF3FA] pb-6 sm:flex-row sm:items-end">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E8F8FE] px-3 py-1 text-[10.5px] font-extrabold tracking-[1.4px] text-[#087FAF] uppercase">
                <BookOpen size={12} />
                How It Works
              </span>
              <h2 className="mt-2.5 text-2xl font-extrabold tracking-tight text-[#102B59]">
                Start learning in three simple steps
              </h2>
            </div>

            <Link
              href="/tuitions"
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#087FAF] transition-colors hover:text-[#102B59]"
            >
              Browse all tuitions
              <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="mt-7 grid gap-6 md:grid-cols-3">
            {steps.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-[#E6EFF8] bg-[#FAFCFF] p-6"
              >
                <span className="inline-flex rounded-xl bg-linear-to-r from-[#102B59] to-[#087FAF] px-3 py-1 text-xs font-extrabold tracking-wider text-white">
                  Step {item.step}
                </span>
                <h3 className="mt-4 text-base font-extrabold text-[#102B59]">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#64748B]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="relative overflow-hidden rounded-3xl border border-[#DCE8F5] bg-white p-8 text-center shadow-lg shadow-[#102B59]/5 sm:p-12">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-[#102B59] via-[#087FAF] to-[#08B9DF]" />

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-[#102B59] to-[#087FAF] text-white shadow-lg shadow-[#102B59]/20">
            <GraduationCap size={26} className="text-[#7CE4FF]" />
          </div>

          <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-[#102B59] sm:text-3xl">
            Ready to find your ideal mentor?
          </h2>
          <p className="mx-auto mt-2.5 max-w-lg text-xs leading-6 text-[#64748B] sm:text-sm">
            Browse verified tuitions across subjects and skill levels, or create
            an account to share your knowledge as a teacher.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/tuitions"
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#102B59] to-[#087FAF] px-7 text-xs font-bold tracking-wide text-white shadow-lg shadow-[#102B59]/15 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#087FAF]/20"
            >
              <span>Browse Tuitions</span>
              <ArrowUpRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <Link
              href="/signup"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-[#DCE5F0] bg-[#FAFCFF] px-7 text-xs font-bold text-[#102B59] transition-colors hover:border-[#08B9DF] hover:bg-[#E8F8FE]/60 hover:text-[#087FAF]"
            >
              Get Started Free
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}

export default AboutPage
