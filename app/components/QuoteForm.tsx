"use client";
import { useState } from "react";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name:"", phone:"", email:"", from:"", to:"", date:"", notes:"" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) return (
    <div className="text-center py-12">
      <div className="text-5xl mb-4">✅</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{fontFamily:"'Playfair Display',serif"}}>We'll be in touch shortly!</h3>
      <p className="text-gray-600">Our team typically responds within 1 hour during business hours. For immediate assistance, call <a href="tel:9704688815" className="text-purple-700 font-semibold">970-468-8815</a>.</p>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
          <input required type="text" placeholder="John Smith" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
          <input required type="tel" placeholder="(970) 555-0100" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
        <input required type="email" placeholder="john@email.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Moving From</label>
          <input type="text" placeholder="Breckenridge, CO" value={form.from} onChange={e=>setForm({...form,from:e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Moving To</label>
          <input type="text" placeholder="Vail, CO" value={form.to} onChange={e=>setForm({...form,to:e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Move Date</label>
        <input type="date" value={form.date} onChange={e=>setForm({...form,date:e.target.value})}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
        <textarea rows={3} placeholder="Piano, safe, special items, storage needed..." value={form.notes} onChange={e=>setForm({...form,notes:e.target.value})}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none" />
      </div>
      <button type="submit" className="w-full btn-primary text-base py-4 rounded-xl">Get My Free Quote →</button>
      <p className="text-center text-xs text-gray-400">No commitment required. We respond within 1 hour.</p>
    </form>
  );
}
