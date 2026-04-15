import type { Metadata } from "next";
import Link from "next/link";
import ReviewsSection from "../components/ReviewsSection";
import QuoteForm from "../components/QuoteForm";

export const metadata: Metadata = {
  title: "Interstate Movers Summit County CO | Only Local Licensed Interstate Mover",
  description: "Summit County's only licensed interstate moving company. Guaranteed pricing & delivery dates. Air-ride trucks, no terminals, same crew start to finish. CO HHG #00502. Call 970-468-8815.",
  alternates: { canonical: "https://www.majesticmountainmovers.com/interstate-movers-summit-county" },
};

export default function Page() {
  return (
    <>
      <section className="relative py-24" style={{background:"linear-gradient(135deg, #4A2970 0%, #6B3FA0 100%)"}}>
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{fontFamily:"'Playfair Display',serif"}}>
            Interstate Movers — Summit County, Colorado
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-8">The only moving company based in Summit County with full interstate authority. CO HHG #00502.</p>
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
              <p className="text-gray-700 leading-relaxed mb-5 text-lg">
                Majestic Mountain Movers has been serving Summit County since 1994. As the only licensed interstate mover based in Summit County, we bring unmatched local expertise and full-service capabilities to every move we handle.
              </p>
              <p className="text-gray-700 leading-relaxed mb-5 text-lg">
                Our mountain-trained crews are background-checked, full-time professionals — not seasonal hires. They understand the unique challenges of Colorado's high-altitude terrain, from icy driveways and steep access roads to HOA elevator windows and resort community regulations.
              </p>
              <p className="text-gray-700 leading-relaxed mb-5 text-lg">
                With 500+ five-star Google reviews and transparent pricing, we are the Summit County moving company that families, real estate agents, and second-home owners trust most. Call 970-468-8815 for a free, no-pressure estimate today.
              </p>
            </div>
            <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100 h-fit">
              <h3 className="text-lg font-bold text-gray-900 mb-4" style={{fontFamily:"'Playfair Display',serif"}}>Get a Free Quote</h3>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
      <ReviewsSection />
      <section className="py-16" style={{background:"linear-gradient(135deg, #4A2970 0%, #6B3FA0 100%)"}}>
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4" style={{fontFamily:"'Playfair Display',serif"}}>Ready to Get Started?</h2>
          <p className="text-purple-200 mb-8">Get your free quote today. We respond within 1 hour.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/moving-quote" className="btn-primary">Get My Free Quote →</Link>
            <a href="tel:9704688815" className="btn-secondary">📞 970-468-8815</a>
          </div>
        </div>
      </section>
    </>
  );
}
