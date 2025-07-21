import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // ✅ Correct import

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/teachers")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setTeachers(data);
        } else {
          setError("ডেটা আনতে সমস্যা হয়েছে।");
        }
      })
      .catch(() => setError("শিক্ষকদের তথ্য লোড করা যায়নি।"));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-8">
        আমাদের সম্মানিত শিক্ষকবৃন্দ
      </h1>

      {error && <p className="text-red-600 text-center mb-4">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teachers.map((teacher) => (
          <div
            key={teacher._id}
            className="border p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-105 bg-white"
          >
            <img
              src={teacher.image}
              alt={teacher.name}
              className="w-32 h-32 rounded-full mx-auto object-cover mb-4 border-4 border-blue-500"
            />
            <h2 className="text-xl font-semibold text-center text-gray-800">{teacher.name}</h2>
            <p className="text-center text-gray-600">{teacher.title}</p>
            <p className="text-center text-gray-500">{teacher.degree}</p>

            {teacher.subject && (
              <p className="text-center mt-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                  বিষয়: {teacher.subject}
                </span>
              </p>
            )}

            <div className="text-center mt-4">
              <Link
                to={`/teachers/${teacher._id}`}
                className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                বিস্তারিত দেখুন
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teachers;
