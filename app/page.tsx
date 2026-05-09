'use client'
import { useState } from 'react'

const NAV_LINKS = [
  { label: "What's Inside", href: '#inside' },
  { label: 'The Guide', href: '#guide' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

const PILLARS = [
  {
    icon: '📋',
    title: 'The A to Z PDF Guide',
    desc: '26 chapters covering every aspect of SA — from finding your first property to scaling your portfolio. No bullet dashes, no AI fluff, just real actionable knowledge written as if a successful operator is talking you through it.',
  },
  {
    icon: '🏠',
    title: 'Property Acquisition Framework',
    desc: 'How to identify high-demand locations, calculate your yield gap, and evaluate rent-to-rent opportunities without owning a single brick.',
  },
  {
    icon: '📈',
    title: 'Pricing and Yield Playbook',
    desc: 'Dynamic pricing strategy, the demand calendar, orphan night management, and how to use tools like PriceLabs to increase annual revenue by 25 to 40 percent.',
  },
  {
    icon: '⚙️',
    title: 'Operations and Systems',
    desc: 'The exact systems successful operators use to run multiple properties without being available 24 hours a day — cleaning checklists, automated messaging, key management, and contractor networks.',
  },
  {
    icon: '📣',
    title: 'Marketing and Direct Bookings',
    desc: 'How to build a brand, optimise your listing for maximum visibility, and generate direct bookings that cut out platform commissions entirely.',
  },
  {
    icon: '🧾',
    title: 'Finance, Tax and Legal',
    desc: 'The Furnished Holiday Lettings regime, compliance requirements, insurance, the contracts you actually need, and how to keep clean records from day one.',
  },
]

const GUIDE_SECTIONS = [
  { letter: 'A', label: 'Acquiring your first property' },
  { letter: 'B', label: 'Building a brand people remember' },
  { letter: 'C', label: 'Compliance, licensing and planning permission' },
  { letter: 'D', label: 'Design and interior styling' },
  { letter: 'E', label: 'Essential equipment and what to stock' },
  { letter: 'F', label: 'Finance, funding and profit margins' },
  { letter: 'G', label: 'Guest experience excellence' },
  { letter: 'H', label: 'Housekeeping and turnovers' },
  { letter: 'I', label: 'Insurance — what you actually need' },
  { letter: 'J', label: 'Joining the right platforms' },
  { letter: 'K', label: 'Key management and access solutions' },
  { letter: 'L', label: 'Legal agreements and contracts' },
  { letter: 'M', label: 'Marketing beyond the platforms' },
  { letter: 'N', label: 'Nailing your pricing strategy' },
  { letter: 'O', label: 'Operations and systems that scale' },
  { letter: 'P', label: 'Photography that converts browsers into guests' },
  { letter: 'Q', label: 'Quality control and maintaining standards' },
  { letter: 'R', label: 'Reviews and reputation management' },
  { letter: 'S', label: 'Setting up your listing for maximum visibility' },
  { letter: 'T', label: 'Tax, VAT and keeping your records' },
  { letter: 'U', label: 'Upselling and building additional revenue' },
  { letter: 'V', label: 'Vetting guests and managing difficult situations' },
  { letter: 'W', label: 'Working with co-hosts, cleaners and contractors' },
  { letter: 'X', label: 'eXpanding your portfolio strategically' },
  { letter: 'Y', label: 'Yield management and maximising annual revenue' },
  { letter: 'Z', label: 'Your 30-day launch checklist' },
]

const TESTIMONIALS = [
  {
    name: 'Marcus T.',
    role: 'SA Operator, Manchester',
    quote: 'I had no property experience and no idea where to start. The A to Z guide gave me a clear picture of exactly what I needed to do and in what order. I launched my first property six weeks after reading it.',
    stars: 5,
  },
  {
    name: 'Claire B.',
    role: 'Portfolio of 4 properties, Leeds',
    quote: 'The pricing and yield section alone was worth ten times the cost of the package. I implemented the dynamic pricing strategy and increased my monthly revenue by 38 percent in the first quarter.',
    stars: 5,
  },
  {
    name: 'Daniel F.',
    role: 'Rent-to-rent operator, London',
    quote: 'I have read every SA book and course out there. This is the only resource that actually tells you the things operators learn by making expensive mistakes — before you make them.',
    stars: 5,
  },
]

const FAQS = [
  {
    q: 'Do I need to own a property to benefit from this?',
    a: 'No. The guide covers rent-to-rent arrangements in detail, including how to find willing landlords, what to include in the agreement, and how to operate legally and profitably without owning any property.',
  },
  {
    q: 'Is this relevant if I already have one or two properties running?',
    a: 'Yes. The guide covers scaling, yield management, operations systems, and direct bookings — all areas where established operators typically have the most room to improve their revenue.',
  },
  {
    q: 'Is the PDF downloadable and printable?',
    a: 'Yes. You receive an instant download of the full A to Z PDF guide, which you can save, print, and refer to at any point. There is no DRM or restrictions on your use of it.',
  },
  {
    q: 'Is this UK-specific?',
    a: 'The guide is written with the UK market in mind, including UK-specific compliance requirements, tax rules, and platform considerations. The operational and marketing principles apply internationally.',
  },
  {
    q: 'What if it is not what I expected?',
    a: 'Full refund within 14 days, no questions asked. If the guide does not deliver clear, actionable value, you should not pay for it.',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [downloading, setDownloading] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  async function handleDownload() {
    setDownloading(true)
    try {
      const res = await fetch('/api/download')
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'SA-Blueprint-A-to-Z.pdf'
      a.click()
      URL.revokeObjectURL(url)
    } finally {
      setDownloading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#09090b] text-white">

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md border-b border-white/5 bg-black/40">
        <span className="font-bold text-lg tracking-tight">
          <span className="text-gradient">SA</span> Blueprint
        </span>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-zinc-400 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#pricing"
          className="text-sm font-semibold bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Get the Guide
        </a>
      </nav>

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-green-600/10 blur-[120px] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-300 text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Instant download — 26 chapters — 2026 edition
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6">
            The Serviced Accommodation{' '}
            <span className="text-gradient">Blueprint.</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            The complete A to Z guide to launching, running and scaling a profitable serviced accommodation business. Written by operators, for operators. No fluff, no filler.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="w-full sm:w-auto text-center font-semibold bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-xl text-base transition-all hover:scale-[1.02] shadow-lg shadow-green-600/25"
            >
              Get instant access &rarr;
            </a>
            <a
              href="#guide"
              className="w-full sm:w-auto text-center font-medium text-zinc-300 hover:text-white px-8 py-4 rounded-xl text-base border border-white/10 hover:border-white/20 transition-all"
            >
              See what&apos;s inside
            </a>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-zinc-500">
            <span className="flex items-center gap-2"><span className="text-green-400">✓</span> 26 A to Z chapters</span>
            <span className="flex items-center gap-2"><span className="text-green-400">✓</span> Instant PDF download</span>
            <span className="flex items-center gap-2"><span className="text-green-400">✓</span> 14-day money-back guarantee</span>
            <span className="flex items-center gap-2"><span className="text-green-400">✓</span> UK-focused, 2026 edition</span>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-y border-white/5 bg-white/[0.02] py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-10 text-center">
          {[
            { value: '26', label: 'chapters A to Z' },
            { value: '4.9★', label: 'average rating' },
            { value: '600+', label: 'operators using the guide' },
            { value: '14 days', label: 'money-back guarantee' },
          ].map(s => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-white">{s.value}</div>
              <div className="text-sm text-zinc-500 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT'S INSIDE ── */}
      <section id="inside" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-4">What you get</p>
            <h2 className="text-4xl font-bold mb-4">Everything in one package.</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">The SA Blueprint package is designed to give you everything you need to go from zero to your first booked property — and to keep growing from there.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PILLARS.map((p, i) => (
              <div key={i} className="card-dark rounded-2xl p-7 hover:border-green-500/30 transition-colors">
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="font-bold text-base mb-3">{p.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE GUIDE / A-Z ── */}
      <section id="guide" className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-4">The A to Z PDF Guide</p>
              <h2 className="text-4xl font-bold mb-6 leading-tight">26 chapters. Every question answered.</h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                The guide is written as a complete field manual for SA operators — the kind of knowledge that usually takes two years of expensive mistakes to accumulate. Each chapter covers one aspect of the business in plain, direct language with practical steps you can take immediately.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-8">
                There are no bullet dashes, no AI-generated filler, and no surface-level tips you have already read a hundred times. Every section is written with the specific detail that makes a real difference to how your business operates and what it earns.
              </p>
              <button
                onClick={handleDownload}
                disabled={downloading}
                className="flex items-center gap-3 bg-green-600 hover:bg-green-500 disabled:opacity-60 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-green-600/25"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
                {downloading ? 'Generating your PDF...' : 'Preview — Download Sample PDF'}
              </button>
              <p className="text-xs text-zinc-600 mt-3">Full guide unlocks after purchase. Sample available instantly.</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {GUIDE_SECTIONS.map(sec => (
                <div key={sec.letter} className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/[0.03] transition-colors">
                  <span className="text-green-400 font-bold text-sm w-5 shrink-0">{sec.letter}</span>
                  <span className="text-zinc-400 text-xs leading-relaxed">{sec.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-4">Results</p>
            <h2 className="text-4xl font-bold">What SA operators say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="card-dark rounded-2xl p-7 flex flex-col gap-4">
                <Stars count={t.stars} />
                <p className="text-zinc-300 text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-zinc-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-4">Pricing</p>
            <h2 className="text-4xl font-bold">One investment. Everything included.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">

            {/* Guide only */}
            <div className="card-dark rounded-2xl p-8">
              <div className="text-sm font-semibold text-zinc-400 mb-2">The Blueprint Guide</div>
              <div className="text-5xl font-black mb-1">£97</div>
              <div className="text-zinc-500 text-sm mb-8">one-time payment, instant access</div>
              <ul className="space-y-3 mb-8">
                {[
                  'Full 26-chapter A to Z PDF guide',
                  'Instant download after purchase',
                  '30-day launch checklist',
                  'All future guide updates',
                  '14-day money-back guarantee',
                ].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-zinc-300">
                    <span className="text-green-400">✓</span> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="block text-center w-full border border-green-500 text-green-400 hover:bg-green-500/10 font-semibold py-3 rounded-xl transition-colors"
              >
                Get the Blueprint
              </a>
            </div>

            {/* Full package */}
            <div className="relative rounded-2xl p-8 bg-green-600 border-glow">
              <div className="absolute top-4 right-4 bg-amber-400 text-black text-xs font-bold px-2 py-0.5 rounded-full">Best Value</div>
              <div className="text-sm font-semibold text-green-200 mb-2">Blueprint + Mentorship</div>
              <div className="text-5xl font-black mb-1">£297</div>
              <div className="text-green-200 text-sm mb-8">one-time payment</div>
              <ul className="space-y-3 mb-8">
                {[
                  'Everything in the Blueprint',
                  'Four 1-to-1 coaching calls',
                  'Property and deal review',
                  'Listing and pricing audit',
                  'Access to private SA community',
                  'Priority email support for 90 days',
                ].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white">
                    <span className="text-white/70">✓</span> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="block text-center w-full bg-white text-green-700 hover:bg-green-50 font-bold py-3 rounded-xl transition-colors"
              >
                Get the Full Package
              </a>
            </div>

          </div>
          <p className="text-center text-zinc-500 text-sm mt-8">
            Running a team or want to train your staff?{' '}
            <a href="#contact" className="text-green-400 hover:underline">Contact us</a> for group rates.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-4">FAQ</p>
            <h2 className="text-4xl font-bold">Common questions</h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <div key={i} className="card-dark rounded-xl overflow-hidden">
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-medium hover:text-green-300 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {f.q}
                  <span className={`shrink-0 text-zinc-500 transition-transform duration-200 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm text-zinc-400 leading-relaxed border-t border-white/5 pt-4">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 px-6 bg-white/[0.02] border-t border-white/5">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-4">Get started</p>
            <h2 className="text-4xl font-bold mb-4">Ready to build your SA business?</h2>
            <p className="text-zinc-400">Fill in your details and we will send you access within minutes.</p>
          </div>

          {submitted ? (
            <div className="card-dark rounded-2xl p-10 text-center">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold mb-2">You&apos;re in.</h3>
              <p className="text-zinc-400 text-sm">Check your inbox — your access details will be with you within the next few minutes.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card-dark rounded-2xl p-8 space-y-5">
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Full name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData(d => ({ ...d, name: e.target.value }))}
                  placeholder="Jane Smith"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-green-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Email address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData(d => ({ ...d, email: e.target.value }))}
                  placeholder="jane@company.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-green-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Which package interests you?</label>
                <select
                  value={formData.message}
                  onChange={e => setFormData(d => ({ ...d, message: e.target.value }))}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-green-500 transition-colors"
                >
                  <option value="" className="bg-zinc-900">Select an option</option>
                  <option value="blueprint" className="bg-zinc-900">The Blueprint Guide — £97</option>
                  <option value="full" className="bg-zinc-900">Blueprint + Mentorship — £297</option>
                  <option value="team" className="bg-zinc-900">Team or group licence</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-4 rounded-xl transition-all hover:scale-[1.01] shadow-lg shadow-green-600/25"
              >
                Get Instant Access &rarr;
              </button>
              <p className="text-center text-xs text-zinc-600">No spam. 14-day full refund. Cancel anytime.</p>
            </form>
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/5 px-6 py-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
          <span className="font-bold text-zinc-400"><span className="text-gradient">SA</span> Blueprint</span>
          <div className="flex gap-6">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className="hover:text-zinc-400 transition-colors">{l.label}</a>
            ))}
          </div>
          <span>© {new Date().getFullYear()} SA Blueprint. All rights reserved.</span>
        </div>
      </footer>

    </div>
  )
}
