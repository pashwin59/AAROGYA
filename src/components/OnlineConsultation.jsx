
import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  Video,
  CalendarDays,
  CheckCircle2,
  Globe,
  Send,
  ShieldCheck,
  LoaderCircle,
  ClipboardCheck,
} from "lucide-react";

import { motion } from "framer-motion";

export default function OnlineConsultation() {
  const [patientType, setPatientType] = useState("nepal");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const price =
    patientType === "nepal" ? "NPR 700" : "USD $10";

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    countryCode: "+977",
    phone: "",
    location: "",
    date: "",
    time: "",
    concern: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setStatus("");
  };

  // Submit booking request through EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const templateParams = {
        patient_name: formData.name,
        patient_age: formData.age,
        patient_email: formData.email,

        patient_phone: `${formData.countryCode} ${formData.phone}`,

        patient_location: formData.location,

        patient_type:
          patientType === "nepal"
            ? "Nepalese Patient"
            : "International Patient",

        consultation_price: price,
        consultation_duration: "45 Minutes",

        preferred_date: formData.date,
        preferred_time: formData.time,

        patient_concern: formData.concern,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");

      setFormData({
        name: "",
        age: "",
        email: "",
        countryCode: "+977",
        phone: "",
        location: "",
        date: "",
        time: "",
        concern: "",
      });

    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");

    } finally {
      setLoading(false);
    }
  };

  // Common input styling
  const inputClass =
    "w-full bg-[#F5F7FA] border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-[#153A5B] outline-none focus:border-[#6685A2] focus:ring-2 focus:ring-[#6685A2]/10 transition placeholder:text-slate-400";

  // Consultation steps
  const steps = [
    {
      icon: CalendarDays,
      title: "Book Your Session",
      description:
        "Choose your preferred date and time and submit your consultation request.",
    },
    {
      icon: Video,
      title: "Online Consultation",
      description:
        "Connect with your physiotherapist through a video consultation.",
    },
    {
      icon: ClipboardCheck,
      title: "Personalized Treatment",
      description:
        "Receive personalized exercise recommendations and rehabilitation guidance.",
    },
  ];

  const countries = [
    { code: "+977", label: "🇳🇵 +977 Nepal" },
    { code: "+91", label: "🇮🇳 +91 India" },
    { code: "+1", label: "🇺🇸 +1 USA / Canada" },
    { code: "+44", label: "🇬🇧 +44 UK" },
    { code: "+61", label: "🇦🇺 +61 Australia" },
    { code: "+971", label: "🇦🇪 +971 UAE" },
    { code: "+81", label: "🇯🇵 +81 Japan" },
    { code: "+49", label: "🇩🇪 +49 Germany" },
    { code: "+33", label: "🇫🇷 +33 France" },
    { code: "+65", label: "🇸🇬 +65 Singapore" },
    { code: "+974", label: "🇶🇦 +974 Qatar" },
    { code: "+966", label: "🇸🇦 +966 Saudi Arabia" },
    { code: "+94", label: "🇱🇰 +94 Sri Lanka" },
    { code: "+880", label: "🇧🇩 +880 Bangladesh" },
    { code: "+39", label: "🇮🇹 +39 Italy" },
    { code: "+34", label: "🇪🇸 +34 Spain" },
    { code: "+27", label: "🇿🇦 +27 South Africa" },
    { code: "+64", label: "🇳🇿 +64 New Zealand" },
  ];

  return (
    <section
      id="consultation"
      className="bg-white py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">

        {/* SECTION HEADING */}

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
               Physiotherapy
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#153A5B] font-medium leading-tight">
            Expert care.
            <br />

            <span className="italic font-normal text-[#829DB5]">
              Wherever you are.
            </span>
          </h2>

          <p className="mt-7 text-slate-500 leading-8 text-base lg:text-lg">
            Professional physiotherapy guidance from the
            comfort of your home. Book a personalized online
            consultation and take the first step towards
            better movement and recovery.
          </p>
        </motion.div>

        {/* PRICING SECTION */}

        <div className="grid md:grid-cols-2 gap-6 mb-24">

          {/* NEPAL */}

          <div
            className={`rounded-2xl p-8 lg:p-10 border transition-all duration-300 ${
              patientType === "nepal"
                ? "bg-[#153A5B] border-[#153A5B] text-white shadow-xl shadow-blue-950/10"
                : "bg-[#F5F7FA] border-slate-200 text-[#153A5B]"
            }`}
          >
            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">
                <Globe size={22} />

                <span className="text-sm font-medium">
                  Patients in Nepal
                </span>
              </div>

              {patientType === "nepal" && (
                <CheckCircle2 size={22} />
              )}
            </div>

            <h3 className="text-4xl lg:text-5xl font-semibold mt-9">
              NPR 700
            </h3>

            <p
              className={`mt-3 text-sm ${
                patientType === "nepal"
                  ? "text-blue-100"
                  : "text-slate-500"
              }`}
            >
              Per consultation / 45 minutes
            </p>

            <button
              type="button"
              onClick={() => setPatientType("nepal")}
              className={`mt-9 w-full py-4 rounded-full text-sm font-semibold transition ${
                patientType === "nepal"
                  ? "bg-white text-[#153A5B] hover:bg-blue-50"
                  : "bg-[#153A5B] text-white hover:bg-[#244F73]"
              }`}
            >
              Select Nepal Pricing
            </button>
          </div>

          {/* INTERNATIONAL */}

          <div
            className={`rounded-2xl p-8 lg:p-10 border transition-all duration-300 ${
              patientType === "international"
                ? "bg-[#153A5B] border-[#153A5B] text-white shadow-xl shadow-blue-950/10"
                : "bg-[#F5F7FA] border-slate-200 text-[#153A5B]"
            }`}
          >
            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">
                <Globe size={22} />

                <span className="text-sm font-medium">
                  International Patients
                </span>
              </div>

              {patientType === "international" && (
                <CheckCircle2 size={22} />
              )}
            </div>

            <h3 className="text-4xl lg:text-5xl font-semibold mt-9">
              USD $10
            </h3>

            <p
              className={`mt-3 text-sm ${
                patientType === "international"
                  ? "text-blue-100"
                  : "text-slate-500"
              }`}
            >
              Per consultation / 45 minutes
            </p>

            <button
              type="button"
              onClick={() => setPatientType("international")}
              className={`mt-9 w-full py-4 rounded-full text-sm font-semibold transition ${
                patientType === "international"
                  ? "bg-white text-[#153A5B] hover:bg-blue-50"
                  : "bg-[#153A5B] text-white hover:bg-[#244F73]"
              }`}
            >
              Select International Pricing
            </button>
          </div>

        </div>

        {/* BOOKING AREA */}

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* LEFT INFORMATION */}

          <div className="lg:col-span-2">

            <p className="text-xs tracking-[3px] uppercase text-[#7996AF] font-semibold mb-5">
              Simple & Convenient
            </p>

            <h3 className="text-3xl lg:text-4xl text-[#153A5B] font-medium leading-tight">
              Your recovery journey starts with a conversation.
            </h3>

            <p className="text-slate-500 leading-8 mt-6">
              Schedule your online consultation and discuss
              your concerns with a physiotherapist from
              wherever you are.
            </p>

            <div className="mt-10 space-y-8">

              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={index}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-[#EDF2F7] flex items-center justify-center">
                      <Icon
                        size={22}
                        className="text-[#315D80]"
                      />
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#153A5B]">
                        {step.title}
                      </h4>

                      <p className="text-sm text-slate-500 leading-6 mt-2">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}

            </div>

            <div className="mt-10 p-5 bg-[#F5F7FA] rounded-xl flex gap-3">
              <ShieldCheck
                size={23}
                className="text-[#6685A2] shrink-0"
              />

              <p className="text-sm text-slate-500 leading-6">
                Your personal information is used only to
                process your consultation request and
                contact you.
              </p>
            </div>

          </div>

          {/* RIGHT BOOKING FORM */}

          <div
            id="appointment"
            className="lg:col-span-3 bg-white border border-slate-200 rounded-2xl p-6 md:p-10 shadow-xl shadow-slate-200/40"
          >

            <div className="mb-9">

              <p className="text-xs tracking-[3px] uppercase text-[#7996AF] font-semibold">
                Online Appointment
              </p>

              <h3 className="text-3xl text-[#153A5B] font-medium mt-3">
                Book Your Consultation
              </h3>

              <p className="text-sm text-slate-500 mt-3">
                Please provide your details to request an online session.
              </p>

            </div>

            {/* PRICE SUMMARY */}

            <div className="bg-[#F5F7FA] rounded-xl p-5 mb-9 flex items-center justify-between gap-4">

              <div>
                <p className="text-xs text-slate-500">
                  Selected consultation
                </p>

                <p className="text-sm font-semibold text-[#153A5B] mt-2">
                  Online Physiotherapy
                </p>

                <p className="text-xs text-slate-500 mt-1">
                  45 minutes
                </p>
              </div>

              <div className="text-right">
                <p className="text-xs text-slate-500">
                  Session fee
                </p>

                <p className="text-2xl font-semibold text-[#153A5B] mt-1">
                  {price}
                </p>
              </div>

            </div>

            {/* FORM */}

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* FULL NAME */}

              <div>
                <label className="block text-sm font-medium text-[#153A5B] mb-2">
                  Full Name *
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={inputClass}
                  autoComplete="name"
                  required
                />
              </div>

              {/* AGE */}

              <div>
                <label className="block text-sm font-medium text-[#153A5B] mb-2">
                  Age *
                </label>

                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Enter your age"
                  min="1"
                  max="120"
                  className={inputClass}
                  required
                />
              </div>

              {/* EMAIL */}

              <div>
                <label className="block text-sm font-medium text-[#153A5B] mb-2">
                  Email Address *
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={inputClass}
                  autoComplete="email"
                  required
                />
              </div>

             {/* PHONE / WHATSAPP */}

