import { ArrowUpRight } from "lucide-react";

const menuLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Case Studies", href: "#" },
  { label: "FAQs", href: "#" },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter (X)", href: "#" },
];

export default function Footer() {
  return (
    <footer aria-label="Footer" className="bg-[#0B1220] text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="grid gap-8 md:grid-cols-13">
          {/* Left column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10">
                {/* <LogoMark className="h-6 w-6 text-white" /> */}
              </span>
              <div>
                <div className="text-lg font-semibold tracking-tight">
                  Stratwell
                </div>
                <div className="text-xs uppercase tracking-[0.18em] text-white/55">
                  Consulting
                </div>
              </div>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Stratwell Consulting helps businesses streamline operations,
              optimize performance, and achieve measurable growth.
            </p>

            <div className="mt-5">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]"
              >
                Contact Us
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#0B1220]">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </a>
            </div>
          </div>

          {/* Menu */}
          <nav
            aria-label="Footer menu"
            className="md:col-span-3 md:col-start-7"
          >
            <h3 className="text-sm font-semibold text-white/90">Menu</h3>
            <ul className="mt-4 space-y-2">
              {menuLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-white/65 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220] rounded"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <nav aria-label="Footer socials" className="md:col-span-2">
            <h3 className="text-sm font-semibold text-white/90">Socials</h3>
            <ul className="mt-4 space-y-2">
              {socialLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-white/65 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220] rounded"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-white/90">Contact</h3>
            <div className="mt-4 space-y-3 text-sm text-white/70">
              <p>
                <span className="text-white/90">+1 (555) 987-6543</span>
              </p>
              <p>
                <a
                  href="mailto:contact@stratwellconsulting.com"
                  className="text-white/70 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220] rounded"
                >
                  contact@stratwellconsulting.com
                </a>
              </p>
              <p className="leading-relaxed">
                420 Stratwell Avenue, Suite 300
                <br />
                Boston, MA 02116, USA
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
            <div>© 2026 Stratwell Consulting Framer Template</div>

            <div className="flex flex-wrap gap-x-3 gap-y-2 sm:justify-end">
              <a
                href="#"
                className="transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220] rounded"
              >
                Privacy Policy
              </a>
              <span className="text-white/25">|</span>
              <a
                href="#"
                className="transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220] rounded"
              >
                T&amp;C
              </a>
              <span className="text-white/25">|</span>
              <span className="text-white/45">Built in Framer</span>
              <span className="text-white/25">|</span>
              <span className="text-white/45">Created by Chernyshov</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
