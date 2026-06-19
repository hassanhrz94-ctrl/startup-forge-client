import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative border-t border-purple-500/10 bg-[#09090e] text-gray-400">
      {/* Ambient Background Glow */}
      <div className="absolute top-0 left-1/4 -z-10 h-px w-1/2 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-flex items-center gap-3 group">
                {/* Purple Logo Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-700 shadow-lg shadow-purple-600/20 transition-transform duration-300 group-hover:scale-105">
                  <span className="font-bold text-white text-lg tracking-wider">SF</span>
                </div>
                {/* Brand Name */}
                <h2 className="text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-purple-400">
                  StartupForge
                </h2>
              </Link>

              <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
                Build startup teams, discover unique opportunities, and connect ambitious founders with world-class talent.
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-5">
              {["LinkedIn", "GitHub", "Twitter"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="text-xs font-medium uppercase tracking-wider text-gray-500 transition-colors duration-200 hover:text-purple-400"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white">
              Product
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                { label: "Opportunities", href: "/jobs" },
                { label: "Startups", href: "/company" },
                { label: "Pricing", href: "/pricing" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-purple-500/5 pt-8 text-xs text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} StartupForge. All rights reserved.</p>
          <p className="text-gray-600">
            Built for founders, developers, designers & innovators.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;