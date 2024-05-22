import React from "react";

const Vision = () => {
  return (
    <section id="vision" className="container border-t-2 mt-20 pt-20 pb-10 mb-10 ">
      <h1 className="h1 text-9xl pb-10 ">OUR VISION!!!</h1>
      <div className="flex w-full ">
        <div className=" h3 w-1/2 text-justify " >
          We blend cutting-edge AI with human innovation, redefining the future
          of data science and unlocking limitless possibilities.
          <h3 className="text-3xl font-light mt-10">
            We develop AI-driven solutions to tackle complex business challenges
            and foster a profound understanding of the data shaping our world.
            Our vision is a future where advanced data analytics empower every
            organization to innovate, make smarter decisions, and drive
            meaningful progress.
          </h3>
        </div>
        <div >
            <video src="/AI_voice.mp4" autoPlay loop muted className="w-full h-full ml-10 rounded-xl"></video>
        </div>
      </div>
    </section>
  );
};

export default Vision;
