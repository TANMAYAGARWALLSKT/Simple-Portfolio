import React from "react";
function Contect() {
  return (
    <div className="h-auto w-full my-3 ">
      <div className="mx-auto my-auto lg:w-[60%] border-2   p-4 border-white/10  text-[#D6CE9D]   ">
        <div className=" font-bold text-4xl   mx-auto pb-4 my-auto">
          Contact
        </div>
        <div className="text-lg font-semibold  text-[#D6CE9D] ">
          {" "}
          Feel free to reach out to me for collaborations or just to chat about
          tech!
        </div>
        <div className=" text-[#D6CE9D] ">
          <a href="http://mail.google.com/mail/tanmaylsktagarwal.1025@gmail.com">
            {" "}
            Email: tanmaylsktagarwal.1025@gmail.com
          </a>{" "}
        </div>
        <div className=" text-[#D6CE9D] /50">
          LinkedIn: [Your LinkedIn Profile]{" "}
        </div>{" "}
        <div className=" text-[#D6CE9D] /50">GitHub: [Your GitHub Profile]</div>
      </div>
    </div>
  );
}
export default Contect;
