
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Online Consultation", href: "#consultation" },
    { name: "Contact Us", href: "#contact" },
    
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/70">
      <nav className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 h-24 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="flex flex-col shrink-0"
        >
          <span className="text-2xl font-semibold tracking-tight text-[#153A5B]">
            AAROGYA
          </span>

          <span className="text-[9px] tracking-[3px] text-slate-500 mt-1">
             PHYSIOTHERAPY
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-[#153A5B] transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Booking Button */}
        <a
          href="#appointment"
          className="hidden lg:inline-flex items-center gap-3 bg-[#153A5B] text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-[#244F73] transition-all duration-300"
        >
          Book a Session
          <ArrowUpRight size={17} />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-[#153A5B]"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={27} /> : <Menu size={27} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-6 py-7 shadow-lg">
          <div className="flex flex-col gap-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-slate-700 hover:text-[#153A5B] transition-colors"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#appointment"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#153A5B] text-white text-center py-4 rounded-full hover:bg-[#244F73] transition-all"
            >
              Book a Session
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
