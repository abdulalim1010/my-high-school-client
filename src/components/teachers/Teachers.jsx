import React, { useEffect, useState } from "react";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    image: "",
    address: "",
    degree: "",
    phone: "",
    gmail: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch teachers from backend
  useEffect(() => {
    fetch("http://localhost:3000/teachers")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setTeachers(data);
        } else {
          console.error("API did not return an array:", data);
          setTeachers([]);
          setError("Unexpected data format from server");
        }
      })
      .catch((err) => setError("Failed to fetch teachers"));
  }, []);

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit to add new teacher
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    fetch("http://localhost:3000/teachers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to add teacher");
        return res.json();
      })
      .then((data) => {
        alert("Teacher added successfully!");
        setTeachers((prev) => [...prev, formData]); // UI update instantly
        setFormData({
          name: "",
          title: "",
          image: "",
          address: "",
          degree: "",
          phone: "",
          gmail: "",
        });
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Teachers List</h1>

      {error && (
        <p className="text-red-500 mb-4 text-center font-semibold">{error}</p>
      )}

      {/* Teachers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {teachers.length > 0 ? (
          teachers.map((teacher, idx) => (
            <div
              key={teacher._id || idx}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
              />
              <h2 className="text-xl font-semibold text-center">{teacher.name}</h2>
              <p className="text-center text-gray-700">{teacher.title}</p>
              <p className="text-center text-gray-600">{teacher.degree}</p>
              <p className="text-center text-gray-600">{teacher.address}</p>
              <p className="text-center text-gray-600">{teacher.phone}</p>
              <p className="text-center text-blue-600 underline">{teacher.gmail}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No teachers found.</p>
        )}
      </div>

      {/* Add Teacher Form */}
      <h2 className="text-2xl font-bold mb-4">Add New Teacher</h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto"
      >
        {[
          { label: "Name", name: "name", type: "text" },
          { label: "Title", name: "title", type: "text" },
          { label: "Image URL", name: "image", type: "text" },
          { label: "Address", name: "address", type: "text" },
          { label: "Degree", name: "degree", type: "text" },
          { label: "Phone", name: "phone", type: "text" },
          { label: "Gmail", name: "gmail", type: "email" },
        ].map(({ label, name, type }) => (
          <div key={name} className="flex flex-col">
            <label htmlFor={name} className="mb-1 font-semibold">
              {label}
            </label>
            <input
              id={name}
              name={name}
              type={type}
              value={formData[name]}
              onChange={handleChange}
              required
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        ))}

        <div className="md:col-span-2 text-center">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Adding..." : "Add Teacher"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Teachers;
