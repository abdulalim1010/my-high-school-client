import React, { useState } from 'react';
import { motion } from 'framer-motion';

const GallerySection = ({ title, imgArray }) => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="mb-16">
      {/* Section Title */}
      <motion.h2
        className="text-2xl font-bold text-blue-700 mb-4"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {title}
      </motion.h2>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {imgArray.map((src, index) => (
          <motion.div
            key={index}
            className="rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImg(src)}
          >
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-60 object-cover"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      {/* Modal Preview */}
      {selectedImg && (
        <dialog open className="modal" onClick={() => setSelectedImg(null)}>
          <div className="modal-box max-w-4xl p-4">
            <img
              src={selectedImg}
              alt="Zoomed preview"
              className="w-full h-auto rounded-lg"
            />
            <div className="modal-action">
              <form method="dialog">
                <button className="btn btn-sm btn-error" onClick={() => setSelectedImg(null)}>
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

export default GallerySection;
