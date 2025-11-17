import React from "react";
import { motion } from "framer-motion";
import scienceImage from "../../assets/science.avif";
import humanImage from "../../assets/science.jpg";
import commerceImage from "../../assets/comarce.jpg";
import calendar from "../../assets/calender.avif";

const Academic = () => {
  return (
    <section className="space-y-10">
      <motion.div
        className="text-center space-y-4"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="uppercase text-xs tracking-[0.65em] text-slate-300">Academic Excellence</p>
        <h2 className="section-title">একাডেমিক তথ্য</h2>
        <p className="section-subtitle">
          আমানতুল্লাহ হাই স্কুলে আমরা শ্রেণিকক্ষের বাইরে গিয়ে বাস্তবভিত্তিক শেখার উপর জোর দেই।
        </p>
      </motion.div>

      <motion.div
        className="glass-panel p-6 sm:p-10 space-y-6"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-semibold text-white">শ্রেণি কাঠামো</h3>
        <div className="grid md:grid-cols-3 gap-4 text-slate-200 text-sm">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-4xl font-black text-white">১-১০</p>
            <p>প্রথম থেকে দশম শ্রেণি পর্যন্ত সমন্বিত কারিকুলাম</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-4xl font-black text-white">২</p>
            <p>প্রতি শ্রেণিতে দুইটি সেকশন (A ও B) - ছোট ব্যাচে নিবিড় যত্ন</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-4xl font-black text-white">৩৫</p>
            <p>গড় শিক্ষার্থী সংখ্যা যাতে সহজেই ব্যক্তিগত মনোযোগ দেওয়া যায়</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid gap-6 md:grid-cols-3"
      >
        {[
          {
            title: "বিজ্ঞান বিভাগ",
            img: scienceImage,
            accent: "from-emerald-400/40 to-blue-500/40",
            desc: "পদার্থ, রসায়ন, জীববিজ্ঞান, গণিত ও আইসিটিতে বিশেষায়িত ল্যাবসহ শিক্ষা।",
          },
          {
            title: "মানবিক বিভাগ",
            img: humanImage,
            accent: "from-fuchsia-400/30 to-blue-400/30",
            desc: "সাহিত্য, ইতিহাস, সমাজবিজ্ঞান ও বিশ্বসংস্কৃতি সম্পর্কে গভীর অনুশীলন।",
          },
          {
            title: "বাণিজ্য বিভাগ",
            img: commerceImage,
            accent: "from-amber-400/30 to-rose-400/30",
            desc: "হিসাববিজ্ঞান, অর্থনীতি, ব্যবসা সংগঠন ও উদ্যোক্তা প্রকল্পে ফোকাস।",
          },
        ].map((dept, index) => (
          <motion.div
            key={dept.title}
            className="overflow-hidden rounded-3xl glass-panel p-4"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={`h-48 rounded-2xl overflow-hidden relative bg-gradient-to-br ${dept.accent}`}>
              <img src={dept.img} alt={dept.title} className="w-full h-full object-cover mix-blend-overlay" />
            </div>
            <div className="mt-4 space-y-2">
              <h3 className="text-xl font-bold">{dept.title}</h3>
              <p className="text-slate-200 text-sm leading-relaxed">{dept.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="glass-panel p-6 sm:p-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl font-semibold text-white">ক্লাস রুটিন</h3>
            <ul className="space-y-3 text-slate-200">
              <li>📚 রবিবার - বৃহস্পতিবার | সকাল ৮:০০ - দুপুর ১:৩০</li>
              <li>☕ টিফিন ব্রেক | সকাল ১০:৪৫ - ১১:১৫</li>
              <li>🧪 ল্যাব ও ক্লাব কার্যক্রম | দুপুর ১:৩০ - ৩:৩০</li>
            </ul>
          </div>
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/40 to-purple-500/30 blur-3xl" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10">
              <img src={calendar} alt="Routine calendar" className="w-full object-cover" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Academic;
