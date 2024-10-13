import React from "react";
import Button from "../common/Buttons/Button";

const ContactForm = () => {
  return (
    <form
      action="https://formspree.io/f/xpzvpoeo"
      method="POST"
      className="w-[96%] md:w-[55%] mx-auto my-32 custom-shadow p-8 rounded-[2rem]"
      id="Contact"
    >
      <h2 className="text-center text-[3rem] md:text-[4rem] font-bold highLight-text mb-8">
        Contact Me
      </h2>

      <div className="flex gap-4 mb-6">
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="w-[50%] p-5 px-7 text-xl md:text-3xl rounded-[2.6rem] bg-transparent border border-gray-400 text-white  focus:outline-none"
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          required
          className="w-[50%] p-5 px-7 text-xl md:text-3xl rounded-[2.6rem] bg-transparent border border-gray-400 text-white  focus:outline-none"
        />
      </div>

      <div className="mb-6">
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full p-5 px-7 text-xl md:text-3xl rounded-[2.6rem] bg-transparent border border-gray-400 text-white  focus:outline-none"
        />
      </div>

      <div className="mb-6">
        <textarea
          name="message"
          placeholder="Explain your query!?"
          className="w-full p-5 px-7 text-xl md:text-3xl rounded-[2.6rem] bg-transparent border border-gray-400 text-white  focus:outline-none"
          rows="8"
          required
        ></textarea>
      </div>

      <div className="w-full flex items-center justify-between  mx-auto">
        <Button text={"Submit"} />
        <div className="flex items-center gap-4">
          <p className="text-xl md:text-2xl highLight-text font-medium me-2">
            Let's Connect
          </p>
          <img
            className=" w-[0.7rem] h-[1.8rem] movingRight"
            src="/download.png"
          />
          <a
            target="_blank"
            href="https://www.linkedin.com/in/mohit-anand-developer"
          >
            {" "}
            <img
              className="hover:rotate-[360deg] transition-all duration-500 hover:scale-110 ease-linear w-[3.5rem] md:w-[4.5rem] "
              src="/linkedin.png"
              alt="icon"
            />
          </a>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
