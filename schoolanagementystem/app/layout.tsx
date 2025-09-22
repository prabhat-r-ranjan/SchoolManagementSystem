import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SDRS School of Excellence | Premium Education in Sasaram",
  description: "SDRS School of Excellence offers world-class education with state-of-the-art facilities. Premier CBSE/ICSE curriculum, experienced faculty, and holistic development for students.",
  keywords: "international school, premium education, Sasaram schools, best school in Sasram, CBSE school, ICSE school",
  authors: [{ name: "SDRS School of Excellence" }],
  openGraph: {
    title: "SDRS School of Excellence | Premium Education in Sasaram",
    description: "Experience excellence in education with world-class facilities and experienced faculty at SD International School.",
    type: "website",
    locale: "en_IN",
    siteName: "SDRS School of Excellence",
  },
};
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
</head>
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
