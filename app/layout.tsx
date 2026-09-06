import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RK Interiors | Interior Designers in Patna",
  description:
    "Premium residential and commercial interior design and execution services in Patna by RK Interiors.",
  icons: {
    icon: [
      { url: "/favicon.jpg", sizes: "any", type: "image/jpeg" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen bg-ivory text-charcoal font-sans">
        {children}
      </body>
    </html>
  );
}
