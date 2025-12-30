import { Link } from "react-router-dom";
import { GraduationCap, BookOpen, FileText } from "lucide-react";
import { useEffect, useState } from "react";

export default function StateBoardNotes() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-neutral-950 text-white min-h-screen">

      {/* ================= NAVBAR (SAME AS HOME) ================= */}
      <nav
        className={`w-full fixed top-0 left-0 z-50
        transition-all duration-500 ease-out
        ${
          mounted
            ? "translate-y-0 opacity-100"
            : "-translate-y-10 opacity-0"
        }
        ${
          scrolled
            ? "bg-neutral-950/80 backdrop-blur border-b border-neutral-800"
            : "bg-neutral-950"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2 text-xl font-semibold">
            <GraduationCap className="text-purple-500" size={26} />
            LearnHub
          </Link>

          {/* MENU */}
          <div className="flex items-center gap-8 text-gray-300">
            {["Home", "Notes", "Course", "About"].map((item, i) => (
              <Link
                key={i}
                to={
                  item === "Home"
                    ? "/"
                    : item === "Courses"
                    ? "/course/web-development"
                    : `/${item.toLowerCase()}`
                }
                className="relative group hover:text-white transition"
              >
                {item}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            <button className="bg-purple-600 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]">
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <div className="pt-24 bg-gradient-to-r from-purple-700 to-indigo-700 py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Tamil Nadu Public Exam
        </h1>
        <p className="text-xl opacity-90">
          State Board Notes & Study Materials
        </p>
      </div>

      {/* ================= INTRO ================= */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Download high-quality Tamil Nadu State Board notes prepared according
          to the latest Samacheer Kalvi syllabus. These notes help students
          understand concepts easily and score high marks in public exams.
        </p>
      </div>

      {/* ================= CLASS CARDS ================= */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">

        <NoteCard
          title="10th Standard"
          desc="All subject notes based on Samacheer Kalvi syllabus."
        />

        <NoteCard
          title="11th Standard"
          desc="Concept-wise notes with clear explanations and diagrams."
        />

        <NoteCard
          title="12th Standard"
          desc="Public exam focused notes with important questions."
        />

      </div>

      {/* ================= FEATURES ================= */}
      <div className="bg-neutral-900 py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

          <Feature icon={<BookOpen />} text="Easy to understand notes" />
          <Feature icon={<FileText />} text="Exam-oriented content" />
          <Feature icon={<GraduationCap />} text="Prepared by experts" />

        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="text-center py-20">
        <h2 className="text-3xl font-semibold mb-6">
          Want Skill-Based Courses?
        </h2>

        <p className="text-gray-400 mb-8">
          Explore our professional courses to build your career.
        </p>

        <Link to="/course/web-development">
          <button className="bg-purple-600 px-10 py-4 rounded-full text-lg hover:scale-105 transition">
            Explore Courses
          </button>
        </Link>
      </div>

    </div>
  );
}

/* ================= COMPONENTS ================= */

function NoteCard({ title, desc }) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-400 mb-6">{desc}</p>
      <button className="bg-neutral-800 px-6 py-2 rounded-full hover:bg-purple-600 transition">
        View Notes
      </button>
    </div>
  );
}

function Feature({ icon, text }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-14 h-14 rounded-full bg-purple-600/20 flex items-center justify-center text-purple-400">
        {icon}
      </div>
      <p className="text-gray-300">{text}</p>
    </div>
  );
}
