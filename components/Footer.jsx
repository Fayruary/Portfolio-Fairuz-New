import { FaInstagram, FaTelegramPlane, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { memo } from "react";

function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:justify-between items-center md:items-start gap-10 text-center md:text-left">

        {/* LEFT */}
        <div className="space-y-6 flex flex-col items-center md:items-start">
          <div className="flex items-center gap-3">
            <img
              src="/images/profile.jpg"
              alt="Fayz"
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="text-white font-semibold text-lg">
              Muhammad Fairuz
            </span>
          </div>

          <nav>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm md:flex md:gap-6">
              <li><a href="#certificate" className="hover:text-white transition">Certificate</a></li>
              <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
              <li><a href="#skills" className="hover:text-white transition">Skills</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </nav>

          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Muhammad Fairuz. All rights reserved.
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-center md:items-end gap-5">
          <span className="text-sm text-gray-500">Follow Me</span>

          <div className="flex items-center gap-5 text-white text-lg">
            <a href="https://www.instagram.com/fayruary/" className="hover:text-gray-400 transition">
              <FaInstagram />
            </a>

            <a href="https://t.me/anaravaa" className="hover:text-gray-400 transition">
              <FaTelegramPlane />
            </a>

            <a href="https://x.com/fayruary" className="hover:text-gray-400 transition">
              <FaXTwitter />
            </a>

            <a href="https://github.com/Fayruary" className="hover:text-gray-400 transition">
              <FaGithub />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default memo(Footer);
