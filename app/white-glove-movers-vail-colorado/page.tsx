import type { Metadata } from "next";
import Link from "next/link";
import ReviewsSection from "../components/ReviewsSection";
import QuoteForm from "../components/QuoteForm";

export const metadata: Metadata = {
  title: "White Glove Movers Vail & Breckenridge CO | Majestic Mountain Movers",
  description: "Premium white glove moving service in Vail and Breckenridge, CO. Expert handling of luxury homes, art, pianos & high-value items. The only licensed interstate mover in Summit County. Call 970-468-8815.",
  alternates: { canonical: "https://www.majesticmountainmovers.com/white-glove-movers-vail-colorado" },
};

export default function Page() {
  const highlights = [
    { icon: "🤍", title: "Premium Packing Materials", desc: "Custom crating, double-boxing, acid-free tissue, and furniture wrap for every item — regardless of value." },
        { icon: "🖼️", title: "Art & Antique Specialists", desc: "Fine art, sculptures, antiques, and collectibles handled with climate-conscious packing and white-glove placement." },
        { icon: "🎹", title: "Piano Moving Experts", desc: "Baby grands, uprights, and concert grands — we move pianos safely in even the most challenging mountain spaces." },
        { icon: "🏠", title: "Luxury Home Experience", desc: "From Vail ski chalets to Breckenridge mountain estates — we understand the access and care requirements of high-end properties." },
        { icon: "🚛", title: "Dedicated Trucks, No Transfers", desc: "Your belongings never leave our truck. No terminals, no mixing loads, no strangers handling your valuables." },
        { icon: "📅", title: "Remote Coordination", desc: "We manage the entire move — you don't need to be present. Perfect for second-home owners and out-of-state relocations." }
  ];
  const body = [
    "White glove moving means something specific in Vail and Breckenridge. It means knowing that a Vail ski-in/ski-out chalet has different access requirements than a Breckenridge ski condo. It means understanding that a grand piano moved through a narrow mountain staircase requires a different approach than furniture delivery to a penthouse in Beaver Creek. It means treating every item — from custom furniture to fine art to family heirlooms — as if it were irreplaceable. Because to you, it is.",
        "At Majestic Mountain Movers, white glove service is not an upsell. It is our standard. We use premium packing materials, custom crating for high-value items, floor and wall protection on every move, and our own air-ride suspension trucks that never transfer your load to a terminal or mix it with another customer's belongings.",
        "We specialize in the moves that other companies decline: the piano in a third-floor Keystone condo, the art collection in a Beaver Creek mountain home, the full household move from a luxury Vail property to another state — handled by the same licensed, insured crew from pickup to delivery. As Summit County's only licensed interstate mover, we offer that continuity that national van lines simply cannot.",
        "Our white glove clients include luxury homeowners, interior designers and their clients, real estate agents coordinating move-in services, and second-home owners who need a team they can trust to coordinate a move without being there themselves. We handle the logistics entirely — you don't need to be present.",
        "If you are moving a luxury property in Vail, Breckenridge, Beaver Creek, Aspen, or anywhere in the Colorado mountains, call 970-468-8815 to speak with a moving consultant about our white glove service. We will create a custom plan and guaranteed quote — no obligation."
  ];

  return (
    <>
      <section className="relative py-24 overflow-hidden" style={{background:"linear-gradient(135deg, #4A2970 0%, #6B3FA0 100%)"}}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{fontFamily:"'Playfair Display',serif"}}>
            White Glove Moving Service — Vail & Breckenridge, Colorado
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-8">Premium white glove moving for luxury homes, second properties, and high-value items across Colorado's mountain communities.</p>
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
