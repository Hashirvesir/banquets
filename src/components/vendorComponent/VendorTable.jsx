"use client"
import React from "react";
import MUIDataTable from "mui-datatables";
import { ThemeProvider, createTheme } from "@mui/material";

const VendorTable = () => {
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
  const data = [
    {
      id: "1",
      banquest: "Elegence banquet",
      location: "saddar",
      datetime: "2024-02-24",
      member: "1000",
      amount: "70000",
      status: "paid",
    },
    {
      id: "2",
      banquest: "Elegence banquet",
      location: "nazimabad",
      datetime: "2022-02-24",
      member: "1000",
      amount: "70000",
      status: "paid",
    },
    {
      id: "3",
      banquest: "Elegence banquet",
      location: "saddar",
      datetime: "2023-02-24 12:31:29",
      member: "1000",
      amount: "70000",
      status: "paid",
    },
    {
      id: "4",
      banquest: "Elegence banquet",
      location: "nazimabad",
      datetime: "2023-05-24 12:31:29",
      member: "1000",
      amount: "70000",
      status: "paid",
    },
    {
      id: "5",
      banquest: "Elegence banquet",
      location: "saddar",
      datetime: "2023-04-24 12:31:29",
      member: "1000",
      amount: "70000",
      status: "paid",
    },
    {
      id: "6",
      banquest: "Elegence banquet",
      location: "nazimabad",
      datetime: "2023-03-24 12:31:29",
      member: "1000",
      amount: "70000",
      status: "paid",
    },
    {
      id: "7",
      banquest: "Elegence banquet",
      location: "saddar",
      datetime: "2024-01-24 12:31:29",
      member: "1000",
      amount: "70000",
      status: "10% paid",
    },
    {
      id: "8",
      banquest: "Elegence banquet",
      location: "nazimabad",
      datetime: "2024-01-24 12:31:29",
      member: "1000",
      amount: "70000",
      status: "paid",
    },
    {
      id: "9",
      banquest: "Elegence banquet",
      location: "saddar",
      datetime: "2024-01-24 12:31:29",
      member: "1000",
      amount: "70000",
      status: "10% paid",
    },
    {
      id: "10",
      banquest: "Elegence banquet",
      location: "saddar",
      datetime: "2024-04-24 12:31:29",
      member: "1000",
      amount: "70000",
      status: "10% paid",
    },
    {
      id: "11",
      banquest: "Elegence banquet",
      location: "nazimabad",
      datetime: "2024-04-24 12:31:29",
      member: "1000",
      amount: "70000",
      status: "paid",
    },
    {
      id: "12",
      banquest: "Elegence banquet",
      location: "saddar",
      datetime: "2024-04-24 12:31:29",
      member: "1000",
      amount: "70000",
      status: "10% paid",
    },
  ];
  const options = {
    selectableRows: false,
    elevation: 0,
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 20, 30, 1000],
    print: false, // Disable printer option
    download: false,
    checkbox:false,
    viewColumns: false,
  };
  const getMuiTheme = () =>
    createTheme({
      overrides: {
        MuiTableHead: {
            root: {
                backgroundColor: "#c1e1ec"
            }
        }
    },

      typography: {
        fontFamily: "sans-serif",
      },
      palette: {
        background: {
          paper:"#F4F5EF"
        },
      },
      
      
      components: {
      
        MUIDataTableBodyCell: {
          styleOverrides:{
            root: {
                backgroundColor: "#F4F5EF",
               
            }
          }
        }
      },
    });

  return (
    <>
      <div className=" shadow-md py-5 bg-[#F4F5EF] min-h-[50vh] flex justify-center  ">
        <div className="w-full max-w-[1100px]">
          <p className="text-[#F00000] cazelFont text-3xl font-bold">
            Recent Booking
          </p>
          <ThemeProvider theme={getMuiTheme()}>
            <MUIDataTable data={data} columns={columns} options={options} />
          </ThemeProvider>
        </div>
      </div>
    </>
  );
};

export default VendorTable;
