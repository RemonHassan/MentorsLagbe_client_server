import { Booking } from "@/app/dashboard/student/bookings/page"

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4001"
export const getApplication = async (query = ""): Promise<Booking[]> => {
  const res = await fetch(`${BASE_URL}/applications?${query}`)
  return res.json()
}