<div>
  <label className="block text-sm font-medium text-[#153A5B] mb-2">
    Phone / WhatsApp *
  </label>

  <div className="grid grid-cols-[125px_minmax(0,1fr)] gap-3">

    {/* Country Code Dropdown */}
    <select
      name="countryCode"
      value={formData.countryCode}
      onChange={handleChange}
      className={`${inputClass} !w-full min-w-0 px-2 cursor-pointer`}
      aria-label="Country calling code"
      required
    >
      {countries.map((country) => (
        <option
          key={country.code}
          value={country.code}
        >
          {country.flag} {country.code}
        </option>
      ))}
    </select>

    {/* Phone Number Input */}
    <input
      type="tel"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      placeholder="Enter phone number"
      className={`${inputClass} !w-full min-w-0`}
      autoComplete="tel-national"
      required
    />

  </div>
</div>

              {/* PATIENT LOCATION */}

              <div>
                <label className="block text-sm font-medium text-[#153A5B] mb-2">
                  Patient Location *
                </label>

                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter your city and country"
                  className={inputClass}
                  autoComplete="country-name"
                  required
                />
              </div>

              {/* PATIENT CATEGORY */}

              <div>
                <label className="block text-sm font-medium text-[#153A5B] mb-2">
                  Patient Category *
                </label>

                <select
                  value={patientType}
                  onChange={(e) => {
                    setPatientType(e.target.value);
                    setStatus("");
                  }}
                  className={inputClass}
                  required
                >
                  <option value="nepal">
                    Nepal - NPR 700
                  </option>

                  <option value="international">
                    International - USD $10
                  </option>
                </select>
              </div>

              {/* DATE AND TIME */}

              <div className="grid md:grid-cols-2 gap-5">

                <div>
                  <label className="block text-sm font-medium text-[#153A5B] mb-2">
                    Preferred Date *
                  </label>

                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toLocaleDateString("en-CA")}
                    className={inputClass}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#153A5B] mb-2">
                    Preferred Time *
                  </label>

                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>

              </div>

              {/* PATIENT CONCERN */}

              <div>
                <label className="block text-sm font-medium text-[#153A5B] mb-2">
                  Tell us about your concern *
                </label>

                <textarea
                  name="concern"
                  value={formData.concern}
                  onChange={handleChange}
                  placeholder="Briefly describe your pain, injury or physiotherapy needs..."
                  rows={4}
                  className={`${inputClass} resize-none`}
                  required
                />
              </div>

              {/* SUCCESS MESSAGE */}

              {status === "success" && (
                <div
                  role="status"
                  className="bg-green-50 border border-green-200 text-green-700 rounded-xl p-4 text-sm"
                >
                  <div className="flex gap-2 items-center font-semibold mb-1">
                    <CheckCircle2 size={19} />
                    Request submitted successfully!
                  </div>

                  Your consultation request has been sent.
                  The team will contact you to confirm the session.
                </div>
              )}

              {/* ERROR MESSAGE */}

              {status === "error" && (
                <div
                  role="alert"
                  className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 text-sm"
                >
                  Something went wrong while sending your
                  request. Please try again.
                </div>
              )}

              {/* SUBMIT BUTTON */}

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 bg-[#153A5B] text-white py-4 rounded-full font-medium text-sm hover:bg-[#244F73] transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <LoaderCircle
                      size={19}
                      className="animate-spin"
                    />
                    Sending Request...
                  </>
                ) : (
                  <>
                    Submit Consultation Request
                    <Send size={17} />
                  </>
                )}
              </button>

              <p className="text-center text-xs text-slate-400 leading-5">
                Submitting this form requests an appointment.
                Your session will be confirmed separately by our team.
              </p>

            </form>

          </div>
        </div>

      </div>
    </section>
  );
}
