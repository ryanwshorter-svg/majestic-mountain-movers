const reviews = [
  { name: "Wayne Varnadore", date: "Jul 2025", text: "Josh had a crew scrambled in 20 minutes when my U-Haul died. They transferred the full load and drove it to Castle Rock. So far above and beyond. A killer team.", stars: 5 },
  { name: "Jay Homola", date: "Aug 2025", text: "After 30+ moves in my life (10 internationally) you get to recognize a great crew. Derrick and his team worked so carefully and systematically they made the crew I scheduled for the next day unnecessary.", stars: 5 },
  { name: "Gin Dudley", date: "Jan 2026", text: "They were so polite and did a great job! We had a really difficult move — lots of stuff in 2 houses. These guys were great! We have moved A LOT and these were the best movers we've ever had.", stars: 5 },
  { name: "KIM MEYER", date: "Jun 2025", text: "I'm a 74-year-old woman who needed to move a 90-inch couch from a 4th floor condo. They wrapped everything perfectly in tight spaces. These guys are very well-trained, positive, kind. I was amazed.", stars: 5 },
  { name: "Dan O'Connell", date: "Dec 2025", text: "Easy to schedule, good communication, came right on time and made sure to get the job done right and as fast as possible while keeping our stuff safe.", stars: 5 },
  { name: "Ross L.", date: "Aug 2025", text: "Derek, Dom, and Tony were an absolute pleasure. They moved our baby grand piano and gave me such peace of mind. Very strong, capable, and good guys.", stars: 5 },
];

export default function ReviewsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-full px-4 py-2 mb-4">
            <span className="text-yellow-500 text-lg">★★★★½</span>
            <span className="text-sm font-semibold text-gray-700">4.5/5 · 500+ Google Reviews</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3" style={{fontFamily:"'Playfair Display',serif"}}>
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-lg">Real reviews from real Summit County moves</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(r.stars)].map((_, j) => <span key={j} className="text-yellow-400 text-sm">★</span>)}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">"{r.text}"</p>
              <div className="flex items-center justify-between">
                <div className="font-semibold text-sm text-gray-900">{r.name}</div>
                <div className="text-xs text-gray-400">{r.date}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="https://www.google.com/maps/search/Majestic+Mountain+Movers" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-purple-700 hover:text-purple-900 transition-colors">
            View all 500+ reviews on Google
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
