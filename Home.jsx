import { useEffect, useRef, useState } from "react";

import main1 from "../../photos/new.jpg";
import main2 from "../../photos/new2.jpg";
import main3 from "../../photos/new3.jpg";
import main4 from "../../photos/new4.jpg";
import main5 from "../../photos/news5.jpg";

import mountain1 from "../../photos/mardi.jpeg";
import mountain2 from "../../photos/mountain2.jpeg";
import mountain3 from "../../photos/mountain3.jpeg";
import mountain4 from "../../photos/mountain4.jpeg";
import mountain5 from "../../photos/mountain5.jpeg";

import sunrise from "../../photos/sunrise.jpeg";
import sunset from "../../photos/sunset.jpeg";
import trektrail from "../../photos/trektrail.jpeg";
import camping from "../../photos/camping.jpeg";
import multiday from "../../photos/multidaytrekking.jpeg";
import birdwatch from "../../photos/birdwatch.jpeg";
import heritage from "../../photos/heritage.jpeg";


/* ------------------------------------------------------------------ */
/* DATA                                                                */
/* ------------------------------------------------------------------ */

const heroSlides = [
  { src: main1, alt: "Himalayan peaks glowing at sunrise" },
  { src: main2, alt: "Trekkers on a mountain trail in Nepal" },
  { src: main3, alt: "Alpine landscape in the Himalayas" },
  { src: main4, alt: "Nepal mountain scenery" },
  { src: main5, alt: "Himalayan adventure" },
];

const activities = [
  {
    title: "High-Altitude & Classic Treks",
    description:
      "Reach iconic Himalayan sanctuaries, challenge yourself on mountain circuits, or enjoy scenic multi-day teahouse walks.",
    image: trektrail,
    tag: "TREKKING",
    link: "/packages/trek",
    number: "01",
  },
  {
    title: "Wilderness & Stargazing Camping",
    description:
      "Leave the crowded trails behind. Experience riverside camps, alpine landscapes, outdoor meals and nights beneath the stars.",
    image: camping,
    tag: "CAMPING",
    link: "/packages/camping",
    number: "02",
  },
  {
    title: "Mountain Biking & Singletrack",
    description:
      "Discover forest singletracks, ridge descents and spectacular mountain biking routes through Nepal.",
    image: mountain2,
    tag: "CYCLING",
    link: "/packages/cycling",
    number: "03",
  },
  {
    title: "Day Hikes & Ridge Walks",
    description:
      "Enjoy rewarding short escapes, sunrise viewpoints and nature walks around Nepal's beautiful landscapes.",
    image: sunrise,
    tag: "HIKING",
    link: "/packages/hiking",
    number: "04",
  },
  {
    title: "Cultural Sightseeing",
    description:
      "Explore historic architecture, sacred temples, peaceful lakeside towns and the cultural heritage of Nepal.",
    image: heritage,
    tag: "SIGHTSEEING",
    link: "/packages/sightseeing",
    number: "05",
  },
];

const popularRoutes = [
  {
    name: "Mardi Himal Ridge Trek",
    category: "Short Trek",
    duration: "4–5 Days",
    altitude: "4,500 m",
    highlight: "Close-up views of Machhapuchhre and quiet ridge walking.",
    image: mountain1,
    link: "/packages/trek/short-trek",
  },
  {
    name: "Annapurna Base Camp",
    category: "Moderate Trek",
    duration: "7–10 Days",
    altitude: "4,130 m",
    highlight: "A spectacular mountain amphitheatre and natural hot springs.",
    image: mountain3,
    link: "/packages/trek/moderate-trek",
  },
  {
    name: "Trishuli Riverbank Camping",
    category: "Camping",
    duration: "2 Days",
    altitude: "Riverbank",
    highlight: "Riverside campfires, outdoor dining and optional rafting.",
    image: camping,
    link: "/packages/camping",
  },
  {
    name: "Lower Mustang MTB",
    category: "Cycling",
    duration: "5–7 Days",
    altitude: "3,800 m",
    highlight: "Kali Gandaki Valley and spectacular mountain desert trails.",
    image: mountain4,
    link: "/packages/cycling",
  },
  {
    name: "Kathmandu Heritage Tour",
    category: "Sightseeing",
    duration: "1 Day",
    altitude: "City Valley",
    highlight: "Historic squares, Boudhanath and Swayambhunath.",
    image: heritage,
    link: "/packages/sightseeing",
  },
];

const stats = [
  { value: 100, suffix: "%", title: "Local Guides", detail: "Local knowledge and experiences" },
  { value: 50, suffix: "+", title: "Custom Trails", detail: "Different ways to explore Nepal" },
  { value: 4.9, suffix: "/5", decimals: 1, title: "Traveller Rating", detail: " Verified" },
  { text: "IPPG", title: "Porter Care", detail: "Ethical standards and welfare commitment" },
];

