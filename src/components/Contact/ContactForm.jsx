import React, { useState } from "react";
import SectionHeading from "../common/Heading/SectionHeading";
import Button from "../common/Buttons/Button";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  User,
  Briefcase,
  MessageSquare,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";

const ContactForm = () => {
  const [status, setStatus] = useState("idle"); // 'idle' | 'submitting' | 'success' | 'error'
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmailToClipboard = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("anandmohit744@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const formData = new FormData(e.target);
      const response = await fetch("https://formspree.io/f/xpzvpoeo", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="Contact" className="w-full my-24 md:my-36 px-3">
      {/* Section Heading & Subtitle */}
      <center className="my-10 mx-auto w-[96%] lg:w-[60%]" data-aos="zoom-in">
        <SectionHeading text={"Get In Touch"} />
        <p className="text-xl md:text-2xl text-gray-300 leading-[1.7] mt-4">
          Have an exciting project, full-time role, or innovative idea in mind?
          Let’s discuss how we can build high-performance software together.
        </p>
      </center>

      <div
        data-aos="fade-up"
        className="w-[96%] lg:w-[92%] xl:w-[88%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-stretch"
      >
        {/* Left Column: Direct Connect & Details */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] custom-shadow bg-[#080810ab] backdrop-blur-md border border-white/10">
          <div>
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm md:text-base font-semibold mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></span>
              <span>Available for New Projects</span>
            </div>

            <h3 className="text-2xl md:text-3xl lg:text-[2.6rem] font-bold text-white leading-[1.3] mb-4">
              Let’s create something <span className="highLight-text">remarkable</span>.
            </h3>

            <p className="text-lg md:text-xl text-gray-300 leading-[1.7] mb-8">
              Whether you need scalable SaaS architecture, frontend performance
              optimization, or full stack feature engineering, feel free to drop
              me a message.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4 mb-8">
              {/* Email Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex items-center justify-between group">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shrink-0">
                    <Mail size={22} className="text-purple-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-gray-400 text-sm md:text-base font-medium">Email Me Directly</p>
                    <a
                      href="mailto:anandmohit744@gmail.com"
                      className="text-white hover:text-purple-400 text-base md:text-xl font-semibold truncate block transition-colors"
                    >
                      anandmohit744@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={copyEmailToClipboard}
                  title="Copy email to clipboard"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-purple-500/20 border border-white/10 text-gray-300 hover:text-white transition-all shrink-0 ml-2"
                >
                  {copiedEmail ? (
                    <Check size={18} className="text-green-400" />
                  ) : (
                    <Copy size={18} />
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-blue-500/40 transition-all duration-300 flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                    <Phone size={22} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm md:text-base font-medium">Phone / WhatsApp</p>
                    <a
                      href="tel:+918521227434"
                      className="text-white hover:text-blue-400 text-base md:text-xl font-semibold block transition-colors"
                    >
                      +91 8521227434
                    </a>
                  </div>
                </div>
              </div>

              {/* Location & Timezone */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center shrink-0">
                  <MapPin size={22} className="text-pink-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm md:text-base font-medium">Location & Work Mode</p>
                  <p className="text-white text-base md:text-xl font-semibold">
                    India • Remote Globally
                  </p>
                </div>
              </div>

              {/* Response Time */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-green-500/20 border border-green-500/30 flex items-center justify-center shrink-0">
                  <Clock size={22} className="text-green-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm md:text-base font-medium">Response Time</p>
                  <p className="text-white text-base md:text-xl font-semibold">
                    Within 24 Hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links Footer */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap gap-3">
            <a
              href="https://topmate.io/mohit_anand_developer"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-300 hover:text-white text-base md:text-lg font-medium transition-all flex items-center gap-2"
            >
              <span>1:1 Mentorship / Call</span>
              <ExternalLink size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohit-anand-developer"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white text-base md:text-lg font-medium transition-all flex items-center gap-2"
            >
              <span>LinkedIn</span>
              <ExternalLink size={16} />
            </a>
            <a
              href="https://github.com/mohitanand744"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white text-base md:text-lg font-medium transition-all flex items-center gap-2"
            >
              <span>GitHub</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7 p-6 sm:p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] custom-shadow bg-[#080810ab] backdrop-blur-md border border-white/10 flex flex-col justify-center">
          {status === "success" ? (
            <div className="text-center py-12 px-4 space-y-6" data-aos="zoom-in">
              <div className="w-20 h-20 mx-auto rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center">
                <CheckCircle2 size={44} className="text-green-400" />
              </div>

              <h4 className="text-3xl md:text-4xl font-bold text-white">
                Message Sent Successfully!
              </h4>

              <p className="text-xl md:text-2xl text-gray-300 leading-[1.7] max-w-lg mx-auto">
                Thank you for reaching out, Mohit has received your message and will
                get back to you shortly at the email address provided.
              </p>

              <div className="pt-4 flex justify-center">
                <Button
                  text="Send Another"
                  onClick={() => setStatus("idle")}
                  className="w-[50%] sm:w-[40%] md:w-[35%]"
                />
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-white/10 pb-4 mb-6">
                <h4 className="text-2xl md:text-3xl lg:text-[2.6rem] font-bold text-white leading-[1.3]">
                  Send Me a Message
                </h4>
                <p className="text-base md:text-xl text-gray-400 mt-1">
                  Fill out the form below and I'll respond as soon as possible.
                </p>
              </div>

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-base md:text-xl font-semibold text-gray-300 flex items-center gap-2">
                    <User size={18} className="text-purple-400" />
                    <span>Your Name <span className="text-pink-500">*</span></span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. John Doe"
                    className="w-full px-6 py-4 md:py-5 text-lg md:text-2xl rounded-2xl md:rounded-3xl bg-white/[0.04] border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:bg-white/[0.07] focus:ring-4 focus:ring-purple-500/20 transition-all duration-300"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-base md:text-xl font-semibold text-gray-300 flex items-center gap-2">
                    <Mail size={18} className="text-blue-400" />
                    <span>Your Email <span className="text-pink-500">*</span></span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 md:py-5 text-lg md:text-2xl rounded-2xl md:rounded-3xl bg-white/[0.04] border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:bg-white/[0.07] focus:ring-4 focus:ring-purple-500/20 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Subject / Purpose */}
              <div className="space-y-2">
                <label className="text-base md:text-xl font-semibold text-gray-300 flex items-center gap-2">
                  <Briefcase size={18} className="text-pink-400" />
                  <span>Subject / Purpose <span className="text-pink-500">*</span></span>
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="e.g. Project Inquiry, Hiring, Full Stack Opportunity..."
                  className="w-full px-6 py-4 md:py-5 text-lg md:text-2xl rounded-2xl md:rounded-3xl bg-white/[0.04] border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:bg-white/[0.07] focus:ring-4 focus:ring-purple-500/20 transition-all duration-300"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-base md:text-xl font-semibold text-gray-300 flex items-center gap-2">
                  <MessageSquare size={18} className="text-purple-400" />
                  <span>Your Message <span className="text-pink-500">*</span></span>
                </label>
                <textarea
                  name="message"
                  required
                  rows="6"
                  placeholder="Tell me about your project scope, timeline, requirements, or what you'd like to collaborate on..."
                  className="w-full px-6 py-4 md:py-5 text-lg md:text-2xl rounded-2xl md:rounded-3xl bg-white/[0.04] border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:bg-white/[0.07] focus:ring-4 focus:ring-purple-500/20 transition-all duration-300 resize-none leading-[1.6]"
                ></textarea>
              </div>

              {/* Error Notice if failed */}
              {status === "error" && (
                <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-red-300 text-base md:text-lg">
                  <AlertCircle size={22} className="text-red-400 shrink-0" />
                  <span>
                    Oops! Something went wrong submitting the form. Please try
                    again or email me directly at{" "}
                    <a
                      href="mailto:anandmohit744@gmail.com"
                      className="underline font-semibold"
                    >
                      anandmohit744@gmail.com
                    </a>
                    .
                  </span>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-4 flex justify-start">
                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  text={status === "submitting" ? "Sending..." : "Submit"}
                  className="w-[45%] sm:w-[35%] md:w-[30%]"
                />
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
