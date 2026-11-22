"use client"
import { useSession } from "@/lib/auth-client"
import { Button } from "@base-ui/react"
import { ArrowUpRight, CalendarDays } from "lucide-react"
import { useRouter } from "next/navigation"
import { TuitionRow } from "../dashboard/teacher/tuitions/page"
import { hireNow } from "@/lib/actions/applications"
import { getApplicationCount } from "@/lib/api/applications"
import { getUserPremiumById } from "@/lib/api/user"

const HireNowButton = ({ tuition }: { tuition: TuitionRow }) => {
  const { data: session } = useSession()
  const router = useRouter()
  const tuitionId = tuition._id
  const user = session?.user
  console.log(tuitionId)

  const handleHireNow = async () => {
    if (!user) {
      router.push(`/signin`)
      return
    } else if (user.role === "student") {
      // is premium
      const premiumResult = await getUserPremiumById(user.id)
      // numbe of tuition applied by the student

      const countResult = await getApplicationCount(`applicantId=${user.id}`)
      if (!premiumResult.premium && countResult.count >= 5) {
        router.push("/payment")
        return
      } else {
        const application = {
          tuitionId: tuition._id,
          userId: user.id,
          email: user.email,
          tuitionTitle: tuition.title,
          studentName: user.name, // nice for the tutor's inbox
          status: "pending", // explicit initial state
          createdAt: new Date().toISOString(),
        }
        const result = await hireNow(application)
        if (result.insertedId) {
          console.log("Application submitted")
          router.push(`/tuitions`)
        }
      }
    } else {
      console.log("User is not a Student")
    }
  }
  return (
    <Button
      onClick={handleHireNow}
      className="group relative mt-6 flex h-12 w-full cursor-pointer items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-linear-to-r from-[#102B59] via-[#143B73] to-[#087FAF] px-6 text-sm font-extrabold tracking-wide text-white shadow-lg shadow-[#102B59]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#087FAF]/25 active:translate-y-0"
    >
      {/* Subtle Hover Shimmer Sweep */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

      <CalendarDays size={17} className="relative z-10 text-[#7CE4FF]" />
      <span className="relative z-10">Hire Now</span>
      <ArrowUpRight
        size={16}
        className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Button>
  )
}

export default HireNowButton
