import React from "react";
import SectionHeading from "../common/Heading/SectionHeading";
import { motion } from "framer-motion";

const Workplace = () => {
  // Professional workspace stats
  const stats = [
    { value: "50+", label: "Active Projects", icon: "/ActiveProjects.png" },
    { value: "24/7", label: "Creative Flow", icon: "/CreativeFlow.png" },
    { value: "100%", label: "Focus Mode", icon: "/FocusMode.png" },
  ];

  // Workspace features based on your setup
  const workspaceFeatures = [
    {
      title: "AI-Powered Development",
      description: "Integrated AI Gallery for intelligent coding assistance",
      icon: "/AIPoweredDevelopment.png",
    },
    {
      title: "Streamlined Workflow",
      description: "Projects, Themes, and Content management at your fingertips",
      icon: "/StreamlinedWorkflow.png",
    },
    {
      title: "Version Control Ready",
      description: "Dashboard v1.2 configurations optimized for deployment",
      icon: "/VersionControlReady.png",
    },
  ];

  return (
    <div
      id="Workplace"
      className="p-3 mt-32 custom-shadow3 rounded-3xl workplace h-fit md:my-44 lg:p-10 bg-black/60"
    >
      {/* Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center my-10 mx-auto w-[96%] lg:w-[50%] mb-14"
      >
        <SectionHeading text={"My Workspace"} />

        <p className="text-lg md:text-xl text-gray-300 lg:text-2xl leading-relaxed mt-4">
          Where creativity meets code. This is the powerhouse where I architect
          <span className="text-white font-semibold">
            {" "}
            high-performance applications
          </span>{" "}
          and push the boundaries of{" "}
          <span className="text-purple-400">modern web technology</span>.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mb-16"
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="custom-shadow2 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-4 md:p-6 text-center border border-white/10 hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="text-3xl md:text-[4xl] mb-2 flex justify-center items-center">
              {stat.icon.endsWith(".png") ? (
                <img
                  src={stat.icon}
                  alt={stat.label}
                  className="w-18 h-18 md:w-20 md:h-20 object-contain"
                />
              ) : (
                stat.icon
              )}
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
            <div className="text-lg text-gray-400 mt-1">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Image Container */}
      <div className="relative flex justify-center items-center w-full max-w-6xl mx-auto group">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative rounded-[2rem] md:rounded-[4rem] p-[2px] 
          bg-gradient-to-br from-purple-500/40 via-pink-500/30 to-blue-500/40"
        >
          {/* Glass Layer */}
          <div className="relative rounded-[2rem] md:rounded-[4rem] bg-black/40 backdrop-blur-xl p-2 custom-shadow">
            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4 }}
              src="/pc1.png"
              alt="My Workplace Setup"
              className="w-full h-full object-cover rounded-[1.8rem] md:rounded-[3.8rem]"
            />

            {/* Glow Hover Effect */}
            <div className="absolute inset-0 rounded-[2rem] md:rounded-[4rem] opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-500/10"></div>
          </div>
        </motion.div>

        {/* Floating Tag */}
        <motion.div
          initial={{ x: 120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="absolute -bottom-6 right-4 md:right-10 
          bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full 
          border border-white/20 animate-bounce shadow-lg block"
        >
          <span className="text-white  text-lg md:text-xl font-medium flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Optimized for Productivity
          </span>
        </motion.div>
      </div>

      {/* Workspace Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="mt-20 max-w-6xl mx-auto"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-12">
          Professional <span className="text-purple-400">Setup Highlights</span>
        </h3>

        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workspaceFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br custom-shadow2 from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-4">
                {feature.icon.endsWith(".png") ? (
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-20 h-20 object-contain"
                  />
                ) : (
                  feature.icon
                )}
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
              <p className="text-gray-400 text-lg leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  );
};

export default Workplace;