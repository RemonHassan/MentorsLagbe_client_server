import type { ApplicationRow } from "@/lib/data/applications"

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4001"
export const getApplication = async (query = ""): Promise<ApplicationRow[]> => {
  const res = await fetch(`${BASE_URL}/applications?${query}`)
  return res.json()
}
export const getApplicationCount = async (
  query = ""
): Promise<{ count: number }> => {
  const res = await fetch(`${BASE_URL}/applications/count?${query}`)
  return res.json()
}
