import React from "react";
import { motion } from "framer-motion";
import legacyImg from "../../assets/real.jpg";
import headTeacherImg from "../../assets/headsir.jpg";
import campusImg from "../../assets/alimhif.jpeg";

const milestones = [
  {
    year: "1966",
    title: "প্রতিষ্ঠার গল্প",
    description:
      "গ্রামবাংলার আলোকিত কিছু মানুষ একটি বটগাছের নিচে প্রথম ক্লাস চালু করেছিলেন।",
  },
  {
    year: "1995",
    title: "বিজ্ঞান ল্যাব চালু",
    description: "নিজস্ব ল্যাব ও লাইব্রেরির মাধ্যমে প্রযুক্তিনির্ভর পাঠদান শুরু।",
  },
  {
    year: "2022",
    title: "ডিজিটাল স্কুল",
    description: "অনলাইন ফলাফল, স্মার্ট ক্লাসরুম এবং ই-লার্নিং প্ল্যাটফর্ম চালু।",
  },
];

const coreValues = ["সততা", "নেতৃত্ব", "সহানুভূতি", "সম্মান", "পরিশ্রম", "নবপ্রবর্তন"];

const About = () => {
  return (
    <section className="space-y-14">
      <motion.div
        className="glass-panel overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid lg:grid-cols-2 gap-0">
          <div className="p-6 sm:p-10 space-y-4">
            <p className="uppercase text-xs tracking-[0.6em] text-slate-300">Our Story</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              আমাদের শৈশবের গল্প— আমানতুল্লাহ হাই স্কুল
            </h1>
            <p className="text-slate-200">
              শিক্ষা, সংস্কৃতি ও মানবিকতার ঐতিহ্যে আমরা গড়ে তুলছি আগামী দিনের স্বপ্নবাজ প্রজন্ম।
            </p>
          </div>
          <div className="min-h-[260px]">
            <img src={campusImg} alt="Campus" className="w-full h-full object-cover" />
          </div>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <motion.div
          className="space-y-4"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white">প্রতিষ্ঠার পেছনের গল্প</h2>
          <p className="text-slate-200 leading-relaxed">
            ১৯৬৬ সালে গ্রামের শিশুদের জন্য মানসম্মত শিক্ষা নিশ্চিত করতে Sotokaler High School-এর জন্ম।
            একটি বটগাছের তলায় চালু হওয়া সেই যাত্রা আজ হয়েছে প্রযুক্তিনির্ভর পূর্ণাঙ্গ শিক্ষা প্রতিষ্ঠান।
          </p>
        </motion.div>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[24px] overflow-hidden border border-white/10 glass-panel"
        >
          <img src={legacyImg} alt="Legacy" className="w-full h-full object-cover" />
        </motion.div>
      </div>

      <motion.div
        className="glass-panel p-6 sm:p-10 space-y-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-semibold text-white">প্রধান শিক্ষকের বাণী</h3>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={headTeacherImg}
            alt="Head Teacher"
            className="w-28 h-28 rounded-full object-cover border border-white/30"
          />
          <p className="text-slate-200 leading-relaxed">
            “Amanatullah High School শুধু পড়াশোনার স্থান নয়, বরং দায়িত্বশীল ও মানবিক নাগরিক তৈরির
            এক উত্তম ক্ষেত্র। আমরা প্রতিটি শিক্ষার্থীকে স্বপ্ন দেখতে এবং স্বপ্ন পূরণে অনুপ্রাণিত করি।”
          </p>
        </div>
      </motion.div>

      <motion.div
        className="glass-panel p-6 sm:p-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-semibold text-white mb-6">মাইলফলক</h3>
        <div className="space-y-6">
          {milestones.map((item) => (
            <div key={item.year} className="flex flex-col md:flex-row gap-4 md:items-center">
              <div className="w-24 h-24 rounded-3xl bg-white/10 flex items-center justify-center text-2xl font-bold text-white border border-white/10">
                {item.year}
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                <p className="text-slate-200">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="glass-panel p-6 sm:p-10 space-y-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-semibold text-white">আমাদের মূলনীতি</h3>
        <div className="flex flex-wrap gap-3">
          {coreValues.map((value) => (
            <span
              key={value}
              className="px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm font-semibold text-white"
            >
              {value}
            </span>
          ))}
        </div>
        <p className="text-slate-200">
          আমরা চাই আগামী প্রজন্মকে এমনভাবে গড়ে তুলতে যেন তারা বিশ্বব্যাপী চ্যালেঞ্জ মোকাবিলা করতে পারে।
        </p>
      </motion.div>

      <motion.div
        className="glass-panel p-6 sm:p-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-semibold text-white mb-3">ভবিষ্যৎ পরিকল্পনা</h3>
        <p className="text-slate-200 leading-relaxed">
          স্মার্ট লাইব্রেরি, এআই লার্নিং মডিউল ও আন্তর্জাতিক সহযোগিতার মাধ্যমে শিক্ষার্থীদের চতুর্থ
          শিল্পবিপ্লবের উপযোগী করে গড়ে তোলাই আমাদের লক্ষ্য।
        </p>
      </motion.div>
    </section>
  );
};

export default About;
