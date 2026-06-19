"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { MapPin, Phone, Instagram } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { usePostContact } from "./misc/api/postcontact";
import toast from "react-hot-toast";   // ← Import toast

const inquiryOptions = [
  { value: "Artiste Booking", label: "Artiste Booking" },
  { value: "Press & Media", label: "Press & Media" },
  { value: "Partnership & Sponsorship", label: "Partnership & Sponsorship" },
  { value: "General Inquiry", label: "General Inquiry" },
];

export default function ContactPage() {
  const { mutate, isPending, isSuccess, isError, error } = usePostContact();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate(formData, {
      onSuccess: (data) => {
        toast.success(data.message || "Your message has been sent successfully! 🎉");
        
        setFormData({
          full_name: "",
          email: "",
          subject: "",
          message: "",
        });
        setSubmitted(true);
      },
      onError: (err: Error) => {
        toast.error(err.message || "Failed to send message. Please try again.");
      },
    });
  };

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
            Whether for bookings, press inquiries, or partnerships, the Manti
            team is ready to collaborate.
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
                  <h3 className="text-lg font-bold text-white mb-1 uppercase tracking-wider">
                    Headquarters
                  </h3>
                  <p className="text-mg-muted">London, United Kingdom</p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="p-4 rounded-xl bg-mg-surface border border-mg-secondary group-hover:border-mg-primary group-hover:bg-mg-primary/10 transition-colors">
                  <Phone className="text-mg-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 uppercase tracking-wider">
                    Call Us
                  </h3>
                  <p className="text-mg-muted">+234 (0) 800 MANTI GRP</p>
                  <p className="text-sm text-mg-muted opacity-70 mt-1">
                    Mon-Fri, 9am - 5pm WAT
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-mg-secondary">
              <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">
                Follow Operations
              </h3>

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
          </section>

          {/* Contact Form */}
          <section className="bg-mg-surface p-8 md:p-10 rounded-3xl border border-mg-secondary relative">
            <div className="absolute inset-0 bg-mg-primary/5 blur-3xl rounded-3xl -z-10" />

            <h2 className="text-2xl font-bold uppercase tracking-wider mb-8">
              Send a Message
            </h2>

            {/* Optional: Keep these as backup or remove them since toast is now used */}
            {/* {isSuccess && submitted && (
              <div className="mb-6 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 p-4 text-emerald-300">
                Your message was sent successfully. Thank you!
              </div>
            )} */}

            {isError && (
              <div className="mb-6 rounded-2xl bg-red-500/10 border border-red-500/30 p-4 text-red-300">
                {error?.message ?? "Unable to send your message. Please try again."}
              </div>
            )}

            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="full_name"
                    className="text-sm font-semibold text-mg-muted uppercase tracking-wider"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="full_name"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="bg-[#050505] border border-mg-secondary rounded-xl p-4 text-white focus:outline-none focus:border-mg-primary transition-colors"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-mg-muted uppercase tracking-wider"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="bg-[#050505] border border-mg-secondary rounded-xl p-4 text-white focus:outline-none focus:border-mg-primary transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-semibold text-mg-muted uppercase tracking-wider"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-[#050505] border border-mg-secondary rounded-xl p-4 text-white focus:outline-none focus:border-mg-primary transition-colors appearance-none"
                  required
                >
                  <option value="">Select an inquiry type</option>
                  {inquiryOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-mg-muted uppercase tracking-wider"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="How can we help you?"
                  className="bg-[#050505] border border-mg-secondary rounded-xl p-4 text-white focus:outline-none focus:border-mg-primary transition-colors resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="mt-4 cursor-pointer px-8 py-4 bg-white text-black font-bold uppercase tracking-wider rounded-xl hover:bg-mg-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPending ? "Sending..." : "Send Inquiry"}
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}