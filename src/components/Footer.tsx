import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-mg-secondary text-mg-muted py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2"
            >
              <Image
                src="/images/LekeLogo2.png"
                alt="Leke Logo"
                width={200}
                height={200}
                className="h-22 w-auto object-contain"
              />
            </Link>

            <p className="text-sm max-w-sm">
              A division of the Manti Group & Affiliates Ltd.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-lg">Links</h3>

            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-mg-primary transition-colors"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/artiste-updates"
                  className="hover:text-mg-primary transition-colors"
                >
                  Artiste & Updates
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-mg-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-lg">Connect</h3>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/themantigroup_a?igsh=b2V5NndheXllOTFu&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-[#E4405F] transition-colors"
              >
                <Instagram size={24} />
              </a>

              <a
                href="https://x.com/mantigroup?s=11&t=FSjqdzJXOyuQiKt1AadA2w"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="hover:text-white transition-colors"
              >
                <FaXTwitter size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-mg-secondary flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>
            &copy; {currentYear} The Manti Group & Affiliates Ltd. All rights
            reserved.
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}