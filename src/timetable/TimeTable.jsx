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
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-6">
        🕘 আমাদের সাপ্তাহিক ক্লাস রুটিন
      </h1>

      {/* Dropdown */}
      <div className="mb-6 text-center">
        <label className="mr-3 font-medium text-lg">ক্লাস নির্বাচন করুন:</label>
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          className="border rounded px-4 py-2 text-lg"
        >
          {Object.keys(routines).map((cls) => (
            <option key={cls} value={cls}>
              {cls}
            </option>
          ))}
        </select>
      </div>

      {/* Routine Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300 text-center">
          <thead className="bg-blue-100">
            <tr>
              <th className="border px-4 py-2">দিন</th>
              <th className="border px-4 py-2">৮:০০–৯:০০</th>
              <th className="border px-4 py-2">৯:০০–১০:০০</th>
              <th className="border px-4 py-2">১০:৩০–১১:৩০</th>
              <th className="border px-4 py-2">১২:০০–১:০০</th>
            </tr>
          </thead>
          <tbody>
            {routines[selectedClass].map((periods, i) => (
              <tr key={i} className="hover:bg-blue-50">
                <td className="border px-4 py-2 font-semibold">{days[i]}</td>
                {periods.map((subject, j) => (
                  <td key={j} className="border px-4 py-2">
                    {subject}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TimeTable;
