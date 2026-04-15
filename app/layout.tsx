import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Licensed Interstate Movers | Summit County, CO | Majestic Mountain Movers",
    template: "%s | Majestic Mountain Movers"
  },
  description: "Summit County's only licensed interstate moving company. 30+ years serving Breckenridge, Vail & the Colorado mountains. 500+ five-star reviews. Call 970-468-8815 for a free quote.",
  keywords: ["movers Breckenridge", "movers Vail", "Summit County moving company", "interstate movers Colorado", "white glove movers Vail", "moving company Silverthorne"],
  openGraph: {
    siteName: "Majestic Mountain Movers",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
  verification: {},
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  "name": "Majestic Mountain Movers",
  "url": "https://www.majesticmountainmovers.com",
  "telephone": "+19704688815",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Silverthorne",
    "addressRegion": "CO",
    "postalCode": "80498",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 39.6331,
    "longitude": -106.0698
  },
  "openingHours": ["Mo-Sa 07:00-19:00", "Su 08:00-17:00"],
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": "500",
    "bestRating": "5"
  },
  "areaServed": [
    "Silverthorne", "Breckenridge", "Frisco", "Dillon", "Keystone",
    "Copper Mountain", "Vail", "Aspen", "Denver", "Buena Vista"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Moving Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Interstate Moving" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Local Moving" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "White Glove Moving" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Vacation Home Moving" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Furniture Delivery" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Packing Services" } }
    ]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
