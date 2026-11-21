import { getTuitions } from "@/lib/api/tuition"
import React from "react"
import { TuitionRow } from "../dashboard/teacher/tuitions/page"

const BrowseTuitions = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) => {
  const search = await searchParams
  const urlSearch = new URLSearchParams(search as Record<string, string>)
  const query = urlSearch.toString()
  console.log("search params", query)
  const tuitions = await getTuitions(query)
  return (
    <div>
      browse jobs
      {tuitions.map((tuition) => (
        <li key={tuition._id}>{tuition.title}</li>
      ))}
    </div>
  )
}

export default BrowseTuitions
