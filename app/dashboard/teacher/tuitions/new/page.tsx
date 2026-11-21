"use client"

import React from "react"
import Link from "next/link"
import {
  ArrowLeft,
  BookOpen,
  Clock,
  DollarSign,
  FileText,
  GraduationCap,
  Layers,
  Monitor,
  Plus,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { createTuition, type TuitionInput } from "@/lib/actions/tuitions"

const NewTuitionPage = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.currentTarget).entries())
    console.log("New tuition data:", data)

    const result = await createTuition(data as TuitionInput)
    console.log("Created data:", result)
  }

  return (
    <div className="min-h-screen bg-[#F5F9FF] px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-2xl space-y-5">
        {/* Back Link */}
        <Link
          href="/dashboard/teacher/tuitions"
          className="group inline-flex items-center gap-2 text-xs font-bold text-[#52627A] transition-colors hover:text-[#087FAF]"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#DCE8F5] bg-white shadow-2xs transition-transform group-hover:-translate-x-0.5">
            <ArrowLeft size={14} className="text-[#102B59]" />
          </span>
          Back to My Tuitions
        </Link>

        {/* Main Form Card */}
        <Card className="relative overflow-hidden rounded-3xl border border-[#DCE8F5] bg-white py-0 shadow-xl shadow-[#102B59]/5">
          {/* Top Brand Accent Bar */}
          <div className="h-1.5 w-full bg-linear-to-r from-[#102B59] via-[#087FAF] to-[#08B9DF]" />

          <CardHeader className="relative border-b border-[#EDF3FA] bg-[#FAFCFF] px-6 pt-7 pb-6 sm:px-8">
            <div className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[#08B9DF]/10 blur-2xl" />

            <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#D5EAF7] bg-[#E4F8FE]/70 px-3 py-1 text-[10.5px] font-extrabold tracking-[1.4px] text-[#087FAF] uppercase">
              <Sparkles size={12} className="text-[#08B9DF]" />
              New Listing
            </span>

            <CardTitle className="mt-2.5 text-2xl font-extrabold tracking-tight text-[#102B59]">
              Create a new tuition
            </CardTitle>
            <CardDescription className="text-sm text-[#64748B]">
              Set up the details students will see when they browse your
              tuition.
            </CardDescription>
          </CardHeader>

          <form onSubmit={handleSubmit}>
            <CardContent className="grid gap-6 px-6 py-7 sm:px-8">
              {/* Tuition Title */}
              <div className="grid gap-2">
                <Label
                  htmlFor="title"
                  className="flex items-center gap-2 text-xs font-extrabold tracking-wide text-[#102B59] uppercase"
                >
                  <BookOpen size={14} className="text-[#087FAF]" />
                  Tuition title
                </Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="e.g. Algebra for beginners"
                  required
                  className="h-11 rounded-xl border-[#D5E3F2] bg-[#FBFDFF] px-3.5 text-sm text-[#102B59] placeholder:text-[#94A3B8] focus-visible:border-[#08B9DF] focus-visible:ring-[#08B9DF]/20"
                />
              </div>

              {/* Subject */}
              <div className="grid gap-2">
                <Label
                  htmlFor="subject"
                  className="flex items-center gap-2 text-xs font-extrabold tracking-wide text-[#102B59] uppercase"
                >
                  <GraduationCap size={15} className="text-[#087FAF]" />
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="e.g. Mathematics"
                  required
                  className="h-11 rounded-xl border-[#D5E3F2] bg-[#FBFDFF] px-3.5 text-sm text-[#102B59] placeholder:text-[#94A3B8] focus-visible:border-[#08B9DF] focus-visible:ring-[#08B9DF]/20"
                />
              </div>

              {/* Level & Mode Row */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label
                    htmlFor="level"
                    className="flex items-center gap-2 text-xs font-extrabold tracking-wide text-[#102B59] uppercase"
                  >
                    <Layers size={14} className="text-[#087FAF]" />
                    Student level
                  </Label>
                  <Select name="level" defaultValue="beginner">
                    <SelectTrigger
                      id="level"
                      className="h-11 w-full rounded-xl border-[#D5E3F2] bg-[#FBFDFF] px-3.5 text-sm text-[#102B59] focus:border-[#08B9DF] focus:ring-[#08B9DF]/20"
                    >
                      <SelectValue placeholder="Select a level" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-[#DCE8F5]">
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label
                    htmlFor="mode"
                    className="flex items-center gap-2 text-xs font-extrabold tracking-wide text-[#102B59] uppercase"
                  >
                    <Monitor size={14} className="text-[#087FAF]" />
                    Teaching mode
                  </Label>
                  <Select name="mode" defaultValue="online">
                    <SelectTrigger
                      id="mode"
                      className="h-11 w-full rounded-xl border-[#D5E3F2] bg-[#FBFDFF] px-3.5 text-sm text-[#102B59] focus:border-[#08B9DF] focus:ring-[#08B9DF]/20"
                    >
                      <SelectValue placeholder="Select a mode" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-[#DCE8F5]">
                      <SelectItem value="online">Online</SelectItem>
                      <SelectItem value="in-person">In person</SelectItem>
                      <SelectItem value="both">
                        Online &amp; in person
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Price & Duration Row */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label
                    htmlFor="price"
                    className="flex items-center gap-2 text-xs font-extrabold tracking-wide text-[#102B59] uppercase"
                  >
                    <DollarSign size={14} className="text-[#087FAF]" />
                    Price per hour
                  </Label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    min="0"
                    step="1"
                    placeholder="e.g. 500"
                    required
                    className="h-11 rounded-xl border-[#D5E3F2] bg-[#FBFDFF] px-3.5 text-sm text-[#102B59] placeholder:text-[#94A3B8] focus-visible:border-[#08B9DF] focus-visible:ring-[#08B9DF]/20"
                  />
                </div>

                <div className="grid gap-2">
                  <Label
                    htmlFor="duration"
                    className="flex items-center gap-2 text-xs font-extrabold tracking-wide text-[#102B59] uppercase"
                  >
                    <Clock size={14} className="text-[#087FAF]" />
                    Session duration
                  </Label>
                  <Select name="duration" defaultValue="60">
                    <SelectTrigger
                      id="duration"
                      className="h-11 w-full rounded-xl border-[#D5E3F2] bg-[#FBFDFF] px-3.5 text-sm text-[#102B59] focus:border-[#08B9DF] focus:ring-[#08B9DF]/20"
                    >
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-[#DCE8F5]">
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="60">60 minutes</SelectItem>
                      <SelectItem value="90">90 minutes</SelectItem>
                      <SelectItem value="120">120 minutes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Description */}
              <div className="grid gap-2">
                <Label
                  htmlFor="description"
                  className="flex items-center gap-2 text-xs font-extrabold tracking-wide text-[#102B59] uppercase"
                >
                  <FileText size={14} className="text-[#087FAF]" />
                  Description
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="What will students learn, and how will you teach it?"
                  className="min-h-32 rounded-xl border-[#D5E3F2] bg-[#FBFDFF] p-3.5 text-sm leading-relaxed text-[#102B59] placeholder:text-[#94A3B8] focus-visible:border-[#08B9DF] focus-visible:ring-[#08B9DF]/20"
                  required
                />
              </div>
            </CardContent>

            <CardFooter className="flex items-center justify-end gap-3 border-t border-[#EDF3FA] bg-[#FAFCFF] px-6 py-5 sm:px-8">
              <Link
                href="/dashboard/teacher/tuitions"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-[#DCE5F0] bg-white px-5 text-xs font-bold text-[#52627A] transition-colors hover:border-[#08B9DF] hover:bg-[#F0F9FD] hover:text-[#102B59]"
              >
                Cancel
              </Link>
              <Button
                type="submit"
                className="h-11 cursor-pointer rounded-xl bg-linear-to-r from-[#102B59] to-[#087FAF] px-6 text-xs font-bold text-white shadow-lg shadow-[#102B59]/15 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#087FAF]/20"
              >
                <Plus size={16} />
                Create tuition
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )
}

export default NewTuitionPage
