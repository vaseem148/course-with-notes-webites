import { Link } from "react-router-dom";
import { GraduationCap, ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

export default function AboutPage() {
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
      <section className="bg-neutral-950 text-white min-h-screen">

        {/* ================= NAVBAR (ANIMATED – SAME EVERYWHERE) ================= */}
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
                  className={`relative group transition
                    ${
                      item === "About"
                        ? "text-white font-medium"
                        : "hover:text-white"
                    }`}
                >
                  {item}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-purple-500 transition-all duration-300
                    ${
                      item === "About"
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}

              <button className="bg-purple-600 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]">
                Sign In
              </button>
            </div>
          </div>
        </nav>

        {/* ================= HERO ================= */}
        <div className="relative bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-600 pt-32 pb-28 px-6">

          {/* BACK LINK */}
          <Link
            to="/course/web-development"
            className="absolute top-8 left-6 flex items-center gap-2 text-white/90 hover:text-white transition"
          >
            <ArrowLeft size={18} />
            <span>Back to Courses</span>
          </Link>

          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm mb-6 backdrop-blur">
              ✨ Empowering learners since 2018
            </div>

            <h1 className="text-5xl md:text-6xl font-semibold mb-6">
              Our Mission is to Make <br /> Learning Accessible
            </h1>

            <p className="text-lg text-white/90 leading-relaxed">
              We believe that quality education should be available to everyone,
              everywhere.
              <br />
              Join us in building a world where knowledge has no boundaries.
            </p>
          </div>
        </div>

        {/* ================= STATS ================= */}
        <div className="bg-neutral-900 py-16">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            <Stat value="1M+" label="Active Learners" />
            <Stat value="500+" label="Expert Instructors" />
            <Stat value="1000+" label="Courses Available" />
            <Stat value="150+" label="Countries Reached" />
          </div>
        </div>

        {/* ================= OUR STORY ================= */}
        <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-4xl font-semibold mb-6">Our Story</h2>

            <p className="text-gray-400 mb-6 leading-relaxed">
              LearnHub was born from a simple observation: traditional education
              wasn't keeping pace with the rapidly changing world. In 2018, our
              founder brought together educators, technologists, and designers
              to reimagine online learning.
            </p>

            <p className="text-gray-400 mb-6 leading-relaxed">
              We started with just 10 courses and a vision to make high-quality
              education accessible to everyone. Today, we've grown into a global
              community of over 1 million learners.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Every course on our platform is crafted by industry experts and
              designed to be engaging, interactive, and impactful in the real
              world.
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Our Team"
              className="rounded-3xl w-full h-[420px] object-cover"
            />
            <div className="absolute inset-0 rounded-3xl bg-purple-600/10" />
          </div>

        </div>
      </section>
    </>
  );
}

/* ================= SMALL COMPONENT ================= */

function Stat({ value, label }) {
  return (
    <div>
      <h3 className="text-4xl font-semibold text-purple-400 mb-2">
        {value}
      </h3>
      <p className="text-gray-400">{label}</p>
    </div>
  );
}
