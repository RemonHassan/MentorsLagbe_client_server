import React from "react"
import Link from "next/link"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock,
  ExternalLink,
  Sparkles,
  XCircle,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import type { ApplicationInput } from "@/lib/actions/applications"
import { getApplication } from "@/lib/api/applications"

export type Booking = ApplicationInput & { _id: string }

const statusStyles: Record<string, string> = {
  approved: "bg-emerald-50 text-emerald-700 border-emerald-100",
  pending: "bg-[#E4F8FE] text-[#087FAF] border-[#CDEDF8]",
  rejected: "bg-rose-50 text-rose-600 border-rose-100",
}

const formatDate = (value?: string) => {
  if (!value) return "—"
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

const myBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  })
  const bookings = await getApplication(`applicantId=${session?.user.id}`)
  const pending = bookings.filter((b) => b.status === "pending").length
  const approved = bookings.filter((b) => b.status === "approved").length
  const rejected = bookings.filter((b) => b.status === "rejected").length

  const stats = [
    { label: "Total bookings", value: bookings.length, icon: BookOpen },
    { label: "Pending", value: pending, icon: Clock },
    { label: "Approved", value: approved, icon: CheckCircle2 },
    { label: "Rejected", value: rejected, icon: XCircle },
  ]

  return (
    <main className="min-h-screen bg-[#F5F9FF] px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-6xl space-y-6">
        {/* Header */}
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#102B59] via-[#174A85] to-[#087FAF] px-6 py-9 text-white shadow-xl shadow-[#102B59]/10 sm:px-10">
          <div className="pointer-events-none absolute -top-24 -right-20 h-72 w-72 rounded-full bg-[#08B9DF]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-[#08B9DF]/10 blur-3xl" />
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-extrabold tracking-[1.4px] text-white/90 uppercase backdrop-blur-md">
              <Sparkles size={12} className="text-[#6FE1F7]" />
              Your learning journey
            </span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              My Bookings
            </h1>
            <p className="mt-2 text-sm leading-7 text-white/70">
              Track the tuitions you&apos;ve applied to and see where your
              applications stand.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="rounded-2xl border border-[#DCE8F5] bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-bold tracking-wide text-[#8493A8] uppercase">
                  {label}
                </p>
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E4F8FE] text-[#087FAF]">
                  <Icon size={17} />
                </span>
              </div>
              <p className="mt-3 text-2xl font-extrabold text-[#102B59]">
                {value}
              </p>
            </div>
          ))}
        </div>

        {/* Table */}
        <Card className="overflow-hidden rounded-2xl border border-[#DCE8F5] bg-white py-0 shadow-lg shadow-[#102B59]/5">
          <div className="h-1 w-full bg-linear-to-r from-[#102B59] via-[#087FAF] to-[#08B9DF]" />
          <CardHeader className="border-b border-[#EDF3FA] bg-[#FAFCFF] px-6 py-5 sm:px-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="space-y-1">
                <CardTitle className="text-lg font-extrabold text-[#102B59]">
                  Application history
                </CardTitle>
                <CardDescription className="text-xs text-[#8493A8]">
                  All of your tuition applications in one place.
                </CardDescription>
              </div>
              <Link
                href="/tuitions"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#087FAF] transition-colors hover:text-[#08B9DF]"
              >
                Browse more tuitions
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table className="min-w-195">
                <TableHeader className="bg-[#F7FBFF]">
                  <TableRow className="border-b border-[#E5EFF9] hover:bg-transparent">
                    <TableHead className="py-3.5 pl-6 text-[11px] font-extrabold tracking-wider text-[#52627A] uppercase sm:pl-8">
                      Tuition
                    </TableHead>
                    <TableHead className="hidden py-3.5 text-[11px] font-extrabold tracking-wider text-[#52627A] uppercase md:table-cell">
                      Student
                    </TableHead>
                    <TableHead className="py-3.5 text-[11px] font-extrabold tracking-wider text-[#52627A] uppercase">
                      Status
                    </TableHead>
                    <TableHead className="py-3.5 text-[11px] font-extrabold tracking-wider text-[#52627A] uppercase">
                      Applied on
                    </TableHead>
                    <TableHead className="py-3.5 pr-6 text-right text-[11px] font-extrabold tracking-wider text-[#52627A] uppercase sm:pr-8">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bookings.map((booking) => {
                    const status = String(
                      booking.status || "pending"
                    ).toLowerCase()

                    return (
                      <TableRow
                        key={booking._id}
                        className="group border-b border-[#EDF3FA] transition-colors last:border-b-0 hover:bg-[#F7FBFF]"
                      >
                        <TableCell className="max-w-64 py-4 pl-6 sm:pl-8">
                          <div className="flex items-center gap-3">
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#DCE8F5] bg-[#F2FAFE] text-[#087FAF]">
                              <BookOpen size={16} />
                            </span>
                            <span className="truncate text-sm font-bold text-[#102B59]">
                              {String(booking.tuitionTitle)}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="hidden py-4 md:table-cell">
                          <p className="text-xs font-bold text-[#17345F]">
                            {String(booking.studentName || "—")}
                          </p>
                          <p className="mt-0.5 text-[11px] text-[#8493A8]">
                            {String(booking.email)}
                          </p>
                        </TableCell>
                        <TableCell className="py-4">
                          <Badge
                            variant="outline"
                            className={`gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-bold capitalize ${statusStyles[status] ?? "border-[#E2E9F3] bg-white text-[#52627A]"}`}
                          >
                            {status === "approved" ? (
                              <CheckCircle2 size={11} />
                            ) : status === "rejected" ? (
                              <XCircle size={11} />
                            ) : (
                              <Clock size={11} />
                            )}
                            {status}
                          </Badge>
                        </TableCell>
                        <TableCell className="py-4">
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#52627A]">
                            <CalendarDays
                              size={13}
                              className="text-[#087FAF]"
                            />
                            {formatDate(booking.createdAt)}
                          </span>
                        </TableCell>
                        <TableCell className="py-4 pr-6 text-right sm:pr-8">
                          <div className="flex justify-end gap-1.5">
                            <Link
                              href={`/tuitions/${booking.tuitionId}`}
                              className={buttonVariants({
                                variant: "ghost",
                                size: "icon-sm",
                                className:
                                  "h-8 w-8 rounded-lg border border-transparent text-[#52627A] hover:border-[#D5EAF7] hover:bg-[#E4F8FE] hover:text-[#087FAF]",
                              })}
                              aria-label="View tuition"
                            >
                              <ExternalLink size={15} />
                            </Link>
                            <Button
                              variant="ghost"
                              size="icon-sm"
                              aria-label="Cancel application"
                              className="h-8 w-8 rounded-lg border border-transparent text-[#52627A] hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600"
                            >
                              <XCircle size={15} />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

export default myBookingsPage
