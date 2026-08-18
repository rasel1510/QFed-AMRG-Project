import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QFed-AMRG: Quantum Federated Driven VLM for Privacy Preserving Clinical Report Generation | WACV 2026",
  description: "Official research website for QFed-AMRG: A communication-efficient quantum federated vision-language architecture for privacy-preserving multi-client clinical report generation.",
  keywords: [
    "QFed-AMRG",
    "Quantum Federated Learning",
    "Vision Language Models",
    "Clinical Report Generation",
    "Medical Imaging AI",
    "MIMIC-CXR",
    "IU X-Ray",
    "WACV 2026",
    "QML",
    "Privacy Preserving AI"
  ],
  authors: [
    { name: "Dip Kumar Saha" },
    { name: "Mohammad Rasel Ahmed" },
    { name: "Md. Kishore Morol" }
  ],
  openGraph: {
    title: "QFed-AMRG: Quantum Federated Driven VLM for Privacy Preserving Clinical Report Generation",
    description: "Quantum federated vision language model achieving state-of-the-art medical correctness and privacy preservation on clinical report generation.",
    images: ["/diagrams/main diagram.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-slate-950 text-slate-100 antialiased font-['Outfit',sans-serif] selection:bg-teal-500/30 selection:text-teal-200">
        {children}
      </body>
    </html>
  );
}
