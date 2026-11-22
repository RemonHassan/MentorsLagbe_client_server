"use client"

import React from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const roleStyles: Record<string, string> = {
  admin: "border-[#D9E2F0] bg-[#102B59] text-white",
  teacher: "border-amber-100 bg-amber-50 text-amber-700",
  student: "border-[#CDEDF8] bg-[#E4F8FE] text-[#087FAF]",
}

type RoleSelectProps = {
  role?: string
  userId?: string
  onChange?: (role: string) => void
}

export function RoleSelect({ role, userId, onChange }: RoleSelectProps) {
  const value = String(role || "student").toLowerCase()

  const handleChangeRole = (nextRole: string) => {
    console.log("Role change requested:", { userId, role: nextRole })
    onChange?.(nextRole)
  }

  return (
    <Select
      defaultValue={value}
      onValueChange={(next) => {
        if (next) handleChangeRole(next)
      }}
    >
      <SelectTrigger
        aria-label="Change user role"
        className={`h-auto w-fit gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-bold capitalize shadow-none focus:ring-2 focus:ring-[#08B9DF]/20 ${
          roleStyles[value] ?? "border-[#E2E9F3] bg-white text-[#52627A]"
        }`}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="rounded-xl border-[#DCE8F5]">
        <SelectItem value="student">Student</SelectItem>
        <SelectItem value="teacher">Teacher</SelectItem>
        <SelectItem value="admin">Admin</SelectItem>
      </SelectContent>
    </Select>
  )
}
