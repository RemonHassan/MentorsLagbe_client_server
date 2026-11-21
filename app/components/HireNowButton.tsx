"use client"
import { useSession } from "@/lib/auth-client"
import { Button } from "@base-ui/react"
import { CalendarDays } from "lucide-react"
import { useRouter } from "next/navigation"
import { TuitionRow } from "../dashboard/teacher/tuitions/page"
import { hireNow } from "@/lib/actions/applications"

const HireNowButton = ({ tuition }: { tuition: TuitionRow }) => {
  const { data: session } = useSession()
  const router = useRouter()
  const tuitionId = tuition._id
  const user = session?.user

  const handleHireNow = async () => {
    if (!user) {
      router.push(`/signin`)
      return
    } else if (user.role === "student") {
      const application = {
        tuitionId: tuition._id,
        userId: user.id,
        email: user.email,
        tuitionTitle: tuition.title,
      }
      const result = await hireNow(application)
      if (result.insertedId) {
        console.log("Application submitted")
        router.push(`/tuitions`)
      }
    } else {
      console.log("User is not a Student")
    }
  }
  return (
    <Button
      onClick={handleHireNow}
      className="mt-6 h-11 w-full rounded-xl bg-linear-to-r from-[#102B59] to-[#087FAF] text-sm font-bold text-white shadow-lg shadow-[#102B59]/15 hover:-translate-y-0.5"
    >
      <CalendarDays />
      Hire Now
    </Button>
  )
}

export default HireNowButton
