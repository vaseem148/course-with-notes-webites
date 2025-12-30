import { useState } from "react";
import {
  Star,
  Users,
  Clock,
  Layers,
  Code,
  Palette,
  Briefcase,
  TrendingUp,
} from "lucide-react";




/* ---------------- DATA ---------------- */

const courses = [
  {
    category: "Development",
    level: "Beginner",
    levelColor: "bg-green-500/20 text-green-400",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    title: "Complete Web Development ",
    desc: "Learn HTML, CSS, JavaScript, React, Node.js and more",
    author: "Sarah Johnson",
    rating: "4.8",
    students: "12,453",
    hours: "42",
    price: "$89.99",
  },
  {
    category: "Design",
    level: "Intermediate",
    levelColor: "bg-yellow-500/20 text-yellow-400",
    image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0",
    title: "UI/UX Design Masterclass",
    desc: "Master UI & UX design with Figma and Adobe XD",
    author: "Michael Chen",
    rating: "4.9",
    students: "8,932",
    hours: "28",
    price: "$79.99",
  },
  {
    category: "Business",
    level: "Advanced",
    levelColor: "bg-red-500/20 text-red-400",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    title: "Business Strategy & Leadership",
    desc: "Develop leadership skills and strategic thinking",
    author: "Emily Rodriguez",
    rating: "4.7",
    students: "6,721",
    hours: "18",
    price: "$99.99",
  },
];

/* ---------------- MAIN ---------------- */

export default function ExploreCourses() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? courses
      : courses.filter((c) => c.category === active);

  return (
    <section className="bg-neutral-950 py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-semibold">Explore Courses</h2>
          <p className="text-gray-400">Find the perfect course for you</p>
        </div>

        {/* FILTERS */}
        <div className="flex gap-4 mb-12 flex-wrap">
          <Filter label="All" icon={<Layers size={18} />} active={active} setActive={setActive} />
          <Filter label="Development" icon={<Code size={18} />} active={active} setActive={setActive} />
          <Filter label="Design" icon={<Palette size={18} />} active={active} setActive={setActive} />
          <Filter label="Business" icon={<Briefcase size={18} />} active={active} setActive={setActive} />
          <Filter label="Marketing" icon={<TrendingUp size={18} />} active={active} setActive={setActive} />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>

      </div>
    </section>
  );
}

/* ---------------- FILTER ---------------- */

function Filter({ label, icon, active, setActive }) {
  return (
    <button
      onClick={() => setActive(label)}
      className={`flex items-center gap-2 px-6 py-3 rounded-full border transition
        ${
          active === label
            ? "bg-gradient-to-r from-purple-500 to-indigo-600 border-transparent"
            : "bg-neutral-900 border-neutral-800 hover:border-purple-500"
        }`}
    >
      {icon}
      {label}
    </button>
  );
}

/* ---------------- CARD ---------------- */

function CourseCard({
  image,
  level,
  levelColor,
  category,
  title,
  desc,
  author,
  rating,
  students,
  hours,
  price,
}) {
  return (
    <div className="relative h-full">
      <div
        className="
        group
        h-full
        bg-neutral-900 rounded-2xl overflow-hidden
        border border-neutral-800
        flex flex-col
        transform-gpu transition-all duration-300 ease-out
        hover:-translate-y-4
        hover:shadow-[0_25px_60px_rgba(0,0,0,0.7)]
        hover:border-purple-500
        "
      >
        {/* IMAGE */}
        <div className="relative h-48 overflow-hidden shrink-0">
          <img
            src={image}
            alt={title}
            className="
              w-full h-full object-cover
              transition-transform duration-500
              group-hover:scale-110
            "
          />

          {/* BADGES */}
          <span className={`absolute top-4 right-4 px-4 py-1 rounded-full text-sm ${levelColor}`}>
            {level}
          </span>
          <span className="absolute top-4 left-4 bg-purple-600 px-4 py-1 rounded-full text-sm">
            {category}
          </span>
        </div>

        {/* CONTENT */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-semibold mb-2 line-clamp-2">
            {title}
          </h3>

          <p className="text-gray-400 mb-4 text-sm line-clamp-3">
            {desc}
          </p>

          <p className="text-sm mb-4 opacity-80">{author}</p>

          {/* STATS */}
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
            <span className="flex items-center gap-1">
              <Star className="text-yellow-400" size={16} /> {rating}
            </span>
            <span className="flex items-center gap-1">
              <Users size={16} /> {students}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={16} /> {hours}h
            </span>
          </div>

          {/* FOOTER (STAYS BOTTOM) */}
          <div className="mt-auto flex items-center justify-between">
            <span className="text-2xl font-bold">{price}</span>
            <button
              className="
                relative overflow-hidden
                bg-gradient-to-r from-purple-500 to-indigo-600
                px-6 py-2 rounded-full
                transition-all duration-300
                hover:scale-110
                hover:shadow-[0_0_25px_rgba(168,85,247,0.8)]
              "
            >
              <a href="details">enroll</a>
            </button>
          </div>
        </div>
      </div>
    </div>



  );
}
