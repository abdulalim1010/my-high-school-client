import React, { useEffect, useState } from "react";
import GallerySection from "./GallerySection";

const Gallery = () => {
  const [galleryData, setGalleryData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);

useEffect(() => {
  fetch("http://localhost:3000/gallery")
    .then(res => {
      if (!res.ok) throw new Error("Failed to fetch gallery data");
      return res.json();
    })
    .then(data => {
      const filteredData = data.filter(
        item => item.imageUrl && typeof item.imageUrl === "string"
      );

      const grouped = filteredData.reduce((acc, item) => {
        const category = item.category?.toLowerCase().trim() || "uncategorized";
        const image = item.imageUrl;

        if (!acc[category]) acc[category] = [];
        acc[category].push(image);

        return acc;
      }, {});

      setGalleryData(grouped);
      setLoading(false);
    })
    .catch(err => {
      setError(err.message);
      setLoading(false);
    });
}, []);



  if (loading) return <p>Loading gallery...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  // যদি galleryData খালি হয় বা কোন ছবি না থাকে
  if (!galleryData || Object.keys(galleryData).length === 0) {
    return <p>No images found in the gallery.</p>;
  }

  return (
    <div className="bg-blue-50 min-h-screen px-6 py-10">
      <h1 className="text-4xl font-bold text-blue-800 mb-12 text-center">
        আমাদের গ্যালারি
      </h1>

      {Object.entries(galleryData).map(([category, images]) => (
        <GallerySection
          key={category}
          title={getCategoryTitle(category)}
          imgArray={images}
          onImageClick={setSelectedImg}
        />
      ))}

      {/* Modal */}
      {selectedImg && (
        <dialog open className="modal" onClick={() => setSelectedImg(null)}>
          <div className="modal-box max-w-4xl">
            <img
              src={selectedImg}
              className="w-full h-auto rounded"
              alt="Zoomed Preview"
            />
            <div className="modal-action">
              <form method="dialog">
                <button
                  className="btn btn-sm btn-error"
                  onClick={() => setSelectedImg(null)}
                >
                  বন্ধ করুন
                </button>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

const getCategoryTitle = (category) => {
  switch (category) {
    case "present":
      return "🎒 বর্তমান শিক্ষার্থীরা";
    case "ex":
      return "🎓 প্রাক্তন শিক্ষার্থীরা";
    case "festival":
      return "🎉 উৎসব ও অনুষ্ঠান";
    case "garden":
      return "🌿 স্কুলের বাগান";
    case "field":
      return "⚽ খেলার মাঠ";
    case "classroom":
      return "🏫 ক্লাসরুমের দৃশ্য";
    case "teachers":
      return "👩‍🏫 শিক্ষকবৃন্দ";
    default:
      return "অন্যান্য";
  }
};

export default Gallery;
