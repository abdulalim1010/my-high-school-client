import React from 'react';
import { motion } from 'framer-motion';
import schoolImg from '../../assets/image.jpg';
import schoolimage2 from '../../assets/image2.jpg';

const Hero = () => {
  return (
    <div className="bg-blue-50 min-h-screen pt-10">
      {/* Banner Section */}
      <div className="bg-base-200 rounded-lg mx-4 shadow-md p-6">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* ✍️ Text Section (2/5) */}
          <div className="w-full lg:basis-2/5 space-y-4 text-left">
            <motion.h1
              className="text-4xl lg:text-5xl font-bold text-blue-800"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              স্বপ্নের স্কুলে ফিরে চলি...
            </motion.h1>
            <p className="text-gray-700">
              Sotokaler High School — যেখানে রঙ ছিল, বন্ধু ছিল, আর ছিল অনেক স্মৃতি!
              আবার একবার সেই দিনগুলোকে ফিরিয়ে আনতে এসেছি আমরা।
            </p>
            <button className="btn btn-primary">Explore Memories</button>
          </div>

          {/* 🖼️ Image Section (3/5) */}
          {/* 🖼️ Image Section (3/5) */}
<div className="w-full lg:basis-3/5">
  <motion.img
    animate={{ y: [0, 50, 0] }}
    transition={{ duration: 5, repeat: Infinity }}
    src={schoolImg}
    className="w-3xl h-90  rounded-t-[40px] rounded-br-4xl border-s-20 border-b-20 border-red-600 shadow-2xl"
    alt="School 1"
  />
  <motion.img
    animate={{ x: [100, 150, 100] }}
    transition={{ duration: 10, repeat: Infinity }}
    src={schoolimage2}
    className="w-3xl h-80 rounded-t-[40px] rounded-br-4xl border-s-16 border-b-16 border-blue-500 shadow-2xl"
    alt="School 2"
  />
</div>

        </div>
      </div>

      {/* Memories Preview Section */}
      <motion.div
        className="mt-16 px-4 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-blue-700">আমাদের কিছু স্মৃতি</h2>
        <p className="max-w-xl mx-auto text-gray-600">
          সেই টিফিন টাইম, কাঁদা মাঠে খেলা, বকাঝকার ভয়, আর স্যারদের গল্প —
          প্রতিটি মুহূর্তেই লুকিয়ে আছে আমাদের শৈশব।
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
