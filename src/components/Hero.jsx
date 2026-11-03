
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#F5F7FA] pt-24 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-16 lg:py-20 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <span className="w-10 h-px bg-[#7996AF]"></span>

            <p className="text-xs tracking-[3px] uppercase font-medium text-[#6685A2]">
              Your journey to better movement
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[82px] font-medium tracking-tight leading-[1.08] text-[#153A5B]">
            Adding Life 
            <br />
            To{" "}
            <span className="italic font-normal text-[#829DB5]">
              Days.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 text-base lg:text-lg text-slate-500 leading-8 max-w-xl">
Looking for professional physiotherapy in Pokhara? 
At AAROGYA PHYSIOTHERAPY, we provide personalized, evidence-based care to 
help you overcome pain, restore mobility and get back to living an active, healthier life.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#appointment"
              className="inline-flex items-center gap-3 bg-[#153A5B] text-white px-7 py-4 rounded-full font-medium text-sm hover:bg-[#244F73] transition-all duration-300 shadow-lg shadow-blue-950/10"
            >
              Book an Appointment
              <ArrowUpRight size={18} />
            </a>

            <a
              href="#services"
              className="inline-flex items-center gap-2 text-[#153A5B] font-medium text-sm hover:text-[#7996AF] transition"
            >
              Explore Services
              <ArrowRight size={17} />
            </a>
          </div>

          {/* Bottom Information */}
          <div className="mt-16 pt-8 border-t border-slate-200 grid grid-cols-3 gap-5">

            <div>
              <h3 className="text-xl lg:text-2xl font-semibold text-[#153A5B]">
                Personal
              </h3>
              <p className="text-xs text-slate-500 mt-2">
                Individual attention
              </p>
            </div>

            <div>
              <h3 className="text-xl lg:text-2xl font-semibold text-[#153A5B]">
                Focused
              </h3>
              <p className="text-xs text-slate-500 mt-2">
                Tailored treatment
              </p>
            </div>

            <div>
              <h3 className="text-xl lg:text-2xl font-semibold text-[#153A5B]">
                Holistic
              </h3>
              <p className="text-xs text-slate-500 mt-2">
                Patient-centred care
              </p>
            </div>

          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Background Decoration */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#DCE6EF] rounded-full blur-3xl opacity-70"></div>

          {/* Main Image */}
          <div className="relative h-[460px] sm:h-[540px] lg:h-[620px] w-full overflow-hidden rounded-t-[220px] rounded-b-2xl shadow-xl">

            <img
  src="/images/aa.png"
  alt="Physiotherapist providing knee rehabilitation treatment"
  className="w-full h-full object-cover object-center"
/>

            <div className="absolute inset-0 bg-gradient-to-t from-[#153A5B]/20 to-transparent"></div>
          </div>

          {/* Floating Information Card */}
          <div className="absolute bottom-8 -left-4 sm:-left-8 bg-white p-6 rounded-2xl shadow-xl max-w-[240px]">
            <div className="w-10 h-1 bg-[#7996AF] mb-4"></div>

            <h3 className="text-[#153A5B] font-semibold text-lg">
              Personalized care.
            </h3>

            <p className="text-sm text-slate-500 mt-2 leading-6">
              Every recovery journey is unique. Your treatment should be too.
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
