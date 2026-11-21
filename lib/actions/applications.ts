const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4001"

export const hireNow = async (data) => {
  const res = await fetch(`${BASE_URL}/applications`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
  return res.json()
}
