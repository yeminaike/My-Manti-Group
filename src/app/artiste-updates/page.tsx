import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Music, ExternalLink } from "lucide-react";
import { ARTISTES } from "@/lib/artistes";


const UPDATES = [
  {
    id: 1,
    title: "Shamz featured in an exclusive interview with The49thStreet",
    type: "Spotlight Monday",
    date: "April 15, 2026",
    readTime: "5 min read",
    href: "https://the49thstreet.com/spotlight-monday-shamz",
  },
  // {
  //   id: 2,
  //   title: "New Album 'Echoes of Lagos' drops worldwide",
  //   type: "Music Release",
  //   date: "March 28, 2026",
  //   readTime: "Listen Now",
  //   href: "#", // Add real link when available
  // },
  // {
  //   id: 3,
  //   title: "Sold out O2 Arena: The Manti Experience",
  //   type: "Event Coverage",
  //   date: "March 10, 2026",
  //   readTime: "3 min read",
  //   href: "#", // Add real link when available
  // },
];

export default function ArtisteUpdatesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-12 pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 w-full mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase">
          Artistes & <span className="text-mg-primary">Updates</span>
        </h1>
        <p className="text-xl text-mg-muted max-w-3xl mx-auto">
          The faces behind the sound. The news behind the brand. Discover the latest from Manti&apos;s roster and operations.
        </p>
      </section>

      {/* Roster Section */}
      <section className="mb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12 border-b border-mg-secondary pb-4">
            <Music className="text-mg-primary" size={32} />
            <h2 className="text-3xl font-bold uppercase tracking-wider">The Roster</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {ARTISTES.map((artiste) => (
              <Link
                key={artiste.id}
                href={`/artiste-updates/${artiste.slug}`}
                className="group w-full relative overflow-hidden h-[550px] rounded-xl aspect-[4/5] bg-mg-surface border border-mg-secondary block"
              >
                {/* Artist Image */}
                <Image
                  src={artiste.src}
                  alt={artiste.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#050505] -z-10" />
                <div className="absolute inset-0 opacity-20 hidden group-hover:block blur-xl transition-all duration-500 overflow-hidden">
                  <div className="w-full h-full bg-mg-primary rounded-full transform scale-150 translate-y-1/2" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90 z-10" />
                <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex justify-between items-end transform group-hover:-translate-y-2 transition-transform duration-300">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-mg-primary group-hover:to-white transition-all">
                      {artiste.name}
                    </h3>
                    <p className="text-sm text-mg-muted">{artiste.role}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-mg-secondary flex items-center justify-center group-hover:bg-mg-primary group-hover:text-black transition-colors">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Updates Section */}
      {/* <section className="bg-mg-surface py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-mg-accent/5 blur-[150px] pointer-events-none rounded-full" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-4 mb-12 border-b border-mg-secondary/50 pb-4">
            <Calendar className="text-mg-primary" size={32} />
            <h2 className="text-3xl font-bold uppercase tracking-wider">Latest News</h2>
          </div>

          <div className="flex flex-col gap-6">
            {UPDATES.map((update) => (
              <a
                key={update.id}
                href={update.href}
                target={update.href?.startsWith("http") ? "_blank" : undefined}
                rel={update.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center p-6 md:p-8 rounded-2xl bg-[#0a0a0a] border border-mg-secondary hover:border-mg-primary transition-colors no-underline"
              >
                <div className="text-mg-muted hidden md:flex flex-col items-center justify-center min-w-24 px-4 border-r border-mg-secondary group-hover:text-white transition-colors">
                  <span className="text-sm uppercase tracking-widest block mb-1">Date</span>
                  <span className="font-bold text-center leading-tight">{update.date}</span>
                </div>

                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2 md:mb-3">
                    <span className="px-3 py-1 bg-mg-secondary text-xs font-bold tracking-wider rounded-full text-white">
                      {update.type}
                    </span>
                    <span className="text-xs text-mg-muted md:hidden">{update.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-mg-primary transition-colors mb-2">
                    {update.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-mg-muted">
                    <span>{update.readTime}</span>
                  </div>
                </div>

                <div className="self-end md:self-center">
                  <div className="flex items-center gap-2 px-5 py-3 rounded-full border border-mg-secondary text-white group-hover:bg-mg-primary group-hover:text-black group-hover:border-mg-primary transition-all font-semibold">
                    {update.readTime === "Listen Now" ? "Listen Now" : "Read More"}
                    <ExternalLink size={16} />
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="px-8 py-4 bg-transparent border-2 border-mg-secondary text-white font-bold tracking-wider uppercase rounded-full hover:bg-mg-surface hover:border-white transition-all">
              Load More Updates
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
}