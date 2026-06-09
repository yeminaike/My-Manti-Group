import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <p className="text-sm uppercase tracking-[0.35em] text-mg-primary/70 mb-5">About Us</p>
                    <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tight">
                        Who We Are
                    </h1>
                </div>

                <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr] items-center">
                    <div className="space-y-8">
                        <div>

                            <p className="text-lg leading-9 text-mg-muted">
                                MANTI - Musicians Across Nations & other Talented Individuals - is the music arm of
                                TMGA Limited focused on building lasting relationships with like minded creatives on
                                a path of growth & expansion.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-full bg-mg-primary px-8 py-4 text-black font-bold hover:bg-white transition-colors"
                            >
                                Contact Us
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Logo card — contains the logo centered with breathing room */}
                    <div className="relative flex items-center justify-center overflow-hidden rounded-[2rem] h-[360px] border border-white/20  p-10">
                        <Image
                            src="/images/LekeLogo2.png"
                            alt="MANTI Logo"
                            fill
                            className="object-contain p-10"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}