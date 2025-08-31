import React from "react";
import { motion } from "framer-motion";
import schoolOldPhoto from "../../assets/real.jpg";
import headTeacherImg from '../../assets/headsir.jpg'
import image from '../../assets/alimhif.jpeg'

const About = () => {
  return (
    <div className="bg-blue-400 min-h-screen px-6 py-10 space-y-16">
      {/* Title */}
      <motion.div
        className="text-center"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-blue-800 mb-2">
          আমাদের স্কুল সম্পর্কে
        </h1>

        <img className="w-full mx-auto" src={image} alt="" />
        <p className="text-gray-600 max-w-2xl mx-auto">
          একটি প্রতিষ্ঠান নয় — Sotokaler High School আমাদের শৈশবের গল্প।
        </p>
      </motion.div>

      {/* History + Image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div
          className="space-y-4"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-semibold text-blue-700">প্রতিষ্ঠার পেছনের গল্প</h2>
          <p className="text-gray-700 leading-relaxed">
            ১৯৬৬সালে যুদ্ধবিধ্বস্ত বাংলাদেশের গ্রামাঞ্চলে শিক্ষার আলো পৌঁছে দিতে
            Sotokaler High School-এর জন্ম। সমাজের কিছু আলোকিত মানুষ মিলে একটি
            বটগাছের নিচে শুরু করেছিলেন এই শিক্ষাপ্রতিষ্ঠান। আজ সেই গাছ, সেই ক্লাসরুম,
            সবই সাক্ষী আমাদের ইতিহাসের।
          </p>
        </motion.div>

        <motion.img
          src={schoolOldPhoto}
          alt="Old school"
          className="rounded-xl shadow-lg border-4 border-blue-300"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Head Teacher's Message */}
      <div className=" shadow-md p-6 rounded-lg">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <img
            src={headTeacherImg}
            alt="Head Teacher"
            className="w-32 h-32 rounded-full border-4 border-blue-400 object-cover"
          />
          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-1">প্রধান শিক্ষকের বাণী</h3>
            <p className="text-gray-700">
              “Sotokaler High School শুধু পড়াশোনার স্থান নয়, বরং একজন আদর্শ মানুষ
              হয়ে গড়ে ওঠার চারণভূমি। আমরা চেষ্টা করি প্রতিটি শিক্ষার্থীকে দায়িত্বশীল,
              মানবিক ও সৃজনশীল করে গড়ে তুলতে।”
            </p>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <motion.div
        className="text-center"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-blue-700 mb-4">আমাদের গৌরব</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700 text-left max-w-4xl mx-auto list-disc px-5">
          <li>জেলা পর্যায়ে ৩ বার সেরা শিক্ষা প্রতিষ্ঠান পুরস্কার</li>
          <li>একাধিক জাতীয় পর্যায়ের ক্রীড়া ও বিতর্ক প্রতিযোগিতায় বিজয়</li>
          <li>প্রাক্তন শিক্ষার্থীরা ডাক্তার, প্রকৌশলী ও প্রশাসনে কর্মরত</li>
        </ul>
      </motion.div>

      {/* Core Values */}
      <motion.div
        className="text-left  p-6 rounded-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-bold text-blue-800 mb-3">আমাদের মূলনীতি</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700">
          <span className="badge badge-lg text-blue-700">সততা</span>
          <span className="badge badge-lg  text-blue-700">নেতৃত্ব</span>
          <span className="badge badge-lg  text-blue-700">সহানুভূতি</span>
          <span className="badge badge-lg  text-blue-700">পরিশ্রম</span>
        </div>
      </motion.div>

      {/* Future Vision */}
      <div className=" p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-blue-700 mb-2">ভবিষ্যৎ পরিকল্পনা</h2>
        <p className="text-gray-700">
          আমরা চাই স্কুলকে ডিজিটাল প্ল্যাটফর্মে উন্নীত করতে, যেখানে থাকবে স্মার্ট ক্লাসরুম,
          লাইব্রেরি, অনলাইন রেজাল্ট ও ই-লার্নিং সুবিধা। ভবিষ্যৎ শিক্ষাব্যবস্থা প্রযুক্তিনির্ভর —
          আর আমাদের লক্ষ্য, সেখানেই অগ্রণী হয়ে দাঁড়ানো।
        </p>
      </div>

      {/* Message for Students */}
      <motion.div
        className=" p-6 rounded-lg shadow-inner"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-xl font-semibold text-blue-800 mb-2">
          আমাদের ছাত্রছাত্রীদের প্রতি বার্তা:
        </h2>
        <p className="text-gray-800">
          প্রিয় শিক্ষার্থীরা, স্কুল জীবনের প্রতিটি দিন তোমার ভবিষ্যতের ভিত গড়ছে। সময়কে
          গুরুত্ব দাও, শিখতে ভালোবাসো — কারণ, তুমি আগামী দিনের বাংলাদেশ।
        </p>
      </motion.div>
    </div>
  );
};

export default About;
