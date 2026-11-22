import React from "react"
import Link from "next/link"
import {
  ArrowRight,
  BadgeCheck,
  Check,
  CheckCircle,
  GraduationCap,
  Headphones,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

const plans = [
  {
    name: "Free",
    description:
      "Everything you need to get started with your learning journey.",
    price: "৳0",
    period: "forever",
    features: [
      "Browse all tuition listings",
      "Apply to up to 5 tuitions",
      "Connect with expert tutors",
      "Community support",
    ],
    missing: ["Unlimited applications", "Priority tutor response"],
    cta: "Get started free",
    href: "/signup",
    featured: false,
  },
  {
    name: "Student Unlimited",
    description: "For learners who are serious about finding the right mentor.",
    price: "৳499",
    period: "per month",
    features: [
      "Everything in Free",
      "Unlimited tuition applications",
      "Priority visibility to tutors",
      "Faster mentor responses",
      "Cancel anytime",
    ],
    missing: [],
    cta: "Upgrade now",
    href: "/payment",
    featured: true,
  },
]

const comparison = [
  { feature: "Browse tuition listings", free: true, premium: true },
  { feature: "Tuition applications", free: "Up to 5", premium: "Unlimited" },
  { feature: "Tutor response priority", free: false, premium: true },
  { feature: "Community support", free: true, premium: true },
  { feature: "Cancel anytime", free: "—", premium: true },
]

const faqs = [
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes. There are no long-term commitments. You can cancel your subscription whenever you like from your account settings.",
  },
  {
    question: "What happens after my 5 free applications?",
    answer:
      "You can upgrade to Student Unlimited to keep applying to as many tuitions as you want. Your existing applications stay where they are.",
  },
  {
    question: "Is payment secure?",
    answer:
      "Absolutely. Payments are processed by Stripe, our secure payment partner. Your card details are never stored on MentorLagbe.",
  },
  {
    question: "Can tutors use the same plan?",
    answer:
      "Tutors can create and manage tuition listings for free. This plan is designed for students who want to apply without limits.",
  },
]