const seasons = [
  {
    name: "Spring",
    months: "Mar – May",
    icon: "🌸",
    text: "Rhododendron forests in bloom, warm days and long views. A favourite for mid-altitude treks.",
    best: true,
  },
  {
    name: "Monsoon",
    months: "Jun – Aug",
    icon: "🌧️",
    text: "Lush green hills and quieter trails. Ideal for rain-shadow regions and cultural journeys.",
  },
  {
    name: "Autumn",
    months: "Sep – Nov",
    icon: "🍂",
    text: "Typically clear skies and crisp mountain panoramas. The classic season for high-altitude trekking.",
    best: true,
  },
  {
    name: "Winter",
    months: "Dec – Feb",
    icon: "❄️",
    text: "Cold, calm and quiet. Great for lower-altitude hikes, lakeside towns and heritage tours.",
  },
];

const gallery = [
  { src: main2, alt: "Mountain trail", span: "md:col-span-2 md:row-span-2" },
  { src: mountain5, alt: "Himalayan peak", span: "" },
  { src: multiday, alt: "Multi-day trekking", span: "" },
  { src: sunset, alt: "Sunset over the mountains", span: "md:col-span-2" },
  { src: main4, alt: "Nepal landscape", span: "" },
  { src: main5, alt: "Himalayan adventure", span: "" },
];

const howItWorks = [
  {
    step: "01",
    title: "Tell us your dream",
    text: "Share your dates, group size, fitness and interests — or use the trail finder above.",
  },
  {
    step: "02",
    title: "We design your journey",
    text: "Our local team builds a custom itinerary with the right route, pace and activity mix.",
  },
  {
    step: "03",
    title: "Walk, ride, discover",
    text: "Travel with experienced local guides, with safety and support planned at every step.",
  },
];

const faqs = [
  {
    question: "When is the best season for trekking and outdoor activities in Nepal?",
    answer:
      "Spring (March to May) offers pleasant weather and blooming rhododendron forests, while autumn (September to November) generally provides clear skies and beautiful mountain views. Conditions vary by region and altitude.",
  },
  {
    question: "Do I need prior high-altitude experience to join your treks?",
    answer:
      "Not necessarily. We offer different levels of trekking experiences, from beginner-friendly walks to challenging high-altitude adventures. The right itinerary depends on your fitness, experience and acclimatisation needs.",
  },
  {
    question: "Can I combine multiple activities in one trip?",
    answer:
      "Absolutely. You can combine trekking, camping, cycling, hiking and sightseeing into a customised itinerary based on your available time and interests.",
  },
  {
    question: "Can you customise the travel itinerary?",
    answer:
      "Yes. You can contact our team with your preferred dates, group size, interests and travel plans. We can discuss a suitable itinerary with you.",
  },
  {
    question: "What should I bring for a Himalayan trek?",
    answer:
      "Requirements depend on the destination, season and altitude. Appropriate footwear, layered clothing, rain protection, personal essentials and a suitable daypack are common starting points. We can advise you on the specific packing list for your trip.",
  },
];

const recommendations = {
  Trekking: {
    casual: { short: "Pokhara & Surrounding Short Treks", link: "/packages/trek/short-trek", reason: "A shorter mountain experience with manageable walking days." },
    active: { short: "Mardi Himal Ridge Trek", link: "/packages/trek/short-trek", reason: "A rewarding mountain journey with beautiful ridge views." },
    athlete: { short: "Advanced Himalayan Trek", link: "/packages/trek/advanced-trek", reason: "A more challenging mountain adventure for experienced trekkers." },
  },
  Cycling: {
    casual: { short: "Pokhara Lake & Pame Valley Loop", link: "/packages/cycling", reason: "A relaxed cycling experience around Pokhara." },
    active: { short: "Kathmandu Valley Singletrack", link: "/packages/cycling", reason: "A rewarding ride combining trails, climbs and descents." },
    athlete: { short: "Himalayan MTB Expedition", link: "/packages/cycling", reason: "A demanding mountain biking experience for experienced riders." },
  },
  Camping: {
    casual: { short: "Trishuli Riverbank Camping", link: "/packages/camping", reason: "A relaxing riverside outdoor experience." },
    active: { short: "Australian Camp Stargazing", link: "/packages/camping", reason: "A mountain escape with sunset and sunrise views." },
    athlete: { short: "Panchase Wilderness Camping", link: "/packages/camping", reason: "A longer nature-focused camping experience." },
  },
  Sightseeing: {
    casual: { short: "Kathmandu Heritage Tour", link: "/packages/sightseeing", reason: "Discover Nepal's cultural heritage at a relaxed pace." },
    active: { short: "Nepal Cultural Discovery", link: "/packages/sightseeing", reason: "Explore historic places and cultural destinations." },
    athlete: { short: "Extended Nepal Discovery", link: "/packages/sightseeing", reason: "Explore more destinations with a longer itinerary." },
  },
  "Day Hike": {
    casual: { short: "Pokhara Nature Walk", link: "/packages/hiking", reason: "A gentle outdoor escape with scenic views." },
    active: { short: "Nepal Ridge Hike", link: "/packages/hiking", reason: "An active day outdoors with rewarding viewpoints." },
    athlete: { short: "Extended Ridge Hiking", link: "/packages/hiking", reason: "A more demanding hiking experience." },
  },
};

