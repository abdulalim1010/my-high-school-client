import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react"; // optional icon

const TeacherDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/teachers/${id}`)
      .then((res) => res.json())
      .then((data) => setTeacher(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!teacher) return <p className="text-center mt-8">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* 🔙 Back Button */}
      <div className="mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition"
        >
          <ArrowLeft size={20} /> Back to Teachers
        </button>
      </div>

      {/* 🧑‍🏫 Page Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-800">Teacher Profile</h1>
        <p className="text-gray-600 text-lg mt-2">A dedicated and passionate educator</p>
      </div>

      {/* 🔲 Grid Layout: Left = Image, Right = Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white rounded-lg shadow-lg p-6">
        {/* Left: Image */}
        <div className="flex justify-center">
          <img
            src={teacher.image}
            alt={teacher.name}
            className="w-full max-w-sm rounded-lg shadow-lg object-cover border-4 border-blue-300"
          />
        </div>

        {/* Right: Info */}
        <div className="space-y-4 text-gray-700">
          <h2 className="text-3xl font-bold text-gray-800">{teacher.name}</h2>
          <p className="text-xl text-blue-600 font-semibold">{teacher.title}</p>
          <p className="text-md text-gray-600 italic">{teacher.degree}</p>

          <div className="mt-4 space-y-2">
            <p><strong>📍 Address:</strong> {teacher.address}</p>
            <p><strong>📞 Phone:</strong> {teacher.phone}</p>
            <p>
              <strong>📧 Email:</strong>{" "}
              <a href={`mailto:${teacher.gmail}`} className="text-blue-600 underline">
                {teacher.gmail}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDetails;
