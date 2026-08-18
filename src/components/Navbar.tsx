"use client";

import { useState, useEffect } from "react";
import { FileText, Github, Sparkles, BookOpen, Layers, BarChart3, Database, Copy, Check, ShieldCheck, Cpu } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [copiedBib, setCopiedBib] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyBibtex = () => {
    const bibtex = `@inproceedings{saha2026qfedamrg,
  title={QFed-AMRG: Quantum Federated Driven VLM for Privacy Preserving Clinical Report Generation},
  author={Saha, Dip Kumar and Ahmed, Mohammad Rasel and Morol, Md. Kishore},
  booktitle={IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)},
  year={2026}
}`;
    navigator.clipboard.writeText(bibtex);
    setCopiedBib(true);
    setTimeout(() => setCopiedBib(false), 2500);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand logo & Conference Badge */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 via-cyan-500 to-indigo-600 p-[1px] shadow-lg shadow-teal-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
              <Cpu className="w-5 h-5 text-teal-400 group-hover:rotate-45 transition-transform duration-500" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold tracking-tight text-white text-lg font-mono">QFed-AMRG</span>
              <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-teal-500/10 text-teal-300 border border-teal-500/30 rounded-full">
                WACV 2026
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">Quantum Federated VLM for Medical Imaging</p>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-slate-300 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
          <a href="#abstract" className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-slate-800/60 transition-colors">
            Abstract
          </a>
          <a href="#architecture" className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-slate-800/60 transition-colors">
            Architecture
          </a>
          <a href="#method" className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-slate-800/60 transition-colors">
            QREM & AMB
          </a>
          <a href="#demo" className="px-3.5 py-1.5 rounded-full text-teal-300 hover:text-teal-200 hover:bg-teal-950/40 border border-teal-500/20 transition-colors flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Interactive Simulator
          </a>
          <a href="#results" className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-slate-800/60 transition-colors">
            Benchmarks
          </a>
          <a href="#datasets" className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-slate-800/60 transition-colors">
            Datasets
          </a>
        </nav>

        {/* Right CTAs */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={copyBibtex}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-slate-900 border border-slate-700 text-slate-200 hover:border-slate-500 hover:text-white transition-all shadow-sm"
            title="Copy BibTeX Citation"
          >
            {copiedBib ? <Check className="w-3.5 h-3.5 text-teal-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{copiedBib ? "Copied!" : "Cite"}</span>
          </button>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 hover:opacity-95 transition-all shadow-lg shadow-teal-500/20"
          >
            <Github className="w-4 h-4" />
            <span className="hidden sm:inline">Code / GitHub</span>
          </a>
        </div>

      </div>
    </header>
  );
}
