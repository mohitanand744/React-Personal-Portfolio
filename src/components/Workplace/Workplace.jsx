import React from "react";
import SectionHeading from "../common/Heading/SectionHeading";
import { motion } from "framer-motion";
import { Code2, BrainCircuit, Database, Terminal, Cpu } from "lucide-react";

const Workplace = () => {
  // Professional workspace stats
  const stats = [
    { value: "50+", label: "Active Projects", icon: "/ActiveProjects.png" },
    { value: "24/7", label: "Creative Flow", icon: "/CreativeFlow.png" },
    { value: "100%", label: "Focus Mode", icon: "/FocusMode.png" },
    { value: "Local", label: "AI Models", iconComponent: <Cpu className="w-14 h-14 md:w-16 md:h-16 text-purple-400" /> },
    { value: "API", label: "First Design", iconComponent: <Database className="w-14 h-14 md:w-16 md:h-16 text-blue-400" /> },
  ];

  // Workspace features based on your setup
  const workspaceFeatures = [
    {
      title: "Local AI Development",
      description: "VS Code + Continue + Ollama workflow for AI-assisted coding, debugging, architecture reviews, and development productivity.",
      iconComponent: <Code2 className="w-12 h-12 md:w-14 md:h-14 text-blue-400" />,
    },
    {
      title: "AI-Assisted Engineering",
      description: "Using local coding models for backend reviews, SQL optimization, refactoring, documentation, and scalable development workflows.",
      iconComponent: <BrainCircuit className="w-12 h-12 md:w-14 md:h-14 text-purple-400" />,
    },
    {
      title: "Scalable Backend Workflow",
      description: "Building modular Node.js + MySQL architecture with migration systems, API-first design, and production-focused backend structure.",
      iconComponent: <Database className="w-12 h-12 md:w-14 md:h-14 text-green-400" />,
    },
    {
      title: "Modern Developer Tooling",
      description: "Git, CLI workflows, local AI models, deployment tools, scalable project structures, and productivity-focused engineering setup.",
      iconComponent: <Terminal className="w-12 h-12 md:w-14 md:h-14 text-pink-400" />,
    },
  ];

  return (
    <div
      id="Workplace"
      className="p-3 mt-16 rounded-3xl workplace h-fit md:my-44 lg:p-10"
    >
      <div className="mx-auto lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
        {/* Left Column: Heading, Stats, and Features */}
        <div className="order-1 lg:order-1">
          {/* Heading Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-left mb-14"
          >
            <SectionHeading text={"My Workspace"} />

            <p className="text-lg md:text-xl text-gray-300 lg:text-3xl leading-relaxed mt-4">
              Where creativity meets scalable architecture. This is the setup where I build
              <span className="text-white font-semibold">
                {" "}
                high-performance applications
              </span>{" "}
              and leverage a{" "}
              <span className="text-purple-400">modern AI-assisted engineering workflow</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="custom-shadow2 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-4 md:p-6 text-center border border-white/10 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="text-3xl md:text-[4xl] mb-2 flex justify-center items-center">
                  {stat.iconComponent ? (
                    stat.iconComponent
                  ) : (
                    <img
                      src={stat.icon}
                      alt={stat.label}
                      className="w-14 h-14 md:w-16 md:h-16 object-contain"
                    />
                  )}
                </div>
                <div className="text-xl md:text-2xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-base text-2xl md:text-2xl text-gray-300 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Workspace Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-left text-white mb-8">
              Professional <span className="text-purple-400">Setup Highlights</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {workspaceFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-gradient-to-br custom-shadow2 from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="shrink-0 flex justify-center items-center">
                    {feature.iconComponent ? (
                      feature.iconComponent
                    ) : (
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="w-12 h-12 md:w-14 md:h-14 object-contain"
                      />
                    )}
                  </div>
                  <div>
                    <h4 className="text-2xl border-b pb-3 mb-4 border-gray-400/50 font-semibold text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-300 text-base md:text-xl leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Image Container */}
        <div className="order-2 lg:order-2 mt-20 lg:mt-0 lg:sticky lg:top-40">
          <div className="relative flex justify-center items-center w-full group">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative rounded-[2rem] md:rounded-[3rem] p-[2px] 
              bg-gradient-to-br from-purple-500/40 via-pink-500/30 to-blue-500/40"
            >
              {/* Glass Layer */}
              <div className="relative rounded-[2rem] md:rounded-[3rem] bg-black/40 backdrop-blur-xl p-2 custom-shadow">
                <motion.img
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.4 }}
                  src="/pc1.png"
                  alt="My Workplace Setup"
                  className="w-full h-auto object-cover rounded-[1.8rem] md:rounded-[2.8rem]"
                />

                {/* Glow Hover Effect */}
                <div className="absolute inset-0 rounded-[2rem] md:rounded-[3rem] opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-500/10"></div>
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
              <span className="text-white text-lg md:text-xl font-medium flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Local AI Powered Setup
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workplace;