import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Licensed Interstate Movers | Summit County, CO | Majestic Mountain Movers",
  description: "Summit County's only licensed interstate moving company. 30+ years serving Breckenridge, Vail & Colorado mountains. 500+ five-star reviews. Free quote: 970-468-8815.",
};

const S = {
  // Layout
  section: (bg: string, extra?: object) => ({ background: bg, padding: "5rem 1rem", ...extra } as React.CSSProperties),
  inner: { maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" } as React.CSSProperties,
  grid2: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" } as React.CSSProperties,
  grid3: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" } as React.CSSProperties,
  grid5: { display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "0.75rem" } as React.CSSProperties,
  // Text
  badge: { display: "inline-block", background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", padding: "0.4rem 1rem", borderRadius: "9999px", fontSize: "13px", fontWeight: 600, marginBottom: "1.5rem" } as React.CSSProperties,
  h1: { fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 700, lineHeight: 1.15, color: "#fff", marginBottom: "1.25rem" } as React.CSSProperties,
  heroP: { fontSize: "1.15rem", lineHeight: 1.75, color: "rgba(255,255,255,0.85)", marginBottom: "2rem", maxWidth: "520px" } as React.CSSProperties,
  h2: { fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", fontWeight: 700, color: "#1a1a2e", marginBottom: "1rem", lineHeight: 1.2 } as React.CSSProperties,
  h3: { fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1a1a2e", marginBottom: "0.5rem" } as React.CSSProperties,
  p: { fontSize: "1rem", lineHeight: 1.75, color: "#4b5563", marginBottom: "1rem" } as React.CSSProperties,
  // Cards
  card: { background: "#fff", borderRadius: "1.25rem", padding: "1.75rem", border: "1.5px solid #ede9ff", transition: "box-shadow 0.2s" } as React.CSSProperties,
  statCard: { background: "#fff", borderRadius: "1.25rem", padding: "2rem", textAlign: "center" as const, border: "1.5px solid #ede9ff", boxShadow: "0 2px 12px rgba(107,63,160,0.07)" },
};

const services = [
  { icon: "🏔️", title: "Interstate Moving", desc: "The only Summit County-based mover with full interstate authority. Guaranteed pricing, dates, and direct delivery.", href: "/interstate-movers-summit-county" },
  { icon: "🏠", title: "Local Moving", desc: "Summit County local moves by crews who live here. We know every HOA rule, steep driveway, and mountain road.", href: "/local-movers-summit-county" },
  { icon: "🤍", title: "White Glove Moving", desc: "Premium service for luxury homes and second properties in Vail and Breckenridge. Art, pianos, antiques handled with care.", href: "/white-glove-movers-vail-colorado" },
  { icon: "🏡", title: "Vacation Home Moving", desc: "Specialists in ski condo and second home relocations. We coordinate remotely and work around your schedule.", href: "/vacation-home-movers-colorado" },
  { icon: "🚚", title: "Furniture Delivery", desc: "White glove furniture delivery to Vail and Breckenridge. We receive, inspect, deliver, and set up.", href: "/furniture-delivery-vail-breckenridge" },
  { icon: "📦", title: "Packing Services", desc: "Full-service packing using professional materials — from everyday items to fragile heirlooms.", href: "/packing-services" },
];

const reviews = [
  { name: "Wayne Varnadore", date: "Jul 2025", stars: 5, text: "Josh had a crew scrambled in 20 minutes when my U-Haul died. They transferred the full load and drove it to Castle Rock. So far above and beyond. A killer team." },
  { name: "Jay Homola", date: "Aug 2025", stars: 5, text: "After 30+ moves in my life (10 internationally) you get to recognize a great crew. Derrick and his team made the crew I scheduled for the next day unnecessary." },
  { name: "Gin Dudley", date: "Jan 2026", stars: 5, text: "They were so polite and did a great job! We had a really difficult move — lots of stuff in 2 houses. We have moved A LOT and these were the best movers we've ever had." },
  { name: "KIM MEYER", date: "Jun 2025", stars: 5, text: "I'm a 74-year-old woman who needed to move a 90-inch couch from a 4th floor condo. They wrapped everything perfectly in tight spaces. These guys are very well-trained." },
  { name: "Dan O'Connell", date: "Dec 2025", stars: 5, text: "Easy to schedule, good communication, came right on time and made sure to get the job done right and as fast as possible while keeping our stuff safe." },
  { name: "Ross L.", date: "Aug 2025", stars: 5, text: "Derek, Dom, and Tony were an absolute pleasure. They moved our baby grand piano and gave me such peace of mind. Very strong, capable, and good guys." },
];

const locations = [
  ["Breckenridge", "/breckenridge-movers"], ["Vail", "/vail-movers"],
  ["Silverthorne", "/silverthorne-movers"], ["Frisco", "/frisco-movers"],
  ["Keystone", "/keystone-movers"], ["Dillon", "/dillon-movers"],
  ["Copper Mountain", "/copper-mountain-movers"], ["Aspen", "/aspen-movers"],
  ["Denver", "/denver-movers"], ["Buena Vista", "/buena-vista-movers"],
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(135deg, #2d1454 0%, #6B3FA0 55%, #1c2e40 100%)", minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
        {/* Mountain silhouette */}
        <svg style={{ position: "absolute", bottom: 0, left: 0, right: 0, width: "100%", opacity: 0.1 }} viewBox="0 0 1440 300" preserveAspectRatio="none">
          <path d="M0 300L0 200L200 80L400 180L600 40L800 160L1000 60L1200 140L1440 80L1440 300Z" fill="white"/>
          <path d="M0 300L0 240L240 130L480 220L700 100L920 200L1140 120L1440 160L1440 300Z" fill="white" opacity="0.5"/>
        </svg>
        {/* Glow orbs */}
        <div style={{ position: "absolute", top: "10%", right: "5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)", pointerEvents: "none" }}/>
        <div style={{ position: "absolute", bottom: "5%", left: "2%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(107,63,160,0.25) 0%, transparent 70%)", pointerEvents: "none" }}/>

        <div style={{ ...S.inner, width: "100%", padding: "6rem 2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            {/* Left column */}
            <div>
              <div style={S.badge}>
                <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: "#4ade80", marginRight: 8, verticalAlign: "middle" }}/>
                Summit County&apos;s Only Licensed Interstate Mover
              </div>
              <h1 style={S.h1}>
                White Glove Movers<br/>
                <span style={{ color: "#4ade80" }}>Vail &amp; Breckenridge</span>
              </h1>
              <p style={S.heroP}>
                30+ years moving families, second homes, and luxury properties across Colorado&apos;s mountains. Local expertise, interstate authority, 500+ five-star reviews.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}>
                <Link href="/moving-quote" className="btn-primary">Get a Free Quote →</Link>
                <a href="tel:9704688815" className="btn-secondary">📞 970-468-8815</a>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                {["⭐ 500+ Reviews", "✅ CO HHG #00502", "📅 Since 1994", "🚛 Air-Ride Trucks"].map(b => (
                  <span key={b} style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.9)", padding: "0.35rem 0.85rem", borderRadius: 9999, fontSize: 13, fontWeight: 500 }}>{b}</span>
                ))}
              </div>
            </div>

            {/* Right column — quote card */}
            <div>
              <div style={{ background: "#fff", borderRadius: "1.5rem", overflow: "hidden", boxShadow: "0 30px 80px rgba(0,0,0,0.4)" }}>
                <div style={{ background: "linear-gradient(135deg, #4A2970 0%, #6B3FA0 100%)", padding: "2rem 2rem 1.5rem" }}>
                  <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#fff", marginBottom: "0.35rem" }}>Get Your Free Estimate</h2>
                  <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, marginBottom: "0.75rem" }}>No commitment · We respond within 1 hour</p>
                  <div style={{ color: "#fbbf24", fontSize: 14 }}>★★★★½ <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 12 }}>4.5/5 · 500+ Google reviews</span></div>
                </div>
                <div style={{ padding: "1.75rem 2rem" }}>
                  {[
                    { label: "Your Name", type: "text", ph: "John Smith" },
                    { label: "Phone Number", type: "tel", ph: "(970) 555-0100" },
                    { label: "Email Address", type: "email", ph: "john@email.com" },
                    { label: "Moving From", type: "text", ph: "Breckenridge, CO" },
                    { label: "Moving To", type: "text", ph: "Vail, CO" },
                  ].map(f => (
                    <div key={f.label} style={{ marginBottom: "1rem" }}>
                      <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#6b7280", textTransform: "uppercase" as const, letterSpacing: "0.08em", marginBottom: 6 }}>{f.label}</label>
                      <input type={f.type} placeholder={f.ph} style={{ width: "100%", padding: "0.7rem 1rem", borderRadius: "0.75rem", border: "1.5px solid #e5e7eb", background: "#f9fafb", fontSize: 14, color: "#111", outline: "none", fontFamily: "'Inter', sans-serif" }}/>
                    </div>
                  ))}
                  <Link href="/moving-quote" style={{ display: "block", width: "100%", textAlign: "center", padding: "0.9rem", borderRadius: "0.75rem", background: "linear-gradient(135deg, #4CAF7D 0%, #2d8f5e 100%)", color: "#fff", fontWeight: 700, fontSize: 15, textDecoration: "none", boxShadow: "0 4px 15px rgba(76,175,125,0.4)", marginTop: "0.5rem" }}>Get My Free Quote →</Link>
                  <p style={{ textAlign: "center", fontSize: 12, color: "#9ca3af", marginTop: "0.75rem" }}>Licensed · Insured · No Hidden Fees</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div style={{ background: "#3d1f6e", padding: "1rem 0", overflow: "hidden" }}>
        <div style={{ display: "flex", gap: "3rem", whiteSpace: "nowrap" as const, animation: "scroll 35s linear infinite", width: "max-content" }}>
          {[...Array(2)].map((_, r) =>
            ["🏆 30+ Years Experience", "⭐ 500+ Five-Star Reviews", "📋 Licensed & Insured", "🏔️ Only Licensed Interstate Mover in Summit County", "🚛 Air-Ride Suspension Trucks", "📞 24/7 Support", "✅ CO HHG #00502"].map((item, i) => (
              <span key={`${r}-${i}`} style={{ color: "rgba(255,255,255,0.88)", fontSize: 14, fontWeight: 500, flexShrink: 0 }}>
                {item}<span style={{ marginLeft: "1.5rem", color: "rgba(255,255,255,0.25)" }}>•</span>
              </span>
            ))
          )}
        </div>
      </div>

      {/* ── WHY US ── */}
      <section style={S.section("#f9f7ff")}>
        <div style={S.inner}>
          <div style={S.grid2}>
            <div>
              <span style={{ display: "inline-block", background: "#ede9ff", color: "#6B3FA0", fontSize: 11, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.1em", padding: "0.4rem 1rem", borderRadius: 9999, marginBottom: "1.25rem" }}>Why Choose Us</span>
              <h2 style={S.h2}>The Only Interstate-Licensed Mover Based in Summit County</h2>
              <p style={S.p}>We&apos;re not a national van line dispatching strangers. We&apos;re your neighbors — locals who know your HOA&apos;s move-in windows, navigate Keystone in January, and have been doing this since 1994.</p>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "1.25rem", marginTop: "1.5rem" }}>
                {[
                  ["Licensed Interstate Authority", "The only Summit County-based mover with full interstate authority. CO HHG #00502. No brokers, no middlemen."],
                  ["Air-Ride Suspension Trucks", "Your belongings ride in our own trucks — never mixed with another customer's load, never transferred to a terminal."],
                  ["Guaranteed Pricing & Dates", "We give you a price and a date and honor both. No 3-week windows. No surprise charges."],
                  ["Olympic-Level Leadership", "Owner Ryan Shorter is a 2x Olympic Head Coach. Precision and excellence in every move."],
                  ["30+ Years Mountain Expertise", "Since 1994, we've mastered every challenge Colorado's mountains can throw at a move."],
                ].map(([title, desc]) => (
                  <div key={title} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ flexShrink: 0, width: 24, height: 24, borderRadius: "50%", background: "#4CAF7D", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2 }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, color: "#1a1a2e", fontSize: 15 }}>{title}</div>
                      <div style={{ color: "#6b7280", fontSize: 14, marginTop: 2, lineHeight: 1.6 }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "2rem" }}>
                <Link href="/about" className="btn-outline">Meet the Team →</Link>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[
                { num: "500+", label: "Five-Star Reviews", color: "#6B3FA0" },
                { num: "30+", label: "Years in Business", color: "#4CAF7D" },
                { num: "#1", label: "Interstate Mover in Summit County", color: "#4A2970" },
                { num: "1994", label: "Year Founded", color: "#2d8f5e" },
              ].map(s => (
                <div key={s.label} style={S.statCard}>
                  <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "2rem", fontWeight: 700, color: s.color, marginBottom: "0.4rem" }}>{s.num}</div>
                  <div style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
              <div style={{ gridColumn: "span 2", ...S.card, border: "2px solid #ede9ff" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <span style={{ fontSize: "1.75rem" }}>🏆</span>
                  <div style={{ fontWeight: 700, color: "#1a1a2e", fontSize: 15 }}>Olympic-Led Excellence</div>
                </div>
                <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.65 }}>Owner Ryan Shorter is a 2-time Olympic Head Coach. The same precision and discipline that wins gold medals goes into every single move we handle.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={S.section("#ffffff")}>
        <div style={S.inner}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <h2 style={S.h2}>Full-Service Moving &amp; Storage</h2>
            <p style={{ ...S.p, maxWidth: "560px", margin: "0 auto" }}>From local Summit County moves to cross-country relocations — handled with mountain expertise.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
            {services.map((s, i) => (
              <Link key={i} href={s.href} style={{ ...S.card, textDecoration: "none", display: "block" }}>
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{s.icon}</div>
                <h3 style={S.h3}>{s.title}</h3>
                <p style={{ ...S.p, marginBottom: "0.75rem", fontSize: 14 }}>{s.desc}</p>
                <span style={{ color: "#6B3FA0", fontWeight: 600, fontSize: 14 }}>Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── STEPS ── */}
      <section style={S.section("linear-gradient(135deg, #f9f7ff 0%, #f0fdf6 100%)")}>
        <div style={S.inner}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <h2 style={S.h2}>3 Simple Steps to a Stress-Free Move</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
            {[
              { num: "01", title: "Call or Request a Quote", desc: "Reach us at 970-468-8815 or fill out our online form. We respond within 1 hour.", color: "#6B3FA0" },
              { num: "02", title: "Get Your Custom Moving Plan", desc: "Our moving consultant creates a detailed, transparent plan with guaranteed pricing — no surprises.", color: "#4CAF7D" },
              { num: "03", title: "Relax and Enjoy Your New Home", desc: "Our vetted, background-checked crews handle everything. You focus on your new mountain life.", color: "#4A2970" },
            ].map((s) => (
              <div key={s.num} style={{ textAlign: "center" }}>
                <div style={{ width: 64, height: 64, borderRadius: "1rem", background: s.color, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem", fontFamily: "'Playfair Display',serif", fontSize: "1.25rem", fontWeight: 700, color: "#fff" }}>{s.num}</div>
                <h3 style={S.h3}>{s.title}</h3>
                <p style={{ ...S.p, fontSize: 14 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/moving-quote" className="btn-primary">Start My Free Quote →</Link>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section style={S.section("#f9f7ff")}>
        <div style={S.inner}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#fffbeb", border: "1px solid #fde68a", borderRadius: 9999, padding: "0.5rem 1.25rem", marginBottom: "1rem" }}>
              <span style={{ color: "#f59e0b", fontSize: 16 }}>★★★★½</span>
              <span style={{ fontSize: 14, fontWeight: 600, color: "#374151" }}>4.5/5 · 500+ Google Reviews</span>
            </div>
            <h2 style={S.h2}>What Our Customers Say</h2>
            <p style={{ ...S.p, maxWidth: "500px", margin: "0 auto" }}>Real reviews from real Summit County moves</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
            {reviews.map((r, i) => (
              <div key={i} style={{ ...S.card, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                <div style={{ color: "#f59e0b", fontSize: 14, marginBottom: "0.75rem" }}>{"★".repeat(r.stars)}</div>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "#374151", fontStyle: "italic", marginBottom: "1rem" }}>&ldquo;{r.text}&rdquo;</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontWeight: 600, fontSize: 13, color: "#1a1a2e" }}>{r.name}</span>
                  <span style={{ fontSize: 12, color: "#9ca3af" }}>{r.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATIONS ── */}
      <section style={S.section("#ffffff")}>
        <div style={S.inner}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h2 style={S.h2}>Areas We Serve</h2>
            <p style={{ ...S.p, maxWidth: "500px", margin: "0 auto" }}>From Summit County to the Front Range — and everywhere in between</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "0.75rem" }}>
            {locations.map(([name, href]) => (
              <Link key={href as string} href={href as string} style={{ textAlign: "center", padding: "1rem 0.5rem", borderRadius: "0.75rem", background: "#f9f7ff", border: "1px solid #ede9ff", textDecoration: "none", display: "block", transition: "all 0.2s" }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#1a1a2e" }}>{name as string}</div>
                <div style={{ fontSize: 12, color: "#9ca3af", marginTop: 2 }}>Movers →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ background: "linear-gradient(135deg, #2d1454 0%, #6B3FA0 100%)", padding: "6rem 1rem", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ ...S.h2, color: "#fff", marginBottom: "1.25rem", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>Ready for a Stress-Free Mountain Move?</h2>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.75)", marginBottom: "2.5rem", lineHeight: 1.75 }}>Get a free, no-obligation estimate from Summit County&apos;s most trusted moving company. We respond within 1 hour.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/moving-quote" className="btn-primary">Get My Free Quote →</Link>
            <a href="tel:9704688815" className="btn-secondary">📞 Call 970-468-8815</a>
          </div>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, marginTop: "2rem" }}>Licensed · Insured · CO HHG #00502 · Interstate Authority · Since 1994</p>
        </div>
      </section>
    </>
  );
}
