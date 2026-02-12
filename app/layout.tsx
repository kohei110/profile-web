import type { Metadata } from "next";
import "./globals.css";

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
