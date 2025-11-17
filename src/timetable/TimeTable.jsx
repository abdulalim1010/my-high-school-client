
import React, { useState } from "react";

const routines = {
  "৬ষ্ঠ শ্রেণি": [
    ["বাংলা", "ইংরেজি", "বিজ্ঞান", "গণিত"],
    ["ধর্ম", "বাংলা", "গণিত", "আইসিটি"],
    ["ইতিহাস", "বাংলা", "গণিত", "শারীরচর্চা"],
    ["ভূগোল", "ইংরেজি", "বিজ্ঞান", "ধর্ম"],
    ["কৃষি", "ইংরেজি", "গণিত", "শারীরচর্চা"],
  ],
  "৭ম শ্রেণি": [
    ["ইংরেজি", "গণিত", "বিজ্ঞান", "বাংলা"],
    ["বাংলা", "ধর্ম", "ভূগোল", "শারীরচর্চা"],
    ["গণিত", "ইংরেজি", "আইসিটি", "ইতিহাস"],
    ["বিজ্ঞান", "বাংলা", "গণিত", "কৃষি"],
    ["ধর্ম", "ইংরেজি", "ভূগোল", "শারীরচর্চা"],
  ],
  "৮ম শ্রেণি": [
    ["বাংলা", "গণিত", "বিজ্ঞান", "ইংরেজি"],
    ["ইংরেজি", "গণিত", "ধর্ম", "শারীরচর্চা"],
    ["বিজ্ঞান", "বাংলা", "আইসিটি", "ইতিহাস"],
    ["গণিত", "ইংরেজি", "ভূগোল", "কৃষিশিক্ষা"],
    ["ধর্ম", "বিজ্ঞান", "বাংলা", "শারীরচর্চা"],
  ],
  "৯ম শ্রেণি": [
    ["গণিত", "বাংলা", "ভূগোল", "ইংরেজি"],
    ["বিজ্ঞান", "গণিত", "ধর্ম", "শারীরচর্চা"],
    ["বাংলা", "ইংরেজি", "ইতিহাস", "আইসিটি"],
    ["গণিত", "বিজ্ঞান", "কৃষি", "ইংরেজি"],
    ["ধর্ম", "বাংলা", "গণিত", "শারীরচর্চা"],
  ],
  "১০ম শ্রেণি": [
    ["ইংরেজি", "গণিত", "বিজ্ঞান", "বাংলা"],
    ["বাংলা", "ধর্ম", "ভূগোল", "আইসিটি"],
    ["গণিত", "ইংরেজি", "বিজ্ঞান", "ইতিহাস"],
    ["ধর্ম", "বাংলা", "কৃষি", "শারীরচর্চা"],
    ["ইংরেজি", "গণিত", "ভূগোল", "শারীরচর্চা"],
  ],
};

const days = ["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার"];

const TimeTable = () => {
  const [selectedClass, setSelectedClass] = useState("৮ম শ্রেণি");

  return (
    <section className="space-y-8">
      <div className="text-center space-y-3">
        <p className="uppercase text-xs tracking-[0.6em] text-slate-300">Weekly Routine</p>
        <h1 className="section-title">আমাদের ক্লাস রুটিন</h1>
        <p className="section-subtitle">প্রতিটি শ্রেণির জন্য সুনির্দিষ্ট সময়সূচি যাতে শেখা হয় আরও পরিকল্পিত।</p>
      </div>

      <div className="glass-panel p-6 space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <label className="text-sm text-slate-200 font-semibold">ক্লাস নির্বাচন করুন</label>
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="px-4 py-3 rounded-full bg-white/5 border border-white/10 text-white"
          >
            {Object.keys(routines).map((cls) => (
              <option key={cls} value={cls} className="text-slate-900">
                {cls}
              </option>
            ))}
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-center text-sm border-separate border-spacing-0">
            <thead>
              <tr className="text-slate-200">
                <th className="py-3 px-4 bg-white/5 border border-white/10">দিন</th>
                <th className="py-3 px-4 bg-white/5 border border-white/10">৮:০০–৯:০০</th>
                <th className="py-3 px-4 bg-white/5 border border-white/10">৯:০০–১০:০০</th>
                <th className="py-3 px-4 bg-white/5 border border-white/10">১০:৩০–১১:৩০</th>
                <th className="py-3 px-4 bg-white/5 border border-white/10">১২:০০–১:০০</th>
              </tr>
            </thead>
            <tbody>
              {routines[selectedClass].map((periods, dayIndex) => (
                <tr key={days[dayIndex]}>
                  <td className="py-4 px-4 bg-white/5 border border-white/10 font-semibold text-white">
                    {days[dayIndex]}
                  </td>
                  {periods.map((subject, slotIndex) => (
                    <td key={`${dayIndex}-${slotIndex}`} className="py-4 px-4 border border-white/10 text-slate-200">
                      {subject}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TimeTable;

