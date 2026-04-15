import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{background:"#6B3FA0"}}>
                <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
                  <path d="M14 3L4 20h20L14 3z" fill="white" opacity="0.9"/>
                  <path d="M14 8L8 20h12L14 8z" fill="white" opacity="0.6"/>
                  <path d="M14 13L10 20h8L14 13z" fill="white" opacity="0.4"/>
                </svg>
              </div>
              <div>
                <div className="font-bold text-white text-sm" style={{fontFamily:"'Playfair Display',serif"}}>Majestic Mountain Movers</div>
                <div className="text-xs text-gray-400">Silverthorne, CO</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">Summit County's only licensed interstate moving company. Serving Breckenridge, Vail, and the Colorado mountains since 1994.</p>
            <div className="space-y-1 text-sm">
              <div className="text-gray-400">CO HHG #00502 &bull; Licensed Interstate Mover</div>
              <a href="tel:9704688815" className="text-green-400 font-semibold hover:text-green-300 block">970-468-8815</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                ["Interstate Moving", "/interstate-movers-summit-county"],
                ["Local Moving", "/local-movers-summit-county"],
                ["White Glove Moving", "/white-glove-movers-vail-colorado"],
                ["Vacation Home Moving", "/vacation-home-movers-colorado"],
                ["Furniture Delivery", "/furniture-delivery-vail-breckenridge"],
                ["Packing Services", "/packing-services"],
              ].map(([name,href])=>(
                <li key={href}><Link href={href} className="text-gray-400 hover:text-white transition-colors">{name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Areas Served</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                ["Breckenridge Movers", "/breckenridge-movers"],
                ["Vail Movers", "/vail-movers"],
                ["Silverthorne Movers", "/silverthorne-movers"],
                ["Frisco Movers", "/frisco-movers"],
                ["Keystone Movers", "/keystone-movers"],
                ["Dillon Movers", "/dillon-movers"],
                ["Copper Mountain", "/copper-mountain-movers"],
                ["Denver Movers", "/denver-movers"],
              ].map(([name,href])=>(
                <li key={href}><Link href={href} className="text-gray-400 hover:text-white transition-colors">{name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div>
                <div className="text-gray-400 text-xs uppercase tracking-wide mb-1">Phone</div>
                <a href="tel:9704688815" className="text-white font-semibold hover:text-green-400 transition-colors">970-468-8815</a>
              </div>
              <div>
                <div className="text-gray-400 text-xs uppercase tracking-wide mb-1">Location</div>
                <div className="text-gray-300">Silverthorne, CO 80498<br/>Summit County, Colorado</div>
              </div>
              <div>
                <div className="text-gray-400 text-xs uppercase tracking-wide mb-1">Hours</div>
                <div className="text-gray-300">Mon–Sat: 7am–7pm<br/>Sun: 8am–5pm</div>
              </div>
              <Link href="/moving-quote" className="inline-block mt-2 bg-green-500 text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-green-600 transition-colors">Get Free Quote</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-gray-500">© {new Date().getFullYear()} Majestic Mountain Movers. All rights reserved. | CO HHG #00502</div>
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <span>⭐ 4.5/5 from 500+ Google Reviews</span>
            <span>Licensed &bull; Insured &bull; Interstate Authority</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
