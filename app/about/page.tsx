import type { Metadata } from "next";
import Link from "next/link";
import ReviewsSection from "../components/ReviewsSection";

export const metadata: Metadata = {
  title: "About Us | Summit County's Trusted Movers Since 1994 | Majestic Mountain Movers",
  description: "30+ years serving Summit County. Led by Ryan Shorter, 2x Olympic Head Coach. The only licensed interstate mover based in Summit County. CO HHG #00502.",
  alternates: { canonical: "https://www.majesticmountainmovers.com/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative py-24" style={{background:"linear-gradient(135deg, #4A2970 0%, #6B3FA0 100%)"}}>
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{fontFamily:"'Playfair Display',serif"}}>
            Summit County's Most Trusted Movers Since 1994
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">Locally owned, mountain-rooted, and the only licensed interstate mover based in Summit County, Colorado.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{fontFamily:"'Playfair Display',serif"}}>Our Story</h2>
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p>Founded in 1994, Majestic Mountain Movers began with a simple belief: the families and businesses of Summit County deserve a moving company that truly understands mountain life. Over the past 30+ years, we have grown into the most trusted name in Colorado mountain moving — earning 500+ five-star reviews and the distinction of being Summit County's only licensed interstate moving company.</p>
                <p>Led by owner Ryan Shorter, a 2-time Olympic Head Coach, Majestic Mountain Movers operates with the discipline, precision, and commitment to excellence that elite performance demands. Every move — whether a local Silverthorne relocation or an interstate move from Vail to another state — receives the same meticulous planning and execution.</p>
                <p>Our team is made up of long-term, background-checked professionals who live in these mountains. They know the access roads, HOA regulations, resort community requirements, and the logistics that make mountain moves uniquely challenging. No seasonal hires. No strangers in your home.</p>
                <p>As the only moving company in Summit County with full interstate authority (CO HHG #00502), we offer our clients something no other local mover can: a single licensed, insured company that handles your move from pickup to delivery, anywhere in the country — with guaranteed pricing and guaranteed dates.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-purple-50 rounded-2xl p-8 border border-purple-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6" style={{fontFamily:"'Playfair Display',serif"}}>By the Numbers</h3>
                <div className="grid grid-cols-2 gap-6">
                  {[["30+", "Years in Business"], ["500+", "Five-Star Reviews"], ["1994", "Year Founded"], ["#1", "Licensed Interstate Mover in Summit County"], ["24/7", "Customer Support"], ["CO HHG #00502", "Licensed & Insured"]].map(([num, label]) => (
                    <div key={label} className="text-center">
                      <div className="text-2xl font-bold text-purple-700 mb-1" style={{fontFamily:"'Playfair Display',serif"}}>{num}</div>
                      <div className="text-xs text-gray-600">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3">Our Commitment</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {["Transparent, no-hidden-fee pricing", "Guaranteed delivery dates", "Background-checked, full-time crews", "Air-ride suspension trucks — your load is never mixed", "Same crew from pickup to delivery", "Remote coordination for second-home owners"].map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReviewsSection />

      <section className="py-16" style={{background:"linear-gradient(135deg, #4A2970 0%, #6B3FA0 100%)"}}>
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4" style={{fontFamily:"'Playfair Display',serif"}}>Ready to Move with the Best?</h2>
          <p className="text-purple-200 mb-8">30+ years of mountain moving expertise at your service. Get a free quote today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/moving-quote" className="btn-primary">Get My Free Quote →</Link>
            <a href="tel:9704688815" className="btn-secondary">📞 970-468-8815</a>
          </div>
        </div>
      </section>
    </>
  );
}
