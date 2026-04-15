import type { Metadata } from "next";
import QuoteForm from "../components/QuoteForm";

export const metadata: Metadata = {
  title: "Contact Us | Majestic Mountain Movers | Silverthorne, CO",
  description: "Contact Majestic Mountain Movers in Silverthorne, CO. Call 970-468-8815 or request a free moving quote online. Available 7 days a week.",
  alternates: { canonical: "https://www.majesticmountainmovers.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="py-20" style={{background:"linear-gradient(135deg, #4A2970 0%, #6B3FA0 100%)"}}>
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{fontFamily:"'Playfair Display',serif"}}>Contact Us</h1>
          <p className="text-xl text-purple-100">We respond within 1 hour. Available 7 days a week.</p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{fontFamily:"'Playfair Display',serif"}}>Get in Touch</h2>
              <div className="space-y-6">
                {[
                  { icon: "📞", label: "Phone", value: "970-468-8815", href: "tel:9704688815" },
                  { icon: "📍", label: "Location", value: "Silverthorne, CO 80498\nSummit County, Colorado", href: null },
                  { icon: "🕐", label: "Hours", value: "Mon–Sat: 7am–7pm\nSun: 8am–5pm", href: null },
                  { icon: "📋", label: "License", value: "CO HHG #00502 · Licensed Interstate Mover", href: null },
                ].map(item => (
                  <div key={item.label} className="flex gap-4">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="font-semibold text-purple-700 hover:text-purple-900 text-lg transition-colors">{item.value}</a>
                      ) : (
                        <div className="text-gray-700 whitespace-pre-line">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4" style={{fontFamily:"'Playfair Display',serif"}}>Request a Free Quote</h3>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
