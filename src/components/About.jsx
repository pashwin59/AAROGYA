
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const highlights = [
    "Personalized treatment plans",
    "Patient-centered approach",
    "Evidence-based rehabilitation",
    "Focus on long-term recovery",
  ];

  return (
    <section
      id="about"
      className="bg-white py-16 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-16">

        {/* Section Heading */}
        <div className="mb-12 md:mb-16">
          <p className="text-xs tracking-[3px] uppercase text-[#7996AF] font-semibold mb-4">
            Get to know your physiotherapist
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#153A5B] font-medium leading-tight">
            Care that understands.
            <br />
            <span className="italic font-normal text-[#829DB5]">
              Recovery that empowers.
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full pb-12 sm:pb-10 lg:pb-0"
          >
            {/* Decorative Circle */}
            <div className="absolute -top-5 -left-5 w-40 h-40 bg-[#E8EEF4] rounded-full -z-10" />

            {/* Main Image */}
            <div className="h-[380px] sm:h-[450px] lg:h-[580px] overflow-hidden rounded-2xl">
              <img
                src="/images/cc.png"
                alt="Physiotherapy treatment"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Commitment Card */}
            <div className="absolute bottom-0 right-2 sm:right-4 lg:-bottom-6 lg:-right-5 bg-[#153A5B] text-white p-5 sm:p-7 rounded-xl w-[220px] sm:max-w-[230px] shadow-xl">
              <p className="text-sm text-blue-200">
                A commitment to
              </p>

              <h3 className="text-xl sm:text-2xl font-medium mt-2 leading-snug">
                Better movement.
                Better living.
              </h3>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm tracking-[2px] uppercase text-[#7996AF] font-semibold mb-5">
              About the physiotherapist
            </p>

            <h3 className="text-3xl lg:text-4xl text-[#153A5B] font-medium leading-tight">
              Helping you move freely and live confidently.
            </h3>

            <p className="mt-6 md:mt-7 text-slate-500 leading-8">
              Physiotherapy is more than treating pain.
              It is about understanding each individual's
              needs, restoring movement and improving
              quality of life.
            </p>

            <p className="mt-5 text-slate-500 leading-8">
              My approach focuses on personalized care,
              evidence-based treatment and helping every
              individual work towards their recovery goals.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-5 mt-8 md:mt-9">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={19}
                    className="text-[#7996AF] shrink-0"
                  />

                  <span className="text-sm text-[#153A5B]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-3 mt-9 md:mt-11 bg-[#153A5B] text-white px-7 py-4 rounded-full text-sm hover:bg-[#244F73] transition"
            >
              Get in Touch
              <ArrowUpRight size={17} />
            </a>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