/* ------------------------------------------------------------------ */
/* SMALL HELPERS                                                       */
/* ------------------------------------------------------------------ */

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView(0.12);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function CountUp({ value, decimals = 0, suffix = "" }) {
  const [ref, inView] = useInView(0.4);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const duration = 1600;
    const start = performance.now();
    let frame;
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

function SectionHeading({ eyebrow, title, text, center = true, light = false }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : ""}>
      <span
        className={`inline-block rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] ${
          light ? "bg-white/10 text-white" : "bg-[#dcf8e8] text-[#17613b]"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-6 text-3xl font-bold leading-tight md:text-5xl ${
          light ? "text-white" : "text-[#194536]"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p className={`mt-5 leading-8 ${light ? "text-white/75" : "text-[#65746b]"}`}>
          {text}
        </p>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* PAGE                                                                */
/* ------------------------------------------------------------------ */

export default function Home() {
  const [activity, setActivity] = useState("Trekking");
  const [difficulty, setDifficulty] = useState("Easy / Short");
  const [duration, setDuration] = useState("1–3 Days");

  const [step, setStep] = useState(1);
  const [style, setStyle] = useState("Trekking");
  const [fitness, setFitness] = useState("active");
  const [days, setDays] = useState("5–10 Days");
  const [showRecommendation, setShowRecommendation] = useState(false);

  const [activeRoute, setActiveRoute] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [slide, setSlide] = useState(0);

  // Hero slideshow
  useEffect(() => {
    const timer = setInterval(
      () => setSlide((current) => (current + 1) % heroSlides.length),
      6500
    );
    return () => clearInterval(timer);
  }, []);

  const selectedRecommendation =
    recommendations[style]?.[fitness] || recommendations.Trekking.active;

  const handleSearch = () => {
    const destination = {
      Trekking: "/packages/trek",
      Sightseeing: "/packages/sightseeing",
      Hiking: "/packages/hiking",
      Cycling: "/packages/cycling",
      Camping: "/packages/camping",
    };

    const base = destination[activity] || "/packages/trek";
    const params = new URLSearchParams({ difficulty, duration });
    window.location.href = `${base}?${params.toString()}`;
  };

  const resetWizard = () => {
    setStep(1);
    setShowRecommendation(false);
  };

  const selectClass =
    "w-full rounded-xl border border-[#dfe7df] bg-[#f8faf8] px-4 py-4 text-sm outline-none transition focus:border-[#00883e] focus:ring-4 focus:ring-[#00883e]/10";
  const labelClass =
    "mb-2 block text-xs font-semibold uppercase tracking-wider text-[#7c8980]";

  return (
    <main className="overflow-hidden bg-[#f3f7f3] text-[#263e32]">
      {/* Local animations */}
      <style>{`
        @keyframes kenburns {
          from { transform: scale(1); }
          to   { transform: scale(1.02); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes floaty {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }
        @keyframes scrollcue {
          0%   { transform: translateY(0); opacity: 0; }
          30%  { opacity: 1; }
          100% { transform: translateY(14px); opacity: 0; }
        }
        .kenburns { animation: kenburns 9s ease-out forwards; }
        .marquee-track { animation: marquee 38s linear infinite; }
        .floaty { animation: floaty 5s ease-in-out infinite; }
        .scrollcue { animation: scrollcue 1.8s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .kenburns, .marquee-track, .floaty, .scrollcue { animation: none; }
        }
      `}</style>

      {/* 01. HERO — full-bleed slideshow */}
      <section className="relative overflow-hidden bg-[#153b30] text-white md:min-h-[92vh] md:bg-[#0f2a20]">
        {heroSlides.map((item, index) => (
          <img
            key={item.src}
            src={item.src}
            alt={index === slide ? item.alt : ""}
            aria-hidden={index !== slide}
            className={`absolute inset-x-0 top-0 h-[42svh] w-full object-cover object-center transition-opacity duration-[1400ms] md:inset-0 md:h-full ${
              index === slide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Keep the mobile photograph clear; use the original desktop overlays. */}
        <div className="absolute inset-x-0 top-0 h-[42svh] bg-gradient-to-b from-black/10 via-transparent to-[#153b30]/25 md:inset-0 md:h-full md:bg-gradient-to-r md:from-[#0b221a]/75 md:via-[#0b221a]/30 md:to-transparent" />
        <div className="absolute inset-x-0 top-0 h-[42svh] bg-transparent md:inset-0 md:h-full md:bg-gradient-to-t md:from-[#0b221a]/60 md:via-transparent md:to-transparent" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-start px-5 pb-32 pt-[44svh] md:min-h-[92vh] md:justify-center md:px-10 md:pb-40 md:pt-28">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2.5 text-xs font-semibold backdrop-blur-md sm:px-5 sm:py-3 sm:text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#4ade80]" />
            🏔️ Explore Nepal With Us
          </span>

          <h1 className="mt-6 max-w-3xl text-[2.35rem] font-bold leading-[1.08] tracking-tight sm:mt-8 sm:text-6xl lg:text-7xl">
            <span className="md:hidden">
              Your Himalayan Adventure{" "}
              <span className="bg-gradient-to-r from-[#86efac] to-[#fde68a] bg-clip-text text-transparent">
                Starts Here.
              </span>
            </span>
            <span className="hidden md:inline">
              Touch the Himalayan Sky.{' '}
              <span className="bg-gradient-to-r from-[#86efac] to-[#fde68a] bg-clip-text text-transparent">
                Experience Nepal Unfiltered.
              </span>
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/90 sm:mt-7 sm:text-lg sm:leading-8 md:text-xl md:leading-9 md:text-white/80">
            <span className="md:hidden">
              Trek, camp, cycle and discover Nepal with experienced local guides.
            </span>
            <span className="hidden md:inline">
              Tailor-made treks, high-ridge camping, wild singletrack cycling and
              cultural journeys — guided by local experts with safety and heart
              at every step.
            </span>
          </p>

          <div className="mt-7 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4">
            <a
              href="#trip-finder"
              className="flex w-full max-w-[320px] items-center justify-center rounded-full bg-[#00a34a] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#00a34a]/30 transition hover:-translate-y-0.5 hover:bg-[#00883e] sm:w-auto sm:px-8 sm:text-base"
            >
              Explore Adventures →
            </a>
            <a
              href="/contact"
              className="hidden rounded-full border border-white/40 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-[#194536] sm:inline-flex"
            >
              Talk to Our Team
            </a>
          </div>

          <div className="mt-7 flex max-w-xl flex-wrap gap-x-4 gap-y-2 text-[11px] text-white/90 sm:mt-10 sm:gap-x-7 sm:text-sm">
            <span>✓ Local Experiences</span>
            <span>✓ Custom Itineraries</span>
            <span>✓ Multiple Adventures</span>
          </div>
        </div>

        {/* Floating highlight card — unchanged on desktop */}
        <div className="floaty absolute bottom-40 right-10 hidden w-72 rounded-2xl border border-white/20 bg-white/15 p-5 backdrop-blur-xl lg:block">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#bbf7d0]">
            Your next adventure
          </p>
          <p className="mt-2 text-lg font-bold">
            Discover the extraordinary beauty of Nepal.
          </p>
        </div>

        {/* Slide dots sit over the image on mobile */}
        <div className="absolute left-1/2 top-[39svh] flex -translate-x-1/2 gap-2 md:bottom-32 md:left-10 md:top-auto md:translate-x-0 lg:left-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))]">
          {heroSlides.map((item, index) => (
            <button
              key={item.src}
              onClick={() => setSlide(index)}
              aria-label={`Show slide ${index + 1}`}
              aria-current={index === slide ? "true" : undefined}
              className={`h-1.5 rounded-full transition-all ${
                index === slide ? "w-10 bg-white" : "w-4 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Scroll cue — desktop only */}
        <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block" aria-hidden="true">
          <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/50 pt-2">
            <span className="scrollcue h-2 w-1 rounded-full bg-white" />
          </div>
        </div>
      </section>

      {/* TRIP FINDER — overlaps hero */}
      <section id="trip-finder" className="relative z-10 -mt-24 px-5 pb-20 md:px-10">
        <div className="mx-auto max-w-7xl rounded-[28px] border border-white bg-white/95 p-6 shadow-2xl shadow-[#194536]/15 backdrop-blur md:p-9">
          <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#00883e]">
                Find Your Adventure
              </p>
              <h2 className="mt-2 text-2xl font-bold text-[#194536] md:text-3xl">
                Where would you like to go?
              </h2>
            </div>
            <span className="hidden rounded-full bg-[#e8f6ec] px-4 py-2 text-xs font-semibold text-[#17613b] sm:inline-block">
              Your journey starts here
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            <div>
              <label htmlFor="f-activity" className={labelClass}>Select Activity</label>
              <select id="f-activity" value={activity} onChange={(e) => setActivity(e.target.value)} className={selectClass}>
                {["Trekking", "Sightseeing", "Hiking", "Cycling", "Camping"].map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="f-difficulty" className={labelClass}>Difficulty</label>
              <select id="f-difficulty" value={difficulty} onChange={(e) => setDifficulty(e.target.value)} className={selectClass}>
                {["Easy / Short", "Moderate", "Advanced / High-Pass"].map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="f-duration" className={labelClass}>Duration</label>
              <select id="f-duration" value={duration} onChange={(e) => setDuration(e.target.value)} className={selectClass}>
                {["1–3 Days", "4–7 Days", "8–14 Days", "15+ Days"].map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <button
                onClick={handleSearch}
                className="w-full rounded-xl bg-[#00883e] px-5 py-4 font-semibold text-white shadow-lg shadow-[#00883e]/25 transition hover:-translate-y-0.5 hover:bg-[#006f34]"
              >
                Search Adventures →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 02. STATS */}
      <section className="border-y border-[#dfe8df] bg-white px-5 py-14 md:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-9 md:grid-cols-4">
          {stats.map((item, index) => (
            <Reveal key={item.title} delay={index * 100} className="text-center">
              <p className="text-4xl font-extrabold text-[#00883e] md:text-5xl">
                {item.text ? (
                  item.text
                ) : (
                  <CountUp value={item.value} decimals={item.decimals} suffix={item.suffix} />
                )}
              </p>
              <h3 className="mt-3 font-bold text-[#194536]">{item.title}</h3>
              <p className="mt-2 text-xs leading-6 text-[#849087]">{item.detail}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden bg-[#194536] py-5 text-white" aria-hidden="true">
        <div className="marquee-track flex w-max gap-12 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
          {[...Array(2)].map((_, loop) => (
            <div key={loop} className="flex gap-12">
              {["Trekking", "Camping", "Mountain Biking", "Day Hikes", "Sightseeing", "Birdwatching", "Heritage", "Himalaya"].map(
                (word) => (
                  <span key={`${loop}-${word}`} className="flex items-center gap-12">
                    {word}
                    <span className="text-[#4ade80]">✦</span>
                  </span>
                )
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 03. EXPERIENCE BY STYLE — bento */}
      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Explore Your Way"
              title="Find Your Kind of Adventure"
              text="Whether you seek mountain challenges or peaceful cultural discoveries, there is an experience waiting for you."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {activities.map((item, index) => (
              <Reveal
                key={item.number}
                delay={index * 90}
                className={index === 0 ? "lg:col-span-2" : ""}
              >
                <a
                  href={item.link}
                  className="group relative block h-[380px] overflow-hidden rounded-[26px] shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b221a] via-[#0b221a]/40 to-transparent transition group-hover:from-[#0b221a]/95" />

                  <span className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-[10px] font-bold tracking-widest text-[#17613b]">
                    {item.tag}
                  </span>
                  <span className="absolute right-5 top-5 text-5xl font-black text-white/25">
                    {item.number}
                  </span>

                  <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                    <h3 className="text-xl font-bold md:text-2xl">{item.title}</h3>
                    <p className="mt-3 max-h-0 overflow-hidden text-sm leading-7 text-white/80 opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100 max-md:max-h-40 max-md:opacity-100">
                      {item.description}
                    </p>
                    <p className="mt-4 flex items-center gap-2 text-sm font-bold text-[#86efac]">
                      Explore Packages
                      <span className="transition group-hover:translate-x-2">→</span>
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04. POPULAR ROUTES */}
      <section className="bg-white px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Handpicked Experiences" title="Popular Adventures" center={false} />
            <p className="max-w-md leading-8 text-[#65746b]">
              Explore some of the experiences that make travelling through
              Nepal unforgettable.
            </p>
          </Reveal>

          <div className="mt-12 flex flex-wrap gap-3" role="tablist">
            {popularRoutes.map((route, index) => (
              <button
                key={route.name}
                role="tab"
                aria-selected={activeRoute === index}
                onClick={() => setActiveRoute(index)}
                className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                  activeRoute === index
                    ? "bg-[#00883e] text-white shadow-lg shadow-[#00883e]/25"
                    : "bg-[#f0f5f0] text-[#52665a] hover:bg-[#e0eee3]"
                }`}
              >
                {route.name}
              </button>
            ))}
          </div>

          <div className="mt-8 grid overflow-hidden rounded-[28px] border border-[#e5ebe5] shadow-xl shadow-[#194536]/5 md:grid-cols-2">
            <div className="relative h-[300px] overflow-hidden md:h-[480px]">
              <img
                key={popularRoutes[activeRoute].image + activeRoute}
                src={popularRoutes[activeRoute].image}
                alt={popularRoutes[activeRoute].name}
                className="h-full w-full object-cover"
              />
              <span className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#17613b]">
                {popularRoutes[activeRoute].category}
              </span>
            </div>

            <div className="flex flex-col justify-center p-8 md:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a58b58]">
                Featured · {String(activeRoute + 1).padStart(2, "0")} / {String(popularRoutes.length).padStart(2, "0")}
              </p>

              <h3 className="mt-4 text-3xl font-bold text-[#194536] md:text-4xl">
                {popularRoutes[activeRoute].name}
              </h3>

              <p className="mt-5 leading-8 text-[#748078]">
                {popularRoutes[activeRoute].highlight}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 border-y border-[#e5ebe5] py-6">
                <div>
                  <p className="text-xs text-[#8a958d]">⏱ Duration</p>
                  <p className="mt-2 text-lg font-bold">{popularRoutes[activeRoute].duration}</p>
                </div>
                <div>
                  <p className="text-xs text-[#8a958d]">⛰ Maximum Altitude</p>
                  <p className="mt-2 text-lg font-bold">{popularRoutes[activeRoute].altitude}</p>
                </div>
              </div>

              <a
                href={popularRoutes[activeRoute].link}
                className="mt-8 inline-flex w-fit rounded-full bg-[#00883e] px-8 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#006f34]"
              >
                View Experience →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Through Our Lens"
              title="Nepal, As We See It"
              text="Ridgelines, river camps, prayer flags and golden hours — a glimpse of what waits on the trail."
            />
          </Reveal>

          <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 md:auto-rows-[200px] md:grid-cols-4">
            {gallery.map((photo, index) => (
              <Reveal key={photo.alt} delay={index * 70} className={`${photo.span} h-full`}>
                <div className="group h-full overflow-hidden rounded-2xl">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BEST TIME TO GO */}
      <section className="relative overflow-hidden bg-[#194536] px-5 py-20 text-white md:px-10 md:py-28">
        <img src={mountain5} alt="" className="absolute inset-0 h-full w-full object-cover opacity-15" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              light
              eyebrow="Plan Your Timing"
              title="The Best Time to Go"
              text="Every season in Nepal has its own character. Conditions vary by region and altitude, so ask us what suits your plans."
            />
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {seasons.map((season, index) => (
              <Reveal key={season.name} delay={index * 100}>
                <div
                  className={`relative h-full rounded-3xl border p-7 backdrop-blur-sm transition hover:-translate-y-2 ${
                    season.best
                      ? "border-[#4ade80]/60 bg-white/15"
                      : "border-white/15 bg-white/5"
                  }`}
                >
                  {season.best && (
                    <span className="absolute -top-3 right-5 rounded-full bg-[#4ade80] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#0b221a]">
                      Peak season
                    </span>
                  )}
                  <div className="text-4xl">{season.icon}</div>
                  <h3 className="mt-5 text-xl font-bold">{season.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-[#86efac]">{season.months}</p>
                  <p className="mt-4 text-sm leading-7 text-white/75">{season.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 05. NATURE AND CULTURE */}
      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Beyond The Trails"
              title="The Spirit of Our Journeys"
              text="Nepal is more than its mountains. Discover its wildlife, people, traditions and extraordinary natural heritage."
            />
          </Reveal>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {[
              {
                img: birdwatch,
                alt: "Birdwatching and wildlife in Nepal",
                label: "Nature & Wildlife",
                title: "Discover the Life Along the Trails",
                text: "Nepal's landscapes are home to extraordinary biodiversity, from the Himalayan monal and blue sheep to diverse birdlife and rhododendron forests. Discover the natural world beyond the walking trail.",
              },
              {
                img: heritage,
                alt: "Nepalese cultural heritage",
                label: "Culture & Heritage",
                title: "Discover Stories Beyond the Mountains",
                text: "Experience the traditions, architecture, food and everyday life of Nepal's diverse communities. Every destination has a story waiting to be discovered.",
              },
            ].map((card, index) => (
              <Reveal key={card.label} delay={index * 120}>
                <div className="group h-full overflow-hidden rounded-[28px] bg-white shadow-sm transition hover:shadow-2xl">
                  <div className="overflow-hidden">
                    <img
                      src={card.img}
                      alt={card.alt}
                      loading="lazy"
                      className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 md:p-10">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#00883e]">{card.label}</p>
                    <h3 className="mt-4 text-2xl font-bold text-[#194536]">{card.title}</h3>
                    <p className="mt-5 leading-8 text-[#748078]">{card.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 06. WIZARD */}
      <section className="bg-[#e7f1e8] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="text-center">
              <span className="inline-block rounded-full bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-[#17613b]">
                Trip Recommendation
              </span>
              <h2 className="mt-6 text-3xl font-bold text-[#194536] md:text-5xl">
                Find Your Perfect Trail
              </h2>
              <p className="mt-5 text-[#65746b]">
                Answer three quick questions and discover an adventure that
                may suit your travel style.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 rounded-[28px] bg-white p-7 shadow-xl shadow-[#194536]/10 md:p-12">
            {!showRecommendation ? (
              <>
                <div className="mb-10 flex items-center justify-between">
                  <p className="text-sm font-bold text-[#194536]">Step {step} of 3</p>
                  <div className="flex gap-2">
                    {[1, 2, 3].map((number) => (
                      <span
                        key={number}
                        className={`h-2 w-10 rounded-full transition-colors duration-500 ${
                          step >= number ? "bg-[#00883e]" : "bg-[#e4ebe4]"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {step === 1 && (
                  <div>
                    <h3 className="text-2xl font-bold text-[#194536]">What kind of adventure interests you?</h3>
                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                      {["Trekking", "Cycling", "Camping", "Sightseeing", "Day Hike"].map((item) => (
                        <button
                          key={item}
                          onClick={() => setStyle(item)}
                          aria-pressed={style === item}
                          className={`rounded-xl border p-5 text-left font-semibold transition ${
                            style === item
                              ? "border-[#00883e] bg-[#e8f6ec] text-[#17613b]"
                              : "border-[#e2e9e2] hover:border-[#00883e]"
                          }`}
                        >
                          {item}
                          <span className="float-right">{style === item ? "✓" : "→"}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h3 className="text-2xl font-bold text-[#194536]">How would you describe your fitness?</h3>
                    <div className="mt-7 grid gap-3">
                      {[
                        ["casual", "Casual", "I prefer relaxed experiences."],
                        ["active", "Active Walker", "I enjoy regular walking and outdoor activities."],
                        ["athlete", "Seasoned Athlete", "I am comfortable with challenging activities."],
                      ].map(([value, title, description]) => (
                        <button
                          key={value}
                          onClick={() => setFitness(value)}
                          aria-pressed={fitness === value}
                          className={`rounded-xl border p-5 text-left transition ${
                            fitness === value
                              ? "border-[#00883e] bg-[#e8f6ec]"
                              : "border-[#e2e9e2] hover:border-[#00883e]"
                          }`}
                        >
                          <span className="font-bold text-[#194536]">{title}</span>
                          <p className="mt-1 text-sm text-[#748078]">{description}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <h3 className="text-2xl font-bold text-[#194536]">How much time do you have?</h3>
                    <div className="mt-7 grid gap-3 sm:grid-cols-3">
                      {["1–4 Days", "5–10 Days", "10+ Days"].map((item) => (
                        <button
                          key={item}
                          onClick={() => setDays(item)}
                          aria-pressed={days === item}
                          className={`rounded-xl border p-5 font-semibold transition ${
                            days === item
                              ? "border-[#00883e] bg-[#e8f6ec] text-[#17613b]"
                              : "border-[#e2e9e2] hover:border-[#00883e]"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-10 flex justify-between gap-4 border-t border-[#e8ede8] pt-7">
                  <button
                    onClick={() => setStep((current) => Math.max(1, current - 1))}
                    disabled={step === 1}
                    className="rounded-full border border-[#dce6dc] px-7 py-3 font-semibold text-[#52665a] disabled:opacity-30"
                  >
                    ← Back
                  </button>

                  <button
                    onClick={() => {
                      if (step === 3) setShowRecommendation(true);
                      else setStep((current) => current + 1);
                    }}
                    className="rounded-full bg-[#00883e] px-8 py-3 font-semibold text-white transition hover:bg-[#006f34]"
                  >
                    {step === 3 ? "Find My Adventure →" : "Continue →"}
                  </button>
                </div>
              </>
            ) : (
              <div className="py-5 text-center">
                <span className="inline-flex rounded-full bg-[#e1f5e7] px-5 py-2 text-sm font-bold text-[#17613b]">
                  🎯 Your Suggested Adventure
                </span>

                <h3 className="mt-7 text-3xl font-bold text-[#194536] md:text-4xl">
                  {selectedRecommendation.short}
                </h3>

                <p className="mx-auto mt-5 max-w-lg leading-8 text-[#748078]">
                  {selectedRecommendation.reason}
                </p>

                <p className="mt-5 text-sm text-[#8b958d]">Your available time: {days}</p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <a
                    href={`/contact?service=${encodeURIComponent(style)}&days=${encodeURIComponent(days)}`}
                    className="rounded-full bg-[#00883e] px-8 py-4 font-semibold text-white hover:bg-[#006f34]"
                  >
                    Plan This Route With Us →
                  </a>
                  <a
                    href={selectedRecommendation.link}
                    className="rounded-full border border-[#dce6dc] px-8 py-4 font-semibold text-[#194536] hover:bg-[#f3f7f3]"
                  >
                    View Packages
                  </a>
                </div>

                <button onClick={resetWizard} className="mt-8 text-sm font-semibold text-[#00883e] underline">
                  Start Again
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Simple Planning"
              title="From Dream to Trailhead"
              text="Three easy steps between you and your Himalayan story."
            />
          </Reveal>

          <div className="relative mt-16 grid gap-10 md:grid-cols-3">
            <div className="absolute left-[16%] right-[16%] top-8 hidden border-t-2 border-dashed border-[#bfe3cb] md:block" aria-hidden="true" />
            {howItWorks.map((item, index) => (
              <Reveal key={item.step} delay={index * 150} className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#00883e] text-xl font-extrabold text-white shadow-lg shadow-[#00883e]/30 ring-8 ring-white">
                  {item.step}
                </div>
                <h3 className="mt-6 text-xl font-bold text-[#194536]">{item.title}</h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-[#748078]">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 07. SAFETY AND RESPONSIBILITY */}
      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Travel With Confidence"
              title="Your Experience Matters"
              text="Thoughtful planning and responsible travel are important parts of every outdoor experience."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {[
              { icon: "🛡️", title: "Safety & Support", description: "We consider route conditions, altitude, preparation and emergency arrangements when planning trips." },
              { icon: "🌿", title: "Responsible Travel", description: "We encourage Leave No Trace practices and respect for Nepal's natural environments and communities." },
              { icon: "🤝", title: "Ethical Porter Care", description: "We value fair treatment, suitable equipment and appropriate welfare arrangements for our trekking crews." },
              { icon: "🗺️", title: "Customised Itineraries", description: "We can discuss different routes, dates, activity combinations and travel preferences." },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 90}>
                <div className="flex h-full gap-5 rounded-2xl border border-[#e5ebe5] bg-white p-7 transition hover:-translate-y-1 hover:border-[#bfe3cb] hover:shadow-xl md:p-9">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#e5f6eb] text-2xl">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#194536]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#748078]">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 08. TESTIMONIALS */}
      <section className="bg-white px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading eyebrow="Stories From The Trail" title="Moments Worth Sharing" />
          </Reveal>

          <div className="mt-14 grid gap-7 md:grid-cols-2">
            {[
              {
                quote:
                  "Standing at Mardi Himal High Camp at sunrise was unbelievable. The team took care of every single detail, making the journey memorable.",
                name: "Elena & Marc",
                location: "Austria",
                experience: "Mardi Himal Ridge Trek",
              },
              {
                quote:
                  "The riverside camping and cycling setup in Pokhara was a highlight of our trip. The landscapes and outdoor experience were wonderful.",
                name: "David K.",
                location: "Australia",
                experience: "Camping & Cycling",
              },
            ].map((review, index) => (
              <Reveal key={review.name} delay={index * 120}>
                <article className="relative h-full overflow-hidden rounded-[26px] border border-[#e1e9e1] bg-[#f7faf7] p-8 transition hover:shadow-xl md:p-10">
                  <span className="absolute -top-4 right-6 select-none text-[140px] font-serif leading-none text-[#00883e]/10" aria-hidden="true">
                    “
                  </span>
                  <p className="relative text-2xl tracking-widest text-[#e3a735]" aria-label="5 out of 5 stars">★★★★★</p>
                  <blockquote className="relative mt-7 text-lg leading-8 text-[#465a4d]">
                    “{review.quote}”
                  </blockquote>
                  <div className="relative mt-8 flex items-center gap-4 border-t border-[#e0e8e0] pt-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00883e] text-lg font-bold text-white">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-[#194536]">{review.name}</p>
                      <p className="mt-0.5 text-sm text-[#859087]">
                        {review.location} · {review.experience}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 09. FAQ */}
      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <span className="inline-block rounded-full bg-[#dcf8e8] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-[#17613b]">
              Need Some Help?
            </span>
            <h2 className="mt-6 text-3xl font-bold text-[#194536] md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-6 leading-8 text-[#748078]">
              Find answers to some common questions before planning your
              Himalayan adventure.
            </p>
            <a href="/contact" className="mt-8 inline-flex items-center font-bold text-[#00883e] hover:underline">
              Ask Us Anything <span className="ml-3">→</span>
            </a>
          </Reveal>

          <Reveal delay={120}>
            <div className="divide-y divide-[#e5ebe5] rounded-[24px] border border-[#e5ebe5] bg-white px-7">
              {faqs.map((faq, index) => (
                <div key={faq.question} className="py-6">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                    aria-expanded={openFaq === index}
                    className="flex w-full items-center justify-between gap-5 text-left"
                  >
                    <span className="font-bold leading-7 text-[#194536]">{faq.question}</span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg transition ${
                        openFaq === index ? "rotate-180 bg-[#00883e] text-white" : "bg-[#e5f6eb] text-[#00883e]"
                      }`}
                    >
                      {openFaq === index ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-500 ${
                      openFaq === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pt-5 pr-8 text-sm leading-8 text-[#748078]">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="px-5 pb-20 md:px-10 md:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#194536] px-7 py-24 text-center text-white md:px-16">
          <img src={sunset} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b221a]/90 via-[#153a2d]/70 to-[#153a2d]/60" />

          <Reveal className="relative mx-auto max-w-3xl">
            <span className="inline-block rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold backdrop-blur">
              Your Adventure Starts Here
            </span>

            <h2 className="mt-8 text-3xl font-bold leading-tight md:text-6xl">
              Your Himalayan Story Begins Here.
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-8 text-white/80">
              Ready to build a customised itinerary or need expert advice on
              choosing the right trail? Talk directly with our team today.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="rounded-full bg-[#00a34a] px-8 py-4 font-semibold text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-white hover:text-[#194536]"
              >
                Plan Your Custom Trip →
              </a>
              <a
                href="https://wa.me/97798XXXXXXXX"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/50 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#194536]"
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}