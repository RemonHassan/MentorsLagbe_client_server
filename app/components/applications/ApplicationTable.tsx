import React from "react"
import Link from "next/link"
import { BookOpen, CalendarDays, Check, ExternalLink, X } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { StatusBadge } from "@/app/components/applications/StatusBadge"
import type { ApplicationRow } from "@/lib/data/applications"

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

type ApplicationTableProps = {
  applications: ApplicationRow[]
  showTuitionColumn?: boolean
}

export function ApplicationTable({
  applications,
  showTuitionColumn = false,
}: ApplicationTableProps) {
  return (
    <div className="overflow-x-auto">
      <Table className="min-w-[720px]">
        <TableHeader className="bg-[#F7FBFF]">
          <TableRow className="border-b border-[#E5EFF9] hover:bg-transparent">
            <TableHead className="py-3.5 pl-6 text-[11px] font-extrabold tracking-wider text-[#52627A] uppercase sm:pl-8">
              Applicant
            </TableHead>
            {showTuitionColumn && (
              <TableHead className="py-3.5 text-[11px] font-extrabold tracking-wider text-[#52627A] uppercase">
                Tuition
              </TableHead>
            )}
            <TableHead className="py-3.5 text-[11px] font-extrabold tracking-wider text-[#52627A] uppercase">
              Status
            </TableHead>
            <TableHead className="hidden py-3.5 text-[11px] font-extrabold tracking-wider text-[#52627A] uppercase md:table-cell">
              Applied on
            </TableHead>
            <TableHead className="py-3.5 pr-6 text-right text-[11px] font-extrabold tracking-wider text-[#52627A] uppercase sm:pr-8">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applications.map((application) => (
            <TableRow
              key={application._id}
              className="border-b border-[#EDF3FA] transition-colors last:border-b-0 hover:bg-[#F7FBFF]"
            >
              <TableCell className="py-4 pl-6 sm:pl-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#102B59] to-[#087FAF] text-xs font-extrabold text-white">
                    {String(application.studentName || "?")
                      .charAt(0)
                      .toUpperCase()}
                  </span>
                  <div>
                    <p className="text-xs font-bold text-[#17345F]">
                      {String(application.studentName || "—")}
                    </p>
                    <p className="mt-0.5 text-[11px] text-[#8493A8]">
                      {String(application.email)}
                    </p>
                  </div>
                </div>
              </TableCell>

              {showTuitionColumn && (
                <TableCell className="max-w-48 py-4">
                  <Link
                    href={`/tuitions/${application.tuitionId}`}
                    className="inline-flex items-center gap-1.5 truncate text-xs font-bold text-[#087FAF] hover:underline"
                  >
                    <BookOpen size={13} className="shrink-0" />
                    <span className="truncate">
                      {String(application.tuitionTitle)}
                    </span>
                  </Link>
                </TableCell>
              )}

              <TableCell className="py-4">
                <StatusBadge
                  status={application.status}
                  applicationId={application._id}
                />
              </TableCell>

              <TableCell className="hidden py-4 md:table-cell">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#52627A]">
                  <CalendarDays size={13} className="text-[#087FAF]" />
                  {formatDate(application.createdAt)}
                </span>
              </TableCell>

              <TableCell className="py-4 pr-6 text-right sm:pr-8">
                <div className="flex justify-end gap-1.5">
                  <Link
                    href={`/tuitions/${application.tuitionId}`}
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
                    aria-label="Approve applicant"
                    className="h-8 w-8 rounded-lg border border-transparent text-[#52627A] hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600"
                  >
                    <Check size={15} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    aria-label="Reject applicant"
                    className="h-8 w-8 rounded-lg border border-transparent text-[#52627A] hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600"
                  >
                    <X size={15} />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
