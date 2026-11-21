import React from "react"
import Link from "next/link"
import {
  BookOpen,
  Clock,
  Layers,
  Monitor,
  Pencil,
  Plus,
  Sparkles,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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
import type { TuitionInput } from "@/lib/actions/tuitions"
import { getTuitions } from "@/lib/api/tuition"
import { DeleteTuitionDialog } from "@/app/components/DeleteTuitionDialog"

export type TuitionRow = TuitionInput & { _id: string }

const ManageTuitionsPage = async () => {
  const tuitions = await getTuitions()

  return (
    <div className="min-h-screen bg-[#F5F9FF] px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <Card className="relative overflow-hidden rounded-3xl border border-[#DCE8F5] bg-white py-0 shadow-xl shadow-[#102B59]/5">
          {/* Top Brand Gradient Bar */}
          <div className="h-1.5 w-full bg-linear-to-r from-[#102B59] via-[#087FAF] to-[#08B9DF]" />

          <CardHeader className="relative flex flex-col justify-between gap-5 border-b border-[#EDF3FA] bg-[#FAFCFF] px-6 pt-7 pb-6 sm:flex-row sm:items-center sm:px-8">
            <div className="pointer-events-none absolute -top-14 -right-14 h-44 w-44 rounded-full bg-[#08B9DF]/10 blur-2xl" />

            <div className="relative z-10 space-y-1.5">
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#D5EAF7] bg-[#E4F8FE]/70 px-3 py-1 text-[10.5px] font-extrabold tracking-[1.4px] text-[#087FAF] uppercase">
                <Sparkles size={12} className="text-[#08B9DF]" />
                Teacher Listings
              </span>

              <div className="flex items-center gap-3 pt-1">
                <CardTitle className="text-2xl font-extrabold tracking-tight text-[#102B59]">
                  My Tuitions
                </CardTitle>
                <span className="rounded-full bg-[#E4F8FE] px-2.5 py-0.5 text-xs font-extrabold text-[#087FAF]">
                  {tuitions.length}
                </span>
              </div>

              <CardDescription className="text-sm text-[#64748B]">
                Manage the tuitions you offer to students.
              </CardDescription>
            </div>

            <Link
              href="/dashboard/teacher/tuitions/new"
              className="relative z-10 inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#102B59] to-[#087FAF] px-5 text-xs font-bold tracking-wide text-white shadow-lg shadow-[#102B59]/15 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#087FAF]/20"
            >
              <Plus size={16} />
              New tuition
            </Link>
          </CardHeader>

          <CardContent className="p-0">
            {tuitions.length === 0 ? (
              <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D5EAF7] bg-[#F0F8FE] text-[#087FAF]">
                  <BookOpen size={24} />
                </div>
                <h3 className="mt-4 text-base font-extrabold text-[#102B59]">
                  No tuitions created yet
                </h3>
                <p className="mt-1 max-w-sm text-xs leading-relaxed text-[#64748B]">
                  Create your first tuition listing so students can discover
                  your subjects, schedule, and hourly rate.
                </p>
                <Link
                  href="/dashboard/teacher/tuitions/new"
                  className="mt-5 inline-flex h-10 items-center gap-2 rounded-xl bg-linear-to-r from-[#102B59] to-[#087FAF] px-5 text-xs font-bold text-white shadow-md shadow-[#102B59]/15 transition-all hover:-translate-y-0.5"
                >
                  <Plus size={15} />
                  Create your first tuition
                </Link>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table className="min-w-190">
                  <TableHeader className="bg-[#F7FBFF]">
                    <TableRow className="border-b border-[#E5EFF9] hover:bg-transparent">
                      <TableHead className="py-3.5 pl-6 text-[11px] font-extrabold tracking-wider text-[#52627A] uppercase sm:pl-8">
                        Title
                      </TableHead>
                      <TableHead className="py-3.5 text-[11px] font-extrabold tracking-wider text-[#52627A] uppercase">
                        Subject
                      </TableHead>
                      <TableHead className="py-3.5 text-[11px] font-extrabold tracking-wider text-[#52627A] uppercase">
                        Level
                      </TableHead>
                      <TableHead className="py-3.5 text-[11px] font-extrabold tracking-wider text-[#52627A] uppercase">
                        Mode
                      </TableHead>
                      <TableHead className="py-3.5 text-[11px] font-extrabold tracking-wider text-[#52627A] uppercase">
                        Price/hr
                      </TableHead>
                      <TableHead className="py-3.5 text-[11px] font-extrabold tracking-wider text-[#52627A] uppercase">
                        Duration
                      </TableHead>
                      <TableHead className="hidden py-3.5 text-[11px] font-extrabold tracking-wider text-[#52627A] uppercase lg:table-cell">
                        Description
                      </TableHead>
                      <TableHead className="py-3.5 pr-6 text-right text-[11px] font-extrabold tracking-wider text-[#52627A] uppercase sm:pr-8">
                        Actions
                      </TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {tuitions.map((tuition: TuitionRow) => {
                      const level = String(tuition.level).toLowerCase()
                      const mode = String(tuition.mode).toLowerCase()

                      return (
                        <TableRow
                          key={tuition._id}
                          className="group border-b border-[#EDF3FA] transition-colors last:border-b-0 hover:bg-[#F7FBFF]"
                        >
                          <TableCell className="max-w-52 py-4 pl-6 sm:pl-8">
                            <div className="flex items-center gap-3">
                              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#DCE8F5] bg-[#F2FAFE] text-[#087FAF] transition-colors group-hover:border-[#08B9DF]/50 group-hover:bg-[#E4F8FE]">
                                <BookOpen size={16} />
                              </span>
                              <span className="truncate text-sm font-bold text-[#102B59]">
                                {String(tuition.title)}
                              </span>
                            </div>
                          </TableCell>

                          <TableCell className="py-4 text-xs font-semibold text-[#40536F]">
                            {String(tuition.subject)}
                          </TableCell>

                          <TableCell className="py-4">
                            <Badge
                              variant="secondary"
                              className={`inline-flex items-center gap-1 rounded-full border-0 px-2.5 py-0.5 text-[11px] font-bold capitalize ${
                                level === "advanced"
                                  ? "bg-amber-100 text-amber-800"
                                  : level === "intermediate"
                                    ? "bg-[#E4F8FE] text-[#087FAF]"
                                    : "bg-emerald-50 text-emerald-700"
                              }`}
                            >
                              <Layers size={11} />
                              {String(tuition.level)}
                            </Badge>
                          </TableCell>

                          <TableCell className="py-4">
                            <Badge
                              variant="outline"
                              className="inline-flex items-center gap-1 rounded-full border-[#D5E3F2] bg-white px-2.5 py-0.5 text-[11px] font-semibold text-[#52627A] capitalize"
                            >
                              <Monitor size={11} className="text-[#087FAF]" />
                              {mode === "in-person"
                                ? "In person"
                                : mode === "both"
                                  ? "Online & In person"
                                  : String(tuition.mode)}
                            </Badge>
                          </TableCell>

                          <TableCell className="py-4">
                            <span className="inline-flex items-center rounded-lg bg-[#F0F8FE] px-2.5 py-1 text-xs font-extrabold text-[#102B59]">
                              ৳{String(tuition.price)}
                            </span>
                          </TableCell>

                          <TableCell className="py-4">
                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#52627A]">
                              <Clock size={13} className="text-[#087FAF]" />
                              {String(tuition.duration)} min
                            </span>
                          </TableCell>

                          <TableCell className="hidden max-w-64 truncate py-4 text-xs text-[#64748B] lg:table-cell">
                            {String(tuition.description)}
                          </TableCell>

                          <TableCell className="py-4 pr-6 text-right sm:pr-8">
                            <div className="flex justify-end gap-1.5">
                              <Button
                                variant="ghost"
                                size="icon-sm"
                                aria-label="Edit"
                                className="h-8 w-8 rounded-lg border border-transparent text-[#52627A] transition-colors hover:border-[#D5EAF7] hover:bg-[#E4F8FE] hover:text-[#087FAF]"
                              >
                                <Pencil size={15} />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon-sm"
                                aria-label="Delete"
                                className="h-8 w-8 rounded-lg border border-transparent text-[#52627A] transition-colors hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600"
                              >
                                <DeleteTuitionDialog
                                  tuition={tuition}
                                ></DeleteTuitionDialog>
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ManageTuitionsPage
