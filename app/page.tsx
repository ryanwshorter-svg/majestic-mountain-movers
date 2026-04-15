import type { Metadata } from "next";
import Link from "next/link";
import ReviewsSection from "./components/ReviewsSection";
import TrustBar from "./components/TrustBar";

export const metadata: Metadata = {
  title: "Licensed Interstate Movers | Summit County, CO | Majestic Mountain Movers",
  description: "Summit County's only licensed interstate moving company. 30+ years serving Breckenridge, Vail & Colorado mountains. 500+ five-star reviews. Free quote: 970-468-8815.",
  alternates: { canonical: "https://www.majesticmountainmovers.com" },
};

const services = [
  { icon: "🏔️", title: "Interstate Moving", desc: "The only licensed interstate mover based in Summit County. Guaranteed pricing, dates, and direct delivery — no terminals, no surprises.", href: "/interstate-movers-summit-county" },
  { icon: "🏠", title: "Local Moving", desc: "Summit County local moves handled by crews who live here. We know every narrow driveway, HOA rule, and mountain road.", href: "/local-movers-summit-county" },
  { icon: "🤍", title: "White Glove Moving", desc: "Premium service for luxury homes, second properties, and high-value items in Vail and Breckenridge. Art, pianos, antiques — treated with utmost care.", href: "/white-glove-movers-vail-colorado" },
  { icon: "🏡", title: "Vacation Home Moving", desc: "Specialists in second home and ski condo relocations across Summit County. We coordinate remotely and work around your schedule.", href: "/vacation-home-movers-colorado" },
  { icon: "📦", title: "Furniture Delivery", desc: "White glove furniture delivery to Vail and Breckenridge. We receive, inspect, deliver, and set up — perfect for interior designers and homeowners.", href: "/furniture-delivery-vail-breckenridge" },
  { icon: "📋", title: "Packing Services", desc: "Full-service packing using professional materials. Our crews pack with precision — from everyday items to fragile heirlooms.", href: "/packing-services" },
];

const locations = [
  ["Breckenridge", "/breckenridge-movers"], ["Vail", "/vail-movers"],
  ["Silverthorne", "/silverthorne-movers"], ["Frisco", "/frisco-movers"],
  ["Keystone", "/keystone-movers"], ["Dillon", "/dillon-movers"],
  ["Copper Mountain", "/copper-mountain-movers"], ["Aspen", "/aspen-movers"],
  ["Denver", "/denver-movers"], ["Buena Vista", "/buena-vista-movers"],
];

