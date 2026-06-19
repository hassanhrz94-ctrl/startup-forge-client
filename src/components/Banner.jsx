'use client';

import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-[#0B0B0F]">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute left-10 top-20 h-72 w-72 animate-pulse rounded-full bg-violet-600/20 blur-3xl"></div>
        <div className="absolute right-10 top-40 h-80 w-80 animate-pulse rounded-full bg-fuchsia-600/20 blur-3xl delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 animate-pulse rounded-full bg-blue-600/10 blur-3xl"></div>
      </div>

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl items-center px-6 py-20 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
              🚀 Startup Team Builder Platform
            </div>

            <h1 className="mb-6 text-5xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">
              Build Your
              <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                Startup Dream Team
              </span>
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-400">
              StartupForge helps founders publish startup ideas, recruit
              talented collaborators, and build high-performing teams.
              Developers, designers, marketers, and innovators can discover
              exciting opportunities and join promising startups.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/jobs"
                className="rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-gray-200"
              >
                Explore Opportunities
              </Link>

              <Link
                href="/auth/signup"
                className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-violet-500/30 hover:bg-white/10"
              >
                Start Building
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-8">
              <div>
                <h3 className="text-3xl font-bold text-white">500+</h3>
                <p className="text-gray-500">Startup Ideas</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">2K+</h3>
                <p className="text-gray-500">Professionals</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">150+</h3>
                <p className="text-gray-500">Active Teams</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative hidden lg:flex justify-center">
            <div className="relative animate-[float_6s_ease-in-out_infinite]">
              {/* Main Card */}
              <div className="w-[420px] rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl bg-violet-500/10 p-4">
                    <h3 className="font-semibold text-white">
                      AI Startup Founder
                    </h3>
                    <p className="mt-2 text-sm text-gray-400">
                      Looking for React, Next.js & UI/UX Designers
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/5 p-4">
                    <h3 className="font-semibold text-white">
                      Team Members Applied
                    </h3>

                    <div className="mt-3 space-y-2">
                      <div className="rounded-lg bg-white/5 p-3 text-sm text-gray-300">
                        Frontend Developer
                      </div>

                      <div className="rounded-lg bg-white/5 p-3 text-sm text-gray-300">
                        Product Designer
                      </div>

                      <div className="rounded-lg bg-white/5 p-3 text-sm text-gray-300">
                        Growth Marketer
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-green-500/10 p-4">
                    <p className="font-medium text-green-400">
                      ✓ Team Successfully Formed
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -left-10 top-12 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl">
                <span className="text-sm text-white">
                  💡 Startup Idea Posted
                </span>
              </div>

              <div className="absolute -right-12 bottom-12 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl">
                <span className="text-sm text-white">
                  🚀 Team Growing
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-18px);
          }
        }
      `}</style>
    </section>
  );
};

export default Banner;