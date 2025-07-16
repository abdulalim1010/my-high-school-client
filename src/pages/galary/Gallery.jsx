import React, { useState } from "react";
import { motion } from "framer-motion";

// Dummy image URLs – এখানে আপনি আপনার নিজের path/ছবি বসাবেন
const images = {
  present: ["/gallery/present1.jpg", "/gallery/present2.jpg","/gallery/present3.jpg"],
  ex: ["/gallery/ex1.jpg", "/gallery/ex2.jpg"],
  festival: ["/gallery/fest1.jpg", "/gallery/fest2.jpg"],
  garden: ["/gallery/garden1.jpg", "/gallery/garden2.jpg"],
  field: ["/gallery/field1.jpg", "/gallery/field2.jpg"],
  classroom: ["/gallery/class1.jpg", "/gallery/class2.jpg"],
};

const GallerySection = ({ title, imgArray, onImageClick }) => (
  <div className="mb-16">
    <motion.h2
      className="text-2xl font-bold text-blue-700 mb-4"
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {title}
    </motion.h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {(imgArray || []).map((src, index) => (
        <motion.div
          key={index}
          className="rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          onClick={() => onImageClick(src)}
        >
          <img src={src} alt={`${title} ${index}`} className="w-full h-60 object-cover" loading="lazy" />
        </motion.div>
      ))}
    </div>
  </div>
);

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="bg-blue-50 min-h-screen px-6 py-10">
      {/* Page Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-blue-800">আমাদের গ্যালারি</h1>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          স্কুল জীবনের প্রতিটি মুহূর্ত, হাসি, উৎসব, ক্লাসরুমের স্মৃতি — সব এখানে ধরে রাখি।
        </p>
      </motion.div>

      {/* Sections */}
      <GallerySection title="🎒 বর্তমান শিক্ষার্থীরা" imgArray={images.present} onImageClick={setSelectedImg} />
      <GallerySection title="🎓 প্রাক্তন শিক্ষার্থীরা" imgArray={images.ex} onImageClick={setSelectedImg} />
      <GallerySection title="🎉 উৎসব ও অনুষ্ঠান" imgArray={images.festival} onImageClick={setSelectedImg} />
      <GallerySection title="🌿 স্কুলের বাগান" imgArray={images.garden} onImageClick={setSelectedImg} />
      <GallerySection title="⚽ খেলার মাঠ" imgArray={images.field} onImageClick={setSelectedImg} />
      <GallerySection title="🏫 ক্লাসরুমের দৃশ্য" imgArray={images.classroom} onImageClick={setSelectedImg} />

      {/* Modal Preview */}
      {selectedImg && (
        <dialog open className="modal" onClick={() => setSelectedImg(null)}>
          <div className="modal-box max-w-4xl">
            <img src={selectedImg} className="w-full h-auto rounded" alt="Zoomed Preview" />
            <div className="modal-action">
              <form method="dialog">
                <button className="btn btn-sm btn-error" onClick={() => setSelectedImg(null)}>বন্ধ করুন</button>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Gallery;
