import React from "react";
function Study() {
  return ( 
    <div className=" h-auto  w-full flex  my-3  ">
      <div className="border-2 rounded-ss-md rounded-ee-md  border-white/10 lg:w-[60%] h-auto  text-[#D6CE9D]  p-4  mx-auto ">
        <h1 className=" text-[#D6CE9D]  text-4xl font-bold pb-5"> About Me </h1>
        <div className="font-light  text-[#D6CE9D] /50">
          <span className="font-semibold  text-[#D6CE9D] /70">
            Hey there! I'm Tanmay Agarwal, a passionate and dedicated computer
            nerd from Agra, India.
          </span>{" "}
          My journey in the world of technology started early, and I've been
          hooked ever since.
          <span className="font-semibold  text-[#D6CE9D] /70">
            {" "}
            With a strong foundation in web development, I specialize in
            creating dynamic and interactive user experiences that leave a
            lasting impression.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Study;
