
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Online Consultation", href: "#consultation" },
    { name: "Contact Us", href: "#contact" },
  ];

  const services = [
    "Pain Management",
    "Sports Injury Rehabilitation",
    "Orthopedic Physiotherapy",
    "Posture Correction",
    "Neurological Rehabilitation",
    "Geriatric Physiotherapy",
    "Post-Surgical Rehabilitation",
    "Exercise Therapy",
  ];

  return (
    <footer id="footer" className="bg-[#102F4A] text-white pt-20 pb-8">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 pb-16">

          {/* Brand */}
          <div>
            <a href="#home" className="inline-block mb-6">
              <h2 className="text-3xl font-semibold tracking-tight">
                AAROGYA
              </h2>
              <p className="text-[9px] tracking-[3px] text-slate-300 mt-2">
                 PHYSIOTHERAPY
              </p>
            </a>

            <p className="text-slate-300 text-sm leading-7 max-w-xs">
              Helping you move better, recover stronger and live healthier
              through personalized, professional online physiotherapy care.
            </p>

            <div className="flex items-center gap-3 mt-7">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#153A5B] transition-all duration-300"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://wa.me/9779867667790"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#153A5B] transition-all duration-300"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-7">Quick Links</h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group text-sm text-slate-300 hover:text-white transition-colors duration-300 inline-flex items-center gap-2"
                  >
                    {link.name}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-7">Our Services</h3>

            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-slate-300 hover:text-white transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-7">Get in Touch</h3>

            <div className="space-y-6">

              <a
                href="mailto:aakritipdl359@gmail.com"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 shrink-0 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#153A5B] transition-all">
                  <Mail size={17} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">Email Address</p>
                  <p className="text-sm text-slate-200 break-all group-hover:text-white">
                    aakritipdl359@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+9779867667790"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 shrink-0 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#153A5B] transition-all">
                  <Phone size={17} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">Phone / WhatsApp</p>
                  <p className="text-sm text-slate-200 group-hover:text-white">
                    +977 9867667790
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-white/10 flex items-center justify-center">
                  <MapPin size={17} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">Location</p>
                  <p className="text-sm text-slate-200">Pokhara, Nepal</p>
                </div>
              </div>
            </div>

            <a
              href="#appointment"
              className="inline-flex items-center gap-3 mt-8 bg-white text-[#153A5B] px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#DCE7F0] transition-all duration-300"
            >
              Book a Consultation
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Consultation Pricing */}
        <div className="border-t border-white/15 border-b py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Online Consultation
              </h3>
              <p className="text-sm text-slate-300">
                Professional physiotherapy guidance, wherever you are.
              </p>
            </div>

            <div className="flex flex-wrap gap-8">
              <div>
                <p className="text-xs text-slate-400 mb-1">Nepal</p>
                <p className="text-xl font-semibold">NPR 700</p>
                <p className="text-xs text-slate-400">45 minutes</p>
              </div>

              <div>
                <p className="text-xs text-slate-400 mb-1">International</p>
                <p className="text-xl font-semibold">USD $10</p>
                <p className="text-xs text-slate-400">45 minutes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-xs text-slate-400 text-center md:text-left">
            © {new Date().getFullYear()} AAROGYA PHYSIOTHERAPY. All rights reserved.
          </p>

          <p className="text-xs text-slate-400 text-center">
            NHPC Licensed Physiotherapist · Pokhara, Nepal
          </p>

          <a
            href="#home"
            className="text-xs text-slate-300 hover:text-white transition-colors inline-flex items-center gap-2"
          >
            Back to top
            <ArrowUpRight size={14} />
          </a>
        </div>

      </div>
    </footer>
  );
}
