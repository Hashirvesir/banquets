import AdminLayout from '@/components/adminComponents/AdminLayout'
import VendorTable from '@/components/adminComponents/VendorTable'
import React from 'react'

const vendorDetail = () => {
  return (
    <>
     <AdminLayout>
     <div className=" flex -mt-9 gap-1 items-center">
            <p className="text-sm text-gray-500">Pages </p>
            <p className="text-[#F00000]">/Vendor Detail</p>
          </div>
        <div>
          <p className="uppercase cazelFont text-[#F00000] text-2xl md:text-3xl font-extrabold mt-2 mb-4">
            Vendor detail
          </p>
        </div>
      <VendorTable tableLabel="Author Table"  renderTable={true} />
     </AdminLayout>
    </>
  )
}

export default vendorDetail