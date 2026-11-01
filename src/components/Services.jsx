
import {
  Activity,
  Dumbbell,
  Bone,
  PersonStanding,
  HeartPulse,
  Accessibility,
  Stethoscope,
  ArrowUpRight,
} from "lucide-react";

import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      number: "01",
      icon: Activity,
      title: "Pain Management",
      description:
        "Effective physiotherapy approaches to manage back pain, neck pain, joint pain and musculoskeletal discomfort while improving everyday movement.",
    },
    {
      number: "02",
      icon: Dumbbell,
      title: "Sports Injury Rehabilitation",
      description:
        "Specialized rehabilitation for sports injuries, muscle strains and ligament injuries, helping athletes regain strength and return to activity safely.",
    },
    {
      number: "03",
      icon: Bone,
      title: "Orthopedic Physiotherapy",
      description:
        "Treatment and rehabilitation for bone, muscle and joint conditions, including fractures, arthritis and musculoskeletal disorders.",
    },
    {
      number: "04",
      icon: PersonStanding,
      title: "Posture Correction",
      description:
        "Personalized corrective exercises to improve posture, body alignment, flexibility and movement patterns.",
    },
    {
      number: "05",
      icon: HeartPulse,
      title: "Neurological Rehabilitation",
      description:
        "Specialized rehabilitation to improve mobility, coordination, balance and functional independence for individuals with neurological conditions.",
    },
    {
      number: "06",
      icon: Accessibility,
      title: "Geriatric Physiotherapy",
      description:
        "Age-specific physiotherapy focused on improving strength, balance, mobility and independence in older adults.",
    },
    {
      number: "07",
      icon: Stethoscope,
      title: "Post-Surgical Rehabilitation",
      description:
        "Structured rehabilitation following surgery to restore joint mobility, muscle strength and functional movement.",
    },
    {
      number: "08",
      icon: Activity,
      title: "Exercise Therapy",
      description:
        "Customized therapeutic exercise programs to improve strength, flexibility, endurance, coordination and overall physical function.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-[#F5F7FA] py-24 lg:py-32"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-[#7996AF]" />

            <p className="text-xs tracking-[3px] uppercase text-[#7996AF] font-semibold">
              Our Expertise
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#153A5B] font-medium leading-tight">
            Specialized care.
            <br />
            <span className="italic font-normal text-[#829DB5]">
              Personalized recovery.
            </span>
          </h2>

          <p className="mt-7 text-slate-500 leading-8 text-base lg:text-lg">
            Comprehensive physiotherapy services designed
            around your individual needs. From pain management
            to rehabilitation, every step focuses on helping
            you move better and live stronger.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group bg-white border border-slate-200/70 rounded-2xl p-7 hover:bg-[#153A5B] hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-950/10 transition-all duration-500"
              >
                {/* Number and Icon */}
                <div className="flex items-center justify-between mb-10">
                  <span className="text-sm tracking-widest text-[#9AAFC1] group-hover:text-blue-200">
                    {service.number}
                  </span>

                  <div className="w-12 h-12 rounded-xl bg-[#EDF2F7] flex items-center justify-center group-hover:bg-white/10 transition">
                    <Icon
                      size={23}
                      strokeWidth={1.5}
                      className="text-[#315D80] group-hover:text-white"
                    />
                  </div>
                </div>

                {/* Service Details */}
                <h3 className="text-xl font-semibold text-[#153A5B] group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-500 group-hover:text-blue-100/80 leading-7 mt-4 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Arrow */}
                <div className="mt-8 flex justify-end">
                  <div className="w-10 h-10 rounded-full border border-slate-200 group-hover:border-white/30 flex items-center justify-center transition">
                    <ArrowUpRight
                      size={18}
                      className="text-[#315D80] group-hover:text-white"
                    />
                  </div>
                </div>

              </motion.div>
            );
          })}

        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-[#153A5B] rounded-2xl px-8 py-12 lg:px-14 lg:py-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">

          <div>
            <p className="text-xs tracking-[3px] uppercase text-blue-200 mb-4">
              Begin your recovery journey
            </p>

            <h3 className="text-3xl lg:text-4xl text-white font-medium">
              Your health. Your movement. Your journey.
            </h3>

            <p className="text-blue-100/70 mt-4 max-w-xl leading-7">
              Let's work together towards better mobility,
              improved strength and a healthier lifestyle.
            </p>
          </div>

          <a
            href="#appointment"
            className="inline-flex items-center gap-3 bg-white text-[#153A5B] px-7 py-4 rounded-full text-sm font-semibold hover:bg-blue-50 transition whitespace-nowrap"
          >
            Book an Appointment
            <ArrowUpRight size={18} />
          </a>

        </div>

      </div>
    </section>
  );
}
