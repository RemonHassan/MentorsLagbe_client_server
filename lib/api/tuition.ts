import { TuitionRow } from "@/app/dashboard/teacher/tuitions/page"

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4001"

export const getTuitions = async (query = "") => {
  const res = await fetch(`${BASE_URL}/tuitions?${query}`)
  return res.json()
}
export const getTuitionById = async (
  tuitionId: string
): Promise<TuitionRow> => {
  const res = await fetch(`${BASE_URL}/tuitions/${tuitionId}`)
  return res.json()
}
