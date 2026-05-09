'use client'
import { useState } from 'react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

const MODULES = [
  {
    week: 'Week 1–2',
    title: 'AI Foundations & the Builder Mindset',
    points: [
      'How LLMs actually work — no maths required',
      'Prompt engineering that ships, not plays',
      'Choosing models: GPT-4o vs Claude vs Gemini',
      'Your first working AI app in 48 hours',
    ],
  },
  {
    week: 'Week 3–4',
    title: 'Building AI-Powered Products',
    points: [
      'Agentic workflows with tool use & function calling',
      'RAG pipelines for knowledge-heavy apps',
      'Voice AI — ElevenLabs, VAPI, Twilio',
      'Streaming, latency, and UX best practices',
    ],
  },
  {
    week: 'Week 5–6',
    title: 'Automation & Business Integration',
    points: [
      'n8n & Make automation at scale',
      'CRM, email, and calendar AI integrations',
      'AI agents that make outbound calls',
      'Data pipelines and AI-driven reporting',
    ],
  },
  {
    week: 'Week 7–8',
    title: 'Ship, Sell & Scale',
    points: [
      'Deploying to Vercel, Railway, and Supabase',
      'Pricing and packaging AI products',
      'Landing pages that convert',
      'Building your first AI revenue stream',
    ],
  },
]

const TESTIMONIALS = [
  {
    name: 'James R.',
    role: 'Founder, SaaS startup',
    quote: 'I went from zero coding knowledge to shipping a fully working AI sales assistant in six weeks. This course is the real deal.',
    stars: 5,
  },
  {
    name: 'Priya M.',
    role: 'Marketing Director',
    quote: 'The ROI on this was immediate. I automated three workflows in week four alone and saved 12 hours a week.',
    stars: 5,
  },
  {
    name: 'Tom S.',
    role: 'Freelance consultant',
    quote: 'I\'ve tried other AI courses. This is the only one that gives you working code, not just slides and theory.',
    stars: 5,
  },
]

