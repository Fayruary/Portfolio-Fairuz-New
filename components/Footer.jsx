import { Twitter, Instagram, Facebook, Dribbble } from "lucide-react";
import { memo } from "react";

/**
 * Footer Component
 * Displays the site logo, navigation links, social media icons, and credits.
 *
 * @component
 * @returns {JSX.Element} Footer UI
 */
function Footer() {
  return (
    <footer
      className="bg-black text-gray-400 py-10"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left Section - Branding & Navigation */}
        <div className="space-y-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
             
          <img src="/images/profile.jpg" alt="Fayz" className="h-8 w-8 md:h-10 md:w-10 rounded-full object-cover"/>
        
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex gap-6 text-sm flex-wrap">
              <li>
                <a
                  href="/#"
                  className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                >
                  Certificate
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-gray-500 mt-2">© 2025</p>
        </div>

        {/* Right Section - Social Media & Credits */}
        <div className="flex flex-col justify-between items-end w-full md:w-auto gap-6">
          {/* Social Icons */}
          <div className="flex items-center gap-5 text-white text-lg">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-gray-400 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              <Facebook size={20} aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com/fayruary/"
              aria-label="Instagram"
              className="hover:text-gray-400 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              <Instagram size={20} aria-hidden="true" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-gray-400 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              <Twitter size={20} aria-hidden="true" />
            </a>
            <a
              href="#"
              aria-label="Dribbble"
              className="hover:text-gray-400 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              <Dribbble size={20} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
