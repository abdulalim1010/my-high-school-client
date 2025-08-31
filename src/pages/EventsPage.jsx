import React, { useEffect, useState } from "react";
import { Link } from "react-router";

export default function EventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          স্কুলের অনুষ্ঠান
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800">
                  {event.title}
                </h2>
                <p className="text-sm text-gray-500 mt-1">{event.date}</p>
                <p className="text-sm text-gray-500">{event.location}</p>
                <p className="text-gray-600 mt-3">{event.description}</p>
                
<Link
  to={`/event/${event.id}`}
  className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
>
  বিস্তারিত জানুন
</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
