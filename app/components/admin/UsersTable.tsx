import React from "react"
import { Ban, Clock3, MailCheck } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { RoleSelect } from "@/app/components/admin/RoleSelect"
import type { getUsers } from "@/lib/api/user-server"

export type AdminUser = Awaited<ReturnType<typeof getUsers>>["users"][number]

const formatDate = (value: unknown) => {
  if (!value) return "—"
  const date = value instanceof Date ? value : new Date(String(value))
  if (Number.isNaN(date.getTime())) return String(value)
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

export function UsersTable({ users }: { users: AdminUser[] }) {
  return (
    <div className="overflow-x-auto">
      <Table className="min-w-190">
        <TableHeader className="bg-[#F7FBFF]">
          <TableRow className="border-b border-[#E5EFF9] hover:bg-transparent">
            <TableHead className="py-3.5 pl-6 text-[11px] font-extrabold tracking-wider text-[#52627A] uppercase sm:pl-8">
              User
            </TableHead>
            <TableHead className="py-3.5 text-[11px] font-extrabold tracking-wider text-[#52627A] uppercase">
              Role
            </TableHead>
            <TableHead className="py-3.5 text-[11px] font-extrabold tracking-wider text-[#52627A] uppercase">
              Status
            </TableHead>
            <TableHead className="hidden py-3.5 text-[11px] font-extrabold tracking-wider text-[#52627A] uppercase md:table-cell">
              Joined
            </TableHead>
            <TableHead className="hidden py-3.5 pr-6 text-[11px] font-extrabold tracking-wider text-[#52627A] uppercase sm:pr-8 lg:table-cell">
              User ID
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              className="border-b border-[#EDF3FA] transition-colors last:border-b-0 hover:bg-[#F7FBFF]"
            >
              <TableCell className="py-4 pl-6 sm:pl-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#102B59] to-[#087FAF] text-xs font-extrabold text-white">
                    {String(user.name || "?")
                      .charAt(0)
                      .toUpperCase()}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-xs font-bold text-[#17345F]">
                      {String(user.name || "—")}
                    </p>
                    <p className="mt-0.5 truncate text-[11px] text-[#8493A8]">
                      {String(user.email)}
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="py-4">
                <RoleSelect role={user.role} userId={user.id} />
              </TableCell>
              <TableCell className="py-4">
                {user.banned ? (
                  <Badge
                    variant="outline"
                    className="gap-1 rounded-full border-rose-100 bg-rose-50 px-2.5 py-0.5 text-[11px] font-bold text-rose-600"
                  >
                    <Ban size={11} />
                    Banned
                  </Badge>
                ) : user.emailVerified ? (
                  <Badge
                    variant="outline"
                    className="gap-1 rounded-full border-emerald-100 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700"
                  >
                    <MailCheck size={11} />
                    Verified
                  </Badge>
                ) : (
                  <Badge
                    variant="outline"
                    className="gap-1 rounded-full border-amber-100 bg-amber-50 px-2.5 py-0.5 text-[11px] font-bold text-amber-700"
                  >
                    <Clock3 size={11} />
                    Unverified
                  </Badge>
                )}
              </TableCell>
              <TableCell className="hidden py-4 md:table-cell">
                <span className="text-xs font-semibold text-[#52627A]">
                  {formatDate(user.createdAt)}
                </span>
              </TableCell>
              <TableCell className="hidden py-4 pr-6 sm:pr-8 lg:table-cell">
                <span className="font-mono text-[10px] text-[#9AA9BC]">
                  {String(user.id)}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
