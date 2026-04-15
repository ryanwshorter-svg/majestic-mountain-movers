import type { Metadata } from "next";
import Link from "next/link";
import ReviewsSection from "../components/ReviewsSection";
import QuoteForm from "../components/QuoteForm";

export const metadata: Metadata = {
  title: "Vacation Home & Second Home Movers Colorado | Summit County Specialists",
  description: "Specialists in vacation home and second home moving across Summit County, Vail, and Colorado ski areas. Ski condo movers with 30+ years experience. Licensed interstate authority. Call 970-468-8815.",
  alternates: { canonical: "https://www.majesticmountainmovers.com/vacation-home-movers-colorado" },
};

export default function Page() {
  const highlights = [
    { icon: "🏡", title: "Second Home Specialists", desc: "We understand the unique logistics of vacation property moves — seasonal timing, remote coordination, and resort access." },
        { icon: "📱", title: "Remote Move Management", desc: "You don't need to be there. We coordinate with property managers and send updates throughout your move." },
        { icon: "❄️", title: "Ski Condo Experts", desc: "Keystone, Breckenridge, Copper Mountain, Vail — we know every resort community's access requirements." },
        { icon: "📅", title: "Seasonal Scheduling", desc: "End-of-season moves, summer furnishing projects, fall transitions — we plan around Colorado's mountain calendar." },
        { icon: "🚛", title: "Interstate Authority", desc: "Moving between your vacation home and primary residence? We are the only Summit County mover licensed to cross state lines." },
        { icon: "💼", title: "Full-Service Option", desc: "Packing, loading, transport, unloading, unpacking, and setup — we handle every step so you don't have to." }
  ];
  const body = [
    "Summit County is home to thousands of second properties — ski condos, mountain vacation homes, and luxury chalets owned by families who live elsewhere and visit when the mountains call. Moving into, out of, or between these properties presents a unique set of challenges that most moving companies are not equipped to handle.",
        "At Majestic Mountain Movers, second home and vacation property moves are a core specialty. We understand the seasonal rhythms of Summit County — end-of-ski-season moves, summer furnishing projects, fall transitions before the first snowfall. We work around your schedule and your property's HOA requirements, elevator windows, and loading dock restrictions.",
        "Because many of our second-home clients are not physically present during the move, we offer full remote coordination. Your moving consultant handles every detail — from scheduling building access to coordinating with property managers — and sends you updates throughout the day. You provide the keys and the plan; we execute it.",
        "We specialize in ski condo movers throughout Summit County: Keystone's River Run Village, Breckenridge's ski-in/ski-out communities, Copper Mountain's slope-side condos, and Dillon's lakefront properties all present specific access and timing challenges our crews navigate every week.",
        "As the only licensed interstate mover based in Summit County, we also handle moves between your primary residence and your mountain property — or from your Colorado vacation home to a new location anywhere in the country. One company, one crew, guaranteed pricing and dates. Call 970-468-8815 to get started."
  ];

  return (
    <>
      <section className="relative py-24 overflow-hidden" style={{background:"linear-gradient(135deg, #4A2970 0%, #6B3FA0 100%)"}}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{fontFamily:"'Playfair Display',serif"}}>
            Vacation Home & Second Home Movers — Summit County, Colorado
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-8">Specialists in second home, ski condo, and vacation property moves across Breckenridge, Vail, Keystone, and Summit County.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/moving-quote" className="btn-primary">Get a Free Quote →</Link>
            <a href="tel:9704688815" className="btn-secondary">📞 970-468-8815</a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {body.map((p, i) => <p key={i} className="text-gray-700 leading-relaxed mb-5 text-lg">{p}</p>)}
            </div>
            <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100 h-fit">
              <h3 className="text-lg font-bold text-gray-900 mb-4" style={{fontFamily:"'Playfair Display',serif"}}>Get a Free Quote</h3>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="text-3xl mb-3">{h.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{h.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection />

      <section className="py-16" style={{background:"linear-gradient(135deg, #4A2970 0%, #6B3FA0 100%)"}}>
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4" style={{fontFamily:"'Playfair Display',serif"}}>Ready to Get Started?</h2>
          <p className="text-purple-200 mb-8">Call 970-468-8815 or request a free quote online. We respond within 1 hour.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/moving-quote" className="btn-primary">Get My Free Quote →</Link>
            <a href="tel:9704688815" className="btn-secondary">📞 970-468-8815</a>
          </div>
        </div>
      </section>
    </>
  );
}
