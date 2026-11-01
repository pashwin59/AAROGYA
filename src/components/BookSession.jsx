
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarCheck,
  Video,
  ShieldCheck,
} from "lucide-react";

export default function BookSession() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden bg-[#153A5B] rounded-[28px] px-8 py-16 md:px-14 lg:px-20 lg:py-20"
        >

          {/* Decorative Circles */}
          <div className="absolute -top-32 -right-20 w-96 h-96 rounded-full border border-white/10" />

          <div className="absolute -bottom-40 right-40 w-96 h-96 rounded-full border border-white/10" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div>
              <p className="text-xs tracking-[3px] uppercase text-blue-200 font-semibold mb-6">
                Take the First Step
              </p>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight">
                Your journey to
                <br />
                <span className="italic text-[#A9C2D8]">
                  better movement
                </span>
                <br />
                starts here.
              </h2>

              <p className="text-blue-100/75 leading-8 mt-7 max-w-lg">
                Don't let pain or limited mobility hold you back.
                Connect with Aakriti Poudel for personalized
                online physiotherapy guidance.
              </p>

              {/* Booking Button */}
              <a
                href="#appointment"
                className="inline-flex items-center gap-3 mt-10 bg-white text-[#153A5B] px-8 py-4 rounded-full font-semibold text-sm hover:bg-[#EAF0F5] hover:-translate-y-1 transition-all duration-300 shadow-xl"
              >
                Book Your Session
                <ArrowUpRight size={19} />
              </a>

              <p className="text-xs text-blue-200/70 mt-5">
                Online consultations available worldwide.
              </p>
            </div>

            {/* Right Benefits */}
            <div className="space-y-5">

              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <Video size={26} className="text-white" />
                </div>

                <div>
                  <h3 className="text-white font-semibold text-lg">
                    Online Consultation
                  </h3>
                  <p className="text-blue-100/70 text-sm mt-1">
                    Professional guidance from anywhere.
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <CalendarCheck size={26} className="text-white" />
                </div>

                <div>
                  <h3 className="text-white font-semibold text-lg">
                    Convenient Scheduling
                  </h3>
                  <p className="text-blue-100/70 text-sm mt-1">
                    Request a session at your preferred time.
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <ShieldCheck size={26} className="text-white" />
                </div>

                <div>
                  <h3 className="text-white font-semibold text-lg">
                    Personalized Care
                  </h3>
                  <p className="text-blue-100/70 text-sm mt-1">
                    Treatment guidance tailored to your needs.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
