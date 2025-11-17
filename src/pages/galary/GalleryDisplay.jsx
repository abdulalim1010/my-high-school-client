import React, { useEffect, useState } from "react";
import axios from "axios";

const GalleryDisplay = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/gallery")
      .then((res) => {
        setGalleryItems(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("গ্যালারি লোড করা যায়নি।");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-white">গ্যালারি লোড হচ্ছে...</p>;
  if (error) return <p className="text-center text-red-400">{error}</p>;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {galleryItems.length === 0 && <p className="text-center text-white">কোনো ছবি পাওয়া যায়নি।</p>}
      {galleryItems.map((item) => (
        <div key={item._id} className="glass-panel p-4 space-y-3">
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <img
              src={item.imageUrl || item.image}
              alt={item.title || "Gallery item"}
              className="w-full h-56 object-cover"
            />
          </div>
          <h3 className="text-lg font-semibold text-white">{item.title || item.remarks || "Untitled"}</h3>
          <p className="text-sm text-slate-300">Submitted by: {item.userName}</p>
        </div>
      ))}
    </div>
  );
};

export default GalleryDisplay;

