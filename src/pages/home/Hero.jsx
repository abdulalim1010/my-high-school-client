import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import schoolImg from "../../assets/image.jpg";

const stats = [
  { label: "সফল প্রাক্তন", value: "12k+" },
  { label: "ডিজিটাল ক্লাস", value: "34" },
  { label: "একাডেমিক পুরস্কার", value: "28" },
];

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen rounded-[32px] overflow-hidden">
      <motion.img
        src={schoolImg}
        alt="School Background"
        className="absolute inset-0 w-full h-full object-cover"
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/70 to-slate-900/40" />

      <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-10 md:px-16 py-16 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl text-white space-y-5"
        >
          <p className="text-sm uppercase tracking-[0.7em] text-slate-200">Legacy Since 1966</p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            স্মার্ট শিক্ষা, মানবিক মূল্যবোধ এবং সার্বিক বিকাশ—
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-sky-400 to-fuchsia-400">
              {" "}
              আমানতুল্লাহ হাই স্কুল
            </span>
          </h1>
          <p className="text-lg text-slate-200 leading-relaxed">
            সময়ের সাথে তাল মিলিয়ে আমরা নিয়ে এসেছি আধুনিক শিক্ষা, সহশিক্ষা এবং প্রযুক্তিনির্ভর
            অভিজ্ঞতা, যাতে প্রতিটি শিক্ষার্থী গড়ে তোলে নিজস্ব সম্ভাবনা।
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/register"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 text-slate-900 font-semibold shadow-xl hover:scale-105 transition-transform"
            >
              ভর্তি তথ্য জানুন
            </Link>
            <Link
              to="/galary"
              className="px-6 py-3 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 transition"
            >
              গ্যালারি দেখুন
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="grid sm:grid-cols-3 gap-4 max-w-3xl"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center"
            >
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-sm uppercase tracking-wide text-slate-200 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
