import { getUsers } from "@/lib/api/user-server"
import React from "react"

const AdminUsersPage = async () => {
  const users = await getUsers()
  console.log("userss", users)
  return <div>admin users page</div>
}

export default AdminUsersPage
