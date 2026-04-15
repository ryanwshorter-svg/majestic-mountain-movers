const badges = [
  { icon: "🏆", label: "30+ Years Experience" },
  { icon: "⭐", label: "500+ Five-Star Reviews" },
  { icon: "📋", label: "Licensed & Insured" },
  { icon: "🏔️", label: "Only Licensed Interstate Mover in Summit County" },
  { icon: "🚛", label: "Air-Ride Suspension Trucks" },
  { icon: "📞", label: "24/7 Customer Support" },
];

export default function TrustBar() {
  return (
    <div className="bg-purple-700 text-white py-4 overflow-hidden">
      <div className="flex gap-10 animate-[scroll_30s_linear_infinite] whitespace-nowrap" style={{width:"max-content"}}>
        {[...badges, ...badges].map((b, i) => (
          <div key={i} className="flex items-center gap-2 text-sm font-medium flex-shrink-0">
            <span>{b.icon}</span>
            <span>{b.label}</span>
            <span className="text-purple-300 ml-6">•</span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
