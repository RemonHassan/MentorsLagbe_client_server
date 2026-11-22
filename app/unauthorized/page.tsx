import React from "react"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  GraduationCap,
  Home,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
} from "lucide-react"
import { buttonVariants } from "@/components/ui/button"

const unauthorizedPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F5F9FF] px-4 py-12 sm:px-8">
      <div className="w-full max-w-lg">
        <div className="relative overflow-hidden rounded-3xl border border-[#DCE8F5] bg-white px-7 py-10 text-center shadow-xl shadow-[#102B59]/10 sm:px-10 sm:py-12">
          <div className="pointer-events-none absolute -top-24 -right-20 h-64 w-64 rounded-full bg-[#08B9DF]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#08B9DF]/10 blur-3xl" />

          <div className="relative z-10">
            {/* Brand mark */}
            <Link
              href="/"
              className="mx-auto flex w-fit items-center gap-2.5"
              aria-label="MentorLagbe home"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-linear-to-br from-[#102B59] to-[#087FAF] shadow-lg shadow-[#102B59]/20">
                <GraduationCap size={22} className="text-white" />
              </span>
              <span className="text-xl font-extrabold tracking-[-1px] text-[#102B59]">
                Mentor<span className="text-[#08B9DF]">Lagbe</span>
              </span>
            </Link>

            {/* Lock illustration */}
            <div className="relative mx-auto mt-9 flex h-24 w-24 items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-[#E4F8FE]" />
              <div className="absolute inset-3 rounded-full border border-dashed border-[#08B9DF]/40" />
              <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-[#102B59] to-[#087FAF] text-white shadow-lg shadow-[#102B59]/20">
                <LockKeyhole size={26} />
              </span>
              <span className="absolute -right-1 -bottom-1 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-amber-100 text-amber-700">
                <ShieldCheck size={15} />
              </span>
            </div>

            <span className="mt-7 inline-flex items-center gap-1.5 rounded-full border border-[#D5EAF7] bg-[#E4F8FE]/70 px-3 py-1 text-[10px] font-extrabold tracking-[1.4px] text-[#087FAF] uppercase">
              <Sparkles size={12} />
              Error 403
            </span>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[#102B59] sm:text-4xl">
              Access denied
            </h1>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-[#64748B]">
              You don&apos;t have permission to view this page. This area may be
              reserved for a different account type, or your session may have
              expired.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/"
                className={`${buttonVariants({ variant: "outline" })} h-11 rounded-xl border-[#DCE5F0] bg-white text-xs font-bold text-[#52627A] hover:border-[#08B9DF] hover:bg-[#F0FAFF] hover:text-[#087FAF]`}
              >
                <Home size={15} />
                Back to home
              </Link>
              <Link
                href="/signin"
                className={`${buttonVariants()} group h-11 rounded-xl bg-linear-to-r from-[#102B59] to-[#087FAF] text-xs font-bold text-white shadow-lg shadow-[#102B59]/20 transition-all hover:-translate-y-0.5`}
              >
                Sign in again
                <ArrowRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
            </div>

            <div className="mt-8 border-t border-[#EDF3FA] pt-5">
              <Link
                href="/tuitions"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#087FAF] hover:underline"
              >
                <ArrowLeft size={14} />
                Explore tuitions instead
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default unauthorizedPage
