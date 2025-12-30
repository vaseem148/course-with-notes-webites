import { useEffect, useState } from "react";
import { Users, BookOpen, Award, Globe } from "lucide-react";

export default function StatsSection() {
  return (
    <section className="bg-neutral-900 py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center text-white">

        <StatCard
          icon={<Users size={28} />}
          value={500}
          suffix="K+"
          label="Active Students"
        />

        <StatCard
          icon={<BookOpen size={28} />}
          value={1200}
          suffix="+"
          label="Courses Available"
        />

        <StatCard
          icon={<Award size={28} />}
          value={95}
          suffix="%"
          label="Success Rate"
        />

        <StatCard
          icon={<Globe size={28} />}
          value={150}
          suffix="+"
          label="Countries"
        />

      </div>
    </section>
  );
}

/* ---------------- CARD ---------------- */

function StatCard({ icon, value, suffix, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 10000;
    const step = value / (duration / 16);

    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="flex flex-col items-center group">

      {/* ICON WITH MOVE ANIMATION */}
      <div className="icon-float w-16 h-16 flex items-center justify-center rounded-2xl 
        bg-gradient-to-br from-purple-500 to-indigo-600 mb-6
        group-hover:scale-110 transition-all duration-300
        group-hover:shadow-[0_0_30px_rgba(168,85,247,0.8)]">
        {icon}
      </div>

      {/* NUMBER */}
      <h2 className="text-4xl font-bold mb-2">
        {count}{suffix}
      </h2>

      {/* LABEL */}
      <p className="text-gray-400 text-lg">
        {label}
      </p>

      {/* CSS ANIMATION */}
      <style>
        {`
          .icon-float {
            animation: float 3s ease-in-out infinite;
          }

          @keyframes float {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0);
            }
          }
        `}
      </style>

    </div>
  );
}
