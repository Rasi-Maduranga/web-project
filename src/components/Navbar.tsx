import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed inset-x-0 top-8 z-50"
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Glass container */}
        <div
          className="
            flex items-center justify-between
            rounded-2xl
            bg-black/30
            px-6 py-4
            text-white
            backdrop-blur-xl
            ring-1 ring-white/10
            shadow-lg
          "
        >
          {/* LEFT: Logo */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-tight">
              MyLogo
            </span>
          </div>

          {/* CENTER: Desktop Links */}
          <ul className="hidden md:flex items-center gap-12 text-lg font-medium">
            {["Home", "Services", "About", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="
                    relative
                    text-white
                    transition
                    hover:text-white
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-white
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-black
                  "
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* RIGHT: CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="
                hidden sm:inline-flex
                items-center
                justify-center
                rounded-full
                bg-white
                px-5 py-2
                text-sm
                font-semibold
                text-black
                transition
                hover:bg-gray-200
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-white
                focus-visible:ring-offset-2
                focus-visible:ring-offset-black
              "
            >
              Contact
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="
                inline-flex
                items-center
                justify-center
                rounded-lg
                p-2
                text-white
                transition
                hover:bg-white/10
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-white
                focus-visible:ring-offset-2
                focus-visible:ring-offset-black
                md:hidden
              "
            >
              {open ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div
            className="
              mt-3
              rounded-2xl
              bg-black/40
              backdrop-blur-xl
              ring-1 ring-white/10
              shadow-lg
              md:hidden
            "
          >
            <ul className="flex flex-col divide-y divide-white/10 text-white">
              {["Home", "Services", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="
                      block
                      px-6 py-4
                      text-base
                      transition
                      hover:bg-white/10
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-white
                      focus-visible:ring-offset-2
                      focus-visible:ring-offset-black
                    "
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
