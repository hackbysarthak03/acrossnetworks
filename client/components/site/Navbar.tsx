const NAV_ITEMS = [
  { label: "Who we are?", href: "#about" },
  { label: "Company Profile", href: "#profile" },
  { label: "Let's Connect", href: "#contact" },
];

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const headerCls = scrolled
    ? "bg-white/90 backdrop-blur-md"
    : "bg-transparent";
  const textCls = scrolled ? "font-semibold text-neutral-900 hover:text-neutral-700" : "font-semibold text-white/90 hover:text-white";
  const brandCls = scrolled ? "font-bold text-brand-500" : "font-bold text-brand-500";
  const menuBtnCls = scrolled ? "text-neutral-900 hover:bg-black/5" : "text-white/90 hover:bg-white/10";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors ${headerCls}`}>
      <nav className="container flex items-center justify-between py-3">
        <a href="#top" className="flex items-center gap-2">
          <span className={`text-2xl tracking-tight font-bold ${brandCls} `}>Across Network</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className={`${textCls} transition`}>
              {item.label}
            </a>
          ))}
        </div>
        <a href="#contact" className="hidden md:inline-flex btn-primary">Get a Quote</a>
        <button
          aria-label="Open Menu"
          className={`md:hidden px-2 py-1 rounded ${menuBtnCls}`}
          onClick={() => setOpen(true)}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden h-screen w-screen">
          {/* Glass Overlay - always full height and blurred */}
          <div
            className="fixed inset-0 h-screen w-screen bg-black/30 backdrop-blur-md transition-opacity"
            style={{ WebkitBackdropFilter: "blur(12px)", backdropFilter: "blur(12px)" }}
            onClick={() => setOpen(false)}
          />
          {/* Full Height Drawer - always full height */}
          <aside
            className="fixed top-0 right-0 h-screen w-3/4 max-w-xs bg-white shadow-lg flex flex-col p-6 animate-slide-in-smooth"
            style={{ boxShadow: "-2px 0 16px 0 rgba(0,0,0,0.08)" }}
          >
            <button
              aria-label="Close Menu"
              className="self-end mb-8 text-2xl text-neutral-700 hover:text-neutral-900"
              onClick={() => setOpen(false)}
            >
              &times;
            </button>
            <nav className="flex flex-col gap-6 text-lg">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-neutral-900 hover:text-primary transition"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="btn-primary mt-4"
                onClick={() => setOpen(false)}
              >
                Get a Quote
              </a>
            </nav>
          </aside>
        </div>
      )}
    </header>
  );
}
