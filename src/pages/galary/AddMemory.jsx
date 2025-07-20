import React, { useState } from 'react';
import Swal from 'sweetalert2';
import UseAuth from '../../hooks/UseAuth';

const AddMemory = () => {
  const { user } = UseAuth();
  const [imageURL, setImageURL] = useState('');
  const [remarks, setRemarks] = useState('');
  const [category, setCategory] = useState('present'); // নতুন state যুক্ত করলাম
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      Swal.fire('Please login first!');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:3000/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userEmail: user.email,
          userName: user.displayName || 'Anonymous',
          image: imageURL,
          remarks,
          category,          // এখানে category পাঠাচ্ছি
          status: 'pending',
          createdAt: new Date(),
        }),
      });

      const data = await response.json();
      if (response.ok) {
        Swal.fire('Submitted successfully! Await admin approval.');
        setImageURL('');
        setRemarks('');
        setCategory('present'); // reset to default
      } else {
        Swal.fire('Submission failed: ' + data.message);
      }
    } catch (error) {
      Swal.fire('Error: ' + error.message);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Add Memory / Gallery Image</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border rounded px-3 py-2"
          required
        >
          <option value="present">Present Students</option>
          <option value="ex">Ex Students</option>
          <option value="teachers">Teachers</option>
        </select>

        <input
          type="url"
          placeholder="Image URL"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
          required
          className="w-full border rounded px-3 py-2"
        />
        <textarea
          placeholder="Add your remarks or memory here"
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
          className="w-full border rounded px-3 py-2"
          rows={4}
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default AddMemory;
