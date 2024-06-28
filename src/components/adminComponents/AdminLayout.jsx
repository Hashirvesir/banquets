import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminTopBar from './AdminTop'


const AdminLayout = ({children}) => {
  return (
    <>
       <div >
      <div className="flex h-screen overflow-hidden">
        <AdminSidebar />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <AdminTopBar />
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
        </div>
      </div>

    </div>
    </>
  )
}

export default AdminLayout