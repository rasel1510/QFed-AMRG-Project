"use client";

import { FileText, Database } from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";

export default function Hero() {
  const authors = [
    {
      name: "Mohammad Rasel Ahmed",
      affiliations: [
        "Elite Research Lab, NY, USA",
        "Stamford University Bangladesh"
      ]
    },
    {
      name: "Dip Kumar Saha*",
      affiliations: [
        "Elite Research Lab, NY, USA",
        "Stamford University Bangladesh"
      ]
    },
    {
      name: "Md. Kishor Morol*",
      affiliations: [
        "Elite Research Lab, NY, USA",
        "Cornell University, NY, USA"
      ]
    }
  ];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-gradient-to-b from-slate-50/80 via-white to-white overflow-hidden">
      {/* Background Decorative Ambient Glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-emerald-100/50 via-teal-100/40 to-indigo-100/40 blur-3xl opacity-70 pointer-events-none rounded-full" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Giant Main Brand Name */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black bg-gradient-to-r from-emerald-800 via-teal-700 to-indigo-800 bg-clip-text text-transparent tracking-tight mb-5 font-sans">
          QFed-AMRG
        </h1>

        {/* Paper Title / Subtitle */}
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 max-w-4xl mx-auto leading-snug sm:leading-tight mb-10">
          Quantum Federated Driven VLM for Privacy Preserving Clinical Report Generation
        </h2>

        {/* Authors Section */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-center">
            {authors.map((author, idx) => (
              <div 
                key={idx} 
                className="p-4 rounded-2xl bg-white/80 backdrop-blur-xs border border-slate-200/80 shadow-xs hover:shadow-md hover:border-emerald-300 hover:bg-emerald-50/20 transition-all duration-200 space-y-1.5"
              >
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                  {author.name}
                </h3>
                <div className="text-[12px] font-medium leading-tight space-y-1">
                  {author.affiliations.map((aff, aIdx) => (
                    <p key={aIdx} className={aIdx === 0 ? "text-slate-700 font-semibold" : "text-emerald-700 font-medium"}>
                      {aff}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-10">
          <a
            href="#paper-preview"
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-700 to-teal-700 hover:from-emerald-800 hover:to-teal-800 text-white font-bold text-sm shadow-md shadow-emerald-700/20 hover:shadow-lg transition-all"
          >
            <FileText className="w-4 h-4 text-white" />
            <span>Paper</span>
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md shadow-slate-900/20 hover:shadow-lg transition-all"
          >
            <GithubIcon className="w-4 h-4 text-white" />
            <span>GitHub Code</span>
          </a>

          <a
            href="#datasets"
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white border border-slate-300 hover:border-slate-400 text-slate-800 hover:bg-slate-50 font-bold text-sm shadow-sm transition-all"
          >
            <Database className="w-4 h-4 text-emerald-700" />
            <span>Dataset (HF)</span>
          </a>
        </div>

      </div>
    </section>
  );
}

