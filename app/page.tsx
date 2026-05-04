export default function Home() {
  const faqs = [
    {
      q: 'Which search engines and platforms do you track?',
      a: 'We track Google Maps and Google My Business local pack results for any keyword and location you configure.'
    },
    {
      q: 'How often are rankings updated?',
      a: 'Rankings are checked daily by default. You can view historical trends and compare week-over-week or month-over-month changes.'
    },
    {
      q: 'Can I track multiple competitors at once?',
      a: 'Yes. Add up to 10 competitors per keyword and see side-by-side ranking comparisons on your dashboard.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          Local SEO Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track Local Rankings<br />Before Competitors Do
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Monitor your Google My Business position for every local keyword. See exactly where competitors outrank you and fix it fast.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Tracking — $14/mo
        </a>
        <p className="mt-3 text-xs text-[#8b949e]">Cancel anytime. No contracts.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {['Daily rank checks', 'Competitor comparison', 'Historical trends', 'Google Maps tracking', 'Email alerts'].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#c9d1d9] text-sm px-4 py-1.5 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="flex items-end justify-center gap-1 mb-1">
            <span className="text-5xl font-bold text-white">$14</span>
            <span className="text-[#8b949e] mb-2">/mo</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to dominate local search</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Track up to 50 keywords',
              'Up to 10 competitors per keyword',
              'Daily automated rank checks',
              'Historical trend charts',
              'Email alerts on rank changes',
              'Google Maps local pack data',
              'CSV export'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Local SEO Rank Tracker. All rights reserved.
      </footer>
    </main>
  )
}
