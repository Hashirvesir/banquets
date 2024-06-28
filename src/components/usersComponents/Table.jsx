"use client"
import React, { useState } from 'react';
import MUIDataTable from "mui-datatables";
import { ThemeProvider, createTheme } from "@mui/material";
import moment from 'moment';

const Table = () => {
  const columns = [
    {name:"banquest",
    label:"Banquest Name",
      options:{
          customBodyRender:(value)=><p className="capitalize">{value}</p>
      }
  },
    {name:"location",
    label:"Location",

  },
    {name:"datetime",
    label:"Date & Time"
  },
    {name:"member",
      label: " Members"
  },
    {name:"amount",
      label:"Amount"
    },
    {name:"status",
    label: "Status",
    options:{
      customBodyRender:(value)=><p className={`px-3 py-1 rounded-full text-white inline-block ${value === "paid" ? 'bg-red-500' : 'bg-[#F07300]'}`}>
        {value}</p>
    }
  },

  ];
  const [data, setData] = useState( [
    {
      id: "1",
      banquest: "Elegence banquet",
      location: "saddar",
      datetime: "2024-02-24 12:31:29",
      member: "1000",
      amount: "70000",
      status: "paid",
    },
    {
      id: "2",
      banquest: "Elegence banquet",
      location: "nazimabad",
      datetime: "2024-02-24 12:31:29",
      member: "1000",
      amount: "70000",
      status: "paid",
    },
    {
      id: "3",
      banquest: "Elegence banquet",
      location: "saddar",
      datetime: "2024-02-24 12:31:29",
      member: "1000",
      amount: "70000",
      status: "paid",
    },
    {
      id: "4",
      banquest: "Elegence banquet",
      location: "nazimabad",
      datetime: "2024-02-24 12:31:29",
      member: "1000",
      amount: "70000",
      status: "paid",
    },
    {
      id: "5",
      banquest: "Elegence banquet",
      location: "saddar",
      datetime: "2024-02-24 12:31:29",
      member: "1000",
      amount: "70000",
      status: "paid",
    },
    {
      id: "6",
      banquest: "Elegence banquet",
      location: "nazimabad",
      datetime: "2024-02-24 12:31:29",
      member: "1000",
      amount: "70000",
      status: "paid",
    },
    {
      id: "7",
      banquest: "Elegence banquet",
      location: "saddar",
      datetime: "2024-02-24 12:31:29",
      member: "1000",
      amount: "70000",
      status: "10% paid",
    },
    {
      id: "8",
      banquest: "Elegence banquet",
      location: "nazimabad",
      datetime: "2024-02-24 12:31:29",
      member: "1000",
      amount: "70000",
      status: "paid",
    },
    {
      id: "9",
      banquest: "Elegence banquet",
      location: "saddar",
      datetime: "2024-02-24 12:31:29",
      member: "1000",
      amount: "70000",
      status: "10% paid",
    },
    {
      id: "10",
      banquest: "Elegence banquet",
      location: "saddar",
      datetime: "2024-02-24 12:31:29",
      member: "1000",
      amount: "70000",
      status: "10% paid",
    },
    {
      id: "11",
      banquest: "Elegence banquet",
      location: "nazimabad",
      datetime: "2024-02-24 12:31:29",
      member: "1000",
      amount: "70000",
      status: "paid",
    },
    {
      id: "12",
      banquest: "Elegence banquet",
      location: "saddar",
      datetime: "2024-02-24 12:31:29",
      member: "1000",
      amount: "70000",
      status: "10% paid",
    },
    {
      id: "13",
      banquest: "Snow banquet",
      location: "saddar",
      datetime: "2024-03-24 12:31:29",
      member: "1000",
      amount: "70000",
      status: "10% paid",
    }
  ]);

  const [filteredData, setFilteredData] = useState(data);

  const filterPastBookings = () => {
      const currentDate = moment();
      const filtered = data.filter(booking => {
          const bookingDate = moment(booking.datetime, 'YYYY-MM-DD HH:mm:ss');
          const monthsDiff = currentDate.diff(bookingDate, 'months');
          return monthsDiff >= 1; // Filter past bookings for 1 month
      });
      setFilteredData(filtered);
  };

  const filterRecentBookings = () => {
      // Filter recent bookings (not past and not advance)
      const currentDate = moment();
      const filtered = data.filter(booking => {
          const bookingDate = moment(booking.datetime, 'YYYY-MM-DD HH:mm:ss');
          const monthsDiff = currentDate.diff(bookingDate, 'months');
          return monthsDiff < 1; // Filter recent bookings (within 1 month)
      });
      setFilteredData(filtered);
  };

  const filterAdvanceBookings = () => {
      // Filter advance bookings (paid with 10%)
      const filtered = data.filter(booking => booking.status === '10% paid');
      setFilteredData(filtered);
  };


  const options = {
    selectableRows: false,
    elevation: 0,
    rowsPerPage: 10,
    rowsPerPageOptions: [5, 10, 20, 30, 1000],
    print: false, // Disable printer option
    download: false,
    checkbox:false,
    viewColumns: false,
    filter:false,
  };
  const getMuiTheme = () =>
    createTheme({
      typography: {
        fontFamily: "sans-serif",
      },
      palette: {
        background: {
          paper: "#F4F5EF",
        },
      },
      
      components: {
        MuiTableCell: {
          styleOverrides: {
            head: {
              color:"#F00000",
              
              
            },
            body: {
              padding: "7px 15px",
             
              
            },
          },
        },
      },
    });

  return (
    <>
      <div className="bg-[#F4F5EF] py-5  min-h-screen flex justify-center  ">
        <div>
          
        </div>
        <div className="w-full max-w-[1100px]">
          <p className="text-[#F00000] cazelFont text-3xl font-bold">
            Authors Table
          </p>
          <div className='flex gap-1 mt-4 flex-wrap'>
          <button onClick={filterPastBookings} className='hover:bg-[#F00000] transition-colors ease-in-out delay-300  bg-white   text-black  hover:text-white px-2.5 py-2.5 f rounded-md text-sm hover:bg-[#f00222d6] '>Past Booking</button><br />
            <button onClick={filterRecentBookings} className='hover:bg-[#F00000] transition-colors ease-in-out delay-300 bg-white   text-black hover:text-white  px-2.5 py-2.5 rounded-md text-sm hover:bg-[#f00222c4] '>Recent Booking</button><br />
            <button onClick={filterAdvanceBookings} className='hover:bg-[#F00000] transition-colors ease-in-out delay-300 bg-white  hover:border-none  text-black hover:text-white  px-2.5 py-2.5 rounded-md text-sm hover:bg-[#f00222ce] '>Advance Booking</button>
          </div>
          <ThemeProvider theme={getMuiTheme()}>
            <MUIDataTable data={filteredData} columns={columns} options={options} />
          </ThemeProvider>

          
        </div>
      </div>
    </>
  );
};

export default Table;
