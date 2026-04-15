import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Licensed Interstate Movers | Summit County, CO | Majestic Mountain Movers",
  description: "Stop stressing about your move. Majestic Mountain Movers handles every detail so you can get back to skiing, hiking, and the family moments that matter. 970-468-8815.",
};

const W = "https://static.wixstatic.com/media/";
const IMGS = {
  hero:      W + "4f8ee9_644e2ebf242a4fcaaadfeadee8690d7f~mv2.jpg",   // dad hugging daughter on slopes
  skier:     W + "4f8ee9_8a76905280c449b3bf622ef230427047~mv2.jpg",   // skier carving powder
  mountain1: W + "4f8ee9_1914388a2cc448d08a613d4b4a9af7ee~mv2.jpg",  // mountain scene
  mountain2: W + "4f8ee9_7237f476d57d478d8f5753de8a555231~mv2.jpg",  // mountain scene 2
  foliage:   W + "4f8ee9_f410c2c7198d4afa8628c67601af73e3~mv2.jpg",  // fall foliage colorado
  colorado1: W + "4f8ee9_6b025534ec6b46bcaf57a1804ed3b768~mv2.jpg",  // colorado landscape
  colorado2: W + "4f8ee9_ccda015101134e79946b583da351bfde~mv2.jpg",  // colorado scene
  movers1:   W + "4f8ee9_7e0a36cff11d441cb4a264c593dd2111~mv2.jpg",  // movers at work
  movers2:   W + "4f8ee9_64b750ef73294a8dac7259fd3eabb9d5~mv2.jpg",  // movers at work 2
  movers3:   W + "4f8ee9_bd050df2dbff4c0b96106b422adfa98d~mv2.jpg",  // movers at work 3
  lifestyle1:W + "4f8ee9_939b0c2bc1164084bf6f48a88f443bc5~mv2.jpeg", // lifestyle
  lifestyle2:W + "4f8ee9_840b2eb9bf8147c2a39df5760d0ed966~mv2.jpg",  // lifestyle 2
  lifestyle3:W + "4f8ee9_eb4ff2aa579d41bf9815005f780aa764~mv2.jpg",  // lifestyle 3
  lifestyle4:W + "4f8ee9_712fb491436b4289b3da3e7f4a2b9c91~mv2.jpg",  // lifestyle 4
};

const reviews = [
  { name: "Wayne V.", stars: 5, text: "Josh had a crew scrambled in 20 minutes when my U-Haul broke down. They saved our entire move. Above and beyond doesn't begin to cover it." },
  { name: "Gin D.", stars: 5, text: "We have moved A LOT. These were the best movers we've ever had. They worked nonstop. I hope never to move again — but would use them without thinking twice." },
  { name: "Jay H.", stars: 5, text: "After 30+ moves in my life — 10 internationally — I know a great crew. Derrick's team was the best I've ever seen. Made the second crew I'd booked unnecessary." },
  { name: "KIM M.", stars: 5, text: "I'm 74 years old and needed a 90-inch couch moved from a 4th floor condo. These guys showed up with smiles, wrapped everything perfectly. I was amazed." },
  { name: "Ross L.", stars: 5, text: "They moved our baby grand piano through a mountain condo. Strong, capable, total pros. Gave me complete peace of mind." },
  { name: "Dan O.", stars: 5, text: "Easy to schedule, right on time, did the job right and fast. Moving is stressful — this team makes it not stressful. Simple as that." },
];

