import type { Metadata } from "next";
import Link from "next/link";
import ReviewsSection from "../components/ReviewsSection";
import QuoteForm from "../components/QuoteForm";

export const metadata: Metadata = {
  title: "Furniture Delivery Vail & Breckenridge CO | White Glove Delivery Service",
  description: "White glove furniture delivery in Vail, Breckenridge, and Summit County, CO. Receive, inspect, deliver, and set up furniture for luxury homes and interior design projects. Call 970-468-8815.",
  alternates: { canonical: "https://www.majesticmountainmovers.com/furniture-delivery-vail-breckenridge" },
};

export default function Page() {
  const highlights = [
    { icon: "📦", title: "Receive & Inspect", desc: "We receive your furniture shipments at our Silverthorne warehouse and inspect for any damage before delivery." },
        { icon: "🏠", title: "Room-of-Choice Delivery", desc: "We deliver to the room you specify — not just the door — and set up every piece exactly where you want it." },
        { icon: "🔧", title: "Assembly Included", desc: "Furniture assembly and packaging removal included with white glove delivery. Ready to use when we leave." },
        { icon: "🖼️", title: "Interior Designer Partner", desc: "We work seamlessly with interior designers on mountain properties — remote coordination, photo updates, flexible scheduling." },
        { icon: "🏔️", title: "Mountain Access Experts", desc: "Steep driveways, narrow roads, HOA windows — we navigate every access challenge in Summit County and Vail Valley." },
        { icon: "🚛", title: "Climate-Controlled Transport", desc: "Your furniture arrives in pristine condition in our air-ride suspension trucks, protected from mountain road vibration." }
  ];
  const body = [
    "Furniture delivery to a mountain property is not the same as delivery to a suburban home. Narrow access roads, steep driveways, HOA delivery windows, elevator-only buildings, and the altitude itself all add complexity that standard delivery services are not prepared for. Majestic Mountain Movers specializes in white glove furniture delivery to Vail, Breckenridge, Keystone, and all of Summit County.",
        "Our furniture delivery service goes far beyond drop-off. We receive items at our warehouse, inspect for any shipping damage, store until your delivery window, transport in our own air-ride suspension trucks, and deliver to the room of your choice — including assembly and packaging removal. Interior designers trust us as the last mile between their clients' purchases and a perfectly furnished mountain home.",
        "We work with interior designers, luxury furniture retailers, homeowners furnishing vacation properties, and developers staging new construction. Our team handles items of all sizes and values — from a single statement piece to a complete household of custom furniture.",
        "For designers working on mountain properties remotely, we offer receiving and warehousing at our Silverthorne facility, white-glove delivery scheduling, photo documentation of delivery, and direct communication throughout. Your clients get a perfect delivery experience; you get a reliable partner you can count on.",
        "Furniture delivery to Vail and Breckenridge requires a licensed, insured company that knows these communities inside and out. With 30+ years of Summit County experience and 500+ five-star reviews, Majestic Mountain Movers is the trusted choice. Call 970-468-8815 to discuss your delivery project."
  ];

  return (
    <>
      <section className="relative py-24 overflow-hidden" style={{background:"linear-gradient(135deg, #4A2970 0%, #6B3FA0 100%)"}}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{fontFamily:"'Playfair Display',serif"}}>
            White Glove Furniture Delivery — Vail & Breckenridge, Colorado
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-8">Professional furniture delivery and installation for luxury homes, interior designers, and vacation properties across Vail, Breckenridge, and Summit County.</p>
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
