"use client";

import { useState, useEffect } from "react";
import { FileText, BookOpen, Layers, BarChart3, Database, Copy, Check, Cpu } from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm py-3" : "bg-white py-4 border-b border-slate-100"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-emerald-700 flex items-center justify-center text-white shadow-xs">
            <BookOpen className="w-4 h-4" />
          </div>
          <span className="font-extrabold tracking-tight text-slate-900 text-xl font-sans group-hover:text-emerald-700 transition-colors">
            QFed-AMRG
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          <a href="#abstract" className="hover:text-emerald-700 transition-colors">
            Abstract
          </a>
          <a href="#architecture" className="hover:text-emerald-700 transition-colors">
            Highlights
          </a>
          <a href="#datasets" className="hover:text-emerald-700 transition-colors">
            Dataset
          </a>
          <a href="#results" className="hover:text-emerald-700 transition-colors">
            Result
          </a>
          <a href="#citation" className="hover:text-emerald-700 transition-colors">
            Citation
          </a>
        </nav>

        {/* Right Action Pills */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-slate-300 hover:text-slate-900 transition-all shadow-xs"
          >
            <GithubIcon className="w-3.5 h-3.5 text-slate-600" />
            <span>Code</span>
          </a>

          <a
            href="#paper-preview"
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-emerald-700 text-white hover:bg-emerald-800 transition-all shadow-xs"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Paper</span>
          </a>
        </div>

      </div>
    </header>
  );
}
