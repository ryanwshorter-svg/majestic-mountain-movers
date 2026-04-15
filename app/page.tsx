import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Licensed Interstate Movers | Summit County, CO | Majestic Mountain Movers",
  description: "Stop stressing about your move. Majestic Mountain Movers handles every detail so you can get back to what matters — family, skiing, and mountain life. 970-468-8815.",
};

// StoryBrand Framework:
// Hero = Customer (family wanting mountain life)
// Problem = Moving stress, unlicensed movers, fear of damage
// Guide = Majestic (empathy + authority)
// Plan = 3 steps
// CTA = Get a free quote
// Success = Back on the slopes with family
// Failure avoided = Damaged belongings, wasted weekends, scams

const HERO_IMG = "https://static.wixstatic.com/media/4f8ee9_644e2ebf242a4fcaaadfeadee8690d7f~mv2.jpg";
const SKI_IMG = "https://static.wixstatic.com/media/4f8ee9_644e2ebf242a4fcaaadfeadee8690d7f~mv2.jpg";

const reviews = [
  { name: "Wayne V.", stars: 5, text: "Josh had a crew scrambled in 20 minutes when my U-Haul broke down. They saved our entire move. A killer team — above and beyond doesn't begin to cover it." },
  { name: "Gin D.", stars: 5, text: "We have moved A LOT. These were the best movers we've ever had. They worked nonstop. The best." },
  { name: "Jay H.", stars: 5, text: "After 30+ moves in my life, 10 internationally, I know a great crew. Derrick's team was the best I've ever seen. They made the second crew I'd booked unnecessary." },
  { name: "KIM M.", stars: 5, text: "I'm 74 years old and needed a 90-inch couch moved from a 4th floor condo. These guys showed up with smiles. I was amazed. What beautiful people." },
  { name: "Ross L.", stars: 5, text: "They moved our baby grand piano through a mountain condo. Gave me total peace of mind. Very strong, very capable, very good guys." },
  { name: "Dan O.", stars: 5, text: "Easy to schedule, right on time, did the job right. Moving is stressful — this team makes it not stressful." },
];

