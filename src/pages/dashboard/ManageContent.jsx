import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const ManageContent = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:3000/submissions");
      setSubmissions(res.data);
    } catch (error) {
      Swal.fire("Error", "Failed to fetch submissions", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const handleApprove = async (id) => {
    try {
      await axios.patch(`http://localhost:3000/submissions/approve/${id}`);
      Swal.fire("Approved", "Submission approved and added to gallery.", "success");
      fetchSubmissions();
    } catch (error) {
      Swal.fire("Error", "Failed to approve submission", "error");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/submissions/${id}`);
      Swal.fire("Deleted", "Submission deleted successfully.", "success");
      fetchSubmissions();
    } catch (error) {
      Swal.fire("Error", "Failed to delete submission", "error");
    }
  };

  if (loading) return <p>Loading submissions...</p>;

  return (
    <div className="p-6 bg-white rounded shadow max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Manage Submitted Gallery Content</h2>

      {submissions.length === 0 && <p>No pending submissions.</p>}

      <ul className="space-y-4">
        {submissions.map((item) => (
          <li key={item._id} className="border rounded p-4 flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src={item.imageUrl} alt={item.title} className="w-24 h-24 object-cover rounded" />
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">Submitted by: {item.userName} ({item.userEmail})</p>
                <p className="text-xs text-gray-400">{new Date(item.submittedAt).toLocaleString()}</p>
              </div>
            </div>
            <div className="space-x-2 mt-4 sm:mt-0">
              <button
                onClick={() => handleApprove(item._id)}
                className="btn btn-success px-4 py-2 rounded"
              >
                Approve
              </button>
              <button
                onClick={() => handleDelete(item._id)}
                className="btn btn-error px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageContent;
