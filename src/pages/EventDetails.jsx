import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/events/${id}`)
      .then((res) => res.json())
      .then((data) => setEvent(data));
  }, [id]);

  if (!event)
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-800 text-white">
        <p>Loading...</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-blue-800 py-12 text-gray-100">
      <div className="max-w-4xl mx-auto bg-blue-700 p-8 rounded-lg shadow-lg">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <h1 className="text-3xl font-bold mb-2 text-green-300">{event.title}</h1>
        <p className="text-gray-200">{event.date} | {event.location}</p>
        <p className="text-gray-100 mt-4">{event.description}</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-6 inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Back to Events
        </button>
      </div>
    </div>
  );
}
