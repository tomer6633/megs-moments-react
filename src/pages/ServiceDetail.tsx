import { useParams, Link } from 'react-router-dom'
import { business } from '../data/BusinessData'
export default function ServiceDetail() {
  const { id } = useParams()
  const service = business.services.find(s=>s.id===id)
  if (!service) return <div className="p-8 text-center">Not found. <Link to="/" className="underline" style={{color:'#2D6A4F'}}>Go back</Link></div>
  return (
    <main className="pb-24 md:pb-0">
      <div className="relative h-64 md:h-96 overflow-hidden"><img src={service.image} alt={service.name} className="w-full h-full object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-green-950/80 to-transparent"/><div className="absolute bottom-6 left-0 right-0 px-6"><div className="max-w-4xl mx-auto"><Link to="/" className="text-green-200 text-sm hover:text-white mb-2 inline-block">← Back to Megs Moments</Link><h1 className="font-heading text-4xl md:text-5xl font-bold text-white">{service.name}</h1><span className="font-semibold text-lg" style={{color:'#6EE7B7'}}>{service.price}</span></div></div></div>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-stone-700 text-lg leading-relaxed mb-8">{service.description}</p>
        <div className="bg-muted rounded-2xl p-6 border border-border mb-8"><h3 className="font-heading text-xl font-bold text-foreground mb-3">Book This Session</h3><a href={`tel:${business.phone}`} className="inline-flex text-white font-bold px-6 py-3 rounded-full transition-all hover:scale-105" style={{background:'#2D6A4F'}}>{business.phoneDisplay}</a></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">{business.services.filter(s=>s.id!==id).slice(0,3).map(s=><Link key={s.id} to={`/service/${s.id}`} className="group bg-white border border-border rounded-xl overflow-hidden hover:shadow-md transition-all"><img src={s.image} alt={s.name} className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"/><div className="p-3"><h4 className="font-heading font-bold text-foreground text-sm">{s.name}</h4><p className="text-xs font-semibold" style={{color:'#2D6A4F'}}>{s.price}</p></div></Link>)}</div>
      </div>
    </main>
  )
}
