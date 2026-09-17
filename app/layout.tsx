import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BackgroundFlow from "@/components/BackgroundFlow"; // 👈 Import the new component
import CanvasFlowField from "@/components/BackgroundFlow";

export const metadata: Metadata = {
  metadataBase: new URL("https://charukhesh.github.io/Charukhesh_Portfolio"),
  title: "Charukhesh B R | AI / ML Research Engineer",
  description: "Portfolio of Charukhesh B R, AI/ML Research Engineer at IIT Madras. Specializing in Robotics, Stochastic Control, Generative Models, and Quantitative Systems.",
  keywords: [
    "Charukhesh", 
    "Charukhesh B R", 
    "Charukhesh IIT Madras", 
    "Charukhesh Rakesh",
    "AI Research Engineer", 
    "Machine Learning", 
    "Robotics", 
    "SUAS IITM"
  ],
  verification: {
    google: "kqIvk6ZgSmfjGbzXXXO4uIHjmE4uIiHOXpuIpTpCGfA",
  },
  openGraph: {
    title: "Charukhesh B R | AI / ML Research Engineer",
    description: "Building intelligent systems at the intersection of robotics, machine learning, and control.",
    url: "https://charukhesh.github.io/Charukhesh_Portfolio/",
    siteName: "Charukhesh B R Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-bg text-ink antialiased selection:bg-accent/30 selection:text-accent">
        
        {/* 👉 ADD THE BACKGROUND SIMULATION HERE 👈 */}
        <BackgroundFlow/>

        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}