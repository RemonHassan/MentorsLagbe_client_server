"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Plus } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
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
import { createTuition } from "@/lib/actions/tuitions"

const NewTuitionPage = () => {
  //   const [submittedData, setSubmittedData] = useState<Record<
  //     string,
  //     FormDataEntryValue
  //   > | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.currentTarget).entries())
    console.log("New tuition data:", data)
    // setSubmittedData(data)
    const result = await createTuition(data)
    console.log("Created data:", result)
  }

  return (
    <div className="mx-auto max-w-2xl p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Create a new tuition</CardTitle>
          <CardDescription>
            Set up the details students will see when they browse your tuition.
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="grid gap-5">
            <div className="grid gap-2">
              <Label htmlFor="title">Tuition title</Label>
              <Input
                id="title"
                name="title"
                placeholder="e.g. Algebra for beginners"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                placeholder="e.g. Mathematics"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="level">Student level</Label>
              <Select name="level" defaultValue="beginner">
                <SelectTrigger id="level" className="w-full">
                  <SelectValue placeholder="Select a level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="mode">Teaching mode</Label>
              <Select name="mode" defaultValue="online">
                <SelectTrigger id="mode" className="w-full">
                  <SelectValue placeholder="Select a mode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="online">Online</SelectItem>
                  <SelectItem value="in-person">In person</SelectItem>
                  <SelectItem value="both">Online &amp; in person</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="price">Price per hour</Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  min="0"
                  step="1"
                  placeholder="e.g. 500"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="duration">Session duration</Label>
                <Select name="duration" defaultValue="60">
                  <SelectTrigger id="duration" className="w-full">
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30 minutes</SelectItem>
                    <SelectItem value="60">60 minutes</SelectItem>
                    <SelectItem value="90">90 minutes</SelectItem>
                    <SelectItem value="120">120 minutes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="What will students learn, and how will you teach it?"
                className="min-h-28"
                required
              />
            </div>
          </CardContent>

          <CardFooter className="justify-end gap-3">
            <Link
              href="/dashboard/teacher/tuitions"
              className={buttonVariants({ variant: "outline" })}
            >
              Cancel
            </Link>
            <Button type="submit">
              <Plus />
              Create tuition
            </Button>
          </CardFooter>
        </form>
      </Card>

      {/* {submittedData && (
        <pre className="mt-6 overflow-auto rounded-lg bg-muted p-4 text-xs">
          {JSON.stringify(submittedData, null, 2)}
        </pre>
      )} */}
    </div>
  )
}

export default NewTuitionPage
