import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen -mt-20 pt-20 flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center  z-20"
        >
          <source src="/videos/land.mp4" type="video/mp4" />
        </video>

        {/* Background elements */}
        <div className="absolute inset-0 bg-mg-bg z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mg-bg/30 to-mg-bg/80 z-10 pointer-events-none" />

        {/* Abstract decorative shapes */}
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-mg-primary/10 rounded-full blur-[120px] z-0 animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-mg-accent/10 rounded-full blur-[120px] z-0 animate-pulse delay-1000" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
          <span className="text-mg-primary font-semibold tracking-widest uppercase text-sm mb-6 animate-fade-in-up">
            Welcome To
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 leading-none bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-300 to-gray-600">
            MANTI
          </h1>
          <p className="text-lg md:text-xl text-mg-muted max-w-2xl mb-12 animate-fade-in-up delay-200">
            A division of the Manti Group & Affiliates Limited
          </p>
          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up delay-300">
            <Link
              href="/artiste-updates"
              className="px-8 py-4 bg-mg-primary text-black font-bold rounded-full hover:bg-white transition-all transform hover:scale-105 flex items-center justify-center gap-2 group"
            >
              Discover Artistes
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-transparent border border-mg-secondary text-white font-bold rounded-full hover:bg-mg-secondary transition-all flex items-center justify-center gap-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Artists Section */}
    {/* Featured Artists Section */}
<section className="py-24 bg-mg-bg relative">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="flex justify-between items-end mb-16">
      <div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Featured <span className="text-mg-primary">Artistes</span>
        </h2>
      </div>

      {/* View All button removed for now */}
      {/*
      <Link
        href="/artiste-updates"
        className="hidden md:flex items-center gap-2 text-mg-muted hover:text-mg-primary transition-colors"
      >
        View All <ArrowRight size={16} />
      </Link>
      */}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        {
          name: "Shamz",
          src: "/images/Shamz.jpeg",
        },
        {
          name: "Teddie Bankz",
          src: "/images/Teddy.jpeg",
        },

        
      ].map((art, idx) => (
        <div
          key={art.name + idx}
          className="cursor-pointer group relative overflow-hidden rounded-2xl h-[550px] bg-mg-surface transform transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
        >
          {/* Image */}
          <div className="absolute inset-0">
            <Image
              src={art.src}
              alt={art.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 opacity-80 group-hover:opacity-90 transition-opacity" />

          {/* Artist Name */}
          <div className="absolute bottom-0 left-0 p-8 z-20 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-3xl font-bold text-white">
              {art.name}
            </h3>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Latest Updates Section */}
      <section className="py-24 bg-mg-surface relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Latest <span className="text-mg-primary">Updates</span></h2>
            <p className="text-mg-muted">Releases  events from Manti.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Featured Feature */}
            <div className="relative group overflow-hidden rounded-2xl aspect-video bg-[#0a0a0a] border border-mg-secondary">
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-16 h-16 rounded-full bg-mg-primary/90 flex items-center justify-center text-black transform group-hover:scale-110 transition-transform cursor-pointer shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                  <Play size={24} className="ml-1" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <span className="px-3 py-1 bg-white text-black text-xs font-bold tracking-wider rounded-full mb-4 inline-block">MUSIC VIDEO</span>
                <h3 className="text-2xl font-bold text-white">New Release: The Global Anthem</h3>
              </div>
            </div>

            {/* List Updates */}
            <div className="flex flex-col gap-6 justify-center">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-6 items-center group cursor-pointer p-4 rounded-xl hover:bg-mg-secondary/50 transition-colors border border-transparent hover:border-mg-secondary">
                  <div className="w-24 h-24 rounded-lg bg-mg-bg flex-shrink-0 flex items-center justify-center text-mg-muted relative overflow-hidden">
                    {/* Placeholder for small thumbnail */}
                    <div className="absolute inset-0 bg-gradient-to-br from-mg-secondary to-black" />
                  </div>
                  <div>
                    <span className="text-mg-primary text-xs font-semibold tracking-wider mb-2 block">PRESS RELEASE</span>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-mg-primary transition-colors">Manti Group signs multi-million dollar distribution deal</h4>
                    <p className="text-sm text-mg-muted">March {10 + i}, 2026</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/artiste-updates" className="inline-flex items-center gap-2 text-mg-primary hover:text-white font-semibold transition-colors border-b border-mg-primary hover:border-white pb-1">
              Read All Updates <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
