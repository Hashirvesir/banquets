import React from 'react'
import VendorSidebar from './VendorSidebar'
import VendorTopBar from './VendorTopBar'

const VendorLayout = ({children}) => {
  return (
    <>
       <div >
      <div className="flex h-screen overflow-hidden">
        <VendorSidebar />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <VendorTopBar />
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

export default VendorLayout