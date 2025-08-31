import React from 'react';
import { motion } from 'framer-motion';
import sceicnimage from '../../assets/science.avif';
import humanimage from '../../assets/science.jpg';
import commarceimage from '../../assets/comarce.jpg';
import calendeer from '../../assets/calender.avif';

const Academic = () => {
  return (
    <div className="min-h-screen px-6 py-10 space-y-16 bg-blue-800 text-white">
      {/* Page Title */}
      <motion.div
        className="text-center"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold mb-2">একাডেমিক তথ্য</h1>
        <p className="max-w-2xl mx-auto">
          Sotokaler High School - যেখানে জ্ঞানের সাথে নৈতিকতা ও সংস্কৃতির সমন্বয় ঘটে।
        </p>
      </motion.div>

      {/* Section: শ্রেণি কাঠামো */}
      <motion.section
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-semibold mb-3">শ্রেণি কাঠামো</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>প্রথম শ্রেণি থেকে দশম শ্রেণি পর্যন্ত পাঠদান</li>
          <li>প্রতি শ্রেণিতে দুটি সেকশন (A ও B)</li>
          <li>একটি শ্রেণিতে গড়ে ৩০-৪০ জন শিক্ষার্থী</li>
        </ul>
      </motion.section>

      {/* Section: বিষয় বিভাগ */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl text-center font-semibold mb-3">বিষয়ভিত্তিক বিভাগ</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            className="shadow-md p-4 rounded-lg bg-blue-700"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src={sceicnimage} className="h-60 mb-2 mx-auto rounded" alt="Science" />
            <h3 className="font-bold text-lg mb-2 text-green-300 text-center">বিজ্ঞান বিভাগ</h3>
            <p className="text-sm text-center">পদার্থ, রসায়ন, জীববিজ্ঞান ও গণিতের পাঠদান।</p>
          </motion.div>

          <motion.div
            className="shadow-md p-4 rounded-lg bg-blue-700"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={humanimage} className="h-60 mb-2 mx-auto rounded" alt="Humanities" />
            <h3 className="font-bold text-lg mb-2 text-purple-300 text-center">মানবিক বিভাগ</h3>
            <p className="text-sm text-center">ইতিহাস, ভূগোল, বাংলা ও সামাজিক বিজ্ঞানের গুরুত্ব।</p>
          </motion.div>

          <motion.div
            className="shadow-md p-4 rounded-lg bg-blue-700"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img src={commarceimage} className="h-60 mb-2 mx-auto rounded" alt="Commerce" />
            <h3 className="font-bold text-lg mb-2 text-orange-300 text-center">বাণিজ্য বিভাগ</h3>
            <p className="text-sm text-center">হিসাববিজ্ঞান, অর্থনীতি ও ব্যবস্থাপনা বিষয় অন্তর্ভুক্ত।</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Section: ক্লাস রুটিন */}
      <motion.section
        className="shadow-sm p-6 rounded-lg bg-blue-700"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl text-center font-semibold mb-3">ক্লাস রুটিন</h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1 space-y-2">
            <ul className="list-disc pl-5 space-y-1">
              <li>শিক্ষা সপ্তাহ: রবিবার - বৃহস্পতিবার</li>
              <li>প্রতিদিন: সকাল ৮:০০ - দুপুর ১:৩০</li>
              <li>টিফিন বিরতি: সকাল ১০:৪৫ - ১১:১৫</li>
            </ul>
          </div>
          <img
            src={calendeer}
            className="w-64 rounded-lg border border-blue-300 shadow"
            alt="Routine Calendar"
          />
        </div>
      </motion.section>
    </div>
  );
};

export default Academic;