export default function HomePage() {
  return (
    <div style={{ fontFamily: "'Inter',-apple-system,BlinkMacSystemFont,sans-serif", color: "#1a1a1a", margin: 0, padding: 0 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes pulse { 0%,100%{opacity:1}50%{opacity:.5} }
        @keyframes ticker { from{transform:translateX(0)}to{transform:translateX(-50%)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)} }
        .serif { font-family: 'Playfair Display', Georgia, serif; }
        .hover-lift { transition: transform 0.25s, box-shadow 0.25s; }
        .hover-lift:hover { transform: translateY(-4px); box-shadow: 0 20px 50px rgba(0,0,0,0.15) !important; }
        .img-card { overflow:hidden; border-radius:1.25rem; position:relative; }
        .img-card img { width:100%; height:100%; object-fit:cover; display:block; transition: transform 0.5s; }
        .img-card:hover img { transform: scale(1.04); }
        @media(max-width:900px){
          .grid2{grid-template-columns:1fr!important;}
          .grid3{grid-template-columns:1fr!important;}
          .grid4{grid-template-columns:repeat(2,1fr)!important;}
          .grid5{grid-template-columns:repeat(2,1fr)!important;}
          .hide-mobile{display:none!important;}
        }
      `}</style>

      {/* ══════════════════════════════════════
          1. HERO — Full bleed. Customer as hero.
             StoryBrand: Show the "after" immediately.
          ══════════════════════════════════════ */}
      <section style={{ position:"relative", height:"100vh", minHeight:640, overflow:"hidden", display:"flex", alignItems:"center" }}>
        <img src={IMGS.hero} alt="Family enjoying Colorado mountains after a stress-free move"
          style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", objectPosition:"center 25%" }}/>
        {/* Multi-layer overlay for text legibility on left, clear photo on right */}
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(100deg, rgba(5,5,15,0.88) 0%, rgba(5,5,15,0.7) 40%, rgba(5,5,15,0.25) 65%, rgba(5,5,15,0.1) 100%)" }}/>

        <div style={{ position:"relative", maxWidth:1240, margin:"0 auto", padding:"0 2rem", width:"100%" }}>
          <div style={{ maxWidth:560, animation:"fadeUp 0.8s ease-out forwards" }}>
            <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(255,255,255,0.1)", backdropFilter:"blur(12px)", border:"1px solid rgba(255,255,255,0.2)", borderRadius:9999, padding:"0.45rem 1.1rem", marginBottom:"1.75rem" }}>
              <span style={{ width:8, height:8, borderRadius:"50%", background:"#4ade80", display:"inline-block", animation:"pulse 2s infinite" }}/>
              <span style={{ color:"rgba(255,255,255,0.92)", fontSize:13, fontWeight:600, letterSpacing:"0.02em" }}>Summit County&apos;s Only Licensed Interstate Mover</span>
            </div>

            <h1 className="serif" style={{ fontSize:"clamp(2.75rem,6vw,4.75rem)", fontWeight:800, color:"#ffffff", lineHeight:1.08, marginBottom:"1.5rem", textShadow:"0 2px 30px rgba(0,0,0,0.5)" }}>
              Your mountain life<br/>
              <em style={{ color:"#86efac", fontStyle:"normal" }}>starts the moment</em><br/>
              we take over.
            </h1>

            <p style={{ fontSize:"1.2rem", color:"rgba(255,255,255,0.85)", lineHeight:1.8, marginBottom:"2.25rem", maxWidth:490 }}>
              Moving stress shouldn&apos;t steal a single powder day. We handle every detail — you get back to the slopes, the trails, and the people you love.
            </p>

            <div style={{ display:"flex", gap:"1rem", flexWrap:"wrap", marginBottom:"2.5rem" }}>
              <Link href="/moving-quote" style={{ display:"inline-block", background:"linear-gradient(135deg,#16a34a,#15803d)", color:"#fff", fontWeight:700, fontSize:"1rem", padding:"1rem 2.25rem", borderRadius:9999, textDecoration:"none", boxShadow:"0 4px 24px rgba(22,163,74,0.55)", letterSpacing:"0.01em" }}>
                Get My Free Quote →
              </Link>
              <a href="tel:9704688815" style={{ display:"inline-block", background:"rgba(255,255,255,0.12)", backdropFilter:"blur(8px)", color:"#fff", fontWeight:600, fontSize:"1rem", padding:"1rem 2rem", borderRadius:9999, textDecoration:"none", border:"1.5px solid rgba(255,255,255,0.35)" }}>
                📞 970-468-8815
              </a>
            </div>

            <div style={{ display:"flex", alignItems:"center", gap:"1.5rem", flexWrap:"wrap" }}>
              <div style={{ display:"flex", gap:3 }}>
                {[...Array(5)].map((_,i)=><span key={i} style={{ color:"#fbbf24", fontSize:18 }}>★</span>)}
              </div>
              <span style={{ color:"rgba(255,255,255,0.75)", fontSize:14 }}>4.5/5 · 500+ Google Reviews</span>
              <span style={{ color:"rgba(255,255,255,0.3)", fontSize:12 }}>|</span>
              <span style={{ color:"rgba(255,255,255,0.6)", fontSize:13 }}>Licensed · CO HHG #00502</span>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div style={{ position:"absolute", bottom:"2rem", left:"50%", transform:"translateX(-50%)", textAlign:"center" }}>
          <div style={{ color:"rgba(255,255,255,0.4)", fontSize:11, letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:8 }}>Scroll</div>
          <div style={{ width:1, height:40, background:"linear-gradient(to bottom,rgba(255,255,255,0.4),transparent)", margin:"0 auto" }}/>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TICKER TRUST BAR
          ══════════════════════════════════════ */}
      <div style={{ background:"#1a0a2e", padding:"0.9rem 0", overflow:"hidden" }}>
        <div style={{ display:"flex", gap:"3rem", whiteSpace:"nowrap", animation:"ticker 40s linear infinite", width:"max-content" }}>
          {[...Array(2)].map((_,r)=>
            ["🏆 30+ Years in Summit County","⭐ 500+ Five-Star Reviews","📋 CO HHG #00502 Licensed","🏔️ Only Licensed Interstate Mover Based in Summit County","🚛 Air-Ride Suspension Trucks","📞 24/7 Customer Support","✅ No Hidden Fees. Guaranteed Pricing.","🎿 Get Back to the Mountains Faster"].map((item,i)=>(
              <span key={`${r}-${i}`} style={{ color:"rgba(255,255,255,0.8)", fontSize:13.5, fontWeight:500, flexShrink:0 }}>
                {item}<span style={{ color:"rgba(255,255,255,0.2)", marginLeft:"1.5rem" }}>•</span>
              </span>
            ))
          )}
        </div>
      </div>

      {/* ══════════════════════════════════════
          2. PROBLEM — Photo-backed, dark, emotional
          StoryBrand: Name what they fear
          ══════════════════════════════════════ */}
      <section style={{ position:"relative", overflow:"hidden" }}>
        {/* background photo */}
        <img src={IMGS.mountain2} alt="Colorado mountains" style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", objectPosition:"center" }}/>
        <div style={{ position:"absolute", inset:0, background:"rgba(5,5,20,0.82)" }}/>

        <div style={{ position:"relative", maxWidth:1200, margin:"0 auto", padding:"6rem 2rem" }}>
          <div style={{ textAlign:"center", marginBottom:"3.5rem" }}>
            <p style={{ color:"#94a3b8", fontSize:"0.8rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:"1rem" }}>We understand how moving feels</p>
            <h2 className="serif" style={{ fontSize:"clamp(1.9rem,3.8vw,3rem)", color:"#f8fafc", lineHeight:1.2 }}>
              Moving should be the beginning of<br/>your mountain story — not a nightmare.
            </h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1.5rem" }} className="grid3">
            {[
              { img: IMGS.movers1, icon:"😰", title:"The fear of damage", body:"Will your furniture survive? Will the movers show up? Mountain moves have no second chances. One wrong turn on a steep Keystone driveway changes everything." },
              { img: IMGS.movers2, icon:"💸", title:"Hidden fees on moving day", body:"You were quoted one price. Now it's moving day and surprise charges keep appearing. You're trapped — with a truck, in the mountains, with no options." },
              { img: IMGS.movers3, icon:"⏰", title:"Weekends lost to boxes", body:"You moved to the mountains for a reason. Instead of a first ski run, you're unpacking — waiting for a 3-week delivery window that never comes." },
            ].map((p,i)=>(
              <div key={i} style={{ background:"rgba(255,255,255,0.06)", backdropFilter:"blur(12px)", borderRadius:"1.25rem", overflow:"hidden", border:"1px solid rgba(255,255,255,0.1)" }}>
                <div className="img-card" style={{ height:200, borderRadius:0 }}>
                  <img src={p.img} alt={p.title}/>
                  <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }}/>
                </div>
                <div style={{ padding:"1.75rem" }}>
                  <div style={{ fontSize:"1.75rem", marginBottom:"0.75rem" }}>{p.icon}</div>
                  <h3 className="serif" style={{ fontSize:"1.15rem", color:"#f1f5f9", marginBottom:"0.75rem" }}>{p.title}</h3>
                  <p style={{ fontSize:"0.93rem", color:"#94a3b8", lineHeight:1.75 }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. GUIDE — Split layout with real photos
          StoryBrand: Empathy first, then authority
          ══════════════════════════════════════ */}
      <section style={{ background:"#fff", padding:"7rem 2rem" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"5rem", alignItems:"center" }} className="grid2">
            {/* Left: photo collage */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gridTemplateRows:"280px 200px", gap:"1rem" }}>
              <div className="img-card hover-lift" style={{ gridRow:"span 2", boxShadow:"0 8px 30px rgba(0,0,0,0.12)" }}>
                <img src={IMGS.skier} alt="Skier carving powder in Colorado mountains"/>
              </div>
              <div className="img-card hover-lift" style={{ boxShadow:"0 8px 30px rgba(0,0,0,0.12)" }}>
                <img src={IMGS.foliage} alt="Colorado fall foliage mountain scenery"/>
              </div>
              <div className="img-card hover-lift" style={{ boxShadow:"0 8px 30px rgba(0,0,0,0.12)" }}>
                <img src={IMGS.colorado1} alt="Beautiful Colorado mountain landscape"/>
              </div>
            </div>

            {/* Right: copy */}
            <div>
              <p style={{ color:"#6B3FA0", fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:"1rem" }}>Your guide to a stress-free move</p>
              <h2 className="serif" style={{ fontSize:"clamp(1.9rem,3.5vw,2.75rem)", color:"#1a1a2e", marginBottom:"1.5rem", lineHeight:1.2 }}>
                We&apos;ve spent 30 years earning<br/>the right to carry your life.
              </h2>
              <p style={{ fontSize:"1.05rem", color:"#4b5563", lineHeight:1.85, marginBottom:"1.25rem" }}>
                We&apos;re not a national van line sending strangers to your door. We&apos;re your neighbors — locals who ski these same mountains, shop in these same towns, and raise families in Summit County.
              </p>
              <p style={{ fontSize:"1.05rem", color:"#4b5563", lineHeight:1.85, marginBottom:"2rem" }}>
                Led by Ryan Shorter, a <strong style={{ color:"#1a1a2e" }}>2-time Olympic Head Coach</strong>, we bring elite-level precision to every relocation. And as the <strong style={{ color:"#1a1a2e" }}>only moving company in Summit County with a full interstate license</strong>, we take you anywhere — same crew, same truck, guaranteed price, guaranteed date.
              </p>

              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem", marginBottom:"2.25rem" }}>
                {[
                  { num:"30+", label:"Years of mountain moves" },
                  { num:"500+", label:"Five-star Google reviews" },
                  { num:"#1", label:"Licensed interstate mover in Summit County" },
                  { num:"$0", label:"Hidden fees. Guaranteed." },
                ].map(s=>(
                  <div key={s.label} style={{ background:"#f9f7ff", borderRadius:"1rem", padding:"1.25rem", border:"1.5px solid #ede9ff" }}>
                    <div className="serif" style={{ fontSize:"1.9rem", fontWeight:700, color:"#6B3FA0", marginBottom:"0.25rem" }}>{s.num}</div>
                    <div style={{ fontSize:"0.83rem", color:"#6b7280", lineHeight:1.4 }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <Link href="/about" style={{ display:"inline-block", border:"2px solid #6B3FA0", color:"#6B3FA0", fontWeight:700, padding:"0.85rem 2rem", borderRadius:9999, textDecoration:"none", fontSize:"0.95rem", transition:"all 0.2s" }}>
                Meet the team →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. PLAN — Clean white, 3 steps with images
          ══════════════════════════════════════ */}
      <section style={{ background:"#f8f9fa", padding:"7rem 2rem" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:"4.5rem" }}>
            <p style={{ color:"#6B3FA0", fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:"0.75rem" }}>How it works</p>
            <h2 className="serif" style={{ fontSize:"clamp(1.9rem,3.8vw,3rem)", color:"#1a1a2e", marginBottom:"1rem" }}>
              Three steps. Then you&apos;re free.
            </h2>
            <p style={{ fontSize:"1.05rem", color:"#6b7280", maxWidth:460, margin:"0 auto" }}>We made the process simple on purpose — so you can spend your energy on what comes next.</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"2rem" }} className="grid3">
            {[
              { num:"01", img:IMGS.colorado2, title:"Call or get a quote online", body:"Tell us where you're going. We'll give you a transparent, guaranteed price in writing. No surprises on moving day — we promise.", color:"#6B3FA0" },
              { num:"02", img:IMGS.mountain1, title:"We build your custom plan", body:"Our experts map every detail — HOA windows, weather patterns, mountain access roads, elevator reservations. Nothing is left to chance.", color:"#4CAF7D" },
              { num:"03", img:IMGS.hero,      title:"We move. You live.", body:"Our vetted, background-checked crews handle everything. Your job? Enjoy your first run on the mountain from your new home.", color:"#1a0a2e" },
            ].map((s,i)=>(
              <div key={i} className="hover-lift" style={{ background:"#fff", borderRadius:"1.5rem", overflow:"hidden", boxShadow:"0 4px 20px rgba(0,0,0,0.07)", border:"1px solid #f0f0f0" }}>
                <div className="img-card" style={{ height:220, borderRadius:0 }}>
                  <img src={s.img} alt={s.title}/>
                  <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(0,0,0,0.45),transparent)" }}/>
                  <div style={{ position:"absolute", top:"1.25rem", left:"1.25rem", width:48, height:48, borderRadius:"0.875rem", background:s.color, display:"flex", alignItems:"center", justifyContent:"center" }}>
                    <span className="serif" style={{ color:"#fff", fontWeight:700, fontSize:"1.1rem" }}>{s.num}</span>
                  </div>
                </div>
                <div style={{ padding:"1.75rem" }}>
                  <h3 className="serif" style={{ fontSize:"1.15rem", color:"#1a1a2e", marginBottom:"0.75rem" }}>{s.title}</h3>
                  <p style={{ fontSize:"0.93rem", color:"#6b7280", lineHeight:1.75 }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign:"center", marginTop:"3.5rem" }}>
            <Link href="/moving-quote" style={{ display:"inline-block", background:"linear-gradient(135deg,#6B3FA0,#4A2970)", color:"#fff", fontWeight:700, fontSize:"1.05rem", padding:"1.1rem 2.75rem", borderRadius:9999, textDecoration:"none", boxShadow:"0 4px 24px rgba(107,63,160,0.4)", letterSpacing:"0.01em" }}>
              Start with a free quote →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. SUCCESS — Full bleed "after" photo
          StoryBrand: Vivid picture of transformed life
          ══════════════════════════════════════ */}
      <section style={{ position:"relative", minHeight:600, display:"flex", alignItems:"center", overflow:"hidden" }}>
        <img src={IMGS.skier} alt="Skier carving powder — the life that awaits after your move"
          style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", objectPosition:"center 30%" }}/>
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg,rgba(5,5,20,0.82) 0%,rgba(5,5,20,0.55) 60%,rgba(5,5,20,0.3) 100%)" }}/>
        <div style={{ position:"relative", maxWidth:1200, margin:"0 auto", padding:"7rem 2rem", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"4rem", alignItems:"center" }} className="grid2">
          <div>
            <p style={{ color:"#86efac", fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:"1rem" }}>Imagine this</p>
            <h2 className="serif" style={{ fontSize:"clamp(2rem,4.5vw,3.5rem)", color:"#fff", lineHeight:1.15, marginBottom:"1.5rem" }}>
              Moving day is over<br/>by noon. You&apos;re on the<br/><em style={{ color:"#86efac", fontStyle:"normal" }}>mountain by 2.</em>
            </h2>
            <p style={{ fontSize:"1.15rem", color:"rgba(255,255,255,0.82)", lineHeight:1.8, marginBottom:"2.5rem" }}>
              No damaged furniture. No missing boxes. No invoice surprises. Just your family, your new mountain home, and the life you moved here for — already underway.
            </p>
            <Link href="/moving-quote" style={{ display:"inline-block", background:"linear-gradient(135deg,#16a34a,#15803d)", color:"#fff", fontWeight:700, fontSize:"1.05rem", padding:"1.1rem 2.75rem", borderRadius:9999, textDecoration:"none", boxShadow:"0 6px 30px rgba(22,163,74,0.55)" }}>
              Make it happen →
            </Link>
          </div>
          {/* Right: floating quote card */}
          <div style={{ display:"flex", justifyContent:"flex-end" }}>
            <div style={{ background:"rgba(255,255,255,0.1)", backdropFilter:"blur(20px)", border:"1.5px solid rgba(255,255,255,0.2)", borderRadius:"1.5rem", padding:"2rem", maxWidth:380 }}>
              <div style={{ color:"#fbbf24", fontSize:18, marginBottom:"1rem" }}>★★★★★</div>
              <p style={{ fontSize:"1.05rem", color:"rgba(255,255,255,0.92)", lineHeight:1.8, fontStyle:"italic", marginBottom:"1.25rem" }}>
                &ldquo;Just had the smoothest move ever from Silverthorne to Buena Vista. Efficient, coordinated, courteous — and a lot of fun despite the crazy amount of heavy lifting. Would highly recommend.&rdquo;
              </p>
              <div style={{ fontWeight:700, color:"#86efac", fontSize:"0.9rem" }}>— Pam E., Silverthorne → Buena Vista</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          6. PHOTO GALLERY — Colorado life
          ══════════════════════════════════════ */}
      <section style={{ background:"#fff", padding:"5rem 2rem" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:"3rem" }}>
            <h2 className="serif" style={{ fontSize:"clamp(1.7rem,3vw,2.4rem)", color:"#1a1a2e", marginBottom:"0.75rem" }}>This is the life waiting for you.</h2>
            <p style={{ color:"#6b7280" }}>Colorado&apos;s mountains are calling. Let us handle the move so you can answer.</p>
          </div>
          {/* Masonry-style grid */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gridTemplateRows:"250px 180px", gap:"1rem" }} className="grid4">
            <div className="img-card hover-lift" style={{ gridColumn:"span 2", gridRow:"span 2", boxShadow:"0 6px 24px rgba(0,0,0,0.1)" }}>
              <img src={IMGS.hero} alt="Family joy on Colorado ski slopes"/>
              <div style={{ position:"absolute", bottom:"1.5rem", left:"1.5rem", right:"1.5rem" }}>
                <div style={{ display:"inline-block", background:"rgba(255,255,255,0.95)", borderRadius:"0.75rem", padding:"0.6rem 1rem" }}>
                  <div style={{ fontSize:"0.75rem", fontWeight:700, color:"#6B3FA0" }}>🎿 The &ldquo;after&rdquo; our customers love most</div>
                </div>
              </div>
            </div>
            <div className="img-card hover-lift" style={{ boxShadow:"0 4px 16px rgba(0,0,0,0.08)" }}>
              <img src={IMGS.foliage} alt="Colorado fall mountain colors"/>
            </div>
            <div className="img-card hover-lift" style={{ boxShadow:"0 4px 16px rgba(0,0,0,0.08)" }}>
              <img src={IMGS.skier} alt="Powder skiing in Summit County Colorado"/>
            </div>
            <div className="img-card hover-lift" style={{ boxShadow:"0 4px 16px rgba(0,0,0,0.08)" }}>
              <img src={IMGS.mountain1} alt="Summit County Colorado mountains"/>
            </div>
            <div className="img-card hover-lift" style={{ boxShadow:"0 4px 16px rgba(0,0,0,0.08)" }}>
              <img src={IMGS.colorado1} alt="Beautiful Colorado landscape"/>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          7. REVIEWS
          ══════════════════════════════════════ */}
      <section style={{ background:"#f9f7ff", padding:"6rem 2rem" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:"3.5rem" }}>
            <div style={{ display:"inline-flex", alignItems:"center", gap:"0.5rem", background:"#fffbeb", border:"1px solid #fde68a", borderRadius:9999, padding:"0.5rem 1.25rem", marginBottom:"1.25rem" }}>
              <span style={{ color:"#f59e0b" }}>★★★★½</span>
              <span style={{ fontSize:14, fontWeight:600, color:"#374151" }}>4.5/5 from 500+ Google Reviews</span>
            </div>
            <h2 className="serif" style={{ fontSize:"clamp(1.8rem,3.2vw,2.6rem)", color:"#1a1a2e", marginBottom:"0.5rem" }}>
              500 families found their mountain peace.
            </h2>
            <p style={{ color:"#6b7280" }}>Here&apos;s what they said.</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1.25rem" }} className="grid3">
            {reviews.map((r,i)=>(
              <div key={i} className="hover-lift" style={{ background:"#fff", borderRadius:"1.25rem", padding:"1.75rem", border:"1px solid #ede9ff", boxShadow:"0 2px 12px rgba(107,63,160,0.07)" }}>
                <div style={{ color:"#f59e0b", fontSize:16, marginBottom:"1rem", letterSpacing:2 }}>{"★".repeat(r.stars)}</div>
                <p style={{ fontSize:"0.95rem", color:"#374151", lineHeight:1.78, fontStyle:"italic", marginBottom:"1.25rem" }}>&ldquo;{r.text}&rdquo;</p>
                <div style={{ fontWeight:700, fontSize:"0.875rem", color:"#6B3FA0" }}>— {r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          8. SERVICES
          ══════════════════════════════════════ */}
      <section style={{ background:"#0f0a1f", padding:"6rem 2rem" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:"3.5rem" }}>
            <p style={{ color:"#94a3b8", fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:"0.75rem" }}>Everything you need</p>
            <h2 className="serif" style={{ fontSize:"clamp(1.8rem,3.5vw,2.75rem)", color:"#f8fafc" }}>
              Full-service moving &amp; storage
            </h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1.25rem" }} className="grid3">
            {[
              { icon:"🗺️", title:"Interstate Moving", desc:"The only Summit County-based mover licensed to cross state lines. Same crew, same truck, guaranteed date.", href:"/interstate-movers-summit-county", img:IMGS.colorado2 },
              { icon:"🏔️", title:"Local Moving", desc:"We know every HOA, every narrow road, every resort loading dock in Summit County.", href:"/local-movers-summit-county", img:IMGS.mountain1 },
              { icon:"🤍", title:"White Glove Moving", desc:"Premium care for luxury homes, art, pianos, antiques. Vail and Breckenridge specialists.", href:"/white-glove-movers-vail-colorado", img:IMGS.foliage },
              { icon:"🏡", title:"Vacation Home Moving", desc:"Second home specialists. We coordinate remotely while you handle life.", href:"/vacation-home-movers-colorado", img:IMGS.colorado1 },
              { icon:"🚚", title:"Furniture Delivery", desc:"Receive, inspect, deliver, set up. Perfect for designers and mountain homeowners.", href:"/furniture-delivery-vail-breckenridge", img:IMGS.skier },
              { icon:"📦", title:"Packing Services", desc:"We pack it right the first time. Nothing damaged. Nothing missing.", href:"/packing-services", img:IMGS.mountain2 },
            ].map((s,i)=>(
              <Link key={i} href={s.href} className="hover-lift" style={{ background:"#1a1030", borderRadius:"1.25rem", overflow:"hidden", border:"1px solid rgba(255,255,255,0.08)", textDecoration:"none", display:"block", boxShadow:"0 4px 20px rgba(0,0,0,0.3)" }}>
                <div className="img-card" style={{ height:160, borderRadius:0 }}>
                  <img src={s.img} alt={s.title}/>
                  <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(0,0,0,0.5),rgba(0,0,0,0.1))" }}/>
                  <div style={{ position:"absolute", bottom:"1rem", left:"1rem", fontSize:"1.5rem" }}>{s.icon}</div>
                </div>
                <div style={{ padding:"1.5rem" }}>
                  <h3 className="serif" style={{ fontSize:"1.1rem", color:"#f1f5f9", marginBottom:"0.6rem" }}>{s.title}</h3>
                  <p style={{ fontSize:"0.88rem", color:"#94a3b8", lineHeight:1.7, marginBottom:"1rem" }}>{s.desc}</p>
                  <span style={{ fontSize:"0.875rem", fontWeight:600, color:"#a78bfa" }}>Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          9. LOCATIONS
          ══════════════════════════════════════ */}
      <section style={{ background:"#fff", padding:"5rem 2rem" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:"2.5rem" }}>
            <h2 className="serif" style={{ fontSize:"clamp(1.7rem,3vw,2.4rem)", color:"#1a1a2e", marginBottom:"0.5rem" }}>We move the mountains.</h2>
            <p style={{ color:"#6b7280" }}>Summit County · Eagle County · Denver Metro · Statewide · Nationwide</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:"0.75rem" }} className="grid5">
            {[
              ["Breckenridge","/breckenridge-movers"],["Vail","/vail-movers"],
              ["Silverthorne","/silverthorne-movers"],["Frisco","/frisco-movers"],
              ["Keystone","/keystone-movers"],["Dillon","/dillon-movers"],
              ["Copper Mountain","/copper-mountain-movers"],["Aspen","/aspen-movers"],
              ["Denver","/denver-movers"],["Buena Vista","/buena-vista-movers"],
            ].map(([name,href])=>(
              <Link key={href} href={href} className="hover-lift" style={{ textAlign:"center", padding:"1.1rem 0.5rem", borderRadius:"0.875rem", background:"#f9f7ff", border:"1.5px solid #ede9ff", textDecoration:"none", display:"block" }}>
                <div style={{ fontSize:"0.9rem", fontWeight:600, color:"#1a1a2e" }}>{name}</div>
                <div style={{ fontSize:"0.75rem", color:"#9ca3af", marginTop:3 }}>Movers →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          10. FINAL CTA — Full bleed photo
          StoryBrand: Direct call to action
          ══════════════════════════════════════ */}
      <section style={{ position:"relative", overflow:"hidden" }}>
        <img src={IMGS.hero} alt="Colorado mountain family life after a stress-free move"
          style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", objectPosition:"center 20%" }}/>
        <div style={{ position:"absolute", inset:0, background:"rgba(5,5,20,0.82)" }}/>
        <div style={{ position:"relative", maxWidth:700, margin:"0 auto", padding:"8rem 2rem", textAlign:"center" }}>
          <p style={{ color:"#86efac", fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:"1.25rem" }}>You&apos;ve found your guide</p>
          <h2 className="serif" style={{ fontSize:"clamp(2rem,4.5vw,3.25rem)", color:"#fff", lineHeight:1.2, marginBottom:"1.5rem" }}>
            Stop stressing.<br/>Start your mountain life.
          </h2>
          <p style={{ fontSize:"1.1rem", color:"rgba(255,255,255,0.78)", marginBottom:"2.75rem", lineHeight:1.8 }}>
            Get a free, transparent quote in minutes. No commitment — just a clear plan from Colorado&apos;s most trusted mountain movers.
          </p>
          <div style={{ display:"flex", gap:"1rem", justifyContent:"center", flexWrap:"wrap", marginBottom:"1.5rem" }}>
            <Link href="/moving-quote" style={{ display:"inline-block", background:"linear-gradient(135deg,#16a34a,#15803d)", color:"#fff", fontWeight:700, fontSize:"1.1rem", padding:"1.1rem 2.75rem", borderRadius:9999, textDecoration:"none", boxShadow:"0 6px 30px rgba(22,163,74,0.55)" }}>
              Get My Free Quote →
            </Link>
            <a href="tel:9704688815" style={{ display:"inline-block", background:"rgba(255,255,255,0.1)", backdropFilter:"blur(8px)", color:"#fff", fontWeight:600, fontSize:"1.1rem", padding:"1.1rem 2.25rem", borderRadius:9999, textDecoration:"none", border:"1.5px solid rgba(255,255,255,0.3)" }}>
              📞 970-468-8815
            </a>
          </div>
          <p style={{ color:"rgba(255,255,255,0.35)", fontSize:"0.8rem" }}>Licensed · Insured · CO HHG #00502 · Summit County&apos;s Only Licensed Interstate Mover · Since 1994</p>
        </div>
      </section>

    </div>
  );
}
