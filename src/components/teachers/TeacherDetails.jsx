
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";

const TeacherDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/teachers/${id}`)
      .then((res) => res.json())
      .then((data) => setTeacher(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!teacher) return <p className="text-center text-white">লোড হচ্ছে...</p>;

  return (
    <section className="space-y-8">
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 text-sm text-slate-200 hover:text-white transition"
      >
        <ArrowLeft size={18} /> ফিরে যান
      </button>

      <div className="text-center space-y-3">
        <p className="uppercase text-xs tracking-[0.6em] text-slate-400">Teacher Profile</p>
        <h1 className="section-title">অধ্যাপক প্রোফাইল</h1>
        <p className="section-subtitle">একজন অনুপ্রেরণাদায়ী শিক্ষক যিনি শিক্ষার্থীদের ভবিষ্যৎ গড়ে তোলেন।</p>
      </div>

      <div className="glass-panel grid md:grid-cols-2 gap-8 p-6 sm:p-10 items-center">
        <div className="rounded-[24px] overflow-hidden border border-white/10">
          <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover" />
        </div>
        <div className="space-y-4 text-slate-200">
          <div>
            <h2 className="text-3xl font-bold text-white">{teacher.name}</h2>
            <p className="text-lg text-sky-300">{teacher.title}</p>
            <p className="text-sm text-slate-400">{teacher.degree}</p>
          </div>
          <div className="grid gap-3 text-sm">
            <p>📍 ঠিকানা: {teacher.address}</p>
            <p>📞 ফোন: {teacher.phone}</p>
            <p>
              📧 ইমেইল:{" "}
              <a href={`mailto:${teacher.gmail}`} className="text-sky-300 underline">
                {teacher.gmail}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherDetails;

