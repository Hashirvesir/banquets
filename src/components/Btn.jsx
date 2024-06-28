import React from "react";

const Btn = ({label}) => {
  return (
    <>
      <a href="" className="relative cazelFont inline-block px-4 py-2 font-medium group">
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1  border-2 border-[#F00000] rounded-md group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-[#F00000] rounded-md group-hover:bg-red-800"></span>
        <span className="relative tracking-widest text-white ">
          {label}
        </span>
      </a>
    </>
  );
};

export default Btn;
