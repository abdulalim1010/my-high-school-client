import React from "react";
import { motion } from "framer-motion";

const GallerySection = ({ title, imgArray, onImageClick }) => (
  <section className="space-y-5">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
      <div className="h-px flex-1 bg-gradient-to-r from-white/40 via-white/10 to-transparent md:block hidden" />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {imgArray.map((src, index) => (
        <motion.button
          key={`${title}-${index}`}
          onClick={() => onImageClick(src)}
          className="relative overflow-hidden rounded-3xl border border-white/10 group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
        >
          <img src={src} alt={`${title} ${index}`} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
          <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/50 transition" />
          <span className="absolute inset-0 flex items-center justify-center text-white/0 group-hover:text-white font-semibold tracking-wide transition">
            আরও কাছ থেকে দেখুন
          </span>
        </motion.button>
      ))}
    </div>
  </section>
);

export default GallerySection;
