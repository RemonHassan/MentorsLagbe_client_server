import type { ApplicationInput } from "@/lib/actions/applications"

export type ApplicationRow = ApplicationInput & { _id: string }

// Temporary demo data. Replace getApplicationsByTuition with a real
// `GET /applications?tuitionId=...` call when the backend endpoint is ready.
const demoApplicants: Array<Omit<ApplicationRow, "_id" | "tuitionId">> = [
  {
    userId: "u1",
    email: "sadia@example.com",
    studentName: "Sadia Rahman",
    tuitionTitle: "Algebra for beginners",
    status: "pending",
    createdAt: "2026-11-18T10:30:00.000Z",
  },
  {
    userId: "u2",
    email: "tanvir@example.com",
    studentName: "Tanvir Ahmed",
    tuitionTitle: "Algebra for beginners",
    status: "approved",
    createdAt: "2026-11-19T08:15:00.000Z",
  },
  {
    userId: "u3",
    email: "mim@example.com",
    studentName: "Mim Chowdhury",
    tuitionTitle: "Algebra for beginners",
    status: "rejected",
    createdAt: "2026-11-20T12:45:00.000Z",
  },
  {
    userId: "u4",
    email: "rifat@example.com",
    studentName: "Rifat Hassan",
    tuitionTitle: "Algebra for beginners",
    status: "pending",
    createdAt: "2026-11-21T16:05:00.000Z",
  },
]

export const getApplicationsByTuition = (tuitionId: string): ApplicationRow[] =>
  demoApplicants.map((applicant, index) => ({
    ...applicant,
    _id: `${tuitionId}-application-${index + 1}`,
    tuitionId,
  }))
