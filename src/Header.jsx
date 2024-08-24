import React from "react";
import { motion } from "framer-motion";
import { IoPerson } from "react-icons/io5";

function Header() {
  return (
    <div className=" h-auto w-full my-3    flex  ">
      <div className="border-2 border-white/10 p-4   lg:w-[60%] flex flex-wrap sm:items-center gap-32 justify-between  text-[#D6CE9D]   rounded-ss-md rounded-ee-md mx-auto  ">
        <div className="md:w-full lg:w-auto sm:w-full  flex justify-center bg-white ">
          {/* <img className="md:w-full lg:w-24 sm:w-full  h-auto  " src=""></img> */}
          <IoPerson className="md:w-full lg:w-24 sm:w-full  h-auto " />
        </div>
        <div className="flex flex-col   justify-end items-end flex-wrap ">
          <span className="text-3xl relative font-bold  text-[#D6CE9D] /80 ">
            <span className="bg-green-500 glow absolute -right-2 glow  -top-2  w-3 h-3 rounded-full" />
            <span className="  w-3 h-3 rounded-full"></span>
            Tanmay Agarwal
          </span>

          <span className="text-sm   text-[#D6CE9D] /80 ">
            Manipal University Jaipur : Bca
          </span>
          <span className="text-sm relative  font-semibold  text-[#D6CE9D] /80 ">
            Agra, India
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
