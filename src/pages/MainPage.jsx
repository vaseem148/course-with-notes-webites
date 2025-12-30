import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
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
    <div className="min-h-screen bg-neutral-950 text-white">

      {/* ================= NAVBAR (BETTER ANIMATION) ================= */}
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
            {["Home", "Notes", "Courses", "About"].map((item, i) => (
              <Link
                key={i}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
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

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7F00FF] via-[#8E2DE2] to-[#4A00E0]" />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative max-w-7xl mx-auto px-6 py-28 text-center">
          <span className="inline-block mb-6 px-4 py-1 rounded-full bg-white/10 text-white text-sm backdrop-blur">
            Official Learning Platform for Tamil Nadu Students
          </span>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Tamil Nadu Public Exam <br />
            <span className="text-white">
              Notes & Career-Oriented Courses
            </span>
          </h1>

          <p className="text-gray-200 max-w-3xl mx-auto mb-10 text-lg">
            LearnHub provides structured Tamil Nadu State Board notes, public
            exam preparation materials, and industry-relevant skill courses.
            exam preparation materials, and industry-relevant skill courses.
            One platform for academics + career growth.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            <Link
              to="/notes"
              className="bg-white text-purple-700 px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              Access State Board Notes
            </Link>

            <Link
              to="/course"
              className="border border-white px-8 py-3 rounded-full font-medium text-white hover:bg-white hover:text-purple-700 transition"
            >
              View Skill Courses
            </Link>
          </div>
        </div>
      </section>

      {/* ================= INFO CARDS (BACK) ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-8">

        <InfoCard
          title="Tamil Nadu State Board Notes"
          desc="Well-organized notes for Classes 10, 11, and 12 based on Samacheer syllabus."
        />

        <InfoCard
          title="Professional Skill Development"
          desc="Career-focused courses like Web Development, UI/UX Design, and Digital Marketing."
        />

        <InfoCard
          title="Academic to Career Support"
          desc="One platform connecting academics with real-world industry skills."
        />
        <InfoCard
          title="Academic to Career Support"
          desc="One platform connecting academics with real-world industry skills."
        />
        <InfoCard
          title="Academic to Career Support"
          desc="One platform connecting academics with real-world industry skills."
        />
        <InfoCard
          title="Academic to Career Support"
          desc="One platform connecting academics with real-world industry skills."
        />
      </section>
    </div>
  );
}

/* ================= INFO CARD COMPONENT ================= */

function InfoCard({ title, desc }) {
  return (
    <div
      className="
        bg-neutral-900 border border-neutral-800 rounded-xl p-8 text-center
        transform transition-all duration-500 ease-out
        hover:-translate-y-3 hover:border-purple-500
        hover:shadow-[0_0_40px_rgba(168,85,247,0.35)]
      "
    >
      <h3 className="text-xl font-semibold mb-3 text-purple-400">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
