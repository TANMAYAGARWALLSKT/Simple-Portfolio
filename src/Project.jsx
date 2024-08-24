import { motion } from "framer-motion";
import React from "react";
function Project() {
  const Project = [ {
      ProjectName: "Group 3 CTS ",
      Description:
        "I developed a dynamic web application for exploring creative thinking strategies using HTML, CSS, JavaScript, GSAP, and Tailwind CSS. The app features interactive exercises like mind mapping and SCAMPER, with smooth animations powered by GSAP. Tailwind CSS was utilized to create a responsive and modern UI, while JavaScript enabled seamless interaction. This project highlights my ability to combine front-end technologies to build engaging and educational web experiences.",
      DemoLink: "https://group3cts.vercel.app/",
      CodeLink: "https://github.com/TANMAYAGARWALLSKT/nehul",
    },
    {
      ProjectName: "Bubble Game",
      Description:
        "In this Bubble Game, the player's goal is to click on the correct number from a group of bubbles displayed on the screen. A random target number is generated at the top, and the player must find and click the matching number among the bubbles below.",
      DemoLink: "https://bubble-game-three-iota.vercel.app/main.html",
      CodeLink: "https://github.com/TANMAYAGARWALLSKT/BubbleGame",
    },
    {
      ProjectName: "SaaS App ",
      Description:
        "This SaaS application is designed to help users efficiently manage their financial data, including tracking income, expenses, total income, total cash in, and cash out. With a user-friendly interface and robust backend, users can seamlessly monitor their financial activities and export their data to Excel for further analysis or record-keeping.",
      DemoLink: "https://manage-income-exp-mmbd.vercel.app/User",
      CodeLink: "https://github.com/TANMAYAGARWALLSKT/Manage-Income---Exp",
    },
   
  ];
  //   Demo: [Link] | Code: [GitHub Link]

  return (
    <div className="h-auto w-full my-3  ">
      {" "}
      <div className=" h-auto mx-auto  lg:w-[60%]  text-white border-2  border-white/10 rounded-ss-md p-4 rounded-ee-md  ">
        <div className="text-white text-4xl font-bold pb-5">My Projects</div>
        <hr className="mb-5"></hr>
        {Project.map((items, index) => {
          return (
            <>
              <div className=" flex flex-col relative">
                <h1 className="text-4xl text-white font-semibold pb-2">
                  {items.ProjectName}
                </h1>

                <p className=" text-sm text-white/50">{items.Description}</p>
                <hr className="mt-2" />

                <span className=" w-full  flex  flex-col-reverse justify-end content-end ">
                  <a
                    className="text-red-200  w-auto h-auto flex justify-end "
                    href={items.DemoLink}
                  >
                    Demo
                  </a>{" "}
                  <a
                    className="text-green-200 w-auto h-auto flex justify-end "
                    href={items.CodeLink}
                  >
                    Code Link
                  </a>{" "}
                </span>
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
}
export default Project;
