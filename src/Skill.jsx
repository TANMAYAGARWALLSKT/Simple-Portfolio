import React from "react";
function Skill() {
  return (
    <div className="h-auto w-full my-3  ">
      {" "}
      <div className="mx-auto  lg:w-[60%] border-2 rounded-ss-md p-4 rounded-ee-md  border-white/10">
        <h1 className=" text-[#D6CE9D]  text-4xl font-bold pb-5 "> Skill</h1>
        <div className=" text-[#D6CE9D] /40 text-md ">
          <span className=" text-[#D6CE9D] /70 text-xl  pr-2 font-semibold ">
            Frontend Development :
          </span>{" "}
          React, HTML, CSS, Tailwind JavaScript
        </div>
        <div className=" text-[#D6CE9D] /40 text-md ">
          <span className=" text-[#D6CE9D] /70  text-xl pr-2 font-semibold ">
            Ecosystem :
          </span>{" "}
          JavaScript, Vercel
        </div>
        <div className=" text-[#D6CE9D] /40 text-md ">
          <span className=" text-[#D6CE9D] /70 text-xl  pr-2 font-semibold ">
            Animations & Interactions :
          </span>{" "}
          Locomotive, GSAP, Framer Motion
        </div>
      </div>
    </div>
  );
}
export default Skill;
