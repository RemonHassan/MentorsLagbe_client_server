import React from "react"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  CreditCard,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
  "Unlimited tuition applications",
  "Apply to as many mentors as you want",
  "Priority visibility to tutors",
  "Cancel anytime, no hidden fees",
]

const PaymentPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ canceled?: string }>
}) => {
  const { canceled } = await searchParams

  if (canceled) {
    console.log(
      "Order canceled -- continue to shop around and check out when you're ready."
    )
  }
  return (
    <main className="min-h-screen bg-[#F5F9FF] px-4 py-8 sm:px-8 sm:py-12">
      <div className="mx-auto max-w-5xl space-y-6">
        <Link
          href="/tuitions"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#52627A] transition-colors hover:text-[#087FAF]"
        >
          <ArrowLeft size={16} />
          Back to browse
        </Link>

        <div className="grid overflow-hidden rounded-3xl border border-[#DCE8F5] bg-white shadow-xl shadow-[#102B59]/10 lg:grid-cols-2">
          {/* Plan details */}
          <section className="relative overflow-hidden bg-linear-to-br from-[#102B59] via-[#174A85] to-[#087FAF] px-7 py-10 text-white sm:px-10 sm:py-12">
            <div className="pointer-events-none absolute -top-24 -right-20 h-72 w-72 rounded-full bg-[#08B9DF]/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-[#08B9DF]/10 blur-3xl" />
            <div className="pointer-events-none absolute top-6 right-10 h-40 w-40 rounded-full border-25 border-white/5" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-extrabold tracking-[1.4px] text-white/90 uppercase backdrop-blur-md">
                <Sparkles size={12} className="text-[#6FE1F7]" />
                Student plan
              </span>

              <h1 className="mt-6 text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl">
                Keep applying.
                <br />
                Keep learning.
              </h1>
              <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
                You&apos;ve reached the free application limit. Upgrade to keep
                connecting with the mentors you love.
              </p>

              <div className="mt-8 flex items-end gap-2">
                <span className="text-5xl font-extrabold tracking-tight">
                  ৳499
                </span>
                <span className="pb-1.5 text-sm font-semibold text-white/60">
                  / month
                </span>
              </div>

              <div className="my-7 h-px w-full bg-white/15" />

              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0 text-[#6FE1F7]"
                    />
                    <span className="text-xs leading-5 text-white/85">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center gap-2 text-[11px] text-white/60">
                <Star size={14} className="fill-[#F7BC55] text-[#F7BC55]" />
                Loved by learners across the community
              </div>
            </div>
          </section>

          {/* Payment summary */}
          <section className="flex flex-col justify-between px-7 py-10 sm:px-10 sm:py-12">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E4F8FE] text-[#087FAF]">
                  <CreditCard size={19} />
                </span>
                <div>
                  <h2 className="text-lg font-extrabold text-[#102B59]">
                    Payment summary
                  </h2>
                  <p className="text-[11px] text-[#8493A8]">
                    Review your plan before checkout.
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-4 rounded-2xl border border-[#E2E9F3] bg-[#F8FAFD] p-5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#64748B]">Plan</span>
                  <span className="font-bold text-[#102B59]">
                    Student Unlimited
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#64748B]">Billing</span>
                  <span className="font-bold text-[#102B59]">Monthly</span>
                </div>
                <div className="h-px w-full bg-[#E2E9F3]" />
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#17345F]">
                    Total due
                  </span>
                  <span className="text-2xl font-extrabold text-[#102B59]">
                    ৳499
                  </span>
                </div>
              </div>

              <div className="mt-6 flex items-start gap-3 rounded-xl border border-[#D5EAF7] bg-[#F0F9FE] p-4">
                <ShieldCheck
                  size={18}
                  className="mt-0.5 shrink-0 text-[#087FAF]"
                />
                <p className="text-xs leading-5 text-[#52627A]">
                  You&apos;ll be redirected to <strong>Stripe</strong>, our
                  secure payment partner, to complete your purchase. Your card
                  details are never stored on this site.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <Button className="group h-12 w-full rounded-xl bg-linear-to-r from-[#102B59] to-[#087FAF] text-sm font-bold text-white shadow-lg shadow-[#102B59]/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#087FAF]/25">
                <form action="/api/checkout_sessions" method="POST">
                  <section>
                    <button type="submit" role="link">
                      <LockKeyhole size={16} />
                      Pay with Stripe
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>
                  </section>
                </form>
              </Button>

              <p className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-[#8493A8]">
                <LockKeyhole size={12} />
                Secure checkout powered by Stripe
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default PaymentPage
