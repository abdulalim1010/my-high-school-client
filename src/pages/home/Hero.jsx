import React from "react";
import { motion } from "framer-motion";
import schoolImg from "../../assets/image.jpg";

const Hero = () => {
  return (
<section
  className="relative w-full overflow-hidden  text-white"
  style={{ height: '100dvh' }}  // full viewport height
>
  {/* Background Image */}
  <motion.img
    src={schoolImg} 
    alt="School Background"
    className="absolute top-0 left-0 w-full h-full object-cover"
    animate={{ scale: [1, 1.02, 1] }}
    transition={{ duration: 10, repeat: Infinity }}
  />

  {/* Text Overlay */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
    <motion.h1
      className="text-5xl md:text-7xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-300 drop-shadow-lg"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      🏫 Amantullah High School
    </motion.h1>

    <motion.div
      className="space-y-3 text-center mt-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-yellow-300 drop-shadow-md">
        স্বপ্নের স্কুলে ফিরে চলি...
      </h2>
      <p className="text-white/90 text-lg md:text-xl leading-relaxed drop-shadow-md">
        <span className="text-cyan-300 font-semibold">Amantullah High School</span> — 
        যেখানে ছিল বন্ধুত্ব, স্মৃতি, হাসি আর সেই পুরনো ক্লাসরুমের গল্প।
      </p>
    </motion.div>
  </div>
</section>


  );
};

export default Hero;
