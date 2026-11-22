import { requireRole } from "@/lib/core/server"
import React from "react"

const TeacherDashBoardLayout = async ({
  children,
}: {
  children: React.ReactNode
}) => {
  await requireRole("teacher")
  return children
}

export default TeacherDashBoardLayout
