import AdminLayout from '@/components/adminComponents/AdminLayout'
import VendorTable from '@/components/adminComponents/VendorTable'
import React from 'react'

const dashboard = () => {
  return (
    <>
    <AdminLayout>

   

    <div className=" flex -mt-9 gap-1 items-center">
            <p className="text-sm text-gray-500">Pages </p>
            <p className="text-[#F00000]">/dashboard</p>
          </div>
        <div>
          <p className="uppercase cazelFont text-[#F00000] text-2xl md:text-3xl font-extrabold mt-2 mb-4">
            dashboard
          </p>
        </div>
        <div className="flex  w-full ">
          <div className=" ">
            <div className="flex flex-wrap gap-4">
              <div className="p-5  w-full md:w-[260px] bg-white rounded shadow-md">
                <div className="flex justify-between">
                  <div className=" pt-1">
                    <div className="text-base text-gray-400 ">New Users</div>
                    <div className="text-2xl font-bold text-gray-900 ">
                      1000
                    </div>
                  </div>
                  <div className="w-12">
                    <img src="/icon.svg" />
                  </div>
                </div>
                {/* arrow svg   */}
                <img className="w-6 mt-4" src="/Path.svg" />
              </div>

              <div className="p-5  w-full md:w-[260px] bg-white rounded shadow-md">
                <div className="flex justify-between">
                  <div className=" pt-1">
                    <div className="text-base text-gray-400 ">
                      New Vendors
                    </div>
                    <div className="text-2xl font-bold text-gray-900 ">05</div>
                  </div>
                  <div className="w-12">
                    <img src="/icon2.svg" />
                  </div>
                </div>
                {/* arrow svg   */}
                <img className="w-6 mt-4" src="/Path.svg" />
              </div>

              <div className="p-5  w-full md:w-[260px] bg-white rounded shadow-md">
                <div className="flex justify-between">
                  <div className=" pt-1">
                    <div className="text-base text-gray-400 ">
                      Total Revenue
                    </div>
                    <div className="text-2xl font-bold text-gray-900 ">
                      100000
                    </div>
                  </div>
                  <div className="w-12">
                    <img src="/icon3.svg" />
                  </div>
                </div>
                {/* arrow svg   */}
                <img className="w-6 mt-4" src="/Path.svg" />
              </div>

              <div className="p-5  w-full md:w-[260px] bg-white rounded shadow-md">
                <div className="flex justify-between">
                  <div className=" pt-1">
                    <div className="text-base text-gray-400 ">
                      Pending payment
                    </div>
                    <div className="text-2xl font-bold text-gray-900 ">
                      12300
                    </div>
                  </div>
                  <div className="w-12">
                    <img src="/icon4.svg" />
                  </div>
                </div>
                {/* arrow svg   */}
                <img className="w-6 mt-4" src="/Path.svg" />
              </div>
            </div>
          </div>
        </div>
        
      <div className="mt-6">
        <VendorTable tableLabel="New Vendors" renderTable={false}/>
      </div>
      </AdminLayout>
    </>
  )
}

export default dashboard