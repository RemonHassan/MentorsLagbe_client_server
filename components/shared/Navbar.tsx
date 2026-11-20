"use client"

import Link from "next/link"
import { useState } from "react"
import {
  Menu,
  X,
  GraduationCap,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Browse Tuitions", href: "/tuitions" },
  { name: "Pricing", href: "/pricing" },
  { name: "How It Works", href: "/about" },
]

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#E8EEF6] bg-white/90 backdrop-blur-2xl">
      <nav className="mx-auto flex h-20.5 max-w-350 items-center justify-between px-5 sm:px-8 xl:px-12">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-[15px] bg-linear-to-br from-[#102B59] to-[#174A85] shadow-lg shadow-blue-950/15 transition-all duration-300 group-hover:-translate-y-0.5">
            <div className="absolute -top-3 -right-3 h-9 w-9 rounded-full bg-[#16C5E8]/30 blur-md" />
            <GraduationCap
              size={27}
              strokeWidth={2}
              className="relative text-white"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-[25px] leading-none font-extrabold tracking-[-1.2px] text-[#102B59]">
              Mentor<span className="text-[#08B9DF]">Lagbe</span>
            </span>
            <span className="mt-1.5 text-[9px] font-bold tracking-[2.8px] text-[#8493A8] uppercase">
              Your Learning Partner
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center rounded-full border border-[#EDF1F7] bg-[#F8FAFD] p-1.5 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-5 py-2.5 text-[13px] font-semibold text-[#52627A] transition-all duration-300 hover:bg-white hover:text-[#087DAE] hover:shadow-sm"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/sign-in"
            className="rounded-xl px-5 py-3 text-[13px] font-bold text-[#17345F] transition-colors hover:bg-[#F0F7FC] hover:text-[#078CBF]"
          >
            Sign In
          </Link>

          <Link
            href="/sign-up"
            className="group relative flex items-center gap-2 overflow-hidden rounded-xl bg-linear-to-r from-[#102B59] to-[#087FAF] px-5 py-3 text-[13px] font-bold text-white shadow-lg shadow-[#102B59]/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#087FAF]/20"
          >
            <span className="relative z-10">Get Started</span>
            <ArrowUpRight
              size={16}
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
            <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E7EDF5] bg-[#F8FAFD] text-[#102B59] transition-all hover:border-[#08B9DF] hover:bg-[#EFFAFF] lg:hidden"
        >
          {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`grid transition-all duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="border-t border-[#EDF1F7] bg-white px-5 pt-4 pb-6 sm:px-8">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold text-[#40536F] transition-all hover:bg-[#F0F9FD] hover:text-[#087FAF]"
                >
                  {link.name}
                  <ChevronRight size={17} className="text-[#A6B6C9]" />
                </Link>
              ))}
            </div>

            <div className="my-5 border-t border-[#EDF1F7]" />

            <div className="flex gap-3">
              <Link
                href="/sign-in"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 rounded-xl border border-[#DCE5F0] px-4 py-3.5 text-center text-sm font-bold text-[#102B59] transition-all hover:border-[#08B9DF] hover:bg-[#F0F9FD]"
              >
                Sign In
              </Link>

              <Link
                href="/sign-up"
                onClick={() => setMobileMenuOpen(false)}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#102B59] to-[#087FAF] px-4 py-3.5 text-sm font-bold text-white shadow-md shadow-blue-950/10 transition-all hover:shadow-lg"
              >
                Get Started
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#08B9DF]" />
              <p className="text-[11px] font-medium tracking-wide text-[#8493A8]">
                Your Learning Partner
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