export default function HomePage() {
  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", color: "#1a1a1a" }}>

      {/* ════════════════════════════════════
          HERO — Full bleed image, customer as hero
          StoryBrand: Paint the "after" picture first.
          ════════════════════════════════════ */}
      <section style={{ position: "relative", height: "100vh", minHeight: 600, overflow: "hidden", display: "flex", alignItems: "center" }}>
        {/* Full bleed photo */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${HERO_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}/>
        {/* Dark gradient overlay — left side for text legibility */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(90deg, rgba(10,10,20,0.85) 0%, rgba(10,10,20,0.65) 45%, rgba(10,10,20,0.15) 100%)"
        }}/>

        {/* Hero content */}
        <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "0 2rem", width: "100%" }}>
          <div style={{ maxWidth: 580 }}>
            {/* Eyebrow */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 9999, padding: "0.4rem 1rem", marginBottom: "1.5rem" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80", display: "inline-block", animation: "pulse 2s infinite" }}/>
              <span style={{ color: "rgba(255,255,255,0.9)", fontSize: 13, fontWeight: 600 }}>Summit County&apos;s Only Licensed Interstate Mover</span>
            </div>

            {/* H1 — speaks to the customer's desired identity */}
            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
              textShadow: "0 2px 20px rgba(0,0,0,0.4)"
            }}>
              Your mountain life<br/>
              <span style={{ color: "#86efac" }}>starts the moment</span><br/>
              we take over.
            </h1>

            {/* StoryBrand: Name the problem, then promise the transformation */}
            <p style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.75, marginBottom: "2.25rem", maxWidth: 500 }}>
              Moving stress shouldn&apos;t steal a single powder day. We handle every detail — so you can get back to the slopes, the trails, and the people you love.
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
              <Link href="/moving-quote" style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #16a34a, #15803d)",
                color: "#fff",
                fontWeight: 700,
                fontSize: "1rem",
                padding: "1rem 2.25rem",
                borderRadius: 9999,
                textDecoration: "none",
                boxShadow: "0 4px 24px rgba(22,163,74,0.5)",
                transition: "all 0.2s"
              }}>
                Get My Free Quote →
              </Link>
              <a href="tel:9704688815" style={{
                display: "inline-block",
                background: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(8px)",
                color: "#fff",
                fontWeight: 600,
                fontSize: "1rem",
                padding: "1rem 2rem",
                borderRadius: 9999,
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.3)"
              }}>
                📞 970-468-8815
              </a>
            </div>

            {/* Social proof inline */}
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ display: "flex", gap: 2 }}>
                  {[...Array(5)].map((_, i) => <span key={i} style={{ color: "#fbbf24", fontSize: 16 }}>★</span>)}
                </div>
                <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 14 }}>500+ Google Reviews</span>
              </div>
              <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.2)" }}/>
              <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 13 }}>Licensed · Insured · CO HHG #00502</span>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase" }}>Scroll</span>
          <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)" }}/>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap');
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes scrollTicker { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        * { box-sizing: border-box; }
        a:hover { opacity: 0.88; }
        .card:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(0,0,0,0.12) !important; }
        @media(max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .reviews-grid { grid-template-columns: 1fr !important; }
          .locations-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .steps-grid { grid-template-columns: 1fr !important; }
          .why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ════════════════════════════════════
          PROBLEM — Name what they feel
          StoryBrand: Acknowledge the villain (moving chaos)
          ════════════════════════════════════ */}
      <section style={{ padding: "5rem 1.5rem", background: "#0f172a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#94a3b8", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1rem" }}>We understand how it feels</p>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", color: "#f8fafc", marginBottom: "3.5rem", lineHeight: 1.25 }}>
            Moving should be the beginning of your<br/>mountain adventure — not a nightmare.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }} className="services-grid">
            {[
              { icon: "😟", title: "The stress of the unknown", body: "Will my furniture arrive intact? Will the movers even show up? In the mountains, there are no second chances." },
              { icon: "💸", title: "Hidden fees on moving day", body: "You were quoted one price. Now it's moving day and surprise charges keep appearing. You have no choice but to pay." },
              { icon: "⏰", title: "Weekends stolen by boxes", body: "You moved to the mountains for a reason. Instead of skiing, you're unpacking — waiting for a delivery window that never comes." },
            ].map((p, i) => (
              <div key={i} style={{ background: "#1e293b", borderRadius: "1.25rem", padding: "2rem", textAlign: "left", border: "1px solid #334155" }}>
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{p.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", color: "#f1f5f9", marginBottom: "0.75rem" }}>{p.title}</h3>
                <p style={{ fontSize: "0.95rem", color: "#94a3b8", lineHeight: 1.7 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          GUIDE — Empathy + Authority
          StoryBrand: We've been where you are. Here's our credibility.
          ════════════════════════════════════ */}
      <section style={{ padding: "6rem 1.5rem", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="why-grid">
            <div>
              <p style={{ color: "#6B3FA0", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1rem" }}>Your guide to a stress-free move</p>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#1a1a2e", marginBottom: "1.5rem", lineHeight: 1.25 }}>
                We&apos;ve spent 30 years earning<br/>the right to carry your life.
              </h2>
              <p style={{ fontSize: "1.05rem", color: "#4b5563", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                We&apos;re not a national van line sending strangers to your door. We&apos;re your neighbors — locals who ski these same mountains, shop in these same towns, and raise families in the same communities you call home.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4b5563", lineHeight: 1.8, marginBottom: "2rem" }}>
                Led by Ryan Shorter, a 2-time Olympic Head Coach, Majestic Mountain Movers brings elite-level precision to every single relocation. And as the <strong>only moving company in Summit County with a full interstate license</strong>, we can take you anywhere — with the same crew, same truck, guaranteed price, guaranteed date.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2rem" }}>
                {[
                  { num: "30+", label: "Years serving Summit County" },
                  { num: "500+", label: "Five-star Google reviews" },
                  { num: "#1", label: "Licensed interstate mover in Summit County" },
                  { num: "0", label: "Hidden fees. Ever." },
                ].map(s => (
                  <div key={s.label} style={{ background: "#f9f7ff", borderRadius: "1rem", padding: "1.25rem", border: "1px solid #ede9ff" }}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem", fontWeight: 700, color: "#6B3FA0", marginBottom: "0.25rem" }}>{s.num}</div>
                    <div style={{ fontSize: "0.85rem", color: "#6b7280", lineHeight: 1.4 }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <Link href="/about" style={{ display: "inline-block", border: "2px solid #6B3FA0", color: "#6B3FA0", fontWeight: 700, padding: "0.8rem 2rem", borderRadius: 9999, textDecoration: "none", fontSize: "0.95rem" }}>
                Meet the team →
              </Link>
            </div>

            {/* Right: visual proof */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ borderRadius: "1.5rem", overflow: "hidden", height: 280, position: "relative" }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center top" }}/>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.4), transparent)" }}/>
                <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem" }}>
                  <div style={{ background: "rgba(255,255,255,0.95)", borderRadius: "0.75rem", padding: "0.75rem 1rem", display: "inline-block" }}>
                    <div style={{ fontSize: "0.75rem", color: "#6b7280", marginBottom: "0.2rem" }}>Our customers after their move</div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1a1a2e" }}>🎿 Back on the slopes. Stress-free.</div>
                  </div>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div style={{ background: "#6B3FA0", borderRadius: "1.25rem", padding: "1.5rem", textAlign: "center" }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", fontWeight: 700, color: "#fff" }}>🏆</div>
                  <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.8)", marginTop: "0.5rem", lineHeight: 1.4 }}>Olympic Head Coach-led team</div>
                </div>
                <div style={{ background: "#0f172a", borderRadius: "1.25rem", padding: "1.5rem" }}>
                  <div style={{ color: "#4ade80", fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.4rem" }}>Unique to us</div>
                  <div style={{ color: "#f1f5f9", fontSize: "0.9rem", fontWeight: 600, lineHeight: 1.4 }}>Only licensed interstate mover in Summit County</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          PLAN — 3 simple steps
          StoryBrand: Remove friction. Make the path clear.
          ════════════════════════════════════ */}
      <section style={{ padding: "6rem 1.5rem", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ color: "#6B3FA0", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.75rem" }}>How it works</p>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", color: "#1a1a2e", marginBottom: "1rem" }}>
              Three steps. Then you&apos;re done.
            </h2>
            <p style={{ fontSize: "1.05rem", color: "#6b7280", maxWidth: 480, margin: "0 auto" }}>We made the process simple so you can spend your energy on what comes next.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem", position: "relative" }} className="steps-grid">
            {[
              { step: "01", title: "Call or get a quote online", body: "Tell us where you're going. We'll give you a transparent, guaranteed price — no surprise charges on moving day.", cta: null },
              { step: "02", title: "We build your custom moving plan", body: "Our experts map every detail — access windows, HOA rules, weather, timing. You get a plan that accounts for everything Colorado can throw at us.", cta: null },
              { step: "03", title: "We move. You live.", body: "Our vetted crews handle it all. You focus on your first ski run in your new mountain home.", cta: null },
            ].map((s, i) => (
              <div key={i} style={{ position: "relative" }}>
                {i < 2 && (
                  <div style={{ position: "absolute", top: "2.5rem", left: "calc(100% - 1rem)", width: "2rem", height: 2, background: "#e2e8f0", zIndex: 1 }} className="step-connector"/>
                )}
                <div style={{ background: "#fff", borderRadius: "1.5rem", padding: "2rem", border: "1.5px solid #e2e8f0", boxShadow: "0 2px 16px rgba(0,0,0,0.06)", height: "100%" }}>
                  <div style={{ width: 52, height: 52, borderRadius: "0.875rem", background: "linear-gradient(135deg, #6B3FA0, #4A2970)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem", fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: "1rem", fontWeight: 700 }}>{s.step}</div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", color: "#1a1a2e", marginBottom: "0.75rem" }}>{s.title}</h3>
                  <p style={{ fontSize: "0.95rem", color: "#6b7280", lineHeight: 1.75 }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/moving-quote" style={{ display: "inline-block", background: "linear-gradient(135deg, #6B3FA0, #4A2970)", color: "#fff", fontWeight: 700, fontSize: "1rem", padding: "1rem 2.5rem", borderRadius: 9999, textDecoration: "none", boxShadow: "0 4px 20px rgba(107,63,160,0.4)" }}>
              Start with a free quote →
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          SUCCESS — Show the "after"
          StoryBrand: Vivid picture of life after the move
          ════════════════════════════════════ */}
      <section style={{ position: "relative", padding: "7rem 1.5rem", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${SKI_IMG})`, backgroundSize: "cover", backgroundPosition: "center 20%" }}/>
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,10,20,0.75)" }}/>
        <div style={{ position: "relative", maxWidth: 750, margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#86efac", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1rem" }}>Imagine this</p>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 4vw, 3.25rem)", color: "#fff", marginBottom: "1.5rem", lineHeight: 1.2 }}>
            Moving day is over by noon.<br/>You&apos;re on the mountain by 2.
          </h2>
          <p style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.8, marginBottom: "2.5rem" }}>
            No damaged furniture. No missing boxes. No invoice surprises. Just your family, your new mountain home, and the life you moved here for — already underway.
          </p>
          <Link href="/moving-quote" style={{ display: "inline-block", background: "linear-gradient(135deg, #16a34a, #15803d)", color: "#fff", fontWeight: 700, fontSize: "1.05rem", padding: "1.1rem 2.75rem", borderRadius: 9999, textDecoration: "none", boxShadow: "0 6px 28px rgba(22,163,74,0.5)" }}>
            Make it happen →
          </Link>
        </div>
      </section>

      {/* ════════════════════════════════════
          SOCIAL PROOF — Reviews
          ════════════════════════════════════ */}
      <section style={{ padding: "6rem 1.5rem", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", background: "#fffbeb", border: "1px solid #fde68a", borderRadius: 9999, padding: "0.5rem 1.25rem", marginBottom: "1rem" }}>
              <span style={{ color: "#f59e0b" }}>★★★★½</span>
              <span style={{ fontSize: 14, fontWeight: 600, color: "#374151" }}>4.5/5 · 500+ Google Reviews</span>
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: "#1a1a2e", marginBottom: "0.5rem" }}>
              500 families found their mountain peace.
            </h2>
            <p style={{ color: "#6b7280", fontSize: "1rem" }}>Here&apos;s what they said.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }} className="reviews-grid">
            {reviews.map((r, i) => (
              <div key={i} className="card" style={{ background: "#f9f7ff", borderRadius: "1.25rem", padding: "1.75rem", border: "1px solid #ede9ff", boxShadow: "0 2px 12px rgba(0,0,0,0.05)", transition: "all 0.2s" }}>
                <div style={{ color: "#f59e0b", fontSize: 15, marginBottom: "0.875rem" }}>{"★".repeat(r.stars)}</div>
                <p style={{ fontSize: "0.95rem", color: "#374151", lineHeight: 1.75, fontStyle: "italic", marginBottom: "1.25rem" }}>&ldquo;{r.text}&rdquo;</p>
                <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "#6B3FA0" }}>— {r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          SERVICES — Clean grid
          ════════════════════════════════════ */}
      <section style={{ padding: "6rem 1.5rem", background: "#0f172a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ color: "#94a3b8", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Everything you need</p>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", color: "#f8fafc", marginBottom: "1rem" }}>
              Full-service moving &amp; storage
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }} className="services-grid">
            {[
              { icon: "🗺️", title: "Interstate Moving", desc: "The only Summit County-based mover licensed to cross state lines. Same crew, same truck, guaranteed date.", href: "/interstate-movers-summit-county" },
              { icon: "🏔️", title: "Local Moving", desc: "We know every HOA, every narrow road, every resort loading dock in Summit County.", href: "/local-movers-summit-county" },
              { icon: "🤍", title: "White Glove Moving", desc: "Premium care for luxury homes, art, pianos, and antiques. Vail and Breckenridge specialists.", href: "/white-glove-movers-vail-colorado" },
              { icon: "🏡", title: "Vacation Home Moving", desc: "Second home and ski condo specialists. We coordinate remotely while you handle life.", href: "/vacation-home-movers-colorado" },
              { icon: "🚚", title: "Furniture Delivery", desc: "Receive, inspect, deliver, and set up — perfect for designers and mountain homeowners.", href: "/furniture-delivery-vail-breckenridge" },
              { icon: "📦", title: "Packing Services", desc: "We pack it right the first time. Nothing damaged. Nothing missing.", href: "/packing-services" },
            ].map((s, i) => (
              <Link key={i} href={s.href} className="card" style={{ background: "#1e293b", borderRadius: "1.25rem", padding: "1.75rem", border: "1px solid #334155", textDecoration: "none", display: "block", transition: "all 0.2s" }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>{s.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: "#f1f5f9", marginBottom: "0.6rem" }}>{s.title}</h3>
                <p style={{ fontSize: "0.9rem", color: "#94a3b8", lineHeight: 1.7, marginBottom: "0.875rem" }}>{s.desc}</p>
                <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "#a78bfa" }}>Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          LOCATIONS
          ════════════════════════════════════ */}
      <section style={{ padding: "5rem 1.5rem", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.25rem)", color: "#1a1a2e", marginBottom: "0.5rem" }}>We move the mountains.</h2>
            <p style={{ color: "#6b7280" }}>Summit County · Eagle County · Denver Metro · Statewide · Nationwide</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "0.75rem" }} className="locations-grid">
            {[
              ["Breckenridge", "/breckenridge-movers"], ["Vail", "/vail-movers"],
              ["Silverthorne", "/silverthorne-movers"], ["Frisco", "/frisco-movers"],
              ["Keystone", "/keystone-movers"], ["Dillon", "/dillon-movers"],
              ["Copper Mountain", "/copper-mountain-movers"], ["Aspen", "/aspen-movers"],
              ["Denver", "/denver-movers"], ["Buena Vista", "/buena-vista-movers"],
            ].map(([name, href]) => (
              <Link key={href} href={href} style={{ textAlign: "center", padding: "1rem 0.5rem", borderRadius: "0.875rem", background: "#fff", border: "1.5px solid #e2e8f0", textDecoration: "none", display: "block", transition: "all 0.2s" }}>
                <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "#1a1a2e" }}>{name}</div>
                <div style={{ fontSize: "0.75rem", color: "#9ca3af", marginTop: 3 }}>Movers →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          FINAL CTA — The call to action
          StoryBrand: Direct, clear, low friction
          ════════════════════════════════════ */}
      <section style={{ padding: "6rem 1.5rem", background: "#0f172a", textAlign: "center" }}>
        <div style={{ maxWidth: 650, margin: "0 auto" }}>
          <p style={{ color: "#86efac", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1rem" }}>You&apos;ve found your guide</p>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#f8fafc", marginBottom: "1.25rem", lineHeight: 1.2 }}>
            Stop stressing.<br/>Start your mountain life.
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#94a3b8", marginBottom: "2.5rem", lineHeight: 1.75 }}>
            Get a free, transparent quote in minutes. No commitment, no pressure — just a clear plan from Colorado&apos;s most trusted mountain movers.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "1.5rem" }}>
            <Link href="/moving-quote" style={{ display: "inline-block", background: "linear-gradient(135deg, #16a34a, #15803d)", color: "#fff", fontWeight: 700, fontSize: "1.05rem", padding: "1.1rem 2.75rem", borderRadius: 9999, textDecoration: "none", boxShadow: "0 6px 28px rgba(22,163,74,0.4)" }}>
              Get My Free Quote →
            </Link>
            <a href="tel:9704688815" style={{ display: "inline-block", background: "rgba(255,255,255,0.08)", color: "#fff", fontWeight: 600, fontSize: "1.05rem", padding: "1.1rem 2.25rem", borderRadius: 9999, textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)" }}>
              📞 970-468-8815
            </a>
          </div>
          <p style={{ color: "#475569", fontSize: "0.8rem" }}>Licensed · Insured · CO HHG #00502 · Summit County&apos;s Only Licensed Interstate Mover · Since 1994</p>
        </div>
      </section>

    </div>
  );
}