const FAQS = [
  {
    q: 'Do I need to know how to code?',
    a: 'No. We start from scratch and teach you the minimum code you actually need. Many students have zero coding background and still ship real products.',
  },
  {
    q: 'How much time do I need per week?',
    a: 'Plan for 5–8 hours per week. The course is self-paced so you can go faster or slower, but 8 weeks is the sweet spot.',
  },
  {
    q: 'What tools and APIs will I need?',
    a: 'You\'ll need accounts for OpenAI / Anthropic (free tiers work for most modules), Vercel, and a few no-code tools. Total spend for the course is under £30.',
  },
  {
    q: 'Is there a refund policy?',
    a: 'Yes — full refund within 14 days if the course isn\'t right for you. No questions asked.',
  },
  {
    q: 'Do I get lifetime access?',
    a: 'Yes. You get lifetime access plus all future updates as we add new modules and tools.',
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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#09090b] text-white">

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md border-b border-white/5 bg-black/40">
        <span className="font-bold text-lg tracking-tight">
          <span className="text-gradient">AI</span> Mastery
        </span>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-zinc-400 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="text-sm font-semibold bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Enrol Now
        </a>
      </nav>

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-green-600/10 blur-[120px] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-300 text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Next cohort starts in June 2026 — limited spots
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6">
            Build Real AI Products.<br />
            <span className="text-gradient">In 8 Weeks.</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            A hands-on course that takes you from zero to shipping AI-powered apps, automations, and agents — even if you&apos;ve never written a line of code.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="w-full sm:w-auto text-center font-semibold bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-xl text-base transition-all hover:scale-[1.02] shadow-lg shadow-green-600/25"
            >
              See Pricing &rarr;
            </a>
            <a
              href="#curriculum"
              className="w-full sm:w-auto text-center font-medium text-zinc-300 hover:text-white px-8 py-4 rounded-xl text-base border border-white/10 hover:border-white/20 transition-all"
            >
              View Curriculum
            </a>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-zinc-500">
            <span className="flex items-center gap-2"><span className="text-green-400">✓</span> 8-week live cohort</span>
            <span className="flex items-center gap-2"><span className="text-green-400">✓</span> Lifetime access</span>
            <span className="flex items-center gap-2"><span className="text-green-400">✓</span> 14-day money-back guarantee</span>
            <span className="flex items-center gap-2"><span className="text-green-400">✓</span> Private community</span>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF BAR ── */}
      <section className="border-y border-white/5 bg-white/[0.02] py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-10 text-center">
          {[
            { value: '400+', label: 'Students enrolled' },
            { value: '4.9★', label: 'Average rating' },
            { value: '8 weeks', label: 'To your first AI product' },
            { value: '£30', label: 'Max tool spend' },
          ].map(s => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-white">{s.value}</div>
              <div className="text-sm text-zinc-500 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-4">Who this is for</p>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Built for people who want to <span className="text-gradient">build</span>, not just learn.
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Whether you&apos;re a founder looking to embed AI into your product, a professional who wants to automate the boring parts of their job, or someone who just wants to turn an idea into something real — this course was built for you.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Every module ends with a deployable project. By week 8 you&apos;ll have a portfolio of working AI applications and the skills to keep building indefinitely.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: '🚀', title: 'Founders', desc: 'Add AI to your product without hiring a team' },
              { icon: '💼', title: 'Professionals', desc: 'Automate workflows and 10x your output' },
              { icon: '🛠️', title: 'Freelancers', desc: 'Offer AI services and charge premium rates' },
              { icon: '💡', title: 'Idea people', desc: 'Turn your concept into a working prototype' },
            ].map(c => (
              <div key={c.title} className="card-dark rounded-xl p-5">
                <div className="text-2xl mb-3">{c.icon}</div>
                <div className="font-semibold text-sm mb-1">{c.title}</div>
                <div className="text-xs text-zinc-500">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CURRICULUM ── */}
      <section id="curriculum" className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-4">The curriculum</p>
            <h2 className="text-4xl font-bold">8 weeks. Real projects. Zero fluff.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {MODULES.map((m, i) => (
              <div key={i} className="card-dark rounded-2xl p-7 hover:border-green-500/30 transition-colors">
                <div className="text-xs font-semibold text-green-400 uppercase tracking-widest mb-2">{m.week}</div>
                <h3 className="text-lg font-bold mb-4">{m.title}</h3>
                <ul className="space-y-2">
                  {m.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-zinc-400">
                      <span className="text-green-400 mt-0.5 shrink-0">→</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-4">Student results</p>
            <h2 className="text-4xl font-bold">What students say</h2>
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
            <h2 className="text-4xl font-bold">Simple, transparent pricing</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">

            {/* Self-paced */}
            <div className="card-dark rounded-2xl p-8">
              <div className="text-sm font-semibold text-zinc-400 mb-2">Self-Paced</div>
              <div className="text-5xl font-black mb-1">£297</div>
              <div className="text-zinc-500 text-sm mb-8">one-time payment</div>
              <ul className="space-y-3 mb-8">
                {[
                  'Full 8-week curriculum',
                  'Lifetime access + updates',
                  'Private community access',
                  'All project files & code',
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
                Enrol — Self-Paced
              </a>
            </div>

            {/* Live cohort */}
            <div className="relative rounded-2xl p-8 bg-green-600 border-glow">
              <div className="absolute top-4 right-4 bg-amber-400 text-black text-xs font-bold px-2 py-0.5 rounded-full">Most Popular</div>
              <div className="text-sm font-semibold text-green-200 mb-2">Live Cohort</div>
              <div className="text-5xl font-black mb-1">£497</div>
              <div className="text-green-200 text-sm mb-8">one-time payment</div>
              <ul className="space-y-3 mb-8">
                {[
                  'Everything in Self-Paced',
                  'Weekly live Q&A sessions',
                  'Direct access to instructors',
                  'Peer accountability groups',
                  'Portfolio review & feedback',
                  'Certificate of completion',
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
                Enrol — Live Cohort
              </a>
            </div>

          </div>
          <p className="text-center text-zinc-500 text-sm mt-8">
            Need a team licence? <a href="#contact" className="text-green-400 hover:underline">Get in touch</a> for group pricing.
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
                  <span className={`shrink-0 text-zinc-500 transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
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

      {/* ── CONTACT / ENROL ── */}
      <section id="contact" className="py-24 px-6 bg-white/[0.02] border-t border-white/5">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-4">Get started</p>
            <h2 className="text-4xl font-bold mb-4">Ready to build with AI?</h2>
            <p className="text-zinc-400">Fill in your details and we&apos;ll send you everything you need to get started.</p>
          </div>

          {submitted ? (
            <div className="card-dark rounded-2xl p-10 text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-xl font-bold mb-2">You&apos;re on the list!</h3>
              <p className="text-zinc-400 text-sm">We&apos;ll be in touch within 24 hours with next steps.</p>
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
                <label className="block text-sm font-medium text-zinc-300 mb-2">Tell us about yourself <span className="text-zinc-600">(optional)</span></label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={e => setFormData(d => ({ ...d, message: e.target.value }))}
                  placeholder="What do you want to build with AI?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-green-500 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-4 rounded-xl transition-all hover:scale-[1.01] shadow-lg shadow-green-600/25"
              >
                Reserve My Spot &rarr;
              </button>
              <p className="text-center text-xs text-zinc-600">No spam. Unsubscribe anytime. 14-day refund guarantee.</p>
            </form>
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/5 px-6 py-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
          <span className="font-bold text-zinc-400"><span className="text-gradient">AI</span> Mastery</span>
          <div className="flex gap-6">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className="hover:text-zinc-400 transition-colors">{l.label}</a>
            ))}
          </div>
          <span>© {new Date().getFullYear()} AI Mastery. All rights reserved.</span>
        </div>
      </footer>

    </div>
  )
}
