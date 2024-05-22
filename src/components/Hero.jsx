import React from "react";
import Grid from "../assets/svg/Grid";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { motion } from "framer-motion";
import Data from "../assets/svg/Data";

const Hero = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.section
      className="relative container snap-center"
      variants={container}
      initial="hidden"
      animate="visible"
      id="hero"
    >
      <Grid />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="container flex flex-col justify-center items-center h1 font-mono  w-full xl:h-[22rem]"
      >
        <h1 className=" bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 lg:mt-14 xl:mt-0  to-neutral-800 xl:text-[170px] lg:text-[140px] text-[90px] z-40  py-10 font-semibold ">
          RAVIAN AI<span className="text-[170px]  text-red-500 pb-10">.</span>
        </h1>
        <h2 className="text-[24px] font-grotesk font-light ">
          Turn data into decisions , With our{" "}
          <span className="text-red-500">AI Data Scientist</span>
        </h2>
      </motion.div>
      <motion.div
        variants={item}
        className=" container flex flex-col lg:flex-row justify-around flex-1 w-full lg:mt-10 xl:mt-0  rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-2"
      >
        <motion.div
          variants={item}
          className="hidden relative rounded-md lg:h-[18rem] xl:h-[22rem] lg:w-[22rem] mx-2 lg:flex justify-start items-end "
        >
          <button className="bg-red-500 m-2 w-[9rem] h-[2.5rem] rounded-xl text-white hover:bg-white hover:border-2 hover:border-black hover:text-black ">
            Try Ravian
            <ArrowRightIcon />
          </button>
          <h2 className="bg-slate-100/60 p-4 border rounded-md absolute -top-12 text-[22px] font-grotesk font-light w-[14rem]">
            Unlock the power of
            <span className="text-red-500"> AI </span>
            data tools
          </h2>
        </motion.div>
        <motion.div
          variants={item}
          className="relative rounded-md bg-slate-200 h-[16rem] xl:h-[22rem]  lg:w-[22rem]  mx-2 overflow-hidden  border-2 border-white"
        >
          <img
            src="/graph.jpg"
            className="rounded-md object-cover w-full h-full hover:scale-110 transition-transform cursor-pointer"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/80 lg:p-15 pointer-events-none">
            <h4 className="text-sm -mb-6  text-white font-grotesk">
              An intelligent platform designed to transform raw data into
              actionable insights.
            </h4>
          </div>
        </motion.div>
        <motion.div
          variants={item}
          className="relative rounded-md bg-gradient-to-b from-[#dedef5] to-[#f1f3e9] h-[18rem] xl:h-[22rem] lg:w-[22rem]  mx-2 overflow-hidden border-2 border-white"
        >
          <h4 className="text-lg -mb-6 p-3  text-black font-grotesk">
            Solution with <span className="text-red-500 font-bold">GenAI </span>
          </h4>

          {/* <img
            src="/database.png"
            className="absolute -right-20 bottom-20 h-[14rem] "
          /> */}
          <Data />
          <h4 className="absolute bottom-10 text-lg -mb-6 p-3  text-black font-grotesk z-30">
            Analyze, interpret, and visualize data with precision and speed.
          </h4>
        </motion.div>
        <motion.div
          variants={item}
          className="relative rounded-md bg-slate-700/40 xl:h-[22rem] h-[18rem] lg:w-[22rem]  mx-2 flex justify-between items-end border-2 border-white backdrop-blur-sm"
        >
          <video loop muted autoPlay src="preview.mp4" className="w-full h-full object-cover rounded-md "/>
          <h4 className="absolute bottom-36 right-2 text-lg -mb-6 p-3  text-white font-grotesk z-30">
            Deep data imputation
          </h4>
          <button  className="absolute m-2 bg-slate-500 w-[8rem] h-[2.5rem] rounded-xl text-white hover:bg-white hover:border-2 hover:border-black hover:text-black">
            Read more
          </button>
         
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
