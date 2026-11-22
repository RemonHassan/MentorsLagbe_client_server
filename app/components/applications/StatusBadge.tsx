import React from "react"
import { CheckCircle2, Clock, XCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const statusStyles: Record<string, string> = {
  approved: "border-emerald-100 bg-emerald-50 text-emerald-700",
  pending: "border-[#CDEDF8] bg-[#E4F8FE] text-[#087FAF]",
  rejected: "border-rose-100 bg-rose-50 text-rose-600",
}

const StatusIcon = ({ status }: { status: string }) => {
  if (status === "approved") return <CheckCircle2 size={11} />
  if (status === "rejected") return <XCircle size={11} />
  return <Clock size={11} />
}

export function StatusBadge({ status }: { status?: string }) {
  const value = String(status || "pending").toLowerCase()

  return (
    <Badge
      variant="outline"
      className={`gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-bold capitalize ${statusStyles[value] ?? "border-[#E2E9F3] bg-white text-[#52627A]"}`}
    >
      <StatusIcon status={value} />
      {value}
    </Badge>
  )
}
