import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { QueryProvider } from "@/components/QueryProvider";
import { Toaster } from "react-hot-toast";   // ← Import Toaster
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Manti Group | Premium Entertainment",
  description: "Manti Group is a premier music and entertainment establishment. Home to the boldest voices in modern music.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-sans antialiased bg-black text-white flex flex-col min-h-screen`}>
        <QueryProvider>
          <Navbar />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
          
          {/* Toast Container - Placed at the end for best layering */}
          <Toaster 
            position="top-center"
            toastOptions={{
              duration: 5000,
              style: {
                background: "#1f1f1f",
                color: "#fff",
                border: "1px solid #333",
              },
              success: {
                iconTheme: {
                  primary: "#10b981",
                  secondary: "#fff",
                },
              },
              error: {
                iconTheme: {
                  primary: "#ef4444",
                  secondary: "#fff",
                },
              },
            }}
          />
        </QueryProvider>
      </body>
    </html>
  );
}