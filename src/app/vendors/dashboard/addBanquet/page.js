"use client";
import VendorLayout from "@/components/vendorComponent/VendorLayout";
import { useState } from "react";

const addBanquet = () => {
  const [themeColor, setThemeColor] = useState("");
  const [themePrice, setThemePrice] = useState("");
  const [uploadedImages, setUploadedImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [members, setMembers] = useState('');
  const [perMember, setPerMember] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  const [ priceUpdate , setPriceUpdate] =useState([])

  // themes functions 
  const handleThemeColorChange = (event) => {
    setThemeColor(event.target.value);
  };

  const handleThemePriceChange = (event) => {
    setThemePrice(event.target.value);
  };

  const handleImageUpload = (event) => {
    setSelectedImages(event.target.files);
  };

  const handleAddButtonClick = () => {
    if (!themeColor || !themePrice || selectedImages.length === 0) {
      alert("Please fill in all fields and select at least one image.");
      return;
    }

    setUploadedImages([
      ...uploadedImages,
      { themeColor, themePrice, images: selectedImages },
    ]);

    setThemeColor("");
    setThemePrice("");
    setSelectedImages([]);
  };
   
  // branding functions 
  const [logo, setlogo] = useState(null);
  const [interior, setInterior] = useState();

  const interiorImages = (e) => {
    const interiorfile = e.target.files[0];
    setInterior(interiorfile);
  };
  const logoHandler = (e) => {
    const logo = e.target.files[0];
    setlogo(logo);
  };

  // Price Functions 
  const handleMembersChange = (event) => {
    const value = parseInt(event.target.value);
    if (value >= 0) {
      setMembers(value);
    }
  };

  const handlePerMemberChange = (event) => {
    const value = parseInt(event.target.value);
    if (value >= 0) {
      setPerMember(value);
    }
  };

  const PriceAddButton = () => {
    if (!members || !perMember) {
      alert('Please fill in all fields with valid values.');
      return;
    }

    const amount = members * perMember;
    setTotalAmount(amount);

    // Add the current entry to the list of entries
    setPriceUpdate([
      ...priceUpdate,
      { members, perMember, totalAmount: amount }
    ]);

    // Clear the input fields
    setMembers('');
    setPerMember('');
    setTotalAmount(0);
  };
  return (
    <>
      <VendorLayout>
        <div className=" flex -mt-9 gap-1 items-center">
          <p className="text-sm text-gray-500">Pages </p>
          <p className="text-[#F00000]">/addBanquet</p>
        </div>
        <div>
          <p className="uppercase cazelFont text-[#F00000] text-2xl md:text-3xl font-extrabold mt-2 mb-4">
            Add Banquet
          </p>
        </div>
        <div className="px-6 md:px-8 ">
          <div className="w-full  p-3 min-h-[100%] rounded-xl md:p-8 borderx bg-[#F4F5EF]">
            {/* Banquet info  */}
            <div className=" flex justify-between flex-wrap items-center">
              <div className="">
                <p className="cazelFont text-[#F00000] font-bold text-2xl">
                  Banquets Information
                </p>
              </div>
              <button className="cazelFont bg-[#F00000] hover:bg-[#f00000a7] md:mt-0 mt-3 mb-3 md:mb-0 md:w-[100px] w-[80px] h-10  text-white rounded-md">
                Submit
              </button>
            </div>
            <div className="mb-2 flex flex-wrap gap-3">
              <div className="flex flex-col md:w-[45%] w-full">
                <label className="inline-block mb-2">Banquet Name</label>
                <input
                  type="text"
                  className=" bg-[#FFFFFF] p-2 rounded-md focus:outline-none"
                />
              </div>

              <div className="flex flex-col md:w-[45%] w-full">
                <label className="inline-block mb-2">Location</label>
                <input
                  type="text"
                  className=" bg-[#FFFFFF] p-2 rounded-md  focus:outline-none"
                />
              </div>
            </div>
            <div className=" flex items-center  flex-wrap  gap-3">
              <div className="flex flex-col md:w-[45%] w-full">
                <label className="inline-block mb-2">Email</label>
                <input
                  type="text"
                  className=" bg-[#FFFFFF] p-2 rounded-md focus:outline-none"
                />
              </div>
              <div className="flex flex-col mt-6 md:w-[45%] w-full">
                <button className="cazelFont  bg-[#F00000] hover:bg-[#f00000a7] md:mt-0 mt-3 mb-3 md:mb-0 md:w-[140px] w-[100px] h-10  text-white rounded-md">
                  {" "}
                  Calender
                </button>
              </div>
            </div>

            {/* Branding  */}
            <div className=" flex justify-between mt-7 flex-wrap items-center ">
              <div className="">
                <p className="cazelFont text-[#F00000] mb-2 font-bold text-2xl">
                  Branding
                </p>
              </div>
            </div>
            <div className="mb-2 flex flex-wrap gap-3">
              <div className="flex flex-col md:w-[45%] w-full">
                <p className="font-semibold text-[#565656]">Upload logo</p>

                <input
                  id="file-upload"
                  type="file"
                  className="file:cursor-pointer hover:file:bg-[#fcb7b7fe] block mt-4  file:bg-[#F9C8C8] file:text-[#F00000] file:border file:border-red-700 file:py-2 file:px-4 file:rounded-md"
                  accept="image/*"
                  onChange={logoHandler}
                />
              </div>

              <div className="flex flex-col md:w-[45%] w-full">
                <p className="font-semibold text-[#565656]">
                  Upload interior images
                </p>
                <div className="mt-4">
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    id="interior"
                    className='block w-full text-sm 
                      file:mr-4 file:py-2 file:px-4 file:rounded-md
                      file:border file:border-red-600 file:text-sm 
                      file:bg-[#F9C8C8] file:text-[#F00000]
                      hover:file:bg-[#fcb7b7fe]  file:cursor-pointer "
'
                    onChange={interiorImages}
                  />
                </div>
              </div>
            </div>
            {/* Themes  */}
            <div className=" flex flex-col flex-wrap  gap-3">
              <p className="cazelFont mt-4 text-[#F00000] mb-2 font-bold text-2xl">
                Create Themes
              </p>
              {uploadedImages.map((item, index) => (
                <div
                  key={index}
                  className="flex md:w-[45%] flex-wrap gap-3  w-full"
                >
                  <div
                    style={{ backgroundColor: item.themeColor }}
                    className="p-5 w-9 h-7 rounded-full"
                  ></div>
                  <p className="bg-green-200 text-green-500 border rounded-md px-2 py-1.5 border-green-500">
                    images uploaded
                  </p>
                  <p className="bg-[#F00000] text-white px-2 py-1.5">
                    Rs: {item.themePrice}
                  </p>
                </div>
              ))}
              <div className="flex flex-wrap items-center gap-3 w-full">
                <input
                  type="text"
                  placeholder=" Color hex Code"
                  value={themeColor}
                  onChange={handleThemeColorChange}
                  className="bg-[#FFFFFF] p-2 rounded-md focus:outline-none"
                />
                <input
                  type="number"
                  placeholder="Theme Price"
                  value={themePrice}
                  onChange={handleThemePriceChange}
                  className="bg-[#FFFFFF] p-2 rounded-md focus:outline-none"
                />
                <div className="">
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="block w-full text-sm file:py-2 file:px-4 file:rounded-md file:border file:border-red-600 file:text-sm file:bg-[#F9C8C8] file:text-[#F00000] hover:file:bg-[#fcb7b7fe] file:cursor-pointer"
                  />
                </div>
                <button
                  className="cazelFont bg-[#F00000] hover:bg-[#f00000a7] md:mt-0 mt-3 mb-3 md:mb-0 md:w-[100px] w-[80px] h-10  text-white rounded-md"
                  onClick={handleAddButtonClick}
                >
                  Add
                </button>
              </div>
            </div>
            {/* Price  */}
            <div className=" flex flex-col flex-wrap  gap-3">
              <p className="cazelFont mt-4 text-[#F00000] mb-2 font-bold text-2xl">
                Pricing
              </p>
              {priceUpdate.map((entry, index) => (
        <div key={index} className="flex md:w-[100%] flex-wrap mb-4 items-center gap-3 w-full">
          <p className="bg-white text-gray-400 p-2">Members: {entry.members}</p>
          <p className="bg-white text-gray-400 p-2">Per Person: {entry.perMember}</p>
          <p className="bg-[#F00000] text-white p-2">Amount: {entry.totalAmount}</p>
        </div>
      ))}
              
              <div className="flex flex-wrap items-center gap-3 w-full">
                <input
                  type="number"
                  placeholder="Members"
                  value={members}
                  onChange={handleMembersChange}
                  className="bg-[#FFFFFF] p-2 rounded-md focus:outline-none"
                />
                <input
                  type="number"
                  placeholder="Per Members"
                  value={perMember}
                  onChange={handlePerMemberChange}
                  className="bg-[#FFFFFF] p-2 rounded-md focus:outline-none"
                />

                <button className="cazelFont bg-[#F00000] hover:bg-[#f00000a7] md:mt-0 mt-3 mb-3 md:mb-0 md:w-[100px] w-[80px] h-10  text-white rounded-md" onClick={PriceAddButton}>
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </VendorLayout>
    </>
  );
};

export default addBanquet;
