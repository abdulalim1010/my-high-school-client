import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GallerySection from "./GallerySection";

const Gallery = () => {
  const [galleryData, setGalleryData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/gallery")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch gallery data");
        return res.json();
      })
      .then((data) => {
        const filteredData = data.filter((item) => item.imageUrl && typeof item.imageUrl === "string");

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
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-white">গ্যালারি লোড হচ্ছে...</p>;
  if (error) return <p className="text-red-400 text-center">ত্রুটি: {error}</p>;

  if (!galleryData || Object.keys(galleryData).length === 0) {
    return <p className="text-center text-white">গ্যালারিতে কোন ছবি পাওয়া যায়নি।</p>;
  }

  return (
    <section className="space-y-10">
      <motion.div
        className="glass-panel p-6 sm:p-12 text-center space-y-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="uppercase text-xs tracking-[0.6em] text-slate-300">Captured Memories</p>
        <h1 className="section-title">আমাদের গ্যালারি</h1>
        <p className="section-subtitle">
          প্রতিটি ছবি স্মৃতির গল্প বলে— বর্তমান ও প্রাক্তন শিক্ষার্থীদের দুর্দান্ত মুহূর্ত, উৎসব আর
          সৃজনশীলতার রঙে ভরা ক্যাম্পাস।
        </p>
      </motion.div>

      <div className="space-y-14">
        {Object.entries(galleryData).map(([category, images], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <GallerySection title={getCategoryTitle(category)} imgArray={images} onImageClick={setSelectedImg} />
          </motion.div>
        ))}
      </div>

      {selectedImg && (
        <dialog open className="modal" onClick={() => setSelectedImg(null)}>
          <div className="modal-box max-w-4xl bg-slate-900">
            <img src={selectedImg} className="w-full h-auto rounded-lg" alt="Zoomed Preview" />
            <div className="modal-action">
              <form method="dialog">
                <button className="btn btn-sm bg-red-500 text-white" onClick={() => setSelectedImg(null)}>
                  বন্ধ করুন
                </button>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </section>
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
