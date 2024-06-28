"use client"
import React from 'react'
import MUIDataTable from "mui-datatables";
import { ThemeProvider, createTheme } from "@mui/material";
import { useState } from 'react';
import { FiMoreVertical } from "react-icons/fi";
const VendorTable = ({tableLabel,renderTable }) => {
  const data = [
    {
      id: "1",
      name: "hashir",
      location: "saddar",
      email: "example@gmail.com",
      gender: "Male",
      status: "Approved",
    },
    {
      id: "2",
      name: "Alex",
      location: "nazimabad",
      email: "example@gmail.com",
      gender: "Male",
      
      status: "Approved",
    },
    {
      id: "3",
      name: "Alex",
      location: "saddar",
      email: "example@gmail.com",
      gender: "Male",
      
      status: "Approved",
    },
    {
      id: "4",
      name: "Alex",
      location: "nazimabad",
      email: "example@gmail.com",
      gender: "Male",
      
      status: "Reject",
    },
    {
      id: "5",
      name: "Alex",
      location: "saddar",
      email: "example@gmail.com",
      gender: "Male",
      
      status: "Approved",
    },
    {
      id: "6",
      name: "Alex",
      location: "nazimabad",
      email: "example@gmail.com",
      gender: "Male",
      
      status: "Approved",
    },
    {
      id: "7",
      name: "Alex",
      location: "saddar",
      email: "example@gmail.com",
      gender: "Male",
      
      status: "Pending",
    },
    {
      id: "8",
      name: "Alex",
      location: "nazimabad",
      email: "example@gmail.com",
      gender: "Male",
      
      status: "Approved",
    },
    {
      id: "9",
      name: "Alex",
      location: "saddar",
      email: "example@gmail.com",
      gender: "Male",
      
      status: "Pending",
    },
    {
      id: "10",
      name: "Alex",
      location: "saddar",
      email: "example@gmail.com",
      gender: "Male",
      
      status: "Pending",
    },
    {
      id: "11",
      name: "Alex",
      location: "nazimabad",
      email: "example@gmail.com",
      gender: "Male",
      
      status: "Approved",
    },
    {
      id: "12",
      name: "Alex",
      location: "saddar",
      email: "example@gmail.com",
      gender: "Male",
      status: "Pending",
    },
  ];

  const [statusFilter, setStatusFilter] = useState('All');

  const handleFilterChange = (status) => {
    setStatusFilter(status);
  };

  const filteredData = statusFilter === 'All' ? data : data.filter(item => item.status === statusFilter);


  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  // Table colums 
  const columns = [
    {name:"name",
    label:"User Name",
      options:{
          customBodyRender:(value)=><p className="capitalize">{value}</p>
      }
  },
    {name:"location",
    label:"Location",

  },
    {name:"email",
    label:"Email"
  },
    {name:"gender",
      label: " Gender"
  },
    {name:"status",
    label: "Status",
    options:{
      customBodyRender:(value)=><p className={`px-3 py-1 rounded-full text-white inline-block ${value === "Reject" ? 'bg-[#F00000]' :(value === "Approved" ? 'bg-[#00B69B]' : 'bg-[#F07300]') }`}>
        {value}</p>
    }
  },
  {
    name: "action",
    label: "Action",
    options: {
      customBodyRender: (value, tableMeta) => { 
        
        let icon;
        switch (value) {
          case "Reject":
            icon = <FaTimesCircle   className="cursor-pointer text-xl font-bold" onClick={() => toggleDropdown(tableMeta.rowData)} />;
            break;
          case "Approved":
            icon = <FaCheckCircle  className="cursor-pointer text-xl  font-bold" onClick={() => toggleDropdown(tableMeta.rowData)} />;
            break;
          default:
            icon = <FiMoreVertical  className="cursor-pointer text-xl font-bold" onClick={() => toggleDropdown(tableMeta.rowData)} />;
        }
        return (
          <div className="flex items-center">
            {icon}
          </div>
        );
      }
    }
  }





  ];
 
// Table option 
  const options = {
    selectableRows: "none",
    elevation: 0,
    rowsPerPage: 10,
    rowsPerPageOptions: [5, 10, 20, 30, 1000],
    print: false, // Disable printer option
    download: false,
    checkbox:false,
    viewColumns: false,
  };

  // Table Theme 
  const getMuiTheme = () =>
    createTheme({
     
  
      typography: {
        fontFamily: "sans-serif",
      },
      palette: {
        background: {
          paper:"#F3F3F9"
        },
      },
      
      
      components: {
      
        MUIDataTableBodyCell: {
          styleOverrides:{
            root: {
                backgroundColor: "#F3F3F9",
               
            }
          }
        }
      },
    });

  // Function to toggle dropdown visibility and set selected row
  const toggleDropdown = (rowData) => {
    setIsDropdownOpen(!isDropdownOpen);
    setSelectedRow(rowData);
  };
  const handleDropdownItemClick = (action) => {
    console.log("Selected row data:", selectedRow);
    console.log("Selected action:", action);
    // Perform actions based on the selected row and action
    // For example: update, delete, or view
  };

   
                                    
  
    return (
      <>
      {renderTable && (
       <div>
       <button className='border border-black mx-2 px-5 mb-2 rounded-md hover:bg-[#F00000] hover:text-white hover:border-[#F00000] py-2' onClick={() => handleFilterChange('All')}>All</button>
       <button className='border border-black mx-2 px-5 mb-2 rounded-md hover:bg-[#F00000] hover:text-white hover:border-[#F00000] py-2' onClick={() => handleFilterChange('Pending')}>Pending</button>
       <button className='border border-black mx-2 px-5 mb-2 rounded-md hover:bg-[#F00000] hover:text-white hover:border-[#F00000] py-2' onClick={() => handleFilterChange('Reject')}>Rejected</button>
     </div>

      )

      }
        
        <div className=" shadow-md py-5 bg-[#F3F3F9] min-h-[50vh] flex justify-center  ">
          <div className="w-full max-w-[1100px] relative">
            <p className="text-[#F00000] cazelFont text-2xl font-bold">
              {tableLabel}
            </p>
            <ThemeProvider theme={getMuiTheme()}>
              <MUIDataTable data={filteredData} columns={columns} options={options} />
            </ThemeProvider>
            {isDropdownOpen && selectedRow && (
          <div className="absolute top-36 p-4   right-20 z-50 bg-white shadow-lg rounded-md mt-2">
            {/* Render dropdown options here based on the selected row data */}
            <ul className=''>
              <li  className='cursor-pointer hover:text-gray-500 mt-3' onClick={() =>    handleDropdownItemClick("Update")}>Update</li>
              <li className='cursor-pointer hover:text-gray-500 mt-3'  onClick={() =>   handleDropdownItemClick("Delete")}>Delete</li>
              <li  className='cursor-pointer hover:text-gray-500 mt-3' onClick={() =>   handleDropdownItemClick("View")}>View</li>
            </ul>
          </div>
        )} 
          </div>
        </div>
      </>
    );
  };

export default VendorTable