import React from "react";
import Button from "../common/Buttons/Button";

const ContactForm = () => {
  return (
    <div id="Contact" className="flex justify-center items-center mb-32">
      <form
        action="https://formspree.io/f/xpzvpoeo"
        method="POST"
        className="w-[55%] custom-shadow p-10 rounded-[2rem]"
      >
        <h2 className="text-center text-[4rem] font-bold highLight-text mb-8">
          Contact Me
        </h2>

        <div className="flex gap-4 mb-6">
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-[50%] p-5 px-7 text-2xl md:text-3xl rounded-[2.6rem] bg-transparent border border-gray-400 text-white  focus:outline-none"
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            required
            className="w-[50%] p-5 px-7 text-2xl md:text-3xl rounded-[2.6rem] bg-transparent border border-gray-400 text-white  focus:outline-none"
          />
        </div>

        <div className="mb-6">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full p-5 px-7 text-2xl md:text-3xl rounded-[2.6rem] bg-transparent border border-gray-400 text-white  focus:outline-none"
          />
        </div>

        <div className="mb-6">
          <textarea
            name="message"
            placeholder="Explain your query!?"
            className="w-full p-5 px-7 text-2xl md:text-3xl rounded-[2.6rem] bg-transparent border border-gray-400 text-white  focus:outline-none"
            rows="8"
            required
          ></textarea>
        </div>

        <div className="w-full mx-auto">
          <Button text={"Submit"} />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
