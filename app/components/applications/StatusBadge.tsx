"use client"

import React from "react"
import { CheckCircle2, Clock, XCircle } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const statusStyles: Record<string, string> = {
  approved: "border-emerald-100 bg-emerald-50 text-emerald-700",
  pending: "border-[#CDEDF8] bg-[#E4F8FE] text-[#087FAF]",
  rejected: "border-rose-100 bg-rose-50 text-rose-600",
}

const StatusIcon = ({ status }: { status: string }) => {
  if (status === "approved")
    return <CheckCircle2 size={11} className="!size-3" />
  if (status === "rejected") return <XCircle size={11} className="!size-3" />
  return <Clock size={11} className="!size-3" />
}

type StatusBadgeProps = {
  status?: string
  onChange?: (status: string) => void
}

export function StatusBadge({ status, onChange }: StatusBadgeProps) {
  const value = String(status || "pending").toLowerCase()

  return (
    <Select
      defaultValue={value}
      onValueChange={(next) => {
        if (next) onChange?.(next)
      }}
    >
      <SelectTrigger
        aria-label="Change status"
        className={`h-auto w-fit gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-bold capitalize shadow-none focus:ring-2 focus:ring-[#08B9DF]/20 ${
          statusStyles[value] ?? "border-[#E2E9F3] bg-white text-[#52627A]"
        }`}
      >
        <SelectValue>
          {(current: unknown) => {
            const selected = String(current || "pending").toLowerCase()
            return (
              <span className="flex items-center gap-1">
                <StatusIcon status={selected} />
                {selected}
              </span>
            )
          }}
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="rounded-xl border-[#DCE8F5]">
        <SelectItem value="pending">Pending</SelectItem>
        <SelectItem value="approved">Approved</SelectItem>
        <SelectItem value="rejected">Rejected</SelectItem>
      </SelectContent>
    </Select>
  )
}
