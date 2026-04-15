import type { Metadata } from "next";
import Link from "next/link";
import ReviewsSection from "./components/ReviewsSection";

export const metadata: Metadata = {
  title: "Licensed Interstate Movers | Summit County, CO | Majestic Mountain Movers",
  description: "Summit County's only licensed interstate moving company. 30+ years serving Breckenridge, Vail & Colorado mountains. 500+ five-star reviews. Free quote: 970-468-8815.",
  alternates: { canonical: "https://www.majesticmountainmovers.com" },
};

const services = [
  { icon: "🏔️", title: "Interstate Moving", desc: "The only Summit County-based mover with full interstate authority. Guaranteed pricing, dates, and direct delivery — no terminals, no surprises.", href: "/interstate-movers-summit-county" },
  { icon: "🏠", title: "Local Moving", desc: "Summit County local moves handled by crews who live here. We know every narrow driveway, HOA rule, and mountain road.", href: "/local-movers-summit-county" },
  { icon: "🤍", title: "White Glove Moving", desc: "Premium service for luxury homes, second properties, and high-value items in Vail and Breckenridge. Art, pianos, antiques handled with utmost care.", href: "/white-glove-movers-vail-colorado" },
  { icon: "🏡", title: "Vacation Home Moving", desc: "Specialists in second home and ski condo relocations across Summit County. We coordinate remotely and work around your schedule.", href: "/vacation-home-movers-colorado" },
  { icon: "📦", title: "Furniture Delivery", desc: "White glove furniture delivery to Vail and Breckenridge. We receive, inspect, deliver, and set up — perfect for designers and homeowners.", href: "/furniture-delivery-vail-breckenridge" },
  { icon: "📋", title: "Packing Services", desc: "Full-service packing using professional materials. Our crews pack with precision — from everyday items to fragile heirlooms.", href: "/packing-services" },
];

