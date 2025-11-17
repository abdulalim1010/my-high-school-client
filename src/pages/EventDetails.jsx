
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/events/${id}`)
      .then((res) => res.json())
      .then((data) => setEvent(data));
  }, [id]);

  if (!event) return <p className="text-center text-white">ইভেন্ট লোড হচ্ছে...</p>;

  return (
    <section className="space-y-6">
      <button onClick={() => navigate(-1)} className="text-sky-300 hover:text-white text-sm">
        ← ইভেন্ট তালিকায় ফিরে যান
      </button>
      <div className="glass-panel overflow-hidden">
        <div className="h-72">
          <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
        </div>
        <div className="p-6 space-y-3">
          <p className="text-xs uppercase tracking-[0.5em] text-slate-400">
            {event.date} • {event.location}
          </p>
          <h1 className="text-3xl font-bold text-white">{event.title}</h1>
          <p className="text-slate-200 leading-relaxed">{event.description}</p>
        </div>
      </div>
    </section>
  );
}

