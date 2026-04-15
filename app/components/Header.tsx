"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const locations = [
  { name: "Breckenridge", href: "/breckenridge-movers" },
  { name: "Vail", href: "/vail-movers" },
  { name: "Silverthorne", href: "/silverthorne-movers" },
  { name: "Frisco", href: "/frisco-movers" },
  { name: "Keystone", href: "/keystone-movers" },
  { name: "Dillon", href: "/dillon-movers" },
  { name: "Copper Mountain", href: "/copper-mountain-movers" },
  { name: "Aspen", href: "/aspen-movers" },
  { name: "Denver", href: "/denver-movers" },
  { name: "Buena Vista", href: "/buena-vista-movers" },
];

const services = [
  { name: "Interstate Moving", href: "/interstate-movers-summit-county" },
  { name: "Local Moving", href: "/local-movers-summit-county" },
  { name: "White Glove Moving", href: "/white-glove-movers-vail-colorado" },
  { name: "Vacation Home Moving", href: "/vacation-home-movers-colorado" },
  { name: "Furniture Delivery", href: "/furniture-delivery-vail-breckenridge" },
  { name: "Packing Services", href: "/packing-services" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{background:"#6B3FA0"}}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 3L4 20h20L14 3z" fill="white" opacity="0.9"/>
                <path d="M14 8L8 20h12L14 8z" fill="white" opacity="0.6"/>
                <path d="M14 13L10 20h8L14 13z" fill="white" opacity="0.4"/>
              </svg>
            </div>
            <div>
              <div className="font-bold text-gray-900 leading-tight" style={{fontFamily:"'Playfair Display',serif", fontSize:"1.1rem"}}>Majestic Mountain</div>
              <div className="text-xs text-gray-500 font-medium tracking-wide uppercase">Movers</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-purple-700 transition-colors">Home</Link>

            {/* Services dropdown */}
            <div className="relative" onMouseEnter={()=>setServicesOpen(true)} onMouseLeave={()=>setServicesOpen(false)}>
              <button className="text-sm font-medium text-gray-700 hover:text-purple-700 transition-colors flex items-center gap-1">
                Services <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white shadow-xl rounded-xl border border-gray-100 py-2 z-50">
                  {services.map(s => (
                    <Link key={s.href} href={s.href} className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors">{s.name}</Link>
                  ))}
                </div>
              )}
            </div>

            {/* Locations dropdown */}
            <div className="relative" onMouseEnter={()=>setLocationsOpen(true)} onMouseLeave={()=>setLocationsOpen(false)}>
              <button className="text-sm font-medium text-gray-700 hover:text-purple-700 transition-colors flex items-center gap-1">
                Areas Served <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
              </button>
              {locationsOpen && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-white shadow-xl rounded-xl border border-gray-100 py-2 z-50">
                  {locations.map(l => (
                    <Link key={l.href} href={l.href} className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors">{l.name}</Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-purple-700 transition-colors">About</Link>
            <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-purple-700 transition-colors">Contact</Link>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:9704688815" className="text-sm font-semibold text-purple-700 hover:text-purple-900 transition-colors flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              970-468-8815
            </a>
            <Link href="/moving-quote" className="btn-primary text-sm py-3 px-6">Get a Free Quote</Link>
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden p-2" onClick={()=>setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-1">
          <Link href="/" className="block py-2.5 text-sm font-medium text-gray-700" onClick={()=>setMobileOpen(false)}>Home</Link>
          <div className="py-1">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-0 py-1">Services</div>
            {services.map(s => <Link key={s.href} href={s.href} className="block py-2 text-sm text-gray-700 pl-3" onClick={()=>setMobileOpen(false)}>{s.name}</Link>)}
          </div>
          <div className="py-1">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-0 py-1">Areas Served</div>
            {locations.map(l => <Link key={l.href} href={l.href} className="block py-2 text-sm text-gray-700 pl-3" onClick={()=>setMobileOpen(false)}>{l.name}</Link>)}
          </div>
          <Link href="/about" className="block py-2.5 text-sm font-medium text-gray-700" onClick={()=>setMobileOpen(false)}>About</Link>
          <Link href="/contact" className="block py-2.5 text-sm font-medium text-gray-700" onClick={()=>setMobileOpen(false)}>Contact</Link>
          <div className="pt-3 border-t border-gray-100 flex flex-col gap-3">
            <a href="tel:9704688815" className="text-center py-3 text-sm font-semibold text-purple-700 border border-purple-200 rounded-full">📞 970-468-8815</a>
            <Link href="/moving-quote" className="btn-primary text-sm text-center py-3" onClick={()=>setMobileOpen(false)}>Get a Free Quote</Link>
          </div>
        </div>
      )}
    </header>
  );
}
