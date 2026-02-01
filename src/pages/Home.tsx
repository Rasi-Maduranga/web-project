import React, { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Hero from "../components/Hero";
import P01 from "../assets/people01.jpg";
import P02 from "../assets/people02.jpg";

/**
 * NOTE:
 * Replace these URLs with local imports if you want:
 * import img01 from "../assets/img01.jpg";
 */
const img01 =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2400&q=80";
const img02 =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2400&q=80";
const img03 =
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=2400&q=80";
const img04 =
  "https://images.unsplash.com/photo-1523958203904-cdcb402031fd?auto=format&fit=crop&w=2400&q=80";

type CaseStudy = {
  tagPrimary: string;
  tagSecondary?: string;
  title: string;
  description: string;
  image: string;
};

export default function Home() {
  // ----- Case Studies Data -----
  const CASE_STUDIES: CaseStudy[] = useMemo(
    () => [
      {
        tagPrimary: "SaaS",
        tagSecondary: "Growth",
        title: "Helped a SaaS startup grow revenue 65% in 12 months.",
        description: "Strategy, execution, and scalable systems.",
        image: img01,
      },
      {
        tagPrimary: "Fintech",
        tagSecondary: "Ops",
        title: "Reduced operational costs by 40% for a fintech platform.",
        description: "Process automation and KPI-led optimization.",
        image: img02,
      },
      {
        tagPrimary: "E-commerce",
        tagSecondary: "Scale",
        title: "Scaled an e-commerce brand to 7-figure ARR in under a year.",
        description: "Performance marketing and conversion improvements.",
        image: img03,
      },
      {
        tagPrimary: "Enterprise",
        tagSecondary: "Cloud",
        title: "Modernized legacy systems for a global enterprise team.",
        description: "Migration planning, implementation, and rollout support.",
        image: img04,
      },
    ],
    [],
  );

  // ----- Scroll-driven Case Studies State -----
  const [activeIndex, setActiveIndex] = useState(0);
  const stepsRef = useRef<Array<HTMLDivElement | null>>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Cleanup old observer
    observerRef.current?.disconnect();

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the most visible entry to avoid flicker when scrolling slowly
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0),
          )[0];

        if (!visible) return;

        const idx = Number((visible.target as HTMLElement).dataset.index);
        if (!Number.isNaN(idx)) setActiveIndex(idx);
      },
      {
        threshold: prefersReducedMotion
          ? [0.15, 0.25, 0.35]
          : [0.55, 0.65, 0.75],
        rootMargin: "0px 0px -15% 0px",
      },
    );

    observerRef.current = observer;

    // Observe all step markers
    stepsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [CASE_STUDIES.length]);

  const active = CASE_STUDIES[Math.min(activeIndex, CASE_STUDIES.length - 1)];

  return (
    <main id="home" className="min-h-screen w-full bg-[#f0f0f0]">
      {/* HERO */}
      <Hero />

      {/* WHO WE ARE */}
      <section className="w-full px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="gap-12 items-center">
            {/* LEFT: Text */}
            <div>
              <div className="mt-8 gap-6">
                <p className="inline-flex items-center rounded-full bg-white/5 border px-4 py-1 text-sm font-semibold text-black/70 backdrop-blur">
                  Who We Are
                </p>
              </div>

              <p className="mt-6 text-lg text-black/80 leading-relaxed">
                We are a team of passionate developers and designers focused on
                building modern, scalable, and high-quality digital products.
              </p>

              <p className="mt-4 text-black/70 leading-relaxed">
                Our mission is to help businesses grow through clean design,
                efficient development, and the latest web technologies.
              </p>
            </div>

            {/* RIGHT: Stats / Highlights */}
            <div className="grid grid-cols-4 mt-10 gap-6">
              <div className="rounded-2xl bg-white p-6 text-black backdrop-blur">
                <h3 className="text-3xl font-bold">5+</h3>
                <p className="mt-2 text-sm text-black/70">Years Experience</p>
              </div>

              <div className="rounded-2xl bg-white p-6 text-black backdrop-blur">
                <h3 className="text-3xl font-bold">30+</h3>
                <p className="mt-2 text-sm text-black/70">Projects Completed</p>
              </div>

              <div className="rounded-2xl bg-white p-6 text-black backdrop-blur">
                <h3 className="text-3xl font-bold">10+</h3>
                <p className="mt-2 text-sm text-black/70">Happy Clients</p>
              </div>

              <div className="rounded-2xl bg-white p-6 text-black backdrop-blur">
                <h3 className="text-3xl font-bold">100%</h3>
                <p className="mt-2 text-sm text-black/70">Commitment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="w-full px-4 sm:px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-4 py-1 text-sm font-semibold text-black/80 backdrop-blur">
              OUR SERVICES
            </p>

            <h2 className="mt-6 text-3xl font-extrabold text-black md:text-4xl">
              What We Offer
            </h2>

            <p className="mt-4 max-w-xl text-black/70">
              We deliver high-quality digital solutions tailored to your
              business.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl bg-white p-6 py-10 text-black shadow-sm ring-1 ring-black/5">
                <h3 className="text-xl font-bold">Web Development</h3>
                <p className="mt-2 text-sm text-black/70">
                  Modern, scalable web applications.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 py-10 text-black shadow-sm ring-1 ring-black/5">
                <h3 className="text-xl font-bold">UI / UX Design</h3>
                <p className="mt-2 text-sm text-black/70">
                  Clean and user-focused designs.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="rounded-2xl bg-white p-6 py-10 text-black shadow-sm ring-1 ring-black/5">
                <h3 className="text-xl font-bold">Backend Systems</h3>
                <p className="mt-2 text-sm text-black/70">
                  Secure APIs and database-driven systems.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 py-10 text-black shadow-sm ring-1 ring-black/5">
                <h3 className="text-xl font-bold">Cloud Deployment</h3>
                <p className="mt-2 text-sm text-black/70">
                  AWS hosting and scalable infrastructure.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5">
              <img
                src={img01}
                alt="Our Services"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold">Professional Solutions</h3>
                <p className="text-sm text-white/80">
                  Built for performance &amp; growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES — Scroll-driven replace (sticky) */}
      <section className="relative w-full px-4 sm:px-6 py-16">
        {/* Local keyframes (kept in this file) */}
        <style>{`
          @keyframes fadeSlide {
            from { opacity: 0; transform: translateY(18px) scale(0.995); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
          .animate-fadeSlide {
            animation: fadeSlide 650ms ease-out both;
          }
        `}</style>

        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center">
            <p className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-4 py-1 text-sm font-semibold text-black/70 backdrop-blur">
              CASE STUDIES
            </p>

            <h2 className="mt-6 text-4xl sm:text-5xl font-semibold text-black/80">
              Proven Results Across Industries
            </h2>
          </div>

          {/* Sticky Card (shows immediately) */}
          <div className="mt-10 sticky top-20 sm:top-24 z-10">
            <div
              key={active.title}
              className="relative overflow-hidden rounded-3xl shadow-[0_18px_50px_rgba(2,6,23,0.18)] ring-1 ring-black/5 h-[62vh] sm:h-[70vh] animate-fadeSlide"
            >
              <img
                src={active.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                draggable={false}
              />
              <div className="absolute inset-0 bg-black/40" />

              {/* Tags */}
              <div className="absolute top-6 left-6 flex gap-3">
                <span className="rounded-full bg-blue-700 px-4 py-1 text-sm font-semibold text-white">
                  {active.tagPrimary}
                </span>
                {active.tagSecondary ? (
                  <span className="rounded-full bg-white/90 px-4 py-1 text-sm font-semibold text-slate-900">
                    {active.tagSecondary}
                  </span>
                ) : null}
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex items-end px-6 pb-8">
                <div className="max-w-xl rounded-2xl bg-white/10 p-6 text-white backdrop-blur-sm">
                  <h3 className="text-2xl sm:text-3xl font-extrabold leading-snug">
                    {active.title}
                  </h3>
                  <p className="mt-4 text-base sm:text-lg text-white/90">
                    {active.description}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <button
                type="button"
                className="absolute bottom-6 right-6 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                View Case Study
              </button>
            </div>
          </div>

          {/* Step markers behind sticky (drives index) */}
          <div className="relative mt-[-62vh] sm:mt-[-70vh]">
            {CASE_STUDIES.map((_, i) => (
              <div
                key={i}
                data-index={i}
                ref={(el) => {
                  stepsRef.current[i] = el;
                }}
                className="h-[80vh]"
                aria-hidden="true"
              />
            ))}
          </div>

          {/* CTA below */}
          <div className="flex justify-center mt-10">
            <button
              type="button"
              className="rounded-2xl bg-blue-800 px-10 py-3 text-white font-semibold hover:bg-blue-900 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative w-full py-16 overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <span className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-4 py-1 text-sm font-semibold text-black/70 backdrop-blur">
            TESTIMONIALS
          </span>

          <p className="mt-6 text-4xl font-semibold text-black/80">
            What Our Clients Say
          </p>
        </div>

        {/* Full-width slider (no weird left/right hacks needed) */}
        <div className="mt-14 w-screen">
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 pb-6 scroll-smooth">
            {[P01, P02, P01, P02].map((img, i) => (
              <div
                key={i}
                className="relative snap-start min-w-[280px] sm:min-w-[340px] md:min-w-[380px] h-[60vh] sm:h-[70vh] overflow-hidden rounded-3xl transition-transform duration-500 ease-out hover:-translate-y-1"
              >
                <img
                  src={img}
                  alt=""
                  className="h-full w-full object-cover"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/15 p-5 text-white backdrop-blur-xl">
                  <h3 className="text-lg font-bold leading-snug">
                    Helped a SaaS startup grow revenue 65% in 12 months.
                  </h3>
                  <p className="mt-2 text-sm text-white/90">
                    Strategy, execution, and scalable systems.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR GOAL */}
      <section className="w-full px-4 sm:px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 items-center">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5">
            <p className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-4 py-1 text-sm font-semibold text-black/70 backdrop-blur">
              OUR GOAL
            </p>

            <p className="mt-8 text-lg text-black/80 leading-relaxed">
              We are a team of passionate developers and designers focused on
              building modern, scalable, and high-quality digital products.
            </p>

            <p className="mt-4 text-black/70 leading-relaxed">
              Our mission is to help businesses grow through clean design,
              efficient development, and the latest web technologies.
            </p>

            <div className="mt-8">
              <button className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-black/80">
                Meet Our Team
              </button>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-sm ring-1 ring-black/5">
            <img src={img01} alt="" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="w-full px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="gap-12 items-center">
            {/* LEFT: Text */}
            <div>
              <div className="mt-8 gap-6">
                <p className="inline-flex items-center rounded-full bg-white/5 border px-4 py-1 text-sm font-semibold text-black/70 backdrop-blur">
                  OUR APPROACH
                </p>
              </div>

              <p className="mt-6 text-lg text-black/80 leading-relaxed">
                At Stratwell Consulting, we believe that strategy should do more
                than sit on paper — it should drive measurable change.
              </p>
            </div>

            {/* RIGHT: Stats / Highlights */}
            <div className="grid grid-cols-2 mt-10 gap-6">
              <div>
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src={img01}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div>
                <div className="rounded-2xl bg-white p-6 text-black backdrop-blur">
                  <h3 className="text-3xl font-bold">30+</h3>
                  <p className="mt-2 text-sm text-black/70">
                    Projects Completed
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-6 my-5 text-black backdrop-blur">
                  <h3 className="text-3xl font-bold">30+</h3>
                  <p className="mt-2 text-sm text-black/70">
                    Projects Completed
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-6 my-5 text-black backdrop-blur">
                  <h3 className="text-3xl font-bold">30+</h3>
                  <p className="mt-2 text-sm text-black/70">
                    Projects Completed
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-6 text-black backdrop-blur">
                  <h3 className="text-3xl font-bold">30+</h3>
                  <p className="mt-2 text-sm text-black/70">
                    Projects Completed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="w-full px-4 sm:px-6 py-12">
        <div className="mx-auto max-w-6xl text-center">
          <span className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-4 py-1 text-sm font-semibold text-black/70 backdrop-blur">
            WE WORK WITH
          </span>

          <p className="mt-6 text-4xl text-black/80">Trusted By</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {["Brand A", "Brand B", "Brand C", "Brand D", "Brand E", "Brand F", "Brand G", "Brand H"].map((b) => (
              <div
                key={b}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5"
              >
                <h3 className="text-xl font-bold">{b}</h3>
                <p className="mt-2 text-sm text-black/70">Partner</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION (fixed width bug) */}
      <section className="w-full px-4 sm:px-6 pb-20">
        <div className="mx-auto max-w-6xl rounded-3xl bg-[#f0f0f0] shadow-[0_18px_50px_rgba(2,6,23,0.18)] ring-1 ring-black/5">
          <div className="relative overflow-hidden rounded-3xl">
            <div
              className="h-[520px] w-full bg-cover bg-center sm:h-[560px] md:h-[620px]"
              style={{ backgroundImage: `url(${img01})` }}
              role="img"
              aria-label="Consulting team in a meeting"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/35 to-slate-950/15" />

            <div className="absolute inset-0 flex items-start">
              <div className="w-full px-5 pt-6 sm:px-8 sm:pt-10 md:px-10 md:pt-12">
                <div className="max-w-xl rounded-2xl border border-white/12 bg-slate-950/35 p-6 backdrop-blur-xl sm:p-8">
                  <h2 className="text-4xl leading-tight text-white sm:text-5xl">
                    Ready to <span className="italic">Transform</span>
                    <br />
                    Your Business?
                  </h2>

                  <p className="mt-5 max-w-md text-sm leading-relaxed text-white/75 sm:text-base">
                    Schedule a free consultation and discover how Stratwell
                    Consulting can streamline your operations, optimize
                    performance, and deliver measurable results.
                  </p>

                  <div className="mt-7">
                    <a
                      href="#"
                      className="group inline-flex items-center gap-3 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-black/5 transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                      aria-label="Get started today"
                    >
                      Get Started Today
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white transition group-hover:translate-x-0.5">
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </a>
                  </div>
                </div>

                <div className="mt-6 hidden text-xs text-white/50 sm:block">
                  Premium consulting solutions • Strategy • Operations • Growth
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/60 to-transparent" />
          </div>
        </div>
      </section>
    </main>
  );
}
