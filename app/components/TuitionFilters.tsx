"use client"

import React from "react"
import { RotateCcw, Search, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useRouter } from "next/navigation"

type TuitionFiltersProps = {
  searchField?: string
  subject?: string
  level?: string
  mode?: string
  duration?: string
}

const selectClassName =
  "h-11 w-full rounded-xl border-[#E2E9F3] bg-[#F8FAFD] px-3 text-sm text-[#102B59] transition-all hover:border-[#08B9DF] focus:border-[#08B9DF] focus:ring-4 focus:ring-[#08B9DF]/15"

const labelClassName =
  "mb-1.5 text-[11px] font-extrabold tracking-wider text-[#52627A] uppercase"

export function TuitionFilters({
  searchField = "",
  subject = "",
  level = "beginner",
  mode = "offline",
  duration = "90",
}: TuitionFiltersProps) {
  const route = useRouter()
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries())
    console.log("form search data", data)
    const search = data.searchField

    const params = new URLSearchParams()
    // params.set("search", search as string)
    // route.push(`/tuitions?${params.toString()}`)
    for (const [key, value] of formData.entries()) {
      if (typeof value === "string" && value && value !== "all") {
        params.set(key, value)
      }
    }

    route.push(`/tuitions?${params.toString()}`)
  }
  return (
    <section className="overflow-hidden rounded-2xl border border-[#DCE8F5] bg-white shadow-lg shadow-[#102B59]/5">
      <div className="h-1 w-full bg-linear-to-r from-[#102B59] via-[#087FAF] to-[#08B9DF]" />

      <form onSubmit={handleSubmit} className="p-5 sm:p-6">
        <div className="mb-5 flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E4F8FE] text-[#087FAF]">
            <SlidersHorizontal size={16} />
          </span>
          <div>
            <h2 className="text-sm font-extrabold text-[#102B59]">
              Refine your search
            </h2>
            <p className="text-[11px] text-[#8493A8]">
              Filter tuitions to find the right mentor for you.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="md:col-span-2 lg:col-span-3">
            <Label htmlFor="searchField" className={labelClassName}>
              Keyword
            </Label>
            <div className="relative">
              <Search
                size={17}
                className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-[#8493A8]"
              />
              <Input
                id="searchField"
                name="searchField"
                defaultValue={searchField}
                placeholder="Search by title, subject, or description..."
                className="h-11 rounded-xl border-[#E2E9F3] bg-[#F8FAFD] pl-10 text-sm text-[#102B59] transition-all placeholder:text-[#9AA9BC] focus:border-[#08B9DF] focus:bg-white focus:ring-4 focus:ring-[#08B9DF]/15"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="subject" className={labelClassName}>
              Subject
            </Label>
            <Select
              name="subject"
              defaultValue={subject}
              onValueChange={() => {}}
            >
              <SelectTrigger id="subject" className={selectClassName}>
                <SelectValue placeholder="All subjects" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All subjects</SelectItem>
                <SelectItem value="mathematics">Mathematics</SelectItem>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="physics">Physics</SelectItem>
                <SelectItem value="computer-science">
                  Computer Science
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="level" className={labelClassName}>
              Level
            </Label>
            <Select name="level" defaultValue={level} onValueChange={() => {}}>
              <SelectTrigger id="level" className={selectClassName}>
                <SelectValue placeholder="All levels" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All levels</SelectItem>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="mode" className={labelClassName}>
              Teaching mode
            </Label>
            <Select name="mode" defaultValue={mode} onValueChange={() => {}}>
              <SelectTrigger id="mode" className={selectClassName}>
                <SelectValue placeholder="All modes" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All modes</SelectItem>
                <SelectItem value="online">Online</SelectItem>
                <SelectItem value="in-person">In person</SelectItem>
                <SelectItem value="both">Online &amp; in person</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="duration" className={labelClassName}>
              Session duration
            </Label>
            <Select
              name="duration"
              defaultValue={duration}
              onValueChange={() => {}}
            >
              <SelectTrigger id="duration" className={selectClassName}>
                <SelectValue placeholder="Any duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any duration</SelectItem>
                <SelectItem value="30">30 minutes</SelectItem>
                <SelectItem value="60">60 minutes</SelectItem>
                <SelectItem value="90">90 minutes</SelectItem>
                <SelectItem value="120">120 minutes</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-6 flex flex-col-reverse gap-3 border-t border-[#EDF3FA] pt-5 sm:flex-row sm:justify-end">
          <Button
            type="button"
            variant="outline"
            onClick={() => {}}
            className="h-11 rounded-xl border-[#DCE8F5] bg-white px-5 text-sm font-bold text-[#52627A] hover:border-[#08B9DF] hover:bg-[#F0FAFF] hover:text-[#087FAF]"
          >
            <RotateCcw />
            Reset
          </Button>
          <Button
            type="submit"
            onClick={() => {}}
            className="h-11 rounded-xl bg-linear-to-r from-[#102B59] to-[#087FAF] px-6 text-sm font-bold text-white shadow-lg shadow-[#102B59]/15 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#087FAF]/20"
          >
            <Search />
            Search tuitions
          </Button>
        </div>
      </form>
    </section>
  )
}
