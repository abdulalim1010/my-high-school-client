import React from "react";

const GallerySection = ({ title, imgArray, onImageClick }) => (
  <section className="mb-16">
    <h2 className="text-2xl font-bold text-blue-700 mb-4">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {imgArray.map((src, i) => (
        <div
          key={i}
          className="rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl"
          onClick={() => onImageClick(src)}
        >
          <img
            src={src}
            alt={`${title} ${i}`}
            className="w-full h-60 object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  </section>
);

export default GallerySection;
