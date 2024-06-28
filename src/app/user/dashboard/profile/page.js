import UserLayout from "@/components/usersComponents/UserLayout";
const Profile = () => {
  return (
    <>  
      <UserLayout>
      <div className=" flex -mt-9 mb-2 gap-1 items-center">
            <p className="text-sm text-gray-500">Pages </p>
            <p className="text-[#F00000]">/profile</p>
          </div>
          <div className="px-6 md:px-10 ">
            <div className="w-full  p-3 min-h-[100%] rounded-xl md:p-8 borderx bg-[#F4F5EF]">
                {/* user info  */}
                <div className=" flex justify-between flex-wrap items-center">
                    <div className="">
                        <p>Edit profile</p>
                        <p className="cazelFont text-[#F00000] font-bold text-2xl">User Information</p>
                    </div>
                    <button className="cazelFont bg-[#F00000] hover:bg-[#f00000a7] md:mt-0 mt-3 mb-3 md:mb-0 md:w-[100px] w-[80px] h-10  text-white rounded-md">Submit</button>
                </div>
              <div className="mb-2 flex flex-wrap gap-3">
                <div className="flex flex-col md:w-[45%] w-full">
                  <label className="inline-block mb-2">Name</label>
                  <input
                    type="text"
                    className=" bg-[#FFFFFF] p-2 rounded-md focus:outline-none"
                  />
                </div>

                <div className="flex flex-col md:w-[45%] w-full">
                  <label className="inline-block mb-2">Business Name</label>
                  <input
                    type="text"
                    className=" bg-[#FFFFFF] p-2 rounded-md  focus:outline-none"
                  />
                </div>
              </div>
              <div className=" flex items-center flex-wrap  gap-3">
                <div className="flex flex-col md:w-[45%] w-full">
                  <label className="inline-block mb-2">Email Address</label>
                  <input
                    type="text"
                    className=" bg-[#FFFFFF] p-2 rounded-md focus:outline-none"
                  />
                </div>
                <div className="flex flex-col md:w-[45%] w-full">
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer block mt-4 bg-red-300 text-red-700 border border-red-700 w-32 py-1 px-4 rounded-md"
                  >
                    Choose a file
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    accept="image/*"
                  />
                </div>
              </div>

                {/* contact info  */}
                <div className=" flex justify-between mt-7 flex-wrap items-center ">
                    <div className="">
                        <p className="cazelFont text-[#F00000] mb-2 font-bold text-2xl">Contact Information</p>
                    </div>
                
                </div>
              <div className="mb-2 flex flex-wrap gap-3">
                <div className="flex flex-col md:w-[45%] w-full">
                  <label className="inline-block mb-2">Address</label>
                  <input
                    type="text"
                    className=" bg-[#FFFFFF] p-2 rounded-md focus:outline-none"
                  />
                </div>

                <div className="flex flex-col md:w-[45%] w-full">
                  <label className="inline-block mb-2">Gender</label>
                 <select className="bg-[#FFFFFF] p-2 rounded-md focus:outline-none"> 
                    <option>Male</option>
                    <option>Female</option>

                 </select>
                </div>
              </div>
              <div className=" flex items-center flex-wrap  gap-3">
                <div className="flex flex-col md:w-[45%] w-full">
                  <label className="inline-block mb-2">City</label>
                  <input
                    type="text"
                    className=" bg-[#FFFFFF] p-2 rounded-md focus:outline-none"
                  />
                </div>
                <div className="flex flex-col md:w-[45%] w-full">
                  <label className="inline-block mb-2">State</label>
                  <input
                    type="text"
                    className=" bg-[#FFFFFF] p-2 rounded-md focus:outline-none"
                  />
                </div>
              </div>
              {/* about  */}
              <div className=" mt-7 items-center ">
                    <div className="">
                        <p className="cazelFont text-[#F00000] mb-2 font-bold text-2xl">About</p>
                    </div>
                    <div className=" flex items-center flex-wrap  gap-3">
                <div className="flex flex-col w-[91%]">
                  <label className="inline-block mb-2">Description</label>
                  <input
                    type="text"
                    className=" bg-[#FFFFFF] p-2 rounded-md focus:outline-none"
                  />
                </div>
              
              </div>
                </div>
            {/* password */}
            <div className=" mb-2 flex flex-wrap gap-3">
                <div className="flex flex-col md:w-[45%] w-full">
                  <label className="inline-block mb-2 mt-2">Password</label>
                  <input
                    type="password"
                    className=" bg-[#FFFFFF] p-2 rounded-md focus:outline-none"
                  />
                </div>

                <div className="flex flex-col md:w-[45%] w-full">
                  <label className="inline-block mb-2 mt-2">Confirm Password</label>
                  <input
                    type="password"
                    className=" bg-[#FFFFFF] p-2 rounded-md  focus:outline-none"
                  />
                </div>
              </div>
            </div>
       </div>
      </UserLayout>
    </>
  );
};

export default Profile;


