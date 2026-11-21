import React from "react"
import Link from "next/link"
import { ArrowLeft, Compass, GraduationCap, Search } from "lucide-react"

const NotFoundPage = () => {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#F5F9FF] px-4 py-12">
      {/* Ambient Brand Glows */}
      <div className="pointer-events-none absolute -top-28 -right-24 h-80 w-80 rounded-full bg-[#08B9DF]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-[#102B59]/10 blur-3xl" />

      <div className="relative z-10 w-full max-w-lg">
        {/* Card */}
        <div className="relative overflow-hidden rounded-3xl border border-[#DCE8F5] bg-white p-8 text-center shadow-2xl shadow-[#102B59]/8 sm:p-11">
          {/* Top Brand Gradient Bar */}
          <div className="absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-[#102B59] via-[#087FAF] to-[#08B9DF]" />

          {/* Brand Icon Badge */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-[#102B59] to-[#087FAF] text-white shadow-lg shadow-[#102B59]/20">
            <Compass size={30} strokeWidth={2} className="text-[#7CE4FF]" />
          </div>

          {/* 404 Display */}
          <div className="mt-6">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#CBE9F8] bg-[#E8F8FE] px-3.5 py-1 text-[11px] font-extrabold tracking-[1.6px] text-[#087FAF] uppercase">
              Error 404
            </span>

            <h1 className="mt-4 bg-linear-to-r from-[#102B59] via-[#174A85] to-[#087FAF] bg-clip-text text-6xl font-extrabold tracking-tight text-transparent sm:text-7xl">
              404
            </h1>

            <h2 className="mt-3 text-xl font-extrabold tracking-tight text-[#102B59] sm:text-2xl">
              Page not found
            </h2>

            <p className="mx-auto mt-2.5 max-w-sm text-xs leading-6 text-[#64748B] sm:text-sm">
              The page you&apos;re looking for doesn&apos;t exist, may have been
              moved, or the link might be outdated.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#102B59] to-[#087FAF] px-6 text-xs font-bold tracking-wide text-white shadow-lg shadow-[#102B59]/15 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#087FAF]/20"
            >
              <ArrowLeft
                size={15}
                className="transition-transform duration-200 group-hover:-translate-x-0.5"
              />
              Back to Home
            </Link>

            <Link
              href="/tuitions"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-[#DCE5F0] bg-[#FAFCFF] px-6 text-xs font-bold text-[#102B59] transition-colors hover:border-[#08B9DF] hover:bg-[#E8F8FE]/60 hover:text-[#087FAF]"
            >
              <Search size={15} className="text-[#087FAF]" />
              Browse Tuitions
            </Link>
          </div>

          {/* Subtle Brand Footer */}
          <div className="mt-8 flex items-center justify-center gap-2 border-t border-[#EDF3FA] pt-5 text-xs font-bold text-[#8493A8]">
            <GraduationCap size={15} className="text-[#087FAF]" />
            <span>
              Mentor<span className="text-[#08B9DF]">Lagbe</span>
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default NotFoundPage
