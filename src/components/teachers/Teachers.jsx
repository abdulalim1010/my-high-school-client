
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/teachers")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setTeachers(data);
        } else {
          setError("ডেটা আনতে সমস্যা হয়েছে।");
        }
      })
      .catch(() => setError("শিক্ষকদের তথ্য লোড করা যায়নি।"));
  }, []);

  return (
    <section className="space-y-10">
      <div className="text-center space-y-3">
        <p className="uppercase text-xs tracking-[0.6em] text-slate-300">Our Mentors</p>
        <h1 className="section-title">সম্মানিত শিক্ষকবৃন্দ</h1>
        <p className="section-subtitle">
          জ্ঞানের আলো ছড়িয়ে দেওয়ার পিছনে আছেন আমাদের নিবেদিত শিক্ষকদের একটি শক্তিশালী দল।
        </p>
      </div>

      {error && <p className="text-center text-red-400">{error}</p>}

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {teachers.map((teacher, index) => (
          <motion.div
            key={teacher._id}
            className="glass-panel p-6 space-y-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-32 h-32 rounded-3xl overflow-hidden border border-white/10 shadow-xl shadow-sky-600/20">
                <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">{teacher.name}</h2>
                <p className="text-slate-300">{teacher.title}</p>
                <p className="text-sm text-slate-400">{teacher.degree}</p>
              </div>
            </div>

            {teacher.subject && (
              <p className="text-center text-sm text-slate-200">
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15">
                  বিষয়: {teacher.subject}
                </span>
              </p>
            )}

            <div className="flex justify-center">
              <Link
                to={`/teachers/${teacher._id}`}
                className="px-5 py-2 rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-500 text-sm font-semibold text-white shadow-lg hover:opacity-90 transition"
              >
                বিস্তারিত দেখুন
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Teachers;

