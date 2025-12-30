import {
  GraduationCap,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";

export default function NewsletterFooter() {
  return (
    <section className="bg-black text-white pt-24">

      {/* ================= NEWSLETTER ================= */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div
          className="
          bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600
          rounded-3xl p-16 text-center
          shadow-[0_30px_80px_rgba(168,85,247,0.4)]
          "
        >
          <h2 className="text-4xl font-semibold mb-4">
            Stay Updated
          </h2>
          <p className="text-white/90 mb-10">
            Get the latest courses and learning tips delivered to your inbox
          </p>

          {/* INPUT */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center bg-white/20 px-6 py-4 rounded-full w-full sm:w-[380px]">
              <Mail className="mr-3 opacity-80" />
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent outline-none placeholder-white/80 w-full"
              />
            </div>

            <button
              className="
              bg-white text-purple-600
              px-10 py-4 rounded-full
              font-medium
              transition-all duration-300
              hover:scale-110
              hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]
              "
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-5 gap-12">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-2 text-xl font-semibold mb-4">
              <GraduationCap className="text-purple-500" />
              LearnCourse
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Empowering learners worldwide with accessible,
              high-quality education.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4">
              <Social icon={<Twitter />} />
              <Social icon={<Facebook />} />
              <Social icon={<Instagram />} />
              <Social icon={<Linkedin />} />
            </div>
          </div>

          {/* PRODUCT */}
          <FooterCol
            title="Product"
            links={["Courses", "Pricing", "For Business", "Enterprise"]}
          />

          {/* RESOURCES */}
          <FooterCol
            title="Resources"
            links={["Blog", "Help Center", "Community", "Guides"]}
          />

          {/* COMPANY */}
          <FooterCol
            title="Company"
            links={["About", "Careers", "Press", "Contact"]}
          />

          {/* LEGAL */}
          <FooterCol
            title="Legal"
            links={["Privacy", "Terms", "Cookies", "Licenses"]}
          />
        </div>

        {/* COPYRIGHT */}
        <div className="text-center text-gray-500 text-sm py-6 border-t border-neutral-800">
          © 2025 LearnHub. All rights reserved.
        </div>
      </footer>
    </section>
  );
}

/* ---------------- SMALL COMPONENTS ---------------- */

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="font-semibold mb-4">{title}</h4>
      <ul className="space-y-3 text-gray-400 text-sm">
        {links.map((l) => (
          <li key={l} className="hover:text-purple-400 transition cursor-pointer">
            {l}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Social({ icon }) {
  return (
    <div
      className="
      w-10 h-10 flex items-center justify-center
      rounded-lg bg-neutral-900
      border border-neutral-800
      hover:bg-purple-600 hover:border-purple-600
      transition cursor-pointer
      "
    >
      {icon}
    </div>
  );
}
