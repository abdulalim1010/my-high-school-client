import React from "react";
import { motion } from "framer-motion";
import { RiGraduationCapFill, RiPlantFill } from "react-icons/ri";
import { PiMedalFill, PiBookBookmarkBold } from "react-icons/pi";
import Academic from "../academic/Academic";
import Hero from "./Hero";

const highlights = [
  {
    title: "৫০+ বছরের ঐতিহ্য",
    description: "সমৃদ্ধ ইতিহাস ও মূল্যবোধের ধারক একটি বিশ্বস্ত শিক্ষা প্রতিষ্ঠান।",
    icon: <RiGraduationCapFill size={34} />,
  },
  {
    title: "২১শ শতাব্দীর শিক্ষণপদ্ধতি",
    description: "ডিজিটাল ক্লাসরুম, স্মার্ট ল্যাব ও গবেষণাভিত্তিক পাঠদান।",
    icon: <PiBookBookmarkBold size={34} />,
  },
  {
    title: "সহশিক্ষা কার্যক্রম",
    description: "বিতর্ক, ক্রীড়া, সংগীত ও নেতৃত্ব বিকাশে নিয়মিত আয়োজন।",
    icon: <PiMedalFill size={34} />,
  },
  {
    title: "সবুজ ক্যাম্পাস",
    description: "প্রকৃতি-ঘেরা ক্যাম্পাস শিক্ষার্থীদের দেয় প্রশান্ত অভিজ্ঞতা।",
    icon: <RiPlantFill size={34} />,
  },
];

const stories = [
  {
    year: "2024",
    title: "জাতীয় ক্রীড়া চ্যাম্পিয়ন",
    description: "আমাদের ক্রীড়া দল জাতীয় পর্যায়ে ফুটসলে চ্যাম্পিয়ন হয়েছে।",
  },
  {
    year: "2023",
    title: "ডিজিটাল লার্নিং হাব",
    description: "প্রত্যেক শ্রেণিতে স্থাপন করা হয়েছে স্মার্ট বোর্ড ও ইন্টারেক্টিভ ল্যাব।",
  },
  {
    year: "2022",
    title: "STEM অলিম্পিয়াড স্বর্ণ",
    description: "জাতীয় STEM অলিম্পিয়াডে আমাদের শিক্ষার্থীরা স্বর্ণপদক অর্জন করেছে।",
  },
];

const Home = () => {
  return (
    <div className="space-y-16">
      <Hero />

      <section className="glass-panel p-6 sm:p-10">
        <div className="text-center space-y-3 mb-10">
          <p className="uppercase text-xs tracking-[0.6em] text-slate-300">
            Excellence & Values
          </p>
          <h2 className="section-title">কেন আমরাই সেরা</h2>
          <p className="section-subtitle">
            ঐতিহ্য, আধুনিকতা ও মানবিকতার সমন্বয়ে তৈরি হয়েছে আমাদের শিক্ষাব্যবস্থা।
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors flex gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500/60 to-fuchsia-500/70 flex items-center justify-center text-white text-2xl">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-200 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden glass-panel p-6 sm:p-10">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-sky-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-52 h-52 bg-fuchsia-500/10 blur-[110px]" />
        <div className="relative">
          <div className="text-center space-y-3 mb-8">
            <p className="uppercase text-xs tracking-[0.55em] text-slate-300">Our Story</p>
            <h2 className="section-title">সাফল্যের মাইলফলক</h2>
            <p className="section-subtitle">
              প্রতিটি শিক্ষাবর্ষে আমরা শিক্ষার্থীদের জন্য গর্ব করার মতো কিছু অর্জন করি।
            </p>
          </div>
          <div className="space-y-6">
            {stories.map((story, index) => (
              <motion.div
                key={story.year}
                className="flex flex-col md:flex-row gap-4 md:items-center bg-white/5 border border-white/10 rounded-2xl p-5"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/30 to-emerald-400/30 border border-white/10 text-2xl font-extrabold text-white">
                  {story.year}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">{story.title}</h3>
                  <p className="text-slate-300 text-base mt-1">{story.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Academic />
    </div>
  );
};

export default Home;