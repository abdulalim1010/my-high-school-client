import React, { useEffect, useState } from "react";
import axios from "axios";

const GalleryDisplay = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/gallery")
      .then(res => {
        setGalleryItems(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError("Failed to load gallery");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading gallery...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="gallery-grid" style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "1rem"}}>
      {galleryItems.length === 0 && <p>No gallery items found.</p>}
      {galleryItems.map(item => (
        <div key={item._id} className="gallery-item" style={{border: "1px solid #ccc", padding: "10px", borderRadius: "8px"}}>
          <img src={item.imageUrl || item.image} alt={item.title} style={{width: "100%", height: "auto", borderRadius: "6px"}} />
          <h3>{item.title || item.remarks || "Untitled"}</h3>
          <p>Submitted by: {item.userName}</p>
        </div>
      ))}
    </div>
  );
};

export default GalleryDisplay;