const locations = [
  ["Breckenridge", "/breckenridge-movers"], ["Vail", "/vail-movers"],
  ["Silverthorne", "/silverthorne-movers"], ["Frisco", "/frisco-movers"],
  ["Keystone", "/keystone-movers"], ["Dillon", "/dillon-movers"],
  ["Copper Mountain", "/copper-mountain-movers"], ["Aspen", "/aspen-movers"],
  ["Denver", "/denver-movers"], ["Buena Vista", "/buena-vista-movers"],
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center" style={{
        background: "linear-gradient(135deg, #3d1f6e 0%, #6B3FA0 50%, #1a2a3a 100%)"
      }}>
        {/* Mountain SVG backdrop */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute bottom-0 left-0 right-0 w-full" viewBox="0 0 1440 400" fill="none" preserveAspectRatio="none" style={{opacity:0.12}}>
            <path d="M0 400L0 280L180 120L360 260L540 80L720 200L900 60L1080 180L1260 100L1440 160L1440 400Z" fill="white"/>
            <path d="M0 400L0 320L200 180L380 300L560 140L740 240L920 100L1100 220L1280 140L1440 200L1440 400Z" fill="white" opacity="0.5"/>
          </svg>
          {/* Decorative circles */}
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full" style={{background:"radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)"}}/>
          <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full" style={{background:"radial-gradient(circle, rgba(107,63,160,0.3) 0%, transparent 70%)"}}/>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-semibold" style={{background:"rgba(255,255,255,0.15)", border:"1px solid rgba(255,255,255,0.25)"}}>
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block"/>
                Summit County&apos;s Only Licensed Interstate Mover
              </div>

              <h1 className="font-bold leading-tight mb-6" style={{fontFamily:"'Playfair Display',Georgia,serif", fontSize:"clamp(2.2rem,5vw,3.8rem)", color:"#ffffff", textShadow:"0 2px 20px rgba(0,0,0,0.3)"}}>
                White Glove Movers<br/>
                <span style={{color:"#4ade80"}}>Vail &amp; Breckenridge</span>
              </h1>

              <p className="text-lg mb-8 leading-relaxed" style={{color:"rgba(255,255,255,0.88)", maxWidth:"520px"}}>
                30+ years moving families, second homes, and luxury properties across Colorado&apos;s mountains. Local expertise, interstate authority, 500+ five-star reviews.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link href="/moving-quote" className="btn-primary text-center text-base font-semibold">
                  Get a Free Quote →
                </Link>
                <a href="tel:9704688815" className="btn-secondary text-center text-base font-semibold">
                  📞 970-468-8815
                </a>
              </div>

              {/* Trust pills */}
              <div className="flex flex-wrap gap-3">
                {[
                  {icon:"⭐", label:"500+ Five-Star Reviews"},
                  {icon:"✅", label:"CO HHG #00502"},
                  {icon:"📅", label:"Since 1994"},
                  {icon:"🚛", label:"Air-Ride Trucks"},
                ].map(b => (
                  <div key={b.label} className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm" style={{background:"rgba(255,255,255,0.12)", border:"1px solid rgba(255,255,255,0.2)", color:"rgba(255,255,255,0.9)"}}>
                    <span>{b.icon}</span><span>{b.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Quote card */}
            <div className="lg:pl-8">
              <div className="bg-white rounded-3xl overflow-hidden" style={{boxShadow:"0 25px 80px rgba(0,0,0,0.35)"}}>
                {/* Card header */}
                <div className="px-8 pt-8 pb-6" style={{background:"linear-gradient(135deg, #6B3FA0 0%, #4A2970 100%)"}}>
                  <h2 className="text-2xl font-bold text-white mb-1" style={{fontFamily:"'Playfair Display',serif"}}>Get Your Free Estimate</h2>
                  <p className="text-purple-200 text-sm">No commitment · We respond within 1 hour</p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-yellow-300 text-sm">★★★★½</span>
                    <span className="text-purple-200 text-xs">4.5/5 from 500+ Google reviews</span>
                  </div>
                </div>
                {/* Form */}
                <div className="px-8 py-6 space-y-4">
                  {[
                    {label:"Your Name", type:"text", ph:"John Smith"},
                    {label:"Phone Number", type:"tel", ph:"(970) 555-0100"},
                    {label:"Email Address", type:"email", ph:"john@email.com"},
                    {label:"Moving From", type:"text", ph:"Breckenridge, CO"},
                    {label:"Moving To", type:"text", ph:"Vail, CO"},
                  ].map(f => (
                    <div key={f.label}>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">{f.label}</label>
                      <input type={f.type} placeholder={f.ph}
                        className="w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 transition-all"
                        style={{borderColor:"#e5e7eb", backgroundColor:"#f9fafb", color:"#111"}}
                      />
                    </div>
                  ))}
                  <Link href="/moving-quote" className="block w-full text-center py-4 rounded-xl font-bold text-white text-base mt-2" style={{background:"linear-gradient(135deg, #4CAF7D 0%, #2d8f5e 100%)", boxShadow:"0 4px 15px rgba(76,175,125,0.4)"}}>
                    Get My Free Quote →
                  </Link>
                  <p className="text-center text-xs text-gray-400 pb-2">Licensed · Insured · CO HHG #00502 · No Hidden Fees</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust scrolling bar */}
      <div style={{background:"#4A2970", padding:"14px 0", overflow:"hidden"}}>
        <div style={{display:"flex", gap:"3rem", whiteSpace:"nowrap", animation:"scroll 35s linear infinite", width:"max-content"}}>
          {[...Array(2)].map((_, r) => (
            ["🏆 30+ Years Experience","⭐ 500+ Five-Star Reviews","📋 Licensed & Insured","🏔️ Only Licensed Interstate Mover in Summit County","🚛 Air-Ride Suspension Trucks","📞 24/7 Customer Support","✅ CO HHG #00502","💰 Transparent Pricing"].map((item, i) => (
              <span key={`${r}-${i}`} style={{color:"rgba(255,255,255,0.9)", fontSize:"14px", fontWeight:500, flexShrink:0}}>
                {item} <span style={{color:"rgba(255,255,255,0.3)", marginLeft:"1.5rem"}}>•</span>
              </span>
            ))
          ))}
        </div>
        <style>{`@keyframes scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
      </div>

      {/* WHY CHOOSE US */}
      <section className="py-24" style={{background:"#f9f7ff"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5" style={{background:"#ede9ff", color:"#6B3FA0"}}>
                Why Majestic Mountain Movers
              </div>
              <h2 className="font-bold mb-6" style={{fontFamily:"'Playfair Display',serif", fontSize:"clamp(1.8rem,3.5vw,2.8rem)", color:"#1a1a2e", lineHeight:1.2}}>
                The Only Interstate-Licensed Mover Based in Summit County
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                We&apos;re not a national van line dispatching strangers. We&apos;re your neighbors — locals who live on these mountain roads, know your HOA&apos;s move-in windows, and understand what it takes to navigate Keystone in January or Breckenridge during peak season.
              </p>
              <div className="space-y-5">
                {[
                  ["Licensed Interstate Authority", "The only Summit County-based mover with full interstate authority. CO HHG #00502. No brokers, no middlemen."],
                  ["Air-Ride Suspension Trucks", "Your belongings ride in our own trucks — never mixed with another customer's, never transferred to a terminal."],
                  ["Guaranteed Pricing & Dates", "We give you a price and a date and we honor both. No 3-week delivery windows. No surprise charges."],
                  ["Olympic-Level Leadership", "Owner Ryan Shorter is a 2x Olympic Head Coach — precision, discipline, and excellence in every move."],
                  ["30+ Years Mountain Expertise", "Since 1994, we've mastered every challenge Colorado's mountains can throw at a move."],
                ].map(([title, desc]) => (
                  <div key={title as string} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{background:"#4CAF7D"}}>
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{title as string}</div>
                      <div className="text-gray-500 text-sm mt-0.5 leading-relaxed">{desc as string}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link href="/about" className="btn-outline">Meet the Team →</Link>
              </div>
            </div>

            {/* Stats card */}
            <div className="grid grid-cols-2 gap-5">
              {[
                {num:"500+", label:"Five-Star Reviews", color:"#6B3FA0"},
                {num:"30+", label:"Years in Business", color:"#4CAF7D"},
                {num:"#1", label:"Interstate Mover in Summit County", color:"#4A2970"},
                {num:"1994", label:"Year Founded", color:"#3d8a5f"},
              ].map(s => (
                <div key={s.label} className="bg-white rounded-2xl p-6 text-center" style={{boxShadow:"0 4px 20px rgba(0,0,0,0.08)", border:"1px solid #f0ebff"}}>
                  <div className="text-3xl font-bold mb-2" style={{fontFamily:"'Playfair Display',serif", color:s.color}}>{s.num}</div>
                  <div className="text-sm text-gray-500 leading-snug">{s.label}</div>
                </div>
              ))}
              <div className="col-span-2 bg-white rounded-2xl p-6" style={{boxShadow:"0 4px 20px rgba(0,0,0,0.08)", border:"2px solid #ede9ff"}}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🏆</span>
                  <div className="font-bold text-gray-900">Olympic-Led Excellence</div>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">Owner Ryan Shorter is a 2-time Olympic Head Coach. The same precision and discipline that wins gold medals goes into every single move we handle.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-bold mb-4" style={{fontFamily:"'Playfair Display',serif", fontSize:"clamp(1.8rem,3.5vw,2.8rem)", color:"#1a1a2e"}}>
              Full-Service Moving &amp; Storage
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">From local Summit County moves to cross-country relocations — handled with the expertise mountain terrain demands.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Link key={i} href={s.href} className="group block rounded-2xl p-7 transition-all duration-200" style={{background:"#f9f7ff", border:"1.5px solid #ede9ff"}}>
                <div style={{fontSize:"2.2rem", marginBottom:"1rem"}}>{s.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg group-hover:text-purple-700 transition-colors" style={{fontFamily:"'Playfair Display',serif"}}>{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{s.desc}</p>
                <span className="text-sm font-semibold" style={{color:"#6B3FA0"}}>Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3 STEPS */}
      <section className="py-24" style={{background:"linear-gradient(135deg, #f9f7ff 0%, #f0fdf6 100%)"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-bold mb-4" style={{fontFamily:"'Playfair Display',serif", fontSize:"clamp(1.8rem,3.5vw,2.8rem)", color:"#1a1a2e"}}>
              3 Simple Steps to a Stress-Free Move
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {num:"01", title:"Call or Request a Quote", desc:"Reach us at 970-468-8815 or fill out our online form. We respond within 1 hour.", color:"#6B3FA0"},
              {num:"02", title:"Get Your Custom Moving Plan", desc:"Our moving consultant creates a detailed, transparent plan with guaranteed pricing — no surprises.", color:"#4CAF7D"},
              {num:"03", title:"Relax and Enjoy Your New Home", desc:"Our vetted, background-checked crews handle everything. You focus on your new mountain life.", color:"#4A2970"},
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 text-white text-xl font-bold" style={{background:s.color, fontFamily:"'Playfair Display',serif"}}>{s.num}</div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg" style={{fontFamily:"'Playfair Display',serif"}}>{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/moving-quote" className="btn-primary text-base px-10">Start My Free Quote →</Link>
          </div>
        </div>
      </section>

      <ReviewsSection />

      {/* LOCATIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-bold mb-3" style={{fontFamily:"'Playfair Display',serif", fontSize:"clamp(1.8rem,3.5vw,2.6rem)", color:"#1a1a2e"}}>Areas We Serve</h2>
            <p className="text-gray-500">From Summit County to the Front Range — and everywhere in between</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {locations.map(([name, href]) => (
              <Link key={href as string} href={href as string}
                className="group text-center py-4 px-3 rounded-xl transition-all duration-200"
                style={{background:"#f9f7ff", border:"1px solid #ede9ff"}}>
                <div className="text-sm font-semibold text-gray-700 group-hover:text-purple-700 transition-colors">{name as string}</div>
                <div className="text-xs text-gray-400 mt-0.5">Movers →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24" style={{background:"linear-gradient(135deg, #3d1f6e 0%, #6B3FA0 100%)"}}>
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="font-bold mb-5" style={{fontFamily:"'Playfair Display',serif", fontSize:"clamp(1.8rem,3.5vw,2.8rem)"}}>
            Ready for a Stress-Free Mountain Move?
          </h2>
          <p className="mb-10 text-lg" style={{color:"rgba(255,255,255,0.8)", maxWidth:"600px", margin:"0 auto 2.5rem"}}>
            Get a free, no-obligation estimate from Summit County&apos;s most trusted moving company. We respond within 1 hour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/moving-quote" className="btn-primary text-base px-10">Get My Free Quote →</Link>
            <a href="tel:9704688815" className="btn-secondary text-base px-10">📞 Call 970-468-8815</a>
          </div>
          <p className="mt-8 text-sm" style={{color:"rgba(255,255,255,0.5)"}}>Licensed · Insured · CO HHG #00502 · Interstate Authority · Since 1994</p>
        </div>
      </section>
    </>
  );
}
