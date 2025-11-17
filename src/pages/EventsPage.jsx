
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function EventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <section className="space-y-10">
      <div className="text-center space-y-3">
        <p className="uppercase text-xs tracking-[0.6em] text-slate-300">Campus Life</p>
        <h1 className="section-title">স্কুলের অনুষ্ঠান</h1>
        <p className="section-subtitle">প্রতিটি ইভেন্টে থাকে আনন্দ, শেখার সুযোগ ও নতুন অভিজ্ঞতা।</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {events.map((event) => (
          <div key={event.id} className="glass-panel overflow-hidden flex flex-col">
            <div className="h-48 overflow-hidden">
              <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 space-y-3 flex-1">
              <div className="flex items-center justify-between text-xs uppercase tracking-widest text-slate-300">
                <span>{event.date}</span>
                <span>{event.location}</span>
              </div>
              <h3 className="text-xl font-semibold text-white">{event.title}</h3>
              <p className="text-slate-300 text-sm">{event.description}</p>
            </div>
            <div className="p-6 pt-0">
              <Link
                to={`/event/${event.id}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-sky-300 hover:text-white transition"
              >
                বিস্তারিত জানুন →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

