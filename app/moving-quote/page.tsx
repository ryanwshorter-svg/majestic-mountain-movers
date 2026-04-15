import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get a Free Moving Quote | Majestic Mountain Movers | 970-468-8815",
  description: "Get a free, no-obligation moving quote from Summit County's most trusted movers. We respond within 1 hour. Licensed, insured, 500+ five-star reviews.",
  alternates: { canonical: "https://www.majesticmountainmovers.com/moving-quote" },
};

const W = "https://static.wixstatic.com/media/";
const HERO = W + "4f8ee9_644e2ebf242a4fcaaadfeadee8690d7f~mv2.jpg";

export default function QuotePage() {
  return (
    <div style={{ fontFamily: "'Inter',-apple-system,BlinkMacSystemFont,sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        .serif { font-family: 'Playfair Display', Georgia, serif; }
      `}</style>

      {/* ── HERO HEADER ── */}
      <section style={{ position:"relative", minHeight:320, display:"flex", alignItems:"center", overflow:"hidden" }}>
        <img src={HERO} alt="Colorado mountains"
          style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", objectPosition:"center 25%" }}/>
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg, rgba(45,20,84,0.92) 0%, rgba(107,63,160,0.85) 60%, rgba(20,40,60,0.8) 100%)" }}/>
        <div style={{ position:"relative", maxWidth:800, margin:"0 auto", padding:"5rem 2rem", textAlign:"center" }}>
          <p style={{ color:"#86efac", fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:"1rem" }}>No commitment required</p>
          <h1 className="serif" style={{ fontSize:"clamp(2.2rem,5vw,3.5rem)", fontWeight:800, color:"#fff", marginBottom:"1rem", lineHeight:1.15 }}>
            Get Your Free Moving Quote
          </h1>
          <p style={{ fontSize:"1.1rem", color:"rgba(255,255,255,0.82)", lineHeight:1.75, maxWidth:540, margin:"0 auto" }}>
            Tell us about your move and we&apos;ll put together a transparent, guaranteed quote — straight into our system, no phone tag required.
          </p>
          {/* Trust pills */}
          <div style={{ display:"flex", gap:"0.75rem", justifyContent:"center", flexWrap:"wrap", marginTop:"1.75rem" }}>
            {["⭐ 500+ Five-Star Reviews","✅ Guaranteed Pricing","📞 Respond Within 1 Hour","🔒 Licensed & Insured"].map(b=>(
              <span key={b} style={{ background:"rgba(255,255,255,0.12)", border:"1px solid rgba(255,255,255,0.2)", color:"rgba(255,255,255,0.9)", padding:"0.35rem 0.9rem", borderRadius:9999, fontSize:13, fontWeight:500 }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM SECTION ── */}
      <section style={{ background:"#f9f7ff", padding:"4rem 1.5rem 6rem" }}>
        <div style={{ maxWidth:900, margin:"0 auto" }}>

          {/* Branded wrapper card */}
          <div style={{ background:"#fff", borderRadius:"1.75rem", overflow:"hidden", boxShadow:"0 20px 60px rgba(107,63,160,0.15)", border:"1.5px solid #ede9ff" }}>

            {/* Card header — matches site brand */}
            <div style={{ background:"linear-gradient(135deg, #4A2970 0%, #6B3FA0 100%)", padding:"1.75rem 2.5rem", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"1rem" }}>
              <div>
                <div style={{ color:"rgba(255,255,255,0.7)", fontSize:"0.75rem", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:"0.35rem" }}>Majestic Mountain Movers</div>
                <div className="serif" style={{ color:"#fff", fontSize:"1.4rem", fontWeight:700 }}>Request Your Free Estimate</div>
              </div>
              <div style={{ textAlign:"right" }}>
                <div style={{ color:"#fbbf24", fontSize:16, marginBottom:"0.2rem" }}>★★★★½</div>
                <div style={{ color:"rgba(255,255,255,0.7)", fontSize:12 }}>4.5/5 · 500+ Google Reviews</div>
              </div>
            </div>

            {/* Purple accent bar */}
            <div style={{ height:4, background:"linear-gradient(90deg, #4CAF7D, #6B3FA0, #4A2970)" }}/>

            {/* SmartMoving iframe */}
            <div style={{ padding:"0.5rem 0" }}>
              <iframe
                frameBorder="0"
                src="https://portal.smartmoving.com/embedded/?companyId=0c24143c-6a3d-46d1-afe6-ae1e0016021a&branchId=8f180eca-6933-4770-af3e-ae1e005e6f41&mode=short"
                style={{ width:"100%", height:"100%", minHeight:530, minWidth:400, maxWidth:"100%", margin:0, borderWidth:0, display:"block" }}
              />
            </div>

            {/* Card footer */}
            <div style={{ background:"#f9f7ff", borderTop:"1px solid #ede9ff", padding:"1.25rem 2.5rem", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"1rem" }}>
              <div style={{ display:"flex", gap:"1.25rem", flexWrap:"wrap" }}>
                {["🔒 Secure & Private","📋 CO HHG #00502","💰 No Hidden Fees"].map(b=>(
                  <span key={b} style={{ fontSize:13, color:"#6b7280", fontWeight:500 }}>{b}</span>
                ))}
              </div>
              <a href="tel:9704688815" style={{ color:"#6B3FA0", fontWeight:700, fontSize:"0.95rem", textDecoration:"none" }}>
                Prefer to call? 970-468-8815
              </a>
            </div>
          </div>

          {/* Below form: trust section */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1.25rem", marginTop:"2.5rem" }}>
            {[
              { icon:"🏔️", title:"Local mountain experts", body:"Our crews live in Summit County. We know every road, HOA rule, and access challenge." },
              { icon:"📅", title:"Guaranteed date & price", body:"We give you both in writing. No 3-week windows, no surprise charges on moving day." },
              { icon:"⭐", title:"500+ five-star reviews", body:"Families, realtors, and second-home owners trust us most. Read why on Google." },
            ].map((c,i)=>(
              <div key={i} style={{ background:"#fff", borderRadius:"1.25rem", padding:"1.5rem", border:"1.5px solid #ede9ff", textAlign:"center" }}>
                <div style={{ fontSize:"2rem", marginBottom:"0.75rem" }}>{c.icon}</div>
                <div className="serif" style={{ fontWeight:700, color:"#1a1a2e", fontSize:"1rem", marginBottom:"0.5rem" }}>{c.title}</div>
                <p style={{ fontSize:"0.875rem", color:"#6b7280", lineHeight:1.65 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