const steps = [
  { num: "01", title: "Call or Request a Quote", desc: "Reach us at 970-468-8815 or fill out our online form. We respond within 1 hour." },
  { num: "02", title: "Get Your Custom Moving Plan", desc: "Our moving consultant creates a detailed, transparent plan with guaranteed pricing — no surprises." },
  { num: "03", title: "Relax and Enjoy Your New Home", desc: "Our vetted, background-checked crews handle everything. You focus on your new mountain life." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden" style={{background:"linear-gradient(135deg, #4A2970 0%, #6B3FA0 40%, #2C3E50 100%)"}}>
        {/* Mountain silhouette */}
        <div className="absolute bottom-0 left-0 right-0 opacity-10">
          <svg viewBox="0 0 1440 300" fill="white" preserveAspectRatio="none" className="w-full h-48">
            <path d="M0,300 L0,200 L200,80 L400,180 L600,40 L800,160 L1000,60 L1200,140 L1440,80 L1440,300 Z"/>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 text-sm font-medium">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Summit County's Only Licensed Interstate Mover
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{fontFamily:"'Playfair Display',serif"}}>
              White Glove Movers<br/>
              <span className="text-green-400">Vail &amp; Breckenridge</span>
            </h1>
            <p className="text-xl text-purple-100 leading-relaxed mb-8 max-w-lg">
              30+ years moving families, second homes, and luxury properties across Colorado's mountains. Local expertise, interstate authority, 500+ five-star reviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/moving-quote" className="btn-primary text-center text-base">Get a Free Quote →</Link>
              <a href="tel:9704688815" className="btn-secondary text-center text-base">📞 970-468-8815</a>
            </div>
            <div className="flex items-center gap-6 text-sm text-purple-200">
              <div className="flex items-center gap-1.5"><span className="text-yellow-400">★★★★½</span><span>500+ reviews</span></div>
              <div className="flex items-center gap-1.5"><span className="text-green-400">✓</span><span>CO HHG #00502</span></div>
              <div className="flex items-center gap-1.5"><span className="text-green-400">✓</span><span>Since 1994</span></div>
            </div>
          </div>

          {/* Quote card */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{fontFamily:"'Playfair Display',serif"}}>Get Your Free Estimate</h2>
            <p className="text-gray-500 text-sm mb-6">No commitment. We respond within 1 hour.</p>
            <div className="space-y-3">
              {[
                ["Your Name", "text", "John Smith"],
                ["Phone Number", "tel", "(970) 555-0100"],
                ["Moving From", "text", "Breckenridge, CO"],
                ["Moving To", "text", "Vail, CO"],
              ].map(([label, type, ph]) => (
                <div key={label as string}>
                  <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">{label as string}</label>
                  <input type={type as string} placeholder={ph as string}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all bg-gray-50 focus:bg-white" />
                </div>
              ))}
              <Link href="/moving-quote" className="block w-full text-center btn-primary py-4 mt-2 rounded-xl">Get My Free Quote →</Link>
            </div>
            <p className="text-center text-xs text-gray-400 mt-3">Licensed · Insured · No Hidden Fees</p>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{fontFamily:"'Playfair Display',serif"}}>
              Full-Service Moving &amp; Storage
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">From local Summit County moves to cross-country relocations — we handle it all with the expertise mountain terrain demands.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Link key={i} href={s.href} className="group block bg-gray-50 hover:bg-purple-50 rounded-2xl p-6 border border-gray-100 hover:border-purple-200 transition-all duration-200">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors" style={{fontFamily:"'Playfair Display',serif"}}>{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{s.desc}</p>
                <span className="text-sm font-semibold text-purple-600 group-hover:text-purple-800">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20" style={{background:"linear-gradient(135deg, #f8f4ff 0%, #f0faf5 100%)"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wide">Why Majestic Mountain Movers</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{fontFamily:"'Playfair Display',serif"}}>
                The Only Interstate-Licensed Mover Based in Summit County
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">We're not a national van line dispatching strangers. We're your neighbors — locals who live on these mountain roads, know your HOA's move-in windows, and understand what it takes to navigate Keystone in January or Breckenridge during peak season.</p>
              <div className="space-y-4">
                {[
                  ["Licensed Interstate Authority", "The only Summit County-based mover with full interstate authority. CO HHG #00502. No brokers, no middlemen."],
                  ["Air-Ride Suspension Trucks", "Your belongings ride in our own trucks — never mixed with another customer's, never transferred to a terminal."],
                  ["Guaranteed Pricing & Dates", "We give you a price and a date and we honor both. No 3-week delivery windows. No surprise charges."],
                  ["30+ Years Mountain Expertise", "Since 1994, we've mastered every challenge Colorado's mountains can throw at a move."],
                  ["Olympic-Level Leadership", "Owner Ryan Shorter is a 2x Olympic Head Coach — precision, discipline, and excellence are in our DNA."],
                ].map(([title, desc]) => (
                  <div key={title as string} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{title as string}</div>
                      <div className="text-gray-600 text-sm mt-0.5">{desc as string}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/about" className="btn-outline">Meet the Team →</Link>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-purple-700 mb-1" style={{fontFamily:"'Playfair Display',serif"}}>500+</div>
                <div className="text-gray-600 text-sm">Five-Star Google Reviews</div>
                <div className="flex justify-center gap-1 mt-2 text-yellow-400 text-xl">★★★★½</div>
              </div>
              <div className="space-y-4 text-sm">
                {[
                  ["30+", "Years in Business"],
                  ["1994", "Year Founded"],
                  ["1", "Licensed Interstate Mover in Summit County"],
                  ["24/7", "Customer Support"],
                ].map(([num, label]) => (
                  <div key={label as string} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                    <span className="text-gray-600">{label as string}</span>
                    <span className="font-bold text-purple-700 text-lg">{num as string}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{fontFamily:"'Playfair Display',serif"}}>3 Simple Steps to a Stress-Free Move</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="text-center relative">
                {i < steps.length - 1 && <div className="hidden md:block absolute top-8 left-3/4 w-1/2 h-0.5 bg-purple-100 -translate-y-0.5 z-0"/>}
                <div className="relative z-10 w-16 h-16 bg-purple-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-5 text-xl font-bold" style={{fontFamily:"'Playfair Display',serif"}}>{s.num}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2" style={{fontFamily:"'Playfair Display',serif"}}>{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/moving-quote" className="btn-primary text-base px-10">Start My Free Quote →</Link>
          </div>
        </div>
      </section>

      <ReviewsSection />

      {/* Areas served */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{fontFamily:"'Playfair Display',serif"}}>Areas We Serve</h2>
            <p className="text-gray-600">From Summit County to the Front Range — and everywhere in between</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {locations.map(([name, href]) => (
              <Link key={href as string} href={href as string}
                className="group text-center bg-gray-50 hover:bg-purple-600 rounded-xl py-4 px-3 border border-gray-100 hover:border-purple-600 transition-all duration-200">
                <div className="text-sm font-semibold text-gray-700 group-hover:text-white transition-colors">{name as string}</div>
                <div className="text-xs text-gray-400 group-hover:text-purple-200 mt-0.5 transition-colors">Movers →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20" style={{background:"linear-gradient(135deg, #4A2970 0%, #6B3FA0 100%)"}}>
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{fontFamily:"'Playfair Display',serif"}}>Ready for a Stress-Free Mountain Move?</h2>
          <p className="text-purple-200 text-lg mb-8 max-w-2xl mx-auto">Get a free, no-obligation estimate from Summit County's most trusted moving company. We respond within 1 hour.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/moving-quote" className="btn-primary text-base px-10">Get My Free Quote →</Link>
            <a href="tel:9704688815" className="btn-secondary text-base px-10">📞 Call 970-468-8815</a>
          </div>
          <p className="text-purple-300 text-sm mt-6">Licensed · Insured · CO HHG #00502 · Interstate Authority</p>
        </div>
      </section>
    </>
  );
}
