import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { business } from '../data/BusinessData'
function Reveal({ children, className='', delay=0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('opacity-100','translate-y-0'); el.classList.remove('opacity-0','translate-y-8') } }, { threshold: 0.1 })
    obs.observe(el); return () => obs.disconnect()
  }, [])
  return <div ref={ref} className={`opacity-0 translate-y-8 transition-all duration-700 ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>
}
export default function Home() {
  return (
    <main className="pb-24 md:pb-0">
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0"><img src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=1600&q=80" alt="Family photo session" className="w-full h-full object-cover object-center"/><div className="absolute inset-0 bg-gradient-to-r from-green-950/85 via-green-900/60 to-transparent"/></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-24">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6">41 Reviews — 100% Recommend · Cambridge, ON</div>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-white leading-tight mb-4">{business.tagline}</h1>
            <p className="text-green-100 text-lg mb-8 leading-relaxed">{business.subtagline}</p>
            <div className="flex flex-wrap gap-3">
              <a href={`tel:${business.phone}`} className="text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-lg" style={{background:'#2D6A4F'}}>{business.phoneDisplay} — Book Now</a>
              <a href="#services" className="bg-white/20 backdrop-blur hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-full text-lg border border-white/30 transition-colors">View Sessions</a>
            </div>
            <div className="flex gap-6 mt-8 text-green-200 text-sm flex-wrap"><span>✓ Family Sessions</span><span>✓ Newborn</span><span>✓ Mini Sessions</span><span>✓ KW Region & Beyond</span></div>
          </div>
        </div>
      </section>
      <section className="py-4" style={{background:'#2D6A4F'}}><div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-6 text-white text-sm font-medium"><span>✓ Family Sessions</span><span>✓ Mini Sessions from $125</span><span>✓ Newborn & Baby</span><span>✓ Milestones</span><span>✓ Cambridge & KW Region</span></div></section>
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <Reveal className="text-center mb-12"><h2 className="font-heading text-4xl font-bold text-foreground mb-3">Photography Sessions</h2><p className="text-stone-500 text-lg">Every session tells your story — in a real, authentic way</p></Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {business.services.map((s,i)=>(
              <Reveal key={s.id} delay={i*80}>
                <Link to={`/service/${s.id}`} className="group block bg-muted rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border">
                  <div className="overflow-hidden h-52"><img src={s.image} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/></div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2"><h3 className="font-heading text-xl font-bold text-foreground">{s.name}</h3><span className="font-semibold text-sm" style={{color:'#2D6A4F'}}>{s.price}</span></div>
                    <p className="text-stone-500 text-sm leading-relaxed line-clamp-2">{s.description}</p>
                    <div className="mt-4 text-sm font-semibold hover:underline" style={{color:'#2D6A4F'}}>Learn more →</div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section id="reviews" className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <Reveal className="text-center mb-12"><h2 className="font-heading text-4xl font-bold text-foreground mb-3">What Families Say</h2><p className="text-stone-500">{business.rating} stars · {business.reviewCount}</p></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {business.reviews.map((r,i)=>(
              <Reveal key={i} delay={i*100}>
                <div className="bg-white p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex gap-1 mb-3">{[...Array(r.rating)].map((_,j)=><span key={j} style={{color:'#2D6A4F'}}>★</span>)}</div>
                  <p className="text-stone-700 text-sm leading-relaxed italic mb-4">"{r.text}"</p>
                  <p className="font-semibold text-foreground text-sm">— {r.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Reveal>
            <h2 className="font-heading text-4xl font-bold text-foreground mb-4">Book Your Session</h2>
            <p className="text-stone-500 text-lg mb-8">Currently booking 2026 — reach out to check availability</p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href={`tel:${business.phone}`} className="text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-md" style={{background:'#2D6A4F'}}>{business.phoneDisplay}</a>
              <a href={business.instagram} target="_blank" rel="noreferrer" className="bg-muted hover:bg-border text-foreground font-semibold px-8 py-4 rounded-full text-lg border border-border transition-colors">Instagram</a>
            </div>
            <div className="bg-muted rounded-2xl p-6 inline-block text-left border border-border"><p className="text-foreground font-semibold mb-1">{business.address}</p><p className="text-stone-500 text-sm">{business.hours}</p></div>
          </Reveal>
        </div>
      </section>
      <footer className="py-8" style={{background:'#1a2e25'}}><div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-green-300"><div className="font-heading text-white text-lg font-bold">{business.name}</div><div>Cambridge, ON · KW Region</div><div>Family · Newborn · Milestones</div></div></footer>
    </main>
  )
}
