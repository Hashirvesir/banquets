import React from 'react'
import Sidebar from './Siderbar'
import TopBar from './TopBar'


const UserLayout = ({children}) => {

  return (
    <>
    <div >
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <TopBar />
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

export default UserLayout