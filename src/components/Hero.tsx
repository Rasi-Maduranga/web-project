const img01 =
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=2400&q=80";

export default function Hero() {
  return (
    <section className="min-h-screen w-full">
      {/* spacing left/right + top */}
      <div className="mx-auto min-h-screen px-6 pt-6">
        {/* hero box fills remaining height */}
        <div
          className="flex min-h-[calc(100vh-3rem)] items-center rounded-3xl p-12 text-white bg-black"
          style={{ backgroundImage: `url(${img01})` }}
        >
          {/* CONTENT */}
          <div className="relative z-10 max-w-2xl p-12">
            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
              Build Modern <br />
              Digital Experiences
            </h1>

            <p className="mt-6 text-lg text-white/90">
              We design and develop high-quality web applications using React,
              TypeScript, Tailwind CSS, and modern backend technologies.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Get Started
              </a>

              <a
                href="#services"
                className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
