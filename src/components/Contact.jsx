import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative container border-t-2 mt-20 pt-20 lg:flex justify-center items-center "
    >
      <h1 className="text-3xl lg:text-9xl text-slate-500 mr-5">CONTACT US</h1>
      <div className="flex flex-col">
        <h1 className="text-3xl lg:text-5xl text-slate-900">EMAIL</h1><h1 className=" text-3xl lg:text-5xl text-red-500">care@ravian.ai</h1>
      </div>
    </section>
  );
};

export default Contact;
