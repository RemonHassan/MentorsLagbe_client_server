const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4001"

export type ApplicationInput = {
  tuitionId: string
  userId: string
  email: string
  tuitionTitle: string | File
  studentName?: string
  status?: string
  createdAt?: string
}

type HireNowResponse = { insertedId?: string }

export const hireNow = async (
  data: ApplicationInput
): Promise<HireNowResponse> => {
  const res = await fetch(`${BASE_URL}/applications`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
  return res.json()
}
