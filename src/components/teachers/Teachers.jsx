import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [error, setError] = useState(null);

  // Fetch teachers
  useEffect(() => {
    fetch("http://localhost:3000/teachers")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setTeachers(data);
        } else {
          setError("Unexpected response format");
        }
      })
      .catch(() => setError("Failed to fetch teachers"));
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Our Teachers</h1>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {teachers.map((teacher) => (
          <div
            key={teacher._id}
            className="border p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={teacher.image}
              alt={teacher.name}
              className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
            />
            <h2 className="text-xl font-semibold text-center">{teacher.name}</h2>
            <p className="text-center text-gray-600">{teacher.title}</p>
            <p className="text-center text-gray-500">{teacher.degree}</p>

            {/* Details Button */}
            <div className="text-center mt-4">
              <Link
                to={`/teachers/${teacher._id}`}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teachers;
