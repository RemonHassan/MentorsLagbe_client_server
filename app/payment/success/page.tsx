import React from "react"
import Link from "next/link"
import { redirect } from "next/navigation"
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Home,
  Mail,
  Receipt,
  ShieldCheck,
  Sparkles,
} from "lucide-react"
import { checkoutVerify } from "@/lib/actions/payments"
import { stripe } from "@/lib/stripe"

export default async function paymentSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>
}) {
  const { session_id } = await searchParams

  if (!session_id)
    throw new Error("Please provide a valid session_id (`cs_test_...`)")

  const { status, payment_status, customer_email, metadata, payment_intent } =
    await stripe.checkout.sessions.retrieve(session_id, {
      expand: ["line_items", "payment_intent"],
    })

  if (status === "open") {
    return redirect("/")
  }

  if (status === "complete" && payment_status === "paid") {
    console.log({
      status,
      payment_status,
      payment_intent,
      customer_email,
      metadata,
    })
    const result = await checkoutVerify(session_id)
    console.log({ result })

    return (
      <main
        id="success"
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#F5F9FF] px-4 py-12"
      >
        {/* Ambient Brand Glows */}
        <div className="pointer-events-none absolute -top-28 -right-24 h-80 w-80 rounded-full bg-[#08B9DF]/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-[#102B59]/10 blur-3xl" />

        <div className="relative z-10 w-full max-w-xl">
          <div className="relative overflow-hidden rounded-3xl border border-[#DCE8F5] bg-white p-8 shadow-2xl shadow-[#102B59]/8 sm:p-11">
            {/* Top Brand Gradient Strip */}
            <div className="absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-[#102B59] via-[#087FAF] to-[#08B9DF]" />

            {/* Success Badge & Icon */}
            <div className="flex flex-col items-center text-center">
              <div className="relative flex items-center justify-center">
                <span className="absolute h-20 w-20 rounded-3xl bg-emerald-400/15 blur-md" />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-[#102B59] to-[#087FAF] text-white shadow-lg shadow-[#102B59]/20">
                  <CheckCircle2 size={32} className="text-[#6FE1F7]" />
                </div>
              </div>

              <span className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-[11px] font-extrabold tracking-[1.4px] text-emerald-700 uppercase">
                <Sparkles size={12} className="text-emerald-600" />
                Payment Confirmed
              </span>

              <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-[#102B59] sm:text-3xl">
                Booking Successful!
              </h1>

              <p className="mt-3 max-w-md text-xs leading-6 text-[#64748B] sm:text-sm">
                We appreciate your business! A confirmation email will be sent
                {customer_email ? (
                  <>
                    {" "}
                    to{" "}
                    <span className="font-bold text-[#102B59]">
                      {customer_email}
                    </span>
                  </>
                ) : (
                  ""
                )}
                . If you have any questions, please email{" "}
                <a
                  href="mailto:orders@example.com"
                  className="font-bold text-[#087FAF] underline decoration-[#08B9DF]/50 underline-offset-2 transition-colors hover:text-[#102B59]"
                >
                  orders@example.com
                </a>
                .
              </p>
            </div>

            {/* Transaction Summary Box */}
            <div className="mt-7 space-y-3 rounded-2xl border border-[#E5EFF9] bg-[#F8FBFF] p-4 sm:p-5">
              <div className="flex items-center justify-between gap-3 text-xs">
                <span className="inline-flex items-center gap-2 font-bold text-[#64748B]">
                  <ShieldCheck size={15} className="text-[#08A9B8]" />
                  Payment Status
                </span>
                <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-extrabold text-emerald-800 capitalize">
                  {payment_status}
                </span>
              </div>

              {customer_email && (
                <div className="flex items-center justify-between gap-3 border-t border-[#E8F1FA] pt-3 text-xs">
                  <span className="inline-flex items-center gap-2 font-bold text-[#64748B]">
                    <Mail size={15} className="text-[#087FAF]" />
                    Receipt Sent To
                  </span>
                  <span className="truncate font-bold text-[#102B59]">
                    {customer_email}
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between gap-3 border-t border-[#E8F1FA] pt-3 text-xs">
                <span className="inline-flex shrink-0 items-center gap-2 font-bold text-[#64748B]">
                  <Receipt size={15} className="text-[#087FAF]" />
                  Session Reference
                </span>
                <span className="max-w-48 truncate font-mono text-[11px] font-semibold text-[#52627A] sm:max-w-64">
                  {session_id}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/tuitions"
                className="group inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#102B59] to-[#087FAF] px-5 text-xs font-bold tracking-wide text-white shadow-lg shadow-[#102B59]/15 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#087FAF]/20"
              >
                Browse More Tuitions
                <ArrowRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                href="/"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-[#DCE5F0] bg-[#FAFCFF] px-5 text-xs font-bold text-[#102B59] transition-colors hover:border-[#08B9DF] hover:bg-[#E8F8FE]/60 hover:text-[#087FAF]"
              >
                <Home size={15} className="text-[#087FAF]" />
                Home
              </Link>
            </div>

            {/* Brand Footer */}
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
}
