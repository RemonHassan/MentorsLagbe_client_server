"use client"

import React, { useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  CheckCircle2,
  Eye,
  EyeOff,
  GraduationCap,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Sparkles,
  Star,
  UserRound,
  Users,
} from "lucide-react"
import { authClient } from "@/lib/auth-client"
import { toast } from "@/components/ui/toast"
import { redirect } from "next/navigation"

export type UserRole = "student" | "teacher" | "admin"

const SignUpPage = () => {
  const [role, setRole] = useState<UserRole>("student")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const values = Object.fromEntries(formData.entries()) as {
      name: string
      email: string
      password: string
    }
    const { data, error } = await authClient.signUp.email({
      name: values.name,
      email: values.email,
      password: values.password,
      requestedRole: role === "teacher" ? "teacher" : "student",
    })
    if (data) {
      toast.add({
        title: `Welcome, Please Log In to enter`,
      })
      redirect("/signin")
    }

    if (error) {
      console.error("Sign up error:", error)
    }
    console.log("Sign up form data:", values)
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
              Your journey starts here
            </span>
          </div>

          <h2 className="text-4xl leading-[1.15] font-extrabold tracking-tight xl:text-[46px]">
            Learn from the best.{" "}
            <span className="text-[#6FE1F7]">Become your best.</span>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-white/70">
            Join a community of curious learners and experienced tutors. Find
            the guidance you need to turn your goals into real progress.
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
                Get started free
              </span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-[#102B59] sm:text-[34px]">
              Create your account
            </h1>
            <p className="mt-2.5 text-sm leading-6 text-[#64748B]">
              Join MentorLagbe and find the right mentor today.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input id="role" type="hidden" name="role" value={role} />

            <div>
              <p className="mb-2 text-[13px] font-semibold text-[#17345F]">
                I want to join as
              </p>
              <div
                className="grid grid-cols-2 gap-3"
                role="group"
                aria-label="Account role"
              >
                <button
                  type="button"
                  onClick={() => setRole("student")}
                  aria-pressed={role === "student"}
                  className={`group relative flex items-start gap-3 rounded-xl border p-3.5 text-left transition-all duration-200 ${
                    role === "student"
                      ? "border-[#087FAF] bg-white shadow-md ring-4 shadow-[#102B59]/5 ring-[#08B9DF]/15"
                      : "border-[#E2E9F3] bg-[#F8FAFD] hover:border-[#08B9DF] hover:bg-white"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-200 ${
                      role === "student"
                        ? "bg-linear-to-br from-[#102B59] to-[#087FAF] text-white"
                        : "bg-[#E2F5FC] text-[#087FAF]"
                    }`}
                  >
                    <BookOpen size={18} />
                  </span>
                  <span className="flex flex-col pr-4">
                    <span className="text-[13px] font-bold text-[#17345F]">
                      Student
                    </span>
                    <span className="mt-0.5 text-[11px] leading-4 text-[#8493A8]">
                      Find a mentor
                    </span>
                  </span>
                  <span
                    className={`absolute top-3 right-3 flex h-4 w-4 items-center justify-center rounded-full border transition-all duration-200 ${
                      role === "student"
                        ? "border-[#087FAF] bg-[#087FAF]"
                        : "border-[#CFE0F0] bg-white"
                    }`}
                  >
                    <Check
                      size={10}
                      strokeWidth={3}
                      className={`text-white transition-opacity duration-200 ${
                        role === "student" ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setRole("teacher")}
                  aria-pressed={role === "teacher"}
                  className={`group relative flex items-start gap-3 rounded-xl border p-3.5 text-left transition-all duration-200 ${
                    role === "teacher"
                      ? "border-[#087FAF] bg-white shadow-md ring-4 shadow-[#102B59]/5 ring-[#08B9DF]/15"
                      : "border-[#E2E9F3] bg-[#F8FAFD] hover:border-[#08B9DF] hover:bg-white"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-200 ${
                      role === "teacher"
                        ? "bg-linear-to-br from-[#102B59] to-[#087FAF] text-white"
                        : "bg-[#E2F5FC] text-[#087FAF]"
                    }`}
                  >
                    <GraduationCap size={18} />
                  </span>
                  <span className="flex flex-col pr-4">
                    <span className="text-[13px] font-bold text-[#17345F]">
                      Teacher
                    </span>
                    <span className="mt-0.5 text-[11px] leading-4 text-[#8493A8]">
                      Share your expertise
                    </span>
                  </span>
                  <span
                    className={`absolute top-3 right-3 flex h-4 w-4 items-center justify-center rounded-full border transition-all duration-200 ${
                      role === "teacher"
                        ? "border-[#087FAF] bg-[#087FAF]"
                        : "border-[#CFE0F0] bg-white"
                    }`}
                  >
                    <Check
                      size={10}
                      strokeWidth={3}
                      className={`text-white transition-opacity duration-200 ${
                        role === "teacher" ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </span>
                </button>
              </div>
            </div>

            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-[13px] font-semibold text-[#17345F]"
              >
                Full name
              </label>
              <div className="relative">
                <UserRound
                  size={17}
                  className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-[#9AA9BC]"
                />
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your full name"
                  className="h-12 w-full rounded-xl border border-[#E2E9F3] bg-[#F8FAFD] pr-4 pl-11 text-sm text-[#102B59] transition-all duration-200 outline-none placeholder:text-[#9AA9BC] focus:border-[#08B9DF] focus:bg-white focus:ring-4 focus:ring-[#08B9DF]/15"
                />
              </div>
            </div>

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
                  autoComplete="new-password"
                  placeholder="At least 8 characters"
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

            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-[13px] font-semibold text-[#17345F]"
              >
                Confirm password
              </label>
              <div className="relative">
                <LockKeyhole
                  size={17}
                  className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-[#9AA9BC]"
                />
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  minLength={8}
                  autoComplete="new-password"
                  placeholder="Re-enter your password"
                  className="h-12 w-full rounded-xl border border-[#E2E9F3] bg-[#F8FAFD] pr-12 pl-11 text-sm text-[#102B59] transition-all duration-200 outline-none placeholder:text-[#9AA9BC] focus:border-[#08B9DF] focus:bg-white focus:ring-4 focus:ring-[#08B9DF]/15"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((value) => !value)}
                  aria-label={
                    showConfirmPassword ? "Hide password" : "Show password"
                  }
                  className="absolute top-1/2 right-3 -translate-y-1/2 rounded-lg p-1.5 text-[#8493A8] transition-colors hover:bg-[#E8F4FC] hover:text-[#087FAF]"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            <label className="flex cursor-pointer items-start gap-2.5 pt-1">
              <input
                type="checkbox"
                name="terms"
                required
                className="mt-0.5 h-4 w-4 shrink-0 rounded border-[#CFE0F0] accent-[#087FAF]"
              />
              <span className="text-xs leading-5 text-[#64748B]">
                I agree to the{" "}
                <span className="font-semibold text-[#087FAF]">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="font-semibold text-[#087FAF]">
                  Privacy Policy
                </span>
                .
              </span>
            </label>

            <button
              type="submit"
              className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#102B59] to-[#087FAF] text-sm font-bold text-white shadow-lg shadow-[#102B59]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#087FAF]/25 focus-visible:ring-4 focus-visible:ring-[#08B9DF]/30"
            >
              Create account
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
            {/* <button
              type="button"
              className="flex h-11 items-center justify-center gap-2 rounded-xl border border-[#E2E9F3] bg-white text-[13px] font-semibold text-[#17345F] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#08B9DF] hover:bg-[#F0FAFF] hover:shadow-md"
            >
              <span className="bg-linear-to-r from-[#4285F4] via-[#34A853] to-[#EA4335] bg-clip-text text-lg leading-none font-extrabold text-transparent">
                G
              </span>
              Google
            </button> */}
          </div>

          <p className="mt-8 text-center text-[13px] text-[#64748B]">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="font-bold text-[#087FAF] transition-colors hover:text-[#08B9DF] hover:underline"
            >
              Sign in
              <ArrowUpRight size={13} className="ml-0.5 inline" />
            </Link>
          </p>

          <div className="mt-8 flex items-center justify-center gap-2 text-[11px] text-[#8493A8]">
            <CheckCircle2 size={14} className="text-[#08A9B8]" />
            <span>Free to join. No credit card required.</span>
          </div>
          <div className="mt-2 flex items-center justify-center gap-2 text-[11px] text-[#8493A8]">
            <ShieldCheck size={14} className="text-[#08A9B8]" />
            <span>Your data is protected with secure authentication.</span>
          </div>
        </div>
      </section>
    </main>
  )
}

export default SignUpPage
