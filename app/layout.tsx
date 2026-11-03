import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fiza Rahmatus Sholikha | Portfolio",
  description: "Web & Mobile Developer | Software Quality Assurance Portfolio of Fiza Rahmatus Sholikha",
  icons: {
    icon: "/images/profile.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth h-full antialiased">
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-800">
        {children}
      </body>
    </html>
  );
}
