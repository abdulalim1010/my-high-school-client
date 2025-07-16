import React from 'react';
import { motion } from 'framer-motion';
import sceicnimage from '../../assets/science.avif'
import humanimage from '../../assets/hu,an1).jfif'
import commarceimage from '../../assets/comarce.jpg'
import calendeer  from '../../assets/calender.avif'

const Academic = () => {
  return (
    <div className="bg-blue-50 min-h-screen px-6 py-10 space-y-16">
      {/* Page Title */}
      <motion.div
        className="text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-blue-800 mb-2">একাডেমিক তথ্য</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Sotokaler High School - যেখানে জ্ঞানের সাথে নৈতিকতা ও সংস্কৃতির সমন্বয় ঘটে।
        </p>
      </motion.div>

      {/* Section: শ্রেণি কাঠামো */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-3">শ্রেণি কাঠামো</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>প্রথম শ্রেণি থেকে দশম শ্রেণি পর্যন্ত পাঠদান</li>
          <li>প্রতি শ্রেণিতে দুটি সেকশন (A ও B)</li>
          <li>একটি শ্রেণিতে গড়ে ৩০-৪০ জন শিক্ষার্থী</li>
        </ul>
      </section>

      {/* Section: বিষয় বিভাগ */}
      <section>
  <h2 className="text-2xl text-center font-semibold text-blue-700 mb-3">বিষয়ভিত্তিক বিভাগ</h2>
  <div className="grid md:grid-cols-3 gap-6 text-gray-800">
    <div className="bg-white shadow-md p-4 rounded-lg">
      <img src={sceicnimage } className="h-60 mb-2 mx-auto" alt="Science" />
      <h3 className="font-bold text-lg mb-2 text-green-600 text-center">বিজ্ঞান বিভাগ</h3>
      <p className="text-sm text-center">পদার্থ, রসায়ন, জীববিজ্ঞান ও গণিতের পাঠদান।</p>
    </div>
    <div className="bg-white shadow-md p-4 rounded-lg">
      <img src={ humanimage} className="h-60 mb-2 mx-auto" alt="Humanities" />
      <h3 className="font-bold text-lg mb-2 text-purple-600 text-center">মানবিক বিভাগ</h3>
      <p className="text-sm text-center">ইতিহাস, ভূগোল, বাংলা ও সামাজিক বিজ্ঞানের গুরুত্ব।</p>
    </div>
    <div className="bg-white shadow-md p-4 rounded-lg">
      <img src={commarceimage} className="h-60 mb-2 mx-auto" alt="Commerce" />
      <h3 className="font-bold text-lg mb-2 text-orange-600 text-center">বাণিজ্য বিভাগ</h3>
      <p className="text-sm text-center">হিসাববিজ্ঞান, অর্থনীতি ও ব্যবস্থাপনা বিষয় অন্তর্ভুক্ত।</p>
    </div>
  </div>
</section>

      {/* Section: ক্লাস রুটিন */}
      <section className="bg-white shadow-sm p-6 rounded-lg">
  <h2 className="text-2xl text-center font-semibold text-blue-700 mb-3">ক্লাস রুটিন</h2>
  <div className="flex flex-col md:flex-row items-center gap-6">
    <div className="flex-1 space-y-2 text-gray-700">
      <ul className="list-disc pl-5">
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
</section>


      {/* Section: পরীক্ষা ও মূল্যায়ন */}
      <section className="mt-8">
  <h2 className="text-2xl text-center font-semibold text-blue-700 mb-4">পরীক্ষার সময়সূচি</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
    <div className="card bg-blue-100 shadow-md p-4 rounded-lg">
      <h3 className="font-semibold text-lg text-blue-800 mb-2">১ম টার্ম</h3>
      <p>সময়ঃ মার্চ মাস</p>
    </div>
    <div className="card bg-blue-100 shadow-md p-4 rounded-lg">
      <h3 className="font-semibold text-lg text-blue-800 mb-2">২য় টার্ম</h3>
      <p>সময়ঃ জুলাই মাস</p>
    </div>
    <div className="card bg-blue-100 shadow-md p-4 rounded-lg">
      <h3 className="font-semibold text-lg text-blue-800 mb-2">বার্ষিক পরীক্ষা</h3>
      <p>সময়ঃ নভেম্বর মাস</p>
    </div>
  </div>
</section>


      {/* Section: লাইব্রেরি ও উপকরণ */}
      <section className="bg-base-200 p-6 rounded-lg shadow-inner">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">লাইব্রেরি ও শিক্ষাসহায়ক উপকরণ</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>স্কুলে রয়েছে ২০০০+ বইয়ের একটি আধুনিক লাইব্রেরি</li>
          <li>কম্পিউটার ল্যাব ও প্রজেক্টরের মাধ্যমে আধুনিক ক্লাস</li>
          <li>বিজ্ঞান ল্যাব (Physics, Chemistry, Biology)</li>
          <li>শিক্ষার্থীদের জন্য অনলাইন রিসোর্স ও নোট সরবরাহ</li>
        </ul>
      </section>

      {/* Section: ভবিষ্যৎ পরিকল্পনা */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-3">ভবিষ্যৎ পরিকল্পনা</h2>
        <p className="text-gray-700">
          আমরা পরিকল্পনা করছি একটি E-learning Portal চালু করার, যেখানে শিক্ষার্থীরা ক্লাস
          লেকচার, রেকর্ডিং ও লাইভ কুইজে অংশ নিতে পারবে। এ ছাড়া আরও একাধিক Smart Classroom
          সংযুক্ত করা হবে আগামী বছর।
        </p>
      </section>
    </div>
  );
};

export default Academic;
