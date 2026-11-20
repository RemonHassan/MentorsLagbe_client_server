import Link from "next/link"
import { GraduationCap, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Browse Tuitions", href: "/tuitions" },
  { name: "Pricing Plans", href: "/pricing" },
  { name: "How It Works", href: "/about" },
]

const userLinks = [
  { name: "Find a Tutor", href: "/tuitions" },
  { name: "Become a Tutor", href: "/signup" },
  { name: "Student Sign In", href: "/signin" },
  { name: "Dashboard", href: "/dashboard" },
]

const supportLinks = [
  { name: "Help Center", href: "/about" },
  { name: "Safety Guidelines", href: "/about" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
]

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg
        className="h-4 w-4 fill-none stroke-current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#E1ECF7] bg-[#F5F9FF]">
      {/* Subtle Background Glow */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[#08B9DF]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 -bottom-32 h-80 w-80 rounded-full bg-[#102B59]/10 blur-3xl" />

      <div className="relative mx-auto max-w-350 px-5 pt-16 pb-10 sm:px-8 xl:px-12">
        {/* Top CTA Strip */}
        <div className="mb-14 flex flex-col items-start justify-between gap-6 rounded-3xl border border-[#D5EAF7] bg-white p-7 shadow-lg shadow-[#102B59]/5 sm:p-9 lg:flex-row lg:items-center">
          <div>
            <span className="inline-block rounded-full bg-[#E4F8FE] px-3.5 py-1 text-[11px] font-bold tracking-wider text-[#087FAF] uppercase">
              Start Learning Today
            </span>
            <h2 className="mt-2.5 text-2xl font-extrabold tracking-tight text-[#102B59] sm:text-3xl">
              Ready to find the right mentor?
            </h2>
            <p className="mt-1.5 text-sm text-[#64748B]">
              Join students and verified tutors building better learning
              outcomes together.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/tuitions"
              className="group flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#102B59] to-[#087FAF] px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-[#102B59]/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Browse Tuitions
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <Link
              href="/signup"
              className="flex items-center justify-center rounded-xl border border-[#CFE0F0] bg-[#F8FBFF] px-6 py-3.5 text-sm font-bold text-[#102B59] transition-colors hover:border-[#08B9DF] hover:bg-[#EFF9FE]"
            >
              Become a Tutor
            </Link>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand & Contact Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="group inline-flex items-center gap-3">
              <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-[14px] bg-linear-to-br from-[#102B59] to-[#174A85] shadow-md shadow-blue-950/15">
                <div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-[#16C5E8]/30 blur-md" />
                <GraduationCap
                  size={24}
                  strokeWidth={2}
                  className="relative text-white"
                />
              </div>

              <div className="flex flex-col">
                <span className="text-[23px] leading-none font-extrabold tracking-[-1px] text-[#102B59]">
                  Mentor<span className="text-[#08B9DF]">Lagbe</span>
                </span>
                <span className="mt-1 text-[9px] font-bold tracking-[2.6px] text-[#8493A8] uppercase">
                  Your Learning Partner
                </span>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#64748B]">
              Connecting students with trusted, experienced tutors for
              personalized home and online learning across Bangladesh.
            </p>

            {/* Contact Info */}
            <div className="mt-6 flex flex-col gap-3 text-xs font-medium text-[#52627A]">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E4F8FE] text-[#087FAF]">
                  <MapPin size={15} />
                </span>
                <span>Dhaka, Bangladesh</span>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E4F8FE] text-[#087FAF]">
                  <Mail size={15} />
                </span>
                <span>support@mentorlagbe.com</span>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E4F8FE] text-[#087FAF]">
                  <Phone size={15} />
                </span>
                <span>+880 1700-000000</span>
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-xs font-extrabold tracking-wider text-[#102B59] uppercase">
              Platform
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-[#52627A] transition-colors hover:text-[#087FAF]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Students & Tutors */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-extrabold tracking-wider text-[#102B59] uppercase">
              Get Started
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {userLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-[#52627A] transition-colors hover:text-[#087FAF]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-extrabold tracking-wider text-[#102B59] uppercase">
              Support & Legal
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-[#52627A] transition-colors hover:text-[#087FAF]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#DFE9F4] pt-7 sm:flex-row">
          <p className="text-xs font-medium text-[#64748B]">
            © {new Date().getFullYear()}{" "}
            <span className="font-bold text-[#102B59]">MentorLagbe</span>. All
            rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-2.5">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#DCE7F3] bg-white text-[#52627A] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#08B9DF] hover:text-[#087FAF] hover:shadow-sm"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
