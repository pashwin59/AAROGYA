
import { motion } from "framer-motion";

import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  MessageCircle,
  Award,
} from "lucide-react";

export default function Contact() {
  const contactDetails = [
    {
      icon: Mail,
      label: "Email Address",
      value: "aakritipdl359@gmail.com",
      href: "mailto:aakritipdl359@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone / WhatsApp",
      value: "+977 9867667790",
      href: "tel:+9779867667790",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pokhara, Nepal",
      href: "https://www.google.com/maps/search/?api=1&query=Pokhara%2C+Nepal",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-[#F5F7FA] py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">

        {/* Section Heading */}
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
              Get in Touch
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#153A5B] font-medium leading-tight">
            Let's start your
            <br />
            <span className="italic font-normal text-[#829DB5]">
              recovery journey.
            </span>
          </h2>

          <p className="mt-6 text-slate-500 leading-8 text-base lg:text-lg">
            Have questions about physiotherapy or need
            professional guidance? Get in touch and take
            the first step towards better movement.
          </p>
        </motion.div>

        {/* Main Contact Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Physiotherapist Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-[#DCE6EF] rounded-full -z-10" />

            <div className="relative h-[480px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl">

              <img
                src="./public/images/cc.png"
                alt="Physiotherapist professional portrait"
                className="w-full h-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#153A5B]/80 via-transparent to-transparent" />

              {/* Image Information */}
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">

                <p className="text-blue-200 text-xs tracking-[3px] uppercase mb-3">
                  Your Physiotherapist
                </p>

                <h3 className="text-3xl lg:text-4xl text-white font-medium">
                  Aakriti Poudel
                </h3>

                <p className="text-blue-100 mt-3 text-sm">
                  NHPC Licensed Physiotherapist
                </p>

                <div className="flex items-center gap-2 mt-5 text-white/90 text-sm">
                  <MapPin size={17} />
                  Pokhara, Nepal
                </div>

              </div>
            </div>

            {/* Qualification Card */}
            <div className="absolute -bottom-5 -right-3 md:-right-6 bg-white rounded-xl p-5 shadow-xl flex items-center gap-4">

              <div className="w-12 h-12 bg-[#EDF2F7] rounded-xl flex items-center justify-center">
                <Award size={25} className="text-[#315D80]" />
              </div>

              <div>
                <p className="text-sm font-semibold text-[#153A5B]">
                  Licensed Professional
                </p>

                <p className="text-xs text-slate-500 mt-1">
                  NHPC Registered Physiotherapist
                </p>
              </div>

            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <p className="text-xs tracking-[3px] uppercase text-[#7996AF] font-semibold mb-5">
              Contact Information
            </p>

            <h3 className="text-3xl lg:text-4xl text-[#153A5B] font-medium leading-tight">
              Connect with your physiotherapist.
            </h3>

            <p className="text-slate-500 leading-8 mt-6">
              Whether you have questions about online
              consultations, treatment options or appointments,
              Aakriti is here to help you take the next step.
            </p>

            {/* Contact Details */}
            <div className="mt-10 space-y-7">

              {contactDetails.map((item, index) => {
                const Icon = item.icon;

                return (
                  <a
                    key={index}
                    href={item.href}
                    target={item.label === "Location" ? "_blank" : undefined}
                    rel={item.label === "Location" ? "noreferrer" : undefined}
                    className="group flex items-center gap-5"
                  >
                    <div className="w-14 h-14 shrink-0 rounded-xl bg-white border border-slate-200 flex items-center justify-center group-hover:bg-[#153A5B] transition-all duration-300">

                      <Icon
                        size={22}
                        className="text-[#315D80] group-hover:text-white transition"
                      />

                    </div>

                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider">
                        {item.label}
                      </p>

                      <p className="text-base font-medium text-[#153A5B] mt-1 group-hover:text-[#7996AF] transition">
                        {item.value}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="ml-auto text-slate-400 group-hover:text-[#153A5B]"
                    />

                  </a>
                );
              })}

            </div>

            {/* Action Buttons */}
            <div className="mt-12 flex flex-wrap gap-4">

              <a
                href="https://wa.me/9779867667790"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-[#153A5B] text-white px-7 py-4 rounded-full text-sm font-medium hover:bg-[#244F73] transition"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
                <ArrowUpRight size={17} />
              </a>

              <a
                href="mailto:aakritipdl359@gmail.com"
                className="inline-flex items-center gap-3 border border-[#153A5B] text-[#153A5B] px-7 py-4 rounded-full text-sm font-medium hover:bg-[#153A5B] hover:text-white transition"
              >
                <Mail size={18} />
                Send Email
              </a>

            </div>

          </motion.div>
        </div>

{/* Professional Highlights */}
<div className="grid grid-cols-3 gap-3 mt-9 mb-10">

  <div className="border-l-2 border-[#7996AF] pl-3">
    <h4 className="text-3xl font-semibold text-[#153A5B]">
      100+
    </h4>
    <p className="text-xs text-slate-500 mt-2 leading-5">
      Clients Treated
    </p>
  </div>

  <div className="border-l-2 border-[#7996AF] pl-3">
    <h4 className="text-3xl font-semibold text-[#153A5B]">
      1:1
    </h4>
    <p className="text-xs text-slate-500 mt-2 leading-5">
      Personalized Attention
    </p>
  </div>

  <div className="border-l-2 border-[#7996AF] pl-3">
    <h4 className="text-3xl font-semibold text-[#153A5B]">
      NHPC
    </h4>
    <p className="text-xs text-slate-500 mt-2 leading-5">
      Licensed Professional
    </p>
  </div>

</div>

{/* Treatment Approach */}
<div className="bg-white border border-slate-200 rounded-xl p-6 mb-9">

  <h4 className="text-lg font-semibold text-[#153A5B] mb-5">
    Committed to Your Recovery
  </h4>

  <div className="grid sm:grid-cols-2 gap-4">

    {[
      "Personalized treatment plans",
      "Evidence-based physiotherapy",
      "Pain management and rehabilitation",
      "Individual recovery guidance",
      "Mobility and strength improvement",
      "Patient-centered care",
    ].map((item) => (
      <div
        key={item}
        className="flex items-center gap-3 text-sm text-slate-600"
      >
        <span className="w-2 h-2 rounded-full bg-[#7996AF] shrink-0" />
        {item}
      </div>
    ))}

  </div>
</div>


        {/* Bottom CTA */}
        <div className="mt-28 bg-[#153A5B] rounded-2xl px-8 py-12 lg:px-14 lg:py-14 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">

          <div>
            <p className="text-xs tracking-[3px] uppercase text-blue-200 mb-4">
              Your health matters
            </p>

            <h3 className="text-3xl lg:text-4xl text-white font-medium">
              Ready to move better?
            </h3>

            <p className="text-blue-100/70 mt-4 leading-7">
              Book your personalized online physiotherapy session today.
            </p>
          </div>

          <a
            href="#appointment"
            className="inline-flex items-center gap-3 bg-white text-[#153A5B] px-8 py-4 rounded-full text-sm font-semibold hover:bg-blue-50 transition whitespace-nowrap"
          >
            Book an Appointment
            <ArrowUpRight size={18} />
          </a>

        </div>

      </div>
      
    </section>
  );
}
