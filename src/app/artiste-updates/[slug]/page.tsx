import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ARTISTES, getArtisteBySlug } from "@/lib/artistes";
import { notFound } from "next/navigation";

// React Icons
import { SiSpotify } from "react-icons/si";
import { FaInstagram, FaYoutube, FaApple } from "react-icons/fa";

export function generateStaticParams() {
    return ARTISTES.map((artiste) => ({ slug: artiste.slug }));
}

export default async function ArtisteBioPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const artiste = getArtisteBySlug(slug);

    if (!artiste) notFound();

    return (
        <div className="min-h-screen bg-black text-white">

            {/* ── HERO ── */}
            <section className="relative h-screen w-full overflow-hidden">

                {/* Background artist image */}
                <Image
                    src={artiste.src}
                    alt={artiste.name}
                    fill
                    className="object-cover"
                    priority
                />

                {/* Dark + Gold gradient overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" /> */}

                {/* Gold accent glows */}
                {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#f5c300_0%,transparent_65%)] opacity-35" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,#f5c300_0%,transparent_75%)] opacity-20" /> */}

                {/* Left-side black fade */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />

                {/* Bottom black fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent" />

                {/* Extra darkening for better text readability */}
                <div className="absolute inset-0 bg-black/20" />

                {/* Gold accent glows */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#f5c300_0%,transparent_60%)] opacity-20" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_right,#f5c300_0%,transparent_70%)] opacity-10" />



                {/* Nav back link */}
                <div className="absolute top-8 left-0 right-0 max-w-7xl mx-auto px-6 lg:px-8">
                    <Link
                        href="/artiste-updates"
                        className="inline-flex items-center gap-2 text-white hover:text-mg-primary transition-colors"
                    >
                        <ArrowLeft size={18} /> Back to Artists
                    </Link>
                </div>

                {/* Hero Content - Bottom Left */}
                <div className="absolute bottom-16 left-0 right-0 max-w-7xl mx-auto px-6 lg:px-8 space-y-6">

                    {/* Genre Tag */}
                    <span className="inline-flex px-4 py-2 rounded-full bg-mg-primary/15 text-mg-primary uppercase tracking-[0.3em] text-xs font-semibold border border-mg-primary/20">
                        {artiste.role}
                    </span>

                    {/* Artist Name */}
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
                        {artiste.name}
                    </h1>

                    {/* Headline */}
                    {/* <p className="text-lg text-mg-muted max-w-xl">{artiste.headline}</p> */}

                    {/* Monthly Listeners */}
                    <div className="flex items-center gap-2 text-mg-muted">
                        {/* <span className="text-xl">👥</span> */}
                        {/* <span className="text-lg font-medium">1.2M monthly listeners</span> */}
                    </div>

                    {/* Platform Icons */}
                    <div className="flex gap-4 pt-2">
                        <a
                            href={artiste.socials.spotify}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${artiste.name} on Spotify`}
                            className="text-mg-muted hover:text-[#1DB954] transition-colors"
                        >
                            <SiSpotify size={32} />
                        </a>

                        <a
                            href={artiste.socials.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${artiste.name} on Instagram`}
                            className="text-mg-muted hover:text-[#E4405F] transition-colors"
                        >
                            <FaInstagram size={32} />
                        </a>

                        <a
                            href={artiste.socials.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${artiste.name} on YouTube`}
                            className="text-mg-muted hover:text-[#FF0000] transition-colors"
                        >
                            <FaYoutube size={32} />
                        </a>

                        <a
                            href={artiste.socials.apple}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${artiste.name} on Apple Music`}
                            className="text-mg-muted hover:text-white transition-colors"
                        >
                            <FaApple size={32} />
                        </a>
                    </div>
                </div>
            </section>

            {/* ── ABOUT SECTION ── */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 space-y-16">

                <div className="max-w-2xl space-y-4">
                    <h2 className="text-3xl font-bold">About</h2>
                    <p className="text-base leading-8 text-mg-muted">{artiste.about}</p>
                </div>

                {/* ── CTA CARD ── */}
                <div className="rounded-3xl border border-mg-secondary bg-[#0d0d0d] p-12 flex flex-col items-center text-center gap-6">
                    <h3 className="text-3xl font-bold">
                        Want to Work with {artiste.name}?
                    </h3>
                    <p className="text-mg-muted max-w-md">
                        Get in touch with Manti for bookings,
                        collaborations, and press inquiries.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-mg-primary hover:text-white transition-colors"
                    >
                        Contact Us
                    </Link>
                </div>

            </section>
        </div>
    );
}