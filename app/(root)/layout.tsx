import NavBar from "@/components/shared/Navbar"
import React from "react"

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavBar></NavBar>

      {children}
    </div>
  )
}

export default RootLayout
