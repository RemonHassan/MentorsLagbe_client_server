const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4001"

export type TuitionInput = Record<
  | "title"
  | "subject"
  | "level"
  | "mode"
  | "price"
  | "duration"
  | "description"
  | "teacherId",
  FormDataEntryValue
>

export const createTuition = async (data: TuitionInput): Promise<unknown> => {
  const res = await fetch(`${BASE_URL}/tuitions`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
  return res.json()
}
export const deleteTuition = async (tuitionId: string) => {
  const res = await fetch(`${BASE_URL}/tuitions/${tuitionId}`, {
    method: "DELETE",
  })
  return res.json()
}