const PriceingPage = () => {
  return (
    <main className="min-h-screen bg-[#F5F9FF] px-4 py-8 sm:px-8 sm:py-12">
      <div className="mx-auto max-w-5xl space-y-14">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#102B59] via-[#174A85] to-[#087FAF] px-6 py-12 text-center text-white shadow-xl shadow-[#102B59]/10 sm:px-10 sm:py-16">
          <div className="pointer-events-none absolute -top-24 -right-20 h-72 w-72 rounded-full bg-[#08B9DF]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-[#08B9DF]/10 blur-3xl" />
          <div className="relative z-10 mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-extrabold tracking-[1.4px] text-white/90 uppercase backdrop-blur-md">
              <Sparkles size={12} className="text-[#6FE1F7]" />
              Simple, transparent pricing
            </span>
            <h1 className="mt-5 text-3xl leading-tight font-extrabold tracking-tight sm:text-5xl">
              Invest in the mentor
              <br />
              you&apos;ll become.
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
              Start for free, upgrade when you&apos;re ready. No hidden fees, no
              long-term commitments — just better access to the tutors who can
              help you grow.
            </p>
          </div>
        </section>

        {/* Plans */}
        <section className="grid gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border p-7 shadow-lg sm:p-9 ${
                plan.featured
                  ? "border-[#08B9DF] bg-white ring-2 shadow-[#087FAF]/15 ring-[#08B9DF]/20"
                  : "border-[#DCE8F5] bg-white shadow-[#102B59]/5"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <Badge className="rounded-full border-0 bg-linear-to-r from-[#102B59] to-[#087FAF] px-4 py-1 text-[10px] font-extrabold tracking-wider text-white uppercase shadow-md">
                    <Star
                      size={11}
                      className="mr-1 fill-[#F7BC55] text-[#F7BC55]"
                    />
                    Most popular
                  </Badge>
                </div>
              )}

              <div className="flex items-center gap-3">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                    plan.featured
                      ? "bg-linear-to-br from-[#102B59] to-[#087FAF] text-white shadow-md shadow-[#102B59]/20"
                      : "bg-[#E4F8FE] text-[#087FAF]"
                  }`}
                >
                  {plan.featured ? (
                    <Sparkles size={20} />
                  ) : (
                    <GraduationCap size={20} />
                  )}
                </span>
                <h2 className="text-lg font-extrabold text-[#102B59]">
                  {plan.name}
                </h2>
              </div>

              <p className="mt-4 min-h-10 text-sm leading-6 text-[#64748B]">
                {plan.description}
              </p>

              <div className="mt-7 flex items-end gap-2">
                <span className="text-5xl font-extrabold tracking-tight text-[#102B59]">
                  {plan.price}
                </span>
                <span className="pb-1.5 text-sm font-semibold text-[#8493A8]">
                  {plan.period}
                </span>
              </div>

              <div className="my-7 h-px w-full bg-[#EDF3FA]" />

              <ul className="flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <CheckCircle
                      size={17}
                      className="mt-0.5 shrink-0 text-[#08A9B8]"
                    />
                    <span className="text-xs leading-5 text-[#40536F]">
                      {feature}
                    </span>
                  </li>
                ))}
                {plan.missing.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <X size={17} className="mt-0.5 shrink-0 text-[#C6D2E1]" />
                    <span className="text-xs leading-5 text-[#9AA9BC]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={`mt-8 flex h-12 items-center justify-center gap-2 rounded-xl text-sm font-bold transition-all duration-200 ${
                  plan.featured
                    ? "bg-linear-to-r from-[#102B59] to-[#087FAF] text-white shadow-lg shadow-[#102B59]/20 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#087FAF]/25"
                    : "border border-[#DCE5F0] bg-white text-[#102B59] hover:border-[#08B9DF] hover:bg-[#F0FAFF]"
                }`}
              >
                {plan.cta}
                <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </section>

        {/* Comparison */}
        <section className="overflow-hidden rounded-3xl border border-[#DCE8F5] bg-white py-0 shadow-lg shadow-[#102B59]/5">
          <div className="h-1 w-full bg-linear-to-r from-[#102B59] via-[#087FAF] to-[#08B9DF]" />
          <div className="border-b border-[#EDF3FA] bg-[#FAFCFF] px-6 py-6 sm:px-8">
            <h2 className="text-lg font-extrabold text-[#102B59]">
              Compare the plans
            </h2>
            <p className="mt-1 text-xs text-[#8493A8]">
              A quick look at what&apos;s included in each plan.
            </p>
          </div>
          <div className="divide-y divide-[#EDF3FA]">
            {comparison.map((row) => (
              <div
                key={row.feature}
                className="grid grid-cols-[1fr_auto_auto] items-center gap-4 px-6 py-4 sm:grid-cols-[1fr_120px_140px] sm:px-8"
              >
                <span className="text-xs font-semibold text-[#40536F]">
                  {row.feature}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-bold text-[#64748B]">
                  <ValueCell value={row.free} />
                </span>
                <span className="flex items-center gap-1.5 text-xs font-bold text-[#087FAF]">
                  <ValueCell value={row.premium} />
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Trust strip */}
        <section className="grid gap-4 sm:grid-cols-3">
          <TrustItem
            icon={<ShieldCheck size={19} />}
            title="Secure checkout"
            text="Payments processed by Stripe."
          />
          <TrustItem
            icon={<Users size={19} />}
            title="Trusted by learners"
            text="Join a growing community."
          />
          <TrustItem
            icon={<Headphones size={19} />}
            title="Here to help"
            text="Support whenever you need it."
          />
        </section>

        {/* FAQ */}
        <section className="space-y-5">
          <div className="text-center">
            <Badge
              variant="outline"
              className="rounded-full border-[#D5EAF7] bg-white px-3 py-1 text-[10px] font-extrabold tracking-wider text-[#087FAF] uppercase"
            >
              <BadgeCheck size={12} className="mr-1" />
              Good to know
            </Badge>
            <h2 className="mt-3 text-2xl font-extrabold text-[#102B59]">
              Frequently asked questions
            </h2>
          </div>
          <div className="mx-auto grid max-w-3xl gap-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-[#E2E9F3] bg-white p-5 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold text-[#102B59] [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span className="text-lg leading-none text-[#087FAF] transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-xs leading-6 text-[#64748B]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <p className="text-center text-xs text-[#8493A8]">
          Questions? Email us at{" "}
          <a
            href="mailto:support@mentorlagbe.com"
            className="font-bold text-[#087FAF] hover:underline"
          >
            support@mentorlagbe.com
          </a>
        </p>
      </div>
    </main>
  )
}

const ValueCell = ({ value }: { value: boolean | string }) => {
  if (value === true)
    return (
      <>
        <Check size={14} className="text-[#08A9B8]" /> Yes
      </>
    )
  if (value === false)
    return (
      <>
        <X size={14} className="text-[#C6D2E1]" /> No
      </>
    )
  return <span>{value}</span>
}

const TrustItem = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode
  title: string
  text: string
}) => (
  <div className="flex items-center gap-3 rounded-2xl border border-[#DCE8F5] bg-white p-5 shadow-sm">
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E4F8FE] text-[#087FAF]">
      {icon}
    </span>
    <div>
      <p className="text-xs font-extrabold text-[#102B59]">{title}</p>
      <p className="mt-0.5 text-[11px] text-[#8493A8]">{text}</p>
    </div>
  </div>
)

export default PriceingPage
