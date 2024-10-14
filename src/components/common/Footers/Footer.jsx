import React from "react";

const Footer = () => {
  const scrollToSection = (id) => {
    setTimeout(() => {
      const section = document.getElementById(id);
      if (!section) return;
      const yOffset = -160; // Height of the navbar
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }, 100);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Working on this....");
  };
  return (
    <footer>
      <div className="footer-content custom-shadow rounded-t-[2rem] text-white text-center w-full h-fit grid grid-cols-1 md:grid-cols-12 p-8 items-center py-20 gap-16">
        <div className="md:col-span-5 flex items-center justify-center xxl:justify-start w-full gap-5 flex-wrap sm:gap-16">
          <div className="custom-shadow max-w-[13rem] max-h-[13rem] md:max-w-[15rem] md:max-h-[15rem] rounded-full p-4">
            <img
              className=" w-full h-full object-cover rounded-full"
              src="/footer1.jpg"
              alt=""
            />
          </div>

          <div className="subscription-form flex flex-col gap-4">
            <p className="text-xl md:text-2xl">
              Stay updated with my blogs and tech news:
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex justify-center flex-wrap relative  gap-4"
            >
              <input
                type="text"
                placeholder="Inter Your Email..."
                className="w-full outline-none border-b-[1px] border-slate-500 py-6 px-6  backdrop-blur-sm bg-black/80  custom-shadow2 text-xl rounded-[5rem] relative"
              />
              <img
                className="w-[4rem] absolute right-2 top-2"
                src="https://img.icons8.com/bubbles/100/news.png"
                alt="news"
              />
              <button
                type="submit"
                className="custom-shadow2 px-6 py-4 text-xl rounded-[2rem]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <nav className="flex flex-col md:col-span-2 gap-2 text-xl md:text-2xl">
          <h2 className="highLight-text text-3xl">Insightful Links</h2>
          <p
            onClick={() => {
              alert("Working on it..");
            }}
            className={`cursor-pointer `}
          >
            Blogs
          </p>
          <p
            onClick={() => {
              alert("Working on it..");
            }}
            className={`cursor-pointer `}
          >
            Free Notes
          </p>
          <p
            onClick={() => {
              alert("Working on it..");
            }}
            className={`cursor-pointer `}
          >
            Tech News
          </p>
        </nav>

        <nav className="flex flex-col md:col-span-2 gap-2 text-xl md:text-2xl">
          <h2 className="highLight-text text-3xl">Links</h2>
          <p
            onClick={() => {
              scrollToSection("About");
            }}
            className={`cursor-pointer `}
          >
            About
          </p>
          <p
            onClick={() => {
              scrollToSection("Skills");
            }}
            className={`cursor-pointer `}
          >
            Skills
          </p>
          <p
            onClick={() => {
              scrollToSection("Projects");
            }}
            className={`cursor-pointer `}
          >
            Projects
          </p>
          <p
            onClick={() => {
              scrollToSection("Experience");
            }}
            className={`cursor-pointer `}
          >
            Experience
          </p>
        </nav>

        <div className="flex md:col-span-3 gap-4 justify-center flex-col h-full items-center">
          <ul className="list-none flex flex-col gap-2 ">
            <h2 className="text-3xl highLight-text">Social Media</h2>
            <div className="flex">
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/mohit-anand-developer"
                >
                  {" "}
                  <img
                    className="hover:rotate-[360deg] transition-all duration-500 hover:scale-110 ease-linear w-[3.5rem] sm:w-[4rem] md:w-[4.3rem] "
                    src="/linkedin.png"
                    alt="icon"
                  />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/mohitanand744">
                  {" "}
                  <img
                    className="hover:rotate-[360deg] transition-all duration-500 hover:scale-110 ease-linear w-[3.5rem] sm:w-[4rem] md:w-[4.3rem] "
                    src="/github.png"
                    alt="icon"
                  />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.instagram.com/v3_beast_rider123/"
                >
                  {" "}
                  <img
                    className="hover:rotate-[360deg] transition-all duration-500 hover:scale-110 ease-linear w-[3.5rem] sm:w-[4rem] md:w-[4.3rem] "
                    src="insta.png"
                    alt="icon"
                  />{" "}
                </a>
              </li>
            </div>
          </ul>

          <div className="flex flex-col gap-3 text-xl md:text-2xl mt-5">
            <p>© 2024 Mohit. All rights reserved.</p>
            <p>Built with React and Tailwind CSS.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
