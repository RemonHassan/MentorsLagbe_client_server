"use client"

import React from "react"
import { useRouter } from "next/navigation"
import { ArrowUpRight, BookOpen, Clock, Layers, Monitor } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { TuitionRow } from "../dashboard/teacher/tuitions/page"

const TuitionCard = ({ tuition }: { tuition: TuitionRow }) => {
  const router = useRouter()

  const handleVieTuitionDetail = (tuitionId: string) => {
    router.push(`/tuitions/${tuitionId}`)
  }

  return (
    <article
      onClick={() => handleVieTuitionDetail(tuition._id)}
      key={tuition._id}
      className="group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border border-[#DCE8F5] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#08B9DF]/60 hover:shadow-2xl hover:shadow-[#102B59]/10"
    >
      {/* Top Gradient Accent Strip */}
      <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-[#102B59] via-[#087FAF] to-[#08B9DF] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Subtle Hover Glow */}
      <div className="pointer-events-none absolute -top-16 -right-16 h-36 w-36 rounded-full bg-[#08B9DF]/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

      <div>
        {/* Header: Icon & Subject Pill */}
        <div className="relative flex items-start justify-between gap-3">
          <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-linear-to-br from-[#102B59] to-[#087FAF] text-white shadow-md shadow-[#102B59]/15 transition-transform duration-300 group-hover:scale-105">
            <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-[#16C5E8]/30 blur-sm" />
            <BookOpen size={21} className="relative" />
          </div>

          <Badge className="rounded-full border border-[#CBE9F8] bg-[#E8F8FE] px-3 py-1 text-[11px] font-extrabold tracking-wide text-[#087FAF] capitalize">
            {String(tuition.subject)}
          </Badge>
        </div>

        {/* Title & Description */}
        <div className="mt-5">
          <h3 className="line-clamp-2 text-[17px] leading-snug font-extrabold tracking-tight text-[#102B59] transition-colors duration-200 group-hover:text-[#087FAF]">
            {String(tuition.title)}
          </h3>
          <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-[#64748B]">
            {String(tuition.description)}
          </p>
        </div>

        {/* Metadata Badges */}
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <Badge
            variant="secondary"
            className="inline-flex items-center gap-1.5 rounded-full border-0 bg-[#F2F8FE] px-3 py-1 text-[11px] font-bold text-[#102B59] capitalize"
          >
            <Layers size={12} className="text-[#087FAF]" />
            {String(tuition.level)}
          </Badge>

          <Badge
            variant="outline"
            className="inline-flex items-center gap-1.5 rounded-full border-[#DCE8F5] bg-[#FAFCFF] px-3 py-1 text-[11px] font-semibold text-[#52627A] capitalize"
          >
            <Monitor size={12} className="text-[#087FAF]" />
            {String(tuition.mode).replace("-", " ")}
          </Badge>
        </div>
      </div>

      {/* Footer: Price, Duration & Interactive Action Cue */}
      <div className="mt-6 flex items-center justify-between border-t border-[#EDF3FA] pt-4">
        <div>
          <p className="text-[10.5px] font-bold tracking-wider text-[#8493A8] uppercase">
            Hourly Rate
          </p>
          <div className="mt-0.5 flex items-baseline gap-1">
            <span className="text-lg font-extrabold tracking-tight text-[#102B59]">
              ৳{String(tuition.price)}
            </span>
            <span className="text-[11px] font-medium text-[#8493A8]">/ hr</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 rounded-xl bg-[#F5F9FF] px-3 py-1.5 text-xs font-bold text-[#52627A]">
            <Clock size={13} className="text-[#087FAF]" />
            {String(tuition.duration)} min
          </span>

          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#DCE8F5] bg-white text-[#102B59] transition-all duration-300 group-hover:border-transparent group-hover:bg-linear-to-r group-hover:from-[#102B59] group-hover:to-[#087FAF] group-hover:text-white group-hover:shadow-md">
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>
      </div>
    </article>
  )
}

export default TuitionCard
