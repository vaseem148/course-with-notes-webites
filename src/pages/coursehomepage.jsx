import { Link } from "react-router-dom";
import { GraduationCap, Search } from "lucide-react";
import { useEffect, useState } from "react";
import Stats from "../components/Stats";
import ExploreCourse from "../components/ExploreCourses";
import SiteFooter from "../components/SiteFooter";

export default function HomePage() {
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
    <>
      {/* ================= PAGE WRAPPER ================= */}
      <div className="min-h-screen bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-600 text-white">

        {/* ================= NAVBAR (ANIMATED) ================= */}
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

        {/* ================= HERO SECTION ================= */}
        <section className="flex flex-col items-center text-center pt-32 px-4">

          {/* Badge */}
          <div className="bg-white/20 px-4 py-2 rounded-full text-sm mb-6 backdrop-blur">
            ✨ New courses added weekly
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Learn Without Limits
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl text-lg text-white/90 mb-10">
            Master new skills with world-class courses from industry experts.
            <br />
            Start your learning journey today.
          </p>

          {/* SEARCH BAR */}
          <div className="flex items-center bg-white/20 backdrop-blur-md rounded-full w-full max-w-xl px-6 py-4 mb-8">
            <Search className="text-white/80 mr-3" />
            <input
              type="text"
              placeholder="What do you want to learn?"
              className="bg-transparent flex-1 outline-none placeholder-white/80 text-white"
            />
            <button className="ml-4 bg-purple-500 hover:bg-purple-600 px-6 py-2 rounded-full font-medium transition">
              Search
            </button>
          </div>

          {/* POPULAR TAGS */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="opacity-80">Popular:</span>
            {["Web Development", "Design", "Marketing", "Business"].map(
              (item) => (
                <button
                  key={item}
                  className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full text-sm transition"
                >
                  {item}
                </button>
              )
            )}
          </div>
        </section>
      </div>

      {/* ================= OTHER SECTIONS ================= */}
      <Stats />
      <ExploreCourse />
      
    </>
  );
}
