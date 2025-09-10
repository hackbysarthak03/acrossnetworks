import { useEffect, useState } from "react";
import Feature from "@/components/site/Feature";

type ServiceCardProps = { title: string; desc: string; icon: string };
function ServiceCard({ title, desc, icon }: ServiceCardProps) {
  return (
    <div className="rounded-xl p-5 bg-white border shadow-sm hover:shadow-md transition relative overflow-hidden" data-aos="zoom-in">
      <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-orange-100" />
      <div className="text-2xl">{icon}</div>
      <div className="mt-2 font-semibold text-neutral-900">{title}</div>
      <div className="text-sm text-neutral-600">{desc}</div>
    </div>
  );
}

function Step({ n, title, desc }: { n: number; title: string; desc: string }) {
  return (
    <div className="relative rounded-xl p-5 border bg-white shadow-sm transition-transform duration-300 hover:scale-110" data-aos="fade-up">
      <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-brand-500 text-white grid place-items-center font-bold shadow">{n}</div>
      <div className="font-semibold text-neutral-900">{title}</div>
      <div className="text-sm text-neutral-600 mt-1">{desc}</div>
    </div>
  );
}

function RowMarquee({ images, reverse = false }: { images: string[]; reverse?: boolean }) {
  const anim = reverse ? "animate-marquee-reverse-slow" : "animate-marquee-slow";
  return (
    <div className="relative overflow-hidden rounded-xl border bg-white/60">
      <div className={`flex items-center gap-4 ${anim}`}>
        <div className="flex items-center gap-4 min-w-max">
          {images.map((src, i) => (
            <div key={`a-${i}`} className="rounded-lg overflow-hidden">
              <img className="h-40 w-64 object-cover shadow" src={src} alt="Project" />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4 min-w-max" aria-hidden>
          {images.map((src, i) => (
            <div key={`b-${i}`} className="rounded-lg overflow-hidden">
              <img className="h-40 w-64 object-cover shadow" src={src} alt="Project duplicate" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

async function sendContactMail(form: HTMLFormElement): Promise<boolean> {
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export default function Index() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if ((window as any).AOS) {
      (window as any).AOS.refreshHard();
    }
  }, []);

  async function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const ok = await sendContactMail(form);
    setSubmitted(true);
    if (!ok) setError("Failed to send. Please try again later.");
    setTimeout(() => setSubmitted(false), 4000);
    if (ok) form.reset();
  }

  return (
    <div className="bg-white text-neutral-900">
      {/* Hero */}
      <section className="relative h-[100svh] w-full overflow-hidden">
        <div className="blob h-64 w-64 -top-10 -left-10" />
        <div className="blob h-72 w-72 top-20 right-10" />
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          playsInline
          loop
          poster="https://res.cloudinary.com/doy34nvkz/image/upload/v1757496466/pexels-daniel-12255_ntj5we.jpg"
        >
          <source src="https://cdn.coverr.co/videos/coverr-construction-site-3317/1080p.mp4" type="video/mp4" />
          <source src="https://cdn.coverr.co/videos/coverr-construction-site-3317/720p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

        <div className="relative z-10 container h-full flex items-center">
          <div className="max-w-3xl text-white" data-aos="fade-up">
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide backdrop-blur">Trusted Contractors • ISO Certified</span>
            <h1 className="mt-4 text-6xl leading-tight font-extrabold">
              Building Tomorrow's Landmarks with <span className="text-brand-400">Precision</span> & <span className="text-brand-400">Integrity</span>
            </h1>
            <p className="mt-4 text-lg text-white/90">
              From residential towers to industrial complexes, we deliver end-to-end construction services with uncompromising quality and safety.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary">Get a Free Quote</a>
              <a href="#profile" className="btn-outline">Our Company Profile</a>
            </div>
          </div>
        </div>

        {/* Glass navbar backdrop gradient seam */}
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 85" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path fill="#ffffff" d="M0,64L60,64C120,64,240,64,360,58.7C480,53,600,43,720,42.7C840,43,960,53,1080,48C1200,43,1320,21,1380,10.7L1440,0L1440,90L1380,90C1320,90,1200,90,1080,90C960,90,840,90,720,90C600,90,480,90,360,90C240,90,120,90,60,90L0,90Z" />
        </svg>
      </section>

      {/* Authenticity + Metrics */}
      <section className="relative py-16 bg-gradient-to-b from-white to-orange-50/40">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage:'radial-gradient(circle at 1px 1px, #ff7a1a 1px, transparent 1px)', backgroundSize:'18px 18px'}} />
        <div className="container relative">
          <div className="whitespace-nowrap flex items-center gap-10 text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-neutral-900 ">
            <div className="flex gap-10 animate-marquee">
              <MarqueeItems />
            </div>
            <div className="flex gap-10 animate-marquee" aria-hidden="true">
              <MarqueeItems />
            </div>
          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-4" data-aos="fade-up">
            <div className="rounded-xl p-5 bg-white shadow-lg border border-orange-100">
              <div className="text-2xl font-extrabold text-brand-500">50+</div>
              <div className="text-m text-neutral-600">Projects Delivered</div>
            </div>
            <div className="rounded-xl p-5 bg-white shadow-lg border border-orange-100">
              <div className="text-2xl font-extrabold text-brand-500">20+ Yrs</div>
              <div className="text-m text-neutral-600">Industry Experience</div>
            </div>
            <div className="rounded-xl p-5 bg-white shadow-lg border border-orange-100">
              <div className="text-2xl font-extrabold text-brand-500">1M+ sqft</div>
              <div className="text-m text-neutral-600">Built Area</div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3" data-aos="zoom-in" />
        </div>
        
      </section>

      {/* About */}
      <section id="about" className="relative py-20 bg-neutral-50">
        <svg className="absolute -top-10 left-0 w-full" viewBox="0 0 1440 90" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path fill="#f5f5f5" d="M0,64L60,64C120,64,240,64,360,58.7C480,53,600,43,720,42.7C840,43,960,53,1080,48C1200,43,1320,21,1380,10.7L1440,0L1440,90L1380,90C1320,90,1200,90,1080,90C960,90,840,90,720,90C600,90,480,90,360,90C240,90,120,90,60,90L0,90Z" />
        </svg>
        <div className="container grid lg:grid-cols-2 gap-10 items-center">
          <div data-aos="fade-right">
            <h2 className="text-brand-500 font-extrabold"><span className="text-black">About</span> AcrossNetwork</h2>
            <p className="mt-4 text-neutral-600 leading-relaxed">We are a multidisciplinary construction company delivering turnkey solutions — from concept and design, to engineering, procurement and construction. Our mission is to build safe, durable and future-ready spaces.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Feature title="Design & Build" subtitle="Integrated EPC" />
              <Feature title="Safety First" subtitle="Zero-incident policy" />
              <Feature title="Green Methods" subtitle="Sustainable materials" />
              <Feature title="On-Time Delivery" subtitle="Robust planning" />
            </div>
          </div>
          <div className="relative" data-aos="zoom-in">
            <img className="rounded-xl shadow-lg w-full object-cover h-80" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop" alt="About BuildRight" />
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-xl bg-brand-500/80 blur-2xl"/>
          </div>
        </div>
      </section>

      {/* Company Profile */}
      <section id="profile" className="relative py-24">
        <svg className="absolute -top-10 left-0 w-full" viewBox="0 0 1440 90" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path fill="#ffffff" d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,53.3C840,53,960,75,1080,80C1200,85,1320,75,1380,69.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
        </svg>
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-up">
            <h2 className="text-brand-500 font-extrabold"><span className="text-black">Company</span> Profile</h2>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              AcrossNetwork is a full-service engineering and construction firm specializing in civil, residential, and industrial projects. With decades of combined expertise, our teams execute complex builds on schedule and within budget. We emphasize safety-first protocols, transparent communication, and meticulous quality control.
            </p>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              <div className="rounded-xl border border-neutral-200 p-4 shadow-sm"><div className="text-2xl text-brand-500 font-bold">95%</div><div className="text-xs text-neutral-600">Repeat Clients</div></div>
              <div className="rounded-xl border border-neutral-200 p-4 shadow-sm"><div className="text-2xl text-brand-500 font-bold">250+</div><div className="text-xs text-neutral-600">Engineers & Staff</div></div>
              <div className="rounded-xl border border-neutral-200 p-4 shadow-sm"><div className="text-2xl text-brand-500 font-bold">12</div><div className="text-xs text-neutral-600">Active Sites</div></div>
            </div>
            <ul className="mt-6 space-y-2 text-sm">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand-500"/> Pan-India Presence</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand-500"/> End-to-End EPC Services</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand-500"/> Dedicated QA/QC teams</li>
            </ul>
          </div>
          <div className="grid grid-cols-3 gap-3" data-aos="fade-left">
            <img className="rounded-lg h-44 sm:h-56 w-full object-cover shadow-md" src="https://images.unsplash.com/photo-1581093458598-94547b65b9e9?q=80&w=800&auto=format&fit=crop" alt="Construction site" />
            <img className="rounded-lg h-60 sm:h-72 w-full object-cover shadow-md translate-y-6" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop" alt="Architect plans" />
            <img className="rounded-lg h-44 sm:h-56 w-full object-cover shadow-md" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop" alt="Workers" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-neutral-50">
        <div className="container relative" data-aos="fade-up">
          <h2 className="text-brand-500 font-extrabold">Services</h2>
          <p className="mt-2 text-neutral-600">Comprehensive solutions across the full construction lifecycle.</p>
          <div className="blob h-40 w-40 -top-6 -left-6" />
          <div className="blob h-56 w-56 top-10 right-0" />
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <ServiceCard title="Pre‑construction" desc="Feasibility, budgeting, planning, value engineering." icon="📐" />
            <ServiceCard title="Design & Build" desc="Integrated design, architecture, MEP and structural." icon="🏗️" />
            <ServiceCard title="General Contracting" desc="Site execution, procurement, subcontractor management." icon="🧱" />
            <ServiceCard title="Interior Fit‑outs" desc="Corporate, retail and residential turnkey interiors." icon="🛠️" />
            <ServiceCard title="Industrial" desc="Warehouses, plants, utilities & infra works." icon="🏭" />
            <ServiceCard title="Post‑handover" desc="Facility management and maintenance." icon="♻️" />
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20">
        <div className="container relative" data-aos="fade-up">
          <h2 className="text-brand-500 font-extrabold"><span className="text-black">Our</span> Process</h2>
          <div className="blob h-40 w-40 -top-8 right-10" />
          <div className="mt-8 grid md:grid-cols-4 gap-6">
            <Step n={1} title="Consult" desc="Understand goals, constraints and budget." />
            <Step n={2} title="Plan" desc="Design, schedule and risk assessment." />
            <Step n={3} title="Build" desc="Execute with strict QA/QC and safety." />
            <Step n={4} title="Deliver" desc="Commissioning and handover on time." />
          </div>
        </div>
      </section>

      {/* Safety & Sustainability */}
      <section id="safety" className="py-20 bg-gradient-to-b from-orange-50/40 to-white">
        <div className="container grid md:grid-cols-2 gap-8" data-aos="fade-up">
          <div className="rounded-2xl p-6 border bg-white shadow-sm">
            <h3 className="text-brand-500 font-semibold">Safety Standards</h3>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              <li>• Daily toolbox talks and site audits</li>
              <li>• Mandatory PPE and access control</li>
              <li>• Emergency response & first-aid readiness</li>
              <li>• Dedicated HSE officers at all sites</li>
            </ul>
          </div>
          <div className="rounded-2xl p-6 border bg-white shadow-sm">
            <h3 className="text-brand-500 font-semibold">Sustainability</h3>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              <li>• Low-VOC, recycled and regionally sourced materials</li>
              <li>• Water and waste management on sites</li>
              <li>• Energy-efficient MEP systems</li>
              <li>• Lifecycle cost optimization</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section id="projects" className="py-20">
        <div className="container" data-aos="fade-up">
          <h2 className="text-brand-500 font-extrabold"><span className="text-black">Project</span> Highlights</h2>
          <p className="text-neutral-600 mt-2">A rolling showcase of our recent builds.</p>
          <div className="mt-8 space-y-6">
            <RowMarquee images={[
              "https://images.unsplash.com/photo-1505739679156-7fef8b4b63e0?q=80&w=1000&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=1000&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1487956382158-bb926046304a?q=80&w=1000&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1444419988131-046ed4e5ffd6?q=80&w=1000&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1582582621958-cdb0938a6a39?q=80&w=1000&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1000&auto=format&fit=crop",
            ]} reverse />
            <RowMarquee images={[
              "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=1000&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1000&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1505839673365-e3971f8d9184?q=80&w=1000&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1000&auto=format&fit=crop",
            ]} />
            <RowMarquee images={[
              "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1000&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1000&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=1000&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1000&auto=format&fit=crop",
            ]} reverse />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-20 bg-neutral-50">
        <svg className="absolute -top-10 left-0 w-full" viewBox="0 0 1440 90" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path fill="#f5f5f5" d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,53.3C840,53,960,75,1080,80C1200,85,1320,75,1380,69.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
        </svg>
        <div className="container grid lg:grid-cols-2 gap-12 items-start" data-aos="fade-up">
          <div>
            <h2 className="text-brand-500 font-extrabold"><span className="text-black">Get in</span> Touch!</h2>
            <p className="mt-3 text-neutral-600">Tell us about your project. We’ll contact you within 24 hours.</p>
            <div className="mt-6 glass rounded-xl p-6 text-white">
              <div className="flex items-center gap-3"><span className="inline-flex h-8 w-8 items-center justify-center rounded bg-white/20">📞</span><div className="text-black"> +91 99999 99999</div></div>
              <div className="flex items-center gap-3 mt-3 text-black"><span className="inline-flex h-8 w-8 items-center justify-center rounded bg-white/20">✉️</span> hello@buildright.co</div>
              <div className="flex items-center gap-3 mt-3"><span className="inline-flex h-8 w-8 items-center justify-center rounded bg-white/20">📍</span><div className="text-black"> 123 Skyline Avenue, Sector 21, Mumbai, MH 400001</div></div>
            </div>
          </div>
          <form
            className="glass rounded-xl p-6 bg-[linear-gradient(135deg,rgba(255,255,255,.6),rgba(255,255,255,.4))]"
            onSubmit={handleContactSubmit}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-neutral-800">Name</label>
                <input required name="name" className="mt-1 w-full rounded-lg border border-neutral-200 bg-white/70 px-4 py-2 outline-none focus:ring-2 focus:ring-brand-500" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-800">Email</label>
                <input required type="email" name="email" className="mt-1 w-full rounded-lg border border-neutral-200 bg-white/70 px-4 py-2 outline-none focus:ring-2 focus:ring-brand-500" placeholder="you@example.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-neutral-800">Phone</label>
                <input name="phone" className="mt-1 w-full rounded-lg border border-neutral-200 bg-white/70 px-4 py-2 outline-none focus:ring-2 focus:ring-brand-500" placeholder="+91 99999 99999" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-neutral-800">Message</label>
                <textarea required name="message" rows={4} className="mt-1 w-full rounded-lg border border-neutral-200 bg-white/70 px-4 py-2 outline-none focus:ring-2 focus:ring-brand-500" placeholder="Tell us about your project"></textarea>
              </div>
            </div>
            <button type="submit" className="mt-4 btn-primary w-full">Send Message</button>
            {submitted && !error && (
              <p className="mt-3 text-sm font-medium text-green-700">Thanks! We'll reach out shortly.</p>
            )}
            {error && (
              <p className="mt-3 text-sm font-medium text-red-700">{error}</p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}

function MarqueeItems() {
  return (
    <>
      <span className="text-brand-500 text-5xl font-extrabold">50+ Projects</span>
      <span className="opacity-30">•</span>
      <span className="text-neutral-700 text-5xl font-extrabold">20 Years Experience</span>
      <span className="opacity-30">•</span>
      <span className="text-brand-500 text-5xl font-extrabold">ISO Certified</span>
      <span className="opacity-30">•</span>
      <span className="text-neutral-700 text-5xl font-extrabold">Safety First</span>
      <span className="opacity-30">•</span>
      <span className="text-neutral-700 text-5xl font-extrabold">Pan-India Operations</span>
      <span className="opacity-30">•</span>
      <span className="text-brand-500 text-5xl font-extrabold">On-Time Delivery</span>
      <span className="opacity-30">•</span>
      <span className="text-neutral-700 text-5xl font-extrabold">Transparent Pricing</span>
    </>
  );
}
