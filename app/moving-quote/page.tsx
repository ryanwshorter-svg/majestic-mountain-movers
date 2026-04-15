import type { Metadata } from "next";
import QuoteForm from "../components/QuoteForm";

export const metadata: Metadata = {
  title: "Get a Free Moving Quote | Majestic Mountain Movers | 970-468-8815",
  description: "Get a free, no-obligation moving quote from Summit County's most trusted movers. We respond within 1 hour. Licensed, insured, 500+ five-star reviews.",
  alternates: { canonical: "https://www.majesticmountainmovers.com/moving-quote" },
};

export default function QuotePage() {
  return (
    <>
      <section className="py-24" style={{background:"linear-gradient(135deg, #4A2970 0%, #6B3FA0 100%)"}}>
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{fontFamily:"'Playfair Display',serif"}}>Get Your Free Moving Quote</h1>
          <p className="text-xl text-purple-100">No commitment. We respond within 1 hour during business hours.</p>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="flex items-center gap-4 mb-6 p-4 bg-green-50 rounded-xl border border-green-100">
              <div className="text-2xl">⭐</div>
              <div>
                <div className="font-semibold text-gray-900 text-sm">4.5/5 · 500+ Google Reviews</div>
                <div className="text-xs text-gray-600">Summit County&apos;s most trusted moving company since 1994</div>
              </div>
            </div>
            <QuoteForm />
            <div className="mt-6 pt-6 border-t border-gray-100 text-center">
              <p className="text-sm text-gray-600">Prefer to call? We&apos;re available 7 days a week.</p>
              <a href="tel:9704688815" className="text-purple-700 font-bold text-lg hover:text-purple-900 transition-colors">970-468-8815</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
