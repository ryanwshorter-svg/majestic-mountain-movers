import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "Silverthorne Movers | Licensed Moving Company | Majestic Mountain Movers",
  description: "Professional Silverthorne movers with 30+ years of mountain moving expertise. Licensed, insured, 500+ five-star reviews. Call 970-468-8815 for a free quote.",
  alternates: { canonical: "https://www.majesticmountainmovers.com/silverthorne-movers" },
};

export default function Page() {
  return (
    <LocationPage
      city="Silverthorne"
      county="Summit County"
      intro="Expert moving services in Silverthorne, CO — backed by 30+ years of mountain experience, 500+ five-star reviews, and the only interstate license based in Summit County."
      bodyParagraphs={[
        "Moving in Silverthorne requires more than a truck and a crew. High-altitude roads, HOA regulations, resort-area traffic, and mountain weather make every Silverthorne move a genuine logistical challenge — one Majestic Mountain Movers has been mastering since 1994.",
        "Our crews are locals who live and work in these mountains year-round. They know the access roads, loading dock restrictions at resort properties, elevator reservation windows, and the best routes around peak-season traffic.",
        "We are the only moving company based in Summit County with a full interstate license — CO HHG #00502. Whether you are moving within Silverthorne, across Colorado, or to another state, we handle it with the same crew, same truck, and guaranteed pricing from start to finish.",
        "Our air-ride suspension trucks protect your belongings on every mountain mile. Your items are never mixed with another customer's load, never transferred to a terminal, and always delivered by the same driver who loaded them.",
        "With 500+ five-star Google reviews and transparent hourly pricing, Majestic Mountain Movers is the Silverthorne moving company families and second-home owners trust most. Call 970-468-8815 for a free, no-pressure estimate.",
      ]}
      highlights={[
        { icon: "🏔️", title: "True Mountain Locals", desc: "Our crews live in Summit County. We know every street, HOA rule, and challenge in Silverthorne." },
        { icon: "📋", title: "Licensed & Fully Insured", desc: "CO HHG #00502. The only interstate-licensed mover headquartered in Summit County." },
        { icon: "💰", title: "Transparent Pricing", desc: "Hourly rates for local moves, guaranteed flat pricing for interstate. No hidden fees, ever." },
        { icon: "🚛", title: "Air-Ride Suspension Trucks", desc: "Your belongings ride in our own trucks — never mixed, never transferred to a terminal." },
        { icon: "⭐", title: "500+ Five-Star Reviews", desc: "Our 4.5/5 rating from 500+ Google reviews. Read what Silverthorne families say." },
        { icon: "📞", title: "24/7 Customer Support", desc: "Questions before, during, or after your move? We are always reachable at 970-468-8815." },
      ]}
      nearbyAreas={["Breckenridge", "Vail", "Silverthorne", "Frisco", "Keystone", "Dillon"]}
    />
  );
}
