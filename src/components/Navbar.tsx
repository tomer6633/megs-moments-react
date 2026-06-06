import { useState } from 'react'
import { Link } from 'react-router-dom'
import { business } from '../data/BusinessData'
export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="font-heading text-xl font-bold tracking-wide" style={{color:'#2D6A4F'}}>{business.name}</Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#services" className="hover:text-primary transition-colors">Sessions</a>
          <a href="#reviews" className="hover:text-primary transition-colors">Reviews</a>
          <a href="#contact" className="hover:text-primary transition-colors">Book</a>
          <a href={`tel:${business.phone}`} className="text-white px-5 py-2 rounded-full font-semibold hover:opacity-90 transition-all" style={{background:'#2D6A4F'}}>Book a Session</a>
        </div>
        <button onClick={()=>setOpen(!open)} className="md:hidden"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">{open?<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>:<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}</svg></button>
      </div>
      {open && <div className="md:hidden bg-white border-t border-border px-4 py-4 flex flex-col gap-4 text-sm font-medium">
        <a href="#sessions" onClick={()=>setOpen(false)}>Sessions</a>
        <a href="#reviews" onClick={()=>setOpen(false)}>Reviews</a>
        <a href="#contact" onClick={()=>setOpen(false)}>Book</a>
        <a href={`tel:${business.phone}`} className="text-white text-center px-4 py-2 rounded-full font-semibold" style={{background:'#2D6A4F'}}>Book a Session</a>
      </div>}
    </nav>
  )
}
