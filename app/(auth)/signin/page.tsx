"use client"

import React, { useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Eye,
  EyeOff,
  GraduationCap,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react"
import { authClient } from "@/lib/auth-client"
import { toast } from "@/components/ui/toast"
import { redirect } from "next/navigation"

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const values = Object.fromEntries(formData.entries()) as {
      email: string
      password: string
    }
    const { data, error } = await authClient.signIn.email({
      ...values,
    })
    if (data) {
      toast.add({
        title: `Welcome`,
      })
      redirect("/")
    }

    if (error) {
      console.error("Sign up error:", error)
    }
    console.log("Sign in form data:", values)
  }

  return (
    <main className="flex min-h-screen bg-[#F5F9FF]">
      {/* Brand panel */}
      <aside className="relative hidden w-1/2 flex-col justify-between overflow-hidden bg-linear-to-br from-[#102B59] via-[#174A85] to-[#087FAF] p-10 text-white lg:flex xl:p-14">
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#08B9DF]/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-28 -bottom-32 h-96 w-96 rounded-full bg-[#08B9DF]/15 blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 right-0 h-64 w-64 rounded-full border-30 border-white/5" />

        <div className="relative z-10 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-[15px] bg-white/15 ring-1 ring-white/20 backdrop-blur-md">
            <GraduationCap size={26} strokeWidth={2} className="text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-[22px] leading-none font-extrabold tracking-[-1px]">
              Mentor<span className="text-[#6FE1F7]">Lagbe</span>
            </span>
            <span className="mt-1.5 text-[9px] font-bold tracking-[2.8px] text-white/60 uppercase">
              Your Learning Partner
            </span>
          </div>
        </div>

        <div className="relative z-10 max-w-lg">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
            <Sparkles size={14} className="text-[#6FE1F7]" />
            <span className="text-[11px] font-bold tracking-wide uppercase">
              Learn without limits
            </span>
          </div>

          <h2 className="text-4xl leading-[1.15] font-extrabold tracking-tight xl:text-[46px]">
            The right mentor changes{" "}
            <span className="text-[#6FE1F7]">everything.</span>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-white/70">
            Pick up where you left off. Connect with expert tutors, find the
            perfect tuition, and keep moving toward your goals.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15">
                <Users size={18} />
              </div>
              <p className="mt-3 text-sm font-bold">Expert tutors</p>
              <p className="mt-1 text-xs leading-5 text-white/60">
                Guidance from people who know the path.
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15">
                <BookOpen size={18} />
              </div>
              <p className="mt-3 text-sm font-bold">Flexible learning</p>
              <p className="mt-1 text-xs leading-5 text-white/60">
                Learn at your own pace, on your own schedule.
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex items-center gap-8 border-t border-white/15 pt-6">
          <div>
            <p className="text-xl font-extrabold">10k+</p>
            <p className="mt-0.5 text-xs text-white/60">Active learners</p>
          </div>
          <div>
            <p className="text-xl font-extrabold">500+</p>
            <p className="mt-0.5 text-xs text-white/60">Expert tutors</p>
          </div>
          <div className="flex items-center gap-2">
            <Star size={18} className="fill-[#F7BC55] text-[#F7BC55]" />
            <div>
              <p className="text-xl font-extrabold">4.9</p>
              <p className="mt-0.5 text-xs text-white/60">Average rating</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Form panel */}
      <section className="flex w-full items-center justify-center px-5 py-10 sm:px-8 lg:w-1/2 lg:px-12">
        <div className="w-full max-w-105">
          <div className="mb-8 flex items-center gap-3 lg:hidden">
            <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-linear-to-br from-[#102B59] to-[#087FAF] shadow-lg shadow-[#102B59]/20">
              <GraduationCap size={23} className="text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-[21px] leading-none font-extrabold tracking-[-1px] text-[#102B59]">
                Mentor<span className="text-[#08B9DF]">Lagbe</span>
              </span>
              <span className="mt-1 text-[9px] font-bold tracking-[2px] text-[#8493A8] uppercase">
                Your Learning Partner
              </span>
            </div>
          </div>

          <div className="mb-8">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D5EAF7] bg-white px-3.5 py-1.5 shadow-sm">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E4F8FE]">
                <Sparkles size={12} className="text-[#079BC8]" />
              </span>
              <span className="text-[10px] font-bold tracking-wide text-[#174A85] uppercase">
                Welcome back
              </span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-[#102B59] sm:text-[34px]">
              Sign in to your account
            </h1>
            <p className="mt-2.5 text-sm leading-6 text-[#64748B]">
              Enter your details to continue your learning journey.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-[13px] font-semibold text-[#17345F]"
              >
                Email address
              </label>
              <div className="relative">
                <Mail
                  size={17}
                  className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-[#9AA9BC]"
                />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="h-12 w-full rounded-xl border border-[#E2E9F3] bg-[#F8FAFD] pr-4 pl-11 text-sm text-[#102B59] transition-all duration-200 outline-none placeholder:text-[#9AA9BC] focus:border-[#08B9DF] focus:bg-white focus:ring-4 focus:ring-[#08B9DF]/15"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-[13px] font-semibold text-[#17345F]"
              >
                Password
              </label>
              <div className="relative">
                <LockKeyhole
                  size={17}
                  className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-[#9AA9BC]"
                />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  minLength={8}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  className="h-12 w-full rounded-xl border border-[#E2E9F3] bg-[#F8FAFD] pr-12 pl-11 text-sm text-[#102B59] transition-all duration-200 outline-none placeholder:text-[#9AA9BC] focus:border-[#08B9DF] focus:bg-white focus:ring-4 focus:ring-[#08B9DF]/15"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute top-1/2 right-3 -translate-y-1/2 rounded-lg p-1.5 text-[#8493A8] transition-colors hover:bg-[#E8F4FC] hover:text-[#087FAF]"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex cursor-pointer items-center gap-2.5">
                <input
                  type="checkbox"
                  name="remember"
                  className="h-4 w-4 rounded border-[#CFE0F0] accent-[#087FAF]"
                />
                <span className="text-[13px] font-medium text-[#52627A]">
                  Remember me
                </span>
              </label>
              <button
                type="button"
                className="text-[13px] font-semibold text-[#087FAF] transition-colors hover:text-[#08B9DF] hover:underline"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#102B59] to-[#087FAF] text-sm font-bold text-white shadow-lg shadow-[#102B59]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#087FAF]/25 focus-visible:ring-4 focus-visible:ring-[#08B9DF]/30"
            >
              Sign in
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </form>

          <div className="flex items-center gap-4 py-6">
            <span className="h-px flex-1 bg-[#E2E9F3]" />
            <span className="text-[11px] font-semibold tracking-wide text-[#9AA9BC] uppercase">
              or continue with
            </span>
            <span className="h-px flex-1 bg-[#E2E9F3]" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="flex h-11 items-center justify-center gap-2 rounded-xl border border-[#E2E9F3] bg-white text-[13px] font-semibold text-[#17345F] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#08B9DF] hover:bg-[#F0FAFF] hover:shadow-md"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4.5 w-4.5 text-[#102B59]"
                aria-hidden="true"
              >
                <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3.01-.4c1.02 0 2.04.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.23 0 4.63-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22 0 1.6-.02 2.89-.02 3.28 0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
              </svg>
              GitHub
            </button>
            <button
              type="button"
              className="flex h-11 items-center justify-center gap-2 rounded-xl border border-[#E2E9F3] bg-white text-[13px] font-semibold text-[#17345F] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#08B9DF] hover:bg-[#F0FAFF] hover:shadow-md"
            >
              <span className="bg-linear-to-r from-[#4285F4] via-[#34A853] to-[#EA4335] bg-clip-text text-lg leading-none font-extrabold text-transparent">
                G
              </span>
              Google
            </button>
          </div>

          <p className="mt-8 text-center text-[13px] text-[#64748B]">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="font-bold text-[#087FAF] transition-colors hover:text-[#08B9DF] hover:underline"
            >
              Create one free
              <ArrowUpRight size={13} className="ml-0.5 inline" />
            </Link>
          </p>

          <div className="mt-8 flex items-center justify-center gap-2 text-[11px] text-[#8493A8]">
            <ShieldCheck size={14} className="text-[#08A9B8]" />
            <span>Your data is protected with secure authentication.</span>
          </div>
        </div>
      </section>
    </main>
  )
}

export default SignInPage
