import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Navigate } from "react-router";
import { useParams, Link } from "react-router-dom";

export default function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:3000/events/${id}`)
      .then((res) => res.json())
      .then((data) => setEvent(data));
  }, [id]);

  if (!event) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-64 object-cover rounded-md"
        />
        <h1 className="text-3xl font-bold mt-4">{event.title}</h1>
        <p className="text-gray-500">{event.date} | {event.location}</p>
        <p className="text-gray-700 mt-4">{event.description}</p>
        <Link
          onClick={()=>navigate(-1)}
          className="mt-6 inline-block px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
        >
          Back to Events
        </Link>
      </div>
    </div>
  );
}
