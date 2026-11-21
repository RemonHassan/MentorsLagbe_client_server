import React from "react"
import { GraduationCap } from "lucide-react"

const Loading = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#F5F9FF] px-4">
      {/* Ambient Brand Glows */}
      <div className="pointer-events-none absolute -top-28 -right-24 h-80 w-80 rounded-full bg-[#08B9DF]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-[#102B59]/10 blur-3xl" />

      {/* Center Loader Card */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Pulsing Ring + Gradient Brand Icon */}
        <div className="relative flex items-center justify-center">
          <span className="absolute h-24 w-24 animate-ping rounded-3xl bg-[#08B9DF]/20 animation-duration-[2s]" />
          <span className="absolute h-20 w-20 animate-spin rounded-3xl border-2 border-transparent border-t-[#08B9DF] border-r-[#087FAF] animation-duration-[1.4s]" />

          <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-linear-to-br from-[#102B59] to-[#087FAF] text-white shadow-xl shadow-[#102B59]/20">
            <div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-[#16C5E8]/35 blur-sm" />
            <GraduationCap size={30} strokeWidth={2} className="relative" />
          </div>
        </div>

        {/* Brand Wordmark */}
        <div className="mt-6 flex flex-col items-center">
          <span className="text-2xl leading-none font-extrabold tracking-[-0.8px] text-[#102B59]">
            Mentor<span className="text-[#08B9DF]">Lagbe</span>
          </span>
          <span className="mt-1.5 text-[9.5px] font-bold tracking-[2.6px] text-[#8493A8] uppercase">
            Preparing your workspace
          </span>
        </div>

        {/* Animated Progress Dots */}
        <div className="mt-5 flex items-center gap-1.5">
          <span className="h-2 w-2 animate-bounce rounded-full bg-[#102B59] [animation-delay:-0.3s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-[#087FAF] [animation-delay:-0.15s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-[#08B9DF]" />
        </div>
      </div>
    </div>
  )
}

export default Loading
