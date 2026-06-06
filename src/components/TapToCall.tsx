import { business } from '../data/BusinessData'
export default function TapToCall() {
  return <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden"><a href={`tel:${business.phone}`} className="flex items-center justify-center gap-2 text-white w-full py-4 text-base font-bold shadow-lg" style={{background:'#2D6A4F'}}>{business.phoneDisplay} — Book a Session</a></div>
}
