const Banner = () => {
  return (
    <section className="w-full my-8 md:my-14 lg:my-16 px-3" data-aos="zoom-in">
      <div className="w-full overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl border border-purple-500/20 group transition-all duration-500 hover:border-purple-500/50 hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]">
        <img
          src="/Mohit-Anand-Full-Stack-Developer-Banner.png"
          alt="Mohit Anand - Full Stack Developer (Frontend-Focused) Banner"
          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.015]"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Banner;
