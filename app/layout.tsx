import type { Metadata } from "next";
import "./globals.css";

// Site metadata for the Next.js app (used for <head> tags and SEO)
export const metadata: Metadata = {
  title: "Profile | Your Name",
  description: "Personal profile and contact",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">{children}</body>
    </html>
  );
}
