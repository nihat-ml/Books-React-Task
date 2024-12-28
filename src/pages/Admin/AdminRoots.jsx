import React from 'react'
import AdminFooter from '../../components/Admin/AdminFooter.jsx'
import AdminNavbar from '../../components/Admin/AdminNavbar.jsx'
import { Outlet } from "react-router"

function AdminRoot() {
  return (
    <>
    <AdminNavbar/>
    <Outlet/>
    <AdminFooter/>
      
    </>
  )
}

export default AdminRoot