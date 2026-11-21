const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4001"

export const getTuitions = async () => {
  const res = await fetch(`${BASE_URL}/tuitions`)
  return res.json()
}
