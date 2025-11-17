
import React, { useState } from "react";
import Swal from "sweetalert2";
import UseAuth from "../../hooks/UseAuth";

const categories = [
  { value: "present", label: "বর্তমান শিক্ষার্থী" },
  { value: "ex", label: "প্রাক্তন শিক্ষার্থী" },
  { value: "teachers", label: "শিক্ষকবৃন্দ" },
];

const AddMemory = () => {
  const { user } = UseAuth();
  const [imageURL, setImageURL] = useState("");
  const [remarks, setRemarks] = useState("");
  const [category, setCategory] = useState("present");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      Swal.fire("অনুগ্রহ করে আগে লগইন করুন!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userEmail: user.email,
          userName: user.displayName || "Anonymous",
          image: imageURL,
          remarks,
          category,
          status: "pending",
          createdAt: new Date(),
        }),
      });

      const data = await response.json();
      if (response.ok) {
        Swal.fire("ছবি জমা দেওয়া হয়েছে! অনুমোদনের জন্য অনুগ্রহ করে অপেক্ষা করুন।");
        setImageURL("");
        setRemarks("");
        setCategory("present");
      } else {
        Swal.fire("জমা ব্যর্থ: " + data.message);
      }
    } catch (error) {
      Swal.fire("ত্রুটি: " + error.message);
    }
    setLoading(false);
  };

  return (
    <section className="max-w-3xl mx-auto glass-panel p-6 sm:p-10 space-y-6">
      <div className="space-y-3 text-center">
        <p className="uppercase text-xs tracking-[0.6em] text-slate-300">Share Memory</p>
        <h2 className="section-title">নিজের স্মৃতি যুক্ত করুন</h2>
        <p className="section-subtitle">
          স্কুল জীবনের বিশেষ মুহূর্তকে গ্যালারিতে যুক্ত করুন যাতে অন্যরাও আপনার স্মৃতি দেখতে পারে।
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm text-slate-200 font-medium">বিভাগ নির্বাচন</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-sky-400"
              required
            >
              {categories.map(({ value, label }) => (
                <option key={value} value={value} className="text-slate-900">
                  {label}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-slate-200 font-medium">Image URL</label>
            <input
              type="url"
              placeholder="https://example.com/memory.jpg"
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:border-sky-400"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-slate-200 font-medium">স্মৃতির বর্ণনা</label>
          <textarea
            placeholder="এই ছবিটির সাথে যুক্ত স্মৃতির গল্প লিখুন..."
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            rows={4}
            className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:border-sky-400"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-full font-semibold text-slate-900 bg-gradient-to-r from-amber-300 via-orange-400 to-rose-500 shadow-lg shadow-orange-500/30 hover:opacity-95 transition disabled:opacity-50"
        >
          {loading ? "জমা হচ্ছে..." : "স্মৃতি জমা দিন"}
        </button>
      </form>
    </section>
  );
};

export default AddMemory;

