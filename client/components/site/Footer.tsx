export default function Footer() {
  return (
    <footer className="relative bg-neutral-900 text-neutral-100">
      <svg className="absolute -top-6 left-0 w-full" viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path fill="currentColor" className="text-neutral-900" d="M0,32L60,26.7C120,21,240,11,360,16C480,21,600,43,720,48C840,53,960,43,1080,37.3C1200,32,1320,32,1380,32L1440,32L1440,60L1380,60C1320,60,1200,60,1080,60C960,60,840,60,720,60C600,60,480,60,360,60C240,60,120,60,60,60L0,60Z" />
      </svg>
      <div className="container pt-12 pb-8 relative">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-md bg-gradient-to-br from-brand-500 to-orange-400 grid place-items-center text-white font-black">B</div>
              <span className="text-xl font-extrabold tracking-tight">BuildRight Construction</span>
            </div>
            <p className="mt-3 text-neutral-300 max-w-sm">Designing and delivering resilient, sustainable structures with precision and integrity.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white">Contact</h3>
            <ul className="mt-3 space-y-2 text-neutral-300">
              <li>123 Skyline Avenue, Sector 21, Mumbai, MH 400001</li>
              <li>Phone: <a className="underline hover:text-white" href="tel:+919999999999">+91 99999 99999</a></li>
              <li>Email: <a className="underline hover:text-white" href="mailto:hello@buildright.co">hello@buildright.co</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white">Follow us</h3>
            <div className="mt-3 flex gap-3">
              <a aria-label="Instagram" href="#" className="p-2 rounded bg-white/10 hover:bg-white/20 transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a aria-label="Facebook" href="#" className="p-2 rounded bg-white/10 hover:bg-white/20 transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.5 9.95v-7.04H7.9V12.9h2.6V10.7c0-2.57 1.53-3.99 3.87-3.99 1.12 0 2.29.2 2.29.2v2.5h-1.29c-1.27 0-1.66.79-1.66 1.6v1.9h2.83l-.45 2.01h-2.38v7.04A10 10 0 0 0 22 12"/></svg>
              </a>
              <a aria-label="LinkedIn" href="#" className="p-2 rounded bg-white/10 hover:bg-white/20 transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zM8 8h3.8v2.2h.05c.53-1 1.82-2.2 3.75-2.2 4.01 0 4.75 2.64 4.75 6.07V24h-4v-6.98c0-1.66-.03-3.8-2.32-3.8-2.32 0-2.68 1.8-2.68 3.67V24H8V8z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 text-sm text-neutral-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} BuildRight Construction. All rights reserved.</p>
          <p>Made with pride in India.</p>
        </div>
      </div>
    </footer>
  );
}
