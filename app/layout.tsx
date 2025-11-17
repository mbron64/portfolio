import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Michael Bronikowski | AI Researcher × Entrepreneur × Beekeeper",
  description: "AI researcher and entrepreneur bridging cutting-edge machine learning with environmental impact. Building production AI systems in enterprise healthcare while advancing research in LLM truthfulness, agentic AI, and sustainable beekeeping.",
  keywords: [
    "Michael Bronikowski",
    "AI Research",
    "Machine Learning",
    "Entrepreneurship",
    "BuzzHive",
    "NYU Langone",
    "Binghamton University",
    "Sustainable Beekeeping",
    "LLM",
    "Agentic AI",
  ],
  authors: [{ name: "Michael Bronikowski" }],
  openGraph: {
    title: "Michael Bronikowski | AI Researcher × Entrepreneur × Beekeeper",
    description: "AI researcher and entrepreneur bridging cutting-edge machine learning with environmental impact.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
