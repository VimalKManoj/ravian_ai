import React from "react";
import { Boxes } from "./BackgroundBoxes";
import { cn } from "../utils/cn";

const Offering = () => {
  return (
    <>
      <section id="offerings">
        <div className="container mt-20 pt-20  border-t border-black "><h2 className="h2 mb-10 text-9xl"> WHAT WE OFFER?</h2></div>
        <div class="container grid grid-cols-3 gap-4">
        
          <div class="col-span-2 ... relative h-[30rem] text-color-8 rounded-lg flex flex-col overflow-hidden ">
            <div className="h-full relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
              <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

              <Boxes />
              <h1
                className={cn("md:text-4xl text-xl text-white relative z-20")}
              ></h1>
              <h1 className="bg-white rounded-md text-slate-900 font-semibold p-2 m-4 h-10 w-10 text-center  z-10">
              01
            </h1>
              <h3 className="h2 pb-3 z-10">AI Data Analyst</h3>
              <p className="text-justify text-xl w-full flex justify-center items-center z-10 p-16 text-color-8">
                Unleash the true power of your data with RAVIAN AI’s Data
                Analyst—an advanced, intelligent platform that turns raw data
                into valuable, actionable insights. Equipped with the latest
                machine learning algorithms and state-of-the-art technologies,
                our AI Data Analyst delivers unparalleled precision, speed, and
                depth in data analysis, interpretation, and visualization.
              </p>
            </div>
          </div>
          <div class="... bg-slate-500 m-2  bg-slate-900/90 text-color-8 rounded-lg flex flex-col overflow-hidden ">
            <img src="/analysis.gif" className="h-full w-full "/>
          </div>
          <div class="... bg-slate-500 m-2 rounded-lg">
            <video src="/AI.mp4" autoPlay muted loop className="w-full h-full object-cover rounded-lg"/>
          </div>
          <div class="relative col-span-2 ...relative h-[30rem]  bg-slate-900/90 text-color-8 rounded-lg flex flex-col overflow-hidden">
          <div className="h-full relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
              <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

              <Boxes />
              <h1
                className={cn("md:text-4xl text-xl text-white relative z-20")}
              ></h1>
              <h1 className="bg-slate-50 rounded-md text-slate-900 font-semibold p-2 m-4 h-10 w-10 text-center z-10 ">
              02
            </h1>
            <h3 className="h2 pb-3 z-10"> Gen AI Vision Analyst</h3>
            <p className="text-justify text-xl w-full flex justify-center items-center z-10 p-16 ">
              RAVIAN AI proudly presents the Gen AI Vision Analyst—a
              groundbreaking solution that redefines the standards of visual
              intelligence and data analysis. This next-generation platform
              leverages cutting-edge technology to deliver unparalleled
              accuracy, speed, and insight in visual data processing.
            </p>
            </div>
            
           
          </div>
        </div>
      </section>
    </>
  );
};

export default Offering;
