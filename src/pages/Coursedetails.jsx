import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Star,
  Users,
  Clock,
  Play,
  Check,
  Lock,
} from "lucide-react";

export default function CourseDetailPage() {
  return (
    <div className="bg-neutral-950 text-white min-h-screen">
      {/* TOP BAR */}
      <div className="px-6 py-4 border-b border-neutral-800 flex items-center gap-2 text-gray-300">
        <ArrowLeft size={18} />
        <a href="home" className="hover:text-white">Back to Courses</a>
      </div>

      {/* HERO */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT */}
        <div className="lg:col-span-2">
          <div className="flex gap-3 mb-4">
            <span className="px-3 py-1 text-sm rounded-full bg-purple-600/20 text-purple-400">
              Development
            </span>
            <span className="px-3 py-1 text-sm rounded-full bg-neutral-800">
              Beginner
            </span>
          </div>

          <h1 className="text-4xl font-bold mb-4">
            Complete Web Development Bootcamp
          </h1>

          <p className="text-gray-400 mb-6 max-w-2xl">
            Learn HTML, CSS, JavaScript, React, Node.js and more in this
            comprehensive bootcamp.
          </p>

          <div className="flex flex-wrap gap-6 text-gray-300 mb-6">
            <span className="flex items-center gap-2">
              <Star className="text-yellow-400" size={18} /> 4.8 rating
            </span>
            <span className="flex items-center gap-2">
              <Users size={18} /> 12,453 students
            </span>
            <span className="flex items-center gap-2">
              <Clock size={18} /> 42 hours
            </span>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center font-bold">
              SJ
            </div>
            <div>
              <p className="text-sm text-gray-400">Created by</p>
              <p>Sarah Johnson</p>
            </div>
          </div>
        </div>

        {/* PRICE CARD */}
        <div className="bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-center">
            <p className="text-sm mb-1">Limited Time Offer</p>
            <p className="text-3xl font-bold">
              <span className="line-through text-white/50 mr-2">$125.99</span>
              $89.99
            </p>
            <p className="text-sm mt-1">Save $18 today</p>
          </div>

          <div className="p-6 space-y-4">
            <button className="w-full bg-purple-600 py-3 rounded-full font-medium hover:scale-105 transition">
              <a href="payment">Buy Now</a>
            </button>

            <p className="text-center text-sm text-gray-400">
              30-day money-back guarantee
            </p>

            <div className="border-t border-neutral-800 pt-4">
              <p className="font-medium mb-3">This course includes:</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex gap-2">
                  <Check className="text-green-400" size={16} /> 42 hours video
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-400" size={16} /> Lifetime access
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-400" size={16} /> Certificate
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-400" size={16} /> Money-back guarantee
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* WHAT YOU'LL GET */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-8">What You'll Get</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Feature icon={<Play />} text="42 hours on-demand video" />
          <Feature icon={<Check />} text="Downloadable resources" />
          <Feature icon={<Users />} text="Community access" />
          <Feature icon={<Clock />} text="Lifetime updates" />
        </div>
      </div>

      {/* CURRICULUM */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-semibold mb-8">Course Curriculum</h2>

        <Section
          title="Section 1: Introduction & Setup"
          time="2h 30m"
          lessons={[
            { name: "Course Overview", open: true },
            { name: "Environment Setup", open: true },
            { name: "Getting Started", lock: true },
          ]}
        />

        <Section
          title="Section 2: Core Concepts"
          time="8h 15m"
          lessons={[
            { name: "Fundamentals", open: true },
            { name: "Best Practices", open: true },
            { name: "Patterns", lock: true },
          ]}
        />
      </div>

      {/* STUDENT REVIEWS */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-semibold mb-8">Student Reviews</h2>
        <ReviewSlider />
      </div>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function Feature({ icon, text }) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 flex gap-4 items-center">
      <div className="text-purple-400">{icon}</div>
      <p>{text}</p>
    </div>
  );
}

function Section({ title, time, lessons }) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl mb-6">
      <div className="flex justify-between px-5 py-4 border-b border-neutral-800">
        <p className="font-medium">{title}</p>
        <p className="text-sm text-gray-400">{time}</p>
      </div>

      <div className="p-5 space-y-3">
        {lessons.map((l, i) => (
          <div key={i} className="flex gap-3 items-center text-gray-300">
            {l.open ? (
              <Play className="text-purple-400" size={16} />
            ) : (
              <Lock size={16} />
            )}
            {l.name}
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------- REVIEW SLIDER -------- */

const reviews = [
  { name: "Alex Morgan", time: "2 weeks ago", text: "Very practical and beginner friendly.", rating: 5 },
  { name: "Jordan Lee", time: "1 month ago", text: "Clear explanations and great structure.", rating: 4 },
  { name: "Sam Rivera", time: "3 weeks ago", text: "Worth every rupee. nalla irukku.", rating: 5 },
  { name: "Chris Paul", time: "1 week ago", text: "Good but could be better.", rating: 3 },
  { name: "David Roy", time: "5 days ago", text: "Average experience.", rating: 2 },
  { name: "Mark John", time: "2 days ago", text: "Not recommended.", rating: 1 },
];

function ReviewSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex gap-8">
      {/* LEFT STAR COLUMN */}
      <div className="flex flex-col justify-center gap-3">
        {[5, 4, 3, 2, 1].map((s) => (
          <div
            key={s}
            className={`text-sm ${
              reviews[index].rating === s
                ? "text-yellow-400 font-semibold"
                : "text-gray-600"
            }`}
          >
            {"★".repeat(s)}
          </div>
        ))}
      </div>

      {/* SLIDING REVIEW */}
      <div className="overflow-hidden flex-1">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {reviews.map((r, i) => (
            <div key={i} className="min-w-full">
              <Review {...r} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Review({ name, time, text, rating }) {
  return (
    <div className="p-4">
      <div className="text-yellow-400 mb-3">
        {"★".repeat(rating)}
        <span className="text-gray-600">
          {"★".repeat(5 - rating)}
        </span>
      </div>

      <p className="text-gray-300 mb-6">{text}</p>

      <div className="flex justify-between text-sm text-gray-400">
        <span className="text-white font-medium">{name}</span>
        <span>{time}</span>
      </div>
    </div>
  );
}
