import React, { useState } from "react";

const AddTeacherForm = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");
  const [degree, setDegree] = useState("");
  const [phone, setPhone] = useState("");
  const [gmail, setGmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTeacher = {
      name,
      title,
      image,
      address,
      degree,
      phone,
      gmail,
    };

    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/teachers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTeacher),
      });

      if (!res.ok) {
        throw new Error("Failed to add teacher");
      }

      alert("Teacher added successfully!");
      // Clear form after successful add
      setName("");
      setTitle("");
      setImage("");
      setAddress("");
      setDegree("");
      setPhone("");
      setGmail("");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Teacher Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full border px-3 py-2 rounded"
      />
      <input
        type="text"
        placeholder="Title (e.g. Assistant Teacher)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="w-full border px-3 py-2 rounded"
      />
      <input
        type="url"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="w-full border px-3 py-2 rounded"
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="w-full border px-3 py-2 rounded"
      />
      <input
        type="text"
        placeholder="Degree"
        value={degree}
        onChange={(e) => setDegree(e.target.value)}
        className="w-full border px-3 py-2 rounded"
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full border px-3 py-2 rounded"
      />
      <input
        type="email"
        placeholder="Gmail"
        value={gmail}
        onChange={(e) => setGmail(e.target.value)}
        required
        className="w-full border px-3 py-2 rounded"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded"
      >
        {loading ? "Adding..." : "Add Teacher"}
      </button>
    </form>
  );
};

export default AddTeacherForm;
