import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#131A22] text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Logo and Tagline */}
          <div className="flex items-start gap-4">
            <Link href="/">
              <img src="/images/logo.png" alt="Logo" className="h-20 w-auto" />
            </Link>
            <div>
             
              <p className="mt-2 text-white/70 text-sm leading-relaxed">
                Elevate your everyday style: 
                <br />
                Discover quality, curated for you.
              </p>
            </div>
          </div>

          {/* Navigation Links and Social Media Icons */}
          <div>
            {/* Navigation Links */}
            <nav className="flex flex-wrap gap-6 md:gap-8 mb-4">
              <Link href="/" className="text-white/70 hover:text-white text-sm">
                Home
              </Link>
              <Link
                href="#"
                className="text-white/70 hover:text-white text-sm"
              >
                Product
              </Link>
              <Link
                href="#"
                className="text-white/70 hover:text-white text-sm"
              >
                Category
              </Link>
            </nav>

            {/* Social Media Icons Below Navigation Links */}
            <div className="flex justify-end space-x-6">
              <Link href="#" className="text-white/70 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/70 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/70 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left - Privacy Policy */}
          <div className="flex justify-start">
            <Link href="#" className="text-white/70 hover:text-white text-sm">
              Privacy Policy
            </Link>
          </div>

          {/* Center - Branding Text */}
          <div className="text-white/70 text-sm text-center">
            © 2024 ecommerce website
          </div>

          {/* Right - Terms & Conditions */}
          <div className="flex justify-end">
            <Link href="#" className="text-white/70 hover:text-white text-sm">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
