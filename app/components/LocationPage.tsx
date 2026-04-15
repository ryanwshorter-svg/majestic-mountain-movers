import Link from "next/link";
import ReviewsSection from "./ReviewsSection";
import QuoteForm from "./QuoteForm";

interface LocationPageProps {
  city: string;
  county?: string;
  state?: string;
  intro: string;
  bodyParagraphs: string[];
  highlights: { icon: string; title: string; desc: string }[];
  nearbyAreas?: string[];
  schema?: object;
}

export default function LocationPage({ city, county = "Summit County", state = "CO", intro, bodyParagraphs, highlights, nearbyAreas = [], schema }: LocationPageProps) {
  return (
    <>
      {schema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />}

      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{background:"linear-gradient(135deg, #4A2970 0%, #6B3FA0 100%)"}}>
        <div className="absolute bottom-0 left-0 right-0 opacity-10">
          <svg viewBox="0 0 1440 200" fill="white" preserveAspectRatio="none" className="w-full h-32">
            <path d="M0,200 L0,120 L240,40 L480,120 L720,20 L960,100 L1200,40 L1440,80 L1440,200 Z"/>
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-2 mb-6 text-sm">
            <span>📍</span> {county}, Colorado
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{fontFamily:"'Playfair Display',serif"}}>
            {city} Movers
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-8">{intro}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/moving-quote" className="btn-primary">Get a Free Quote →</Link>
            <a href="tel:9704688815" className="btn-secondary">📞 970-468-8815</a>
          </div>
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-purple-200">
            <span>⭐ 500+ Five-Star Reviews</span>
            <span>✓ Licensed Interstate Mover</span>
            <span>✓ Since 1994</span>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 prose prose-lg max-w-none">
              {bodyParagraphs.map((p, i) => (
                <p key={i} className="text-gray-700 leading-relaxed mb-5">{p}</p>
              ))}
            </div>
            <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100 h-fit">
              <h3 className="text-lg font-bold text-gray-900 mb-4" style={{fontFamily:"'Playfair Display',serif"}}>Get a Free {city} Moving Quote</h3>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center" style={{fontFamily:"'Playfair Display',serif"}}>
            Why Choose Majestic Mountain Movers in {city}?
          </h2>
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

      {/* Nearby areas */}
      {nearbyAreas.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center" style={{fontFamily:"'Playfair Display',serif"}}>We Also Serve Nearby Areas</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {nearbyAreas.map(area => (
                <Link key={area} href={`/${area.toLowerCase().replace(/ /g,"-")}-movers`}
                  className="bg-gray-100 hover:bg-purple-100 text-gray-700 hover:text-purple-700 px-4 py-2 rounded-full text-sm font-medium transition-colors">
                  {area} Movers →
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16" style={{background:"linear-gradient(135deg, #4A2970 0%, #6B3FA0 100%)"}}>
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{fontFamily:"'Playfair Display',serif"}}>Ready to Move in {city}?</h2>
          <p className="text-purple-200 mb-8">Get your free, no-obligation quote from {county}&apos;s most trusted movers.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/moving-quote" className="btn-primary">Get My Free Quote →</Link>
            <a href="tel:9704688815" className="btn-secondary">📞 970-468-8815</a>
          </div>
        </div>
      </section>
    </>
  );
}
