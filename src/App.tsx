import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import TapToCall from './components/TapToCall'
import Home from './pages/Home'
import ServiceDetail from './pages/ServiceDetail'
export default function App() {
  return <div className="min-h-screen bg-muted"><Navbar /><Routes><Route path="/" element={<Home />}/><Route path="/service/:id" element={<ServiceDetail />}/></Routes><TapToCall /></div>
}
