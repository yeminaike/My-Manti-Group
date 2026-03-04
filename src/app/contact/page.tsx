"use client";

import { MapPin, Phone, Mail, Instagram, Twitter, Youtube } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen pt-12 pb-24 relative overflow-hidden">
            {/* Background aesthetic */}
            <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-bl from-mg-primary/10 via-transparent to-transparent -z-10" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
                {/* Header */}
                <section className="mb-16 text-center md:text-left">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 uppercase">
                        Let&apos;s <span className="text-mg-primary">Connect</span>
                    </h1>
                    <p className="text-xl text-mg-muted max-w-2xl">
                        Whether for bookings, press inquiries, or partnerships, the Manti Group team is ready to collaborate.
                    </p>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Contact Information */}
                    <section className="flex flex-col gap-10">
                        <div className="grid gap-8">
                            <div className="flex gap-4 items-start group">
                                <div className="p-4 rounded-xl bg-mg-surface border border-mg-secondary group-hover:border-mg-primary group-hover:bg-mg-primary/10 transition-colors">
                                    <MapPin className="text-mg-primary" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1 uppercase tracking-wider">Headquarters</h3>
                                    <p className="text-mg-muted">Lagos, Nigeria</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start group">
                                <div className="p-4 rounded-xl bg-mg-surface border border-mg-secondary group-hover:border-mg-primary group-hover:bg-mg-primary/10 transition-colors">
                                    <Mail className="text-mg-primary" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1 uppercase tracking-wider">Email Us</h3>
                                    <p className="text-mg-muted">info@mantigroup.com (General Inquiries)</p>
                                    <p className="text-mg-muted">bookings@mantigroup.com (Bookings)</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start group">
                                <div className="p-4 rounded-xl bg-mg-surface border border-mg-secondary group-hover:border-mg-primary group-hover:bg-mg-primary/10 transition-colors">
                                    <Phone className="text-mg-primary" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1 uppercase tracking-wider">Call Us</h3>
                                    <p className="text-mg-muted">+234 (0) 800 MANTI GRP</p>
                                    <p className="text-sm text-mg-muted opacity-70 mt-1">Mon-Fri, 9am - 5pm WAT</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-mg-secondary">
                            <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">Follow Operations</h3>
                            <div className="flex gap-4">
                                <a href="#" className="p-3 bg-mg-surface rounded-full border border-mg-secondary hover:border-mg-primary hover:text-mg-primary transition-colors">
                                    <Instagram size={20} />
                                </a>
                                <a href="#" className="p-3 bg-mg-surface rounded-full border border-mg-secondary hover:border-mg-primary hover:text-mg-primary transition-colors">
                                    <Twitter size={20} />
                                </a>
                                <a href="#" className="p-3 bg-mg-surface rounded-full border border-mg-secondary hover:border-mg-primary hover:text-mg-primary transition-colors">
                                    <Youtube size={20} />
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* Contact Form */}
                    <section className="bg-mg-surface p-8 md:p-10 rounded-3xl border border-mg-secondary relative">
                        {/* Glow effect slightly behind the form */}
                        <div className="absolute inset-0 bg-mg-primary/5 blur-3xl rounded-3xl -z-10" />

                        <h2 className="text-2xl font-bold uppercase tracking-wider mb-8">Send a Message</h2>

                        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="text-sm font-semibold text-mg-muted uppercase tracking-wider">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="John Doe"
                                        className="bg-[#050505] border border-mg-secondary rounded-xl p-4 text-white focus:outline-none focus:border-mg-primary transition-colors"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-sm font-semibold text-mg-muted uppercase tracking-wider">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="john@example.com"
                                        className="bg-[#050505] border border-mg-secondary rounded-xl p-4 text-white focus:outline-none focus:border-mg-primary transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="subject" className="text-sm font-semibold text-mg-muted uppercase tracking-wider">Subject</label>
                                <select
                                    id="subject"
                                    className="bg-[#050505] border border-mg-secondary rounded-xl p-4 text-white focus:outline-none focus:border-mg-primary transition-colors appearance-none"
                                >
                                    <option value="">Select an inquiry type</option>
                                    <option value="booking">Artiste Booking</option>
                                    <option value="press">Press & Media</option>
                                    <option value="partnership">Partnership & Sponsorship</option>
                                    <option value="general">General Inquiry</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm font-semibold text-mg-muted uppercase tracking-wider">Message</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    placeholder="How can we help you?"
                                    className="bg-[#050505] border border-mg-secondary rounded-xl p-4 text-white focus:outline-none focus:border-mg-primary transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="mt-4 px-8 py-4 bg-white text-black font-bold uppercase tracking-wider rounded-xl hover:bg-mg-primary transition-colors"
                            >
                                Send Inquiry
                            </button>
                        </form>
                    </section>

                </div>
            </div>
        </div>
    );
}
